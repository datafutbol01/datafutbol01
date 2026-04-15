import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2014.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const groups = {
  A: {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 2 },
      { id: "mexico", team: "México", flag: "mx", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
      { id: "croacia", team: "Croacia", flag: "hr", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 6, gc: 6 },
      { id: "camerun", team: "Camerún", flag: "cm", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 9 }
    ],
    matches: [
      { team1: "Brasil", team2: "Croacia", score: "3-1" },
      { team1: "México", team2: "Camerún", score: "1-0" },
      { team1: "Brasil", team2: "México", score: "0-0" },
      { team1: "Camerún", team2: "Croacia", score: "0-4" },
      { team1: "Camerún", team2: "Brasil", score: "1-4" },
      { team1: "Croacia", team2: "México", score: "1-3" }
    ]
  },
  B: {
    standings: [
       { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 10, gc: 3 },
       { id: "chile", team: "Chile", flag: "cl", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 3 },
       { id: "espana", team: "España", flag: "es", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 7 },
       { id: "australia", team: "Australia", flag: "au", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 3, gc: 9 }
    ],
    matches: [
      { team1: "España", team2: "Países Bajos", score: "1-5" },
      { team1: "Chile", team2: "Australia", score: "3-1" },
      { team1: "Australia", team2: "Países Bajos", score: "2-3" },
      { team1: "España", team2: "Chile", score: "0-2" },
      { team1: "Australia", team2: "España", score: "0-3" },
      { team1: "Países Bajos", team2: "Chile", score: "2-0" }
    ]
  },
  C: {
    standings: [
      { id: "colombia", team: "Colombia", flag: "co", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 9, gc: 2 },
      { id: "grecia", team: "Grecia", flag: "gr", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 4 },
      { id: "costa_de_marfil", team: "Costa de Marfil", flag: "ci", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5 },
      { id: "japon", team: "Japón", flag: "jp", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "Colombia", team2: "Grecia", score: "3-0" },
      { team1: "Costa de Marfil", team2: "Japón", score: "2-1" },
      { team1: "Colombia", team2: "Costa de Marfil", score: "2-1" },
      { team1: "Japón", team2: "Grecia", score: "0-0" },
      { team1: "Japón", team2: "Colombia", score: "1-4" },
      { team1: "Grecia", team2: "Costa de Marfil", score: "2-1" }
    ]
  },
  D: {
    standings: [
      { id: "costa_rica", team: "Costa Rica", flag: "cr", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 4 },
      { id: "italia", team: "Italia", flag: "it", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 3 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 4 }
    ],
    matches: [
      { team1: "Uruguay", team2: "Costa Rica", score: "1-3" },
      { team1: "Inglaterra", team2: "Italia", score: "1-2" },
      { team1: "Uruguay", team2: "Inglaterra", score: "2-1" },
      { team1: "Italia", team2: "Costa Rica", score: "0-1" },
      { team1: "Italia", team2: "Uruguay", score: "0-1" },
      { team1: "Costa Rica", team2: "Inglaterra", score: "0-0" }
    ]
  },
  E: {
    standings: [
      { id: "francia", team: "Francia", flag: "fr", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 2 },
      { id: "suiza", team: "Suiza", flag: "ch", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 7, gc: 6 },
      { id: "ecuador", team: "Ecuador", flag: "ec", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3 },
      { id: "honduras", team: "Honduras", flag: "hn", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 8 }
    ],
    matches: [
      { team1: "Suiza", team2: "Ecuador", score: "2-1" },
      { team1: "Francia", team2: "Honduras", score: "3-0" },
      { team1: "Suiza", team2: "Francia", score: "2-5" },
      { team1: "Honduras", team2: "Ecuador", score: "1-2" },
      { team1: "Honduras", team2: "Suiza", score: "0-3" },
      { team1: "Ecuador", team2: "Francia", score: "0-0" }
    ]
  },
  F: {
    standings: [
      { id: "argentina", team: "Argentina", flag: "ar", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 6, gc: 3 },
      { id: "nigeria", team: "Nigeria", flag: "ng", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3 },
      { id: "bosnia", team: "Bosnia y Herzegovina", flag: "ba", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 4 },
      { id: "iran", team: "Irán", flag: "ir", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 4 }
    ],
    matches: [
      { team1: "Argentina", team2: "Bosnia y Herzegovina", score: "2-1" },
      { team1: "Irán", team2: "Nigeria", score: "0-0" },
      { team1: "Argentina", team2: "Irán", score: "1-0" },
      { team1: "Nigeria", team2: "Bosnia y Herzegovina", score: "1-0" },
      { team1: "Nigeria", team2: "Argentina", score: "2-3" },
      { team1: "Bosnia y Herzegovina", team2: "Irán", score: "3-1" }
    ]
  },
  G: {
    standings: [
      { id: "alemania", team: "Alemania", flag: "de", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 2 },
      { id: "estados_unidos", team: "Estados Unidos", flag: "us", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 4 },
      { id: "portugal", team: "Portugal", flag: "pt", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 7 },
      { id: "ghana", team: "Ghana", flag: "gh", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 4, gc: 6 }
    ],
    matches: [
      { team1: "Alemania", team2: "Portugal", score: "4-0" },
      { team1: "Ghana", team2: "Estados Unidos", score: "1-2" },
      { team1: "Alemania", team2: "Ghana", score: "2-2" },
      { team1: "Estados Unidos", team2: "Portugal", score: "2-2" },
      { team1: "Estados Unidos", team2: "Alemania", score: "0-1" },
      { team1: "Portugal", team2: "Ghana", score: "2-1" }
    ]
  },
  H: {
    standings: [
      { id: "belgica", team: "Bélgica", flag: "be", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 4, gc: 1 },
      { id: "argelia", team: "Argelia", flag: "dz", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 6, gc: 5 },
      { id: "rusia", team: "Rusia", flag: "ru", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 3 },
      { id: "corea_del_sur", team: "Corea del Sur", flag: "kr", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 3, gc: 6 }
    ],
    matches: [
      { team1: "Bélgica", team2: "Argelia", score: "2-1" },
      { team1: "Rusia", team2: "Corea del Sur", score: "1-1" },
      { team1: "Bélgica", team2: "Rusia", score: "1-0" },
      { team1: "Corea del Sur", team2: "Argelia", score: "2-4" },
      { team1: "Corea del Sur", team2: "Bélgica", score: "0-1" },
      { team1: "Argelia", team2: "Rusia", score: "1-1" }
    ]
  }
};

