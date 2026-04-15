import fs from 'fs';
import * as cheerio from 'cheerio';

const posMap = {
  'POR': 'ARQ',
  'DEF': 'DEF',
  'MED': 'MED',
  'DEL': 'DEL',
  'ARQ': 'ARQ'
};

function slugify(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/[áäà]/g, 'a')
    .replace(/[éëè]/g, 'e')
    .replace(/[íïì]/g, 'i')
    .replace(/[óöò]/g, 'o')
    .replace(/[úüù]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const tableOrderMap = [
  "Argentina",
  "Bulgaria",
  "Italia",
  "Corea del Sur",
  "Bélgica",
  "Irak",
  "México",
  "Paraguay",
  "Canadá",
  "Francia",
  "Hungría",
  "Unión Soviética",
  "Argelia",
  "Brasil",
  "Irlanda del Norte",
  "España",
  "Dinamarca",
  "Escocia",
  "Uruguay",
  "Alemania Federal",
  "Inglaterra",
  "Marruecos",
  "Polonia",
  "Portugal"
];

async function run() {
  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1986.json';
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));

  const res = await fetch('https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_1986');
  const html = await res.text();
  const $ = cheerio.load(html);

  const tables = $('table.sortable');
  
  if (tables.length !== 24) {
    console.error("Number of tables is not 24!", tables.length);
    return;
  }

  const parsedSquads = [];

  tables.each((i, tbl) => {
    let teamName = tableOrderMap[i];
    let squad = [];
    
    $(tbl).find('tbody tr').each((j, tr) => {
      const tds = $(tr).find('td');
      if (tds.length === 0) return; // header
      
      let no = $(tr).find('th').text().trim();
      if (!no) no = $(tds[0]).text().trim();

      if (tds.length >= 5) {
         let rawPos = $(tds[1]).text().trim();
         let pos = posMap[rawPos] || rawPos;
         
         let name = $(tds[2]).text().replace(/\\n/g, '').replace(/\[.*?\]/g, '').trim();
         
         let clubCol = $(tds[5]);
         let clubText = clubCol.text().trim();
         // removing country text in parenthesis like "Real Madrid (España)"
         let cleanClubName = clubText.replace(/\(.*?\)/g, '').trim();
         
         squad.push({
           no: parseInt(no) || j,
           name: name,
           pos: pos,
           club: slugify(cleanClubName),
           clubName: cleanClubName
         });
      }
    });

    parsedSquads.push({
      teamName,
      squad
    });
  });

  console.log(`Parsed ${parsedSquads.length} squads from Wikipedia by index.`);

  let injectedCount = 0;
  for (const part of data.participants) {
      if (part.squad && part.squad.length > 0) {
          console.log(`- ${part.name} already has a squad, skipping.`);
          continue;
      }
      
      const match = parsedSquads.find(p => p.teamName === part.name);
      if (match) {
          part.squad = match.squad;
          console.log(`+ Injected ${match.squad.length} players to ${part.name}`);
          injectedCount++;
      } else {
          console.log(`! No match found for ${part.name}`);
      }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log(`Finished rewriting 1986.json. Injected ${injectedCount} teams.`);
}

run().catch(console.error);
