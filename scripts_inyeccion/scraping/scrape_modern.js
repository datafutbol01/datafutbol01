const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const outputJsonPath = './app/src/data/ligas/argentina_temporadas.json';

// Para leer el JSON actual
let temporadas = [];
if (fs.existsSync(outputJsonPath)) {
  temporadas = JSON.parse(fs.readFileSync(outputJsonPath, 'utf8'));
}

// Extraer dinámicamente qué torneos buscar
const torneosABuscar = [];
temporadas.forEach(t => {
  const yearNum = parseInt(t.anio);
  // Buscar entre 1990 y 2014 los que NO tengan la tabla de posiciones cargada
  if (yearNum >= 1990 && yearNum <= 2014 && (!t.tabla_posiciones || t.tabla_posiciones.length === 0)) {
     let urlTorneo = t.torneo;
     if (t.torneo === 'Transición') urlTorneo = 'de_Transici%C3%B3n';
     
     torneosABuscar.push({
       id: t.id,
       anio: t.anio,
       torneo: t.torneo,
       url: `https://es.wikipedia.org/wiki/Torneo_${urlTorneo}_${t.anio}_(Argentina)`
     });
  }
});

async function startScraping() {
  console.log(`Iniciando Scraper Moderno para ${torneosABuscar.length} torneos...`);
  
  for (const t of torneosABuscar) {
    try {
      console.log(`-> Procesando: ${t.torneo} ${t.anio}`);
      const { data } = await axios.get(t.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const $ = cheerio.load(data);
      
      let tablaPosiciones = [];
      let goleadores = [];
      let campeon = "Por Definir";
      let subcampeon = "Por Definir";

      // Buscar Tabla de Posiciones
      $('table.wikitable').each((i, el) => {
        const headers = $(el).find('tr').first().find('th').map((_, th) => $(th).text().trim()).get();
        
        // Es la tabla de posiciones si tiene "Pos" y "Pts"
        if (headers.some(h => h.includes('Pos')) && headers.some(h => h.includes('Pts'))) {
          $(el).find('tr').slice(1).each((j, tr) => {
             const tds = $(tr).find('td, th').map((_, td) => $(td).text().trim()).get();
             if (tds.length >= 7) {
               // Limpiar nombre del equipo de notas al pie estilo "Boca Juniors [2]"
               const equipoStr = tds[1].replace(/\[.*?\]/g, '').trim();
               tablaPosiciones.push({
                 pos: parseInt(tds[0]) || j + 1,
                 equipo: equipoStr,
                 pts: parseInt(tds[2]),
                 pj: parseInt(tds[3]),
                 pg: parseInt(tds[4]),
                 pe: parseInt(tds[5]),
                 pp: parseInt(tds[6])
               });
             }
          });
          if (tablaPosiciones.length > 0) {
            campeon = tablaPosiciones[0].equipo;
            subcampeon = tablaPosiciones[1] ? tablaPosiciones[1].equipo : "";
          }
        }
        
        // Es la de Goleadores (Jugador, Goles, Equipo)
        if (headers.includes('Jugador') || headers.includes('Goles')) {
           $(el).find('tr').slice(1).each((j, tr) => {
               // Filtrar strings vacías que suelen ser por iconos de banderas
               const cleanTds = $(tr).find('td').map((_, td) => $(td).text().trim()).get().filter(t => t !== '');
               
               if (cleanTds.length >= 2) {
                 let nombre = cleanTds[0];
                 let equipo = cleanTds[1];
                 let goles = cleanTds[2];

                 // Si el equipo es un número y goles es una letra, están invertidos
                 if (!isNaN(parseInt(equipo))) {
                   goles = equipo;
                   equipo = cleanTds[2] || "Desconocido"; // A veces el equipo de verdad estaba en el 3ro
                 } else if (!isNaN(parseInt(cleanTds[cleanTds.length - 1]))) {
                   // A veces los goles están al final del todo
                   goles = cleanTds[cleanTds.length - 1];
                 }

                 goleadores.push({
                   nombre: nombre,
                   goles: parseInt(goles) || null,
                   equipo: equipo
                 });
               }
           });
        }
      });
      
      // Actualizar en el JSON
      const index = temporadas.findIndex(x => x.id === t.id);
      if (index !== -1) {
        temporadas[index].campeon = campeon !== "Por Definir" ? campeon : temporadas[index].campeon;
        temporadas[index].subcampeon = subcampeon !== "Por Definir" ? subcampeon : temporadas[index].subcampeon;
        if (tablaPosiciones.length > 0) temporadas[index].tabla_posiciones = tablaPosiciones;
        if (goleadores.length > 0) temporadas[index].goleadores = goleadores.slice(0, 5); // Guardamos el TOP 5
      } else {
        temporadas.push({
          id: t.id,
          anio: t.anio,
          torneo: t.torneo,
          campeon,
          subcampeon,
          goleadores: goleadores.slice(0, 5),
          tabla_posiciones: tablaPosiciones
        });
      }

    } catch (e) {
      console.log(`   [X] Error en ${t.torneo} ${t.anio}: No se pudo obtener la página (${e.message})`);
    }
    
    // Pausa artificial de 1 segundo para no ser bloqueados
    await new Promise(r => setTimeout(r, 1000));
  }
  
  // Ordenar de más nuevo a más viejo
  temporadas.sort((a,b) => {
    if (a.anio === b.anio) {
      if (a.torneo === 'Clausura') return -1;
      return 1;
    }
    return parseInt(b.anio) - parseInt(a.anio);
  });

  fs.writeFileSync(outputJsonPath, JSON.stringify(temporadas, null, 2));
  console.log('¡Extracción finalizada! argentina_temporadas.json fue actualizado exitosamente.');
}

startScraping();
