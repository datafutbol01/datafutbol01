const fs = require('fs');
const ch = require('cheerio');

const h = fs.readFileSync('angers_aux.html', 'utf8');
const $ = ch.load(h);

$('table').each((i, table) => {
    $(table).find('tr').each((j, tr) => {
        console.log($(tr).text().replace(/\s+/g, ' ').trim());
    });
    console.log('---');
});
