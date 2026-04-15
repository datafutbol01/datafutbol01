const cheerio = require('cheerio');
const fs = require('fs');

const data = fs.readFileSync('livefutbol.html');
const $ = cheerio.load(data);

// By reading the livefutbol table, let's find anything related to matches or balance.
const rows = $('table.standard_tbg tr');
console.log('Found rows:', rows.length);
rows.each((i, row) => {
    const text = $(row).text().replace(/\s+/g, ' ').trim();
    if (text.includes('Balance')) {
        console.log('Match balance line:', text);
    }
});

// Or just print all text
// console.log($('.data').text());