const bracket = {
  roundOf16: [
    { team1: "Brasil", team2: "Chile", score: "1 (3) - 1 (2)", penalties: "true" },
    { team1: "Colombia", team2: "Uruguay", score: "2 - 0" },
    { team1: "Francia", team2: "Nigeria", score: "2 - 0" },
    { team1: "Alemania", team2: "Argelia", score: "2 - 1", extraTime: "true" },
    { team1: "Países Bajos", team2: "México", score: "2 - 1" },
    { team1: "Costa Rica", team2: "Grecia", score: "1 (5) - 1 (3)", penalties: "true" },
    { team1: "Argentina", team2: "Suiza", score: "1 - 0", extraTime: "true" },
    { team1: "Bélgica", team2: "Estados Unidos", score: "2 - 1", extraTime: "true" }
  ],
  quarterFinals: [
    { team1: "Brasil", team2: "Colombia", score: "2 - 1" },
    { team1: "Francia", team2: "Alemania", score: "0 - 1" },
    { team1: "Países Bajos", team2: "Costa Rica", score: "0 (4) - 0 (3)", penalties: "true" },
    { team1: "Argentina", team2: "Bélgica", score: "1 - 0" }
  ],
  semiFinals: [
    { team1: "Brasil", team2: "Alemania", score: "1 - 7" },
    { team1: "Países Bajos", team2: "Argentina", score: "0 (2) - 0 (4)", penalties: "true" }
  ],
  thirdPlace: { team1: "Brasil", team2: "Países Bajos", score: "0 - 3" },
  final: { team1: "Alemania", team2: "Argentina", score: "1 - 0", extraTime: "true" }
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
    goldenBall: { name: 'Lionel Messi', flag: 'ar' },
    silverBall: { name: 'Thomas Müller', flag: 'de' },
    bronzeBall: { name: 'Arjen Robben', flag: 'nl' },
    goldenGlove: { name: 'Manuel Neuer', flag: 'de' },
    fairPlay: { name: 'Colombia', flag: 'co' }
};

data.stats.topScorers = [
    { name: 'James Rodríguez', flag: 'co', value: '6 goles' },
    { name: 'Thomas Müller', flag: 'de', value: '5 goles' },
    { name: 'Neymar', flag: 'br', value: '4 goles' },
    { name: 'Lionel Messi', flag: 'ar', value: '4 goles' },
    { name: 'Robin van Persie', flag: 'nl', value: '4 goles' }
];

data.stats.assists = [
    { name: 'Juan Cuadrado', flag: 'co', value: '4 asis.' },
    { name: 'Toni Kroos', flag: 'de', value: '4 asis.' },
    { name: 'Thomas Müller', flag: 'de', value: '3 asis.' },
    { name: 'André Schürrle', flag: 'de', value: '3 asis.' },
    { name: 'Daley Blind', flag: 'nl', value: '3 asis.' }
];

data.stats.yellowCards = [
    { name: 'Thiago Silva', flag: 'br', value: '3 amarillas' },
    { name: 'B. Schweinsteiger', flag: 'de', value: '2 amarillas' },
    { name: 'Benedikt Höwedes', flag: 'de', value: '2 amarillas' },
    { name: 'Javier Mascherano', flag: 'ar', value: '2 amarillas' },
    { name: 'Marcos Rojo', flag: 'ar', value: '2 amarillas' }
];

data.stats.redCards = [
    { name: 'Pepe', flag: 'pt', value: 'Roja Directa (Cabezazo vs DE)' },
    { name: 'Claudio Marchisio', flag: 'it', value: 'Roja Directa (vs Uruguay)' },
    { name: 'Alex Song', flag: 'cm', value: 'Roja Directa (Codazo Mandžukić)' },
    { name: 'Óscar Duarte', flag: 'cr', value: 'Doble Amarilla (vs Grecia)' },
    { name: 'Steven Defour', flag: 'be', value: 'Roja Directa (vs Corea)' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('2014 Groups, Bracket, Stats injected correctly.');
