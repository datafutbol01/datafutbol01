const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    try {
        const url = 'https://www.livefutbol.com/teams/bayern-muenchen/record-opponent/';
        const r = await axios.get(url);
        const $ = cheerio.load(r.data);
        $('a').each((i, a) => {
            const href = $(a).attr('href');
            if (href && href.includes('dortmund')) {
                console.log(href);
            }
        });
    } catch(e) {
        console.log('Error fetching', e.message);
    }
}
test();
