const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const t1913aaf = [
  { pos: 1, equipo: "Racing Club", pts: 35, pj: 20, pg: 17, pe: 1, pp: 2 },
  { pos: 2, equipo: "San Isidro", pts: 32, pj: 20, pg: 14, pe: 4, pp: 2 },
  { pos: 3, equipo: "River Plate", pts: 31, pj: 19, pg: 13, pe: 5, pp: 1 },
  { pos: 4, equipo: "Boca Juniors", pts: 27, pj: 19, pg: 12, pe: 3, pp: 4 },
  { pos: 5, equipo: "Platense", pts: 21, pj: 18, pg: 9, pe: 3, pp: 6 }
];

const t1913faf = [
  { pos: 1, equipo: "Estudiantes (LP)", pts: 31, pj: 18, pg: 14, pe: 3, pp: 1 },
  { pos: 2, equipo: "Gimnasia y Esgrima (BA)", pts: 28, pj: 18, pg: 11, pe: 6, pp: 1 },
  { pos: 3, equipo: "Argentino de Quilmes", pts: 27, pj: 18, pg: 12, pe: 3, pp: 3 },
  { pos: 4, equipo: "Kimberley", pts: 21, pj: 18, pg: 9, pe: 3, pp: 6 },
  { pos: 5, equipo: "Independiente", pts: 19, pj: 18, pg: 7, pe: 5, pp: 6 }
];

const t1914aaf = [
  { pos: 1, equipo: "Racing Club", pts: 23, pj: 12, pg: 11, pe: 1, pp: 0 },
  { pos: 2, equipo: "Estudiantes (BA)", pts: 21, pj: 12, pg: 10, pe: 1, pp: 1 },
  { pos: 3, equipo: "Boca Juniors", pts: 15, pj: 12, pg: 5, pe: 5, pp: 2 },
  { pos: 4, equipo: "San Isidro", pts: 11, pj: 12, pg: 2, pe: 7, pp: 3 },
  { pos: 5, equipo: "River Plate", pts: 11, pj: 12, pg: 4, pe: 3, pp: 5 }
];

const t1914faf = [
  { pos: 1, equipo: "Porteño", pts: 24, pj: 14, pg: 10, pe: 4, pp: 0 },
  { pos: 2, equipo: "Estudiantes (LP)", pts: 21, pj: 14, pg: 9, pe: 3, pp: 2 },
  { pos: 3, equipo: "Independiente", pts: 19, pj: 14, pg: 7, pe: 5, pp: 2 },
  { pos: 4, equipo: "Kimberley", pts: 12, pj: 14, pg: 5, pe: 2, pp: 7 },
  { pos: 5, equipo: "Gimnasia y Esgrima (BA)", pts: 11, pj: 14, pg: 4, pe: 3, pp: 7 }
];

let counts = 0;
data.forEach(t => {
    if (t.id === '1913-aaf') { t.tabla_posiciones = t1913aaf; t.campeon = "Racing Club"; t.subcampeon = "San Isidro"; counts++; }
    if (t.id === '1913-faf') { t.tabla_posiciones = t1913faf; t.campeon = "Estudiantes (LP)"; t.subcampeon = "Gimnasia y Esgrima (BA)"; counts++; }
    if (t.id === '1914-aaf') { t.tabla_posiciones = t1914aaf; t.campeon = "Racing Club"; t.subcampeon = "Estudiantes (BA)"; counts++; }
    if (t.id === '1914-faf') { t.tabla_posiciones = t1914faf; t.campeon = "Porteño"; t.subcampeon = "Estudiantes (LP)"; counts++; }
    // 1915 Unified
    if (t.id === '1915-pd') { t.campeon = "Racing Club"; t.subcampeon = "San Isidro"; counts++; }
});

if(counts > 0){
   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
   console.log("Patched 1913 and 1914 tables.");
} else {
   console.log("Failed to patch.");
}
