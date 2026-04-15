const fs = require('fs');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

const ajax = json.participants.find(p => p.id === 'ajax');
if (ajax && ajax.squad) {
    let oulida = ajax.squad.find(s => s.name === 'Tarik Oulida');
    if (oulida) {
        oulida.no = '16';
        console.log("Fixed Oulida");
    }
    ajax.squad = ajax.squad.filter(s => s.name !== 'Clyde Wijnhard');
    console.log("Removed Wijnhard");
}

fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
console.log("Fixed Ajax");
