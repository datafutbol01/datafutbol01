const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

// Mapa básico para nombres de Wikipedia -> Nombres del Dataset
const mapNames = {
    "Club Atlético River Plate": "River Plate",
    "Club de Gimnasia y Esgrima La Plata": "Gimnasia y Esgrima (LP)",
    "Club Atlético Boca Juniors": "Boca Juniors",
    "Club Atlético San Lorenzo de Almagro": "San Lorenzo",
    "Club Atlético Independiente": "Independiente",
    "Racing Club": "Racing Club",
    "Estudiantes de La Plata": "Estudiantes (LP)",
    "Club Atlético Vélez Sarsfield": "Vélez Sarsfield",
    "Club Social y Deportivo Defensa y Justicia": "Defensa y Justicia",
    "Club Atlético Huracán": "Huracán",
    "Club Atlético Platense": "Platense",
    "Club Atlético Lanús": "Lanús",
    "Club Atlético Tigre": "Tigre",
    "Club Atlético Belgrano": "Belgrano (C)",
    "Instituto Atlético Central Córdoba": "Instituto (C)",
    "Club Atlético Talleres": "Talleres (C)",
    "Club Atlético Rosario Central": "Rosario Central",
    "Club Atlético Newell's Old Boys": "Newell's Old Boys",
    "Club Atlético Tucumán": "Atlético Tucumán",
    "Club Atlético Central Córdoba": "Central Córdoba",
    "Club Atlético Sarmiento": "Sarmiento (J)"
};

function normalizeName(name) {
    let clean = name.replace(/\[.*?\]/g,'').replace(/\s+/g,' ').trim();
    for(let key in mapNames) {
        if(clean.toLowerCase().includes(key.toLowerCase())) return mapNames[key];
    }
    // Remove "Club Atlético" and standard prefixes to best-effort map
    clean = clean.replace(/^Club Atl[ée]tico /i, '');
    clean = clean.replace(/^Club /i, '');
    clean = clean.replace(/^Asociaci[óo]n Atl[ée]tica /i, '');
    return clean.trim();
}

function getWikiTitle(t) {
    if (t.torneo.includes('AAF')) return `Campeonato_de_Primera_División_${t.anio}_de_la_AAF_(Argentina)`;
    if (t.torneo.includes('FAF')) return `Campeonato_de_Primera_División_${t.anio}_de_la_FAF_(Argentina)`;
    if (t.torneo.includes('AAmF')) return `Campeonato_de_Primera_División_${t.anio}_de_la_AAmF_(Argentina)`;
    if (t.torneo.includes('Amateurs')) return `Campeonato_de_Primera_División_${t.anio}_de_la_AAmF_(Argentina)`;
    
    // Convert 1987/88 to 1987-88
    let year = t.anio.replace('/','-');
    return `Campeonato_de_Primera_División_${year}_(Argentina)`;
}

async function scrapeWiki(title) {
    try {
        const res = await axios.get(`https://es.wikipedia.org/wiki/${encodeURIComponent(title)}`, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            timeout: 5000
        });
        const $ = cheerio.load(res.data);
        
        let targetTable = null;
        $('table.wikitable').each((i, table) => {
            const headerRow = $(table).find('th, td').text().toLowerCase();
            if ((headerRow.includes('equipo') || headerRow.includes('eq.')) && 
                (headerRow.includes('pts') || headerRow.includes('pts.'))) {
                targetTable = table;
                return false; 
            }
        });

        if (!targetTable) return null;

        const results = [];
        let posCounter = 1;
        $(targetTable).find('tr').each((i, row) => {
             const tds = $(row).find('td, th');
             if (tds.length >= 6) { 
                 const ptsText = $(tds[tds.length-1]).text().trim() || $(tds[tds.length-2]).text().trim();
                 let pts = parseInt(ptsText.split(' ')[0]);

                 let eqNode = $(tds[1]);
                 if ($(tds[0]).text().match(/[a-zA-Z]/) && !$(tds[0]).text().match(/^\d/)) {
                     eqNode = $(tds[0]);
                 }
                 
                 let eqName = eqNode.text().replace(/\[.*?\]/g,'').replace(/\n/g,'').trim();
                 if (!eqName || eqName.toLowerCase() === 'equipo' || eqName.length < 3) return;

                 const pjNode = $(tds[2]); // Assuming PJ is next
                 const pgNode = $(tds[3]);
                 const peNode = $(tds[4]);
                 const ppNode = $(tds[5]);

                 results.push({
                     pos: posCounter++,
                     equipo: normalizeName(eqName),
                     pts: isNaN(pts) ? 0 : pts,
                     pj: parseInt(pjNode.text()) || 0,
                     pg: parseInt(pgNode.text()) || 0,
                     pe: parseInt(peNode.text()) || 0,
                     pp: parseInt(ppNode.text()) || 0
                 });
             }
        });
        return results.length > 5 ? results : null;
    } catch(e) {
        return null;
    }
}

async function main() {
    let fixCount = 0;
    for (let t of data) {
        if (!t.tabla_posiciones || t.tabla_posiciones.length === 0) continue;
        
        const maxPj = Math.max(...t.tabla_posiciones.map(r => r.pj));
        const numTeams = t.tabla_posiciones.length;
        const missing = t.descensos && t.descensos.some(d => !t.tabla_posiciones.some(r => r.equipo === d && r.pos > 10));

        if (numTeams <= Math.floor(maxPj / 2) || missing) {
             const title = getWikiTitle(t);
             console.log(`[+] Intentando reparar: ${t.anio} ${t.torneo} | Titulo: ${title}`);
             const newTable = await scrapeWiki(title);
             if (newTable) {
                 console.log(`    -> ¡Éxito! Encontrados ${newTable.length} equipos.`);
                 // Mantengo los descensos originales intactos porque eso está bien
                 t.tabla_posiciones = newTable;
                 fixCount++;
             } else {
                 console.log(`    -> Fallo al extraer tabla.`);
             }
        }
    }

    if (fixCount > 0) {
        fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
        console.log(`\n¡PROCESO FINALIZADO! Se lograron reparar ${fixCount} tablas masivamente.`);
    }
}
main();
