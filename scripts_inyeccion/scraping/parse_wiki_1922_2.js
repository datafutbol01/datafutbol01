const fs = require('fs');
const html = fs.readFileSync('1922_wiki.html', 'utf8');

const cheerioRe = /<table[^>]*>([\s\S]*?)<\/table>/g;
let match;
while ((match = cheerioRe.exec(html)) !== null) {
    if (match[1].includes('Independiente') && match[1].includes(' River Plate')) {
        let rows = match[1].match(/<tr[^>]*>([\s\S]*?)<\/tr>/g);
        const teams = [];
        for (let row of rows) {
            const cells = row.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g);
            if (!cells) continue;
            let clean = cells.map(c => c.replace(/<[^>]+>/g, '').replace(/&#160;/g, ' ').replace(/\n/g, '').trim());
            // Usually the positions table has Pos. Equipo Pts PJ PG PE PP GF GC DIF
            let pos = parseInt(clean[0]);
            if (!isNaN(pos) && clean.length >= 7) {
                // To get actual points, some tables show PTS first, some show it after Equipo
                // Let's print the clean array to see the structure
                console.log(clean);
                teams.push({
                   pos: pos,
                   equipo: clean[1],
                   pts: parseInt(clean[2]),
                   pj: parseInt(clean[3]),
                   pg: parseInt(clean[4]),
                   pe: parseInt(clean[5]),
                   pp: parseInt(clean[6])
                });
            }
        }
        if (teams.length > 5) {
             console.log('Resulting teams length:', teams.length);
             fs.writeFileSync('teams_1922.json', JSON.stringify(teams, null, 2));
             break;
        }
    }
}
