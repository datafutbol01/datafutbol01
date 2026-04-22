const fs = require('fs');
const path = require('path');

const b1 = require('./build_fr_1');
const b2 = require('./build_fr_2');
const b3 = require('./build_fr_3');

const histories = { ...b1, ...b2, ...b3 };

const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

let successCount = 0;
let errorCount = 0;

for (const [clubId, historiaArr] of Object.entries(histories)) {
    const clubFile = path.join(clubsDir, `${clubId}.json`);
    if (!fs.existsSync(clubFile)) {
        console.error(`[ERROR] Archivo no existe: ${clubFile}`);
        errorCount++;
        continue;
    }

    try {
        const data = JSON.parse(fs.readFileSync(clubFile, 'utf8'));
        
        // Reemplazamos/inyectamos el arreglo historia completo
        data.historia = historiaArr;

        // Guardamos el JSON de vuelta al disco formateado a 2 espacios
        fs.writeFileSync(clubFile, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[OK] Inyectado historia en ${clubId}.json`);
        successCount++;
    } catch (e) {
        console.error(`[ERROR] Parseando o escribiendo ${clubId}.json:`, e);
        errorCount++;
    }
}

console.log(`\nInyeccion finalizada. Exitos: ${successCount}. Errores: ${errorCount}.`);
