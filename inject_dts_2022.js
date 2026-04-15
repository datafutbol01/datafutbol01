import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2022.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const dts = {
  "qatar": "Félix Sánchez",
  "ecuador": "Gustavo Alfaro",
  "senegal": "Aliou Cissé",
  "paises_bajos": "Louis van Gaal",
  "inglaterra": "Gareth Southgate",
  "iran": "Carlos Queiroz",
  "estados_unidos": "Gregg Berhalter",
  "gales": "Rob Page",
  "argentina": "Lionel Scaloni",
  "arabia_saudita": "Hervé Renard",
  "mexico": "Gerardo Martino",
  "polonia": "Czesław Michniewicz",
  "francia": "Didier Deschamps",
  "australia": "Graham Arnold",
  "dinamarca": "Kasper Hjulmand",
  "tunez": "Jalel Kadri",
  "espana": "Luis Enrique",
  "costa_rica": "Luis Fernando Suárez",
  "alemania": "Hansi Flick",
  "japon": "Hajime Moriyasu",
  "belgica": "Roberto Martínez",
  "canada": "John Herdman",
  "marruecos": "Walid Regragui",
  "croacia": "Zlatko Dalić",
  "brasil": "Tite",
  "serbia": "Dragan Stojković",
  "suiza": "Murat Yakin",
  "camerun": "Rigobert Song",
  "portugal": "Fernando Santos",
  "ghana": "Otto Addo",
  "uruguay": "Diego Alonso",
  "corea_del_sur": "Paulo Bento"
};

data.participants.forEach(team => {
  if (dts[team.id]) {
    team.dt = dts[team.id];
  }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("DTs injected successfully into 2022.json.");
