const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
  try {
    const url = 'https://www.promiedos.com.ar/historial.php';
    console.log('Fetching', url);
    let res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' }});
    let $ = cheerio.load(res.data);
    
    // Check if there's any select dropdowns or forms
    const options = $('select option').map((i, el) => {
        return { val: $(el).attr('value'), text: $(el).text() };
    }).get();
    
    console.log(`Encontrados ${options.length} opciones en selectores.`);
    console.log(options.slice(0, 10));

  } catch (e) {
    console.log('Error:', e.message);
  }
}
test();
