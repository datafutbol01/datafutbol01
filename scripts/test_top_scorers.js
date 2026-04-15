const axios = require('axios');
const cheerio = require('cheerio');

async function testGoleadores() {
    const url = 'https://es.wikipedia.org/wiki/Anexo:Goleadores_de_la_Primera_Divisi%C3%B3n_de_Argentina';
    try {
        const res = await axios.get(url);
        const $ = cheerio.load(res.data);
        
        let goleadoresMap = {};
        
        $('table.wikitable tbody tr').each((i, row) => {
            const tds = $(row).find('td, th');
            if(tds.length === 4) {
               // Torneo | Jugador | Equipo | Goles
               let torneo = $(tds[0]).text().trim();
               let jugadorStr = $(tds[1]).text().trim();
               let equipoStr = $(tds[2]).text().trim();
               let goles = parseInt($(tds[3]).text().trim());

               if (torneo && goles) {
                   goleadoresMap[torneo] = {jugador: jugadorStr, equipo: equipoStr, goles: goles};
               }
            } else if (tds.length >= 5) {
               // Año | Torneo | Jugador | Equipo | Goles
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
                   goleadoresMap[torneo] = {jugador: jugadorStr, equipo: equipoStr, goles: goles};
               }
            }
        });
        
        const keys = Object.keys(goleadoresMap);
        console.log(`Extraidos ${keys.length} goleadores de torneos.`);
        console.log(keys.slice(Math.max(0, keys.length - 20))); 
        
    } catch(e) {
        console.log(e.message);
    }
}
testGoleadores();
