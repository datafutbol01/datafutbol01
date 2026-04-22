const fs = require('fs');

const csv = fs.readFileSync('results.csv', 'utf8');
const lines = csv.split('\n');
const headers = lines[0].split(',');
// home_team,away_team,home_score,away_score,tournament,date...

let matches = [];
for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    
    // Split by comma ignoring commas inside quotes
    let row = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
    // Alternatively, simple split if no quotes are used
    row = lines[i].split(',');
    
    // index 0: date? let's find the headers
    if (i === 1) {
       console.log('Headers:', lines[0]);
       console.log('Row 1:', lines[1]);
    }
}
