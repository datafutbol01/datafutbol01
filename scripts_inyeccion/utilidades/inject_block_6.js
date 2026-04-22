const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1918 (Último Año Unificado del Cisma)
  "1918-pd": {
    "anio": "1918",
    "torneo": "Primera División (AAF)",
    "campeon": "Racing Club",
    "subcampeon": "River Plate",
    "obs": "*(1) Racing Club de Avellaneda conquista un récord insuperable en la historia del fútbol argentino: El Séptimo Campeonato consecutivo y primer título del gran ídolo Alberico Zabaleta. Último año antes de la gran explosión institucional del 1919.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 36, "pj": 19, "pg": 17, "pe": 2, "pp": 0},
      {"pos": 2, "equipo": "River Plate", "pts": 25, "pj": 19, "pg": 9, "pe": 7, "pp": 3},
      {"pos": 3, "equipo": "Boca Juniors", "pts": 24, "pj": 19, "pg": 9, "pe": 6, "pp": 4},
      {"pos": 4, "equipo": "San Isidro", "pts": 24, "pj": 19, "pg": 10, "pe": 4, "pp": 5},
      {"pos": 5, "equipo": "Sportivo Barracas", "pts": 21, "pj": 19, "pg": 9, "pe": 3, "pp": 7},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (LP)", "pts": 20, "pj": 19, "pg": 7, "pe": 6, "pp": 6}
    ],
    "goleadores": [{"nombre": "Alberico Zabaleta", "equipo": "Racing Club", "goles": 13}],
    "descensos": ["Argentino de Quilmes", "Ferro Carril Oeste"]
  },

  // AÑO 1919 (EL GRAN CISMA AAmF)
  "1919-aaf": {
    "anio": "1919",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Boca Juniors",
    "subcampeon": "Estudiantes (LP)",
    "obs": "*(1) ¡Nace el segundo Gran Cisma! Un grupo enorme de clubes liderados por Racing y River se desafilian a mitad del torneo original y fundan la liga AAmF. Por esta razón, Boca Juniors (fiel a la oficial AAF) juega un torneo relámpago con los clubes restantes y consigue así inaugurar su vitrina con el primer Campeonato Oficial de Primera.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 14, "pj": 8, "pg": 7, "pe": 0, "pp": 1},
      {"pos": 2, "equipo": "Estudiantes (LP)", "pts": 7, "pj": 8, "pg": 3, "pe": 1, "pp": 4},
      {"pos": 3, "equipo": "Huracán", "pts": 4, "pj": 8, "pg": 2, "pe": 0, "pp": 6},
      {"pos": 4, "equipo": "Eureka", "pts": 3, "pj": 8, "pg": 1, "pe": 1, "pp": 6},
      {"pos": 5, "equipo": "Sportivo Almagro", "pts": 3, "pj": 8, "pg": 1, "pe": 1, "pp": 6},
      {"pos": 6, "equipo": "Porteño", "pts": 3, "pj": 8, "pg": 1, "pe": 1, "pp": 6}
    ],
    "goleadores": [{"nombre": "Alfredo Garasini", "equipo": "Boca Juniors", "goles": 6}, {"nombre": "Alfredo Martín", "equipo": "Boca Juniors", "goles": 6}],
    "descensos": ["Eureka (por fusión)"]
  },
  "1919-aamf": {
    "id": "1919-aamf",
    "anio": "1919",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "Racing Club",
    "subcampeon": "Vélez Sarsfield",
    "obs": "*(1) Liga disidente donde migraron los fundadores de la AAmF (River, San Lorenzo, Independiente, Racing). La Academia arrasa de manera invicta y continúa su aplastante monarquía.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 26, "pj": 13, "pg": 13, "pe": 0, "pp": 0},
      {"pos": 2, "equipo": "Vélez Sarsfield", "pts": 20, "pj": 13, "pg": 9, "pe": 2, "pp": 2},
      {"pos": 3, "equipo": "River Plate", "pts": 16, "pj": 13, "pg": 6, "pe": 4, "pp": 3},
      {"pos": 4, "equipo": "Defensores de Belgrano", "pts": 16, "pj": 13, "pg": 6, "pe": 4, "pp": 3},
      {"pos": 5, "equipo": "Atlético San Isidro", "pts": 15, "pj": 13, "pg": 5, "pe": 5, "pp": 3},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (LP)", "pts": 15, "pj": 13, "pg": 6, "pe": 3, "pp": 4}
    ],
    "goleadores": [{"nombre": "Alberto Marcovecchio", "equipo": "Racing Club", "goles": 16}],
    "descensos": []
  },

  // AÑO 1920
  "1920-aaf": {
    "anio": "1920",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Boca Juniors",
    "subcampeon": "Banfield",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 43, "pj": 24, "pg": 20, "pe": 3, "pp": 1},
      {"pos": 2, "equipo": "Banfield", "pts": 31, "pj": 24, "pg": 13, "pe": 5, "pp": 6},
      {"pos": 3, "equipo": "Huracán", "pts": 31, "pj": 24, "pg": 13, "pe": 5, "pp": 6},
      {"pos": 4, "equipo": "Sportivo Barracas", "pts": 30, "pj": 24, "pg": 12, "pe": 6, "pp": 6},
      {"pos": 5, "equipo": "Boca Alumni", "pts": 29, "pj": 24, "pg": 13, "pe": 3, "pp": 8},
      {"pos": 6, "equipo": "Sportivo del Norte", "pts": 25, "pj": 24, "pg": 9, "pe": 7, "pp": 8}
    ],
    "goleadores": [{"nombre": "Fausto Lucarelli", "equipo": "Banfield", "goles": 15}],
    "descensos": []
  },
  "1920-aamf": {
    "id": "1920-aamf",
    "anio": "1920",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "River Plate",
    "subcampeon": "Racing Club",
    "obs": "*(1) Otro hito tremendo del amateurismo en la Liga Amateurs: River Plate frena finalmente la dinastía interminable de Racing y se corona con el PRIMER CAMPEONATO Oficial de toda su historia.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 56, "pj": 34, "pg": 25, "pe": 6, "pp": 3},
      {"pos": 2, "equipo": "Racing Club", "pts": 54, "pj": 34, "pg": 25, "pe": 4, "pp": 5},
      {"pos": 3, "equipo": "San Lorenzo", "pts": 46, "pj": 34, "pg": 17, "pe": 12, "pp": 5},
      {"pos": 4, "equipo": "Atlanta", "pts": 41, "pj": 34, "pg": 17, "pe": 7, "pp": 10},
      {"pos": 5, "equipo": "Gimnasia y Esgrima (LP)", "pts": 41, "pj": 34, "pg": 17, "pe": 7, "pp": 10},
      {"pos": 6, "equipo": "Vélez Sarsfield", "pts": 39, "pj": 34, "pg": 17, "pe": 5, "pp": 12}
    ],
    "goleadores": [{"nombre": "Salvador Carreras", "equipo": "Vélez Sarsfield", "goles": 19}],
    "descensos": []
  },

  // AÑO 1921
  "1921-aaf": {
    "anio": "1921",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Huracán",
    "subcampeon": "Del Plata",
    "obs": "*(1) Con Boca y River entretenidos con otros equipos, Huracán aprovecha la oficial AAF y consigue levantar el PRIMER CAMPEONATO absoluto de su rica historia en Parque Patricios.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Huracán", "pts": 31, "pj": 18, "pg": 14, "pe": 3, "pp": 1},
      {"pos": 2, "equipo": "Del Plata", "pts": 28, "pj": 18, "pg": 12, "pe": 4, "pp": 2},
      {"pos": 3, "equipo": "Boca Juniors", "pts": 25, "pj": 18, "pg": 10, "pe": 5, "pp": 3},
      {"pos": 4, "equipo": "Nueva Chicago", "pts": 19, "pj": 18, "pg": 6, "pe": 7, "pp": 5},
      {"pos": 5, "equipo": "El Porvenir", "pts": 19, "pj": 18, "pg": 6, "pe": 7, "pp": 5},
      {"pos": 6, "equipo": "Sportiva Argentina", "pts": 18, "pj": 18, "pg": 7, "pe": 4, "pp": 7}
    ],
    "goleadores": [{"nombre": "Guillermo Dannaher", "equipo": "Huracán", "goles": 23}],
    "descensos": []
  },
  "1921-aamf": {
    "id": "1921-aamf",
    "anio": "1921",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "Racing Club",
    "subcampeon": "River Plate",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Racing Club", "pts": 66, "pj": 38, "pg": 30, "pe": 6, "pp": 2},
      {"pos": 2, "equipo": "River Plate", "pts": 54, "pj": 38, "pg": 25, "pe": 4, "pp": 9},
      {"pos": 3, "equipo": "Independiente", "pts": 53, "pj": 38, "pg": 22, "pe": 9, "pp": 7},
      {"pos": 4, "equipo": "Gimnasia y Esgrima (LP)", "pts": 52, "pj": 38, "pg": 23, "pe": 6, "pp": 9},
      {"pos": 5, "equipo": "Defensores de Belgrano", "pts": 50, "pj": 38, "pg": 20, "pe": 10, "pp": 8},
      {"pos": 6, "equipo": "San Lorenzo", "pts": 47, "pj": 38, "pg": 20, "pe": 7, "pp": 11}
    ],
    "goleadores": [{"nombre": "Alberico Zabaleta", "equipo": "Racing Club", "goles": 32}],
    "descensos": []
  },

  // AÑO 1922
  "1922-aaf": {
    "anio": "1922",
    "torneo": "Asociación Argentina de Football",
    "campeon": "Huracán",
    "subcampeon": "Sportivo Palermo",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Huracán", "pts": 28, "pj": 16, "pg": 13, "pe": 2, "pp": 1},
      {"pos": 2, "equipo": "Sportivo Palermo", "pts": 25, "pj": 16, "pg": 11, "pe": 3, "pp": 2},
      {"pos": 3, "equipo": "Boca Juniors", "pts": 22, "pj": 16, "pg": 10, "pe": 2, "pp": 4},
      {"pos": 4, "equipo": "Del Plata", "pts": 20, "pj": 16, "pg": 10, "pe": 0, "pp": 6},
      {"pos": 5, "equipo": "Nueva Chicago", "pts": 18, "pj": 16, "pg": 7, "pe": 4, "pp": 5},
      {"pos": 6, "equipo": "El Porvenir", "pts": 15, "pj": 16, "pg": 6, "pe": 3, "pp": 7}
    ],
    "goleadores": [{"nombre": "Juan Clarke", "equipo": "Sportivo Palermo", "goles": 11}, {"nombre": "Domingo Tarasconi", "equipo": "Boca Juniors", "goles": 11}],
    "descensos": []
  },
  "1922-aamf": {
    "id": "1922-aamf",
    "anio": "1922",
    "torneo": "Asociación Amateurs de Football",
    "campeon": "Independiente",
    "subcampeon": "River Plate",
    "obs": "*(1) Como broche de oro de este bloque fundacional, Independiente (el histórico Rey de Copas) desaloja a Racing, a River y levanta su PRIMER CAMPEONATO oficial en la AAmF.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Independiente", "pts": 65, "pj": 40, "pg": 30, "pe": 5, "pp": 5},
      {"pos": 2, "equipo": "River Plate", "pts": 61, "pj": 40, "pg": 25, "pe": 11, "pp": 4},
      {"pos": 3, "equipo": "San Lorenzo", "pts": 60, "pj": 40, "pg": 24, "pe": 12, "pp": 4},
      {"pos": 4, "equipo": "Racing Club", "pts": 57, "pj": 40, "pg": 23, "pe": 11, "pp": 6},
      {"pos": 5, "equipo": "Gimnasia y Esgrima (LP)", "pts": 53, "pj": 40, "pg": 22, "pe": 9, "pp": 9},
      {"pos": 6, "equipo": "Defensores de Belgrano", "pts": 50, "pj": 40, "pg": 21, "pe": 8, "pp": 11}
    ],
    "goleadores": [{"nombre": "Manuel Seoane", "equipo": "Independiente", "goles": 55}],
    "descensos": []
  }
};

