import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2002.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const dts = {
  "francia": "Roger Lemerre",
  "senegal": "Bruno Metsu",
  "uruguay": "Víctor Púa",
  "dinamarca": "Morten Olsen",
  "espana": "José Antonio Camacho",
  "eslovenia": "Srečko Katanec",
  "paraguay": "Cesare Maldini",
  "sudafrica": "Jomo Sono",
  "brasil": "Luiz Felipe Scolari",
  "turquia": "Şenol Güneş",
  "china": "Bora Milutinović",
  "costa_rica": "Alexandre Guimarães",
  "corea_del_sur": "Guus Hiddink",
  "polonia": "Jerzy Engel",
  "estados_unidos": "Bruce Arena",
  "portugal": "António Oliveira",
  "alemania": "Rudi Völler",
  "arabia_saudita": "Nasser Al-Johar",
  "irlanda": "Mick McCarthy",
  "camerun": "Winfried Schäfer",
  "argentina": "Marcelo Bielsa",
  "nigeria": "Festus Onigbinde",
  "inglaterra": "Sven-Göran Eriksson",
  "suecia": "Lars Lagerbäck / Tommy Söderberg",
  "italia": "Giovanni Trapattoni",
  "ecuador": "Hernán Darío Gómez",
  "croacia": "Mirko Jozić",
  "mexico": "Javier Aguirre",
  "japon": "Philippe Troussier",
  "belgica": "Robert Waseige",
  "rusia": "Oleg Romantsev",
  "tunez": "Ammar Souayah"
};

data.participants.forEach(p => {
    if (dts[p.id]) {
        p.dt = dts[p.id];
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('DTs inyectados correctamente.');
