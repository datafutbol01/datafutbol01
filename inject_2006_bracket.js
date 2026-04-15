import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2006.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const getFlag = (name) => {
    const p = data.participants.find(x => x.name === name);
    return p ? p.flag : '';
};

const bracket = {
  roundOf16: [
    { team1: "Alemania", team2: "Suecia", score: "2 - 0" },
    { team1: "Argentina", team2: "México", score: "2 - 1", extraTime: true },
    { team1: "Italia", team2: "Australia", score: "1 - 0" },
    { team1: "Suiza", team2: "Ucrania", score: "0 (0) - 0 (3)", penalties: true },
    { team1: "Inglaterra", team2: "Ecuador", score: "1 - 0" },
    { team1: "Portugal", team2: "Países Bajos", score: "1 - 0" },
    { team1: "Brasil", team2: "Ghana", score: "3 - 0" },
    { team1: "España", team2: "Francia", score: "1 - 3" }
  ],
  quarterFinals: [
    { team1: "Alemania", team2: "Argentina", score: "1 (4) - 1 (2)", penalties: true },
    { team1: "Italia", team2: "Ucrania", score: "3 - 0" },
    { team1: "Inglaterra", team2: "Portugal", score: "0 (1) - 0 (3)", penalties: true },
    { team1: "Brasil", team2: "Francia", score: "0 - 1" }
  ],
  semiFinals: [
    { team1: "Alemania", team2: "Italia", score: "0 - 2", extraTime: true },
    { team1: "Portugal", team2: "Francia", score: "0 - 1" }
  ],
  thirdPlace: { team1: "Alemania", team2: "Portugal", score: "3 - 1" },
  final: { team1: "Italia", team2: "Francia", score: "1 (5) - 1 (3)", penalties: true }
};

const processBracket = (br) => {
    Object.keys(br).forEach(stage => {
        if (Array.isArray(br[stage])) {
            br[stage] = br[stage].map(m => ({ ...m, flag1: getFlag(m.team1), flag2: getFlag(m.team2) }));
        } else {
            br[stage] = { ...br[stage], flag1: getFlag(br[stage].team1), flag2: getFlag(br[stage].team2) };
        }
    });
    return br;
};

data.bracket = processBracket(bracket);

data.stats.awards = {
    goldenBall: { name: 'Zinedine Zidane', flag: 'fr' },
    silverBall: { name: 'Fabio Cannavaro', flag: 'it' },
    bronzeBall: { name: 'Andrea Pirlo', flag: 'it' },
    goldenGlove: { name: 'Gianluigi Buffon', flag: 'it' },
    fairPlay: { name: 'Brasil / España', flag: 'br' }
};

data.stats.topScorers = [
    { name: 'Miroslav Klose', flag: 'de', value: '5 goles' },
    { name: 'Hernán Crespo', flag: 'ar', value: '3 goles' },
    { name: 'Ronaldo', flag: 'br', value: '3 goles' },
    { name: 'Zinedine Zidane', flag: 'fr', value: '3 goles' },
    { name: 'Thierry Henry', flag: 'fr', value: '3 goles' }
];

data.stats.assists = [
    { name: 'Francesco Totti', flag: 'it', value: '4 asis.' },
    { name: 'J. R. Riquelme', flag: 'ar', value: '3 asis.' },
    { name: 'B. Schweinsteiger', flag: 'de', value: '3 asis.' },
    { name: 'Andrea Pirlo', flag: 'it', value: '3 asis.' },
    { name: 'Luís Figo', flag: 'pt', value: '3 asis.' }
];

data.stats.yellowCards = [
    { name: 'Costinha', flag: 'pt', value: '3 amarillas' },
    { name: 'Deco', flag: 'pt', value: '3 amarillas' },
    { name: 'K. Boulahrouz', flag: 'nl', value: '3 amarillas' },
    { name: 'Asamoah Gyan', flag: 'gh', value: '3 amarillas' },
    { name: 'Maniche', flag: 'pt', value: '2 amarillas' }
];

data.stats.redCards = [
    { name: 'Zinedine Zidane', flag: 'fr', value: 'Roja (Cabezazo a Materazzi)' },
    { name: 'Wayne Rooney', flag: 'gb-eng', value: 'Roja (Pisotón a Carvalho)' },
    { name: 'Leandro Cufré', flag: 'ar', value: 'Roja (Pelea post-partido)' },
    { name: 'Deco', flag: 'pt', value: 'Doble Amarilla (Batalla Núremberg)' },
    { name: 'Costinha', flag: 'pt', value: 'Doble Amarilla (Batalla Núremberg)' }
];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Bracket 2006 y Stats inyectadas.');
