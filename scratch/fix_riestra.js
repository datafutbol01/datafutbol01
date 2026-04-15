const fs = require('fs');
const path = require('path');
const fileP = path.join(__dirname, '..', 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let data = JSON.parse(fs.readFileSync(fileP, 'utf8'));

const ARG = 'Asociación Atlética Argentinos Juniors';
const RIESTRA = 'Club Deportivo Riestra Asociación de Fomento Barrio Sud';

let m = data.find(x => 
    (x.equipo_a === ARG && x.equipo_b === RIESTRA) ||
    (x.equipo_b === ARG && x.equipo_a === RIESTRA)
);

if (m) {
    if (m.equipo_a === ARG) {
        m.pj = 3; m.victorias_a = 2; m.empates = 0; m.victorias_b = 1;
        m.pe = 0; m.pg_a = 2; m.pg_b = 1; 
    } else {
        m.pj = 3; m.victorias_b = 2; m.empates = 0; m.victorias_a = 1;
        m.pe = 0; m.pg_b = 2; m.pg_a = 1;
    }
    fs.writeFileSync(fileP, JSON.stringify(data, null, 2));
    console.log("Riestra corregido:", m.pj, "PJ,", 2, "Victorias ARG,", 1, "Victoria Riestra");
}
