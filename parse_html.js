const fs = require('fs');
const html = fs.readFileSync('rsssf1910s.html', 'utf8');

function extractTable(titleMarker, nTeams) {
    let rawStr = "";
    let lines = html.split('\n');
    let found = false;
    let tablesArr = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.includes(titleMarker) || line.includes(titleMarker.toUpperCase())) {
            found = true;
            continue;
        }
        if (found) {
            // Find the start of the table data
            if (line.match(/^\s*\d+\.\s*[a-zA-Z]/) || line.match(/^\s*[a-zA-Z]/)) {
                let j = i;
                while (j < lines.length && tablesArr.length < nTeams) {
                    let teamLine = lines[j].replace(/<[^>]*>/g, '').trim();
                    if (teamLine.match(/^\d+\./) || teamLine.match(/^[a-zA-Z]/)) {
                        tablesArr.push(teamLine);
                    }
                    j++;
                }
                break;
            }
        }
    }
    return tablesArr;
}

console.log("== 1913 AAF ==");
console.log(extractTable('Asociaci', 15));

console.log("== 1913 FAF ==");
console.log(extractTable('Federaci', 10));

