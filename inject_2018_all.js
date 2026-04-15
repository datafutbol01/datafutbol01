import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2018.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const groups = {
  A: {
    standings: [
      { id: "uruguay", team: "Uruguay", flag: "uy", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 5, gc: 0 },
      { id: "rusia", team: "Rusia", flag: "ru", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 8, gc: 4 },
      { id: "arabia_saudita", team: "Arabia Saudita", flag: "sa", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 7 },
      { id: "egipto", team: "Egipto", flag: "eg", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 6 }
    ],
    matches: [
      { team1: "Rusia", team2: "Arabia Saudita", score: "5-0" },
      { team1: "Egipto", team2: "Uruguay", score: "0-1" },
      { team1: "Rusia", team2: "Egipto", score: "3-1" },
      { team1: "Uruguay", team2: "Arabia Saudita", score: "1-0" },
      { team1: "Uruguay", team2: "Rusia", score: "3-0" },
      { team1: "Arabia Saudita", team2: "Egipto", score: "2-1" }
    ]
  },
  B: {
    standings: [
       { id: "espana", team: "España", flag: "es", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 6, gc: 5 },
       { id: "portugal", team: "Portugal", flag: "pt", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 5, gc: 4 },
       { id: "iran", team: "Irán", flag: "ir", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2 },
       { id: "marruecos", team: "Marruecos", flag: "ma", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 4 }
    ],
    matches: [
      { team1: "Marruecos", team2: "Irán", score: "0-1" },
      { team1: "Portugal", team2: "España", score: "3-3" },
      { team1: "Portugal", team2: "Marruecos", score: "1-0" },
      { team1: "Irán", team2: "España", score: "0-1" },
      { team1: "Irán", team2: "Portugal", score: "1-1" },
      { team1: "España", team2: "Marruecos", score: "2-2" }
    ]
  },
  C: {
    standings: [
      { id: "francia", team: "Francia", flag: "fr", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 3, gc: 1 },
      { id: "dinamarca", team: "Dinamarca", flag: "dk", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 2, gc: 1 },
      { id: "peru", team: "Perú", flag: "pe", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 2 },
      { id: "australia", team: "Australia", flag: "au", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Francia", team2: "Australia", score: "2-1" },
      { team1: "Perú", team2: "Dinamarca", score: "0-1" },
      { team1: "Dinamarca", team2: "Australia", score: "1-1" },
      { team1: "Francia", team2: "Perú", score: "1-0" },
      { team1: "Dinamarca", team2: "Francia", score: "0-0" },
      { team1: "Australia", team2: "Perú", score: "0-2" }
    ]
  },
  D: {
    standings: [
      { id: "croacia", team: "Croacia", flag: "hr", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 1 },
      { id: "argentina", team: "Argentina", flag: "ar", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 5 },
      { id: "nigeria", team: "Nigeria", flag: "ng", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 3, gc: 4 },
      { id: "islandia", team: "Islandia", flag: "is", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Argentina", team2: "Islandia", score: "1-1" },
      { team1: "Croacia", team2: "Nigeria", score: "2-0" },
      { team1: "Argentina", team2: "Croacia", score: "0-3" },
      { team1: "Nigeria", team2: "Islandia", score: "2-0" },
      { team1: "Nigeria", team2: "Argentina", score: "1-2" },
      { team1: "Islandia", team2: "Croacia", score: "1-2" }
    ]
  },
  E: {
    standings: [
      { id: "brasil", team: "Brasil", flag: "br", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 5, gc: 1 },
      { id: "suiza", team: "Suiza", flag: "ch", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 5, gc: 4 },
      { id: "serbia", team: "Serbia", flag: "rs", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 4 },
      { id: "costa_rica", team: "Costa Rica", flag: "cr", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Costa Rica", team2: "Serbia", score: "0-1" },
      { team1: "Brasil", team2: "Suiza", score: "1-1" },
      { team1: "Brasil", team2: "Costa Rica", score: "2-0" },
      { team1: "Serbia", team2: "Suiza", score: "1-2" },
      { team1: "Serbia", team2: "Brasil", score: "0-2" },
      { team1: "Suiza", team2: "Costa Rica", score: "2-2" }
    ]
  },
  F: {
    standings: [
      { id: "suecia", team: "Suecia", flag: "se", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 2 },
      { id: "mexico", team: "México", flag: "mx", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 3, gc: 4 },
      { id: "corea_del_sur", team: "Corea del Sur", flag: "kr", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 3, gc: 3 },
      { id: "alemania", team: "Alemania", flag: "de", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 4 }
    ],
    matches: [
      { team1: "Alemania", team2: "México", score: "0-1" },
      { team1: "Suecia", team2: "Corea del Sur", score: "1-0" },
      { team1: "Corea del Sur", team2: "México", score: "1-2" },
      { team1: "Alemania", team2: "Suecia", score: "2-1" },
      { team1: "Corea del Sur", team2: "Alemania", score: "2-0" },
      { team1: "México", team2: "Suecia", score: "0-3" }
    ]
  },
  G: {
    standings: [
      { id: "belgica", team: "Bélgica", flag: "be", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 9, gc: 2 },
      { id: "inglaterra", team: "Inglaterra", flag: "gb-eng", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 8, gc: 3 },
      { id: "tunez", team: "Túnez", flag: "tn", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 5, gc: 8 },
      { id: "panama", team: "Panamá", flag: "pa", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 2, gc: 11 }
    ],
    matches: [
      { team1: "Bélgica", team2: "Panamá", score: "3-0" },
      { team1: "Túnez", team2: "Inglaterra", score: "1-2" },
      { team1: "Bélgica", team2: "Túnez", score: "5-2" },
      { team1: "Inglaterra", team2: "Panamá", score: "6-1" },
      { team1: "Inglaterra", team2: "Bélgica", score: "0-1" },
      { team1: "Panamá", team2: "Túnez", score: "1-2" }
    ]
  },
  H: {
    standings: [
      { id: "colombia", team: "Colombia", flag: "co", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 2 },
      { id: "japon", team: "Japón", flag: "jp", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 4 },
      { id: "senegal", team: "Senegal", flag: "sn", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 4, gc: 4 },
      { id: "polonia", team: "Polonia", flag: "pl", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 5 }
    ],
    matches: [
      { team1: "Colombia", team2: "Japón", score: "1-2" },
      { team1: "Polonia", team2: "Senegal", score: "1-2" },
      { team1: "Japón", team2: "Senegal", score: "2-2" },
      { team1: "Polonia", team2: "Colombia", score: "0-3" },
      { team1: "Japón", team2: "Polonia", score: "0-1" },
      { team1: "Senegal", team2: "Colombia", score: "0-1" }
    ]
  }
};

const bracket = {
  roundOf16: [
    { team1: "Francia", team2: "Argentina", score: "4 - 3" },
    { team1: "Uruguay", team2: "Portugal", score: "2 - 1" },
    { team1: "España", team2: "Rusia", score: "1 (3) - 1 (4)", penalties: "true" },
    { team1: "Croacia", team2: "Dinamarca", score: "1 (3) - 1 (2)", penalties: "true" },
    { team1: "Brasil", team2: "México", score: "2 - 0" },
    { team1: "Bélgica", team2: "Japón", score: "3 - 2" },
    { team1: "Suecia", team2: "Suiza", score: "1 - 0" },
    { team1: "Colombia", team2: "Inglaterra", score: "1 (3) - 1 (4)", penalties: "true" }
  ],
  quarterFinals: [
    { team1: "Uruguay", team2: "Francia", score: "0 - 2" },
    { team1: "Brasil", team2: "Bélgica", score: "1 - 2" },
    { team1: "Suecia", team2: "Inglaterra", score: "0 - 2" },
    { team1: "Rusia", team2: "Croacia", score: "2 (3) - 2 (4)", penalties: "true" }
  ],
  semiFinals: [
    { team1: "Francia", team2: "Bélgica", score: "1 - 0" },
    { team1: "Croacia", team2: "Inglaterra", score: "2 - 1", extraTime: "true" }
  ],
  thirdPlace: { team1: "Bélgica", team2: "Inglaterra", score: "2 - 0" },
  final: { team1: "Francia", team2: "Croacia", score: "4 - 2" }
};

Object.keys(groups).forEach(g => {
    groups[g].matches = groups[g].matches.map(m => {
        return {
            ...m,
            flag1: getFlag(m.team1),
            flag2: getFlag(m.team2),
            goals1: [],
            goals2: []
        }
    });
});

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
    goldenBall: { name: 'Luka Modrić', flag: 'hr' },
    silverBall: { name: 'Eden Hazard', flag: 'be' },
    bronzeBall: { name: 'Antoine Griezmann', flag: 'fr' },
    goldenGlove: { name: 'Thibaut Courtois', flag: 'be' },
    fairPlay: { name: 'España', flag: 'es' }
};

data.stats.topScorers = [
    { name: 'Harry Kane', flag: 'gb-eng', value: '6 goles' },
    { name: 'Antoine Griezmann', flag: 'fr', value: '4 goles' },
    { name: 'Romelu Lukaku', flag: 'be', value: '4 goles' },
    { name: 'Denis Cheryshev', flag: 'ru', value: '4 goles' },
    { name: 'Cristiano Ronaldo', flag: 'pt', value: '4 goles' }
];

data.stats.assists = [
    { name: 'Eden Hazard', flag: 'be', value: '2 asis.' },
    { name: 'Aleksandr Golovin', flag: 'ru', value: '2 asis.' },
    { name: 'Kevin De Bruyne', flag: 'be', value: '2 asis.' },
    { name: 'Thomas Meunier', flag: 'be', value: '2 asis.' },
    { name: 'Antoine Griezmann', flag: 'fr', value: '2 asis.' }
];

data.stats.yellowCards = [
    { name: 'Sebastian Larsson', flag: 'se', value: '3 amarillas' },
    { name: 'Javier Mascherano', flag: 'ar', value: '2 amarillas' },
    { name: 'Nicolas Otamendi', flag: 'ar', value: '2 amarillas' },
    { name: 'Casemiro', flag: 'br', value: '2 amarillas' },
    { name: 'Sime Vrsaljko', flag: 'hr', value: '2 amarillas' }
];

data.stats.redCards = [
    { name: 'Carlos Sánchez', flag: 'co', value: 'Roja Directa (Mano vs Japón)' },
    { name: 'Jérôme Boateng', flag: 'de', value: 'Doble Amarilla (vs Suecia)' },
    { name: 'Igor Smolnikov', flag: 'ru', value: 'Doble Amarilla (vs Uruguay)' },
    { name: 'Michael Lang', flag: 'ch', value: 'Roja Directa (vs Suecia)' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('2018 Groups, Bracket, Stats injected correctly.');
