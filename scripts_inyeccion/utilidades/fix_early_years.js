const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 1891: Correct as is.
// 1896:
// 1. Lomas Academy 14 (8 pj)
// 2. Flores Athletic 10 (8 pj)
// 3. Lomas Athletic 9 (8 pj)
// 4. Belgrano Athletic 7 (8 pj)
// 5. Retiro Athletic 0 (8 pj)
// This is exactly what the DB has. So 1896 is CORRECT.

// 1901:
// 1. Alumni 12 (6 pj)
// 2. Belgrano Athletic 6 (6 pj)
// 3. Quilmes 4 (6 pj)
// 4. Lomas Athletic 2 (6 pj)
// DB has exactly this. 1901 is CORRECT.

// 1906:
// In 1906, there was Group A and Group B.
// Group A: Lomas AC 15(10), San Martin 12(10), Estudiantes (BA) 12(10), San Isidro 10(10), Reformer 7(10), Barracas AC 1(10)
// Group B: Alumni 14(8), Quilmes 12(8), Belgrano AC 12(8), Argentino de Quilmes 2(8), Belgrano Extra 0(8)
// Final: Alumni 4 - 0 Lomas AC.
// I will rewrite the 1906 table to reflect the true standings merged by Points and group? Or maybe just correct it so Alumni is first as Champion. Let's merge them properly.
const table1906 = [
  { pos: 1, equipo: "Alumni Athletic Club", pts: 14, pj: 8, pg: 7, pe: 0, pp: 1 },
  { pos: 2, equipo: "Lomas Athletic", pts: 15, pj: 10, pg: 7, pe: 1, pp: 2 },
  { pos: 3, equipo: "Quilmes", pts: 12, pj: 8, pg: 6, pe: 0, pp: 2 },
  { pos: 4, equipo: "San Martín Athletic", pts: 12, pj: 10, pg: 5, pe: 2, pp: 3 },
  { pos: 5, equipo: "Estudiantes (BA)", pts: 12, pj: 10, pg: 6, pe: 0, pp: 4 },
  { pos: 6, equipo: "Belgrano Athletic", pts: 12, pj: 8, pg: 6, pe: 0, pp: 2 },
  { pos: 7, equipo: "San Isidro", pts: 10, pj: 10, pg: 5, pe: 0, pp: 5 },
  { pos: 8, equipo: "Reformer", pts: 7, pj: 10, pg: 3, pe: 1, pp: 6 },
  { pos: 9, equipo: "Argentino de Quilmes", pts: 2, pj: 8, pg: 1, pe: 0, pp: 7 },
  { pos: 10, equipo: "Barracas Athletic", pts: 1, pj: 10, pg: 1, pe: 1, pp: 8 },
  { pos: 11, equipo: "Belgrano Extra", pts: 0, pj: 8, pg: 0, pe: 0, pp: 8 }
];

// 1911:
// 1. Alumni 23 (16 pj)
// 2. Porteño 23 (16 pj)
// 3. San Isidro 18 (16 pj)
// 4. Racing Club 17 (16 pj)
// 5. River Plate 16 (16 pj)
// 6. Gimnasia y Esgrima (BA) 14 (16 pj)
// 7. Belgrano Athletic 13 (16 pj)
// 8. Estudiantes (BA) 12 (16 pj)
// 9. Quilmes 8 (16 pj)
// Final Tiebreaker: Alumni 2-1 Porteño
const table1911 = [
  { pos: 1, equipo: "Alumni", pts: 23, pj: 16, pg: 11, pe: 1, pp: 4 },
  { pos: 2, equipo: "Porteño", pts: 23, pj: 16, pg: 10, pe: 3, pp: 3 },
  { pos: 3, equipo: "San Isidro", pts: 18, pj: 16, pg: 7, pe: 4, pp: 5 },
  { pos: 4, equipo: "Racing Club", pts: 17, pj: 16, pg: 6, pe: 5, pp: 5 },
  { pos: 5, equipo: "River Plate", pts: 16, pj: 16, pg: 6, pe: 4, pp: 6 },
  { pos: 6, equipo: "Gimnasia y Esgrima (BA)", pts: 14, pj: 16, pg: 5, pe: 4, pp: 7 },
  { pos: 7, equipo: "Belgrano Athletic", pts: 13, pj: 16, pg: 4, pe: 5, pp: 7 },
  { pos: 8, equipo: "Estudiantes (BA)", pts: 12, pj: 16, pg: 2, pe: 8, pp: 6 },
  { pos: 9, equipo: "Quilmes", pts: 8, pj: 16, pg: 2, pe: 4, pp: 10 }
];

let found1906 = false;
let found1911 = false;
for (let i = 0; i < data.length; i++) {
    if (data[i].id === '1906-pd') {
        data[i].tabla_posiciones = table1906;
        data[i].campeon = "Alumni Athletic Club";
        data[i].subcampeon = "Lomas Athletic";
        found1906 = true;
    }
    if (data[i].id === '1911-pd') {
        data[i].tabla_posiciones = table1911;
        data[i].campeon = "Alumni";
        data[i].subcampeon = "Porteño";
        found1911 = true;
    }
}

if(found1906 && found1911) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Patched 1906 and 1911 tables.");
} else {
    console.log("Failed to patch properly");
}
