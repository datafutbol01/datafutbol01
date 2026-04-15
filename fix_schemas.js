const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

let modifiedCount = 0;

for (const file of files) {
    if (['arsenal.json', 'aston-villa.json', 'bournemouth.json', 'chelsea.json'].includes(file)) continue;
    
    const filePath = path.join(dir, file);
    let data;
    try {
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch(e) {
        console.error("Error parsing " + file);
        continue;
    }
    
    let changed = false;
    
    // Fix titulos
    if (data.titulos) {
        data.titulos = data.titulos.map(t => {
            const newT = { ...t };
            if (newT.comp !== undefined) {
                newT.nombre = newT.comp;
                delete newT.comp;
                changed = true;
            }
            if (newT.torneo !== undefined) {
                newT.nombre = newT.torneo;
                delete newT.torneo;
                changed = true;
            }
            if (newT.n !== undefined) {
                newT.cantidad = newT.n;
                delete newT.n;
                changed = true;
            }
            if (newT.anios !== undefined) {
                if (typeof newT.anios === 'string') {
                    newT.años = newT.anios.split(',').map(s => s.trim());
                } else if (Array.isArray(newT.anios)) {
                    newT.años = newT.anios.map(y => y.toString());
                } else {
                    newT.años = [newT.anios.toString()];
                }
                delete newT.anios;
                changed = true;
            }
            if (newT.anos !== undefined) {
                if (typeof newT.anos === 'string') {
                    newT.años = newT.anos.split(',').map(s => s.trim());
                } else if (Array.isArray(newT.anos)) {
                    newT.años = newT.anos.map(y => y.toString());
                } else {
                    newT.años = [newT.anos.toString()];
                }
                delete newT.anos;
                changed = true;
            }
            return newT;
        });
    }

    // Fix goleadores
    if (data.goleadores_historicos) {
        data.goleadores_historicos = data.goleadores_historicos.map(g => {
            const newG = { ...g };
            ['pos', 'apodo', 'posicion', 'obs'].forEach(key => {
                if (newG[key] !== undefined) {
                    delete newG[key];
                    changed = true;
                }
            });
            return newG;
        });
    }
    
    if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        modifiedCount++;
    }
}
console.log('Schema automations done! Modified files: ' + modifiedCount);
