import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1998.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const dts = {
  francia: "Aimé Jacquet (FRA)",
  brasil: "Mário Zagallo (BRA)",
  escocia: "Craig Brown (SCO)",
  marruecos: "Henri Michel (FRA)",
  noruega: "Egil Olsen (NOR)",
  italia: "Cesare Maldini (ITA)",
  chile: "Nelson Acosta (URU)",
  camerun: "Claude Le Roy (FRA)",
  austria: "Herbert Prohaska (AUT)",
  sudafrica: "Philippe Troussier (FRA)",
  arabia_saudita: "Carlos Alberto Parreira (BRA)",
  dinamarca: "Bo Johansson (SWE)",
  espana: "Javier Clemente (ESP)",
  nigeria: "Bora Milutinović (SCG)",
  paraguay: "Paulo César Carpegiani (BRA)",
  bulgaria: "Hristo Bonev (BUL)",
  paises_bajos: "Guus Hiddink (NED)",
  belgica: "Georges Leekens (BEL)",
  corea_del_sur: "Cha Bum-kun (KOR)",
  mexico: "Manuel Lapuente (MEX)",
  alemania: "Berti Vogts (GER)",
  estados_unidos: "Steve Sampson (USA)",
  yugoslavia: "Slobodan Santrač (YUG)",
  iran: "Jalal Talebi (IRN)",
  rumania: "Anghel Iordănescu (ROU)",
  colombia: "Hernán Darío Gómez (COL)",
  inglaterra: "Glenn Hoddle (ENG)",
  tunez: "Henryk Kasperczak (POL)",
  argentina: "Daniel Passarella (ARG)",
  japon: "Takeshi Okada (JPN)",
  jamaica: "René Simões (BRA)",
  croacia: "Miroslav Blažević (CRO)"
};

let count = 0;
data.participants.forEach(p => {
    if (dts[p.id]) {
        p.dt = dts[p.id];
        count++;
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log(`Inyectados ${count} DTs a Francia 1998.`);
