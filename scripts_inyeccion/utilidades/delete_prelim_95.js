const fs = require('fs');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
let json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

if (json.bracket && json.bracket.preliminary) {
    // Delete preliminary round
    delete json.bracket.preliminary;
    fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
    console.log("Preliminary round deleted successfully.");
} else {
    console.log("Preliminary round does not exist.");
}
