const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('test.html', 'utf8'));
$('table.standard_tbg').each((i, table) => {
    console.log("TABLE", i);
    $(table).find('tr').each((j, tr) => {
        console.log("  ROW:", $(tr).text().replace(/\s+/g, ' ').trim());
    });
});
