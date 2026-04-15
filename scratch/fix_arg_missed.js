const fs = require('fs');
const path = require('path');
const fileP = path.join(__dirname, '..', 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let data = JSON.parse(fs.readFileSync(fileP, 'utf8'));

const ARG = 'Asociación Atlética Argentinos Juniors';

function setMatch(rival, pj, v_a, e, v_b, gf, gc) {
    let m = data.find(x => 
        (x.equipo_a === ARG && x.equipo_b.includes(rival)) ||
        (x.equipo_b === ARG && x.equipo_a.includes(rival))
    );
    if (!m) {
        console.log("NOT FOUND:", rival);
        return;
    }
    
    if (m.equipo_a === ARG) {
        m.pj = pj; m.victorias_a = v_a; m.empates = e; m.victorias_b = v_b;
        m.pe = e; m.pg_a = v_a; m.pg_b = v_b; m.goles_a = gf; m.goles_b = gc;
    } else {
        m.pj = pj; m.victorias_b = v_a; m.empates = e; m.victorias_a = v_b;
        m.pe = e; m.pg_b = v_a; m.pg_a = v_b; m.goles_b = gf; m.goles_a = gc;
    }
    console.log("Updated", rival, pj, "partidos");
}

setMatch('Belgrano de Córdoba', 39, 10, 16, 13, 40, 39);
setMatch('Central Córdoba (SdE)', 10, 4, 5, 1, 10, 6);
setMatch('Asociación Atlética Estudiantes', 1, 0, 1, 0, 0, 0);

// Gimnasia Mendoza (if not already 0, set to 0)
let gm = data.find(x => 
    (x.equipo_a === ARG && x.equipo_b === 'Club Atlético Gimnasia y Esgrima') ||
    (x.equipo_b === ARG && x.equipo_a === 'Club Atlético Gimnasia y Esgrima')
);
if (gm) {
    gm.pj = 0; gm.victorias_a = 0; gm.empates = 0; gm.victorias_b = 0;
    gm.pe = 0; gm.pg_a = 0; gm.pg_b = 0; gm.goles_a = 0; gm.goles_b = 0;
}

// Riestra
// The text block said: Deportivo Riestra 2 PJ (1 V, 0 E, 1 D) (2:2). 
// User wants 3 PJ. I will set it to 3 PJ but ask about the result in chat.
setMatch('Club Deportivo Riestra Asociación de Fomento Barrio Sud', 3, 1, 0, 1, 2, 2); 
// I'll leave V/E/D as 1/0/1 for now and explain to the user.

fs.writeFileSync(fileP, JSON.stringify(data, null, 2));
console.log("Done");
