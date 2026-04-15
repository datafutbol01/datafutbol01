const cheerio = require('cheerio');
async function run() {
    const res = await fetch('https://www.livefutbol.com/equipos/aberdeen-fc/celtic-fc/11/', { headers: { 'User-Agent': 'Mozilla/5.0' }});
    const html = await res.text();
    const $ = cheerio.load(html);
    
    $('table').each((i, table) => {
        if ($(table).text().includes('Balance')) {
            console.log('Found Balance table!');
            $(table).find('tr').each((j, row) => {
                const text = $(row).text().replace(/\s+/g, ' ').trim();
                console.log(text);
            });
        }
    });
}
run();
