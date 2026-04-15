const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

async function testUF() {
    try {
        const res = await axios.get('http://www.universofutbol.com.ar/plantillas/historialPrimeraDiv.php?equipo1=Boca+Juniors&equipo2=River+Plate', { responseType: 'arraybuffer' });
        const html = iconv.decode(res.data, 'iso-8859-1');
        const $ = cheerio.load(html);
        console.log($('body').text().substring(0, 500));
    } catch(e) {
        console.log('Error UF 1:', e.message);
    }
}
testUF();
