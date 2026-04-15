const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    // Real Madrid vs Barcelona
    const url = 'https://www.livefutbol.com/equipos/real-madrid/fc-barcelona/11/';
    console.log('Fetching', url);
    try {
        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $ = cheerio.load(res.data);
        
        // Find the table that contains "Balance total" or "Partidos"
        let found = false;
        $('table.standard_tbg').each((i, table) => {
            const text = $(table).text();
            if (text.includes('Balance total')) {
                found = true;
                console.log('Found Balance Total Table');
                // The structure usually has headers, then rows for Home, Away, Total.
                $(table).find('tr').each((j, tr) => {
                    const rowText = $(tr).text().replace(/\s+/g, ' ').trim();
                    if (rowText.includes('Balance total')) {
                        const cols = $(tr).find('td');
                        const matches = $(cols[2]).text().trim();
                        const wins = $(cols[3]).text().trim();
                        const draws = $(cols[4]).text().trim();
                        const losses = $(cols[5]).text().trim();
                        console.log(`Total: ${matches} PJ | ${wins} PG | ${draws} PE | ${losses} PP`);
                    }
                });
            }
        });
        if (!found) console.log('Could not find total balance');
    } catch(e) {
        console.error(e.message);
    }
}
test();
