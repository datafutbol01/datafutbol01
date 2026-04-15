import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1966.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
       { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 0 },
       { id: "uruguay", team: "Uruguay", flag: "uy", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 2, gc: 1 },
       { id: "mexico", team: "México", flag: "mx", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 1, gc: 3 },
       { id: "francia", team: "Francia", flag: "fr", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Inglaterra", team2: "Uruguay", score: "0-0" },
      { team1: "Francia", team2: "México", score: "1-1" },
      { team1: "Uruguay", team2: "Francia", score: "2-1" },
      { team1: "Inglaterra", team2: "México", score: "2-0" },
      { team1: "México", team2: "Uruguay", score: "0-0" },
      { team1: "Inglaterra", team2: "Francia", score: "2-0" } 
    ]
  },
  "2": {
    standings: [
      { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 1 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
      { id: "espana", team: "España", flag: "es", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5 },
      { id: "suiza", team: "Suiza", flag: "ch", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 9 }
    ],
    matches: [
      { team1: "Alemania Federal", team2: "Suiza", score: "5-0" },
      { team1: "Argentina", team2: "España", score: "2-1" },
      { team1: "España", team2: "Suiza", score: "2-1" },
      { team1: "Argentina", team2: "Alemania Federal", score: "0-0" },
      { team1: "Argentina", team2: "Suiza", score: "2-0" },
      { team1: "Alemania Federal", team2: "España", score: "2-1" }
    ]
  },
  "3": {
    standings: [
      { id: "portugal", team: "Portugal", flag: "pt", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 9, gc: 2 },
      { id: "hungria", team: "Hungría", flag: "hu", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 7, gc: 5 },
      { id: "brasil", team: "Brasil", flag: "br", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 6 },
      { id: "bulgaria", team: "Bulgaria", flag: "bg", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 8 }
    ],
    matches: [
      { team1: "Brasil", team2: "Bulgaria", score: "2-0" }, // Pelé and Garrincha both score
      { team1: "Portugal", team2: "Hungría", score: "3-1" },
      { team1: "Hungría", team2: "Brasil", score: "3-1" },
      { team1: "Portugal", team2: "Bulgaria", score: "3-0" },
      { team1: "Portugal", team2: "Brasil", score: "3-1" }, // Eusébio eliminates injured Pelé
      { team1: "Hungría", team2: "Bulgaria", score: "3-1" }
    ]
  },
  "4": {
    standings: [
      { id: "urs", team: "Unión Soviética", flag: "su", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 6, gc: 1 },
      { id: "corea_del_norte", team: "Corea del Norte", flag: "kp", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 4 },
      { id: "italia", team: "Italia", flag: "it", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 2 },
      { id: "chile", team: "Chile", flag: "cl", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Unión Soviética", team2: "Corea del Norte", score: "3-0" },
      { team1: "Italia", team2: "Chile", score: "2-0" },
      { team1: "Corea del Norte", team2: "Chile", score: "1-1" },
      { team1: "Unión Soviética", team2: "Italia", score: "1-0" },
      { team1: "Corea del Norte", team2: "Italia", score: "1-0" }, // Sensational upset!
      { team1: "Unión Soviética", team2: "Chile", score: "2-1" }
    ]
  }
};

const bracket = {
  quarterFinals: [
    { team1: "Inglaterra", team2: "Argentina", score: "1 - 0" }, // Rattín's incident
    { team1: "Alemania Federal", team2: "Uruguay", score: "4 - 0" }, // Controversial refereeing
    { team1: "Unión Soviética", team2: "Hungría", score: "2 - 1" },
    { team1: "Portugal", team2: "Corea del Norte", score: "5 - 3" } // Eusébio's quad cancels out 0-3 start
  ],
  semiFinals: [
    { team1: "Inglaterra", team2: "Portugal", score: "2 - 1" }, // Charlton brace
    { team1: "Alemania Federal", team2: "Unión Soviética", score: "2 - 1" } // Beckenbauer scores
  ],
  thirdPlace: { team1: "Portugal", team2: "Unión Soviética", score: "2 - 1" }, // Eusébio hits his 9th
  final: { team1: "Inglaterra", team2: "Alemania Federal", score: "4 - 2", extraTime: "true" } // The Ghost Goal
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
    goldenBall: { name: 'Bobby Charlton', flag: 'gb-eng' },
    silverBall: { name: 'Bobby Moore', flag: 'gb-eng' },
    bronzeBall: { name: 'Eusébio', flag: 'pt' }
};

data.stats.topScorers = [
    { name: 'Eusébio', flag: 'pt', value: '9 goles' },
    { name: 'Helmut Haller', flag: 'de', value: '6 goles' },
    { name: 'Geoff Hurst', flag: 'gb-eng', value: '4 goles' },
    { name: 'Franz Beckenbauer', flag: 'de', value: '4 goles' },
    { name: 'Valeriy Porkuyan', flag: 'su', value: '4 goles' },
    { name: 'Ferenc Bene', flag: 'hu', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1966 Groups, Bracket, Stats injected correctly.');
