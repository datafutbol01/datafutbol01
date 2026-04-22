const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const t1913aaf = [
  { pos: 1, equipo: "Racing Club", pts: 35, pj: 20, pg: 17, pe: 1, pp: 2 },
  { pos: 2, equipo: "San Isidro", pts: 32, pj: 20, pg: 14, pe: 4, pp: 2 },
  { pos: 3, equipo: "River Plate", pts: 31, pj: 19, pg: 13, pe: 5, pp: 1 },
  { pos: 4, equipo: "Boca Juniors", pts: 27, pj: 19, pg: 12, pe: 3, pp: 4 },
  { pos: 5, equipo: "Platense", pts: 21, pj: 18, pg: 9, pe: 3, pp: 6 },
  { pos: 6, equipo: "Belgrano Athletic", pts: 18, pj: 18, pg: 8, pe: 2, pp: 8 },
  { pos: 7, equipo: "Quilmes", pts: 18, pj: 19, pg: 8, pe: 2, pp: 9 },
  { pos: 8, equipo: "Estudiantes (BA)", pts: 17, pj: 19, pg: 7, pe: 3, pp: 9 },
  { pos: 9, equipo: "Estudiantil Porteño", pts: 17, pj: 19, pg: 7, pe: 3, pp: 9 },
  { pos: 10, equipo: "Banfield", pts: 16, pj: 18, pg: 6, pe: 4, pp: 8 },
  { pos: 11, equipo: "Comercio", pts: 15, pj: 19, pg: 6, pe: 3, pp: 10 },
  { pos: 12, equipo: "Ferro Carril Oeste", pts: 9, pj: 17, pg: 2, pe: 5, pp: 10 },
  { pos: 13, equipo: "Ferrocarril Sud", pts: 8, pj: 17, pg: 3, pe: 2, pp: 12 },
  { pos: 14, equipo: "Olivos", pts: 7, pj: 17, pg: 2, pe: 3, pp: 12 },
  { pos: 15, equipo: "Riachuelo", pts: 5, pj: 17, pg: 1, pe: 3, pp: 13 }
];

const t1913faf = [
  { pos: 1, equipo: "Estudiantes (LP)", pts: 31, pj: 18, pg: 14, pe: 3, pp: 1 },
  { pos: 2, equipo: "Gimnasia y Esgrima (BA)", pts: 28, pj: 18, pg: 11, pe: 6, pp: 1 },
  { pos: 3, equipo: "Argentino de Quilmes", pts: 27, pj: 18, pg: 12, pe: 3, pp: 3 },
  { pos: 4, equipo: "Kimberley", pts: 21, pj: 18, pg: 9, pe: 3, pp: 6 },
  { pos: 5, equipo: "Independiente", pts: 19, pj: 18, pg: 7, pe: 5, pp: 6 },
  { pos: 6, equipo: "Hispano Argentino", pts: 17, pj: 18, pg: 8, pe: 1, pp: 9 },
  { pos: 7, equipo: "Tigre", pts: 15, pj: 18, pg: 6, pe: 3, pp: 9 },
  { pos: 8, equipo: "Porteño", pts: 12, pj: 18, pg: 4, pe: 4, pp: 10 },
  { pos: 9, equipo: "Atlanta", pts: 8, pj: 18, pg: 3, pe: 2, pp: 13 },
  { pos: 10, equipo: "Sociedad Sportiva Argentina", pts: 2, pj: 18, pg: 0, pe: 2, pp: 16 }
];

const t1914aaf = [
  { pos: 1, equipo: "Racing Club", pts: 23, pj: 12, pg: 11, pe: 1, pp: 0 },
  { pos: 2, equipo: "Estudiantes (BA)", pts: 21, pj: 12, pg: 10, pe: 1, pp: 1 },
  { pos: 3, equipo: "Boca Juniors", pts: 15, pj: 12, pg: 5, pe: 5, pp: 2 },
  { pos: 4, equipo: "San Isidro", pts: 11, pj: 12, pg: 2, pe: 7, pp: 3 },
  { pos: 5, equipo: "River Plate", pts: 11, pj: 12, pg: 4, pe: 3, pp: 5 },
  { pos: 6, equipo: "Platense", pts: 10, pj: 12, pg: 4, pe: 2, pp: 6 },
  { pos: 7, equipo: "Belgrano Athletic", pts: 8, pj: 12, pg: 3, pe: 2, pp: 7 },
  { pos: 8, equipo: "Ferro Carril Oeste", pts: 6, pj: 12, pg: 2, pe: 2, pp: 8 },
  { pos: 9, equipo: "Estudiantil Porteño", pts: 5, pj: 12, pg: 2, pe: 1, pp: 9 },
  { pos: 10, equipo: "Comercio", pts: 5, pj: 12, pg: 1, pe: 3, pp: 8 },
  { pos: 11, equipo: "Huracán", pts: 5, pj: 12, pg: 1, pe: 3, pp: 8 },
  { pos: 12, equipo: "Quilmes", pts: 4, pj: 12, pg: 1, pe: 2, pp: 9 },
  { pos: 13, equipo: "Banfield", pts: 0, pj: 12, pg: 0, pe: 0, pp: 12 }
];

const t1914faf = [
  { pos: 1, equipo: "Porteño", pts: 24, pj: 14, pg: 10, pe: 4, pp: 0 },
  { pos: 2, equipo: "Estudiantes (LP)", pts: 21, pj: 14, pg: 9, pe: 3, pp: 2 },
  { pos: 3, equipo: "Independiente", pts: 19, pj: 14, pg: 7, pe: 5, pp: 2 },
  { pos: 4, equipo: "Kimberley", pts: 12, pj: 14, pg: 5, pe: 2, pp: 7 },
  { pos: 5, equipo: "Gimnasia y Esgrima (BA)", pts: 11, pj: 14, pg: 4, pe: 3, pp: 7 },
  { pos: 6, equipo: "Hispano Argentino", pts: 11, pj: 14, pg: 4, pe: 3, pp: 7 },
  { pos: 7, equipo: "Atlanta", pts: 10, pj: 14, pg: 4, pe: 2, pp: 8 },
  { pos: 8, equipo: "Floresta", pts: 4, pj: 14, pg: 1, pe: 2, pp: 11 }
];

let counts = 0;
data.forEach(t => {
    if (t.id === '1913-aaf') { t.tabla_posiciones = t1913aaf; counts++; }
    if (t.id === '1913-faf') { t.tabla_posiciones = t1913faf; counts++; }
    if (t.id === '1914-aaf') { t.tabla_posiciones = t1914aaf; counts++; }
    if (t.id === '1914-faf') { t.tabla_posiciones = t1914faf; counts++; }
});

if(counts > 0){
   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
   console.log("Restored full tables 1913 and 1914.");
} else {
   console.log("Failed to restore.");
}
