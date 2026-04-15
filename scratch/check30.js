const fs = require('fs');
const path = require('path');
const d = path.join('app','src','data','clubes','argentina');
const teams = fs.readdirSync(d)
    .filter(f => f.endsWith('.json'))
    .map(f => {
        const j = JSON.parse(fs.readFileSync(path.join(d,f), 'utf8'));
        return {id: j.id, n: j.datos.nombre_oficial || j.datos.nombre_corto};
    });
console.log(`Encontrados ${teams.length} equipos.`);
console.table(teams);
