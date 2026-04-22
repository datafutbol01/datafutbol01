const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    // Real Madrid (id: 2) vs Barcelona (id: 1)
    const url = 'https://www.bdfutbol.com/es/p/p.php?id=2&id2=1';
    console.log('Fetching', url);
    try {
        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $ = cheerio.load(res.data);
        const rows = $('table.taula_estil tbody tr');
        console.log('Filas encontradas:', rows.length);
        
        let pg = 0, pe = 0, pp = 0;
        // BDFutbol H2H page shows all matches, but usually there's a summary block at the top or bottom.
        // Let's just print the text of elements that might hold the summary.
        $('div').each((i, el) => {
            const txt = $(el).text();
            if (txt.includes('Victorias') && txt.includes('Empates')) {
                console.log('Resumen posible:', txt.replace(/\s+/g, ' ').trim());
            }
        });
    } catch(e) {
        console.error(e.message);
    }
}
test();
