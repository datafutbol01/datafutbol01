const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const batch = {
  // AÑO 1931 (NACIMIENTO LIGA ARGENTINA DE FOOTBALL - PROFESIONAL)
  "1931-laf": {
    "anio": "1931",
    "torneo": "Liga Argentina de Football (Profesional)",
    "campeon": "Boca Juniors",
    "subcampeon": "San Lorenzo",
    "obs": "*(1) Año Bisagra. Ante el masivo éxodo y huelga de jugadores que exigían remuneración, 18 clubes disidentes fundan la LAF, dando inicio a la Era Profesional del fútbol en Argentina. Boca arrasa de forma brutal marcando casi 100 goles.* ",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 50, "pj": 34, "pg": 22, "pe": 6, "pp": 6},
      {"pos": 2, "equipo": "San Lorenzo", "pts": 45, "pj": 34, "pg": 19, "pe": 7, "pp": 8},
      {"pos": 3, "equipo": "Estudiantes (LP)", "pts": 44, "pj": 34, "pg": 20, "pe": 4, "pp": 10},
      {"pos": 4, "equipo": "River Plate", "pts": 44, "pj": 34, "pg": 19, "pe": 6, "pp": 9},
      {"pos": 5, "equipo": "Racing Club", "pts": 43, "pj": 34, "pg": 19, "pe": 5, "pp": 10},
      {"pos": 6, "equipo": "Independiente", "pts": 43, "pj": 34, "pg": 18, "pe": 7, "pp": 9},
      {"pos": 7, "equipo": "Chacarita Juniors", "pts": 42, "pj": 34, "pg": 18, "pe": 6, "pp": 10},
      {"pos": 8, "equipo": "Huracan", "pts": 33, "pj": 34, "pg": 13, "pe": 7, "pp": 14},
      {"pos": 9, "equipo": "Velez Sarsfield", "pts": 33, "pj": 34, "pg": 13, "pe": 7, "pp": 14},
      {"pos": 10, "equipo": "Ferro Carril Oeste", "pts": 32, "pj": 34, "pg": 12, "pe": 8, "pp": 14}
    ],
    "goleadores": [{"nombre": "Alberto Zozaya", "equipo": "Estudiantes (LP)", "goles": 33}],
    "descensos": ["Suspendidos para promover franquicias estables"]
  },
  "1931-aaf": {
    "id": "1931-aaf",
    "anio": "1931",
    "torneo": "Asociación Argentina de Football (Amateur)",
    "campeon": "Estudiantil Porteño",
    "subcampeon": "Almagro",
    "obs": "*(1) A pesar que las estrellas y taquillas se fugaron al Profesionalismo, la AAF se niega a morir pacíficamente y sostiene su liga amateur. Estudiantil se corona tras vencer en desempate a Almagro 3-1.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Estudiantil Porteño", "pts": 26, "pj": 15, "pg": 12, "pe": 2, "pp": 1},
      {"pos": 2, "equipo": "Almagro", "pts": 26, "pj": 15, "pg": 13, "pe": 0, "pp": 2},
      {"pos": 3, "equipo": "Sportivo Buenos Aires", "pts": 22, "pj": 15, "pg": 11, "pe": 0, "pp": 4},
      {"pos": 4, "equipo": "El Porvenir", "pts": 21, "pj": 15, "pg": 9, "pe": 3, "pp": 3},
      {"pos": 5, "equipo": "Excursionistas", "pts": 17, "pj": 15, "pg": 7, "pe": 3, "pp": 5},
      {"pos": 6, "equipo": "Nueva Chicago", "pts": 17, "pj": 15, "pg": 7, "pe": 3, "pp": 5}
    ],
    "goleadores": [{"nombre": "José Ciancio", "equipo": "Almagro", "goles": 14}],
    "descensos": ["San Fernando (Desafiliado)"]
  },

  // AÑO 1932
  "1932-laf": {
    "anio": "1932",
    "torneo": "Liga Argentina de Football",
    "campeon": "River Plate",
    "subcampeon": "Independiente",
    "obs": "*(1) River se muda a ser rico ('Los Millonarios'), compra de platillo mágico a 'La Fiera' Bernabé Ferreyra que se rompe todo con 43 goles en 34 partidos, y arrasan el campeonato en un desempate frenético ganándole 3-0 al Rojo.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "River Plate", "pts": 50, "pj": 34, "pg": 22, "pe": 6, "pp": 6},
      {"pos": 2, "equipo": "Independiente", "pts": 50, "pj": 34, "pg": 22, "pe": 6, "pp": 6},
      {"pos": 3, "equipo": "Racing Club", "pts": 49, "pj": 34, "pg": 20, "pe": 9, "pp": 5},
      {"pos": 4, "equipo": "Boca Juniors", "pts": 46, "pj": 34, "pg": 20, "pe": 6, "pp": 8},
      {"pos": 5, "equipo": "San Lorenzo", "pts": 45, "pj": 34, "pg": 17, "pe": 11, "pp": 6},
      {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 40, "pj": 34, "pg": 16, "pe": 8, "pp": 10},
      {"pos": 7, "equipo": "Gimnasia y Esgrima (LP)", "pts": 37, "pj": 34, "pg": 15, "pe": 7, "pp": 12},
      {"pos": 8, "equipo": "Velez Sarsfield", "pts": 37, "pj": 34, "pg": 15, "pe": 7, "pp": 12},
      {"pos": 9, "equipo": "Huracan", "pts": 35, "pj": 34, "pg": 14, "pe": 7, "pp": 13},
      {"pos": 10, "equipo": "Platense", "pts": 35, "pj": 34, "pg": 13, "pe": 9, "pp": 12}
    ],
    "goleadores": [{"nombre": "Bernabé Ferreyra", "equipo": "River Plate", "goles": 43}],
    "descensos": ["Suspendidos por la LAF"]
  },
  "1932-aaf": {
    "id": "1932-aamf", // using an unused id or inserting via splice explicitly
    "anio": "1932",
    "torneo": "Asociación Argentina de Football (Amateur)",
    "campeon": "Sportivo Barracas",
    "subcampeon": "Barracas Central",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Sportivo Barracas", "pts": 47, "pj": 32, "pg": 21, "pe": 5, "pp": 6},
      {"pos": 2, "equipo": "Barracas Central", "pts": 42, "pj": 32, "pg": 17, "pe": 8, "pp": 7},
      {"pos": 3, "equipo": "Colegiales", "pts": 42, "pj": 32, "pg": 17, "pe": 8, "pp": 7},
      {"pos": 4, "equipo": "Defensores de Belgrano", "pts": 38, "pj": 32, "pg": 16, "pe": 6, "pp": 10},
      {"pos": 5, "equipo": "All Boys", "pts": 37, "pj": 32, "pg": 16, "pe": 5, "pp": 11},
      {"pos": 6, "equipo": "Almagro", "pts": 35, "pj": 32, "pg": 14, "pe": 7, "pp": 11}
    ],
    "goleadores": [{"nombre": "Juan Carlos Iribarren", "equipo": "River Plate", "goles": 10}],
    "descensos": ["San Isidro (Abandono)", "Sportsman (Renuncia)"]
  },

  // AÑO 1933
  "1933-laf": {
    "anio": "1933",
    "torneo": "Liga Argentina de Football",
    "campeon": "San Lorenzo",
    "subcampeon": "Boca Juniors",
    "obs": "*(1) El Ciclón arrollador. Gana el torneo agónicamente gracias al tropiezo de Boca al final y forma uno de los planteles más recordados con sus ídolos en la primera época rentada.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "San Lorenzo", "pts": 50, "pj": 34, "pg": 22, "pe": 6, "pp": 6},
      {"pos": 2, "equipo": "Boca Juniors", "pts": 49, "pj": 34, "pg": 22, "pe": 5, "pp": 7},
      {"pos": 3, "equipo": "Racing Club", "pts": 48, "pj": 34, "pg": 21, "pe": 6, "pp": 7},
      {"pos": 4, "equipo": "River Plate", "pts": 46, "pj": 34, "pg": 20, "pe": 6, "pp": 8},
      {"pos": 5, "equipo": "G.E.B.A (LP)", "pts": 46, "pj": 34, "pg": 21, "pe": 4, "pp": 9},
      {"pos": 6, "equipo": "Independiente", "pts": 41, "pj": 34, "pg": 18, "pe": 5, "pp": 11},
      {"pos": 7, "equipo": "Velez Sarsfield", "pts": 38, "pj": 34, "pg": 15, "pe": 8, "pp": 11},
      {"pos": 8, "equipo": "Chacarita Juniors", "pts": 35, "pj": 34, "pg": 14, "pe": 7, "pp": 13},
      {"pos": 9, "equipo": "Platense", "pts": 31, "pj": 34, "pg": 11, "pe": 9, "pp": 14},
      {"pos": 10, "equipo": "Estudiantes (LP)", "pts": 30, "pj": 34, "pg": 12, "pe": 6, "pp": 16}
    ],
    "goleadores": [{"nombre": "Francisco Varallo", "equipo": "Boca Juniors", "goles": 34}],
    "descensos": ["Sin Relegados Oficiales"]
  },
  "1933-aaf": {
    "id": "1933-aamf",
    "anio": "1933",
    "torneo": "Asociación Argentina de Football (Amateur)",
    "campeon": "Sportivo Dock Sud",
    "subcampeon": "Nueva Chicago",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Sportivo Dock Sud", "pts": 29, "pj": 19, "pg": 13, "pe": 3, "pp": 3},
      {"pos": 2, "equipo": "Nueva Chicago", "pts": 28, "pj": 19, "pg": 12, "pe": 4, "pp": 3},
      {"pos": 3, "equipo": "Banfield", "pts": 27, "pj": 19, "pg": 11, "pe": 5, "pp": 3},
      {"pos": 4, "equipo": "Defensores de Belgrano", "pts": 26, "pj": 19, "pg": 11, "pe": 4, "pp": 4},
      {"pos": 5, "equipo": "Sportivo Alsina", "pts": 23, "pj": 19, "pg": 9, "pe": 5, "pp": 5},
      {"pos": 6, "equipo": "Estudiantil Porteño", "pts": 22, "pj": 19, "pg": 7, "pe": 8, "pp": 4}
    ],
    "goleadores": [{"nombre": "Alfonso Lorenzo", "equipo": "Barracas Central", "goles": 16}],
    "descensos": ["No Hubo"]
  },

  // AÑO 1934 (ÚLTIMO AÑO DEL CISMA DE LIGA ARGENTINA)
  "1934-laf": {
    "anio": "1934",
    "torneo": "Liga Argentina de Football",
    "campeon": "Boca Juniors",
    "subcampeon": "Independiente",
    "obs": "*(1) Último torneo que se corre separado. El Xeneize con la pólvora mojada de sus artilleros y perdiendo incluso el último partido 5-3, corona igual un tremendo campeonato sacándole un pelito de diferencia al Rojo diabólico.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 55, "pj": 39, "pg": 23, "pe": 9, "pp": 7},
      {"pos": 2, "equipo": "Independiente", "pts": 54, "pj": 39, "pg": 23, "pe": 8, "pp": 8},
      {"pos": 3, "equipo": "San Lorenzo", "pts": 51, "pj": 39, "pg": 22, "pe": 7, "pp": 10},
      {"pos": 4, "equipo": "River Plate", "pts": 50, "pj": 39, "pg": 23, "pe": 4, "pp": 12},
      {"pos": 5, "equipo": "Estudiantes (LP)", "pts": 44, "pj": 39, "pg": 17, "pe": 10, "pp": 12},
      {"pos": 6, "equipo": "Racing Club", "pts": 43, "pj": 39, "pg": 18, "pe": 7, "pp": 14},
      {"pos": 7, "equipo": "Platense", "pts": 43, "pj": 39, "pg": 16, "pe": 11, "pp": 12},
      {"pos": 8, "equipo": "Velez Sarsfield", "pts": 41, "pj": 39, "pg": 16, "pe": 9, "pp": 14},
      {"pos": 9, "equipo": "G.E.B.A (LP)", "pts": 38, "pj": 39, "pg": 14, "pe": 10, "pp": 15},
      {"pos": 10, "equipo": "Huracan", "pts": 37, "pj": 39, "pg": 14, "pe": 9, "pp": 16}
    ],
    "goleadores": [{"nombre": "Evaristo Barrera", "equipo": "Racing Club", "goles": 34}],
    "descensos": ["Argentino de Quilmes (AFA los echó al unificar)"]
  },
  "1934-aaf": {
    "id": "1934-aamf",
    "anio": "1934",
    "torneo": "Asociación Argentina de Football (Amateur)",
    "campeon": "Estudiantil Porteño",
    "subcampeon": "Banfield",
    "obs": "*(1) Fin absoluto de todas las trabas: Tras este campeonato, la liga amateur muere asfixiada ante el poder del Profesionalismo. La AAF es disuelta para formar la nueva AFA unificada.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Estudiantil Porteño", "pts": 36, "pj": 22, "pg": 17, "pe": 2, "pp": 3},
      {"pos": 2, "equipo": "Banfield", "pts": 33, "pj": 22, "pg": 14, "pe": 5, "pp": 3},
      {"pos": 3, "equipo": "Defensores de Belgrano", "pts": 32, "pj": 22, "pg": 15, "pe": 2, "pp": 5},
      {"pos": 4, "equipo": "Sportivo Dock Sud", "pts": 30, "pj": 22, "pg": 13, "pe": 4, "pp": 5},
      {"pos": 5, "equipo": "El Porvenir", "pts": 29, "pj": 22, "pg": 13, "pe": 3, "pp": 6},
      {"pos": 6, "equipo": "Gimnasia y Esgrima (BA)", "pts": 28, "pj": 22, "pg": 12, "pe": 4, "pp": 6}
    ],
    "goleadores": [{"nombre": "Pedro Maseda", "equipo": "Arg. de Quilmes", "goles": 16}],
    "descensos": ["No se efectuaron Relegaciones"]
  },

  // AÑO 1935 (NACIMIENTO A.F.A.)
  "1935-pd": {
    "anio": "1935",
    "torneo": "Primera División (A.F.A.)",
    "campeon": "Boca Juniors",
    "subcampeon": "Independiente",
    "obs": "*(1) Banderazo Histórico: Las dos asociaciones se funden juntas el 3 de noviembre de 1934 dando vida eterna a la actual 'A.F.A.' El torneo de los 18 clubes puros con formato de 34 fechas de ida y vuelta que duraría como estándar hasta 1966. Boca gana la primera Liga de toda la historia regulada por AFA.*",
    "tabla_posiciones": [
      {"pos": 1, "equipo": "Boca Juniors", "pts": 58, "pj": 34, "pg": 27, "pe": 4, "pp": 3},
      {"pos": 2, "equipo": "Independiente", "pts": 55, "pj": 34, "pg": 24, "pe": 7, "pp": 3},
      {"pos": 3, "equipo": "San Lorenzo", "pts": 49, "pj": 34, "pg": 22, "pe": 5, "pp": 7},
      {"pos": 4, "equipo": "Velez Sarsfield", "pts": 46, "pj": 34, "pg": 19, "pe": 8, "pp": 7},
      {"pos": 5, "equipo": "River Plate", "pts": 44, "pj": 34, "pg": 19, "pe": 6, "pp": 9},
      {"pos": 6, "equipo": "Huracan", "pts": 39, "pj": 34, "pg": 16, "pe": 7, "pp": 11},
      {"pos": 7, "equipo": "Estudiantes (LP)", "pts": 37, "pj": 34, "pg": 14, "pe": 9, "pp": 11},
      {"pos": 8, "equipo": "Club Ferro Carril Oeste", "pts": 36, "pj": 34, "pg": 15, "pe": 6, "pp": 13},
      {"pos": 9, "equipo": "Racing Club", "pts": 31, "pj": 34, "pg": 13, "pe": 5, "pp": 16},
      {"pos": 10, "equipo": "Talleres (RE)", "pts": 30, "pj": 34, "pg": 11, "pe": 8, "pp": 15}
    ],
    "goleadores": [{"nombre": "Agustín Cosso", "equipo": "Vélez Sarsfield", "goles": 33}],
    "descensos": ["Suspendidos momentáneamente", "Atlanta (Abandona)"]
  }
};

let patched = 0;

// Update 1931-1934 LAF & Inject AAF
data.forEach((torneo) => {
  if (torneo.id === '1931-pd') { torneo.id = '1931-laf'; Object.assign(torneo, batch['1931-laf']); patched++; }
  else if (torneo.id === '1932-pd') { torneo.id = '1932-laf'; Object.assign(torneo, batch['1932-laf']); patched++; }
  else if (torneo.id === '1933-pd') { torneo.id = '1933-laf'; Object.assign(torneo, batch['1933-laf']); patched++; }
  else if (torneo.id === '1934-pd') { torneo.id = '1934-laf'; Object.assign(torneo, batch['1934-laf']); patched++; }
  else if (torneo.id === '1935-pd') { Object.assign(torneo, batch['1935-pd']); patched++; }
});

// Insertar amateur
['1931', '1932', '1933', '1934'].forEach(year => {
   const indexLaf = data.findIndex(t => t.id === `${year}-laf`);
   if(indexLaf !== -1) {
     data.splice(indexLaf + 1, 0, batch[`${year}-aaf`] || batch[`${year}-aamf`]);
     patched++;
   }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Lote 9 L.A.F Finalizado. Cisma cerrado. Nace la A.F.A. Nodos: ${patched}`);
