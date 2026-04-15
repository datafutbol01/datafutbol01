const fs = require('fs');
const html = fs.readFileSync('1922_wiki.html', 'utf8');

// Looking for the table after "Tabla de posiciones final"
const tableRe = /<th>Pos\.<\/th>[\s\S]*?<th>Pts\.<\/th>[\s\S]*?<\/tr>([\s\S]*?)<\/table>/i;
const match = html.match(tableRe);

if (!match) {
    console.log('Table not found');
    process.exit(1);
}

const tableHtml = match[1];
const rows = tableHtml.match(/<tr>([\s\S]*?)<\/tr>/g);

const teams = [];
if (rows) {
    for (let row of rows) {
        // match <td> data
        const tdMatch = row.match(/<td>([^<]*)<\/td>/g);
        const thMatch = row.match(/<th[^>]*>(.*?)<\/th>/); // usually position
        
        let cols = [];
        const cells = row.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g);
        
        if (!cells) continue;
        const clean = cells.map(c => 
            c.replace(/<[^>]+>/g, '') // remove html tags
             .replace(/&#160;/g, ' ')
             .replace(/\n/g, '')
             .trim()
        );
        
        // Usually Pos, Equipo, Pts, PJ, PG, PE, PP, GF, GC, DIF
        // Let's filter out headers if pos is not a number
        const pos = parseInt(clean[0]);
        if (isNaN(pos)) continue;
        
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
console.log(JSON.stringify(teams, null, 2));
