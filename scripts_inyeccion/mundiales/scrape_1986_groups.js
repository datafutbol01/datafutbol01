import fs from 'fs';
import * as cheerio from 'cheerio';

async function run() {
  const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1986.json';
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));

  const res = await fetch('https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol_de_1986');
  const html = await res.text();
  const $ = cheerio.load(html);

  const groups = {};
  
  // Wikipedia uses specific tables for groups or we can select them
  // We'll look for headers "Grupo A", "Grupo B" etc. 
  // Then the next table usually contains the standings
  
  const groupNames = ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D', 'Grupo E', 'Grupo F'];
  
  $('h3').each((i, el) => {
    const title = $(el).text().replace(/\[.*?\]/g, '').trim();
    if (groupNames.includes(title)) {
        const groupLetter = title.split(' ')[1]; // "A", "B"...
        const table = $(el).nextAll('table').first();
        
        let teams = [];
        table.find('tbody tr').each((j, tr) => {
            const tds = $(tr).find('td');
            if (tds.length < 8) return; // not a team row or header
            
            // On wikipedia, the team name is usually in the 1st td (sometimes after a th pos)
            let teamSelect = $(tds[0]).text().trim();
            // In WC wiki tables: Pos, Equipo, Pts, PJ, PG, PE, PP, GF, GC, Dif
            let posTd = $(tr).find('td').eq(0);
            let teamName = $(tr).find('td').eq(1).text().trim() || $(tr).find('th').text().trim(); 
            // if pos is normally th, then td0 is team, td1 is pts. Let's parse all tds sequentially safely
            
            let vals = [];
            $(tr).find('td, th').each((idx, cell) => {
                let txt = $(cell).text().trim();
                vals.push(txt);
            });
            // Normally: 0:Pos, 1:Equipo, 2:Pts, 3:PJ, 4:PG, 5:PE, 6:PP, 7:GF, 8:GC, 9:Dif
             
            // We just grab the first string that looks like a country
            let teamClean = vals.find(v => isNaN(parseInt(v)) && v.length > 2 && v !== 'Dif');
            if (!teamClean) return;
            
            // remove generic span artifacts, filter to find actual name
            let nameMatch = data.participants.find(p => teamClean.includes(p.name));
            if (!nameMatch) {
               console.log("Could not resolve team name:", teamClean, "in", title);
               return;
            }
            
            // Try to figure out numbers by just scanning for the points pattern in vals (Pts PJ G E P GF GC)
            let numerics = vals.filter(v => !isNaN(parseInt(v)) || v.startsWith('-') || v.startsWith('+')).map(v => parseInt(v.replace('+','')));
            
            if (numerics.length >= 8) {
               // usually [pos, pts, pj, pg, pe, pp, gf, gc, dif]
               teams.push({
                   team: nameMatch.name,
                   flag: nameMatch.flag,
                   pts: numerics[1],
                   pj: numerics[2],
                   pg: numerics[3],
                   pe: numerics[4],
                   pp: numerics[5],
                   gf: numerics[6],
                   gc: numerics[7],
                   dif: numerics[8]
               });
            }
        });
        
        if (teams.length > 0) {
            groups[groupLetter] = teams;
        }
    }
  });

  data.groups = groups;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log(`Parsed ${Object.keys(groups).length} groups!`);
}

run().catch(console.error);
