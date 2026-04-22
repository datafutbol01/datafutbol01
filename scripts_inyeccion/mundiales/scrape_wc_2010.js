import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape2010() {
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2010';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const tables = $('table');
  const allSquads = [];

  tables.each((_, table) => {
      const squad = [];
      $(table).find('tr').each((i, row) => {
          if (i === 0) return; 
          const cols = $(row).find('td, th');
          if (cols.length < 5) return; 
          
          const noText = $(cols[0]).text().trim();
          if (!noText || isNaN(parseInt(noText))) return; 
          const no = parseInt(noText);
          
          let posText = $(cols[1]).text().trim();
          let nameText = $(cols[2]).text().trim();
          
          let name = $(cols[1]).find('a').first().text().trim() || $(cols[2]).find('a').first().text().trim();
          
          let pos = $(cols[2]).text().trim();
          if (!["Portero", "Defensa", "Centrocampista", "Medio", "Delantero"].includes(pos)) {
              if (["Portero", "Defensa", "Centrocampista", "Medio", "Delantero", "POR", "DEF", "MED", "DEL"].some(p => posText.includes(p))) {
                  pos = posText;
                  name = nameText;
                  let explicitName = $(cols[2]).find('a').first().text().trim();
                  if (explicitName) name = explicitName;
              }
          }
          if (pos === "Medio") pos = "Centrocampista";

          let clubCol = $(cols[cols.length - 1]);
          let clubName = clubCol.text().trim();
          if (!clubName || clubName === '') clubName = "Club Desconocido";

          name = name.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();
          if (!name) name = nameText.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();

          squad.push({ no, pos, name, clubName, club: 'default' });
      });

      if (squad.length > 15) {
         allSquads.push(squad);
      }
  });

  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2010.json';
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));

  data.participants.forEach((p, idx) => {
      p.squad = allSquads[idx] || [];
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('2010 squads injected blindly by index.');
}
scrape2010();
