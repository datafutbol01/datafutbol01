const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes';
const leagues = ['argentina', 'inglaterra', 'espania'];

let modifiedCount = 0;
leagues.forEach(league => {
    const dir = path.join(baseDir, league);
    if (!fs.existsSync(dir)) return;
    
    fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(file => {
        const fullPath = path.join(dir, file);
        const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        
        if (data.canchas) {
            data.canchas.forEach(c => {
                // Reescribimos TODA url dependiente exclusivamente del string direccion literal
                let rawAddress = c.direccion && c.direccion.trim() !== '' ? c.direccion : c.nombre;
                c.url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rawAddress)}`;
                modifiedCount++;
            });
            fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
        }
    });
});
console.log(`Reescritura de mapas purista finalizada: ${modifiedCount} estadios forzados a usar su texto de dirección.`);
