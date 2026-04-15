import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1930.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const groups = {
  "1": {
    standings: [
      { id: "argentina", team: "Argentina", flag: "ar", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 10, gc: 4 },
      { id: "chile", team: "Chile", flag: "cl", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 3 },
      { id: "francia", team: "Francia", flag: "fr", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 3 },
      { id: "mexico", team: "México", flag: "mx", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 4, gc: 13 }
    ],
    matches: [
      { team1: "Francia", team2: "México", score: "4-1", notes: "Primer partido en la historia de los Mundiales" },
      { team1: "Argentina", team2: "Francia", score: "1-0" },
      { team1: "Chile", team2: "México", score: "3-0" },
      { team1: "Chile", team2: "Francia", score: "1-0" },
      { team1: "Argentina", team2: "México", score: "6-3" },
      { team1: "Argentina", team2: "Chile", score: "3-1" }
    ]
  },
  "2": {
    standings: [
      { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 6, gc: 1 },
      { id: "brasil", team: "Brasil", flag: "br", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 5, gc: 2 },
      { id: "bolivia", team: "Bolivia", flag: "bo", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 0, gc: 8 }
    ],
    matches: [
      { team1: "Yugoslavia", team2: "Brasil", score: "2-1" },
      { team1: "Yugoslavia", team2: "Bolivia", score: "4-0" },
      { team1: "Brasil", team2: "Bolivia", score: "4-0" }
    ]
  },
  "3": {
    standings: [
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 5, gc: 0 },
      { id: "rumania", team: "Rumania", flag: "ro", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 3, gc: 5 },
      { id: "peru", team: "Perú", flag: "pe", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 1, gc: 4 }
    ],
    matches: [
      { team1: "Rumania", team2: "Perú", score: "3-1" },
      { team1: "Uruguay", team2: "Perú", score: "1-0" },
      { team1: "Uruguay", team2: "Rumania", score: "4-0" }
    ]
  },
  "4": {
    standings: [
      { id: "estados_unidos", team: "Estados Unidos", flag: "us", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 6, gc: 0 },
      { id: "paraguay", team: "Paraguay", flag: "py", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 1, gc: 3 },
      { id: "belgica", team: "Bélgica", flag: "be", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 0, gc: 4 }
    ],
    matches: [
      { team1: "Estados Unidos", team2: "Bélgica", score: "3-0" },
      { team1: "Estados Unidos", team2: "Paraguay", score: "3-0" },
      { team1: "Paraguay", team2: "Bélgica", score: "1-0" }
    ]
  }
};

const bracket = {
  semiFinals: [
    { team1: "Argentina", team2: "Estados Unidos", score: "6 - 1" },
    { team1: "Uruguay", team2: "Yugoslavia", score: "6 - 1" }
  ],
  final: { team1: "Uruguay", team2: "Argentina", score: "4 - 2", notes: "Final de los dos balones" }
};

Object.keys(groups).forEach(g => {
    groups[g].matches = groups[g].matches.map(m => ({
        ...m,
        flag1: getFlag(m.team1),
        flag2: getFlag(m.team2),
        goals1: [],
        goals2: []
    }));
});

Object.keys(bracket).forEach(stage => {
    if (Array.isArray(bracket[stage])) {
        bracket[stage] = bracket[stage].map(m => ({
            ...m,
            flag1: getFlag(m.team1),
            flag2: getFlag(m.team2),
            goals1: [],
            goals2: []
        }));
    } else {
        bracket[stage] = { 
            ...bracket[stage], 
            flag1: getFlag(bracket[stage].team1), 
            flag2: getFlag(bracket[stage].team2),
            goals1: [],
            goals2: []
        };
    }
});

data.groups = groups;
data.bracket = bracket;

data.stats.awards = {
    goldenBall: { name: 'José Nasazzi', flag: 'uy' },
    silverBall: { name: 'Guillermo Stábile', flag: 'ar' },
    bronzeBall: { name: 'José Leandro Andrade', flag: 'uy' }
};

data.stats.topScorers = [
    { name: 'Guillermo Stábile', flag: 'ar', value: '8 goles' },
    { name: 'Pedro Cea', flag: 'uy', value: '5 goles' },
    { name: 'Bert Patenaude', flag: 'us', value: '4 goles' },
    { name: 'Guillermo Subiabre', flag: 'cl', value: '4 goles' },
    { name: 'Carlos Peucelle', flag: 'ar', value: '3 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1930 Groups, Bracket, Stats injected correctly.');
