const fs = require('fs');

const dataPath = 'C:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia/aberdeen.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const historialesAberdeen = [
  { rival: "Celtic", pj: 345, victorias_a: 73, empates: 83, victorias_b: 189 },
  { rival: "Rangers", pj: 346, victorias_a: 86, empates: 86, victorias_b: 174 },
  { rival: "Heart of Midlothian", pj: 355, victorias_a: 141, empates: 90, victorias_b: 124 },
  { rival: "Hibernian", pj: 338, victorias_a: 142, empates: 81, victorias_b: 115 },
  { rival: "Dundee", pj: 251, victorias_a: 126, empates: 63, victorias_b: 62 },
  { rival: "Dundee United", pj: 258, victorias_a: 104, empates: 68, victorias_b: 86 },
  { rival: "Motherwell", pj: 281, victorias_a: 128, empates: 76, victorias_b: 77 },
  { rival: "Kilmarnock", pj: 264, victorias_a: 127, empates: 64, victorias_b: 73 },
  { rival: "St Mirren", pj: 229, victorias_a: 122, empates: 55, victorias_b: 52 },
  { rival: "St Johnstone", pj: 167, victorias_a: 78, empates: 41, victorias_b: 48 },
  { rival: "Ross County", pj: 42, victorias_a: 21, empates: 8, victorias_b: 13 }
];

data.historial = historialesAberdeen;

fs.writeFileSync(dataPath, JSON.stringify(data, null, 4), 'utf8');
console.log("Historial inyectado correctamente en aberdeen.json");
