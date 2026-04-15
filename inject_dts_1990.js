import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1990.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const dts = {
  "italia": "Azeglio Vicini",
  "checoslovaquia": "Jozef Vengloš",
  "austria": "Josef Hickersberger",
  "estados_unidos": "Bob Gansler",
  "camerun": "Valeri Nepomniachi",
  "rumania": "Emerich Jenei",
  "argentina": "Carlos Bilardo",
  "urss": "Valery Lobanovsky",
  "brasil": "Sebastião Lazaroni",
  "costa_rica": "Bora Milutinović",
  "escocia": "Andy Roxburgh",
  "suecia": "Olle Nordin",
  "alemania_federal": "Franz Beckenbauer",
  "yugoslavia": "Ivica Osim",
  "colombia": "Francisco Maturana",
  "emiratos_arabes": "Carlos Alberto Parreira",
  "espana": "Luis Suárez",
  "belgica": "Guy Thys",
  "uruguay": "Óscar Washington Tabárez",
  "corea_del_sur": "Lee Hoe-taik",
  "inglaterra": "Bobby Robson",
  "irlanda": "Jack Charlton",
  "paises_bajos": "Leo Beenhakker",
  "egipto": "Mahmoud El-Gohary"
};

data.participants.forEach(team => {
  if (dts[team.id]) {
    team.dt = dts[team.id];
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("DTs 1990 injected.");
