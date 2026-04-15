const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
let data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

async function patch() {
    console.log("Iniciando Puppeteer Stealth scraper...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    let count = 0;

    for (let t of data) {
         let yearNum = parseInt(t.anio.substring(0,4));
         // Fix all tables that were hit by the disaster (1891 to 1960 roughly)
         if (yearNum >= 1891 && yearNum <= 1960 && !t.zonas) {
             
             // Check if it's actually truncated (like 6 teams) or math is wrong, or we just want to ensure it's 100% full
             // Some tables like 1918 have 6 teams. Some have 20. Re-scrape everything in this range to be 100% safe!
             
             let searchYear = t.anio;
             let encodedUrl = `https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_${searchYear}_(Argentina)`;
             if (searchYear.includes('/')) {
                 let pts = searchYear.split('/');
                 encodedUrl = `https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_${pts[0]}-${pts[1]}_(Argentina)`;
             }

             console.log(`Analizando ${t.anio} ${t.torneo}... (${encodedUrl})`);
             try {
                 await page.goto(encodedUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
                 
                 let newTable = await page.evaluate((torneoName) => {
                     let bestTable = null;
                     
                     let tables = Array.from(document.querySelectorAll('table.wikitable'));
                     // Si hay múltiples tablas (Asociación Argentina y Asociación Amateurs)
                     if (tables.length > 1) {
                         tables.forEach(el => {
                             let text = el.innerText;
                             // Heurística: Si torneoName dice 'Amateur', buscamos la que también diga Amateur cerca o lo ignoramos y scaneamos ambas
                             if (text.includes('Pts') && text.includes('PJ') && el.querySelectorAll('tr').length > 5) {
                                 // Preferimos la primera que machee a menos que torneoName sea muy específico
                                 // Wikipedia las suele separar por títulos <h3>
                                 bestTable = bestTable || el; 
                                 
                                 // Si el previoElementSibling es un título que dice Amateurs y torneoName tiene Amateur...
                                 let prev = el.previousElementSibling;
                                 if (prev && prev.innerText.toLowerCase().includes('amateur') && torneoName.toLowerCase().includes('amateur')) {
                                     bestTable = el;
                                 } else if (prev && prev.innerText.toLowerCase().includes('argentina') && torneoName.toLowerCase().includes('argentina')) {
                                     bestTable = el;
                                 }
                             }
                         });
                     } else {
                         bestTable = tables.find(el => el.innerText.includes('Pts') && el.innerText.includes('PJ') && el.querySelectorAll('tr').length > 5);
                     }
                     
                     if (!bestTable) return null;
                     
                     let map = { pj: -1, pg: -1, pe: -1, pp: -1, pts: -1 };
                     let trIdx = 0;
                     let headers = Array.from(bestTable.querySelectorAll('tr')[0].querySelectorAll('th, td'));
                     if (headers.length < 5) headers = Array.from(bestTable.querySelectorAll('tr')[1].querySelectorAll('th, td'));
                     
                     headers.forEach((th, i) => {
                         let raw = th.innerText.toLowerCase().replace(/[\n\.]/g, '').trim();
                         if (raw === 'pj' || raw === 'j') map.pj = i;
                         else if (raw === 'pg' || raw === 'g') map.pg = i;
                         else if (raw === 'pe' || raw === 'e') map.pe = i;
                         else if (raw === 'pp' || raw === 'p') map.pp = i;
                         else if (raw === 'pts' || raw === 'puntos') map.pts = i;
                     });

                     if (map.pj === -1 || map.pts === -1) return null;

                     let arr = [];
                     let lastPos = 0;
                     bestTable.querySelectorAll('tbody tr').forEach(tr => {
                         let tds = Array.from(tr.querySelectorAll('td, th'));
                         if (tds.length < 5) return;
                         if (tr.querySelectorAll('th').length > 4) return; 

                         let equipoData = "";
                         let eqIndex = -1;
                         tds.forEach((col, j) => {
                             let text = col.innerText.trim();
                             if (text && /[a-zA-Z]/.test(text) && eqIndex === -1 && text.length > 2) {
                                  equipoData = text.replace(/\[.*?\]/g, '').trim();
                                  eqIndex = j;
                             }
                         });
                         if (eqIndex === -1) return;

                         let getV = (mIndex) => {
                            if (mIndex === -1) return 0;
                            if (!tds[mIndex]) return 0;
                            return parseInt(tds[mIndex].innerText.replace(/[^\d-]/g, '') || '0') || 0;
                         };

                         let pj = getV(map.pj);
                         let pg = getV(map.pg);
                         let pe = getV(map.pe);
                         let pp = getV(map.pp);
                         let pts = getV(map.pts);

                         // FIX MATH SHIFTS CAUSADOS POR ROWSPAN EN WIKIPEDIA
                         if (pj > 0 && pj !== pg + pe + pp && map.pg !== -1 && map.pe !== -1 && map.pp !== -1) {
                            let pgt = getV(map.pg + 1); let pet = getV(map.pe + 1); let ppt = getV(map.pp + 1);
                            if (pj === pgt + pet + ppt) { pg = pgt; pe = pet; pp = ppt; }
                            else {
                                pgt = getV(map.pg - 1); pet = getV(map.pe - 1); ppt = getV(map.pp - 1);
                                if (pj === pgt + pet + ppt) { pg = pgt; pe = pet; pp = ppt; }
                                else {
                                    pgt = getV(map.pg + 2); pet = getV(map.pe + 2); ppt = getV(map.pp + 2);
                                    if (pj === pgt + pet + ppt) { pg = pgt; pe = pet; pp = ppt; }
                                }
                            }
                         }

                         // EVITAR QUE SE CORTEN LOS EQUIPOS!
                         // A veces el pts o pj dan 0 en tablas rotas, forzamos push igual si hay equipo
                         if (equipoData.length > 0 && equipoData !== "Equipo" && (pts > 0 || pj > 0)) {
                            // Validar equipo no es basura
                            let baja = equipoData.toLowerCase();
                            if(baja.includes("total") || baja.includes("descenso")) return;

                            lastPos++;
                            arr.push({ pos: lastPos, equipo: equipoData, pts, pj, pg, pe, pp });
                         }
                     });
                     return arr;
                 }, t.torneo);

                 if (newTable && newTable.length > 8) { // Las ligas argentinas nunca tuvieron menos de 8
                     let prevLength = t.tabla_posiciones.length;
                     // Preservar nombres enciclopédicos de la DB original
                     newTable.forEach(r => {
                         let matchOld = t.tabla_posiciones.find(old => old.equipo && old.equipo.toLowerCase().includes(r.equipo.toLowerCase().substring(0,5)));
                         if (matchOld) r.equipo = matchOld.equipo;
                     });
                     t.tabla_posiciones = newTable;
                     count++;
                     console.log(`✅ ${t.anio} ${t.torneo} | Restaurado completo: de ${prevLength} -> a ${newTable.length} equipos. Campeón real: ${newTable[0].equipo}`);
                 } else {
                     console.log(`⚠️ ${t.anio} ignorado. (Longitud extraída: ${newTable ? newTable.length : 'NULL'}, Url quizás errónea)`);
                 }

             } catch(e) {
                 console.log(`Error scrapeando ${t.anio}: ${e.message}`);
             }
         }
    }
    
    fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
    console.log(`\nCOMPLETADO. ${count} Tablas enteras re-inyectadas.`);
    await browser.close();
}

patch();
