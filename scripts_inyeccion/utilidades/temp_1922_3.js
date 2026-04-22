const fs = require('fs');
const data = JSON.parse(fs.readFileSync('app/src/data/ligas/argentina_temporadas.json', 'utf8'));

const year1922 = data.filter(t => t.anio == "1922" || String(t.anio).includes("1922"));
console.log(JSON.stringify(year1922.map(t => ({
    id: t.id,
    torneo: t.torneo,
    anio: t.anio,
    campeon: t.campeon,
    goleadores: t.goleadores,
    tabla_length: t.tabla_posiciones ? t.tabla_posiciones.length : 0,
    primeros: t.tabla_posiciones ? t.tabla_posiciones.map(x => x.equipo).slice(0, 5) : [] 
})), null, 2));
