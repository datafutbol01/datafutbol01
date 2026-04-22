const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Ráfaga Estadística Lote 4: El Ocaso de Alumni y el Primer Cisma de AFA (1908 - 1912)
const batch = {
  "1908-pd": {
    "anio": "1908",
    "torneo": "Primera División",
    "campeon": "Belgrano Athletic Club",
    "subcampeon": "Alumni Athletic Club / Argentino de Quilmes",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Belgrano Athletic", "pts": 31, "pj": 18, "pg": 15, "pe": 1, "pp": 2},
      {"pos": 2, "equipo": "Alumni Athletic Club", "pts": 27, "pj": 18, "pg": 13, "pe": 1, "pp": 4},
      {"pos": 3, "equipo": "Argentino de Quilmes", "pts": 25, "pj": 18, "pg": 12, "pe": 1, "pp": 5},
      {"pos": 4, "equipo": "San Isidro", "pts": 23, "pj": 18, "pg": 11, "pe": 1, "pp": 6},
      {"pos": 5, "equipo": "Estudiantes (BA)", "pts": 22, "pj": 18, "pg": 10, "pe": 2, "pp": 6},
      {"pos": 6, "equipo": "Quilmes", "pts": 17, "pj": 18, "pg": 8, "pe": 1, "pp": 9}
    ],
    "goleadores": [{"nombre": "Eliseo Brown", "equipo": "Alumni", "goles": 19}]
  },
  "1909-pd": {
    "anio": "1909",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "River Plate",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 32, "pj": 18, "pg": 15, "pe": 2, "pp": 1},
      {"pos": 2, "equipo": "River Plate", "pts": 24, "pj": 18, "pg": 11, "pe": 2, "pp": 5},
      {"pos": 3, "equipo": "Quilmes", "pts": 20, "pj": 18, "pg": 8, "pe": 4, "pp": 6},
      {"pos": 4, "equipo": "Estudiantes (BA)", "pts": 19, "pj": 18, "pg": 8, "pe": 3, "pp": 7},
      {"pos": 5, "equipo": "Belgrano Athletic", "pts": 18, "pj": 18, "pg": 6, "pe": 6, "pp": 6},
      {"pos": 6, "equipo": "San Isidro", "pts": 17, "pj": 18, "pg": 7, "pe": 3, "pp": 8}
    ],
    "goleadores": [{"nombre": "Eliseo Brown", "equipo": "Alumni", "goles": 17}]
  },
  "1910-pd": {
    "anio": "1910",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Porteño",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 25, "pj": 16, "pg": 10, "pe": 5, "pp": 1},
      {"pos": 2, "equipo": "Porteño", "pts": 21, "pj": 16, "pg": 8, "pe": 5, "pp": 3},
      {"pos": 3, "equipo": "Belgrano Athletic", "pts": 19, "pj": 16, "pg": 8, "pe": 3, "pp": 5},
      {"pos": 4, "equipo": "Estudiantes (BA)", "pts": 16, "pj": 16, "pg": 6, "pe": 4, "pp": 6},
      {"pos": 5, "equipo": "San Isidro", "pts": 14, "pj": 16, "pg": 4, "pe": 6, "pp": 6},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (BA)", "pts": 13, "pj": 16, "pg": 5, "pe": 3, "pp": 8},
      {"pos": 7, "equipo": "River Plate", "pts": 12, "pj": 16, "pg": 4, "pe": 4, "pp": 8}
    ],
    "goleadores": [{"nombre": "Arnold Watson Hutton", "equipo": "Alumni", "goles": 13}]
  },
  "1911-pd": {
    "anio": "1911",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Porteño",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 23, "pj": 16, "pg": 11, "pe": 1, "pp": 4},
      {"pos": 2, "equipo": "Porteño", "pts": 21, "pj": 16, "pg": 9, "pe": 3, "pp": 4},
      {"pos": 3, "equipo": "San Isidro", "pts": 18, "pj": 16, "pg": 7, "pe": 4, "pp": 5},
      {"pos": 4, "equipo": "Racing Club", "pts": 17, "pj": 16, "pg": 6, "pe": 5, "pp": 5},
      {"pos": 5, "equipo": "River Plate", "pts": 16, "pj": 16, "pg": 6, "pe": 4, "pp": 6},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (BA)", "pts": 14, "pj": 16, "pg": 5, "pe": 4, "pp": 7}
    ],
    "goleadores": [{"nombre": "Ricardo Malbrán", "equipo": "San Isidro", "goles": 10}, {"nombre": "Ernesto Lett", "equipo": "Alumni", "goles": 10}, {"nombre": "Antonio Piaggio", "equipo": "Porteño", "goles": 10}]
  },
  // INYECCIÓN DEL CISMA (MUTACIÓN DEL OBJETO PRINCIPAL DE 1912 PARA AAF Y CREACIÓN DEL NODO FAF)
  "1912-aaf": {
    "anio": "1912",
    "torneo": "Asociación Argentina de Football (AAF)",
    "campeon": "Quilmes AC",
    "subcampeon": "San Isidro",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Quilmes AC", "pts": 15, "pj": 10, "pg": 7, "pe": 1, "pp": 2},
      {"pos": 2, "equipo": "San Isidro", "pts": 11, "pj": 9, "pg": 4, "pe": 3, "pp": 2},
      {"pos": 3, "equipo": "Racing Club", "pts": 10, "pj": 10, "pg": 4, "pe": 2, "pp": 4},
      {"pos": 4, "equipo": "Estudiantes (BA)", "pts": 8, "pj": 9, "pg": 4, "pe": 0, "pp": 5},
      {"pos": 5, "equipo": "Belgrano Athletic", "pts": 7, "pj": 10, "pg": 3, "pe": 1, "pp": 6},
      {"pos": 6, "equipo": "River Plate", "pts": 7, "pj": 10, "pg": 3, "pe": 1, "pp": 6}
    ],
    "goleadores": [{"nombre": "Alberto Ohaco", "equipo": "Racing Club", "goles": 9}]
  }
};

