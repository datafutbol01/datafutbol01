const fs = require('fs');
const fileMaster = 'c:/Users/gonza/futbolhistoria/clubes/boca-juniors.json';
const fileApp = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/boca-juniors.json';
const data = JSON.parse(fs.readFileSync(fileMaster, 'utf8'));

data.presencias_historicas = [
  { "nombre": "Roberto Mouzo", "partidos": 426, "periodo": "1971-1984" },
  { "nombre": "Hugo Gatti", "partidos": 417, "periodo": "1976-1988" },
  { "nombre": "Silvio Marzolini", "partidos": 408, "periodo": "1960-1972" },
  { "nombre": "Martín Palermo", "partidos": 404, "periodo": "1997-2011" },
  { "nombre": "Carlos N. Montoya", "partidos": 400, "periodo": "1988-1996" }
];

fs.writeFileSync(fileMaster, JSON.stringify(data, null, 2));
fs.copyFileSync(fileMaster, fileApp);
console.log('presencias_historicas agregado correctamente');
