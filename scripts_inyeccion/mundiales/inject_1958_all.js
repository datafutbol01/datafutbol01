import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1958.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
      { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 7, gc: 5 },
      { id: "irlanda_del_norte", team: "Irlanda del Norte", flag: "gb-nir", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 5 },
      { id: "checoslovaquia", team: "Checoslovaquia", flag: "cz", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 8, gc: 4 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 10 }
    ],
    matches: [
      { team1: "Alemania Federal", team2: "Argentina", score: "3-1" },
      { team1: "Irlanda del Norte", team2: "Checoslovaquia", score: "1-0" },
      { team1: "Argentina", team2: "Irlanda del Norte", score: "3-1" },
      { team1: "Alemania Federal", team2: "Checoslovaquia", score: "2-2" },
      { team1: "Alemania Federal", team2: "Irlanda del Norte", score: "2-2" },
      { team1: "Checoslovaquia", team2: "Argentina", score: "6-1" }, // El desastre de Suecia para Argentina
      { team1: "Irlanda del Norte", team2: "Checoslovaquia", score: "2-1", extraTime: "true", notes: "Desempate" } // Playoff
    ]
  },
  "2": {
    standings: [
      { id: "francia", team: "Francia", flag: "fr", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 11, gc: 7 },
      { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 7, gc: 6 },
      { id: "paraguay", team: "Paraguay", flag: "py", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 9, gc: 12 },
      { id: "escocia", team: "Escocia", flag: "gb-sct", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 4, gc: 6 }
    ],
    matches: [
      { team1: "Francia", team2: "Paraguay", score: "7-3" }, // Fontaine starts his record streak
      { team1: "Yugoslavia", team2: "Escocia", score: "1-1" },
      { team1: "Yugoslavia", team2: "Francia", score: "3-2" },
      { team1: "Paraguay", team2: "Escocia", score: "3-2" },
      { team1: "Francia", team2: "Escocia", score: "2-1" },
      { team1: "Paraguay", team2: "Yugoslavia", score: "3-3" }
    ]
  },
  "3": {
    standings: [
       { id: "suecia", team: "Suecia", flag: "se", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 1 },
       { id: "gales", team: "Gales", flag: "gb-wls", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 2, gc: 2 },
       { id: "hungria", team: "Hungría", flag: "hu", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 6, gc: 3 },
       { id: "mexico", team: "México", flag: "mx", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 8 }
    ],
    matches: [
      { team1: "Suecia", team2: "México", score: "3-0" },
      { team1: "Hungría", team2: "Gales", score: "1-1" },
      { team1: "México", team2: "Gales", score: "1-1" },
      { team1: "Suecia", team2: "Hungría", score: "2-1" },
      { team1: "Suecia", team2: "Gales", score: "0-0" },
      { team1: "Hungría", team2: "México", score: "4-0" },
      { team1: "Gales", team2: "Hungría", score: "2-1", notes: "Desempate" } // Playoff
    ]
  },
  "4": {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 0 },
      { id: "urs", team: "Unión Soviética", flag: "su", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 4 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 4, gc: 4 },
      { id: "austria", team: "Austria", flag: "at", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 7 }
    ],
    matches: [
      { team1: "Brasil", team2: "Austria", score: "3-0" },
      { team1: "Unión Soviética", team2: "Inglaterra", score: "2-2" },
      { team1: "Brasil", team2: "Inglaterra", score: "0-0" }, // First 0-0 in WC history
      { team1: "Unión Soviética", team2: "Austria", score: "2-0" },
      { team1: "Brasil", team2: "Unión Soviética", score: "2-0" }, // Pelé and Garrincha debut together! The first 3 minutes are legendary
      { team1: "Inglaterra", team2: "Austria", score: "2-2" },
      { team1: "Unión Soviética", team2: "Inglaterra", score: "1-0", notes: "Desempate" } // Playoff
    ]
  }
};

const bracket = {
  quarterFinals: [
    { team1: "Francia", team2: "Irlanda del Norte", score: "4 - 0" },
    { team1: "Suecia", team2: "Unión Soviética", score: "2 - 0" },
    { team1: "Brasil", team2: "Gales", score: "1 - 0" }, // Pelé's first World Cup goal
    { team1: "Alemania Federal", team2: "Yugoslavia", score: "1 - 0" }
  ],
  semiFinals: [
    { team1: "Brasil", team2: "Francia", score: "5 - 2" }, // Pelé scores an incredible hat-trick
    { team1: "Suecia", team2: "Alemania Federal", score: "3 - 1" }
  ],
  thirdPlace: { team1: "Francia", team2: "Alemania Federal", score: "6 - 3" }, // Just Fontaine scores 4 goals
  final: { team1: "Brasil", team2: "Suecia", score: "5 - 2" } // Pelé's sombrero and tears of joy
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
    goldenBall: { name: 'Didi', flag: 'br' },
    silverBall: { name: 'Pelé', flag: 'br' },
    bronzeBall: { name: 'Just Fontaine', flag: 'fr' }
};

data.stats.topScorers = [
    { name: 'Just Fontaine', flag: 'fr', value: '13 goles' },
    { name: 'Pelé', flag: 'br', value: '6 goles' },
    { name: 'Helmut Rahn', flag: 'de', value: '6 goles' },
    { name: 'Vavá', flag: 'br', value: '5 goles' },
    { name: 'Peter McParland', flag: 'gb-nir', value: '5 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1958 Groups, Bracket, Stats injected correctly.');
