import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1982.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS (A to F)
const groups = {
  A: {
    standings: [
      { id: "polonia", team: "Polonia", flag: "pl", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 5, gc: 1 },
      { id: "italia", team: "Italia", flag: "it", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 2, gc: 2 },
      { id: "camerun", team: "Camerún", flag: "cm", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 1, gc: 1 },
      { id: "peru", team: "Perú", flag: "pe", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "Italia", team2: "Polonia", score: "0-0" },
      { team1: "Perú", team2: "Camerún", score: "0-0" },
      { team1: "Italia", team2: "Perú", score: "1-1" },
      { team1: "Polonia", team2: "Camerún", score: "0-0" },
      { team1: "Polonia", team2: "Perú", score: "5-1" },
      { team1: "Italia", team2: "Camerún", score: "1-1" }
    ]
  },
  B: {
    standings: [
       { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 3 },
       { id: "austria", team: "Austria", flag: "at", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 3, gc: 1 },
       { id: "argelia", team: "Argelia", flag: "dz", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 5 },
       { id: "chile", team: "Chile", flag: "cl", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 3, gc: 8 }
    ],
    matches: [
      { team1: "Alemania Federal", team2: "Argelia", score: "1-2" },
      { team1: "Chile", team2: "Austria", score: "0-1" },
      { team1: "Alemania Federal", team2: "Chile", score: "4-1" },
      { team1: "Argelia", team2: "Austria", score: "0-2" },
      { team1: "Argelia", team2: "Chile", score: "3-2" },
      { team1: "Alemania Federal", team2: "Austria", score: "1-0" } // The Disgrace of Gijón
    ]
  },
  C: {
    standings: [
      { id: "belgica", team: "Bélgica", flag: "be", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 3, gc: 1 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 2 },
      { id: "hungria", team: "Hungría", flag: "hu", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 12, gc: 6 },
      { id: "el_salvador", team: "El Salvador", flag: "sv", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 13 }
    ],
    matches: [
      { team1: "Argentina", team2: "Bélgica", score: "0-1" },
      { team1: "Hungría", team2: "El Salvador", score: "10-1" },
      { team1: "Argentina", team2: "Hungría", score: "4-1" },
      { team1: "Bélgica", team2: "El Salvador", score: "1-0" },
      { team1: "Bélgica", team2: "Hungría", score: "1-1" },
      { team1: "Argentina", team2: "El Salvador", score: "2-0" }
    ]
  },
  D: {
    standings: [
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 6, gc: 1 },
      { id: "francia", team: "Francia", flag: "fr", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 6, gc: 5 },
      { id: "checoslovaquia", team: "Checoslovaquia", flag: "cz", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 4 },
      { id: "kuwait", team: "Kuwait", flag: "kw", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "Inglaterra", team2: "Francia", score: "3-1" },
      { team1: "Checoslovaquia", team2: "Kuwait", score: "1-1" },
      { team1: "Inglaterra", team2: "Checoslovaquia", score: "2-0" },
      { team1: "Francia", team2: "Kuwait", score: "4-1" },
      { team1: "Francia", team2: "Checoslovaquia", score: "1-1" },
      { team1: "Inglaterra", team2: "Kuwait", score: "1-0" }
    ]
  },
  E: {
    standings: [
      { id: "irlanda_del_norte", team: "Irlanda del Norte", flag: "gb-nir", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 2, gc: 1 },
      { id: "espana", team: "España", flag: "es", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3 },
      { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2 },
      { id: "honduras", team: "Honduras", flag: "hn", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 3 }
    ],
    matches: [
      { team1: "España", team2: "Honduras", score: "1-1" },
      { team1: "Yugoslavia", team2: "Irlanda del Norte", score: "0-0" },
      { team1: "España", team2: "Yugoslavia", score: "2-1" },
      { team1: "Honduras", team2: "Irlanda del Norte", score: "1-1" },
      { team1: "Honduras", team2: "Yugoslavia", score: "0-1" },
      { team1: "España", team2: "Irlanda del Norte", score: "0-1" }
    ]
  },
  F: {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 10, gc: 2 },
      { id: "urs", team: "Unión Soviética", flag: "su", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 4 },
      { id: "escocia", team: "Escocia", flag: "gb-sct", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 8, gc: 8 },
      { id: "nueva_zelanda", team: "Nueva Zelanda", flag: "nz", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 12 }
    ],
    matches: [
      { team1: "Brasil", team2: "Unión Soviética", score: "2-1" },
      { team1: "Escocia", team2: "Nueva Zelanda", score: "5-2" },
      { team1: "Brasil", team2: "Escocia", score: "4-1" },
      { team1: "Unión Soviética", team2: "Nueva Zelanda", score: "3-0" },
      { team1: "Unión Soviética", team2: "Escocia", score: "2-2" },
      { team1: "Brasil", team2: "Nueva Zelanda", score: "4-0" }
    ]
  }
};

