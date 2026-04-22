import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1974.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
       { id: "alemania_democratica", team: "Alemania Democrática", flag: "dd", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
       { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 1 },
       { id: "chile", team: "Chile", flag: "cl", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 1, gc: 2 },
       { id: "australia", team: "Australia", flag: "au", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 0, gc: 5 }
    ],
    matches: [
      { team1: "Alemania Federal", team2: "Chile", score: "1-0" },
      { team1: "Alemania Democrática", team2: "Australia", score: "2-0" },
      { team1: "Australia", team2: "Alemania Federal", score: "0-3" },
      { team1: "Chile", team2: "Alemania Democrática", score: "1-1" },
      { team1: "Australia", team2: "Chile", score: "0-0" },
      { team1: "Alemania Democrática", team2: "Alemania Federal", score: "1-0" } // The historic Cold War match
    ]
  },
  "2": {
    standings: [
      { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 10, gc: 1 },
      { id: "brasil", team: "Brasil", flag: "br", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 0 },
      { id: "escocia", team: "Escocia", flag: "gb-sct", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 1 },
      { id: "zaire", team: "Zaire", flag: "zr", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 0, gc: 14 }
    ],
    matches: [
      { team1: "Brasil", team2: "Yugoslavia", score: "0-0" },
      { team1: "Zaire", team2: "Escocia", score: "0-2" },
      { team1: "Yugoslavia", team2: "Zaire", score: "9-0" }, // Record win
      { team1: "Escocia", team2: "Brasil", score: "0-0" },
      { team1: "Escocia", team2: "Yugoslavia", score: "1-1" },
      { team1: "Zaire", team2: "Brasil", score: "0-3" } // The 'free kick' incident
    ]
  },
  "3": {
    standings: [
      { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 1 },
      { id: "suecia", team: "Suecia", flag: "se", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 0 },
      { id: "bulgaria", team: "Bulgaria", flag: "bg", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 5 },
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 6 }
    ],
    matches: [
      { team1: "Uruguay", team2: "Países Bajos", score: "0-2" },
      { team1: "Suecia", team2: "Bulgaria", score: "0-0" },
      { team1: "Bulgaria", team2: "Uruguay", score: "1-1" },
      { team1: "Países Bajos", team2: "Suecia", score: "0-0" },
      { team1: "Bulgaria", team2: "Países Bajos", score: "1-4" },
      { team1: "Suecia", team2: "Uruguay", score: "3-0" }
    ]
  },
  "4": {
    standings: [
      { id: "polonia", team: "Polonia", flag: "pl", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 12, gc: 3 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 7, gc: 5 },
      { id: "italia", team: "Italia", flag: "it", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 4 },
      { id: "haiti", team: "Haití", flag: "ht", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 14 }
    ],
    matches: [
      { team1: "Italia", team2: "Haití", score: "3-1" }, // Sanon ends Zoff's record streak
      { team1: "Polonia", team2: "Argentina", score: "3-2" },
      { team1: "Argentina", team2: "Italia", score: "1-1" },
      { team1: "Haití", team2: "Polonia", score: "0-7" },
      { team1: "Argentina", team2: "Haití", score: "4-1" },
      { team1: "Polonia", team2: "Italia", score: "2-1" }
    ]
  }
};

const secondStageGroups = {
  "A": {
    standings: [
        { id: "paises_bajos", team: "Países Bajos", flag: "nl", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 8, gc: 0 },
        { id: "brasil", team: "Brasil", flag: "br", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 3, gc: 3 },
        { id: "alemania_democratica", team: "Alemania Democrática", flag: "dd", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 4 },
        { id: "argentina", team: "Argentina", flag: "ar", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 7 }
    ],
    matches: [
        { team1: "Países Bajos", team2: "Argentina", score: "4-0" }, // Cruyff masterclass
        { team1: "Brasil", team2: "Alemania Democrática", score: "1-0" },
        { team1: "Argentina", team2: "Brasil", score: "1-2" },
        { team1: "Alemania Democrática", team2: "Países Bajos", score: "0-2" },
        { team1: "Argentina", team2: "Alemania Democrática", score: "1-1" },
        { team1: "Países Bajos", team2: "Brasil", score: "2-0" } // The de facto 'semi-final'
    ]
  },
  "B": {
    standings: [
        { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 2 },
        { id: "polonia", team: "Polonia", flag: "pl", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 3, gc: 2 },
        { id: "suecia", team: "Suecia", flag: "se", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 6 },
        { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 6 }
    ],
    matches: [
        { team1: "Yugoslavia", team2: "Alemania Federal", score: "0-2" },
        { team1: "Suecia", team2: "Polonia", score: "0-1" },
        { team1: "Polonia", team2: "Yugoslavia", score: "2-1" },
        { team1: "Alemania Federal", team2: "Suecia", score: "4-2" },
        { team1: "Polonia", team2: "Alemania Federal", score: "0-1" }, // The Water Battle of Frankfurt
        { team1: "Suecia", team2: "Yugoslavia", score: "2-1" }
    ]
  }
};

const bracket = {
  thirdPlace: { team1: "Brasil", team2: "Polonia", score: "0 - 1" },
  final: { team1: "Países Bajos", team2: "Alemania Federal", score: "1 - 2" }
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
    goldenBall: { name: 'Johan Cruyff', flag: 'nl' },
    silverBall: { name: 'Franz Beckenbauer', flag: 'de' },
    bronzeBall: { name: 'Kazimierz Deyna', flag: 'pl' },
    fairPlay: { name: 'Alemania Federal', flag: 'de' }
};

data.stats.topScorers = [
    { name: 'Grzegorz Lato', flag: 'pl', value: '7 goles' },
    { name: 'Johan Neeskens', flag: 'nl', value: '5 goles' },
    { name: 'Andrzej Szarmach', flag: 'pl', value: '5 goles' },
    { name: 'Gerd Müller', flag: 'de', value: '4 goles' },
    { name: 'Johnny Rep', flag: 'nl', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1974 Groups, Bracket, Stats injected correctly.');
