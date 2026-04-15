const fs = require('fs');
const path = require('path');
const fileP = path.join(__dirname, '..', 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let enfrentamientos = JSON.parse(fs.readFileSync(fileP, 'utf8'));

let e = enfrentamientos.find(match => 
    (match.equipo_a === 'Asociación Atlética Argentinos Juniors' && match.equipo_b === 'Asociación Atlética Estudiantes') ||
    (match.equipo_b === 'Asociación Atlética Argentinos Juniors' && match.equipo_a === 'Asociación Atlética Estudiantes')
);

if (e) {
    if (e.equipo_a === 'Asociación Atlética Argentinos Juniors') {
        e.pj = 1; e.victorias_a = 0; e.empates = 1; e.victorias_b = 0;
        e.pe = 1; e.pg_a = 0; e.pg_b = 0; e.goles_a = 0; e.goles_b = 0;
    } else {
        e.pj = 1; e.victorias_b = 0; e.empates = 1; e.victorias_a = 0;
        e.pe = 1; e.pg_b = 0; e.pg_a = 0; e.goles_a = 0; e.goles_b = 0;
    }
}

fs.writeFileSync(fileP, JSON.stringify(enfrentamientos, null, 2));
console.log('Estudiantes RC add success');