// Objeto de la Liga Disidente (FAF) que se anexará al Array Principal
const faf1912 = {
  "id": "1912-faf",
  "anio": "1912",
  "torneo": "Federación Argentina de Football (FAF)",
  "campeon": "Porteño",
  "subcampeon": "Independiente",
  "obs": "*(1) El torneo fue un Cisma de AFA. Independiente debió coronarse Campeón, pero abandonó frente a Porteño el campo de juego de la Final desempate en protesta por fallos del árbitro (anulación de gol propio y validación de un gol con la mano rival). La Federación decretó ganador a Porteño.",
  "tabla_posiciones": [
    {"pos": 1, "equipo": "Porteño", "pts": 20, "pj": 14, "pg": 8, "pe": 4, "pp": 2},
    {"pos": 2, "equipo": "Independiente", "pts": 20, "pj": 14, "pg": 9, "pe": 2, "pp": 3},
    {"pos": 3, "equipo": "Estudiantes (LP)", "pts": 14, "pj": 14, "pg": 4, "pe": 6, "pp": 4},
    {"pos": 4, "equipo": "Gimnasia y Esgrima (BA)", "pts": 11, "pj": 14, "pg": 4, "pe": 3, "pp": 7},
    {"pos": 5, "equipo": "Argentino de Quilmes", "pts": 11, "pj": 14, "pg": 4, "pe": 3, "pp": 7},
    {"pos": 6, "equipo": "Atlanta", "pts": 10, "pj": 14, "pg": 4, "pe": 2, "pp": 8}
  ],
  "goleadores": [{"nombre": "Ernesto Colla", "equipo": "Independiente", "goles": 12}]
};

let patchedComponentes = 0;
// Reemplazar nodo 1912-pd original por AAF y mapear los años previos
data.forEach((torneo, index) => {
  if (torneo.id === '1912-pd') {
    torneo.id = '1912-aaf';
    Object.assign(torneo, batch['1912-aaf']);
    patchedComponentes++;
  } else if (batch[torneo.id]) {
    Object.assign(torneo, batch[torneo.id]);
    patchedComponentes++;
  }
});

// Encontrar el indice del 1912-aaf para inyectar la liga FAF justo al lado (en el orden cronológico del array)
const idx1912 = data.findIndex(t => t.id === '1912-aaf');
if (idx1912 !== -1) {
  data.splice(idx1912 + 1, 0, faf1912); // Inserta el 1912-faf inmediatamente debajo.
  patchedComponentes++;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote 4 Inyectado: 1908-1912. Total de campeonatos purificados: ${patchedComponentes} (Se creó la división estructural AAF/FAF).`);
