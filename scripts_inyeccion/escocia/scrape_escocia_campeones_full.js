const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const temporadasFile = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/escocia_temporadas.json';
const dbFolder = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas';

// Diccionario para normalizar equipos (algunos capaz necesitemos corregirlos a mano si la DB requiere nombres exactos)
// The UI matches 'campeon' string either literally or by toId(). It's usually exact team name, e.g. "Rangers", "Celtic".
const mapeo = {
  "Rangers": "Rangers",
  "Celtic": "Celtic",
  "Aberdeen": "Aberdeen",
  "Heart of Midlothian": "Hearts",
  "Hibernian": "Hibernian",
  "Dumbarton": "Dumbarton",
  "Motherwell": "Motherwell",
  "Kilmarnock": "Kilmarnock",
  "Dundee": "Dundee",
  "Dundee United": "Dundee United",
  "Third Lanark": "Third Lanark",
  "Renton": "Renton",
  "Vale of Leven": "Vale of Leven",
  "Queen's Park": "Queen's Park",
  "St Bernard's": "St Bernard's",
  "St Mirren": "St Mirren",
  "Airdrieonians (1878)": "Airdrieonians",
  "Airdrieonians": "Airdrieonians",
  "Greenock Morton": "Morton",
  "Morton": "Morton",
  "Partick Thistle": "Partick Thistle",
  "Falkirk": "Falkirk",
  "Clyde": "Clyde",
  "East Fife": "East Fife",
  "Dunfermline Athletic": "Dunfermline Athletic",
  "Raith Rovers": "Raith Rovers",
  "Inverness Caledonian Thistle": "Inverness CT",
  "Livingston": "Livingston",
  "St Johnstone": "St Johnstone",
  "Ross County": "Ross County"
};

const normalize = (name) => {
  let cleaned = name.trim().replace(/ F\.C\.$/, '').replace(/ F\.C$/, '').replace(/ A\.F\.C\.$/, '').trim();
  if (mapeo[cleaned]) return mapeo[cleaned];
  return cleaned;
};

