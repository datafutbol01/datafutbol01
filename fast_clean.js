const fs = require('fs');
const path = 'app/src/data/ligas/argentina_enfrentamientos.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const cleaned = data.map(item => ({
    id: item.id,
    equipo_a: item.equipo_a,
    equipo_b: item.equipo_b,
    color_a: item.color_a,
    color_b: item.color_b,
    pj: 0,
    victorias_a: 0,
    victorias_b: 0,
    empates: 0,
    goles_a: 0,
    goles_b: 0
}));

fs.writeFileSync(path, JSON.stringify(cleaned, null, 2), 'utf8');
console.log('✅ Cifras limpiadas a cero en los 435 cruces.');
