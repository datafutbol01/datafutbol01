const axios = require('axios');
const cheerio = require('cheerio');

async function scrape() {
    try {
        const res = await axios.get('https://en.wikipedia.org/wiki/List_of_German_football_champions', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        const $ = cheerio.load(res.data);
        $('table.wikitable tr').each((i, row) => {
            const cols = $(row).find('td');
            if (cols.length >= 2) {
                let year = $(cols[0]).text().trim();
                let champ = $(cols[1]).text().trim().replace(/\[\w+\]/g, ''); 
                if (champ && year && year.match(/^\d{4}/) && parseInt(year.substring(0,4)) < 1964) {
                    console.log(year.substring(0,4), champ);
                }
            }
        });
    } catch(e) {
        console.error("Error", e.message);
    }
}
scrape();
