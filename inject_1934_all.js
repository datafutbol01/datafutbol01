import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1934.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const bracket = {
  roundOf16: [
    { team1: "Italia", team2: "Estados Unidos", score: "7 - 1" },
    { team1: "España", team2: "Brasil", score: "3 - 1" },
    { team1: "Austria", team2: "Francia", score: "3 - 2", extraTime: "true" },
    { team1: "Hungría", team2: "Egipto", score: "4 - 2" },
    { team1: "Checoslovaquia", team2: "Rumania", score: "2 - 1" },
    { team1: "Suiza", team2: "Países Bajos", score: "3 - 2" },
    { team1: "Alemania", team2: "Bélgica", score: "5 - 2" },
    { team1: "Suecia", team2: "Argentina", score: "3 - 2" }
  ],
  quarterFinals: [
    { team1: "Italia", team2: "España", score: "1 - 0", notes: "Desempate (Original: 1-1, con violencia)" },
    { team1: "Austria", team2: "Hungría", score: "2 - 1" },
    { team1: "Checoslovaquia", team2: "Suiza", score: "3 - 2" },
    { team1: "Alemania", team2: "Suecia", score: "2 - 1" }
  ],
  semiFinals: [
    { team1: "Italia", team2: "Austria", score: "1 - 0" },
    { team1: "Checoslovaquia", team2: "Alemania", score: "3 - 1" }
  ],
  thirdPlace: { team1: "Alemania", team2: "Austria", score: "3 - 2" },
  final: { team1: "Italia", team2: "Checoslovaquia", score: "2 - 1", extraTime: "true", notes: "Vencer o morir" }
};

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

data.groups = {}; // No group stage
data.bracket = bracket;

data.stats.awards = {
    goldenBall: { name: 'Giuseppe Meazza', flag: 'it' },
    silverBall: { name: 'Matthias Sindelar', flag: 'at' },
    bronzeBall: { name: 'Oldřich Nejedlý', flag: 'cz' }
};

data.stats.topScorers = [
    { name: 'Oldřich Nejedlý', flag: 'cz', value: '5 goles' },
    { name: 'Edmund Conen', flag: 'de', value: '4 goles' },
    { name: 'Angelo Schiavio', flag: 'it', value: '4 goles' },
    { name: 'Raimundo Orsi', flag: 'it', value: '3 goles' },
    { name: 'Leopold Kielholz', flag: 'ch', value: '3 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1934 Bracket, Stats injected correctly.');