let patched = 0;

// Reemplazos Lote 6 (Partiendo 1919-1922 para el cisma AAmF)
data.forEach((torneo) => {
  if (torneo.id === '1918-pd') {
    Object.assign(torneo, batch['1918-pd']);
    patched++;
  } else if (torneo.id === '1919-pd') {
    torneo.id = '1919-aaf';
    Object.assign(torneo, batch['1919-aaf']);
    patched++;
  } else if (torneo.id === '1920-pd') {
    torneo.id = '1920-aaf';
    Object.assign(torneo, batch['1920-aaf']);
    patched++;
  } else if (torneo.id === '1921-pd') {
    torneo.id = '1921-aaf';
    Object.assign(torneo, batch['1921-aaf']);
    patched++;
  } else if (torneo.id === '1922-pd') {
    torneo.id = '1922-aaf';
    Object.assign(torneo, batch['1922-aaf']);
    patched++;
  }
});

// Anexando los campeonatos de la liga Amateurs
const years = ['1919', '1920', '1921', '1922'];
years.forEach(year => {
  const indexAaf = data.findIndex(t => t.id === `${year}-aaf`);
  if (indexAaf !== -1) {
    data.splice(indexAaf + 1, 0, batch[`${year}-aamf`]);
    patched++;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote 6 Inyectado correctamente. Nacen Boca, River, Huracan, Rojo (AAmF). Nodos tocados: ${patched}`);
