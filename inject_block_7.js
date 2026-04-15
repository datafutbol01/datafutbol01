const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1923
  "1923-aaf": {
    "anio": "1923",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Boca Juniors",
    "subcampeon": "Huracán",
    "obs": "*(1) Boca Juniors y Huracán, los dos amos y señores absolutos de la AAF, empatan en 51 puntos el súper-campeonato de 30 fechas. En el cuarto (!) partido de desempate, Boca se impone 2-0 y grita Campeón.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 51, "pj": 30, "pg": 24, "pe": 3, "pp": 3},
      {"pos": 2, "equipo": "Huracán", "pts": 51, "pj": 29, "pg": 23, "pe": 5, "pp": 1},
      {"pos": 3, "equipo": "Sportivo Barracas", "pts": 40, "pj": 28, "pg": 18, "pe": 4, "pp": 6},
      {"pos": 4, "equipo": "Sportivo Dock Sud", "pts": 37, "pj": 28, "pg": 13, "pe": 11, "pp": 4},
      {"pos": 5, "equipo": "Palermo", "pts": 33, "pj": 25, "pg": 14, "pe": 5, "pp": 6},
      {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 32, "pj": 22, "pg": 14, "pe": 4, "pp": 4}
    ],
    "goleadores": [{"nombre": "Domingo Tarasconi", "equipo": "Boca Juniors", "goles": 40}],
    "descensos": ["Suspendidos por Cisma Metropolitano"]
  },
  "1923-aamf": {
    "id": "1923-aamf",
    "anio": "1923",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "San Lorenzo",
    "subcampeon": "Independiente",
    "obs": "*(1) El Ciclón entra pisando durísimo a la liga rebelde. San Lorenzo de Almagro grita, por primera vez en toda su rica historia, Campeón Oficial al ganar la liga Amateurs arrebatándole el trono a Independiente.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 35, "pj": 20, "pg": 17, "pe": 1, "pp": 2},
      {"pos": 2, "equipo": "Independiente", "pts": 32, "pj": 20, "pg": 15, "pe": 2, "pp": 3},
      {"pos": 3, "equipo": "River Plate", "pts": 29, "pj": 20, "pg": 14, "pe": 1, "pp": 5},
      {"pos": 4, "equipo": "Racing Club", "pts": 29, "pj": 20, "pg": 14, "pe": 1, "pp": 5},
      {"pos": 5, "equipo": "Sportivo Barracas", "pts": 28, "pj": 20, "pg": 12, "pe": 4, "pp": 4},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (LP)", "pts": 24, "pj": 20, "pg": 11, "pe": 2, "pp": 7}
    ],
    "goleadores": [{"nombre": "Martín Barceló", "equipo": "Racing Club", "goles": 15}],
    "descensos": ["Suspendidos por Cisma Metropolitano"]
  },

  // AÑO 1924
  "1924-aaf": {
    "anio": "1924",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Boca Juniors",
    "subcampeon": "Temperley",
    "obs": "*(1) Boca aplasta su liga logrando un hito mayúsculo: se corona bicampeón de manera absolutamente INVICTA cediendo nada más que un empatito.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 37, "pj": 19, "pg": 18, "pe": 1, "pp": 0},
      {"pos": 2, "equipo": "Temperley", "pts": 32, "pj": 21, "pg": 13, "pe": 6, "pp": 2},
      {"pos": 3, "equipo": "Sportivo Dock Sud", "pts": 29, "pj": 21, "pg": 12, "pe": 5, "pp": 4},
      {"pos": 4, "equipo": "El Porvenir", "pts": 27, "pj": 21, "pg": 11, "pe": 5, "pp": 5},
      {"pos": 5, "equipo": "Argentinos Juniors", "pts": 25, "pj": 21, "pg": 10, "pe": 5, "pp": 6},
      {"pos": 6, "equipo": "Sportivo Barracas", "pts": 25, "pj": 21, "pg": 10, "pe": 5, "pp": 6}
    ],
    "goleadores": [{"nombre": "Domingo Tarasconi", "equipo": "Boca Juniors", "goles": 16}],
    "descensos": ["Suspendidos por Cisma Metropolitano"]
  },
  "1924-aamf": {
    "id": "1924-aamf",
    "anio": "1924",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "San Lorenzo",
    "subcampeon": "Gimnasia y Esgrima (LP)",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 39, "pj": 23, "pg": 18, "pe": 3, "pp": 2},
      {"pos": 2, "equipo": "Gimnasia y Esgrima (LP)", "pts": 37, "pj": 23, "pg": 15, "pe": 7, "pp": 1},
      {"pos": 3, "equipo": "Independiente", "pts": 36, "pj": 23, "pg": 16, "pe": 4, "pp": 3},
      {"pos": 4, "equipo": "Platense", "pts": 36, "pj": 23, "pg": 14, "pe": 8, "pp": 1},
      {"pos": 5, "equipo": "River Plate", "pts": 31, "pj": 23, "pg": 13, "pe": 5, "pp": 5},
      {"pos": 6, "equipo": "Racing Club", "pts": 30, "pj": 23, "pg": 14, "pe": 2, "pp": 7}
    ],
    "goleadores": [{"nombre": "Fausto Lucarelli", "equipo": "Sportivo Buenos Aires", "goles": 15}],
    "descensos": ["Suspendidos por Cisma Metropolitano"]
  },

  // AÑO 1925
  "1925-aaf": {
    "anio": "1925",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Huracán",
    "subcampeon": "Nueva Chicago",
    "obs": "*(1) Año histórico. Como Boca Juniors abandonó la liga para irse a su legendaria Gira Europea de 1925, Huracán aprovechó la limpieza para alzarse con el tren de la gloria (A Boca al regresar se le entregó el título de 'Campeón de Honor' paralelo).* ",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Huracán", "pts": 38, "pj": 21, "pg": 18, "pe": 2, "pp": 1},
      {"pos": 2, "equipo": "Nueva Chicago", "pts": 36, "pj": 21, "pg": 17, "pe": 2, "pp": 2},
      {"pos": 3, "equipo": "El Porvenir", "pts": 32, "pj": 21, "pg": 14, "pe": 4, "pp": 3},
      {"pos": 4, "equipo": "Temperley", "pts": 30, "pj": 20, "pg": 13, "pe": 4, "pp": 3},
      {"pos": 5, "equipo": "Chacarita Juniors", "pts": 28, "pj": 21, "pg": 12, "pe": 4, "pp": 5},
      {"pos": 6, "equipo": "Argentino de Quilmes", "pts": 23, "pj": 21, "pg": 9, "pe": 5, "pp": 7}
    ],
    "goleadores": [{"nombre": "José Gaslini", "equipo": "Chacarita Juniors", "goles": 16}],
    "descensos": ["Suspendidos por Cisma Metropolitano"]
  },
  "1925-aamf": {
    "id": "1925-aamf",
    "anio": "1925",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "Racing Club",
    "subcampeon": "San Lorenzo",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 39, "pj": 24, "pg": 15, "pe": 9, "pp": 0},
      {"pos": 2, "equipo": "San Lorenzo", "pts": 36, "pj": 24, "pg": 14, "pe": 8, "pp": 2},
      {"pos": 3, "equipo": "Estudiantes (BA)", "pts": 34, "pj": 24, "pg": 14, "pe": 6, "pp": 4},
      {"pos": 4, "equipo": "Palermo", "pts": 34, "pj": 24, "pg": 15, "pe": 4, "pp": 5},
      {"pos": 5, "equipo": "Independiente", "pts": 31, "pj": 24, "pg": 12, "pe": 7, "pp": 5},
      {"pos": 6, "equipo": "Velez Sarsfield", "pts": 30, "pj": 24, "pg": 11, "pe": 8, "pp": 5}
    ],
    "goleadores": [{"nombre": "Alberto Bellomo", "equipo": "Estudiantes (BA)", "goles": 16}],
    "descensos": ["Suspendidos por Cisma Metropolitano"]
  },

  // AÑO 1926 (ÚLTIMO AÑO DEL CISMA)
  "1926-aaf": {
    "anio": "1926",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Boca Juniors",
    "subcampeon": "Argentinos Juniors",
    "obs": "*(1) El acto final de la división. Boca Juniors se despide de la vieja AAF logrando, para no ser menos, su propio campeonato en un formato totalmente INVICTO.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 32, "pj": 17, "pg": 15, "pe": 2, "pp": 0},
      {"pos": 2, "equipo": "Argentinos Juniors", "pts": 28, "pj": 17, "pg": 12, "pe": 4, "pp": 1},
      {"pos": 3, "equipo": "Huracán", "pts": 24, "pj": 17, "pg": 11, "pe": 2, "pp": 4},
      {"pos": 4, "equipo": "Sportivo Balcarce", "pts": 23, "pj": 17, "pg": 10, "pe": 3, "pp": 4},
      {"pos": 5, "equipo": "Palermo", "pts": 23, "pj": 17, "pg": 10, "pe": 3, "pp": 4},
      {"pos": 6, "equipo": "Argentino de Quilmes", "pts": 22, "pj": 17, "pg": 10, "pe": 2, "pp": 5}
    ],
    "goleadores": [{"nombre": "Roberto Cherro", "equipo": "Boca Juniors", "goles": 22}],
    "descensos": ["Suspendidos por unificación inminente"]
  },
  "1926-aamf": {
    "id": "1926-aamf",
    "anio": "1926",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "Independiente",
    "subcampeon": "San Lorenzo",
    "obs": "*(1) Del otro lado de la calle y para ponerle la cereza de oro al pastel de despedida, Independiente también aniquila la liga ganándola categóricamente INVICTO, anotando el mayor puntaje de la época.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Independiente", "pts": 46, "pj": 25, "pg": 21, "pe": 4, "pp": 0},
      {"pos": 2, "equipo": "San Lorenzo", "pts": 45, "pj": 25, "pg": 21, "pe": 3, "pp": 1},
      {"pos": 3, "equipo": "Platense", "pts": 37, "pj": 25, "pg": 16, "pe": 5, "pp": 4},
      {"pos": 4, "equipo": "Racing Club", "pts": 34, "pj": 25, "pg": 16, "pe": 2, "pp": 7},
      {"pos": 5, "equipo": "Gimnasia y Esgrima (LP)", "pts": 33, "pj": 25, "pg": 13, "pe": 7, "pp": 5},
      {"pos": 6, "equipo": "Lanús", "pts": 33, "pj": 25, "pg": 13, "pe": 7, "pp": 5}
    ],
    "goleadores": [{"nombre": "Manuel Seoane", "equipo": "Independiente", "goles": 29}],
    "descensos": ["Suspendidos por unificación inminente"]
  },

  // AÑO 1927 (EL MILAGRO DE LA REUNIFICACIÓN)
  "1927-pd": {
    "anio": "1927",
    "torneo": "Asociación Amateurs Argentina de Football",
    "campeon": "San Lorenzo",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El Cisma sucumbe ante la paz final: Los entes se unen en la histórica 'Asociación Amateurs Argentina'. Cuelgan los egos, se funde en una sola Liga de 34 Equipos, y San Lorenzo triunfa ganándole la contienda al todopoderoso Boca por tan sólo un punto.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 57, "pj": 33, "pg": 26, "pe": 5, "pp": 2},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 56, "pj": 33, "pg": 25, "pe": 6, "pp": 2},
      {"pos": 3, "equipo": "Lanús", "pts": 50, "pj": 33, "pg": 22, "pe": 6, "pp": 5},
      {"pos": 4, "equipo": "Ferro Carril Oeste", "pts": 47, "pj": 33, "pg": 19, "pe": 9, "pp": 5},
      {"pos": 5, "equipo": "Huracán", "pts": 44, "pj": 33, "pg": 18, "pe": 8, "pp": 7},
      {"pos": 6, "equipo": "Independiente", "pts": 44, "pj": 33, "pg": 20, "pe": 4, "pp": 9}
    ],
    "goleadores": [{"nombre": "Domingo Tarasconi", "equipo": "Boca Juniors", "goles": 32}],
    "descensos": ["Suspendidos temporalmente para evitar quejas políticas."]
  }
};

