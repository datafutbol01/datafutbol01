import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1978.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const groups = {
  "1": {
    standings: [
      { id: "italia", team: "Italia", flag: "it", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 6, gc: 2 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 3 },
      { id: "francia", team: "Francia", flag: "fr", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 5 },
      { id: "hungria", team: "Hungría", flag: "hu", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 3, gc: 8 }
    ],
    matches: [
      { team1: "Italia", team2: "Francia", score: "2-1" },
      { team1: "Argentina", team2: "Hungría", score: "2-1" },
      { team1: "Italia", team2: "Hungría", score: "3-1" },
      { team1: "Argentina", team2: "Francia", score: "2-1" },
      { team1: "Francia", team2: "Hungría", score: "3-1" },
      { team1: "Italia", team2: "Argentina", score: "1-0" } // Clásico en el Monumental
    ]
  },
  "2": {
    standings: [
       { id: "polonia", team: "Polonia", flag: "pl", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
       { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 6, gc: 0 },
       { id: "tunez", team: "Túnez", flag: "tn", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 2 },
       { id: "mexico", team: "México", flag: "mx", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 12 }
    ],
    matches: [
      { team1: "Alemania Federal", team2: "Polonia", score: "0-0" },
      { team1: "Túnez", team2: "México", score: "3-1" }, // Historic first African win
      { team1: "Polonia", team2: "Túnez", score: "1-0" },
      { team1: "Alemania Federal", team2: "México", score: "6-0" },
      { team1: "Alemania Federal", team2: "Túnez", score: "0-0" },
      { team1: "Polonia", team2: "México", score: "3-1" }
    ]
  },
  "3": {
    standings: [
      { id: "austria", team: "Austria", flag: "at", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 3, gc: 2 },
      { id: "brasil", team: "Brasil", flag: "br", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 2, gc: 1 },
      { id: "espana", team: "España", flag: "es", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2 },
      { id: "suecia", team: "Suecia", flag: "se", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 3 }
    ],
    matches: [
      { team1: "Austria", team2: "España", score: "2-1" },
      { team1: "Brasil", team2: "Suecia", score: "1-1" }, // Info: Controversial disallowed final goal by referee Thomas
      { team1: "Austria", team2: "Suecia", score: "1-0" },
      { team1: "Brasil", team2: "España", score: "0-0" },
      { team1: "España", team2: "Suecia", score: "1-0" },
      { team1: "Brasil", team2: "Austria", score: "1-0" } // Info: Roberto Dinamite goal
    ]
  },
  "4": {
    standings: [
      { id: "peru", team: "Perú", flag: "pe", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 2 },
      { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 3 },
      { id: "escocia", team: "Escocia", flag: "gb-sct", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 6 },
      { id: "iran", team: "Irán", flag: "ir", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 8 }
    ],
    matches: [
      { team1: "Perú", team2: "Escocia", score: "3-1" }, // Info: Cubillas magic
      { team1: "Países Bajos", team2: "Irán", score: "3-0" }, // Info: Rensenbrink hat-trick
      { team1: "Escocia", team2: "Irán", score: "1-1" },
      { team1: "Países Bajos", team2: "Perú", score: "0-0" },
      { team1: "Perú", team2: "Irán", score: "4-1" },
      { team1: "Escocia", team2: "Países Bajos", score: "3-2" } // Info: Archie Gemmill wonder goal
    ]
  }
};

const secondStageGroups = {
  "A": {
    standings: [
        { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 9, gc: 4 },
        { id: "italia", team: "Italia", flag: "it", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2 },
        { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 4, gc: 5 },
        { id: "austria", team: "Austria", flag: "at", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 8 }
    ],
    matches: [
        { team1: "Países Bajos", team2: "Austria", score: "5-1" },
        { team1: "Italia", team2: "Alemania Federal", score: "0-0" },
        { team1: "Países Bajos", team2: "Alemania Federal", score: "2-2" },
        { team1: "Italia", team2: "Austria", score: "1-0" },
        { team1: "Austria", team2: "Alemania Federal", score: "3-2" }, // The Miracle of Córdoba
        { team1: "Países Bajos", team2: "Italia", score: "2-1" }
    ]
  },
  "B": {
    standings: [
        { id: "argentina", team: "Argentina", flag: "ar", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 0 },
        { id: "brasil", team: "Brasil", flag: "br", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 1 },
        { id: "polonia", team: "Polonia", flag: "pl", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 5 },
        { id: "peru", team: "Perú", flag: "pe", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 0, gc: 10 }
    ],
    matches: [
        { team1: "Brasil", team2: "Perú", score: "3-0" },
        { team1: "Argentina", team2: "Polonia", score: "2-0" },
        { team1: "Brasil", team2: "Argentina", score: "0-0" }, // The Battle of Rosario
        { team1: "Polonia", team2: "Perú", score: "1-0" },
        { team1: "Brasil", team2: "Polonia", score: "3-1" },
        { team1: "Argentina", team2: "Perú", score: "6-0" } // The historic controversial match
    ]
  }
};

const bracket = {
  thirdPlace: { team1: "Brasil", team2: "Italia", score: "2 - 1" },
  final: { team1: "Argentina", team2: "Países Bajos", score: "3 - 1", extraTime: "true" }
};

const formatMatches = (groupObj) => {
    Object.keys(groupObj).forEach(g => {
        groupObj[g].matches = groupObj[g].matches.map(m => ({
            ...m,
            flag1: getFlag(m.team1),
            flag2: getFlag(m.team2),
            goals1: [],
            goals2: []
        }));
    });
};

formatMatches(groups);
formatMatches(secondStageGroups);

Object.keys(bracket).forEach(stage => {
    if (Array.isArray(bracket[stage])) {
        bracket[stage] = bracket[stage].map(m => ({ ...m, flag1: getFlag(m.team1), flag2: getFlag(m.team2) }));
    } else {
        bracket[stage] = { ...bracket[stage], flag1: getFlag(bracket[stage].team1), flag2: getFlag(bracket[stage].team2) };
    }
});

data.groups = groups;
data.secondStageGroups = secondStageGroups;
data.bracket = bracket;

data.stats.awards = {
    goldenBall: { name: 'Mario Kempes', flag: 'ar' },
    silverBall: { name: 'Paolo Rossi', flag: 'it' },
    bronzeBall: { name: 'Dirceu', flag: 'br' },
    fairPlay: { name: 'Argentina', flag: 'ar' }
};

data.stats.topScorers = [
    { name: 'Mario Kempes', flag: 'ar', value: '6 goles' },
    { name: 'T. Rensenbrink', flag: 'nl', value: '5 goles' },
    { name: 'Teófilo Cubillas', flag: 'pe', value: '5 goles' },
    { name: 'Leopoldo Luque', flag: 'ar', value: '4 goles' },
    { name: 'Hans Krankl', flag: 'at', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1978 Groups, Bracket, Stats injected correctly.');