async function createTemporadas() {
  let temporadasTotales = [];

  // Scrape Scottish League (1890 - present)
  // Wiki: https://en.wikipedia.org/wiki/List_of_Scottish_football_champions
  console.log("Scraping Scottish League...");
  try {
    const res = await fetch('https://en.wikipedia.org/api/rest_v1/page/html/List_of_Scottish_football_champions');
    const html = await res.text();
    const $ = cheerio.load(html);

    // Iterar las tablas de campeones
    $('table.wikitable').each((i, table) => {
      // Find rows
      $(table).find('tr').each((j, row) => {
        const tds = $(row).find('td');
        if (tds.length >= 3) {
          const yearRaw = $(tds[0]).text().trim(); // e.g. "1890–91" or "1890–91[a]"
          const champRaw = $(tds[1]).text().trim(); // e.g. "Dumbarton (1) & Rangers (1)"
          
          if (!yearRaw.match(/^[0-9]{4}/)) return; // skip header or invalid rows

          const year = yearRaw.substring(0, 4);

          // Handle shared titles / multiple teams
          if (champRaw.includes('&')) {
            const champs = champRaw.split('&').map(c => c.split('(')[0].trim());
            champs.forEach(c => {
               temporadasTotales.push({
                 id: `${yearRaw.substring(0,4)}-scottish-league-${normalize(c).toLowerCase().replace(/ /g, '-')}`,
                 anio: yearRaw.substring(0,4),
                 torneo: "Scottish League",
                 campeon: normalize(c),
                 tabla_posiciones: []
               });
            });
          } else {
             const c = champRaw.split('(')[0].trim();
             temporadasTotales.push({
               id: `${yearRaw.substring(0,4)}-scottish-league`,
               anio: yearRaw.substring(0,4),
               torneo: "Scottish League",
               campeon: normalize(c),
               tabla_posiciones: []
             });
          }
        }
      });
    });
  } catch (e) { console.error('Error League', e); }

  // Scrape Scottish Cup (1873-present)
  // Wiki: https://en.wikipedia.org/wiki/List_of_Scottish_Cup_finals
  console.log("Scraping Scottish Cup...");
  try {
    const res2 = await fetch('https://en.wikipedia.org/api/rest_v1/page/html/List_of_Scottish_Cup_finals');
    const html2 = await res2.text();
    const $2 = cheerio.load(html2);
    
    $2('table.sortable, table.wikitable').each((i, table) => {
      $2(table).find('tr').each((j, row) => {
        const tds = $2(row).find('td');
        const ths = $2(row).find('th'); // Sometimes year is in th
        
        let yearText = '';
        let champText = '';
        
        if (ths.length > 0 && tds.length > 2) {
          yearText = $2(ths[0]).text();
          champText = $2(tds[0]).text(); // Assuming Winner is first td
        } else if (tds.length >= 3) {
          yearText = $2(tds[0]).text();
          champText = $2(tds[1]).text(); 
        }

        if(!yearText.trim().match(/^[0-9]{4}/)) return;

        let curYear = yearText.trim().replace(/\[.*?\]/g, '').substring(0, 4);
        let champ = champText.trim().replace(/\[.*?\]/g, '').replace(/\([^\)]+\)/g, '').trim();

        // Si es no disputada (Not Played) o algo raro, skip
        if(champ.toLowerCase().includes('not played') || champ.toLowerCase().includes('abandonado') || champ === '') return;
        if(curYear.length < 4) return;

        temporadasTotales.push({
          id: `${curYear}-scottish-cup`,
          anio: curYear,
          torneo: "Scottish Cup",
          campeon: normalize(champ),
          tabla_posiciones: []
        });
      });
    });
  } catch (e) { console.log('Error Cup', e); }

  // Scrape League Cup (1946 - present)
  // Wiki: https://en.wikipedia.org/wiki/List_of_Scottish_League_Cup_finals
  console.log("Scraping League Cup...");
  try {
    const res3 = await fetch('https://en.wikipedia.org/api/rest_v1/page/html/List_of_Scottish_League_Cup_finals');
    const html3 = await res3.text();
    const $3 = cheerio.load(html3);
    
    $3('table.sortable, table.wikitable').each((i, table) => {
      $3(table).find('tr').each((j, row) => {
        const ths = $3(row).find('th');
        const tds = $3(row).find('td');
        let yearText = '';
        let champText = '';
        
        if (ths.length > 0 && tds.length > 0) {
          yearText = $3(ths[0]).text();
          champText = $3(tds[1]).text(); // In this table, Usually Year is TH, Winner is TD[1] (after Image TD[0]). Wait, let's verify.
        } else if (tds.length >= 2) {
          yearText = $3(tds[0]).text();
          champText = $3(tds[1]).text(); // If no image column.
        }

        if(!yearText.trim().match(/^[0-9]{4}/)) return;

        let curYear = yearText.trim().replace(/\[.*?\]/g, '').substring(0, 4);
        let champ = champText.trim().replace(/\[.*?\]/g, '').replace(/\([^\)]+\)/g, '').trim();
        
        if(champ.toLowerCase().includes('not played') || champ.toLowerCase().includes('cruz') || champ === '') return;
        if(curYear.length < 4) return;

        temporadasTotales.push({
          id: `${curYear}-league-cup`,
          anio: curYear,
          torneo: "Scottish League Cup",
          campeon: normalize(champ),
          tabla_posiciones: []
        });
      });
    });
  } catch (e) { console.log('Error League Cup', e); }

  // Clean, group, sort
  // Some Wikipedia tables might have dupes if we parsed them weird.
  const uniqueIds = new Set();
  const finalTemporadas = [];
  
  temporadasTotales.forEach(t => {
     // Validate
     if(["The", "-", "A", "n/a", ""].includes(t.campeon)) return;
     if (t.campeon.length > 30) return; // Weird html scrape error
     if(!uniqueIds.has(t.id)) {
        uniqueIds.add(t.id);
        finalTemporadas.push(t);
     }
  });

  // Sort by year ascending, then by tournament name
  finalTemporadas.sort((a,b) => {
     let yearDiff = parseInt(a.anio) - parseInt(b.anio);
     if(yearDiff === 0) return a.torneo.localeCompare(b.torneo);
     return yearDiff;
  });

  // Write file
  if (!fs.existsSync(dbFolder)) {
    fs.mkdirSync(dbFolder, { recursive: true });
  }

  fs.writeFileSync(temporadasFile, JSON.stringify(finalTemporadas, null, 2), 'utf8');
  console.log(`Saved ${finalTemporadas.length} seasons into escocia_temporadas.json.`);
}

createTemporadas();
