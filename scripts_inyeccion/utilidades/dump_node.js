const fs = require('fs');
const path = require('path');
const base = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const result = [];
function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(item => {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) walk(full);
        else result.push(full);
    });
}
walk(base);
fs.writeFileSync('c:/Users/gonza/futbolhistoria/clubes/dump_logs.txt', result.join('\n'));
console.log("Done");
