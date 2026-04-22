const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Base Estadística Verificada (1893 - 1897) sin cruzar Promiedos invasivo.
const batch = {
  "1897-pd": {
    "anio": "1897",
    "torneo": "Primera División",
    "campeon": "Lomas Athletic Club",
    "subcampeon": "Lanús Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Lomas Athletic", "pts": 20, "pj": 12, "pg": 9, "pe": 2, "pp": 1},
      {"pos": 2, "equipo": "Lanús Athletic", "pts": 20, "pj": 12, "pg": 10, "pe": 0, "pp": 2},
      {"pos": 3, "equipo": "Belgrano Athletic", "pts": 19, "pj": 12, "pg": 9, "pe": 1, "pp": 2},
      {"pos": 4, "equipo": "Flores Athletic", "pts": 13, "pj": 12, "pg": 6, "pe": 1, "pp": 5},
      {"pos": 5, "equipo": "Palermo Athletic", "pts": 8, "pj": 12, "pg": 4, "pe": 0, "pp": 8},
      {"pos": 6, "equipo": "Belgrano Athletic 'B'", "pts": 4, "pj": 12, "pg": 1, "pe": 2, "pp": 9},
      {"pos": 7, "equipo": "Banfield", "pts": 0, "pj": 12, "pg": 0, "pe": 0, "pp": 12}
    ],
    "goleadores": [{"nombre": "William Stirling", "equipo": "Lomas Athletic", "goles": 20}]
  },
  "1896-pd": {
    "anio": "1896",
    "torneo": "Primera División",
    "campeon": "Lomas Academy",
    "subcampeon": "Flores Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Lomas Academy", "pts": 14, "pj": 8, "pg": 6, "pe": 2, "pp": 0},
      {"pos": 2, "equipo": "Flores Athletic", "pts": 10, "pj": 8, "pg": 5, "pe": 0, "pp": 3},
      {"pos": 3, "equipo": "Lomas Athletic", "pts": 9, "pj": 8, "pg": 4, "pe": 1, "pp": 3},
      {"pos": 4, "equipo": "Belgrano Athletic", "pts": 7, "pj": 8, "pg": 3, "pe": 1, "pp": 4},
      {"pos": 5, "equipo": "Retiro Athletic", "pts": 0, "pj": 8, "pg": 0, "pe": 0, "pp": 8}
    ],
    "goleadores": [{"nombre": "Thomas Allen", "equipo": "Lomas Academy", "goles": 7}, {"nombre": "Juan O. Anderson", "equipo": "Lomas Athletic", "goles": 7}]
  },
  "1895-pd": {
    "anio": "1895",
    "torneo": "Primera División",
    "campeon": "Lomas Athletic Club",
    "subcampeon": "Lomas Academy",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Lomas Athletic Club", "pts": 18, "pj": 10, "pg": 8, "pe": 2, "pp": 0},
      {"pos": 2, "equipo": "Lomas Academy", "pts": 13, "pj": 10, "pg": 6, "pe": 1, "pp": 3},
      {"pos": 3, "equipo": "Flores Athletic", "pts": 12, "pj": 10, "pg": 6, "pe": 0, "pp": 4},
      {"pos": 4, "equipo": "Retiro Athletic", "pts": 7, "pj": 10, "pg": 3, "pe": 1, "pp": 6},
      {"pos": 5, "equipo": "Buenos Aires English High School", "pts": 5, "pj": 10, "pg": 2, "pe": 1, "pp": 7},
      {"pos": 6, "equipo": "Quilmes Rovers", "pts": 5, "pj": 10, "pg": 2, "pe": 1, "pp": 7}
    ],
    "goleadores": []
  },
  "1894-pd": {
    "anio": "1894",
    "torneo": "Primera División",
    "campeon": "Lomas Athletic Club",
    "subcampeon": "Rosario Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Lomas Athletic Club", "pts": 18, "pj": 10, "pg": 8, "pe": 2, "pp": 0},
      {"pos": 2, "equipo": "Rosario Athletic", "pts": 14, "pj": 10, "pg": 6, "pe": 2, "pp": 2},
      {"pos": 3, "equipo": "Flores Athletic", "pts": 12, "pj": 10, "pg": 6, "pe": 0, "pp": 4},
      {"pos": 4, "equipo": "Lobos Athletic", "pts": 9, "pj": 10, "pg": 3, "pe": 3, "pp": 4},
      {"pos": 5, "equipo": "Saint Andrew's", "pts": 6, "pj": 10, "pg": 3, "pe": 0, "pp": 7},
      {"pos": 6, "equipo": "Retiro Athletic", "pts": 1, "pj": 10, "pg": 0, "pe": 1, "pp": 9}
    ],
    "goleadores": [{"nombre": "James G. Gifford", "equipo": "Flores Athletic", "goles": 7}]
  },
  "1893-pd": {
    "anio": "1893",
    "torneo": "Primera División",
    "campeon": "Lomas Athletic Club",
    "subcampeon": "Flores Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Lomas Athletic Club", "pts": 15, "pj": 8, "pg": 7, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Flores Athletic Club", "pts": 10, "pj": 8, "pg": 5, "pe": 0, "pp": 3},
      {"pos": 3, "equipo": "Quilmes Club", "pts": 9, "pj": 8, "pg": 3, "pe": 3, "pp": 2},
      {"pos": 4, "equipo": "Buenos Aires English High School", "pts": 4, "pj": 8, "pg": 1, "pe": 2, "pp": 5},
      {"pos": 5, "equipo": "Buenos Aires y Rosario Railway", "pts": 2, "pj": 8, "pg": 0, "pe": 2, "pp": 6}
    ],
    "goleadores": [{"nombre": "William Leslie", "equipo": "Lomas Athletic Club", "goles": 7}]
  }
};

let patched = 0;
data.forEach((torneo) => {
  if (batch[torneo.id]) {
    Object.assign(torneo, batch[torneo.id]);
    patched++;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote de 5 torneos históricos (1893-1897) inyectados con éxito. Se parchearon ${patched} años vacíos.`);
