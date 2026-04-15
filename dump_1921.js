const fs = require('fs');
const html = fs.readFileSync('rsssf1920s.html', 'utf8');
let start = html.indexOf('Amateurs de Football - 1921');
let end = html.indexOf('1922', start);
let chunk = html.substring(start, end).replace(/\r/g, '');
fs.writeFileSync('1921_aamf.txt', chunk);
