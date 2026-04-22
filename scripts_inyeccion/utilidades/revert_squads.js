const fs = require('fs');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

for (const team of json.participants) {
    if (team.id !== 'ajax' && team.id !== 'milan') {
        team.squad = [];
    }
}

fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
console.log("Reverted squads except for Ajax and Milan");
