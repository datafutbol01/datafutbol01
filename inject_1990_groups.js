import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1990.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.groups = {
  "A": {
    "standings": [
      { "team": "Italia", "flag": "it", "pts": 6, "pj": 3, "pg": 3, "pe": 0, "pp": 0, "gf": 4, "gc": 0 },
      { "team": "Checoslovaquia", "flag": "cs", "pts": 4, "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 6, "gc": 3 },
      { "team": "Austria", "flag": "at", "pts": 2, "pj": 3, "pg": 1, "pe": 0, "pp": 2, "gf": 2, "gc": 3 },
      { "team": "Estados Unidos", "flag": "us", "pts": 0, "pj": 3, "pg": 0, "pe": 0, "pp": 3, "gf": 2, "gc": 8 }
    ],
    "matches": [
      { "team1": "Italia", "flag1": "it", "score": "1-0", "team2": "Austria", "flag2": "at", "goals1": ["Schillaci 78'"], "goals2": [] },
      { "team1": "Estados Unidos", "flag1": "us", "score": "1-5", "team2": "Checoslovaquia", "flag2": "cs", "goals1": ["Caligiuri 60'"], "goals2": ["Skuhravý 25', 78'", "Bílek 39' (p)", "Hašek 50'", "Luhový 90+3'"] },
      { "team1": "Italia", "flag1": "it", "score": "1-0", "team2": "Estados Unidos", "flag2": "us", "goals1": ["Giannini 11'"], "goals2": [] },
      { "team1": "Austria", "flag1": "at", "score": "0-1", "team2": "Checoslovaquia", "flag2": "cs", "goals1": [], "goals2": ["Bílek 31' (p)"] },
      { "team1": "Italia", "flag1": "it", "score": "2-0", "team2": "Checoslovaquia", "flag2": "cs", "goals1": ["Schillaci 9'", "Baggio 78'"], "goals2": [] },
      { "team1": "Austria", "flag1": "at", "score": "2-1", "team2": "Estados Unidos", "flag2": "us", "goals1": ["Ogris 52'", "Rodax 65'"], "goals2": ["Murray 85'"] }
    ]
  },
  "B": {
    "standings": [
      { "team": "Camerún", "flag": "cm", "pts": 4, "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 3, "gc": 5 },
      { "team": "Rumania", "flag": "ro", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 4, "gc": 3 },
      { "team": "Argentina", "flag": "ar", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 3, "gc": 2 },
      { "team": "Unión Soviética", "flag": "su", "pts": 2, "pj": 3, "pg": 1, "pe": 0, "pp": 2, "gf": 4, "gc": 4 }
    ],
    "matches": [
      { "team1": "Argentina", "flag1": "ar", "score": "0-1", "team2": "Camerún", "flag2": "cm", "goals1": [], "goals2": ["Omam-Biyik 67'"] },
      { "team1": "Unión Soviética", "flag1": "su", "score": "0-2", "team2": "Rumania", "flag2": "ro", "goals1": [], "goals2": ["Lăcătuș 41', 57' (p)"] },
      { "team1": "Argentina", "flag1": "ar", "score": "2-0", "team2": "Unión Soviética", "flag2": "su", "goals1": ["Troglio 27'", "Burruchaga 79'"], "goals2": [] },
      { "team1": "Camerún", "flag1": "cm", "score": "2-1", "team2": "Rumania", "flag2": "ro", "goals1": ["Milla 76', 86'"], "goals2": ["Balint 88'"] },
      { "team1": "Argentina", "flag1": "ar", "score": "1-1", "team2": "Rumania", "flag2": "ro", "goals1": ["Monzón 62'"], "goals2": ["Balint 68'"] },
      { "team1": "Camerún", "flag1": "cm", "score": "0-4", "team2": "Unión Soviética", "flag2": "su", "goals1": [], "goals2": ["Protasov 20'", "Zygmantovich 29'", "Zavarov 52'", "Dobrovolski 63'"] }
    ]
  },
  "C": {
    "standings": [
      { "team": "Brasil", "flag": "br", "pts": 6, "pj": 3, "pg": 3, "pe": 0, "pp": 0, "gf": 4, "gc": 1 },
      { "team": "Costa Rica", "flag": "cr", "pts": 4, "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 3, "gc": 2 },
      { "team": "Escocia", "flag": "gb-sct", "pts": 2, "pj": 3, "pg": 1, "pe": 0, "pp": 2, "gf": 2, "gc": 3 },
      { "team": "Suecia", "flag": "se", "pts": 0, "pj": 3, "pg": 0, "pe": 0, "pp": 3, "gf": 3, "gc": 6 }
    ],
    "matches": [
      { "team1": "Brasil", "flag1": "br", "score": "2-1", "team2": "Suecia", "flag2": "se", "goals1": ["Careca 40', 63'"], "goals2": ["Brolin 79'"] },
      { "team1": "Costa Rica", "flag1": "cr", "score": "1-0", "team2": "Escocia", "flag2": "gb-sct", "goals1": ["Cayasso 49'"], "goals2": [] },
      { "team1": "Brasil", "flag1": "br", "score": "1-0", "team2": "Costa Rica", "flag2": "cr", "goals1": ["Müller 33'"], "goals2": [] },
      { "team1": "Suecia", "flag1": "se", "score": "1-2", "team2": "Escocia", "flag2": "gb-sct", "goals1": ["Strömberg 86'"], "goals2": ["McCall 11'", "Johnston 80' (p)"] },
      { "team1": "Brasil", "flag1": "br", "score": "1-0", "team2": "Escocia", "flag2": "gb-sct", "goals1": ["Müller 82'"], "goals2": [] },
      { "team1": "Suecia", "flag1": "se", "score": "1-2", "team2": "Costa Rica", "flag2": "cr", "goals1": ["Ekström 32'"], "goals2": ["Flores 75'", "Medford 87'"] }
    ]
  },
  "D": {
    "standings": [
      { "team": "Alemania Federal", "flag": "de", "pts": 5, "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 10, "gc": 3 },
      { "team": "Yugoslavia", "flag": "yu", "pts": 4, "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 6, "gc": 5 },
      { "team": "Colombia", "flag": "co", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 3, "gc": 2 },
      { "team": "Emiratos Árabes Unidos", "flag": "ae", "pts": 0, "pj": 3, "pg": 0, "pe": 0, "pp": 3, "gf": 2, "gc": 11 }
    ],
    "matches": [
      { "team1": "Emiratos Árabes Unidos", "flag1": "ae", "score": "0-2", "team2": "Colombia", "flag2": "co", "goals1": [], "goals2": ["Redín 50'", "Valderrama 85'"] },
      { "team1": "Alemania Federal", "flag1": "de", "score": "4-1", "team2": "Yugoslavia", "flag2": "yu", "goals1": ["Matthäus 28', 64'", "Klinsmann 39'", "Völler 70'"], "goals2": ["Jozić 55'"] },
      { "team1": "Yugoslavia", "flag1": "yu", "score": "1-0", "team2": "Colombia", "flag2": "co", "goals1": ["Jozić 75'"], "goals2": [] },
      { "team1": "Alemania Federal", "flag1": "de", "score": "5-1", "team2": "Emiratos Árabes Unidos", "flag2": "ae", "goals1": ["Völler 35', 75'", "Klinsmann 37'", "Matthäus 47'", "Bein 58'"], "goals2": ["Ismaïl 46'"] },
      { "team1": "Alemania Federal", "flag1": "de", "score": "1-1", "team2": "Colombia", "flag2": "co", "goals1": ["Littbarski 88'"], "goals2": ["Rincón 90+3'"] },
      { "team1": "Yugoslavia", "flag1": "yu", "score": "4-1", "team2": "Emiratos Árabes Unidos", "flag2": "ae", "goals1": ["Sušić 5'", "Pančev 9', 46'", "Prosinečki 90+3'"], "goals2": ["Thani 22'"] }
    ]
  },
  "E": {
    "standings": [
      { "team": "España", "flag": "es", "pts": 5, "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 5, "gc": 2 },
      { "team": "Bélgica", "flag": "be", "pts": 4, "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 6, "gc": 3 },
      { "team": "Uruguay", "flag": "uy", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 2, "gc": 3 },
      { "team": "Corea del Sur", "flag": "kr", "pts": 0, "pj": 3, "pg": 0, "pe": 0, "pp": 3, "gf": 1, "gc": 6 }
    ],
    "matches": [
      { "team1": "Bélgica", "flag1": "be", "score": "2-0", "team2": "Corea del Sur", "flag2": "kr", "goals1": ["Degryse 53'", "De Wolf 64'"], "goals2": [] },
      { "team1": "Uruguay", "flag1": "uy", "score": "0-0", "team2": "España", "flag2": "es", "goals1": [], "goals2": [] },
      { "team1": "Bélgica", "flag1": "be", "score": "3-1", "team2": "Uruguay", "flag2": "uy", "goals1": ["Clijsters 15'", "Scifo 24'", "Ceulemans 47'"], "goals2": ["Bengoechea 73'"] },
      { "team1": "Corea del Sur", "flag1": "kr", "score": "1-3", "team2": "España", "flag2": "es", "goals1": ["Hwangbo Kwan 43'"], "goals2": ["Míchel 23', 61', 81'"] },
      { "team1": "Bélgica", "flag1": "be", "score": "1-2", "team2": "España", "flag2": "es", "goals1": ["Vervoort 29'"], "goals2": ["Míchel 26' (p)", "Górriz 38'"] },
      { "team1": "Corea del Sur", "flag1": "kr", "score": "0-1", "team2": "Uruguay", "flag2": "uy", "goals1": [], "goals2": ["Fonseca 90+1'"] }
    ]
  },
  "F": {
    "standings": [
      { "team": "Inglaterra", "flag": "gb-eng", "pts": 4, "pj": 3, "pg": 1, "pe": 2, "pp": 0, "gf": 2, "gc": 1 },
      { "team": "Irlanda", "flag": "ie", "pts": 3, "pj": 3, "pg": 0, "pe": 3, "pp": 0, "gf": 2, "gc": 2 },
      { "team": "Países Bajos", "flag": "nl", "pts": 3, "pj": 3, "pg": 0, "pe": 3, "pp": 0, "gf": 2, "gc": 2 },
      { "team": "Egipto", "flag": "eg", "pts": 2, "pj": 3, "pg": 0, "pe": 2, "pp": 1, "gf": 1, "gc": 2 }
    ],
    "matches": [
      { "team1": "Inglaterra", "flag1": "gb-eng", "score": "1-1", "team2": "Irlanda", "flag2": "ie", "goals1": ["Lineker 9'"], "goals2": ["Sheedy 73'"] },
      { "team1": "Países Bajos", "flag1": "nl", "score": "1-1", "team2": "Egipto", "flag2": "eg", "goals1": ["Kieft 58'"], "goals2": ["Abdelghani 83' (p)"] },
      { "team1": "Inglaterra", "flag1": "gb-eng", "score": "0-0", "team2": "Países Bajos", "flag2": "nl", "goals1": [], "goals2": [] },
      { "team1": "Irlanda", "flag1": "ie", "score": "0-0", "team2": "Egipto", "flag2": "eg", "goals1": [], "goals2": [] },
      { "team1": "Inglaterra", "flag1": "gb-eng", "score": "1-0", "team2": "Egipto", "flag2": "eg", "goals1": ["Wright 58'"], "goals2": [] },
      { "team1": "Irlanda", "flag1": "ie", "score": "1-1", "team2": "Países Bajos", "flag2": "nl", "goals1": ["Quinn 71'"], "goals2": ["Gullit 11'"] }
    ]
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Italia 1990 groups injected successfully.");
