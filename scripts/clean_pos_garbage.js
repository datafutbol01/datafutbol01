const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

let fixedCount = 0;

for (let t of data) {
    if (!t.tabla_posiciones || t.tabla_posiciones.length === 0) continue;

    const originalLength = t.tabla_posiciones.length;
    
    // Filtramos la basura
    t.tabla_posiciones = t.tabla_posiciones.filter(row => {
        const eqStr = row.equipo.toLowerCase().trim();
        // Criterios de basura que metió el scraper de wiki
        if (eqStr === 'pos' || eqStr === 'pos.' || eqStr === 'equipo' || eqStr === 'eq' || eqStr === 'eq.') return false;
        if (eqStr.length <= 2) return false;
        if (row.pj === 0 && row.pg === 0 && row.pts === 0 && row.pp === 0 && row.pe === 0) return false; // Filtramos la fila de '0'
        return true;
    });

    // Filtramos duplicados basándonos en el nombre del equipo, porque a veces la wiki repite las filas por culpa de thead/tbody tfoot multiples
    const seen = new Set();
    t.tabla_posiciones = t.tabla_posiciones.filter(row => {
        const key = row.equipo.toLowerCase().trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    if (t.tabla_posiciones.length !== originalLength) {
        // Debemos regenerar el campo `pos` secuencialmente por las dudas
        // Las tablas están ordenadas ya, solo renumeramos
        t.tabla_posiciones.forEach((row, i) => {
             row.pos = i + 1;
        });
        
        fixedCount++;
        console.log(`Corregida basura en: ${t.anio} ${t.torneo}`);
    }
}

if (fixedCount > 0) {
    fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
    console.log(`Limpieza finalizada. ${fixedCount} años corregidos.`);
} else {
    console.log("No se encontró basura.");
}
