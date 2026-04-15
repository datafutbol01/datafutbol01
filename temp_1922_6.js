const fs = require('fs');

const csv = fs.readFileSync('results.csv', 'utf8');
const lines = csv.split('\n');

let tournaments = new Set();
for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    let row = lines[i].split(',');
    if (row[1].includes('1922')) {
       tournaments.add(row[1]);
    }
}
console.log(Array.from(tournaments));
