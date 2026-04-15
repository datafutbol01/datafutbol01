const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1951
  "1951-pd": {
    "anio": "1951",
    "torneo": "Primera División AFA",
    "campeon": "Racing Club",
    "subcampeon": "Banfield",
    "obs": "*(1) El Hecho Histórico del Medio Siglo. Racing Club logra un 'Tricampeonato' oficial siendo el primer equipo de la historia en llegar a tres torneos cortos modernos profesionales al hilo. Lo hizo ahogándole la fiesta a Banfield (quien empató en 44 puntos en la tabla) en la épica serie de finales ganada 1 a 0.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 44, "pj": 32, "pg": 16, "pe": 12, "pp": 4},
      {"pos": 2, "equipo": "Banfield", "pts": 44, "pj": 32, "pg": 17, "pe": 10, "pp": 5},
      {"pos": 3, "equipo": "River Plate", "pts": 43, "pj": 32, "pg": 16, "pe": 11, "pp": 5},
      {"pos": 4, "equipo": "Independiente", "pts": 39, "pj": 32, "pg": 16, "pe": 7, "pp": 9},
      {"pos": 5, "equipo": "Lanús", "pts": 37, "pj": 32, "pg": 14, "pe": 9, "pp": 9},
      {"pos": 6, "equipo": "Boca Juniors", "pts": 35, "pj": 32, "pg": 11, "pe": 13, "pp": 8},
      {"pos": 7, "equipo": "San Lorenzo", "pts": 35, "pj": 32, "pg": 13, "pe": 9, "pp": 10},
      {"pos": 8, "equipo": "Chacarita Juniors", "pts": 33, "pj": 32, "pg": 12, "pe": 9, "pp": 11},
      {"pos": 9, "equipo": "Velez Sarsfield", "pts": 33, "pj": 32, "pg": 10, "pe": 13, "pp": 9},
      {"pos": 10, "equipo": "Estudiantes (LP)", "pts": 29, "pj": 32, "pg": 11, "pe": 7, "pp": 14}
    ],
    "goleadores": [{"nombre": "Santiago Vernazza", "equipo": "River Plate", "goles": 22}],
    "descensos": ["Quilmes", "Gimnasia y Esgrima (LP)"]
  },

  // AÑO 1952
  "1952-pd": {
    "anio": "1952",
    "torneo": "Primera División AFA",
    "campeon": "River Plate",
    "subcampeon": "Racing Club",
    "obs": "*(1) El Renacer de Núñez. En respuesta directa al Tri-Campeonato académico anterior, River conforma a 'La Maquinita' para llevarse el certamen por asalto superando por UN solo punto a la Academia (40 a 39). El Tucho Méndez ve caer su imperio.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 40, "pj": 30, "pg": 17, "pe": 6, "pp": 7},
      {"pos": 2, "equipo": "Racing Club", "pts": 39, "pj": 30, "pg": 13, "pe": 13, "pp": 4},
      {"pos": 3, "equipo": "Independiente", "pts": 35, "pj": 30, "pg": 13, "pe": 9, "pp": 8},
      {"pos": 4, "equipo": "Huracán", "pts": 35, "pj": 30, "pg": 14, "pe": 7, "pp": 9},
      {"pos": 5, "equipo": "Banfield", "pts": 33, "pj": 30, "pg": 13, "pe": 7, "pp": 10},
      {"pos": 6, "equipo": "Velez Sarsfield", "pts": 32, "pj": 30, "pg": 10, "pe": 12, "pp": 8},
      {"pos": 7, "equipo": "Lanús", "pts": 32, "pj": 30, "pg": 12, "pe": 8, "pp": 10},
      {"pos": 8, "equipo": "Boca Juniors", "pts": 30, "pj": 30, "pg": 11, "pe": 8, "pp": 11},
      {"pos": 9, "equipo": "San Lorenzo", "pts": 30, "pj": 30, "pg": 11, "pe": 8, "pp": 11},
      {"pos": 10, "equipo": "Estudiantes (LP)", "pts": 28, "pj": 30, "pg": 10, "pe": 8, "pp": 12}
    ],
    "goleadores": [{"nombre": "Eduardo Ricagni", "equipo": "Huracán", "goles": 28}],
    "descensos": ["Atlanta"]
  },

  // AÑO 1953
  "1953-pd": {
    "anio": "1953",
    "torneo": "Primera División AFA",
    "campeon": "River Plate",
    "subcampeon": "Vélez Sarsfield",
    "obs": "*(1) River vuelve al Bicampeonato aplastando a un inesperado subcampeón fortinero que se hizo gigantesco en Liniers. Pero la tragedia institucional del año se da en La Plata: Estudiantes (LP) cae dramáticamente al fondo de la tabla de posiciones y firma el primer Descenso oficial y penosísimo de su enorme historia.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 43, "pj": 30, "pg": 18, "pe": 7, "pp": 5},
      {"pos": 2, "equipo": "Velez Sarsfield", "pts": 39, "pj": 30, "pg": 13, "pe": 13, "pp": 4},
      {"pos": 3, "equipo": "Racing Club", "pts": 39, "pj": 30, "pg": 16, "pe": 7, "pp": 7},
      {"pos": 4, "equipo": "Independiente", "pts": 35, "pj": 30, "pg": 14, "pe": 7, "pp": 9},
      {"pos": 5, "equipo": "San Lorenzo", "pts": 34, "pj": 30, "pg": 15, "pe": 4, "pp": 11},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (LP)", "pts": 32, "pj": 30, "pg": 13, "pe": 6, "pp": 11},
      {"pos": 7, "equipo": "Boca Juniors", "pts": 28, "pj": 30, "pg": 11, "pe": 6, "pp": 13},
      {"pos": 8, "equipo": "Chacarita Juniors", "pts": 28, "pj": 30, "pg": 11, "pe": 6, "pp": 13},
      {"pos": 9, "equipo": "Rosario Central", "pts": 28, "pj": 30, "pg": 10, "pe": 8, "pp": 12},
      {"pos": 10, "equipo": "Lanús", "pts": 27, "pj": 30, "pg": 11, "pe": 5, "pp": 14}
    ],
    "goleadores": [{"nombre": "Juan Benavídez D'Alessandro", "equipo": "San Lorenzo", "goles": 22}],
    "descensos": ["Estudiantes (LP)"]
  },

  // AÑO 1954
  "1954-pd": {
    "anio": "1954",
    "torneo": "Primera División AFA",
    "campeon": "Boca Juniors",
    "subcampeon": "Independiente",
    "obs": "*(1) Diez años redondos gritando en el desierto. Tras el título del 44 debieron pasar 10 temporadas completas para que el Xeneize por fin despierte del coma deportivo. Con Pepino Borello metiendo 19 goles terminan levantando una liga que parecía imposible y arruinando a Banfield que abandona el certamen hacia la Primera B.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 45, "pj": 30, "pg": 21, "pe": 3, "pp": 6},
      {"pos": 2, "equipo": "Independiente", "pts": 41, "pj": 30, "pg": 15, "pe": 11, "pp": 4},
      {"pos": 3, "equipo": "River Plate", "pts": 38, "pj": 30, "pg": 16, "pe": 6, "pp": 8},
      {"pos": 4, "equipo": "Platense", "pts": 33, "pj": 30, "pg": 10, "pe": 13, "pp": 7},
      {"pos": 5, "equipo": "Lanús", "pts": 33, "pj": 30, "pg": 11, "pe": 11, "pp": 8},
      {"pos": 6, "equipo": "Ferro Carril Oeste", "pts": 32, "pj": 30, "pg": 8, "pe": 16, "pp": 6},
      {"pos": 7, "equipo": "San Lorenzo", "pts": 31, "pj": 30, "pg": 12, "pe": 7, "pp": 11},
      {"pos": 8, "equipo": "Chacarita Juniors", "pts": 29, "pj": 30, "pg": 10, "pe": 9, "pp": 11},
      {"pos": 9, "equipo": "Velez Sarsfield", "pts": 28, "pj": 30, "pg": 10, "pe": 8, "pp": 12},
      {"pos": 10, "equipo": "Racing Club", "pts": 27, "pj": 30, "pg": 10, "pe": 7, "pp": 13}
    ],
    "goleadores": [{"nombre": "A. Berni / J. Borello / N. Conde", "equipo": "San Lorenzo / Boca / Vélez", "goles": 19}],
    "descensos": ["Banfield"]
  },

  // AÑO 1955
  "1955-pd": {
    "anio": "1955",
    "torneo": "Primera División AFA",
    "campeon": "River Plate",
    "subcampeon": "Racing Club",
    "obs": "*(1) Año que sella un despegue letal de una nueva época inigualable de La Máquinita, aplastando con 45 puntos por encima a Racing... Y es el inicio formal del Tricampeonato de Labruna. El calamar de Saavedra claudica.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 45, "pj": 30, "pg": 18, "pe": 9, "pp": 3},
      {"pos": 2, "equipo": "Racing Club", "pts": 38, "pj": 30, "pg": 14, "pe": 10, "pp": 6},
      {"pos": 3, "equipo": "Boca Juniors", "pts": 37, "pj": 30, "pg": 14, "pe": 9, "pp": 7},
      {"pos": 4, "equipo": "Independiente", "pts": 36, "pj": 30, "pg": 14, "pe": 8, "pp": 8},
      {"pos": 5, "equipo": "Lanús", "pts": 34, "pj": 30, "pg": 13, "pe": 8, "pp": 9},
      {"pos": 6, "equipo": "Tigre", "pts": 30, "pj": 30, "pg": 12, "pe": 6, "pp": 12},
      {"pos": 7, "equipo": "Ferro Carril Oeste", "pts": 29, "pj": 30, "pg": 10, "pe": 9, "pp": 11},
      {"pos": 8, "equipo": "San Lorenzo", "pts": 28, "pj": 30, "pg": 8, "pe": 12, "pp": 10},
      {"pos": 9, "equipo": "Huracán", "pts": 27, "pj": 30, "pg": 10, "pe": 7, "pp": 13},
      {"pos": 10, "equipo": "Gimnasia y Esgrima (LP)", "pts": 27, "pj": 30, "pg": 10, "pe": 7, "pp": 13}
    ],
    "goleadores": [{"nombre": "Oscar Massei", "equipo": "Rosario Central", "goles": 21}],
    "descensos": ["Platense"]
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
console.log(`Lote 13 Finalizado. Tricampeón Racing Inyectado y Estudiantes L.P documentado formalmente. Nodos tocados: ${patched}`);
