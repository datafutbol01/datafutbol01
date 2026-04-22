import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1994.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const dts = {
  estados_unidos: "Bora Milutinović (SCG)",
  suiza: "Roy Hodgson (ENG)",
  colombia: "Francisco Maturana (COL)",
  rumania: "Anghel Iordănescu (ROU)",
  brasil: "Carlos Alberto Parreira (BRA)",
  rusia: "Pavel Sadyrin (RUS)",
  camerun: "Henri Michel (FRA)",
  suecia: "Tommy Svensson (SWE)",
  alemania: "Berti Vogts (GER)",
  bolivia: "Xabier Azkargorta (ESP)",
  espana: "Javier Clemente (ESP)",
  corea_del_sur: "Kim Ho (KOR)",
  argentina: "Alfio Basile (ARG)",
  grecia: "Alketas Panagoulias (GRE)",
  nigeria: "Clemens Westerhof (NED)",
  bulgaria: "Dimitar Penev (BUL)",
  italia: "Arrigo Sacchi (ITA)",
  irlanda: "Jack Charlton (ENG)",
  noruega: "Egil Olsen (NOR)",
  mexico: "Miguel Mejía Barón (MEX)",
  belgica: "Paul Van Himst (BEL)",
  marruecos: "Abdellah Blinda (MAR)",
  paises_bajos: "Dick Advocaat (NED)",
  arabia_saudita: "Jorge Solari (ARG)"
};

let count = 0;
data.participants.forEach(p => {
    if (dts[p.id]) {
        p.dt = dts[p.id];
        count++;
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log(`Injected ${count} DTs for 1994.`);
