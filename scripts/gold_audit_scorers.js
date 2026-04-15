const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

async function massScorers() {
    console.log("Iniciando inyeccion de oro...");
    const url = 'https://es.wikipedia.org/wiki/Anexo:Goleadores_de_la_Primera_Divisi%C3%B3n_de_Argentina';
    try {
        const res = await axios.get(url, {
             headers: { 
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
             }
        });
        const $ = cheerio.load(res.data);
        
        let goleadoresMap = {};
        
        $('table.wikitable tbody tr').each((i, row) => {
            const tds = $(row).find('td, th');
            if(tds.length === 4) {
               let torneo = $(tds[0]).text().trim();
               let jugadorStr = $(tds[1]).text().trim();
               let equipoStr = $(tds[2]).text().trim();
               let goles = parseInt($(tds[3]).text().trim());

               if (torneo && goles) {
                   goleadoresMap[torneo.toLowerCase()] = {jugador: jugadorStr, equipo: equipoStr, goles: goles};
               }
            } else if (tds.length >= 5) {
               let torneo = $(tds[1]).text().trim();
               let jugadorStr = $(tds[2]).text().trim();
               let equipoStr = $(tds[3]).text().trim();
               let goles = parseInt($(tds[4]).text().trim());
               
               if (!torneo || !jugadorStr) {
                   torneo = $(tds[0]).text().trim();
                   jugadorStr = $(tds[1]).text().trim();
                   equipoStr = $(tds[2]).text().trim();
                   goles = parseInt($(tds[3]).text().trim());
               }

               if (torneo && goles) {
                   goleadoresMap[torneo.toLowerCase()] = {jugador: jugadorStr, equipo: equipoStr, goles: goles};
               }
            }
        });

        let inyectados = 0;
        let torneosCortosNames = [
            "apertura", "clausura", "inicial", "final", "transición", "copa de campeones", "liga profesional"
        ];

        for (let t of data) {
             if (t.goleadores && t.goleadores.length > 0) continue; // Si ya tiene goleador, lo respetamos (salvo que sea el "Dato en Restauracion" que borré recién).
             
             let searchKeys = [];
             searchKeys.push(t.anio.toLowerCase());
             if (t.torneo) {
                 const tName = t.torneo.toLowerCase();
                 searchKeys.push(tName + " " + t.anio.toLowerCase());
                 if (tName.includes('apertura') || tName.includes('clausura')) {
                     searchKeys.push(tName);
                     // 1991 Torneo Apertura -> apertura 1991
                     searchKeys.push(`apertura ${t.anio.toLowerCase()}`);
                     searchKeys.push(`clausura ${t.anio.toLowerCase()}`);
                 }
             }

             let found = null;
             // Basic matching from the wiki keys
             for (let key in goleadoresMap) {
                 if (searchKeys.some(sk => key.includes(sk))) {
                     // Check if anio matches exactly to avoid cross-year mismatches
                     if (key.includes(t.anio.toLowerCase())) {
                        found = goleadoresMap[key];
                        break;
                     }
                 }
             }

             if (found) {
                 // Wikipedia sometimes returns stuff like "{{bandera|ARG}} Martín Palermo"
                 let cleanJugador = found.jugador.replace(/\[.*?\]/g,'').trim();
                 let cleanEq = found.equipo.replace(/\[.*?\]/g,'').trim();
                 
                 t.goleadores = [{
                     nombre: cleanJugador,
                     equipo: cleanEq,
                     goles: found.goles
                 }];
                 inyectados++;
             }
        }
        
        if (inyectados > 0) {
            fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
            console.log(`Auditoria Nivel Oro COMPLETA: ${inyectados} goleadores históticos cruzados e inyectados.`);
        } else {
            console.log("No se pudieron inyectar nuevos goleadores. Falló el regex o todo estaba completo.");
        }
        
    } catch(e) {
        console.log(e.message);
    }
}
massScorers();
