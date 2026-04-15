const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const tablaAAmF = [
  { pos: 1, equipo: "Independiente", pts: 65, pj: 40, pg: 30, pe: 5, pp: 5 },
  { pos: 2, equipo: "River Plate", pts: 61, pj: 40, pg: 25, pe: 11, pp: 4 },
  { pos: 3, equipo: "San Lorenzo", pts: 60, pj: 40, pg: 24, pe: 12, pp: 4 },
  { pos: 4, equipo: "Racing Club", pts: 57, pj: 40, pg: 23, pe: 11, pp: 6 },
  { pos: 5, equipo: "Velez Sarsfield", pts: 53, pj: 40, pg: 19, pe: 15, pp: 6 },
  { pos: 6, equipo: "Platense", pts: 52, pj: 40, pg: 20, pe: 12, pp: 8 },
  { pos: 7, equipo: "Gimnasia (LP)", pts: 49, pj: 40, pg: 18, pe: 13, pp: 9 },
  { pos: 8, equipo: "Banfield", pts: 42, pj: 40, pg: 18, pe: 6, pp: 16 },
  { pos: 9, equipo: "Tigre", pts: 41, pj: 40, pg: 15, pe: 11, pp: 14 },
  { pos: 10, equipo: "Atlanta", pts: 39, pj: 40, pg: 14, pe: 11, pp: 15 },
  { pos: 11, equipo: "San Isidro", pts: 35, pj: 40, pg: 12, pe: 11, pp: 17 },
  { pos: 12, equipo: "Quilmes", pts: 31, pj: 40, pg: 11, pe: 9, pp: 20 },
  { pos: 13, equipo: "Estudiantes (BA)", pts: 31, pj: 40, pg: 10, pe: 11, pp: 19 },
  { pos: 14, equipo: "Def. de Belgrano", pts: 29, pj: 40, pg: 9, pe: 11, pp: 20 },
  { pos: 15, equipo: "Ferro", pts: 29, pj: 40, pg: 11, pe: 7, pp: 22 },
  { pos: 16, equipo: "Almagro", pts: 27, pj: 40, pg: 7, pe: 13, pp: 20 },
  { pos: 17, equipo: "Talleres (RE)", pts: 22, pj: 40, pg: 7, pe: 8, pp: 25 },
  { pos: 18, equipo: "Estudiantil Porteño", pts: 22, pj: 40, pg: 6, pe: 10, pp: 24 },
  { pos: 19, equipo: "Sp. Buenos Aires", pts: 21, pj: 40, pg: 6, pe: 9, pp: 25 },
  { pos: 20, equipo: "Lanus", pts: 20, pj: 40, pg: 7, pe: 6, pp: 27 },
  { pos: 21, equipo: "Barracas Central", pts: 14, pj: 40, pg: 4, pe: 6, pp: 30 }
];

let found = false;
for (let i = 0; i < data.length; i++) {
   if (data[i].id === '1922-aamf') {
       data[i].tabla_posiciones = tablaAAmF;
       data[i].campeon = "Independiente"; 
       data[i].subcampeon = "River Plate";
       found = true;
       console.log("Updated 1922-aamf table!");
   }
   if (data[i].id === '1922-aaf') {
       console.log("Found 1922-aaf table too!");
   }
}

if (found) {
   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
   console.log("Saved.");
} else {
   console.log("Failed to find 1922-aamf");
}
