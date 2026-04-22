const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const t1921aamf = [
  { pos: 1, equipo: "Racing Club", pts: 66, pj: 38, pg: 30, pe: 6, pp: 2 },
  { pos: 2, equipo: "River Plate", pts: 54, pj: 38, pg: 25, pe: 4, pp: 9 },
  { pos: 3, equipo: "Independiente", pts: 53, pj: 38, pg: 22, pe: 9, pp: 7 },
  { pos: 4, equipo: "Gimnasia y Esgrima (LP)", pts: 52, pj: 38, pg: 23, pe: 6, pp: 9 },
  { pos: 5, equipo: "Defensores de Belgrano", pts: 48, pj: 38, pg: 20, pe: 8, pp: 10 }
];

const t1926aamf = [
  { pos: 1, equipo: "Independiente", pts: 46, pj: 25, pg: 21, pe: 4, pp: 0 },
  { pos: 2, equipo: "San Lorenzo", pts: 45, pj: 25, pg: 21, pe: 3, pp: 1 },
  { pos: 3, equipo: "Platense", pts: 37, pj: 25, pg: 16, pe: 5, pp: 4 },
  { pos: 4, equipo: "Racing Club", pts: 34, pj: 25, pg: 17, pe: 0, pp: 8 },
  { pos: 5, equipo: "Boca Alumni", pts: 31, pj: 25, pg: 14, pe: 3, pp: 8 }
];

const t1931aaf = [
  { pos: 1, equipo: "Estudiantil Porteño", pts: 26, pj: 15, pg: 12, pe: 2, pp: 1 },
  { pos: 2, equipo: "Almagro", pts: 26, pj: 15, pg: 13, pe: 0, pp: 2 },
  { pos: 3, equipo: "Sportivo Buenos Aires", pts: 22, pj: 15, pg: 11, pe: 0, pp: 4 },
  { pos: 4, equipo: "El Porvenir", pts: 21, pj: 15, pg: 9, pe: 3, pp: 3 },
  { pos: 5, equipo: "Excursionistas", pts: 17, pj: 15, pg: 7, pe: 3, pp: 5 }
];

const t1936cc = [
  { pos: 1, equipo: "River Plate", pts: 28, pj: 17, pg: 13, pe: 2, pp: 2 },
  { pos: 2, equipo: "San Lorenzo", pts: 24, pj: 17, pg: 11, pe: 2, pp: 4 },
  { pos: 3, equipo: "Racing Club", pts: 23, pj: 17, pg: 10, pe: 3, pp: 4 },
  { pos: 4, equipo: "Independiente", pts: 21, pj: 17, pg: 10, pe: 1, pp: 6 },
  { pos: 5, equipo: "Boca Juniors", pts: 20, pj: 17, pg: 9, pe: 2, pp: 6 }
];

data.forEach(t => {
    if (t.id === '1921-aamf') { t.tabla_posiciones = t1921aamf; }
    if (t.id === '1926-aamf') { t.tabla_posiciones = t1926aamf; }
    if (t.id === '1931-aaf') { t.tabla_posiciones = t1931aaf; }
    if (t.id === '1936-cc') { t.tabla_posiciones = t1936cc; }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Patched 1921, 1926, 1931, and 1936 successfully.");
