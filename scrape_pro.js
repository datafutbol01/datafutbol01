const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const outputJsonPath = './app/src/data/ligas/argentina_temporadas.json';

const torneosABuscar = [];
for (let year = 1931; year <= 1966; year++) {
  torneosABuscar.push({ 
    id: `${year}-pd`, 
    anio: year.toString(), 
    torneo: 'Primera División', 
    url: `https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_${year}_(Argentina)` 
  });
}

let temporadas = [];
if (fs.existsSync(outputJsonPath)) {
  temporadas = JSON.parse(fs.readFileSync(outputJsonPath, 'utf8'));
}

async function startScraping() {
  console.log(`Iniciando Scraper Clásico para ${torneosABuscar.length} torneos...`);
  
  for (const t of torneosABuscar) {
    try {
      console.log(`-> Procesando: ${t.torneo} ${t.anio}`);
      const { data } = await axios.get(t.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const $ = cheerio.load(data);
      
      let tablaPosiciones = [];
      let goleadores = [];
      let campeon = null;

      $('table.wikitable').each((i, el) => {
        const headers = $(el).find('tr').first().find('th').map((_, th) => $(th).text().trim()).get();
        
        // Es la tabla de posiciones si tiene "Pos" o "Pts"
        if (tablaPosiciones.length === 0 && (headers.some(h => h.includes('Pos')) || headers.some(h => h.includes('Pts')))) {
          $(el).find('tr').slice(1).each((j, tr) => {
             const tds = $(tr).find('td, th').map((_, td) => $(td).text().trim()).get();
             // Las tablas viejas aveces no tienen Pos, solo empiezan con Equipo
             if (tds.length >= 7) {
               // Limpiar notas al pie
               let equipoStr = (tds[1] || '').replace(/\[.*?\]/g, '').trim();
               let pts = parseInt(tds[2]);
               
               // A veces Pos no existe, o está todo movido.
               // Tratamos de buscar la columna Equipo (que no sea un número)
               if (!isNaN(parseInt(tds[1])) && isNaN(parseInt(tds[0]))) {
                   equipoStr = (tds[0] || '').replace(/\[.*?\]/g, '').trim();
                   pts = parseInt(tds[1]);
               }

               if (equipoStr && equipoStr.length > 2 && !equipoStr.includes('descenso')) {
                 tablaPosiciones.push({
                   pos: j + 1,
                   equipo: equipoStr,
                   pts: pts || 0,
                   pj: parseInt(tds[3]) || 0,
                   pg: parseInt(tds[4]) || 0,
                   pe: parseInt(tds[5]) || 0,
                   pp: parseInt(tds[6]) || 0
                 });
               }
             }
          });
          if (tablaPosiciones.length > 0) {
            campeon = tablaPosiciones[0].equipo;
          }
        }
        
        // Es la de Goleadores (Jugador, Goles, Equipo)
        if (goleadores.length === 0 && (headers.includes('Jugador') || headers.includes('Goles'))) {
           $(el).find('tr').slice(1).each((j, tr) => {
               const cleanTds = $(tr).find('td').map((_, td) => $(td).text().trim()).get().filter(t => t !== '');
               
               if (cleanTds.length >= 2) {
                 let nombre = cleanTds[0];
                 let equipo = cleanTds[1];
                 let goles = cleanTds[2];

                 if (!isNaN(parseInt(equipo))) {
                   goles = equipo;
                   equipo = cleanTds[2] || "Desconocido";
                 } else if (!isNaN(parseInt(cleanTds[cleanTds.length - 1]))) {
                   goles = cleanTds[cleanTds.length - 1];
                 }

                 if (nombre && !nombre.includes('Descenso')) {
                   goleadores.push({
                     nombre,
                     goles: parseInt(goles) || null,
                     equipo
                   });
                 }
               }
           });
        }
      });
      
      const index = temporadas.findIndex(x => x.id === t.id);
      if (index !== -1) {
        if (campeon) temporadas[index].campeon = campeon;
        if (tablaPosiciones.length > 0) temporadas[index].tabla_posiciones = tablaPosiciones;
        if (goleadores.length > 0) temporadas[index].goleadores = goleadores.slice(0, 5);
      }

    } catch (e) {
      console.log(`   [X] Error en ${t.torneo} ${t.anio}: No se pudo obtener la página (${e.message})`);
    }
    
    await new Promise(r => setTimeout(r, 1000));
  }
  
  fs.writeFileSync(outputJsonPath, JSON.stringify(temporadas, null, 2));
  console.log('¡Extracción Clásica finalizada!');
}

startScraping();
