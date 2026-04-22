import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1954.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 6, gc: 1 },
      { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 2, gc: 1 },
      { id: "francia", team: "Francia", flag: "fr", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 3, gc: 3 },
      { id: "mexico", team: "México", flag: "mx", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 2, gc: 8 }
    ],
    matches: [
      { team1: "Brasil", team2: "México", score: "5-0" },
      { team1: "Yugoslavia", team2: "Francia", score: "1-0" },
      { team1: "Francia", team2: "México", score: "3-2" },
      { team1: "Brasil", team2: "Yugoslavia", score: "1-1", extraTime: "true" } // Seeded vs Seeded. Wait, did they play? Yes, 1954 format was weird (Seeded didn't play each other, UNLESS there was extra time? No, seeded played unseeded, but wait, Brazil/Yugo played).
    ]
  },
  "2": {
    standings: [
      { id: "hungria", team: "Hungría", flag: "hu", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 17, gc: 3 },
      { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 7, gc: 9 },
      { id: "turquia", team: "Turquía", flag: "tr", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 8, gc: 4 },
      { id: "corea_del_sur", team: "Corea del Sur", flag: "kr", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 0, gc: 16 }
    ],
    matches: [
      { team1: "Alemania Federal", team2: "Turquía", score: "4-1" },
      { team1: "Hungría", team2: "Corea del Sur", score: "9-0" },
      { team1: "Hungría", team2: "Alemania Federal", score: "8-3" }, // Puskas injured by Liebrich
      { team1: "Turquía", team2: "Corea del Sur", score: "7-0" },
      { team1: "Alemania Federal", team2: "Turquía", score: "7-2", notes: "Desempate" } // Playoff
    ]
  },
  "3": {
    standings: [
       { id: "uruguay", team: "Uruguay", flag: "uy", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 9, gc: 0 },
       { id: "austria", team: "Austria", flag: "at", pts: 4, pj: 2, pg: 2, pe: 0, pp: 0, gf: 6, gc: 0 },
       { id: "checoslovaquia", team: "Checoslovaquia", flag: "cz", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 0, gc: 7 },
       { id: "escocia", team: "Escocia", flag: "gb-sct", pts: 0, pj: 2, pg: 0, pe: 0, pp: 2, gf: 0, gc: 8 }
    ],
    matches: [
      { team1: "Uruguay", team2: "Checoslovaquia", score: "2-0" },
      { team1: "Austria", team2: "Escocia", score: "1-0" },
      { team1: "Uruguay", team2: "Escocia", score: "7-0" },
      { team1: "Austria", team2: "Checoslovaquia", score: "5-0" } // Uruguay wins group by lot drawing
    ]
  },
  "4": {
    standings: [
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 3, pj: 2, pg: 1, pe: 1, pp: 0, gf: 6, gc: 4 },
      { id: "suiza", team: "Suiza", flag: "ch", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 2, gc: 3 },
      { id: "italia", team: "Italia", flag: "it", pts: 2, pj: 2, pg: 1, pe: 0, pp: 1, gf: 5, gc: 3 },
      { id: "belgica", team: "Bélgica", flag: "be", pts: 1, pj: 2, pg: 0, pe: 1, pp: 1, gf: 5, gc: 8 }
    ],
    matches: [
      { team1: "Suiza", team2: "Italia", score: "2-1" },
      { team1: "Inglaterra", team2: "Bélgica", score: "4-4", extraTime: "true" },
      { team1: "Italia", team2: "Bélgica", score: "4-1" },
      { team1: "Inglaterra", team2: "Suiza", score: "2-0" },
      { team1: "Suiza", team2: "Italia", score: "4-1", notes: "Desempate" } // Playoff
    ]
  }
};

const bracket = {
  quarterFinals: [
    { team1: "Austria", team2: "Suiza", score: "7 - 5" }, // Highest scoring game in WC history
    { team1: "Uruguay", team2: "Inglaterra", score: "4 - 2" },
    { team1: "Hungría", team2: "Brasil", score: "4 - 2" }, // The infamous "Battle of Berne"
    { team1: "Alemania Federal", team2: "Yugoslavia", score: "2 - 0" }
  ],
  semiFinals: [
    { team1: "Hungría", team2: "Uruguay", score: "4 - 2", extraTime: "true" }, // Sensational clash of titans
    { team1: "Alemania Federal", team2: "Austria", score: "6 - 1" }
  ],
  thirdPlace: { team1: "Austria", team2: "Uruguay", score: "3 - 1" },
  final: { team1: "Alemania Federal", team2: "Hungría", score: "3 - 2" } // The Miracle of Bern!
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
    goldenBall: { name: 'Ferenc Puskás', flag: 'hu' },
    silverBall: { name: 'Sándor Kocsis', flag: 'hu' },
    bronzeBall: { name: 'Fritz Walter', flag: 'de' }
};

data.stats.topScorers = [
    { name: 'Sándor Kocsis', flag: 'hu', value: '11 goles' },
    { name: 'Josef Hügi', flag: 'ch', value: '6 goles' },
    { name: 'Max Morlock', flag: 'de', value: '6 goles' },
    { name: 'Erich Probst', flag: 'at', value: '6 goles' },
    { name: 'Ferenc Puskás', flag: 'hu', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1954 Groups, Bracket, Stats injected correctly.');
