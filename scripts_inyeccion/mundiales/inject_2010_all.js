import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2010.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const groups = {
  A: {
    standings: [
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 0 },
      { id: "mexico", team: "México", flag: "mx", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 2 },
      { id: "sudafrica", team: "Sudáfrica", flag: "za", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 5 },
      { id: "francia", team: "Francia", flag: "fr", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 4 }
    ],
    matches: [
      { team1: "Sudáfrica", team2: "México", score: "1-1" },
      { team1: "Uruguay", team2: "Francia", score: "0-0" },
      { team1: "Sudáfrica", team2: "Uruguay", score: "0-3" },
      { team1: "Francia", team2: "México", score: "0-2" },
      { team1: "México", team2: "Uruguay", score: "0-1" },
      { team1: "Francia", team2: "Sudáfrica", score: "1-2" }
    ]
  },
  B: {
    standings: [
       { id: "argentina", team: "Argentina", flag: "ar", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 1 },
       { id: "corea_del_sur", team: "Corea del Sur", flag: "kr", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 6 },
       { id: "grecia", team: "Grecia", flag: "gr", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 5 },
       { id: "nigeria", team: "Nigeria", flag: "ng", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 3, gc: 5 }
    ],
    matches: [
      { team1: "Corea del Sur", team2: "Grecia", score: "2-0" },
      { team1: "Argentina", team2: "Nigeria", score: "1-0" },
      { team1: "Argentina", team2: "Corea del Sur", score: "4-1" },
      { team1: "Grecia", team2: "Nigeria", score: "2-1" },
      { team1: "Nigeria", team2: "Corea del Sur", score: "2-2" },
      { team1: "Grecia", team2: "Argentina", score: "0-2" }
    ]
  },
  C: {
    standings: [
      { id: "estados_unidos", team: "Estados Unidos", flag: "us", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 4, gc: 3 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 2, gc: 1 },
      { id: "eslovenia", team: "Eslovenia", flag: "si", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3 },
      { id: "argelia", team: "Argelia", flag: "dz", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 0, gc: 2 }
    ],
    matches: [
      { team1: "Inglaterra", team2: "Estados Unidos", score: "1-1" },
      { team1: "Argelia", team2: "Eslovenia", score: "0-1" },
      { team1: "Eslovenia", team2: "Estados Unidos", score: "2-2" },
      { team1: "Inglaterra", team2: "Argelia", score: "0-0" },
      { team1: "Eslovenia", team2: "Inglaterra", score: "0-1" },
      { team1: "Estados Unidos", team2: "Argelia", score: "1-0" }
    ]
  },
  D: {
    standings: [
      { id: "alemania", team: "Alemania", flag: "de", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 1 },
      { id: "ghana", team: "Ghana", flag: "gh", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2 },
      { id: "australia", team: "Australia", flag: "au", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 6 },
      { id: "serbia", team: "Serbia", flag: "rs", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 3 }
    ],
    matches: [
      { team1: "Serbia", team2: "Ghana", score: "0-1" },
      { team1: "Alemania", team2: "Australia", score: "4-0" },
      { team1: "Alemania", team2: "Serbia", score: "0-1" },
      { team1: "Ghana", team2: "Australia", score: "1-1" },
      { team1: "Ghana", team2: "Alemania", score: "0-1" },
      { team1: "Australia", team2: "Serbia", score: "2-1" }
    ]
  },
  E: {
    standings: [
      { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 5, gc: 1 },
      { id: "japon", team: "Japón", flag: "jp", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 2 },
      { id: "dinamarca", team: "Dinamarca", flag: "dk", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 3, gc: 6 },
      { id: "camerun", team: "Camerún", flag: "cm", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Países Bajos", team2: "Dinamarca", score: "2-0" },
      { team1: "Japón", team2: "Camerún", score: "1-0" },
      { team1: "Países Bajos", team2: "Japón", score: "1-0" },
      { team1: "Camerún", team2: "Dinamarca", score: "1-2" },
      { team1: "Dinamarca", team2: "Japón", score: "1-3" },
      { team1: "Camerún", team2: "Países Bajos", score: "1-2" }
    ]
  },
  F: {
    standings: [
      { id: "paraguay", team: "Paraguay", flag: "py", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 1 },
      { id: "eslovaquia", team: "Eslovaquia", flag: "sk", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 5 },
      { id: "nueva_zelanda", team: "Nueva Zelanda", flag: "nz", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 2, gc: 2 },
      { id: "italia", team: "Italia", flag: "it", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 4, gc: 5 }
    ],
    matches: [
      { team1: "Italia", team2: "Paraguay", score: "1-1" },
      { team1: "Nueva Zelanda", team2: "Eslovaquia", score: "1-1" },
      { team1: "Eslovaquia", team2: "Paraguay", score: "0-2" },
      { team1: "Italia", team2: "Nueva Zelanda", score: "1-1" },
      { team1: "Eslovaquia", team2: "Italia", score: "3-2" },
      { team1: "Paraguay", team2: "Nueva Zelanda", score: "0-0" }
    ]
  },
  G: {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 2 },
      { id: "portugal", team: "Portugal", flag: "pt", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 7, gc: 0 },
      { id: "costa_de_marfil", team: "Costa de Marfil", flag: "ci", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 3 },
      { id: "corea_del_norte", team: "Corea del Norte", flag: "kp", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 12 }
    ],
    matches: [
      { team1: "Costa de Marfil", team2: "Portugal", score: "0-0" },
      { team1: "Brasil", team2: "Corea del Norte", score: "2-1" },
      { team1: "Brasil", team2: "Costa de Marfil", score: "3-1" },
      { team1: "Portugal", team2: "Corea del Norte", score: "7-0" },
      { team1: "Portugal", team2: "Brasil", score: "0-0" },
      { team1: "Corea del Norte", team2: "Costa de Marfil", score: "0-3" }
    ]
  },
  H: {
    standings: [
      { id: "espana", team: "España", flag: "es", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 2 },
      { id: "chile", team: "Chile", flag: "cl", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 3, gc: 2 },
      { id: "suiza", team: "Suiza", flag: "ch", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 1, gc: 1 },
      { id: "honduras", team: "Honduras", flag: "hn", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 0, gc: 3 }
    ],
    matches: [
      { team1: "Honduras", team2: "Chile", score: "0-1" },
      { team1: "España", team2: "Suiza", score: "0-1" },
      { team1: "Chile", team2: "Suiza", score: "1-0" },
      { team1: "España", team2: "Honduras", score: "2-0" },
      { team1: "Chile", team2: "España", score: "1-2" },
      { team1: "Suiza", team2: "Honduras", score: "0-0" }
    ]
  }
};

