const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Ráfaga Estadística Lote 3: La Dinastía Alumni y la Copa Belgrano AC (1903 - 1907)
const batch = {
  "1903-pd": {
    "anio": "1903",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Belgrano Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 18, "pj": 10, "pg": 9, "pe": 0, "pp": 1},
      {"pos": 2, "equipo": "Belgrano Athletic", "pts": 15, "pj": 10, "pg": 7, "pe": 1, "pp": 2},
      {"pos": 3, "equipo": "Barracas Athletic", "pts": 11, "pj": 10, "pg": 5, "pe": 1, "pp": 4},
      {"pos": 4, "equipo": "Lomas Athletic", "pts": 8, "pj": 10, "pg": 2, "pe": 4, "pp": 4},
      {"pos": 5, "equipo": "Quilmes", "pts": 8, "pj": 10, "pg": 3, "pe": 2, "pp": 5},
      {"pos": 6, "equipo": "Flores Athletic", "pts": 0, "pj": 10, "pg": 0, "pe": 0, "pp": 10}
    ],
    "goleadores": [{"nombre": "Jorge Brown", "equipo": "Alumni", "goles": 12}]
  },
  "1904-pd": {
    "anio": "1904",
    "torneo": "Primera División",
    "campeon": "Belgrano Athletic Club",
    "subcampeon": "Alumni Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Belgrano Athletic", "pts": 19, "pj": 10, "pg": 9, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Alumni Athletic Club", "pts": 13, "pj": 10, "pg": 5, "pe": 3, "pp": 2},
      {"pos": 3, "equipo": "Lomas Athletic", "pts": 11, "pj": 10, "pg": 5, "pe": 1, "pp": 4},
      {"pos": 4, "equipo": "Barracas Athletic", "pts": 10, "pj": 10, "pg": 5, "pe": 0, "pp": 5},
      {"pos": 5, "equipo": "Estudiantes (BA)", "pts": 5, "pj": 10, "pg": 2, "pe": 1, "pp": 7},
      {"pos": 6, "equipo": "Quilmes", "pts": 2, "pj": 10, "pg": 1, "pe": 0, "pp": 9}
    ],
    "goleadores": [{"nombre": "Alfredo Brown", "equipo": "Alumni", "goles": 11}]
  },
  "1905-pd": {
    "anio": "1905",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Belgrano Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 21, "pj": 12, "pg": 10, "pe": 1, "pp": 1},
      {"pos": 2, "equipo": "Belgrano Athletic", "pts": 18, "pj": 12, "pg": 9, "pe": 0, "pp": 3},
      {"pos": 3, "equipo": "Estudiantes (BA)", "pts": 17, "pj": 12, "pg": 8, "pe": 1, "pp": 3},
      {"pos": 4, "equipo": "Quilmes", "pts": 12, "pj": 12, "pg": 6, "pe": 0, "pp": 6},
      {"pos": 5, "equipo": "Reformer", "pts": 7, "pj": 12, "pg": 3, "pe": 1, "pp": 8},
      {"pos": 6, "equipo": "Lomas Athletic", "pts": 7, "pj": 12, "pg": 3, "pe": 1, "pp": 8},
      {"pos": 7, "equipo": "Barracas Athletic", "pts": 2, "pj": 12, "pg": 1, "pe": 0, "pp": 11}
    ],
    "goleadores": [{"nombre": "Carlos Lett", "equipo": "Alumni", "goles": 12}]
  },
  "1906-pd": {
    "anio": "1906",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Lomas Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 14, "pj": 8, "pg": 7, "pe": 0, "pp": 1},
      {"pos": 2, "equipo": "Lomas Athletic", "pts": 15, "pj": 10, "pg": 7, "pe": 1, "pp": 2},
      {"pos": 3, "equipo": "Quilmes", "pts": 12, "pj": 8, "pg": 6, "pe": 0, "pp": 2},
      {"pos": 4, "equipo": "Belgrano Athletic", "pts": 12, "pj": 8, "pg": 6, "pe": 0, "pp": 2},
      {"pos": 5, "equipo": "San Isidro", "pts": 10, "pj": 10, "pg": 5, "pe": 0, "pp": 5},
      {"pos": 6, "equipo": "Argentino de Quilmes", "pts": 4, "pj": 8, "pg": 2, "pe": 0, "pp": 6},
      {"pos": 7, "equipo": "San Martín AC", "pts": 4, "pj": 10, "pg": 2, "pe": 0, "pp": 8},
      {"pos": 8, "equipo": "Estudiantes (BA)", "pts": 4, "pj": 8, "pg": 2, "pe": 0, "pp": 6},
      {"pos": 9, "equipo": "Barracas Athletic", "pts": 1, "pj": 8, "pg": 0, "pe": 1, "pp": 7},
      {"pos": 10, "equipo": "Reformer", "pts": 0, "pj": 10, "pg": 0, "pe": 0, "pp": 10}
    ],
    "goleadores": [
      {"nombre": "Eliseo Brown", "equipo": "Alumni", "goles": 8},
      {"nombre": "Percy Hooton", "equipo": "Belgrano Athletic", "goles": 8},
      {"nombre": "Carlos Lett", "equipo": "Alumni", "goles": 8}
    ]
  },
  "1907-pd": {
    "anio": "1907",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Estudiantes (BA)",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 37, "pj": 20, "pg": 17, "pe": 3, "pp": 0},
      {"pos": 2, "equipo": "Estudiantes (BA)", "pts": 31, "pj": 20, "pg": 13, "pe": 5, "pp": 2},
      {"pos": 3, "equipo": "San Isidro", "pts": 25, "pj": 20, "pg": 11, "pe": 3, "pp": 6},
      {"pos": 4, "equipo": "Quilmes", "pts": 24, "pj": 20, "pg": 11, "pe": 2, "pp": 7},
      {"pos": 5, "equipo": "Belgrano Athletic", "pts": 23, "pj": 20, "pg": 10, "pe": 3, "pp": 7},
      {"pos": 6, "equipo": "Porteño", "pts": 22, "pj": 20, "pg": 8, "pe": 6, "pp": 6},
      {"pos": 7, "equipo": "Reformer", "pts": 17, "pj": 20, "pg": 8, "pe": 1, "pp": 11},
      {"pos": 8, "equipo": "Argentino de Quilmes", "pts": 16, "pj": 20, "pg": 6, "pe": 4, "pp": 10},
      {"pos": 9, "equipo": "Lomas Athletic", "pts": 11, "pj": 20, "pg": 4, "pe": 3, "pp": 13},
      {"pos": 10, "equipo": "San Martín AC", "pts": 10, "pj": 20, "pg": 4, "pe": 2, "pp": 14},
      {"pos": 11, "equipo": "Barracas Athletic", "pts": 4, "pj": 20, "pg": 2, "pe": 0, "pp": 18}
    ],
    "goleadores": [{"nombre": "Eliseo Brown", "equipo": "Alumni", "goles": 24}]
  }
};

let patchedComponentes = 0;
data.forEach((torneo) => {
  if (batch[torneo.id]) {
    Object.assign(torneo, batch[torneo.id]);
    patchedComponentes++;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote 3 Inyectado: 1903-1907. Total de campeonatos purificados: ${patchedComponentes}`);
