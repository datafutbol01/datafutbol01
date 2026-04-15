import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2002.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const groups = {
  A: {
    standings: [
      { id: "dinamarca", team: "Dinamarca", flag: "dk", pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 5, ga: 2, gd: 3 },
      { id: "senegal", team: "Senegal", flag: "sn", pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 5, ga: 4, gd: 1 },
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 2, p: 3, w: 0, d: 2, l: 1, gf: 4, ga: 5, gd: -1 },
      { id: "francia", team: "Francia", flag: "fr", pts: 1, p: 3, w: 0, d: 1, l: 2, gf: 0, ga: 3, gd: -3 }
    ],
    matches: [
      { home: "Francia", away: "Senegal", score: "0-1" },
      { home: "Uruguay", away: "Dinamarca", score: "1-2" },
      { home: "Dinamarca", away: "Senegal", score: "1-1" },
      { home: "Francia", away: "Uruguay", score: "0-0" },
      { home: "Dinamarca", away: "Francia", score: "2-0" },
      { home: "Senegal", away: "Uruguay", score: "3-3" }
    ]
  },
  B: {
    standings: [
      { id: "espana", team: "España", flag: "es", pts: 9, p: 3, w: 3, d: 0, l: 0, gf: 9, ga: 4, gd: 5 },
      { id: "paraguay", team: "Paraguay", flag: "py", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 6, ga: 6, gd: 0 },
      { id: "sudafrica", team: "Sudáfrica", flag: "za", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 5, ga: 5, gd: 0 },
      { id: "eslovenia", team: "Eslovenia", flag: "si", pts: 0, p: 3, w: 0, d: 0, l: 3, gf: 2, ga: 7, gd: -5 }
    ],
    matches: [
      { home: "Paraguay", away: "Sudáfrica", score: "2-2" },
      { home: "España", away: "Eslovenia", score: "3-1" },
      { home: "España", away: "Paraguay", score: "3-1" },
      { home: "Sudáfrica", away: "Eslovenia", score: "1-0" },
      { home: "Sudáfrica", away: "España", score: "2-3" },
      { home: "Eslovenia", away: "Paraguay", score: "1-3" }
    ]
  },
  C: {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 9, p: 3, w: 3, d: 0, l: 0, gf: 11, ga: 3, gd: 8 },
      { id: "turquia", team: "Turquía", flag: "tr", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 5, ga: 3, gd: 2 },
      { id: "costa_rica", team: "Costa Rica", flag: "cr", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 5, ga: 6, gd: -1 },
      { id: "china", team: "China", flag: "cn", pts: 0, p: 3, w: 0, d: 0, l: 3, gf: 0, ga: 9, gd: -9 }
    ],
    matches: [
      { home: "Brasil", away: "Turquía", score: "2-1" },
      { home: "China", away: "Costa Rica", score: "0-2" },
      { home: "Brasil", away: "China", score: "4-0" },
      { home: "Costa Rica", away: "Turquía", score: "1-1" },
      { home: "Costa Rica", away: "Brasil", score: "2-5" },
      { home: "Turquía", away: "China", score: "3-0" }
    ]
  },
  D: {
    standings: [
      { id: "corea_del_sur", team: "Corea del Sur", flag: "kr", pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 4, ga: 1, gd: 3 },
      { id: "estados_unidos", team: "Estados Unidos", flag: "us", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 5, ga: 6, gd: -1 },
      { id: "portugal", team: "Portugal", flag: "pt", pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 6, ga: 4, gd: 2 },
      { id: "polonia", team: "Polonia", flag: "pl", pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 3, ga: 7, gd: -4 }
    ],
    matches: [
      { home: "Corea del Sur", away: "Polonia", score: "2-0" },
      { home: "Estados Unidos", away: "Portugal", score: "3-2" },
      { home: "Corea del Sur", away: "Estados Unidos", score: "1-1" },
      { home: "Portugal", away: "Polonia", score: "4-0" },
      { home: "Portugal", away: "Corea del Sur", score: "0-1" },
      { home: "Polonia", away: "Estados Unidos", score: "3-1" }
    ]
  },
  E: {
    standings: [
      { id: "alemania", team: "Alemania", flag: "de", pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 11, ga: 1, gd: 10 },
      { id: "irlanda", team: "Irlanda", flag: "ie", pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 5, ga: 2, gd: 3 },
      { id: "camerun", team: "Camerún", flag: "cm", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 2, ga: 3, gd: -1 },
      { id: "arabia_saudita", team: "Arabia Saudita", flag: "sa", pts: 0, p: 3, w: 0, d: 0, l: 3, gf: 0, ga: 12, gd: -12 }
    ],
    matches: [
      { home: "Irlanda", away: "Camerún", score: "1-1" },
      { home: "Alemania", away: "Arabia Saudita", score: "8-0" },
      { home: "Alemania", away: "Irlanda", score: "1-1" },
      { home: "Camerún", away: "Arabia Saudita", score: "1-0" },
      { home: "Camerún", away: "Alemania", score: "0-2" },
      { home: "Arabia Saudita", away: "Irlanda", score: "0-3" }
    ]
  },
  F: {
    standings: [
      { id: "suecia", team: "Suecia", flag: "se", pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 4, ga: 3, gd: 1 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 2, ga: 1, gd: 1 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 2, ga: 2, gd: 0 },
      { id: "nigeria", team: "Nigeria", flag: "ng", pts: 1, p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 3, gd: -2 }
    ],
    matches: [
      { home: "Argentina", away: "Nigeria", score: "1-0" },
      { home: "Inglaterra", away: "Suecia", score: "1-1" },
      { home: "Suecia", away: "Nigeria", score: "2-1" },
      { home: "Argentina", away: "Inglaterra", score: "0-1" },
      { home: "Suecia", away: "Argentina", score: "1-1" },
      { home: "Nigeria", away: "Inglaterra", score: "0-0" }
    ]
  },
  G: {
    standings: [
      { id: "mexico", team: "México", flag: "mx", pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 4, ga: 2, gd: 2 },
      { id: "italia", team: "Italia", flag: "it", pts: 4, p: 3, w: 1, d: 1, l: 1, gf: 4, ga: 3, gd: 1 },
      { id: "croacia", team: "Croacia", flag: "hr", pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 2, ga: 3, gd: -1 },
      { id: "ecuador", team: "Ecuador", flag: "ec", pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 2, ga: 4, gd: -2 }
    ],
    matches: [
      { home: "Croacia", away: "México", score: "0-1" },
      { home: "Italia", away: "Ecuador", score: "2-0" },
      { home: "Italia", away: "Croacia", score: "1-2" },
      { home: "México", away: "Ecuador", score: "2-1" },
      { home: "México", away: "Italia", score: "1-1" },
      { home: "Ecuador", away: "Croacia", score: "1-0" }
    ]
  },
  H: {
    standings: [
      { id: "japon", team: "Japón", flag: "jp", pts: 7, p: 3, w: 2, d: 1, l: 0, gf: 5, ga: 2, gd: 3 },
      { id: "belgica", team: "Bélgica", flag: "be", pts: 5, p: 3, w: 1, d: 2, l: 0, gf: 6, ga: 5, gd: 1 },
      { id: "rusia", team: "Rusia", flag: "ru", pts: 3, p: 3, w: 1, d: 0, l: 2, gf: 4, ga: 4, gd: 0 },
      { id: "tunez", team: "Túnez", flag: "tn", pts: 1, p: 3, w: 0, d: 1, l: 2, gf: 1, ga: 5, gd: -4 }
    ],
    matches: [
      { home: "Japón", away: "Bélgica", score: "2-2" },
      { home: "Rusia", away: "Túnez", score: "2-0" },
      { home: "Japón", away: "Rusia", score: "1-0" },
      { home: "Túnez", away: "Bélgica", score: "1-1" },
      { home: "Túnez", away: "Japón", score: "0-2" },
      { home: "Bélgica", away: "Rusia", score: "3-2" }
    ]
  }
};

data.groups = groups;
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Grupos de 2002 inyectados correctamente');
