import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1938.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const bracket = {
  roundOf16: [
    { team1: "Francia", team2: "Bélgica", score: "3 - 1" },
    { team1: "Italia", team2: "Noruega", score: "2 - 1", extraTime: "true" },
    { team1: "Brasil", team2: "Polonia", score: "6 - 5", extraTime: "true", notes: "Leônidas vs Wilimowski" }, // Epic 11-goal match
    { team1: "Checoslovaquia", team2: "Países Bajos", score: "3 - 0", extraTime: "true" },
    { team1: "Hungría", team2: "Indias Orientales Neerlandesas", score: "6 - 0" },
    { team1: "Suiza", team2: "Alemania", score: "4 - 2", notes: "Desempate (Original: 1-1)" },
    { team1: "Suecia", team2: "Austria", score: "W/O", notes: "Austria se retiró (Anschluss)" }, // Walkover
    { team1: "Cuba", team2: "Rumania", score: "2 - 1", notes: "Desempate (Original: 3-3)" }
  ],
  quarterFinals: [
    { team1: "Italia", team2: "Francia", score: "3 - 1" }, // Mussolini's black shirts
    { team1: "Brasil", team2: "Checoslovaquia", score: "2 - 1", notes: "Batalla de Burdeos (Desempate, orig 1-1)" },
    { team1: "Hungría", team2: "Suiza", score: "2 - 0" },
    { team1: "Suecia", team2: "Cuba", score: "8 - 0" }
  ],
  semiFinals: [
    { team1: "Italia", team2: "Brasil", score: "2 - 1", notes: "Leônidas descansó (arrogancia técnica)" },
    { team1: "Hungría", team2: "Suecia", score: "5 - 1" }
  ],
  thirdPlace: { team1: "Brasil", team2: "Suecia", score: "4 - 2" },
  final: { team1: "Italia", team2: "Hungría", score: "4 - 2", notes: "El Bicampeonato de Pozzo" }
};

Object.keys(bracket).forEach(stage => {
    if (Array.isArray(bracket[stage])) {
        bracket[stage] = bracket[stage].map(m => {
            let t2flag = m.team2 === "Austria" ? "at" : getFlag(m.team2);
            return { ...m, flag1: getFlag(m.team1), flag2: t2flag };
        });
    } else {
        bracket[stage] = { ...bracket[stage], flag1: getFlag(bracket[stage].team1), flag2: getFlag(bracket[stage].team2) };
    }
});

data.groups = {}; // NO GROUPS IN 1938
data.bracket = bracket;

data.stats.awards = {
    goldenBall: { name: 'Leônidas', flag: 'br' },
    silverBall: { name: 'Silvio Piola', flag: 'it' },
    bronzeBall: { name: 'György Sárosi', flag: 'hu' }
};

data.stats.topScorers = [
    { name: 'Leônidas', flag: 'br', value: '7 goles' },
    { name: 'György Sárosi', flag: 'hu', value: '5 goles' },
    { name: 'Gyula Zsengellér', flag: 'hu', value: '5 goles' },
    { name: 'Silvio Piola', flag: 'it', value: '5 goles' },
    { name: 'Ernest Wilimowski', flag: 'pl', value: '4 goles' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1938 Bracket, Stats injected correctly.');
