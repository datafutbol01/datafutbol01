const axios = require('axios');
const cheerio = require('cheerio');

async function testWiki() {
    try {
        const url = 'https://es.wikipedia.org/w/api.php?action=parse&page=Superclásico_del_fútbol_argentino&prop=text&format=json';
        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = res.data.parse.text['*'];
        const $ = cheerio.load(html);
        
        // Find tables
        let msg = '';
        $('table.wikitable').each((i, el) => {
            const isHist = $(el).text().includes('Boca Juniors') && $(el).text().includes('River Plate') && $(el).text().includes('Empates');
            if (isHist) {
                // Find a row that looks like total
                $(el).find('tr').each((j, tr) => {
                    const text = $(tr).text().replace(/\s+/g, ' ').trim();
                    if (text.includes('Total') || text.includes('265')) {
                        msg += text + '\n';
                    }
                });
            }
        });
        console.log(msg);
    } catch (e) {
        console.log(e.message);
    }
}
testWiki();
