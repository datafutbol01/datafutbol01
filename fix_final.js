const fs = require('fs');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
let json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

if (Array.isArray(json.bracket.final)) {
    json.bracket.final = json.bracket.final[0];
    fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
    console.log("Fixed final bracket format");
}