const secondStageGroups = {
  "A (Tercera)": {
    standings: [
        { id: "polonia", team: "Polonia", flag: "pl", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 3, gc: 0 },
        { id: "urs", team: "Unión Soviética", flag: "su", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 1, gc: 0 },
        { id: "belgica", team: "Bélgica", flag: "be", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 0, gc: 4 }
    ],
    matches: [
        { team1: "Polonia", team2: "Bélgica", score: "3-0" },
        { team1: "Bélgica", team2: "Unión Soviética", score: "0-1" },
        { team1: "Polonia", team2: "Unión Soviética", score: "0-0" }
    ]
  },
  "B (Segunda)": {
    standings: [
        { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 2, gc: 1 },
        { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 2, pj: 2, pg: 0, pe: 2, pp: 0, gf: 0, gc: 0 },
        { id: "espana", team: "España", flag: "es", pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 1, gc: 2 }
    ],
    matches: [
        { team1: "Alemania Federal", team2: "Inglaterra", score: "0-0" },
        { team1: "Alemania Federal", team2: "España", score: "2-1" },
        { team1: "España", team2: "Inglaterra", score: "0-0" }
    ]
  },
  "C (Primera)": {
    standings: [
        { id: "italia", team: "Italia", flag: "it", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 5, gc: 3 },
        { id: "brasil", team: "Brasil", flag: "br", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 5, gc: 4 },
        { id: "argentina", team: "Argentina", flag: "ar", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
        { team1: "Italia", team2: "Argentina", score: "2-1" },
        { team1: "Argentina", team2: "Brasil", score: "1-3" },
        { team1: "Italia", team2: "Brasil", score: "3-2" } // The Tragedy of Sarrià
    ]
  },
  "D (Cuarta)": {
    standings: [
        { id: "francia", team: "Francia", flag: "fr", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 5, gc: 1 },
        { id: "austria", team: "Austria", flag: "at", pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 2, gc: 3 },
        { id: "irlanda_del_norte", team: "Irlanda del Norte", flag: "gb-nir", pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 3, gc: 6 }
    ],
    matches: [
        { team1: "Austria", team2: "Francia", score: "0-1" },
        { team1: "Austria", team2: "Irlanda del Norte", score: "2-2" },
        { team1: "Francia", team2: "Irlanda del Norte", score: "4-1" }
    ]
  }
};

const bracket = {
  semiFinals: [
    { team1: "Polonia", team2: "Italia", score: "0 - 2" },
    { team1: "Alemania Federal", team2: "Francia", score: "3 (5) - 3 (4)", penalties: "true" }
  ],
  thirdPlace: { team1: "Polonia", team2: "Francia", score: "3 - 2" },
  final: { team1: "Italia", team2: "Alemania Federal", score: "3 - 1" }
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
    goldenBall: { name: 'Paolo Rossi', flag: 'it' },
    silverBall: { name: 'Falcão', flag: 'br' },
    bronzeBall: { name: 'Karl-Heinz Rummenigge', flag: 'de' },
    fairPlay: { name: 'Brasil', flag: 'br' }
};

data.stats.topScorers = [
    { name: 'Paolo Rossi', flag: 'it', value: '6 goles' },
    { name: 'K. Rummenigge', flag: 'de', value: '5 goles' },
    { name: 'Zico', flag: 'br', value: '4 goles' },
    { name: 'Zbigniew Boniek', flag: 'pl', value: '4 goles' },
    { name: 'Falcão', flag: 'br', value: '3 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1982 Groups, Bracket, Stats injected correctly.');
