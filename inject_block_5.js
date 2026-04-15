const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1913 (Ocaso del Cisma)
  "1913-aaf": {
    "anio": "1913",
    "torneo": "Asociación Argentina de Football (AAF)",
    "campeon": "Racing Club",
    "subcampeon": "San Isidro",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 24, "pj": 14, "pg": 12, "pe": 0, "pp": 2},
      {"pos": 2, "equipo": "San Isidro", "pts": 24, "pj": 14, "pg": 11, "pe": 2, "pp": 1},
      {"pos": 3, "equipo": "River Plate", "pts": 24, "pj": 14, "pg": 10, "pe": 4, "pp": 0},
      {"pos": 4, "equipo": "Belgrano Athletic", "pts": 18, "pj": 14, "pg": 8, "pe": 2, "pp": 4},
      {"pos": 5, "equipo": "Boca Juniors", "pts": 18, "pj": 14, "pg": 8, "pe": 2, "pp": 4},
      {"pos": 6, "equipo": "Platense", "pts": 15, "pj": 14, "pg": 6, "pe": 3, "pp": 5}
    ],
    "goleadores": [{"nombre": "Alberto Ohaco", "equipo": "Racing Club", "goles": 20}],
    "descensos": ["Riachuelo", "Olivos"]
  },
  "1913-faf": {
    "id": "1913-faf",
    "anio": "1913",
    "torneo": "Federación Argentina de Football (FAF)",
    "campeon": "Estudiantes (LP)",
    "subcampeon": "Gimnasia y Esgrima (BA)",
    "obs": "*(1) Segundo año del Cisma. Estudiantes de La Plata se erige campeón de esta liga rebelde.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Estudiantes (LP)", "pts": 31, "pj": 18, "pg": 14, "pe": 3, "pp": 1},
      {"pos": 2, "equipo": "Gimnasia y Esgrima (BA)", "pts": 28, "pj": 18, "pg": 11, "pe": 6, "pp": 1},
      {"pos": 3, "equipo": "Argentino de Quilmes", "pts": 27, "pj": 18, "pg": 12, "pe": 3, "pp": 3},
      {"pos": 4, "equipo": "Independiente", "pts": 19, "pj": 18, "pg": 7, "pe": 5, "pp": 6},
      {"pos": 5, "equipo": "Porteño", "pts": 17, "pj": 18, "pg": 7, "pe": 3, "pp": 8}
    ],
    "goleadores": [{"nombre": "Guillermo Dannaher", "equipo": "Argentino de Quilmes", "goles": 16}],
    "descensos": ["Sociedad Sportiva Argentina", "Tigre"]
  },

  // AÑO 1914 (Fin del Cisma)
  "1914-aaf": {
    "anio": "1914",
    "torneo": "Asociación Argentina de Football (AAF)",
    "campeon": "Racing Club",
    "subcampeon": "Estudiantes (BA)",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 23, "pj": 12, "pg": 11, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Estudiantes (BA)", "pts": 21, "pj": 12, "pg": 10, "pe": 1, "pp": 1},
      {"pos": 3, "equipo": "Boca Juniors", "pts": 15, "pj": 12, "pg": 7, "pe": 1, "pp": 4},
      {"pos": 4, "equipo": "San Isidro", "pts": 11, "pj": 12, "pg": 4, "pe": 3, "pp": 5},
      {"pos": 5, "equipo": "River Plate", "pts": 11, "pj": 12, "pg": 5, "pe": 1, "pp": 6}
    ],
    "goleadores": [{"nombre": "Alberto Ohaco", "equipo": "Racing Club", "goles": 14}],
    "descensos": ["Ferrocarril Sud"]
  },
  "1914-faf": {
    "id": "1914-faf",
    "anio": "1914",
    "torneo": "Federación Argentina de Football (FAF)",
    "campeon": "Porteño",
    "subcampeon": "Estudiantes (LP)",
    "obs": "*(1) Último año del Cisma. A partir del próximo año ambas ligas vuelven a fusionarse para formar la Asociación Amateurs.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Porteño", "pts": 24, "pj": 14, "pg": 10, "pe": 4, "pp": 0},
      {"pos": 2, "equipo": "Estudiantes (LP)", "pts": 21, "pj": 14, "pg": 9, "pe": 3, "pp": 2},
      {"pos": 3, "equipo": "Independiente", "pts": 19, "pj": 14, "pg": 7, "pe": 5, "pp": 2},
      {"pos": 4, "equipo": "Kimberley", "pts": 12, "pj": 14, "pg": 5, "pe": 2, "pp": 7},
      {"pos": 5, "equipo": "Gimnasia y Esgrima (BA)", "pts": 11, "pj": 14, "pg": 4, "pe": 3, "pp": 7}
    ],
    "goleadores": [{"nombre": "Norberto Carabelli", "equipo": "Hispano Argentino", "goles": 11}],
    "descensos": ["Tigre"]
  },

  // AÑOS UNIFICADOS (1915-1917)
  "1915-pd": {
    "anio": "1915",
    "torneo": "Primera División (Unificada)",
    "campeon": "Racing Club",
    "subcampeon": "San Isidro",
    "obs": "*(1) Año histórico de Reunificación. Racing le gana la final de desempate a San Isidro 1-0 tras igualar a 46 puntos la tabla récord de 25 equipos.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 46, "pj": 24, "pg": 22, "pe": 2, "pp": 0},
      {"pos": 2, "equipo": "San Isidro", "pts": 46, "pj": 24, "pg": 22, "pe": 2, "pp": 0},
      {"pos": 3, "equipo": "River Plate", "pts": 38, "pj": 24, "pg": 16, "pe": 6, "pp": 2},
      {"pos": 4, "equipo": "Porteño", "pts": 36, "pj": 24, "pg": 17, "pe": 2, "pp": 5},
      {"pos": 5, "equipo": "Platense", "pts": 32, "pj": 24, "pg": 14, "pe": 4, "pp": 6},
      {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 32, "pj": 24, "pg": 13, "pe": 6, "pp": 5}
    ],
    "goleadores": [{"nombre": "Alberto Ohaco", "equipo": "Racing Club", "goles": 31}],
    "descensos": ["Comercio", "Defensores de Belgrano", "Floresta", "Kimberley"]
  },
  "1916-pd": {
    "anio": "1916",
    "torneo": "Primera División",
    "campeon": "Racing Club",
    "subcampeon": "Platense",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 34, "pj": 21, "pg": 15, "pe": 4, "pp": 2},
      {"pos": 2, "equipo": "Platense", "pts": 30, "pj": 21, "pg": 12, "pe": 6, "pp": 3},
      {"pos": 3, "equipo": "River Plate", "pts": 29, "pj": 21, "pg": 10, "pe": 9, "pp": 2},
      {"pos": 4, "equipo": "Gimnasia y Esgrima (LP)", "pts": 27, "pj": 21, "pg": 9, "pe": 9, "pp": 3},
      {"pos": 5, "equipo": "Huracán", "pts": 26, "pj": 21, "pg": 11, "pe": 4, "pp": 6},
      {"pos": 6, "equipo": "Estudiantil Porteño", "pts": 26, "pj": 21, "pg": 10, "pe": 6, "pp": 5}
    ],
    "goleadores": [{"nombre": "Marius Hiller", "equipo": "G.E.B.A.", "goles": 16}],
    "descensos": ["Belgrano Athletic", "Quilmes"]
  },
  "1917-pd": {
    "anio": "1917",
    "torneo": "Primera División",
    "campeon": "Racing Club",
    "subcampeon": "River Plate",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 35, "pj": 20, "pg": 16, "pe": 3, "pp": 1},
      {"pos": 2, "equipo": "River Plate", "pts": 30, "pj": 20, "pg": 12, "pe": 6, "pp": 2},
      {"pos": 3, "equipo": "Huracán", "pts": 28, "pj": 20, "pg": 11, "pe": 6, "pp": 3},
      {"pos": 4, "equipo": "Boca Juniors", "pts": 28, "pj": 20, "pg": 10, "pe": 8, "pp": 2},
      {"pos": 5, "equipo": "Sportivo Barracas", "pts": 21, "pj": 20, "pg": 6, "pe": 9, "pp": 5},
      {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 21, "pj": 20, "pg": 8, "pe": 5, "pp": 7}
    ],
    "goleadores": [{"nombre": "Alberto Marcovecchio", "equipo": "Racing Club", "goles": 18}],
    "descensos": ["Gimnasia y Esgrima (BA)", "Banfield"]
  }
};

let patched = 0;

// Transformaciones AAF 1913/1914 y asignaciones
data.forEach((torneo) => {
  if (torneo.id === '1913-pd') {
    torneo.id = '1913-aaf';
    Object.assign(torneo, batch['1913-aaf']);
    patched++;
  } else if (torneo.id === '1914-pd') {
    torneo.id = '1914-aaf';
    Object.assign(torneo, batch['1914-aaf']);
    patched++;
  } else if (batch[torneo.id]) {
    Object.assign(torneo, batch[torneo.id]);
    patched++;
  }
});

// Inyecciones subligas FAF
const idx13 = data.findIndex(t => t.id === '1913-aaf');
if(idx13 !== -1) { data.splice(idx13 + 1, 0, batch['1913-faf']); patched++; }

const idx14 = data.findIndex(t => t.id === '1914-aaf');
if(idx14 !== -1) { data.splice(idx14 + 1, 0, batch['1914-faf']); patched++; }

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote 5 Inyectado. Cismas y Reunificación finalizada. Nodos: ${patched}`);
