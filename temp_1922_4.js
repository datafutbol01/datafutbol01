const fs = require('fs');
const data = JSON.parse(fs.readFileSync('app/src/data/ligas/argentina_temporadas.json', 'utf8'));

const year1922 = data.filter(t => t.anio == "1922" || String(t.anio).includes("1922"));
year1922.forEach(t => {
    console.log(`Torneo: ${t.id} - ${t.torneo}`);
    t.tabla_posiciones.slice(0, 7).forEach(row => {
        console.log(`  ${row.pos}. ${row.equipo} - ${row.pts} pts`);
    });
});
