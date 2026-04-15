import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1998.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.groups = {
  A: {
    standings: [
      { id: "brasil", team: "Brasil", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 6, gc: 3, dif: 3 },
      { id: "noruega", team: "Noruega", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 5, gc: 4, dif: 1 },
      { id: "marruecos", team: "Marruecos", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 5, dif: 0 },
      { id: "escocia", team: "Escocia", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 6, dif: -4 }
    ],
    matches: [
      { team1: "Brasil", flag1: "br", team2: "Escocia", flag2: "gb-sct", score: "2-1", goals1: ["Sampaio 4'", "Boyd 73' (a.g.)"], goals2: ["Collins 38' (p)"] },
      { team1: "Marruecos", flag1: "ma", team2: "Noruega", flag2: "no", score: "2-2", goals1: ["Hadji 38'", "Hadda 59'"], goals2: ["Chippo 45+1' (a.g.)", "Eggen 60'"] },
      { team1: "Escocia", flag1: "gb-sct", team2: "Noruega", flag2: "no", score: "1-1", goals1: ["Burley 66'"], goals2: ["H. Flo 46'"] },
      { team1: "Brasil", flag1: "br", team2: "Marruecos", flag2: "ma", score: "3-0", goals1: ["Ronaldo 9'", "Rivaldo 45+2'", "Bebeto 50'"], goals2: [] },
      { team1: "Brasil", flag1: "br", team2: "Noruega", flag2: "no", score: "1-2", goals1: ["Bebeto 78'"], goals2: ["T.A. Flo 83'", "Rekdal 89' (p)"] },
      { team1: "Escocia", flag1: "gb-sct", team2: "Marruecos", flag2: "ma", score: "0-3", goals1: [], goals2: ["Bassir 22', 85'", "Hadda 46'"] }
    ]
  },
  B: {
    standings: [
      { id: "italia", team: "Italia", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 7, gc: 3, dif: 4 },
      { id: "chile", team: "Chile", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 4, gc: 4, dif: 0 },
      { id: "austria", team: "Austria", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 3, gc: 4, dif: -1 },
      { id: "camerun", team: "Camerún", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 2, gc: 5, dif: -3 }
    ],
    matches: [
      { team1: "Italia", flag1: "it", team2: "Chile", flag2: "cl", score: "2-2", goals1: ["Vieri 10'", "R. Baggio 85' (p)"], goals2: ["Salas 45', 49'"] },
      { team1: "Camerún", flag1: "cm", team2: "Austria", flag2: "at", score: "1-1", goals1: ["Njanka 78'"], goals2: ["Polster 90'"] },
      { team1: "Chile", flag1: "cl", team2: "Austria", flag2: "at", score: "1-1", goals1: ["Salas 70'"], goals2: ["Vastic 90'"] },
      { team1: "Italia", flag1: "it", team2: "Camerún", flag2: "cm", score: "3-0", goals1: ["Di Biagio 7'", "Vieri 75', 89'"], goals2: [] },
      { team1: "Italia", flag1: "it", team2: "Austria", flag2: "at", score: "2-1", goals1: ["Vieri 49'", "R. Baggio 89'"], goals2: ["Herzog 90' (p)"] },
      { team1: "Chile", flag1: "cl", team2: "Camerún", flag2: "cm", score: "1-1", goals1: ["Sierra 20'"], goals2: ["Mboma 55'"] }
    ]
  },
  C: {
    standings: [
      { id: "francia", team: "Francia", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 9, gc: 1, dif: 8 },
      { id: "dinamarca", team: "Dinamarca", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 3, gc: 3, dif: 0 },
      { id: "sudafrica", team: "Sudáfrica", pts: 2, pj: 3, pg: 0, pe: 2, pp: 1, gf: 3, gc: 6, dif: -3 },
      { id: "arabia_saudita", team: "Arabia Saudita", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 7, dif: -5 }
    ],
    matches: [
      { team1: "Arabia Saudita", flag1: "sa", team2: "Dinamarca", flag2: "dk", score: "0-1", goals1: [], goals2: ["Rieper 68'"] },
      { team1: "Francia", flag1: "fr", team2: "Sudáfrica", flag2: "za", score: "3-0", goals1: ["Dugarry 34'", "Issa 77' (a.g.)", "Henry 90'"], goals2: [] },
      { team1: "Sudáfrica", flag1: "za", team2: "Dinamarca", flag2: "dk", score: "1-1", goals1: ["McCarthy 52'"], goals2: ["Nielsen 13'"] },
      { team1: "Francia", flag1: "fr", team2: "Arabia Saudita", flag2: "sa", score: "4-0", goals1: ["Henry 36', 77'", "Trezeguet 68'", "Lizarazu 85'"], goals2: [] },
      { team1: "Francia", flag1: "fr", team2: "Dinamarca", flag2: "dk", score: "2-1", goals1: ["Djorkaeff 12' (p)", "Petit 56'"], goals2: ["M. Laudrup 42' (p)"] },
      { team1: "Sudáfrica", flag1: "za", team2: "Arabia Saudita", flag2: "sa", score: "2-2", goals1: ["Bartlett 19', 90+4' (p)"], goals2: ["Al-Jaber 45' (p)", "Al-Thunayan 74' (p)"] }
    ]
  },
  D: {
    standings: [
      { id: "nigeria", team: "Nigeria", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 5, dif: 0 },
      { id: "paraguay", team: "Paraguay", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 3, gc: 1, dif: 2 },
      { id: "espana", team: "España", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 8, gc: 4, dif: 4 },
      { id: "bulgaria", team: "Bulgaria", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 7, dif: -6 }
    ],
    matches: [
      { team1: "Paraguay", flag1: "py", team2: "Bulgaria", flag2: "bg", score: "0-0", goals1: [], goals2: [] },
      { team1: "España", flag1: "es", team2: "Nigeria", flag2: "ng", score: "2-3", goals1: ["Hierro 21'", "Raúl 47'"], goals2: ["Adepoju 25'", "Zubizarreta 73' (a.g.)", "Oliseh 78'"] },
      { team1: "Nigeria", flag1: "ng", team2: "Bulgaria", flag2: "bg", score: "1-0", goals1: ["Ikpeba 28'"], goals2: [] },
      { team1: "España", flag1: "es", team2: "Paraguay", flag2: "py", score: "0-0", goals1: [], goals2: [] },
      { team1: "Nigeria", flag1: "ng", team2: "Paraguay", flag2: "py", score: "1-3", goals1: ["Oruma 11'"], goals2: ["Ayala 1'", "Benítez 59'", "Cardozo 86'"] },
      { team1: "España", flag1: "es", team2: "Bulgaria", flag2: "bg", score: "6-1", goals1: ["Hierro 6' (p)", "Luis Enrique 19'", "Morientes 55', 81'", "Bachev 88' (a.g.)", "Kiko 90'"], goals2: ["Kostadinov 58'"] }
    ]
  },
  E: {
    standings: [
      { id: "paises_bajos", team: "Países Bajos", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 7, gc: 2, dif: 5 },
      { id: "mexico", team: "México", pts: 5, pj: 3, pg: 1, pe: 2, pp: 0, gf: 5, gc: 5, dif: 0 },
      { id: "belgica", team: "Bélgica", pts: 3, pj: 3, pg: 0, pe: 3, pp: 0, gf: 3, gc: 3, dif: 0 },
      { id: "corea_del_sur", team: "Corea del Sur", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 2, gc: 9, dif: -7 }
    ],
    matches: [
      { team1: "Corea del Sur", flag1: "kr", team2: "México", flag2: "mx", score: "1-3", goals1: ["Ha Seok-ju 28'"], goals2: ["Peláez 51'", "Hernández 74', 84'"] },
      { team1: "Países Bajos", flag1: "nl", team2: "Bélgica", flag2: "be", score: "0-0", goals1: [], goals2: [] },
      { team1: "Bélgica", flag1: "be", team2: "México", flag2: "mx", score: "2-2", goals1: ["Wilmots 43', 47'"], goals2: ["García Aspe 55' (p)", "Blanco 62'"] },
      { team1: "Países Bajos", flag1: "nl", team2: "Corea del Sur", flag2: "kr", score: "5-0", goals1: ["Cocu 38'", "Overmars 42'", "Bergkamp 71'", "van Hooijdonk 80'", "R. de Boer 83'"], goals2: [] },
      { team1: "Países Bajos", flag1: "nl", team2: "México", flag2: "mx", score: "2-2", goals1: ["Cocu 4'", "R. de Boer 18'"], goals2: ["Peláez 75'", "Hernández 90'"] },
      { team1: "Bélgica", flag1: "be", team2: "Corea del Sur", flag2: "kr", score: "1-1", goals1: ["Nilis 7'"], goals2: ["Yoo Sang-chul 71'"] }
    ]
  },
  F: {
    standings: [
      { id: "alemania", team: "Alemania", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 2, dif: 4 },
      { id: "yugoslavia", team: "Yugoslavia", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 2, dif: 2 },
      { id: "iran", team: "Irán", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 2, gc: 4, dif: -2 },
      { id: "estados_unidos", team: "Estados Unidos", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 5, dif: -4 }
    ],
    matches: [
      { team1: "Yugoslavia", flag1: "yu", team2: "Irán", flag2: "ir", score: "1-0", goals1: ["Mihajlović 72'"], goals2: [] },
      { team1: "Alemania", flag1: "de", team2: "Estados Unidos", flag2: "us", score: "2-0", goals1: ["Möller 8'", "Klinsmann 64'"], goals2: [] },
      { team1: "Alemania", flag1: "de", team2: "Yugoslavia", flag2: "yu", score: "2-2", goals1: ["Mihajlović 74' (a.g.)", "Bierhoff 81'"], goals2: ["Mijatović 13'", "Stojković 54'"] },
      { team1: "Estados Unidos", flag1: "us", team2: "Irán", flag2: "ir", score: "1-2", goals1: ["McBride 87'"], goals2: ["Estili 40'", "Mahdavikia 84'"] },
      { team1: "Alemania", flag1: "de", team2: "Irán", flag2: "ir", score: "2-0", goals1: ["Bierhoff 50'", "Klinsmann 57'"], goals2: [] },
      { team1: "Estados Unidos", flag1: "us", team2: "Yugoslavia", flag2: "yu", score: "0-1", goals1: [], goals2: ["Komljenović 4'"] }
    ]
  },
  G: {
    standings: [
      { id: "rumania", team: "Rumania", pts: 7, pj: 3, pg: 2, pe: 1, pp: 0, gf: 4, gc: 2, dif: 2 },
      { id: "inglaterra", team: "Inglaterra", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 2, dif: 3 },
      { id: "colombia", team: "Colombia", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 1, gc: 3, dif: -2 },
      { id: "tunez", team: "Túnez", pts: 1, pj: 3, pg: 0, pe: 1, pp: 2, gf: 1, gc: 4, dif: -3 }
    ],
    matches: [
      { team1: "Inglaterra", flag1: "gb-eng", team2: "Túnez", flag2: "tn", score: "2-0", goals1: ["Shearer 43'", "Scholes 89'"], goals2: [] },
      { team1: "Rumania", flag1: "ro", team2: "Colombia", flag2: "co", score: "1-0", goals1: ["Ilie 45'"], goals2: [] },
      { team1: "Colombia", flag1: "co", team2: "Túnez", flag2: "tn", score: "1-0", goals1: ["Preciado 83'"], goals2: [] },
      { team1: "Rumania", flag1: "ro", team2: "Inglaterra", flag2: "gb-eng", score: "2-1", goals1: ["Moldovan 47'", "Petrescu 90'"], goals2: ["Owen 79'"] },
      { team1: "Colombia", flag1: "co", team2: "Inglaterra", flag2: "gb-eng", score: "0-2", goals1: [], goals2: ["Anderton 20'", "Beckham 29'"] },
      { team1: "Rumania", flag1: "ro", team2: "Túnez", flag2: "tn", score: "1-1", goals1: ["Moldovan 72'"], goals2: ["Souayah 10' (p)"] }
    ]
  },
  H: {
    standings: [
      { id: "argentina", team: "Argentina", pts: 9, pj: 3, pg: 3, pe: 0, pp: 0, gf: 7, gc: 0, dif: 7 },
      { id: "croacia", team: "Croacia", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 2, dif: 2 },
      { id: "jamaica", team: "Jamaica", pts: 3, pj: 3, pg: 1, pe: 0, pp: 2, gf: 3, gc: 9, dif: -6 },
      { id: "japon", team: "Japón", pts: 0, pj: 3, pg: 0, pe: 0, pp: 3, gf: 1, gc: 4, dif: -3 }
    ],
    matches: [
      { team1: "Argentina", flag1: "ar", team2: "Japón", flag2: "jp", score: "1-0", goals1: ["Batistuta 28'"], goals2: [] },
      { team1: "Jamaica", flag1: "jm", team2: "Croacia", flag2: "hr", score: "1-3", goals1: ["Earle 45'"], goals2: ["Stanić 27'", "Prosinečki 53'", "Šuker 69'"] },
      { team1: "Japón", flag1: "jp", team2: "Croacia", flag2: "hr", score: "0-1", goals1: [], goals2: ["Šuker 77'"] },
      { team1: "Argentina", flag1: "ar", team2: "Jamaica", flag2: "jm", score: "5-0", goals1: ["Ortega 31', 55'", "Batistuta 72', 80', 82' (p)"], goals2: [] },
      { team1: "Argentina", flag1: "ar", team2: "Croacia", flag2: "hr", score: "1-0", goals1: ["Pineda 36'"], goals2: [] },
      { team1: "Japón", flag1: "jp", team2: "Jamaica", flag2: "jm", score: "1-2", goals1: ["Nakayama 74'"], goals2: ["Whitmore 39', 54'"] }
    ]
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Fase de grupos 1998 inyectada exitosamente.");
