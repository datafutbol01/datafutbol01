const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1946
  "1946-pd": {
    "anio": "1946",
    "torneo": "Primera División AFA",
    "campeon": "San Lorenzo",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El Ciclón rompe los esquemas bipolares. San Lorenzo conquista con furia un torneo durísimo gracias a su delantero Farro metiendo 18 pero cediendo la corona de goleador a la Bomba de Mario Boyé. Ferro Carril Oeste lamenta su primer Descenso oficial y cae al pozo.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 46, "pj": 30, "pg": 20, "pe": 6, "pp": 4},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 42, "pj": 30, "pg": 19, "pe": 4, "pp": 7},
      {"pos": 3, "equipo": "River Plate", "pts": 41, "pj": 30, "pg": 17, "pe": 7, "pp": 6},
      {"pos": 4, "equipo": "Racing Club", "pts": 39, "pj": 30, "pg": 18, "pe": 3, "pp": 9},
      {"pos": 5, "equipo": "Estudiantes (LP)", "pts": 34, "pj": 30, "pg": 16, "pe": 2, "pp": 12},
      {"pos": 6, "equipo": "Independiente", "pts": 34, "pj": 30, "pg": 13, "pe": 8, "pp": 9},
      {"pos": 7, "equipo": "Rosario Central", "pts": 29, "pj": 30, "pg": 13, "pe": 3, "pp": 14},
      {"pos": 8, "equipo": "Platense", "pts": 28, "pj": 30, "pg": 10, "pe": 8, "pp": 12},
      {"pos": 9, "equipo": "Huracán", "pts": 28, "pj": 30, "pg": 12, "pe": 4, "pp": 14},
      {"pos": 10, "equipo": "Newell's Old Boys", "pts": 27, "pj": 30, "pg": 10, "pe": 7, "pp": 13}
    ],
    "goleadores": [{"nombre": "Mario Boyé", "equipo": "Boca Juniors", "goles": 24}],
    "descensos": ["Ferro Carril Oeste"]
  },

  // AÑO 1947
  "1947-pd": {
    "anio": "1947",
    "torneo": "Primera División AFA",
    "campeon": "River Plate",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) Año Milagroso. Nace en Argentina el jugador más trascendente del globo: 'La Saeta Rubia'. Alfredo Di Stéfano irrumpe con River metiendo 27 goles salvajes en su debut para borrar la tristeza de la caída de Pedernera y coronar La Máquina otra vez sobre los Xeneizes.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 48, "pj": 30, "pg": 22, "pe": 4, "pp": 4},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 42, "pj": 30, "pg": 17, "pe": 8, "pp": 5},
      {"pos": 3, "equipo": "Independiente", "pts": 41, "pj": 30, "pg": 17, "pe": 7, "pp": 6},
      {"pos": 4, "equipo": "Estudiantes (LP)", "pts": 37, "pj": 30, "pg": 15, "pe": 7, "pp": 8},
      {"pos": 5, "equipo": "San Lorenzo", "pts": 37, "pj": 30, "pg": 13, "pe": 11, "pp": 6},
      {"pos": 6, "equipo": "Racing Club", "pts": 36, "pj": 30, "pg": 15, "pe": 6, "pp": 9},
      {"pos": 7, "equipo": "Chacarita Juniors", "pts": 32, "pj": 30, "pg": 14, "pe": 4, "pp": 12},
      {"pos": 8, "equipo": "Velez Sarsfield", "pts": 29, "pj": 30, "pg": 11, "pe": 7, "pp": 12},
      {"pos": 9, "equipo": "Platense", "pts": 26, "pj": 30, "pg": 9, "pe": 8, "pp": 13},
      {"pos": 10, "equipo": "Rosario Central", "pts": 25, "pj": 30, "pg": 9, "pe": 7, "pp": 14}
    ],
    "goleadores": [{"nombre": "Alfredo Di Stéfano", "equipo": "River Plate", "goles": 27}],
    "descensos": ["Atlanta"]
  },

  // AÑO 1948
  "1948-pd": {
    "anio": "1948",
    "torneo": "Primera División AFA",
    "campeon": "Independiente",
    "subcampeon": "River Plate",
    "obs": "*(1) El Paro Histórico. Las últimas 5 fechas del torneo las jugaron los 'Pibes' de las juveniles debido al Paro y Huelga salvaje de los Jugadores Profesionales en Agremiados (FAA). El equipo del Infierno sacó jugo y gritó campeón, y por la protesta se canceló la caída de Gimnasia de LP ('Suspendidos por Moción Gremial').*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Independiente", "pts": 41, "pj": 30, "pg": 17, "pe": 7, "pp": 6},
      {"pos": 2, "equipo": "River Plate", "pts": 37, "pj": 30, "pg": 12, "pe": 13, "pp": 5},
      {"pos": 3, "equipo": "Estudiantes (LP)", "pts": 36, "pj": 30, "pg": 16, "pe": 4, "pp": 10},
      {"pos": 4, "equipo": "Racing Club", "pts": 32, "pj": 30, "pg": 15, "pe": 2, "pp": 13},
      {"pos": 5, "equipo": "Newell's Old Boys", "pts": 32, "pj": 30, "pg": 12, "pe": 8, "pp": 10},
      {"pos": 6, "equipo": "San Lorenzo", "pts": 32, "pj": 30, "pg": 12, "pe": 8, "pp": 10},
      {"pos": 7, "equipo": "Velez Sarsfield", "pts": 32, "pj": 30, "pg": 11, "pe": 10, "pp": 9},
      {"pos": 8, "equipo": "Boca Juniors", "pts": 30, "pj": 30, "pg": 10, "pe": 10, "pp": 10},
      {"pos": 9, "equipo": "Platense", "pts": 30, "pj": 30, "pg": 11, "pe": 8, "pp": 11},
      {"pos": 10, "equipo": "Huracán", "pts": 29, "pj": 30, "pg": 11, "pe": 7, "pp": 12}
    ],
    "goleadores": [{"nombre": "Benjamín Santos", "equipo": "Rosario Central", "goles": 21}],
    "descensos": ["Suspendidos (Tratado AFA post huelga)"]
  },

  // AÑO 1949
  "1949-pd": {
    "anio": "1949",
    "torneo": "Primera División AFA",
    "campeon": "Racing Club",
    "subcampeon": "River Plate",
    "obs": "*(1) ¡Fin de la pesadilla para la Academia! Después de sufrir espantosamente 24 años lúgubres sin salir campeones absolutistas, Racing arrasa con el mejor fútbol de la década. Y Boca sufre el año más agónico de toda su historia salvándose del Descenso por 1 puntito en la última fecha para condenar al amargo Lanús a la B Metropolitana.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 49, "pj": 34, "pg": 21, "pe": 7, "pp": 6},
      {"pos": 2, "equipo": "River Plate", "pts": 43, "pj": 34, "pg": 18, "pe": 7, "pp": 9},
      {"pos": 3, "equipo": "Platense", "pts": 43, "pj": 34, "pg": 16, "pe": 11, "pp": 7},
      {"pos": 4, "equipo": "San Lorenzo", "pts": 42, "pj": 34, "pg": 17, "pe": 8, "pp": 9},
      {"pos": 5, "equipo": "Newell's Old Boys", "pts": 41, "pj": 34, "pg": 15, "pe": 11, "pp": 8},
      {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 38, "pj": 34, "pg": 13, "pe": 12, "pp": 9},
      {"pos": 7, "equipo": "Velez Sarsfield", "pts": 38, "pj": 34, "pg": 15, "pe": 8, "pp": 11},
      {"pos": 8, "equipo": "Chacarita Juniors", "pts": 33, "pj": 34, "pg": 14, "pe": 5, "pp": 15},
      {"pos": 9, "equipo": "Independiente", "pts": 33, "pj": 34, "pg": 12, "pe": 9, "pp": 13},
      {"pos": 10, "equipo": "Banfield", "pts": 32, "pj": 34, "pg": 11, "pe": 10, "pp": 13},
      {"pos": 15, "equipo": "Boca Juniors", "pts": 27, "pj": 34, "pg": 10, "pe": 7, "pp": 17},
      {"pos": 17, "equipo": "Lanús", "pts": 26, "pj": 34, "pg": 9, "pe": 8, "pp": 17}
    ],
    "goleadores": [{"nombre": "Llamil Simes / Juan J. Pizzuti", "equipo": "Racing / Banfield", "goles": 26}],
    "descensos": ["Lanús"]
  },

  // AÑO 1950
  "1950-pd": {
    "anio": "1950",
    "torneo": "Primera División AFA",
    "campeon": "Racing Club",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El Cilindro Ruge. El Racing del inmenso 'Tucho' Méndez reafirma su imperio levantando el campeonato consecutivamente, pero esta vez castigando por ocho puntos de diferencia al Boca Jrs de resurrección post-crisis y a Independiente, ambos en segunda fila con 39 tantos.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 47, "pj": 34, "pg": 23, "pe": 1, "pp": 10},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 39, "pj": 34, "pg": 15, "pe": 9, "pp": 10},
      {"pos": 3, "equipo": "Independiente", "pts": 39, "pj": 34, "pg": 18, "pe": 3, "pp": 13},
      {"pos": 4, "equipo": "River Plate", "pts": 38, "pj": 34, "pg": 15, "pe": 8, "pp": 11},
      {"pos": 5, "equipo": "San Lorenzo", "pts": 37, "pj": 34, "pg": 15, "pe": 7, "pp": 12},
      {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 36, "pj": 34, "pg": 14, "pe": 8, "pp": 12},
      {"pos": 7, "equipo": "Banfield", "pts": 35, "pj": 34, "pg": 12, "pe": 11, "pp": 11},
      {"pos": 8, "equipo": "Chacarita Juniors", "pts": 34, "pj": 34, "pg": 13, "pe": 8, "pp": 13},
      {"pos": 9, "equipo": "Platense", "pts": 34, "pj": 34, "pg": 11, "pe": 12, "pp": 11},
      {"pos": 10, "equipo": "Velez Sarsfield", "pts": 33, "pj": 34, "pg": 11, "pe": 11, "pp": 12}
    ],
    "goleadores": [{"nombre": "Mario Papa", "equipo": "San Lorenzo", "goles": 24}],
    "descensos": ["Quilmes", "Rosario Central"]
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
console.log(`Lote 12 Finalizado. Racing Bicampeón y Huelga 48 insertados a puro plomo. Nodos tocados: ${patched}`);
