import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2002.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const bracket = {
  roundOf16: [
    { home: { id: "alemania", flag: "de", name: "Alemania", score: "1" }, away: { id: "paraguay", flag: "py", name: "Paraguay", score: "0" } },
    { home: { id: "mexico", flag: "mx", name: "México", score: "0" }, away: { id: "estados_unidos", flag: "us", name: "EEUU", score: "2" } },
    { home: { id: "espana", flag: "es", name: "España", score: "1 (3)" }, away: { id: "irlanda", flag: "ie", name: "Irlanda", score: "1 (2)" }, penalties: true },
    { home: { id: "corea_del_sur", flag: "kr", name: "Corea", score: "2" }, away: { id: "italia", flag: "it", name: "Italia", score: "1" }, extraTime: true },
    { home: { id: "dinamarca", flag: "dk", name: "Dinamarca", score: "0" }, away: { id: "inglaterra", flag: "gb-eng", name: "Inglaterra", score: "3" } },
    { home: { id: "brasil", flag: "br", name: "Brasil", score: "2" }, away: { id: "belgica", flag: "be", name: "Bélgica", score: "0" } },
    { home: { id: "suecia", flag: "se", name: "Suecia", score: "1" }, away: { id: "senegal", flag: "sn", name: "Senegal", score: "2" }, extraTime: true },
    { home: { id: "japon", flag: "jp", name: "Japón", score: "0" }, away: { id: "turquia", flag: "tr", name: "Turquía", score: "1" } }
  ],
  quarterFinals: [
    { home: { id: "alemania", flag: "de", name: "Alemania", score: "1" }, away: { id: "estados_unidos", flag: "us", name: "EEUU", score: "0" } },
    { home: { id: "espana", flag: "es", name: "España", score: "0 (3)" }, away: { id: "corea_del_sur", flag: "kr", name: "Corea", score: "0 (5)" }, penalties: true },
    { home: { id: "inglaterra", flag: "gb-eng", name: "Inglaterra", score: "1" }, away: { id: "brasil", flag: "br", name: "Brasil", score: "2" } },
    { home: { id: "senegal", flag: "sn", name: "Senegal", score: "0" }, away: { id: "turquia", flag: "tr", name: "Turquía", score: "1" }, extraTime: true }
  ],
  semiFinals: [
    { home: { id: "alemania", flag: "de", name: "Alemania", score: "1" }, away: { id: "corea_del_sur", flag: "kr", name: "Corea", score: "0" } },
    { home: { id: "brasil", flag: "br", name: "Brasil", score: "1" }, away: { id: "turquia", flag: "tr", name: "Turquía", score: "0" } }
  ],
  thirdPlace: { home: { id: "corea_del_sur", flag: "kr", name: "Corea", score: "2" }, away: { id: "turquia", flag: "tr", name: "Turquía", score: "3" } },
  final: { home: { id: "alemania", flag: "de", name: "Alemania", score: "0" }, away: { id: "brasil", flag: "br", name: "Brasil", score: "2" } }
};

if (!data.stats) data.stats = {};
data.stats.awards = {
    goldenBall: { name: 'Oliver Kahn', flag: 'de' },
    silverBall: { name: 'Ronaldo', flag: 'br' },
    bronzeBall: { name: 'Hong Myung-bo', flag: 'kr' },
    goldenGlove: { name: 'Oliver Kahn', flag: 'de' },
    fairPlay: { name: 'Bélgica', flag: 'be' }
};

data.stats.topScorers = [
    { name: 'Ronaldo', flag: 'br', value: '8 goles' },
    { name: 'M. Klose', flag: 'de', value: '5 goles' },
    { name: 'Rivaldo', flag: 'br', value: '5 goles' },
    { name: 'J. Tomasson', flag: 'dk', value: '4 goles' },
    { name: 'C. Vieri', flag: 'it', value: '4 goles' }
];

data.stats.assists = [
    { name: 'M. Ballack', flag: 'de', value: '4 asis.' },
    { name: 'B. Schneider', flag: 'de', value: '3 asis.' },
    { name: 'C. Ziege', flag: 'de', value: '3 asis.' },
    { name: 'Ronaldinho', flag: 'br', value: '3 asis.' },
    { name: 'F. Arce', flag: 'py', value: '3 asis.' }
];

data.stats.yellowCards = [
    { name: 'E. Belözoğlu', flag: 'tr', value: '3 amarillas' },
    { name: 'H. Şükür', flag: 'tr', value: '2 amarillas' },
    { name: 'Kim Nam-il', flag: 'kr', value: '2 amarillas' },
    { name: 'Cafú', flag: 'br', value: '2 amarillas' },
    { name: 'F. Totti', flag: 'it', value: '2 amarillas' }
];

data.stats.redCards = [
    { name: 'Ronaldinho', flag: 'br', value: 'Roja directa' },
    { name: 'F. Totti', flag: 'it', value: 'Doble amarilla (Octavos)' },
    { name: 'Joao Pinto', flag: 'pt', value: 'Roja directa (Golpeó árbitro)' },
    { name: 'Thierry Henry', flag: 'fr', value: 'Roja directa' },
    { name: 'C. Caniggia', flag: 'ar', value: 'Roja (Desde el banco)' }
];

data.bracket = bracket;
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Bracket y estadísticas de 2002 inyectadas exitosamente');
