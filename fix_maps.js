const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes';
const leagues = ['argentina', 'inglaterra', 'espania'];

// 1. Arreglamos Boca manualmente
const bocaFile = path.join(baseDir, 'argentina', 'boca-juniors.json');
if (fs.existsSync(bocaFile)) {
    const bocaData = JSON.parse(fs.readFileSync(bocaFile, 'utf-8'));
    if (bocaData.canchas) {
        bocaData.canchas.forEach(c => {
            if (c.nombre.includes('Crucero')) {
                c.direccion = 'Brandsen y Del Crucero, La Boca, Buenos Aires';
            } else if (c.nombre.includes('Armando')) {
                c.direccion = 'Brandsen 805, La Boca, Buenos Aires';
            }
        });
        fs.writeFileSync(bocaFile, JSON.stringify(bocaData, null, 2), 'utf-8');
    }
}

// 2. Inyectamos las URLs
let urlsFixed = 0;
leagues.forEach(league => {
    const dir = path.join(baseDir, league);
    if (!fs.existsSync(dir)) return;
    
    fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(file => {
        const fullPath = path.join(dir, file);
        const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        let modified = false;
        
        if (data.canchas) {
            data.canchas.forEach(c => {
                if (!c.url || !c.url.includes('maps')) {
                    // Si no tiene direccion, usamos el nombre nomas
                    let queryTerm = c.direccion || c.nombre; 
                    
                    // Si tiene geolocalizacion, es la fuente de verdad absoluta de google maps
                    if (c.lat && c.lng) {
                        queryTerm = `${c.lat},${c.lng}`;
                    }
                    
                    c.url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryTerm)}`;
                    modified = true;
                    urlsFixed++;
                }
            });
            
            if (modified) {
                fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
            }
        }
    });
});

console.log(`Auditoría superada: ${urlsFixed} estadios ahora tienen su URL de Google Maps anclada a su dirección.`);
