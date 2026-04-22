import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2006.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const dts = {
  "alemania": "Jürgen Klinsmann",
  "costa_rica": "Alexandre Guimarães",
  "polonia": "Paweł Janas",
  "ecuador": "Luis Fernando Suárez",
  "inglaterra": "Sven-Göran Eriksson",
  "paraguay": "Aníbal Ruiz",
  "trinidad_y_tobago": "Leo Beenhakker",
  "suecia": "Lars Lagerbäck",
  "argentina": "José Pékerman",
  "costa_de_marfil": "Henri Michel",
  "serbia_y_montenegro": "Ilija Petković",
  "paises_bajos": "Marco van Basten",
  "mexico": "Ricardo La Volpe",
  "iran": "Branko Ivanković",
  "angola": "Luís Oliveira Gonçalves",
  "portugal": "Luiz Felipe Scolari",
  "italia": "Marcello Lippi",
  "ghana": "Ratomir Dujković",
  "estados_unidos": "Bruce Arena",
  "republica_checa": "Karel Brückner",
  "brasil": "Carlos Alberto Parreira",
  "croacia": "Zlatko Kranjčar",
  "australia": "Guus Hiddink",
  "japon": "Zico",
  "francia": "Raymond Domenech",
  "suiza": "Köbi Kuhn",
  "corea_del_sur": "Dick Advocaat",
  "togo": "Otto Pfister",
  "espana": "Luis Aragonés",
  "ucrania": "Oleg Blokhin",
  "tunez": "Roger Lemerre",
  "arabia_saudita": "Marcos Paquetá"
};

data.participants.forEach(p => {
    if (dts[p.id]) {
        p.dt = dts[p.id];
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('DTs inyectados correctamente 2006.');