const bracket = {
  roundOf16: [
    { team1: "Uruguay", team2: "Corea del Sur", score: "2 - 1" },
    { team1: "Estados Unidos", team2: "Ghana", score: "1 - 2", extraTime: "true" },
    { team1: "Países Bajos", team2: "Eslovaquia", score: "2 - 1" },
    { team1: "Brasil", team2: "Chile", score: "3 - 0" },
    { team1: "Argentina", team2: "México", score: "3 - 1" },
    { team1: "Alemania", team2: "Inglaterra", score: "4 - 1" },
    { team1: "Paraguay", team2: "Japón", score: "0 (5) - 0 (3)", penalties: "true" }, // Used string to avoid boolean error
    { team1: "España", team2: "Portugal", score: "1 - 0" }
  ],
  quarterFinals: [
    { team1: "Uruguay", team2: "Ghana", score: "1 (4) - 1 (2)", penalties: "true" },
    { team1: "Países Bajos", team2: "Brasil", score: "2 - 1" },
    { team1: "Argentina", team2: "Alemania", score: "0 - 4" },
    { team1: "Paraguay", team2: "España", score: "0 - 1" }
  ],
  semiFinals: [
    { team1: "Uruguay", team2: "Países Bajos", score: "2 - 3" },
    { team1: "Alemania", team2: "España", score: "0 - 1" }
  ],
  thirdPlace: { team1: "Uruguay", team2: "Alemania", score: "2 - 3" },
  final: { team1: "Países Bajos", team2: "España", score: "0 - 1", extraTime: "true" }
};

Object.keys(groups).forEach(g => {
    groups[g].matches = groups[g].matches.map(m => {
        return {
            ...m,
            flag1: getFlag(m.team1),
            flag2: getFlag(m.team2),
            goals1: [],
            goals2: []
        }
    });
});

Object.keys(bracket).forEach(stage => {
    if (Array.isArray(bracket[stage])) {
        bracket[stage] = bracket[stage].map(m => ({ ...m, flag1: getFlag(m.team1), flag2: getFlag(m.team2) }));
    } else {
        bracket[stage] = { ...bracket[stage], flag1: getFlag(bracket[stage].team1), flag2: getFlag(bracket[stage].team2) };
    }
});

data.groups = groups;
data.bracket = bracket;

data.stats.awards = {
    goldenBall: { name: 'Diego Forlán', flag: 'uy' },
    silverBall: { name: 'Wesley Sneijder', flag: 'nl' },
    bronzeBall: { name: 'David Villa', flag: 'es' },
    goldenGlove: { name: 'Iker Casillas', flag: 'es' },
    fairPlay: { name: 'España', flag: 'es' }
};

data.stats.topScorers = [
    { name: 'Thomas Müller', flag: 'de', value: '5 goles' },
    { name: 'David Villa', flag: 'es', value: '5 goles' },
    { name: 'Wesley Sneijder', flag: 'nl', value: '5 goles' },
    { name: 'Diego Forlán', flag: 'uy', value: '5 goles' },
    { name: 'Gonzalo Higuaín', flag: 'ar', value: '4 goles' }
];

data.stats.assists = [
    { name: 'Thomas Müller', flag: 'de', value: '3 asis.' },
    { name: 'Mesut Özil', flag: 'de', value: '3 asis.' },
    { name: 'Kaka', flag: 'br', value: '3 asis.' },
    { name: 'B. Schweinsteiger', flag: 'de', value: '3 asis.' },
    { name: 'Dirk Kuyt', flag: 'nl', value: '3 asis.' }
];

data.stats.yellowCards = [
    { name: 'John Heitinga', flag: 'nl', value: '3 amarillas' },
    { name: 'Nigel de Jong', flag: 'nl', value: '3 amarillas' },
    { name: 'Kaká', flag: 'br', value: '3 amarillas' },
    { name: 'Felipe Melo', flag: 'br', value: '2 amarillas' },
    { name: 'Mark van Bommel', flag: 'nl', value: '2 amarillas' }
];

data.stats.redCards = [
    { name: 'Luis Suárez', flag: 'uy', value: 'Mano salvadora (vs Ghana)' },
    { name: 'John Heitinga', flag: 'nl', value: 'Doble Amarilla (Final)' },
    { name: 'Kaká', flag: 'br', value: 'Doble Amarilla (vs Costa Marfil)' },
    { name: 'Felipe Melo', flag: 'br', value: 'Roja Directa (Pisotón Robben)' },
    { name: 'Yoann Gourcuff', flag: 'fr', value: 'Roja Directa (Codazo)' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('2010 Groups, Bracket, Stats injected correctly.');
