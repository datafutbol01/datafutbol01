const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.livefutbol.com/clasificacion/bundesliga-2023-2024/')
    .then(r => {
        const $ = cheerio.load(r.data);
        $('table.standard_tbg a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.includes('/equipos/')) {
                console.log(href);
            }
        });
    })
    .catch(console.error);
