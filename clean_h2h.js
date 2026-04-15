const fs = require('fs');

const path = 'app/src/data/ligas/argentina_enfrentamientos.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const cleanedParams = data.map(item => {
    delete item.historia; // Removiendo "boludeces" y textos largos
    delete item.nombre;   // Removiendo etiquetas innecesarias
    // Keep only pure stats
    return item;
});

fs.writeFileSync(path, JSON.stringify(cleanedParams, null, 2), 'utf8');
console.log('✅ Archivo limpiado: Se removieron todos los textos poéticos ("historia").');

