import fs from 'fs';
import * as cheerio from 'cheerio';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2002.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const signatureMap = {
    "Sørensen": "dinamarca",
    "Ramé": "francia",
    "Sylva": "senegal",
    "Carini": "uruguay",
    "Chilavert": "paraguay",
    "Simeunovič": "eslovenia",
    "Vonk": "sudafrica",
    "Casillas": "espana",
    "Marcos": "brasil",
    "An Qi": "china",
    "Lonnis": "costa_rica",
    "Rüştü": "turquia",
    "Reçber": "turquia",
    "Dudek": "polonia",
    "Baía": "portugal",
    "Lee Woon-jae": "corea_del_sur",
    "Friedel": "estados_unidos",
    "Boukar": "camerun",
    "Kahn": "alemania",
    "Given": "irlanda",
    "Al-Deayea": "arabia_saudita",
    "Burgos": "argentina",
    "Seaman": "inglaterra",
    "Shorunmu": "nigeria",
    "Hedman": "suecia",
    "Pletikosa": "croacia",
    "Cevallos": "ecuador",
    "Buffon": "italia",
    "Pérez": "mexico",
    "De Vlieger": "belgica",
    "Kawaguchi": "japon",
    "Nigmatullin": "rusia",
    "Boumnijel": "tunez"
};

async function scrape2002() {
  console.log("Fetching 2002 squads...");
  const url = 'https://es.wikipedia.org/wiki/Equipos_participantes_en_la_Copa_Mundial_de_F%C3%BAtbol_de_2002';
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const tables = $('table.sortable');
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
            
            // special fallback if name is completely empty because of weird DOM parse
            if (!name) name = nameText.split(',')[0].trim().replace(/\(.*?\)/g, '').trim();

            squad.push({ no, pos, name, clubName, club: 'default' });
        });

        if (squad.length > 15) {
           allSquads.push(squad);
        }
    });

    console.log(`Extracted ${allSquads.length} squad arrays.`);

    let matchedCount = 0;
    data.participants.forEach(p => p.squad = []);

    allSquads.forEach(squad => {
        const firstPlayer = squad[0].name;
        let foundId = null;
        for (const [sig, id] of Object.entries(signatureMap)) {
            if (firstPlayer.includes(sig)) {
                foundId = id;
                break;
            }
        }

        if (foundId) {
            const teamObj = data.participants.find(p => p.id === foundId);
            if (teamObj) {
                teamObj.squad = squad;
                matchedCount++;
            }
        } else {
            console.log("UNMATCHED SIGNATURE! Player:", firstPlayer);
        }
    });

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Matched ${matchedCount} out of 32 teams correctly.`);

  } catch (error) {
    console.error("Error scraping:", error);
  }
}

scrape2002();
