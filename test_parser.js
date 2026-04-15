const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('test.html', 'utf8'));

$('table.standard_tbg').each((i, table) => {
    $(table).find('tr').each((j, tr) => {
        const text = $(tr).text().replace(/\s+/g, ' ').trim();
        if (text.includes('Balance total')) {
            console.log("Found!", text);
        }
    });
});
