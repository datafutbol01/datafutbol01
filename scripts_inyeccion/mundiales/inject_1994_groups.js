import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1994.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.groups = {
  A: {
    teams: [
      { id: "rumania", team: "Rumania", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 5, dif: 0 },
      { id: "suiza", team: "Suiza", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 4, dif: 1 },
      { id: "estados_unidos", team: "EE. UU.", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3, dif: 0 },
      { id: "colombia", team: "Colombia", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5, dif: -1 }
    ],
    matches: [
      { team1: "Estados Unidos", flag1: "us", team2: "Suiza", flag2: "ch", score: "1-1", goals1: ["Wynalda 44'"], goals2: ["Bregy 39'"] },
      { team1: "Colombia", flag1: "co", team2: "Rumania", flag2: "ro", score: "1-3", goals1: ["Valencia 43'"], goals2: ["Răducioiu 15', 89'", "Hagi 34'"] },
      { team1: "Rumania", flag1: "ro", team2: "Suiza", flag2: "ch", score: "1-4", goals1: ["Hagi 35'"], goals2: ["Sutter 16'", "Chapuisat 52'", "Knup 65', 72'"] },
      { team1: "Estados Unidos", flag1: "us", team2: "Colombia", flag2: "co", score: "2-1", goals1: ["Escobar 35' (a.g.)", "Stewart 52'"], goals2: ["Valencia 90'"] },
      { team1: "Suiza", flag1: "ch", team2: "Colombia", flag2: "co", score: "0-2", goals1: [], goals2: ["Gaviria 44'", "Lozano 90'"] },
      { team1: "Estados Unidos", flag1: "us", team2: "Rumania", flag2: "ro", score: "0-1", goals1: [], goals2: ["Petrescu 18'"] }
    ]
  },
  B: {
    teams: [
      { id: "brasil", team: "Brasil", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 1, dif: 5 },
      { id: "suecia", team: "Suecia", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 6, gc: 4, dif: 2 },
      { id: "rusia", team: "Rusia", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 7, gc: 6, dif: 1 },
      { id: "camerun", team: "Camerún", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 3, gc: 11, dif: -8 }
    ],
    matches: [
      { team1: "Camerún", flag1: "cm", team2: "Suecia", flag2: "se", score: "2-2", goals1: ["Embé 31'", "Omam-Biyik 47'"], goals2: ["Ljung 8'", "Dahlin 75'"] },
      { team1: "Brasil", flag1: "br", team2: "Rusia", flag2: "ru", score: "2-0", goals1: ["Romário 26'", "Raí 52' (p)"], goals2: [] },
      { team1: "Brasil", flag1: "br", team2: "Camerún", flag2: "cm", score: "3-0", goals1: ["Romário 39'", "Márcio Santos 66'", "Bebeto 73'"], goals2: [] },
      { team1: "Suecia", flag1: "se", team2: "Rusia", flag2: "ru", score: "3-1", goals1: ["Brolin 37' (p)", "Dahlin 59', 81'"], goals2: ["Salenko 4' (p)"] },
      { team1: "Rusia", flag1: "ru", team2: "Camerún", flag2: "cm", score: "6-1", goals1: ["Salenko 15', 41', 44' (p), 72', 75'", "Radchenko 81'"], goals2: ["Milla 46'"] },
      { team1: "Brasil", flag1: "br", team2: "Suecia", flag2: "se", score: "1-1", goals1: ["Romário 46'"], goals2: ["K. Andersson 23'"] }
    ]
  },
  C: {
    teams: [
      { id: "alemania", team: "Alemania", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 3, dif: 2 },
      { id: "espana", team: "España", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 6, gc: 4, dif: 2 },
      { id: "corea_del_sur", team: "Corea del Sur", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 4, gc: 5, dif: -1 },
      { id: "bolivia", team: "Bolivia", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 4, dif: -3 }
    ],
    matches: [
      { team1: "Alemania", flag1: "de", team2: "Bolivia", flag2: "bo", score: "1-0", goals1: ["Klinsmann 61'"], goals2: [] },
      { team1: "España", flag1: "es", team2: "Corea del Sur", flag2: "kr", score: "2-2", goals1: ["Salinas 51'", "Goikoetxea 55'"], goals2: ["Hong Myung-bo 85'", "Seo Jung-won 90'"] },
      { team1: "Alemania", flag1: "de", team2: "España", flag2: "es", score: "1-1", goals1: ["Klinsmann 48'"], goals2: ["Goikoetxea 14'"] },
      { team1: "Corea del Sur", flag1: "kr", team2: "Bolivia", flag2: "bo", score: "0-0", goals1: [], goals2: [] },
      { team1: "Bolivia", flag1: "bo", team2: "España", flag2: "es", score: "1-3", goals1: ["Sánchez 67'"], goals2: ["Guardiola 13'", "Caminero 66', 70'"] },
      { team1: "Alemania", flag1: "de", team2: "Corea del Sur", flag2: "kr", score: "3-2", goals1: ["Klinsmann 12', 37'", "Riedle 20'"], goals2: ["Hwang Sun-hong 52'", "Hong Myung-bo 63'"] }
    ]
  },
  D: {
    teams: [
      { id: "nigeria", team: "Nigeria", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 2, dif: 4 },
      { id: "bulgaria", team: "Bulgaria", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 3, dif: 3 },
      { id: "argentina", team: "Argentina", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 3, dif: 3 },
      { id: "grecia", team: "Grecia", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 0, gc: 10, dif: -10 }
    ],
    matches: [
      { team1: "Argentina", flag1: "ar", team2: "Grecia", flag2: "gr", score: "4-0", goals1: ["Batistuta 2', 44', 90' (p)", "Maradona 60'"], goals2: [] },
      { team1: "Nigeria", flag1: "ng", team2: "Bulgaria", flag2: "bg", score: "3-0", goals1: ["Yekini 21'", "Amokachi 43'", "Amunike 55'"], goals2: [] },
      { team1: "Argentina", flag1: "ar", team2: "Nigeria", flag2: "ng", score: "2-1", goals1: ["Caniggia 21', 28'"], goals2: ["Siasia 8'"] },
      { team1: "Bulgaria", flag1: "bg", team2: "Grecia", flag2: "gr", score: "4-0", goals1: ["Stoichkov 5' (p), 55' (p)", "Letchkov 65'", "Borimirov 90'"], goals2: [] },
      { team1: "Argentina", flag1: "ar", team2: "Bulgaria", flag2: "bg", score: "0-2", goals1: [], goals2: ["Stoichkov 61'", "Sirakov 90'"] },
      { team1: "Grecia", flag1: "gr", team2: "Nigeria", flag2: "ng", score: "0-2", goals1: [], goals2: ["George 45'", "Amokachi 90'"] }
    ]
  },
  E: {
    teams: [
      { id: "mexico", team: "México", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3, dif: 0 },
      { id: "irlanda", team: "Irlanda", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2, dif: 0 },
      { id: "italia", team: "Italia", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2, dif: 0 },
      { id: "noruega", team: "Noruega", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 1, gc: 1, dif: 0 }
    ],
    matches: [
      { team1: "Italia", flag1: "it", team2: "Irlanda", flag2: "ie", score: "0-1", goals1: [], goals2: ["Houghton 11'"] },
      { team1: "Noruega", flag1: "no", team2: "México", flag2: "mx", score: "1-0", goals1: ["Rekdal 84'"], goals2: [] },
      { team1: "Italia", flag1: "it", team2: "Noruega", flag2: "no", score: "1-0", goals1: ["D. Baggio 69'"], goals2: [] },
      { team1: "México", flag1: "mx", team2: "Irlanda", flag2: "ie", score: "2-1", goals1: ["García 42', 65'"], goals2: ["Aldridge 84'"] },
      { team1: "Italia", flag1: "it", team2: "México", flag2: "mx", score: "1-1", goals1: ["Massaro 48'"], goals2: ["Bernal 57'"] },
      { team1: "Irlanda", flag1: "ie", team2: "Noruega", flag2: "no", score: "0-0", goals1: [], goals2: [] }
    ]
  },
  F: {
    teams: [
      { id: "paises_bajos", team: "Países Bajos", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 3, dif: 1 },
      { id: "arabia_saudita", team: "Arabia Saudita", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 3, dif: 1 },
      { id: "belgica", team: "Bélgica", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 2, gc: 1, dif: 1 },
      { id: "marruecos", team: "Marruecos", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 5, dif: -3 }
    ],
    matches: [
      { team1: "Bélgica", flag1: "be", team2: "Marruecos", flag2: "ma", score: "1-0", goals1: ["Degryse 11'"], goals2: [] },
      { team1: "Países Bajos", flag1: "nl", team2: "Arabia Saudita", flag2: "sa", score: "2-1", goals1: ["Jonk 50'", "Taument 86'"], goals2: ["Amin 18'"] },
      { team1: "Bélgica", flag1: "be", team2: "Países Bajos", flag2: "nl", score: "1-0", goals1: ["Albert 65'"], goals2: [] },
      { team1: "Arabia Saudita", flag1: "sa", team2: "Marruecos", flag2: "ma", score: "2-1", goals1: ["Al-Jaber 7' (p)", "Amin 45'"], goals2: ["Chaouch 26'"] },
      { team1: "Bélgica", flag1: "be", team2: "Arabia Saudita", flag2: "sa", score: "0-1", goals1: [], goals2: ["Al-Owairan 5'"] },
      { team1: "Marruecos", flag1: "ma", team2: "Países Bajos", flag2: "nl", score: "1-2", goals1: ["Nader 47'"], goals2: ["Bergkamp 43'", "Roy 77'"] }
    ]
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Fase de grupos 1994 inyectada exitosamente.");
