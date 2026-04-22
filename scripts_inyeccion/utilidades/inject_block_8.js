const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1927 REESCRITO EXPANDIDO
  "1927-pd": {
    "anio": "1927",
    "torneo": "Primera División",
    "campeon": "San Lorenzo",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El histórico torneo gigante de la Paz Institucional (34 equipos). Se expandió el registro para visualizar a los gigantes: River tuvo un pésimo año (14°), Racing fue (7°) y Estudiantes (11°).* ",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 57, "pj": 33, "pg": 26, "pe": 5, "pp": 2},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 56, "pj": 33, "pg": 25, "pe": 6, "pp": 2},
      {"pos": 3, "equipo": "Lanús", "pts": 50, "pj": 33, "pg": 22, "pe": 6, "pp": 5},
      {"pos": 4, "equipo": "Ferro Carril Oeste", "pts": 47, "pj": 33, "pg": 19, "pe": 9, "pp": 5},
      {"pos": 5, "equipo": "Huracán", "pts": 44, "pj": 33, "pg": 18, "pe": 8, "pp": 7},
      {"pos": 6, "equipo": "Independiente", "pts": 44, "pj": 33, "pg": 20, "pe": 4, "pp": 9},
      {"pos": 7, "equipo": "Racing Club", "pts": 41, "pj": 33, "pg": 18, "pe": 5, "pp": 10},
      {"pos": 8, "equipo": "Sportivo Buenos Aires", "pts": 41, "pj": 33, "pg": 17, "pe": 7, "pp": 9},
      {"pos": 9, "equipo": "Sportivo Palermo", "pts": 40, "pj": 33, "pg": 16, "pe": 8, "pp": 9},
      {"pos": 10, "equipo": "Sportivo Barracas", "pts": 39, "pj": 33, "pg": 16, "pe": 7, "pp": 10},
      {"pos": 11, "equipo": "Estudiantes (LP)", "pts": 39, "pj": 33, "pg": 15, "pe": 9, "pp": 9},
      {"pos": 12, "equipo": "Quilmes", "pts": 39, "pj": 33, "pg": 16, "pe": 7, "pp": 10},
      {"pos": 13, "equipo": "Argentino de Quilmes", "pts": 36, "pj": 33, "pg": 14, "pe": 8, "pp": 11},
      {"pos": 14, "equipo": "River Plate", "pts": 35, "pj": 33, "pg": 15, "pe": 5, "pp": 13},
      {"pos": 15, "equipo": "Velez Sarsfield", "pts": 33, "pj": 33, "pg": 11, "pe": 11, "pp": 11}
    ],
    "goleadores": [{"nombre": "Domingo Tarasconi", "equipo": "Boca Juniors", "goles": 32}],
    "descensos": ["Alvear", "Defensores de Belgrano", "Boca Alumni"]
  },

  // AÑO 1928
  "1928-pd": {
    "anio": "1928",
    "torneo": "Primera División",
    "campeon": "Huracán",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El campeonato de los 36 valientes. Huracán levanta una copa increíble perdiendo un solo partido en todo el año.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Huracán", "pts": 58, "pj": 35, "pg": 28, "pe": 2, "pp": 5},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 57, "pj": 35, "pg": 28, "pe": 1, "pp": 6},
      {"pos": 3, "equipo": "Estudiantes (LP)", "pts": 53, "pj": 35, "pg": 25, "pe": 3, "pp": 7},
      {"pos": 4, "equipo": "Independiente", "pts": 52, "pj": 35, "pg": 22, "pe": 8, "pp": 5},
      {"pos": 5, "equipo": "Racing Club", "pts": 49, "pj": 35, "pg": 23, "pe": 3, "pp": 9},
      {"pos": 6, "equipo": "San Lorenzo", "pts": 47, "pj": 35, "pg": 21, "pe": 5, "pp": 9},
      {"pos": 7, "equipo": "River Plate", "pts": 46, "pj": 35, "pg": 20, "pe": 6, "pp": 9},
      {"pos": 8, "equipo": "Quilmes", "pts": 43, "pj": 35, "pg": 18, "pe": 7, "pp": 10},
      {"pos": 9, "equipo": "Tigre", "pts": 43, "pj": 35, "pg": 18, "pe": 7, "pp": 10},
      {"pos": 10, "equipo": "Ferro Carril Oeste", "pts": 41, "pj": 35, "pg": 16, "pe": 9, "pp": 10}
    ],
    "goleadores": [{"nombre": "Roberto Cherro", "equipo": "Boca Juniors", "goles": 32}],
    "descensos": ["Liberal Argentino", "Porteño"]
  },

  // AÑO 1929 (TORNEO ESTÍMULO DE GRUPOS)
  "1929-pd": {
    "anio": "1929",
    "torneo": "Primera División",
    "campeon": "Gimnasia y Esgrima (LP)",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El torneo se dividió en Sección Par y Sección Impar por la gigantesca cantidad de equipos y el retraso del calendario. El grandioso 'Expreso' de Gimnasia de La Plata y Boca ganaron sus grupos, venciendo Gimnasia en la Finalísima por 2-1 al equipo de la Ribera para ser Campeón Histórico.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "G.E.B.A (LP)", "pts": 28, "pj": 17, "pg": 14, "pe": 0, "pp": 3},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 27, "pj": 16, "pg": 13, "pe": 1, "pp": 2},
      {"pos": 3, "equipo": "River Plate", "pts": 27, "pj": 17, "pg": 11, "pe": 5, "pp": 1},
      {"pos": 4, "equipo": "San Lorenzo", "pts": 27, "pj": 16, "pg": 12, "pe": 3, "pp": 1},
      {"pos": 5, "equipo": "Independiente", "pts": 20, "pj": 16, "pg": 7, "pe": 6, "pp": 3},
      {"pos": 6, "equipo": "Racing Club", "pts": 24, "pj": 17, "pg": 10, "pe": 4, "pp": 3},
      {"pos": 7, "equipo": "Estudiantes (LP)", "pts": 22, "pj": 16, "pg": 8, "pe": 6, "pp": 2},
      {"pos": 8, "equipo": "Defensores de Belgrano", "pts": 17, "pj": 17, "pg": 6, "pe": 5, "pp": 6},
      {"pos": 9, "equipo": "Chacarita Juniors", "pts": 20, "pj": 17, "pg": 8, "pe": 4, "pp": 5},
      {"pos": 10, "equipo": "Platense", "pts": 15, "pj": 16, "pg": 6, "pe": 3, "pp": 7}
    ],
    "goleadores": [{"nombre": "Juan M. Cortese", "equipo": "San Lorenzo", "goles": 13}, {"nombre": "Manuel Seoane", "equipo": "Independiente", "goles": 13}],
    "descensos": []
  },

  // AÑO 1930 (EL OCASO DEL AMATEURISMO)
  "1930-pd": {
    "anio": "1930",
    "torneo": "Primera División",
    "campeon": "Boca Juniors",
    "subcampeon": "Estudiantes (LP)",
    "obs": "*(1) El Canto de Cisne de la era Romántica. Boca Juniors domina un torneo agotador de ¡36 equipos! ante las quejas de un grupo de clubes. Fue la última gota: al año siguiente nacerá el Profesionalismo rentado.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 61, "pj": 35, "pg": 29, "pe": 3, "pp": 3},
      {"pos": 2, "equipo": "Estudiantes (LP)", "pts": 56, "pj": 35, "pg": 27, "pe": 2, "pp": 6},
      {"pos": 3, "equipo": "River Plate", "pts": 52, "pj": 35, "pg": 22, "pe": 8, "pp": 5},
      {"pos": 4, "equipo": "San Lorenzo", "pts": 51, "pj": 35, "pg": 23, "pe": 5, "pp": 7},
      {"pos": 5, "equipo": "Talleres (RE)", "pts": 51, "pj": 35, "pg": 21, "pe": 9, "pp": 5},
      {"pos": 6, "equipo": "Racing Club", "pts": 49, "pj": 35, "pg": 22, "pe": 5, "pp": 8},
      {"pos": 7, "equipo": "Independiente", "pts": 47, "pj": 35, "pg": 18, "pe": 11, "pp": 6},
      {"pos": 8, "equipo": "Gimnasia y Esgrima (LP)", "pts": 42, "pj": 35, "pg": 16, "pe": 10, "pp": 9},
      {"pos": 9, "equipo": "Chacarita Juniors", "pts": 42, "pj": 35, "pg": 18, "pe": 6, "pp": 11},
      {"pos": 10, "equipo": "Quilmes", "pts": 42, "pj": 35, "pg": 19, "pe": 4, "pp": 12}
    ],
    "goleadores": [{"nombre": "Roberto Cherro", "equipo": "Boca Juniors", "goles": 37}],
    "descensos": ["Argentino del Sud", "Honor y Patria (Bernal)"]
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
console.log(`Lote 8 Inyectado y finalizó la Era Amateur para siempre. Nodos tocados: ${patched}`);
