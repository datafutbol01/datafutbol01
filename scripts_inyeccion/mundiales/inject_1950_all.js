import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1950.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
       { id: "brasil", team: "Brasil", flag: "br", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 2 },
       { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 7, gc: 3 },
       { id: "suiza", team: "Suiza", flag: "ch", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 6 },
       { id: "mexico", team: "México", flag: "mx", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 10 }
    ],
    matches: [
      { team1: "Brasil", team2: "México", score: "4-0" },
      { team1: "Yugoslavia", team2: "Suiza", score: "3-0" },
      { team1: "Brasil", team2: "Suiza", score: "2-2" },
      { team1: "Yugoslavia", team2: "México", score: "4-1" },
      { team1: "Brasil", team2: "Yugoslavia", score: "2-0" },
      { team1: "Suiza", team2: "México", score: "2-1" }
    ]
  },
  "2": {
    standings: [
      { id: "espana", team: "España", flag: "es", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 6, gc: 1 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 2 },
      { id: "chile", team: "Chile", flag: "cl", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 6 },
      { id: "estados_unidos", team: "Estados Unidos", flag: "us", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 8 }
    ],
    matches: [
      { team1: "Inglaterra", team2: "Chile", score: "2-0" },
      { team1: "España", team2: "Estados Unidos", score: "3-1" },
      { team1: "España", team2: "Chile", score: "2-0" },
      { team1: "Estados Unidos", team2: "Inglaterra", score: "1-0", notes: "Milagro de Belo Horizonte" }, // One of the greatest upsets
      { team1: "España", team2: "Inglaterra", score: "1-0" }, // Zarra's famous goal
      { team1: "Chile", team2: "Estados Unidos", score: "5-2" }
    ]
  },
  "3": {
    standings: [
      { id: "suecia", team: "Suecia", flag: "se", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 5, gc: 4 },
      { id: "italia", team: "Italia", flag: "it", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 4, gc: 3 },
      { id: "paraguay", team: "Paraguay", flag: "py", pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 2, gc: 4 }
    ],
    matches: [
      { team1: "Suecia", team2: "Italia", score: "3-2" },
      { team1: "Suecia", team2: "Paraguay", score: "2-2" },
      { team1: "Italia", team2: "Paraguay", score: "2-0" } // Italy eliminated
    ]
  },
  "4": {
    standings: [
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 2, pj: 1, pg: 1, pe: 0, pp: 0, gf: 8, gc: 0 },
      { id: "bolivia", team: "Bolivia", flag: "bo", pts: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 8 }
    ],
    matches: [
      { team1: "Uruguay", team2: "Bolivia", score: "8-0" } // Only match due to withdrawals
    ]
  }
};

const finalGroup = {
  standings: [
    { id: "uruguay", team: "Uruguay", flag: "uy", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 5 },
    { id: "brasil", team: "Brasil", flag: "br", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 14, gc: 4 },
    { id: "suecia", team: "Suecia", flag: "se", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 6, gc: 11 },
    { id: "espana", team: "España", flag: "es", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 4, gc: 11 }
  ],
  matches: [
    { team1: "Uruguay", team2: "España", score: "2-2" },
    { team1: "Brasil", team2: "Suecia", score: "7-1" },
    { team1: "Brasil", team2: "España", score: "6-1" },
    { team1: "Uruguay", team2: "Suecia", score: "3-2" },
    { team1: "Suecia", team2: "España", score: "3-1" },
    { team1: "Uruguay", team2: "Brasil", score: "2-1", notes: "El Maracanazo" } // The decisive match
  ]
};

const formatMatches = (groupObj) => {
    Object.keys(groupObj).forEach(g => {
        if (groupObj[g].matches) {
            groupObj[g].matches = groupObj[g].matches.map(m => ({
                ...m,
                flag1: getFlag(m.team1),
                flag2: getFlag(m.team2),
                goals1: [],
                goals2: []
            }));
        } else {
             // For final group, it's not grouped by "1", "2" etc.
             groupObj.matches = groupObj.matches.map(m => ({
                ...m,
                flag1: getFlag(m.team1),
                flag2: getFlag(m.team2),
                goals1: [],
                goals2: []
            }));
        }
    });
};

formatMatches(groups);

finalGroup.matches = finalGroup.matches.map(m => ({
    ...m,
    flag1: getFlag(m.team1),
    flag2: getFlag(m.team2),
    goals1: [],
    goals2: []
}));

data.groups = groups;
data.finalGroup = finalGroup;
data.bracket = null; // Ensuring no bracket is rendered

data.stats.awards = {
    goldenBall: { name: 'Zizinho', flag: 'br' },
    silverBall: { name: 'Juan Alberto Schiaffino', flag: 'uy' },
    bronzeBall: { name: 'Ademir', flag: 'br' }
};

data.stats.topScorers = [
    { name: 'Ademir', flag: 'br', value: '8 goles' },
    { name: 'Óscar Míguez', flag: 'uy', value: '5 goles' },
    { name: 'Alcides Ghiggia', flag: 'uy', value: '4 goles' },
    { name: 'Chico', flag: 'br', value: '4 goles' },
    { name: 'Estanislao Basora', flag: 'es', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1950 Groups, Final Group, Stats injected correctly.');
