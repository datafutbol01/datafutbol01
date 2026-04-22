const fs = require('fs');
const path = require('path');

const g1 = require('./fix_ger_1');
const g2 = require('./fix_ger_2');
const g3 = require('./fix_ger_3');

const allFixes = { ...g1, ...g2, ...g3 };
const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

for (const [clubId, fixes] of Object.entries(allFixes)) {
    const clubFile = path.join(clubsDir, `${clubId}.json`);
    if (fs.existsSync(clubFile)) {
        const data = JSON.parse(fs.readFileSync(clubFile, 'utf8'));
        
        // La historia completa original
        const historiaOriginal = data.historia; // Array de objetos
        
        // Conservamos el item 0 (Fundación)
        const fundacion = historiaOriginal[0];

        // Tomamos los 4 nuevos hitos
        // NOTA: en fix_ger_1.js usé un array para augsburg pero objetos ({"1":{}, "2":{}}) para el resto.
        // Convertimos 'fixes' a un array de hitos en caso de que sea objeto.
        let hitosNuevos = [];
        if (Array.isArray(fixes)) {
            hitosNuevos = fixes;
        } else {
            // Es un objeto del tipo {"1": {}, "2": {}, ...}
            hitosNuevos = [fixes["1"], fixes["2"], fixes["3"], fixes["4"]];
        }

        // Reconstruimos la historia uniendo la fundación (index 0) + los 4 hitos corregidos fácticos
        data.historia = [fundacion, ...hitosNuevos];

        // Guardamos
        fs.writeFileSync(clubFile, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[OK] Corregidos los 4 hitos históricos para: ${clubId}`);
    } else {
        console.error(`[ERROR] Archivo no existe: ${clubFile}`);
    }
}
console.log('Todos los textos poéticos han sido erradicados.');
