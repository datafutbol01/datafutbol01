import fs from 'fs';

const data = JSON.parse(fs.readFileSync('app/src/data/mundiales/1970.json', 'utf8'));
const elSalvador = data.participants.find(p => p.id === 'el_salvador');

if (elSalvador.squad.length === 0) {
    import('cheerio').then(ch => {
        fetch('https://en.wikipedia.org/wiki/1970_FIFA_World_Cup_squads')
        .then(r=>r.text())
        .then(h => {
             const $ = ch.load(h);
             $('table').each((i, t) => {
                 const firstPlayer = $(t).find('tr').eq(1).text();
                 if (firstPlayer.includes('Raúl Magaña') || firstPlayer.includes('Magaña') || firstPlayer.includes('FAS') || firstPlayer.includes('Alianza')) {
                     const squad = [];
                     $(t).find('tr').each((j, row) => {
                         if (j === 0) return;
                         const cols = $(row).find('td, th');
                         if (cols.length < 4) return;
                         let no = parseInt($(cols[0]).text().trim());
                         if (isNaN(no)) return;
                         let posText = $(cols[1]).text().trim();
                         let name = $(cols[2]).find('a').first().text().trim() || $(cols[2]).text().trim();
                         let pos = "Centrocampista";
                         if (posText.includes("GK")) pos = "Portero";
                         else if (posText.includes("DF")) pos = "Defensa";
                         else if (posText.includes("MF")) pos = "Centrocampista";
                         else if (posText.includes("FW")) pos = "Delantero";
                         let clubCol = $(cols[cols.length - 1]);
                         let clubName = clubCol.text().trim();
                         name = name.split(',')[0].replace(/\(.*?\)/g, '').trim();
                         squad.push({ no, pos, name, clubName, club: 'default' });
                     });
                     elSalvador.squad = squad;
                     fs.writeFileSync('app/src/data/mundiales/1970.json', JSON.stringify(data, null, 2));
                     console.log('El Salvador forced in!');
                 }
             });
        });
    });
}
