import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1970.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

// INITIAL GROUPS
const groups = {
  "1": {
    standings: [
      { id: "urs", team: "Unión Soviética", flag: "su", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 1 },
      { id: "mexico", team: "México", flag: "mx", pts: 5, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 0 },
      { id: "belgica", team: "Bélgica", flag: "be", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5 },
      { id: "el_salvador", team: "El Salvador", flag: "sv", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 0, gc: 9 }
    ],
    matches: [
      { team1: "México", team2: "Unión Soviética", score: "0-0" },
      { team1: "Bélgica", team2: "El Salvador", score: "3-0" },
      { team1: "Unión Soviética", team2: "Bélgica", score: "4-1" },
      { team1: "México", team2: "El Salvador", score: "4-0" },
      { team1: "Unión Soviética", team2: "El Salvador", score: "2-0" },
      { team1: "México", team2: "Bélgica", score: "1-0" } // Mexico advances
    ]
  },
  "2": {
    standings: [
       { id: "italia", team: "Italia", flag: "it", pts: 4, pj: 3, pg: 1, pe: 2, pp: 0, gf: 1, gc: 0 },
       { id: "uruguay", team: "Uruguay", flag: "uy", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 1 },
       { id: "suecia", team: "Suecia", flag: "se", pts: 3, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2 },
       { id: "israel", team: "Israel", flag: "il", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 1, gc: 3 }
    ],
    matches: [
      { team1: "Uruguay", team2: "Israel", score: "2-0" },
      { team1: "Italia", team2: "Suecia", score: "1-0" }, // Italy's only goal in group stage
      { team1: "Uruguay", team2: "Italia", score: "0-0" },
      { team1: "Suecia", team2: "Israel", score: "1-1" },
      { team1: "Suecia", team2: "Uruguay", score: "1-0" },
      { team1: "Italia", team2: "Israel", score: "0-0" }
    ]
  },
  "3": {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 8, gc: 3 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 2, gc: 1 },
      { id: "rumania", team: "Rumania", flag: "ro", pts: 2, pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5 },
      { id: "checoslovaquia", team: "Checoslovaquia", flag: "cz", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 7 }
    ],
    matches: [
      { team1: "Inglaterra", team2: "Rumania", score: "1-0" },
      { team1: "Brasil", team2: "Checoslovaquia", score: "4-1" }, // Pelé almost scores from midfield
      { team1: "Rumania", team2: "Checoslovaquia", score: "2-1" },
      { team1: "Brasil", team2: "Inglaterra", score: "1-0" }, // The Banks save and Jairzinho goal
      { team1: "Brasil", team2: "Rumania", score: "3-2" },
      { team1: "Inglaterra", team2: "Checoslovaquia", score: "1-0" }
    ]
  },
  "4": {
    standings: [
      { id: "alemania_federal", team: "Alemania Federal", flag: "de", pts: 6, pj: 3, pg: 3, pe: 0, pp: 0, gf: 10, gc: 4 },
      { id: "peru", team: "Perú", flag: "pe", pts: 4, pj: 3, pg: 2, pe: 0, pp: 1, gf: 7, gc: 5 },
      { id: "bulgaria", team: "Bulgaria", flag: "bg", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 5, gc: 9 },
      { id: "marruecos", team: "Marruecos", flag: "ma", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "Perú", team2: "Bulgaria", score: "3-2" }, // Emotional win after the Ancash earthquake
      { team1: "Alemania Federal", team2: "Marruecos", score: "2-1" },
      { team1: "Perú", team2: "Marruecos", score: "3-0" },
      { team1: "Alemania Federal", team2: "Bulgaria", score: "5-2" }, // Müller shines
      { team1: "Alemania Federal", team2: "Perú", score: "3-1" }, // Müller vs Cubillas
      { team1: "Bulgaria", team2: "Marruecos", score: "1-1" }
    ]
  }
};

const bracket = {
  quarterFinals: [
    { team1: "Unión Soviética", team2: "Uruguay", score: "0 - 1", extraTime: "true" },
    { team1: "Brasil", team2: "Perú", score: "4 - 2" },
    { team1: "Italia", team2: "México", score: "4 - 1" },
    { team1: "Alemania Federal", team2: "Inglaterra", score: "3 - 2", extraTime: "true" } // Beckenbauer sparks the comeback
  ],
  semiFinals: [
    { team1: "Uruguay", team2: "Brasil", score: "1 - 3" },
    { team1: "Italia", team2: "Alemania Federal", score: "4 - 3", extraTime: "true" } // Game of the Century
  ],
  thirdPlace: { team1: "Uruguay", team2: "Alemania Federal", score: "0 - 1" },
  final: { team1: "Brasil", team2: "Italia", score: "4 - 1" } // Carlos Alberto's iconic goal
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
    goldenBall: { name: 'Pelé', flag: 'br' },
    silverBall: { name: 'Gérson', flag: 'br' },
    bronzeBall: { name: 'Gerd Müller', flag: 'de' },
    fairPlay: { name: 'Perú', flag: 'pe' }
};

data.stats.topScorers = [
    { name: 'Gerd Müller', flag: 'de', value: '10 goles' },
    { name: 'Jairzinho', flag: 'br', value: '7 goles' },
    { name: 'Teófilo Cubillas', flag: 'pe', value: '5 goles' },
    { name: 'Pelé', flag: 'br', value: '4 goles' },
    { name: 'Anatoliy Byshovets', flag: 'su', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1970 Groups, Bracket, Stats injected correctly.');
