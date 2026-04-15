import fs from 'fs';
import * as cheerio from 'cheerio';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2022.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

async function scrape2022() {
  console.log("Fetching 2022 squads from Wikipedia...");
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2022';
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const tables = $('table.sortable');
    console.log(`Found ${tables.length} sortable tables.`);
    
    let teamIndex = 0;

    tables.each((_, table) => {
        if (teamIndex >= 32) return;
        
        const teamObj = data.participants[teamIndex];
        const squad = [];
        $(table).find('tr').each((i, row) => {
            if (i === 0) return; // skip header
            const cols = $(row).find('td, th');
            if (cols.length < 5) return; 
            
            const noText = $(cols[0]).text().trim();
            if (!noText || isNaN(parseInt(noText))) return; 
            
            const no = parseInt(noText);
            
            let posText = $(cols[1]).text().trim();
            let nameText = $(cols[2]).text().trim();
            
            let name = $(cols[1]).find('a').first().text().trim();
            if (!name) name = posText;
            name = name.replace(/\(.*?\)/g, '').trim();

            let pos = $(cols[2]).text().trim();
            if (!["Portero", "Defensa", "Centrocampista", "Delantero"].includes(pos)) {
                if (["Portero", "Defensa", "Centrocampista", "Delantero", "POR", "DEF", "MED", "DEL"].some(p => posText.includes(p))) {
                    pos = posText;
                    name = nameText;
                    let explicitName = $(cols[2]).find('a').first().text().trim();
                    if (explicitName) name = explicitName;
                }
            }

            let clubCol = $(cols[cols.length - 1]);
            let clubName = clubCol.text().trim();
            if (!clubName || clubName === '') clubName = "Club Desconocido";

            name = name.split(',')[0].trim();

            squad.push({
                no, pos, name, clubName, club: 'default'
            });
        });

        if (squad.length > 15) {
           console.log(`Matched! Assigning to Team ${teamObj.name}: Extracted ${squad.length} players.`);
           teamObj.squad = squad;
           teamIndex++;
        }
    });

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log("Scraping completed and saved to 2022.json.");

  } catch (error) {
    console.error("Error scraping:", error);
  }
}

scrape2022();
