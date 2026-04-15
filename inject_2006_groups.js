import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2006.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const groups = {
  A: {
    standings: [
      { id: "alemania", team: "Alemania", flag: "de", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 8, gc: 2 },
      { id: "ecuador", team: "Ecuador", flag: "ec", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 3 },
      { id: "polonia", team: "Polonia", flag: "pl", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 4 },
      { id: "costa_rica", team: "Costa Rica", flag: "cr", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 3, gc: 9 }
    ],
    matches: [
      { team1: "Alemania", team2: "Costa Rica", score: "4-2" },
      { team1: "Polonia", team2: "Ecuador", score: "0-2" },
      { team1: "Alemania", team2: "Polonia", score: "1-0" },
      { team1: "Ecuador", team2: "Costa Rica", score: "3-0" },
      { team1: "Ecuador", team2: "Alemania", score: "0-3" },
      { team1: "Costa Rica", team2: "Polonia", score: "1-2" }
    ]
  },
  B: {
    standings: [
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 2 },
      { id: "suecia", team: "Suecia", flag: "se", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 2 },
      { id: "paraguay", team: "Paraguay", flag: "py", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 2 },
      { id: "trinidad_y_tobago", team: "Trinidad y Tobago", flag: "tt", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 0, gc: 4 }
    ],
    matches: [
      { team1: "Inglaterra", team2: "Paraguay", score: "1-0" },
      { team1: "Trinidad y Tobago", team2: "Suecia", score: "0-0" },
      { team1: "Inglaterra", team2: "Trinidad y Tobago", score: "2-0" },
      { team1: "Suecia", team2: "Paraguay", score: "1-0" },
      { team1: "Suecia", team2: "Inglaterra", score: "2-2" },
      { team1: "Paraguay", team2: "Trinidad y Tobago", score: "2-0" }
    ]
  },
  C: {
    standings: [
      { id: "argentina", team: "Argentina", flag: "ar", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 1 },
      { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 3, gc: 1 },
      { id: "costa_de_marfil", team: "Costa de Marfil", flag: "ci", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 6 },
      { id: "serbia_y_montenegro", team: "Serbia y Monte.", flag: "rs", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 10 }
    ],
    matches: [
      { team1: "Argentina", team2: "Costa de Marfil", score: "2-1" },
      { team1: "Serbia y Monte.", team2: "Países Bajos", score: "0-1" },
      { team1: "Argentina", team2: "Serbia y Monte.", score: "6-0" },
      { team1: "Países Bajos", team2: "Costa de Marfil", score: "2-1" },
      { team1: "Países Bajos", team2: "Argentina", score: "0-0" },
      { team1: "Costa de Marfil", team2: "Serbia y Monte.", score: "3-2" }
    ]
  },
  D: {
    standings: [
      { id: "portugal", team: "Portugal", flag: "pt", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 5, gc: 1 },
      { id: "mexico", team: "México", flag: "mx", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 3 },
      { id: "angola", team: "Angola", flag: "ao", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 1, gc: 2 },
      { id: "iran", team: "Irán", flag: "ir", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "México", team2: "Irán", score: "3-1" },
      { team1: "Angola", team2: "Portugal", score: "0-1" },
      { team1: "México", team2: "Angola", score: "0-0" },
      { team1: "Portugal", team2: "Irán", score: "2-0" },
      { team1: "Portugal", team2: "México", score: "2-1" },
      { team1: "Irán", team2: "Angola", score: "1-1" }
    ]
  },
  E: {
    standings: [
      { id: "italia", team: "Italia", flag: "it", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 1 },
      { id: "ghana", team: "Ghana", flag: "gh", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 3 },
      { id: "republica_checa", team: "Rep. Checa", flag: "cz", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 3, gc: 4 },
      { id: "estados_unidos", team: "Estados Unidos", flag: "us", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "Estados Unidos", team2: "Rep. Checa", score: "0-3" },
      { team1: "Italia", team2: "Ghana", score: "2-0" },
      { team1: "Rep. Checa", team2: "Ghana", score: "0-2" },
      { team1: "Italia", team2: "Estados Unidos", score: "1-1" },
      { team1: "Rep. Checa", team2: "Italia", score: "0-2" },
      { team1: "Ghana", team2: "Estados Unidos", score: "2-1" }
    ]
  },
  F: {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 1 },
      { id: "australia", team: "Australia", flag: "au", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 5 },
      { id: "croacia", team: "Croacia", flag: "hr", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 3 },
      { id: "japon", team: "Japón", flag: "jp", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 7 }
    ],
    matches: [
      { team1: "Australia", team2: "Japón", score: "3-1" },
      { team1: "Brasil", team2: "Croacia", score: "1-0" },
      { team1: "Japón", team2: "Croacia", score: "0-0" },
      { team1: "Brasil", team2: "Australia", score: "2-0" },
      { team1: "Japón", team2: "Brasil", score: "1-4" },
      { team1: "Croacia", team2: "Australia", score: "2-2" }
    ]
  },
  G: {
    standings: [
      { id: "suiza", team: "Suiza", flag: "ch", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 0 },
      { id: "francia", team: "Francia", flag: "fr", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 1 },
      { id: "corea_del_sur", team: "Corea del Sur", flag: "kr", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 4 },
      { id: "togo", team: "Togo", flag: "tg", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 6 }
    ],
    matches: [
      { team1: "Corea del Sur", team2: "Togo", score: "2-1" },
      { team1: "Francia", team2: "Suiza", score: "0-0" },
      { team1: "Francia", team2: "Corea del Sur", score: "1-1" },
      { team1: "Togo", team2: "Suiza", score: "0-2" },
      { team1: "Togo", team2: "Francia", score: "0-2" },
      { team1: "Suiza", team2: "Corea del Sur", score: "2-0" }
    ]
  },
  H: {
    standings: [
      { id: "espana", team: "España", flag: "es", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 8, gc: 1 },
      { id: "ucrania", team: "Ucrania", flag: "ua", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 4 },
      { id: "tunez", team: "Túnez", flag: "tn", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 3, gc: 6 },
      { id: "arabia_saudita", team: "Arabia Saudita", flag: "sa", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 7 }
    ],
    matches: [
      { team1: "España", team2: "Ucrania", score: "4-0" },
      { team1: "Túnez", team2: "Arabia Saudita", score: "2-2" },
      { team1: "Arabia Saudita", team2: "Ucrania", score: "0-4" },
      { team1: "España", team2: "Túnez", score: "3-1" },
      { team1: "Arabia Saudita", team2: "España", score: "0-1" },
      { team1: "Ucrania", team2: "Túnez", score: "1-0" }
    ]
  }
};

Object.keys(groups).forEach(g => {
    groups[g].matches = groups[g].matches.map(m => {
        return {
            team1: m.team1,
            flag1: getFlag(m.team1),
            team2: m.team2,
            flag2: getFlag(m.team2),
            score: m.score,
            goals1: [],
            goals2: []
        }
    });
});

data.groups = groups;
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Grupos 2006 inyectados');
