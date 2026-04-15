const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    try {
        const res = await axios.get('https://www.livefutbol.com/competicion/bundesliga/');
        const $ = cheerio.load(res.data);
        console.log($('title').text());
        $('a').each((i, a) => {
            const h = $(a).attr('href');
            if (h && h.includes('head-to-head')) {
                console.log(h);
            }
        });
    } catch(e) { console.log(e.message); }
}
test();
