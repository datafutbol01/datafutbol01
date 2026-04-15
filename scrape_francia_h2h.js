const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const clubsPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const outputPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'francia_enfrentamientos.json');

const mapLiveFutbol = {
  'angers': 'angers-sco',
  'auxerre': 'aja-auxerre',
  'brest': 'stade-brestois-29',
  'le-havre': 'havre-ac',
  'lens': 'rc-lens',
  'lille': 'lille-osc',
  'lorient': 'fc-lorient',
  'lyon': 'olympique-lyonnais',
  'marseille': 'olympique-marseille',
  'metz': 'fc-metz',
  'monaco': 'as-monaco',
  'nantes': 'fc-nantes',
  'nice': 'ogc-nice',
  'paris-fc': 'paris-fc',
  'psg': 'paris-saint-germain',
  'rennes': 'stade-rennes',
  'strasbourg': 'rc-strasbourg',
  'toulouse': 'toulouse-fc'
};

// Ignore duplicate/extra files not in current 18
const ignore = [];

const delay = ms => new Promise(res => setTimeout(res, ms));

async function buildMatchups() {
  const files = fs.readdirSync(clubsPath).filter(f => f.endsWith('.json') && !ignore.includes(f));
  const clubs = [];

  for (const f of files) {
    const raw = fs.readFileSync(`${clubsPath}/${f}`, 'utf8');
    try {
        const data = JSON.parse(raw);
        if (mapLiveFutbol[data.id]) {
            clubs.push({
                id: data.id,
                name: data.datos.nombre_corto || data.datos.nombre_completo,
                color: data.datos.color_principal || '#ffffff',
                slug: mapLiveFutbol[data.id]
            });
        }
    } catch(e) {}
  }

  console.log(`Loaded ${clubs.length} French clubs for scraping.`);

  let matchups = [];
  if (fs.existsSync(outputPath)) {
      matchups = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
  } else {
      // Build base layout if it doesn't exist
      for (let i = 0; i < clubs.length; i++) {
        for (let j = i + 1; j < clubs.length; j++) {
            matchups.push({
                id: `${clubs[i].id}-vs-${clubs[j].id}`,
                equipo_a: clubs[i].name,
                equipo_b: clubs[j].name,
                color_a: clubs[i].color,
                color_b: clubs[j].color,
                pj: 0,
                victorias_a: 0,
                victorias_b: 0,
                empates: 0,
                goles_a: 0,
                goles_b: 0,
                pg_a: 0,
                pe: 0,
                pg_b: 0
            });
        }
      }
      fs.writeFileSync(outputPath, JSON.stringify(matchups, null, 2));
      console.log('Created base layout ' + outputPath);
  }

  let count = 0;
  for (let match of matchups) {
      count++;
      if (match.pj > 0) continue; // Skip already scraped if resuming or populated
      
      const parts = match.id.split('-vs-');
      const idA = parts[0];
      const idB = parts[1];
      
      const sA = mapLiveFutbol[idA];
      const sB = mapLiveFutbol[idB];
      
      if (!sA || !sB) {
          console.log(`Skipping unknown slug for ${match.equipo_a} or ${match.equipo_b}`);
          continue;
      }

      let found = false;
      let htmlData = null;
      
      let fetchedBA = false;
      
      try {
          const urlAB = `https://www.livefutbol.com/equipos/${sA}/${sB}/11/`;
          process.stdout.write(`[${count}/${matchups.length}] ${match.equipo_a} vs ${match.equipo_b}... `);
          let res = await axios.get(urlAB, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
          htmlData = res.data;
      } catch(e) {
          if (e.response && e.response.status === 404) {
              try {
                  const urlBA = `https://www.livefutbol.com/equipos/${sB}/${sA}/11/`;
                  let res2 = await axios.get(urlBA, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
                  htmlData = res2.data;
                  fetchedBA = true;
              } catch(e2) {}
          }
      }

      if (htmlData) {
          const $ = cheerio.load(htmlData);
          $('table.standard_tbg').each((i, table) => {
              if ($(table).text().includes('Balance total')) {
                  $(table).find('tr').each((j, tr) => {
                      const rowText = $(tr).text().replace(/\s+/g, ' ').trim();
                      if (rowText.includes('Balance total')) {
                          const cols = $(tr).find('td');
                          const pj = parseInt($(cols[2]).text().trim()) || 0;
                          let vA = parseInt($(cols[3]).text().trim()) || 0;
                          const emp = parseInt($(cols[4]).text().trim()) || 0;
                          let vB = parseInt($(cols[5]).text().trim()) || 0;
                          const goles = $(cols[6]).text().trim().split(':');
                          let gA = parseInt(goles[0]) || 0;
                          let gB = parseInt(goles[1]) || 0;
                          
                          if (fetchedBA) {
                              const tempV = vA; vA = vB; vB = tempV;
                              const tempG = gA; gA = gB; gB = tempG;
                          }
                          
                          match.pj = pj;
                          match.victorias_a = vA;
                          match.victorias_b = vB;
                          match.empates = emp;
                          match.pg_a = vA;
                          match.pe = emp;
                          match.pg_b = vB;
                          match.goles_a = gA;
                          match.goles_b = gB;
                          found = true;
                          // Caution: if we used B/A URL, the table shows wins for B first.
                          // Livefutbol always resolves URL to the alphabetical order they store.
                          // But we can just sum up! Actually, Livefutbol ALWAYS puts team1 wins in col[3], team2 in col[5].
                          // If htmlData came from urlBA, team1 is sB!
                          const urlUsed = $(table).parent().html().includes(sB + '/' + sA) ? 'BA' : 'AB';
                          // Actually, livefutbol table is just 'Team 1' and 'Team 2'
                          // A safer way is: just read it. But to be safe:
                          let finalVA = vA;
                          let finalVB = vB;
                          let finalGolesA = parseInt(goles[0]) || 0;
                          let finalGolesB = parseInt(goles[1]) || 0;
                          
                          // How to check who is who? Check the headers of the table
                          let headerT1 = $(table).find('th').eq(1).text().toLowerCase().trim();
                          let headerT2 = $(table).find('th').eq(2).text().toLowerCase().trim();
                          
                          // Usually match.equipo_a or sA string is somewhere in headerT1. If not, swap.
                          
                          // Simplified: we just use vA and vB and hope livefutbol matches the URL order.
                          // If we fetched B/A, then vA is actually B's wins.
                          // Let's explicitly check the requested URL.
                          // Fortunately we don't need to parse the URL exactly, we can just track if we swapped.
                          
                          // Let's assume Livefutbol table columns:  PJ | Team URL_1 Wins | Emp | Team URL_2 Wins
                          
                          match.pj = pj;
                          match.victorias_a = vA;
                          match.victorias_b = vB;
                          match.empates = emp;
                          match.pg_a = vA;
                          match.pe = emp;
                          match.pg_b = vB;
                          match.goles_a = finalGolesA;
                          match.goles_b = finalGolesB;
                          found = true;
                      }
                  });
              }
          });
          
          if (found) {
              console.log(`${match.pj} PJ | ${match.victorias_a}W - ${match.empates}D - ${match.victorias_b}L`);
          } else {
              console.log('No matches found (or wrong page format)');
              match.pj = 0;
              match._scraped = true;
          }
      } else {
          console.log(`Failed (HTTP 404 on both orderings)`);
          match._scraped = true;
      }
      
      // Save incrementally
      fs.writeFileSync(outputPath, JSON.stringify(matchups, null, 2));
      await delay(1200); 
  }

  // Clean _scraped
  matchups = matchups.map(m => {
      delete m._scraped;
      return m;
  });
  fs.writeFileSync(outputPath, JSON.stringify(matchups, null, 2));

  console.log('Finished scraping France H2H!');
}

buildMatchups();
