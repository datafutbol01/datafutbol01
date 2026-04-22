const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1956
  "1956-pd": {
    "anio": "1956",
    "torneo": "Primera División AFA",
    "campeon": "River Plate",
    "subcampeon": "Lanús",
    "obs": "*(1) Los Globetrotters del Sur resucitan en la historia. Lanús arma el equipo más inolvidable de su existencia llegando a un histórico subcampeonato jugando lujos infernales, pero el peso del equipo 'Millonario' y la billetera de Núñez decantan un segundo anillo consecutivo para River y La Máquina.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 43, "pj": 30, "pg": 17, "pe": 9, "pp": 4},
      {"pos": 2, "equipo": "Lanús", "pts": 41, "pj": 30, "pg": 15, "pe": 11, "pp": 4},
      {"pos": 3, "equipo": "Boca Juniors", "pts": 40, "pj": 30, "pg": 16, "pe": 8, "pp": 6},
      {"pos": 4, "equipo": "Racing Club", "pts": 39, "pj": 30, "pg": 14, "pe": 11, "pp": 5},
      {"pos": 5, "equipo": "Velez Sarsfield", "pts": 37, "pj": 30, "pg": 13, "pe": 11, "pp": 6},
      {"pos": 6, "equipo": "Rosario Central", "pts": 30, "pj": 30, "pg": 11, "pe": 8, "pp": 11},
      {"pos": 7, "equipo": "Independiente", "pts": 30, "pj": 30, "pg": 12, "pe": 6, "pp": 12},
      {"pos": 8, "equipo": "San Lorenzo", "pts": 29, "pj": 30, "pg": 11, "pe": 7, "pp": 12},
      {"pos": 9, "equipo": "Ferro Carril Oeste", "pts": 27, "pj": 30, "pg": 10, "pe": 7, "pp": 13},
      {"pos": 10, "equipo": "Newell's Old Boys", "pts": 26, "pj": 30, "pg": 9, "pe": 8, "pp": 13}
    ],
    "goleadores": [{"nombre": "J. Castro (Central) / E. Grillo (CAI)", "equipo": "R.Central / Independiente", "goles": 17}],
    "descensos": ["Chacarita Juniors"]
  },

  // AÑO 1957
  "1957-pd": {
    "anio": "1957",
    "torneo": "Primera División AFA",
    "campeon": "River Plate",
    "subcampeon": "San Lorenzo",
    "obs": "*(1) El Tricampeonato Millonario. River iguala a Racing y anota formalmente historia alzando la Copa Nacional por tercera vez ininterrumpida (1955-1956-1957) pasándole por arriba literal al Ciclón en puntaje cerrado. El delantero Roberto Zárate deja 22 goles de manual. Ferro Carril Oeste cae descendido.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 46, "pj": 30, "pg": 19, "pe": 8, "pp": 3},
      {"pos": 2, "equipo": "San Lorenzo", "pts": 38, "pj": 30, "pg": 15, "pe": 8, "pp": 7},
      {"pos": 3, "equipo": "Racing Club", "pts": 36, "pj": 30, "pg": 15, "pe": 6, "pp": 9},
      {"pos": 4, "equipo": "Boca Juniors", "pts": 34, "pj": 30, "pg": 13, "pe": 8, "pp": 9},
      {"pos": 5, "equipo": "Velez Sarsfield", "pts": 34, "pj": 30, "pg": 12, "pe": 10, "pp": 8},
      {"pos": 6, "equipo": "Huracán", "pts": 33, "pj": 30, "pg": 14, "pe": 5, "pp": 11},
      {"pos": 7, "equipo": "Estudiantes (LP)", "pts": 33, "pj": 30, "pg": 12, "pe": 9, "pp": 9},
      {"pos": 8, "equipo": "Independiente", "pts": 31, "pj": 30, "pg": 11, "pe": 9, "pp": 10},
      {"pos": 9, "equipo": "Newell's Old Boys", "pts": 31, "pj": 30, "pg": 11, "pe": 9, "pp": 10},
      {"pos": 10, "equipo": "Rosario Central", "pts": 27, "pj": 30, "pg": 10, "pe": 7, "pp": 13}
    ],
    "goleadores": [{"nombre": "Roberto Zárate", "equipo": "River Plate", "goles": 22}],
    "descensos": ["Ferro Carril Oeste"]
  },

  // AÑO 1958
  "1958-pd": {
    "anio": "1958",
    "torneo": "Primera División AFA",
    "campeon": "Racing Club",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El Fin de la Máquina. Buscando un histórico Tetracampeonato inigualable, River recibe el zarpazo ahogador de Racing, que despierta de nuevo tras 7 años callado y gana la liga por robo en 41 puntos. Al mismo tiempo nacía 'El Nene', José Sanfilippo arruina redes perforando su primer récord personal de 28 Goles.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 41, "pj": 30, "pg": 16, "pe": 9, "pp": 5},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 38, "pj": 30, "pg": 14, "pe": 10, "pp": 6},
      {"pos": 3, "equipo": "San Lorenzo", "pts": 38, "pj": 30, "pg": 16, "pe": 6, "pp": 8},
      {"pos": 4, "equipo": "Atlanta", "pts": 36, "pj": 30, "pg": 14, "pe": 8, "pp": 8},
      {"pos": 5, "equipo": "River Plate", "pts": 35, "pj": 30, "pg": 14, "pe": 7, "pp": 9}, // Fin racha // Err: 35
      {"pos": 6, "equipo": "Rosario Central", "pts": 35, "pj": 30, "pg": 13, "pe": 9, "pp": 8},
      {"pos": 7, "equipo": "Velez Sarsfield", "pts": 34, "pj": 30, "pg": 13, "pe": 8, "pp": 9},
      {"pos": 8, "equipo": "Independiente", "pts": 33, "pj": 30, "pg": 11, "pe": 11, "pp": 8},
      {"pos": 9, "equipo": "Estudiantes (LP)", "pts": 31, "pj": 30, "pg": 13, "pe": 5, "pp": 12},
      {"pos": 10, "equipo": "Huracán", "pts": 27, "pj": 30, "pg": 12, "pe": 3, "pp": 15}
    ],
    "goleadores": [{"nombre": "José Sanfilippo", "equipo": "San Lorenzo", "goles": 28}],
    "descensos": ["Tigre"]
  },

  // AÑO 1959
  "1959-pd": {
    "anio": "1959",
    "torneo": "Primera División AFA",
    "campeon": "San Lorenzo",
    "subcampeon": "Racing Club",
    "obs": "*(1) El Nene Rompe el Molde. Un torneo absolutamente abrumador e impactante desde Boedo. Sanfilippo vuelve a llevarse el galardón empujando 31 gritos divinos a la red garantizando el Campeonato listero para San Lorenzo sobre una pobre Academia. Central Córdoba de Rosario juega en Primera División pero en menos de un año cae en picada y desciende para no volver por muchísimas décadas.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 45, "pj": 30, "pg": 21, "pe": 3, "pp": 6},
      {"pos": 2, "equipo": "Racing Club", "pts": 38, "pj": 30, "pg": 17, "pe": 4, "pp": 9},
      {"pos": 3, "equipo": "Independiente", "pts": 33, "pj": 30, "pg": 11, "pe": 11, "pp": 8},
      {"pos": 4, "equipo": "Ferro Carril Oeste", "pts": 33, "pj": 30, "pg": 10, "pe": 13, "pp": 7},
      {"pos": 5, "equipo": "Newell's Old Boys", "pts": 32, "pj": 30, "pg": 12, "pe": 8, "pp": 10},
      {"pos": 6, "equipo": "River Plate", "pts": 32, "pj": 30, "pg": 14, "pe": 4, "pp": 12}, // Corrected below pts.. Wait 32
      {"pos": 7, "equipo": "Atlanta", "pts": 32, "pj": 30, "pg": 9, "pe": 14, "pp": 7},
      {"pos": 8, "equipo": "Boca Juniors", "pts": 30, "pj": 30, "pg": 12, "pe": 6, "pp": 12},
      {"pos": 9, "equipo": "Huracán", "pts": 30, "pj": 30, "pg": 9, "pe": 12, "pp": 9},
      {"pos": 10, "equipo": "Estudiantes (LP)", "pts": 28, "pj": 30, "pg": 10, "pe": 8, "pp": 12}
    ],
    "goleadores": [{"nombre": "José Sanfilippo", "equipo": "San Lorenzo", "goles": 31}],
    "descensos": ["Central Córdoba (Rosario)"]
  },

  // AÑO 1960
  "1960-pd": {
    "anio": "1960",
    "torneo": "Primera División AFA",
    "campeon": "Independiente",
    "subcampeon": "River Plate",
    "obs": "*(1) El Desastre de Rosario. Un final de año macabro. Mientras en Buenos Aires el Rojo diabólico se quedaba con el campeonato por dos puntitos frente a River y el insólito Argentinos Juniors revelación, todas las miradas apuntaron directo al fondo de la tabla: NEWELL'S OLD BOYS descendió históricamente a la Primera B siendo uno de los gigantes sepultados en la miseria de los sábados, un castigo deportivo enorme.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Independiente", "pts": 41, "pj": 30, "pg": 17, "pe": 7, "pp": 6},
      {"pos": 2, "equipo": "River Plate", "pts": 39, "pj": 30, "pg": 16, "pe": 7, "pp": 7},
      {"pos": 3, "equipo": "Argentinos Juniors", "pts": 39, "pj": 30, "pg": 15, "pe": 9, "pp": 6},
      {"pos": 4, "equipo": "Racing Club", "pts": 37, "pj": 30, "pg": 14, "pe": 9, "pp": 7},
      {"pos": 5, "equipo": "Boca Juniors", "pts": 37, "pj": 30, "pg": 13, "pe": 11, "pp": 6},
      {"pos": 6, "equipo": "San Lorenzo", "pts": 36, "pj": 30, "pg": 14, "pe": 8, "pp": 8},
      {"pos": 7, "equipo": "Velez Sarsfield", "pts": 33, "pj": 30, "pg": 12, "pe": 9, "pp": 9},
      {"pos": 8, "equipo": "Rosario Central", "pts": 29, "pj": 30, "pg": 10, "pe": 9, "pp": 11},
      {"pos": 9, "equipo": "Huracán", "pts": 28, "pj": 30, "pg": 10, "pe": 8, "pp": 12},
      {"pos": 10, "equipo": "Chacarita Juniors", "pts": 28, "pj": 30, "pg": 9, "pe": 10, "pp": 11}
    ],
    "goleadores": [{"nombre": "José Sanfilippo", "equipo": "San Lorenzo", "goles": 34}],
    "descensos": ["Newell's Old Boys"]
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
console.log(`Lote 14 Finalizado. Tricampeón River Plae Inyectado. Caída Leprosa Documentada. Nodos tocados: ${patched}`);
