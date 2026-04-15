const axios = require('axios');
const cheerio = require('cheerio');

async function run() {
  try {
    const res = await axios.get('https://www.promiedos.com.ar/historial', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' }
    });
    const $ = cheerio.load(res.data);
    let id1, id2;
    $('select[name="equipo1"] option').each((i, el) => {
      const text = $(el).text().toLowerCase();
      if (text.includes('argentinos')) id1 = $(el).attr('value');
      if (text.includes('aldosivi')) id2 = $(el).attr('value');
    });
    
    console.log(`ID1 (Argentinos): ${id1}, ID2 (Aldosivi): ${id2}`);
    
    const histRes = await axios.get(`https://www.promiedos.com.ar/historial?equipo1=${id1}&equipo2=${id2}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' }
    });
    const $2 = cheerio.load(histRes.data);
    
    // El texto principal suele estar en div's destacados o tablas cortas
    $2('div[style*="font-weight:bold; font-size: 14px"]').each((i, el) => {
       console.log($2(el).text().trim());
    });
    $2('#fixhead').nextAll('div').slice(0, 3).each((i, el) => {
       const t = $2(el).text().trim();
       if (t && t.includes('Jugaron')) console.log(t);
    });
  } catch (e) {
    console.log('Error:', e.message);
  }
}
run();
