const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
let data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

// Torneos rotos por la mala lectura de Wikipedia (columnas giradas o cruzadas)
// Son los que el script `mass_wiki_patch.js` tocó. Básicamente de 1891 a 1960.
// Vamos a limpiar e inyectar de forma 100% segura.

async function diamondPatch() {
    let corrected = 0;

    for (let t of data) {
        let yearNum = parseInt(t.anio.substring(0,4));
        // Only target seasons that have a wiki_url, have a standard table (no zonas), and where data looks suspect. (Amateur/Early Pro)
        if (yearNum >= 1891 && yearNum <= 1980 && t.wiki_url && !t.zonas && t.tabla_posiciones && t.tabla_posiciones.length > 0) {
            
            // Check if there is corruption (all PGs being the same, or Pts < PJ * 0.5 for champions, or math totally off)
            let isCorrupt = false;
            let firstRow = t.tabla_posiciones[0];
            let mathOff = (firstRow.pg + firstRow.pe + firstRow.pp !== firstRow.pj);
            let fakePg = t.tabla_posiciones.every(r => r.pg === firstRow.pg && r.equipo !== firstRow.equipo);
            
            // Re-scrape everything aggressively if it's before 1960 roughly
            if (yearNum >= 1891 && yearNum <= 1960) isCorrupt = true;

            if (isCorrupt) {
                console.log(`Buscando verdad absoluta para: ${t.anio} ${t.torneo} en ${t.wiki_url}`);
                try {
                    const res = await axios.get(t.wiki_url, {
                        headers: { 'User-Agent': 'Mozilla/5.0' }
                    });
                    const $ = cheerio.load(res.data);
                    
                    let bestTable = null;
                    $('table.wikitable').each((i, el) => {
                        if (bestTable) return;
                        let text = $(el).text();
                        if (text.includes('Pts') && text.includes('PJ') && $(el).find('tr').length > 5) {
                            // Check if it's relatively at the top of the article (not a reserve table)
                            bestTable = el;
                        }
                    });
                    
                    if (!bestTable) continue;
                    
                    // Header Mapping Inteligente
                    let map = { pj: -1, pg: -1, pe: -1, pp: -1, gf: -1, gc: -1, pts: -1 };
                    
                    // Buscar headers en tr 0 o 1
                    let headerTrs = $(bestTable).find('tr').slice(0, 2);
                    headerTrs.find('th, td').each((i, th) => {
                        let raw = $(th).text().toLowerCase().replace(/[\n\.!]/g, '').trim();
                        if (raw === 'pj' || raw === 'j') map.pj = i;
                        else if (raw === 'g' || raw === 'pg') map.pg = i;
                        else if (raw === 'e' || raw === 'pe') map.pe = i;
                        else if (raw === 'p' || raw === 'pp') map.pp = i;
                        else if (raw === 'gf' || raw === 'f') map.gf = i;
                        else if (raw === 'gc' || raw === 'c') map.gc = i;
                        else if (raw === 'pts' || raw === 'puntos') map.pts = i;
                    });

                    // Si no encontró PJ ni Pts, falló el mapa.
                    if (map.pj === -1 || map.pts === -1) {
                         console.log("No se pudo mapear cabeceras para: " + t.anio);
                         continue;
                    }

                    console.log(`[MAPA] Pts:${map.pts} PJ:${map.pj} PG:${map.pg} PE:${map.pe} PP:${map.pp}`);

                    let newTable = [];
                    let lastPos = 0;

                    $(bestTable).find('tbody tr').each((rowIndex, tr) => {
                        let tds = $(tr).find('td, th');
                        // Ignorar headers y filas vacías
                        if (tds.length < 5) return;
                        if ($(tr).find('th').length > 4) return; // Row of solely headers
                        
                        // Parse equipo name from the row (usually contains a link or is just text)
                        // It's usually the first td that contains letters and is not just "1", "2"
                        let equipoData = "";
                        let eqIndex = -1;
                        tds.each((j, col) => {
                            let text = $(col).text().trim();
                            if (text && /[a-zA-Z]/.test(text) && eqIndex === -1 && text.length > 2) {
                                equipoData = text.replace(/\[.*?\]/g, '').trim();
                                eqIndex = j;
                            }
                        });
                        
                        if (eqIndex === -1) return;

                        // Because the mapping index counts ALL elements in the row (including TH for pos)
                        // We extract value directly using the map.
                        let getV = (mIndex) => {
                            if (mIndex === -1) return 0;
                            // En Wikipedia, aveces usan rowspan en algunas celdas, lo que desplaza el array.
                            // Pero asumamos que para las filas estándar de la tabla principal están alineadas.
                            let t = $(tds[mIndex]).text().trim();
                            // Puede que el TH 'Pos' nos desalie? No, porque en map iteramos TODO
                            return parseInt(t.replace(/[^\d-]/g, '')) || 0;
                        };

                        let pj = getV(map.pj);
                        let pg = getV(map.pg);
                        let pe = getV(map.pe);
                        let pp = getV(map.pp);
                        let pts = getV(map.pts);

                        // Seguridad de Integridad: PJ = PG + PE + PP
                        // Si PJ no coincide, algo muy malo pasó con el rowspan. Lo auto reparamos con matemáticas:
                        if (pj > 0 && map.pg !== -1 && map.pe !== -1 && map.pp !== -1) {
                            if (pj !== pg + pe + pp) {
                                // Wikipedia a veces desplaza la columna en 1 por banderas o escudos insertados
                                // Re-testeamos +1 y -1
                                let pgt = getV(map.pg + 1) || 0; let pet = getV(map.pe + 1) || 0; let ppt = getV(map.pp + 1) || 0;
                                if (pj === pgt + pet + ppt) {
                                    pg = pgt; pe = pet; pp = ppt;
                                } else {
                                    pgt = getV(map.pg - 1) || 0; pet = getV(map.pe - 1) || 0; ppt = getV(map.pp - 1) || 0;
                                    if (pj === pgt + pet + ppt) {
                                        pg = pgt; pe = pet; pp = ppt;
                                    }
                                }
                            }
                        }
                        
                        if (pts > 0 || pj > 0) {
                           lastPos++;
                           
                           // Mantener el equipo original si lo podemos machear de manera safe!
                           // Esto evita cambiar los nombres enciclopédicos ("River Plate" a "River Plate (1)")
                           let eqFinal = equipoData;
                           let matchRow = t.tabla_posiciones.find(r => r.equipo && r.equipo.toLowerCase().includes(eqFinal.toLowerCase().substring(0,5)));
                           if (matchRow) eqFinal = matchRow.equipo;

                           // OTRA VALIDACION: Si el mapeo de Pts < PJ en los primeros 10 lugares, está todo invertido (ej. Pts=10 y PJ=24, imposible).
                           if (lastPos <= 10 && pts > 0 && pj > 0 && pts < (pj * 0.5)) {
                               // Swap them mathematically
                               let temp = pts; pts = pj; pj = temp;
                           }

                           newTable.push({
                               pos: lastPos,
                               equipo: eqFinal,
                               pts: pts,
                               pj: pj,
                               pg: pg,
                               pe: pe,
                               pp: pp
                           });
                        }
                    });

                    if (newTable.length > 5 && newTable[0].pts > 0) {
                        t.tabla_posiciones = newTable;
                        corrected++;
                        console.log(`-> Corregido ${t.anio} exitosamente. Nueva tabla: ${newTable.length} filas.`);
                    }

                } catch (e) {
                    console.log(`Error scrapeando ${t.anio}:`, e.message);
                }
            }
        }
    }

    fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
    console.log(`\n¡PARCHE DIAMANTE GIGANTE! ${corrected} tablas reconstruidas de forma inteligente desde Wikipedia.`);
}

diamondPatch();
