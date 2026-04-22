const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const t1912aaf = [
  { pos: 1, equipo: "Quilmes", pts: 15, pj: 10, pg: 7, pe: 1, pp: 2 },
  { pos: 2, equipo: "San Isidro", pts: 11, pj: 9, pg: 5, pe: 1, pp: 3 },
  { pos: 3, equipo: "Racing Club", pts: 10, pj: 10, pg: 4, pe: 2, pp: 4 },
  { pos: 4, equipo: "Atlético Estudiantes", pts: 8, pj: 9, pg: 4, pe: 0, pp: 5 },
  { pos: 5, equipo: "Belgrano Athletic", pts: 7, pj: 10, pg: 3, pe: 1, pp: 6 },
  { pos: 6, equipo: "River Plate", pts: 7, pj: 10, pg: 3, pe: 1, pp: 6 }
];

const t1912faf = [
  { pos: 1, equipo: "Porteño", pts: 20, pj: 14, pg: 8, pe: 4, pp: 2 },
  { pos: 2, equipo: "Independiente", pts: 20, pj: 14, pg: 9, pe: 2, pp: 3 },
  { pos: 3, equipo: "Estudiantes (LP)", pts: 19, pj: 14, pg: 8, pe: 3, pp: 3 },
  { pos: 4, equipo: "Gimnasia y Esgrima (BA)", pts: 18, pj: 14, pg: 7, pe: 4, pp: 3 },
  { pos: 5, equipo: "Argentino de Quilmes", pts: 17, pj: 14, pg: 7, pe: 3, pp: 4 },
  { pos: 6, equipo: "Atlanta", pts: 12, pj: 14, pg: 6, pe: 0, pp: 8 },
  { pos: 7, equipo: "Kimberley", pts: 6, pj: 14, pg: 2, pe: 2, pp: 10 },
  { pos: 8, equipo: "Sociedad Sportiva Argentina", pts: 0, pj: 14, pg: 0, pe: 0, pp: 14 }
];

for(let i=0; i<data.length; i++){
    if(data[i].id === '1912-aaf'){
         data[i] = {
            id: '1912-aaf',
            anio: '1912',
            torneo: 'Asociación Argentina de Football (AAF)',
            campeon: 'Quilmes',
            subcampeon: 'San Isidro',
            tabla_posiciones: t1912aaf,
            goleadores: [{ nombre: "Alberto Ohaco", equipo: "Racing Club", goles: 9 }]
         };
    }
    if(data[i].id === '1912-faf'){
         data[i] = {
            id: '1912-faf',
            anio: '1912',
            torneo: 'Federación Argentina de Football (FAF)',
            campeon: 'Porteño',
            subcampeon: 'Independiente',
            tabla_posiciones: t1912faf,
            goleadores: [{ nombre: "Ernesto Colla", equipo: "Independiente", goles: 12 }]
         };
    }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("1912 fixed completely!");
