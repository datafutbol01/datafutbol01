const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

// Helper func to find the right wikipedia page
function getWikiTitle(t) {
    if (parseInt(t.anio) >= 1937 && parseInt(t.anio) <= 1960) {
        return `Campeonato_de_Primera_División_${t.anio}_(Argentina)`;
    }
    if (t.id === '1914-aaf' || t.anio === '1914') return 'Campeonato_de_Primera_División_1914_(Argentina)';
    if (t.id === '1914-faf') return 'Campeonato_de_Primera_División_1914_de_la_FAF_(Argentina)';
    if (t.anio === '1915') return 'Campeonato_de_Primera_División_1915_(Argentina)';
    if (t.torneo.includes('AAF')) return `Campeonato_de_Primera_División_${t.anio}_de_la_AAF_(Argentina)`;
    if (t.torneo.includes('FAF')) return `Campeonato_de_Primera_División_${t.anio}_de_la_FAF_(Argentina)`;
    if (t.torneo.includes('AAmF')) return `Campeonato_de_Primera_División_${t.anio}_de_la_AAmF_(Argentina)`;
    if (t.torneo.includes('Amateurs')) return `Campeonato_de_Primera_División_${t.anio}_de_la_AAmF_(Argentina)`;
    
    // Default fallback
    return `Campeonato_de_Primera_División_${t.anio}_(Argentina)`;
}

async function scrapeWiki(title) {
    try {
        const res = await axios.get(`https://es.wikipedia.org/wiki/${encodeURIComponent(title)}`, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $ = cheerio.load(res.data);
        
        let targetTable = null;
        $('table.wikitable').each((i, table) => {
            const headerRow = $(table).find('th, td').text().toLowerCase();
            // Look for a table that has pos, equipo, pts.
            if ((headerRow.includes('eq') || headerRow.includes('equipo')) && 
                (headerRow.includes('pts') || headerRow.includes('pts.'))) {
                targetTable = table;
                return false; // break
            }
        });

        if (!targetTable) return null;

        const results = [];
        $(targetTable).find('tr').each((i, row) => {
             const tds = $(row).find('td, th');
             if (tds.length >= 7) { 
                 const ptsText = $(tds[tds.length-1]).text().trim() || $(tds[tds.length-2]).text().trim();
                 let pts = parseInt(ptsText);

                 // Usually Column 0 is Pos, Column 1 is Equipo, Column 2 is PJ
                 let eqNode = $(tds[1]);
                 if ($(tds[0]).text().match(/[a-zA-Z]/) && !$(tds[0]).text().match(/^\d/)) {
                     eqNode = $(tds[0]);
                 }
                 
                 let eqName = eqNode.text().replace(/\[.*?\]/g,'').replace(/\n/g,'').trim();
                 if (!eqName) return;
                 if (eqName.toLowerCase() === 'equipo') return;

                 // extract some standard columns
                 // we will rely on points and name mostly
                 
                 results.push({
                     equipoText: eqName,
                     pts: isNaN(pts) ? 0 : pts
                 });
             }
        });
        return results;
    } catch(e) {
        return null;
    }
}

async function main() {
    let fixCount = 0;
    console.log("Iniciando escaneo de 56 tablas truncadas...");
    for (let t of data) {
        if (!t.tabla_posiciones || t.tabla_posiciones.length === 0) continue;
        
        const maxPj = Math.max(...t.tabla_posiciones.map(r => r.pj));
        const numTeams = t.tabla_posiciones.length;
        const missing = t.descensos && t.descensos.some(d => !t.tabla_posiciones.some(r => r.equipo === d && r.pos > 10));

        if (numTeams <= Math.floor(maxPj / 2) || missing) {
             const title = getWikiTitle(t);
             console.log(`[+] Truncada: ${t.anio} ${t.torneo} | Buscando: ${title}`);
             
             // WE WONT FETCH HERE YET, I ONLY WANT TO VERIFY MY PLAN WORKS IN THE NODE ENV!
             // console.log("Truncado");
        }
    }
}
main();