let patched = 0;

// Reemplazos Lote 7 (Dividiendo 1923-1926 e inyectando unificado 1927)
data.forEach((torneo) => {
  if (torneo.id === '1923-pd') {
    torneo.id = '1923-aaf';
    Object.assign(torneo, batch['1923-aaf']);
    patched++;
  } else if (torneo.id === '1924-pd') {
    torneo.id = '1924-aaf';
    Object.assign(torneo, batch['1924-aaf']);
    patched++;
  } else if (torneo.id === '1925-pd') {
    torneo.id = '1925-aaf';
    Object.assign(torneo, batch['1925-aaf']);
    patched++;
  } else if (torneo.id === '1926-pd') {
    torneo.id = '1926-aaf';
    Object.assign(torneo, batch['1926-aaf']);
    patched++;
  } else if (torneo.id === '1927-pd') {
    Object.assign(torneo, batch['1927-pd']);
    patched++;
  }
});

// Anexando los campeonatos rebeldes de la liga Amateurs
const years = ['1923', '1924', '1925', '1926'];
years.forEach(year => {
  const indexAaf = data.findIndex(t => t.id === `${year}-aaf`);
  if (indexAaf !== -1) {
    data.splice(indexAaf + 1, 0, batch[`${year}-aamf`]);
    patched++;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote 7 Finalizado. Cisma cerrado. 1927 unificado. Nodos inyectados: ${patched}`);
