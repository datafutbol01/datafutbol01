const axios = require('axios');
const cheerio = require('cheerio');

async function testScrape() {
  try {
    const url = 'https://es.wikipedia.org/wiki/Torneo_Apertura_2004_(Argentina)';
    console.log('Fetching', url);
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    });

    const $ = cheerio.load(data);
    
    console.log('--- TABLAS ENCONTRADAS ---');
    $('table').each((i, el) => {
      const ths = $(el).find('tr').first().find('th').map((_, th) => $(th).text().trim()).get();
      if (ths.length > 0) {
        console.log(`Tabla ${i}:`, ths.join(' | '));
      }
      
      // Intentar encontrar tabla de posiciones (suele tener Pos., Equipo, Pts., PJ...)
      if (ths[0] && (ths[0].includes('Pos') || ths.includes('Pts.') || ths.includes('Equipo'))) {
         console.log(`^ ESTA PARECE LA TABLA DE POSICIONES ^`);
         // Extrayendo las primeras 3 filas...
         $(el).find('tr').slice(1, 4).each((j, tr) => {
             const tds = $(tr).find('td, th').map((_, td) => $(td).text().trim()).get();
             console.log(`  Row ${j}:`, tds.join(' | '));
         });
      }
      
      // Intentar encontrar tabla de goleadores
      if (ths.includes('Jugador') || ths.includes('Goles') || ths.includes('Equipo')) {
         console.log(`^ ESTA PARECE LA TABLA DE GOLEADORES ^`);
         $(el).find('tr').slice(1, 6).each((j, tr) => {
             const tds = $(tr).find('td').map((_, td) => $(td).text().trim()).get();
             console.log(`  Row ${j}:`, tds.join(' | '));
         });
      }
    });

  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

testScrape();
