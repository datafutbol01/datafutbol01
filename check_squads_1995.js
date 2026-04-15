const fs = require('fs');
const path = require('path');

const file1995 = path.join(__dirname, 'app', 'src', 'data', 'copas', 'champions', '1995.json');
const data1995 = JSON.parse(fs.readFileSync(file1995, 'utf-8'));

let completas = 0;
let incompletas = 0;
let details = [];

data1995.participants.forEach(team => {
    // Check if squad is populated
    if (team.squad && team.squad.length > 0) {
        // Let's check the first player as a sample, or verify all
        let allHaveData = true;
        let validPlayers = 0;
        team.squad.forEach(player => {
            if (player.name && player.flag && player.pos && player.no !== undefined) {
                validPlayers++;
            } else {
                allHaveData = false;
            }
        });

        if (validPlayers >= 11 && allHaveData) {
            completas++;
            details.push(`✅ ${team.name} (${team.squad.length} jugadores)`);
        } else {
            incompletas++;
            details.push(`❌ ${team.name} (Faltan datos o solo tiene ${team.squad.length} jugadores)`);
        }
    } else {
        incompletas++;
        details.push(`❌ ${team.name} (Plantilla vacía)`);
    }
});

console.log(`\nPlantillas completas: ${completas} de ${data1995.participants.length}`);
console.log(`Plantillas incompletas/vacías: ${incompletas}`);
console.log("\nDetalle por equipo:");
details.forEach(d => console.log(d));
