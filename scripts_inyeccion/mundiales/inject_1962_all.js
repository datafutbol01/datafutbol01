import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1962.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
       { id: "urs", team: "Unión Soviética", flag: "su", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 5 },
       { id: "yugoslavia", team: "Yugoslavia", flag: "yu", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 8, gc: 3 },
       { id: "uruguay", team: "Uruguay", flag: "uy", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 6 },
       { id: "colombia", team: "Colombia", flag: "co", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 5, gc: 11 }
    ],
    matches: [
      { team1: "Uruguay", team2: "Colombia", score: "2-1" },
      { team1: "Unión Soviética", team2: "Yugoslavia", score: "2-0" },
      { team1: "Yugoslavia", team2: "Uruguay", score: "3-1" },
      { team1: "Unión Soviética", team2: "Colombia", score: "4-4" }, // Marcos Coll's historic Olympic Goal vs Yashin
      { team1: "Unión Soviética", team2: "Uruguay", score: "2-1" },
      { team1: "Yugoslavia", team2: "Colombia", score: "5-0" } 
    ]
  },
  "2": {
    standings: [
      { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
      { id: "chile", team: "Chile", flag: "cl", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 3 },
      { id: "italia", team: "Italia", flag: "it", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 2 },
      { id: "suiza", team: "Suiza", flag: "ch", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 8 }
    ],
    matches: [
      { team1: "Chile", team2: "Suiza", score: "3-1" },
      { team1: "Alemania Federal", team2: "Italia", score: "0-0" },
      { team1: "Chile", team2: "Italia", score: "2-0" }, // The infamous "Battle of Santiago"
      { team1: "Alemania Federal", team2: "Suiza", score: "2-1" },
      { team1: "Alemania Federal", team2: "Chile", score: "2-0" },
      { team1: "Italia", team2: "Suiza", score: "3-0" }
    ]
  },
  "3": {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 1 },
      { id: "checoslovaquia", team: "Checoslovaquia", flag: "cz", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 3 },
      { id: "mexico", team: "México", flag: "mx", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 3, gc: 4 },
      { id: "espana", team: "España", flag: "es", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 3 }
    ],
    matches: [
      { team1: "Brasil", team2: "México", score: "2-0" }, // Pelé scores but gets injured next match
      { team1: "Checoslovaquia", team2: "España", score: "1-0" },
      { team1: "Brasil", team2: "Checoslovaquia", score: "0-0" }, // Pelé tears muscle, tornament ends for him
      { team1: "España", team2: "México", score: "1-0" },
      { team1: "Brasil", team2: "España", score: "2-1" }, // Amarildo steps up replacing Pelé
      { team1: "México", team2: "Checoslovaquia", score: "3-1" }
    ]
  },
  "4": {
    standings: [
      { id: "hungria", team: "Hungría", flag: "hu", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 2 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 3 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 3 },
      { id: "bulgaria", team: "Bulgaria", flag: "bg", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 7 }
    ],
    matches: [
      { team1: "Argentina", team2: "Bulgaria", score: "1-0" },
      { team1: "Hungría", team2: "Inglaterra", score: "2-1" },
      { team1: "Inglaterra", team2: "Argentina", score: "3-1" },
      { team1: "Hungría", team2: "Bulgaria", score: "6-1" }, // Flórián Albert hat-trick
      { team1: "Hungría", team2: "Argentina", score: "0-0" }, // Argentina eliminated on goal average
      { team1: "Inglaterra", team2: "Bulgaria", score: "0-0" }
    ]
  }
};

const bracket = {
  quarterFinals: [
    { team1: "Chile", team2: "Unión Soviética", score: "2 - 1" }, // Historic home win over Yashin
    { team1: "Yugoslavia", team2: "Alemania Federal", score: "1 - 0" }, // Avenging 1954 & 1958 defeats
    { team1: "Brasil", team2: "Inglaterra", score: "3 - 1" }, // Garrincha masterclass
    { team1: "Checoslovaquia", team2: "Hungría", score: "1 - 0" }
  ],
  semiFinals: [
    { team1: "Checoslovaquia", team2: "Yugoslavia", score: "3 - 1" },
    { team1: "Brasil", team2: "Chile", score: "4 - 2" } // Garrincha and Vavá brace stops the host
  ],
  thirdPlace: { team1: "Chile", team2: "Yugoslavia", score: "1 - 0" }, // Eladio Rojas 90th min historic goal
  final: { team1: "Brasil", team2: "Checoslovaquia", score: "3 - 1" } // Amarildo, Zito, Vavá secure back-to-back cups
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
    goldenBall: { name: 'Mané Garrincha', flag: 'br' },
    silverBall: { name: 'Josef Masopust', flag: 'cz' },
    bronzeBall: { name: 'Leonel Sánchez', flag: 'cl' }
};

data.stats.topScorers = [
    { name: 'Mané Garrincha', flag: 'br', value: '4 goles' },
    { name: 'Vavá', flag: 'br', value: '4 goles' },
    { name: 'Leonel Sánchez', flag: 'cl', value: '4 goles' },
    { name: 'Flórián Albert', flag: 'hu', value: '4 goles' },
    { name: 'Valentin Ivanov', flag: 'su', value: '4 goles' },
    { name: 'Dražan Jerković', flag: 'yu', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1962 Groups, Bracket, Stats injected correctly.');
