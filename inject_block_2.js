const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Parche 1892 y Lote de Extracciones 1898 - 1902 (Era Alumni)
const batch = {
  "1892-pd": {
    "anio": "1892",
    "torneo": "Primera División",
    "campeon": "Edición Cancelada (Asociación Disuelta)",
    "subcampeon": "Sin torneo",
    "tabla_posiciones": [],
    "goleadores": []
  },
  "1898-pd": {
    "anio": "1898",
    "torneo": "Primera División",
    "campeon": "Lomas Athletic Club",
    "subcampeon": "Lobos Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Lomas Athletic", "pts": 20, "pj": 12, "pg": 8, "pe": 4, "pp": 0},
      {"pos": 2, "equipo": "Lobos Athletic", "pts": 20, "pj": 12, "pg": 9, "pe": 2, "pp": 1},
      {"pos": 3, "equipo": "Belgrano Athletic", "pts": 17, "pj": 12, "pg": 8, "pe": 1, "pp": 3},
      {"pos": 4, "equipo": "Lanús Athletic", "pts": 13, "pj": 12, "pg": 6, "pe": 1, "pp": 5},
      {"pos": 5, "equipo": "Banfield", "pts": 6, "pj": 12, "pg": 3, "pe": 0, "pp": 9},
      {"pos": 6, "equipo": "Palermo Athletic", "pts": 4, "pj": 12, "pg": 2, "pe": 0, "pp": 10},
      {"pos": 7, "equipo": "United Banks", "pts": 4, "pj": 12, "pg": 2, "pe": 0, "pp": 10}
    ],
    "goleadores": [{"nombre": "Thomas Moore", "equipo": "Lobos Athletic", "goles": 16}]
  },
  "1899-pd": {
    "anio": "1899",
    "torneo": "Primera División",
    "campeon": "Belgrano Athletic Club",
    "subcampeon": "Lobos Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Belgrano Athletic", "pts": 11, "pj": 6, "pg": 5, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Lobos Athletic", "pts": 9, "pj": 6, "pg": 4, "pe": 1, "pp": 1},
      {"pos": 3, "equipo": "Lomas Athletic", "pts": 3, "pj": 6, "pg": 1, "pe": 1, "pp": 4},
      {"pos": 4, "equipo": "Lanús Athletic", "pts": 1, "pj": 6, "pg": 0, "pe": 1, "pp": 5}
    ],
    "goleadores": [{"nombre": "Percy Hooton", "equipo": "Belgrano Athletic", "goles": 3}]
  },
  "1900-pd": {
    "anio": "1900",
    "torneo": "Primera División",
    "campeon": "English High School AC (Alumni)",
    "subcampeon": "Lomas Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "English High School AC", "pts": 11, "pj": 6, "pg": 5, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Lomas Athletic", "pts": 5, "pj": 6, "pg": 2, "pe": 1, "pp": 3},
      {"pos": 3, "equipo": "Belgrano Athletic", "pts": 4, "pj": 6, "pg": 2, "pe": 0, "pp": 4},
      {"pos": 4, "equipo": "Quilmes", "pts": 4, "pj": 6, "pg": 2, "pe": 0, "pp": 4}
    ],
    "goleadores": [{"nombre": "Spencer Leonard", "equipo": "English High School", "goles": 8}]
  },
  "1901-pd": {
    "anio": "1901",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Belgrano Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 12, "pj": 6, "pg": 6, "pe": 0, "pp": 0},
      {"pos": 2, "equipo": "Belgrano Athletic", "pts": 6, "pj": 6, "pg": 3, "pe": 0, "pp": 3},
      {"pos": 3, "equipo": "Quilmes", "pts": 4, "pj": 6, "pg": 2, "pe": 0, "pp": 4},
      {"pos": 4, "equipo": "Lomas Athletic", "pts": 2, "pj": 6, "pg": 1, "pe": 0, "pp": 5}
    ],
    "goleadores": [{"nombre": "Jorge Brown", "equipo": "Alumni", "goles": 5}]
  },
  "1902-pd": {
    "anio": "1902",
    "torneo": "Primera División",
    "campeon": "Alumni Athletic Club",
    "subcampeon": "Barracas Athletic Club",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Alumni Athletic Club", "pts": 15, "pj": 8, "pg": 7, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Barracas Athletic", "pts": 10, "pj": 8, "pg": 5, "pe": 0, "pp": 3},
      {"pos": 3, "equipo": "Quilmes", "pts": 7, "pj": 8, "pg": 3, "pe": 1, "pp": 4},
      {"pos": 4, "equipo": "Belgrano Athletic", "pts": 5, "pj": 8, "pg": 1, "pe": 3, "pp": 4},
      {"pos": 5, "equipo": "Lomas Athletic", "pts": 3, "pj": 8, "pg": 1, "pe": 1, "pp": 6}
    ],
    "goleadores": [{"nombre": "Jorge Brown", "equipo": "Alumni", "goles": 11}]
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
console.log(`Lote 2 Histórico (1898-1902) inyectado + arreglo de 1892. Total años: ${patched}`);
