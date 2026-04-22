const fs = require('fs');
const csv = fs.readFileSync('results.csv', 'utf8');
const lines = csv.split('\n');
let tours = new Set();
for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    let row = lines[i].split(',');
    if (row[1] && row[1].includes('192')) {
        tours.add(row[1]);
    }
}
console.log(Array.from(tours).sort());
