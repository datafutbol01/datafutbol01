const fs = require('fs');
const path = require('path');

const leagues = ['argentina', 'inglaterra', 'espania'];
const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/';

let totalChecked = 0;
let errors = [];

leagues.forEach(league => {
    const dir = path.join(baseDir, league);
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    files.forEach(f => {
        const fullPath = path.join(dir, f);
        const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        totalChecked++;
        
        const canchas = data.canchas;
        if (!canchas || canchas.length === 0) {
            errors.push(`${league}/${f}: NO TIENE ARREGLO 'canchas' O ESTÁ VACÍO`);
            return;
        }
        
        canchas.forEach((cancha, index) => {
            const num = index + 1;
            if (!cancha.url || typeof cancha.url !== 'string' || !cancha.url.includes('maps')) {
                errors.push(`${league}/${f} (cancha ${num}): URL de Google Maps FALTANTE o INVÁLIDA (${cancha.url})`);
            }
            if (!cancha.direccion || typeof cancha.direccion !== 'string' || cancha.direccion.trim() === '') {
                errors.push(`${league}/${f} (cancha ${num}): DIRECCIÓN FALTANTE o VACÍA`);
            }
        });
    });
});

console.log(`\nAuditoría de Estadios Finalizada.`);
console.log(`Ligas analizadas: ${leagues.join(', ')}`);
console.log(`Clubes totales revisados: ${totalChecked}`);
console.log(`Errores encontrados: ${errors.length}\n`);
if (errors.length > 0) {
    errors.forEach(e => console.log('❌ ' + e));
} else {
    console.log('✅ TODOS los clubes tienen Google Maps y Dirección perfectos.');
}
