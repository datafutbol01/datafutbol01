const fs = require('fs');
const html = fs.readFileSync('scratch/squads.html', 'utf8');

// The file has h3 tags for team names, followed by tables.
// We can split by <h3>
const blocks = html.split('<h3>');
const teams = {};

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const nameMatch = block.match(/<span class="mw-headline"[^>]*>([^<]+)<\/span>/);
    if (!nameMatch) continue;
    let teamName = nameMatch[1];
    
    // Some basic mapping
    if (teamName.includes('Real Madrid')) teamName = 'real-madrid';
    else if (teamName.includes('Corinthians')) teamName = 'corinthians';
    else if (teamName.includes('Vasco')) teamName = 'vasco-da-gama';
    else if (teamName.includes('Necaxa')) teamName = 'necaxa';
    else if (teamName.includes('Manchester')) teamName = 'manchester-united';
    else if (teamName.includes('Al Nassr') || teamName.includes('Al-Nassr')) teamName = 'al-nassr';
    else if (teamName.includes('Raja')) teamName = 'raja-casablanca';
    else if (teamName.includes('South Melbourne')) teamName = 'south-melbourne';
    else continue;

    const players = [];
    const rows = block.split('<tr');
    for (let j = 1; j < rows.length; j++) {
        const row = rows[j];
        if (!row.includes('vcard agent')) continue;
        
        const cols = row.split(/<td[^>]*>/);
        if (cols.length >= 5) {
            let no = cols[1].replace(/<\/?[^>]+(>|$)/g, "").trim();
            let posRaw = cols[2].replace(/<\/?[^>]+(>|$)/g, "").trim();
            // Flag is in cols 3
            let nameRaw = cols[4].replace(/<\/?[^>]+(>|$)/g, "").trim();
            // Remove text inside parentheses
            nameRaw = nameRaw.replace(/\([^)]+\)/g, '').trim();

            let pos = "MED";
            if (posRaw.includes('GK')) pos = 'POR';
            if (posRaw.includes('DF')) pos = 'DEF';
            if (posRaw.includes('MF')) pos = 'MED';
            if (posRaw.includes('FW')) pos = 'DEL';

            let flagMatch = cols[3].match(/title="([^"]+)"/);
            let flag = flagMatch ? flagMatch[1] : '';

            // Simple flag mapping (can be done later, but try to guess)
            let f = 'br';
            if (flag === 'Brazil') f = 'br';
            if (flag === 'Spain') f = 'es';
            if (flag === 'Mexico') f = 'mx';
            if (flag === 'Ecuador') f = 'ec';
            if (flag === 'Argentina') f = 'ar';
            if (flag === 'Colombia') f = 'co';
            if (flag === 'England') f = 'gb-eng';
            if (flag === 'France') f = 'fr';
            if (flag === 'Australia') f = 'au';
            if (flag === 'Morocco') f = 'ma';
            if (flag === 'Saudi Arabia') f = 'sa';
            if (flag === 'Portugal') f = 'pt';
            if (flag === 'Chile') f = 'cl';
            if (flag === 'Netherlands') f = 'nl';
            if (flag === 'Republic of Ireland') f = 'ie';
            if (flag === 'Wales') f = 'gb-wal';
            if (flag === 'Trinidad and Tobago') f = 'tt';
            if (flag === 'Algeria') f = 'dz';
            if (flag === 'New Zealand') f = 'nz';

            players.push({ no: parseInt(no), name: nameRaw, pos, flag: f });
        }
    }
    teams[teamName] = players;
}

// Now read 2000.json
const wcData = JSON.parse(fs.readFileSync('app/src/data/copas/mundial-clubes/2000.json', 'utf8'));

for (let p of wcData.participants) {
    if (teams[p.id]) {
        const fullSquad = teams[p.id];
        // current p.squad is the 11 starters
        const starters = p.squad;
        
        // ensure starters are exactly as they were (array formatting)
        const titulares = starters;
        const suplentes = [];
        
        for (let player of fullSquad) {
            if (!starters.find(s => s.no === player.no)) {
                suplentes.push(player);
            }
        }
        
        p.squad = {
            titulares,
            suplentes
        };
    }
}

fs.writeFileSync('app/src/data/copas/mundial-clubes/2000.json', JSON.stringify(wcData, null, 2));
console.log('Successfully updated 2000.json with suplentes');
