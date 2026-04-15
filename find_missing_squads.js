const fs = require('fs');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

const missing = json.participants.filter(p => !p.squad || p.squad.length === 0).map(p => p.name);
console.log(missing);
