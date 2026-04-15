import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1986.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const groupsData = {
  "A": [
    { "team": "Argentina", "flag": "ar", "pts": 5, "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 6, "gc": 2 },
    { "team": "Italia", "flag": "it", "pts": 4, "pj": 3, "pg": 1, "pe": 2, "pp": 0, "gf": 5, "gc": 4 },
    { "team": "Bulgaria", "flag": "bg", "pts": 2, "pj": 3, "pg": 0, "pe": 2, "pp": 1, "gf": 2, "gc": 4 },
    { "team": "Corea del Sur", "flag": "kr", "pts": 1, "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 4, "gc": 7 }
  ],
  "B": [
    { "team": "México", "flag": "mx", "pts": 5, "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 4, "gc": 2 },
    { "team": "Paraguay", "flag": "py", "pts": 4, "pj": 3, "pg": 1, "pe": 2, "pp": 0, "gf": 4, "gc": 3 },
    { "team": "Bélgica", "flag": "be", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 5, "gc": 5 },
    { "team": "Irak", "flag": "iq", "pts": 0, "pj": 3, "pg": 0, "pe": 0, "pp": 3, "gf": 1, "gc": 4 }
  ],
  "C": [
    { "team": "Unión Soviética", "flag": "su", "pts": 5, "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 9, "gc": 1 },
    { "team": "Francia", "flag": "fr", "pts": 5, "pj": 3, "pg": 2, "pe": 1, "pp": 0, "gf": 5, "gc": 1 },
    { "team": "Hungría", "flag": "hu", "pts": 2, "pj": 3, "pg": 1, "pe": 0, "pp": 2, "gf": 2, "gc": 9 },
    { "team": "Canadá", "flag": "ca", "pts": 0, "pj": 3, "pg": 0, "pe": 0, "pp": 3, "gf": 0, "gc": 5 }
  ],
  "D": [
    { "team": "Brasil", "flag": "br", "pts": 6, "pj": 3, "pg": 3, "pe": 0, "pp": 0, "gf": 5, "gc": 0 },
    { "team": "España", "flag": "es", "pts": 4, "pj": 3, "pg": 2, "pe": 0, "pp": 1, "gf": 5, "gc": 2 },
    { "team": "Irlanda del Norte", "flag": "gb-nir", "pts": 1, "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 2, "gc": 6 },
    { "team": "Argelia", "flag": "dz", "pts": 1, "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 1, "gc": 5 }
  ],
  "E": [
    { "team": "Dinamarca", "flag": "dk", "pts": 6, "pj": 3, "pg": 3, "pe": 0, "pp": 0, "gf": 9, "gc": 1 },
    { "team": "Alemania Federal", "flag": "de", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 3, "gc": 4 },
    { "team": "Uruguay", "flag": "uy", "pts": 2, "pj": 3, "pg": 0, "pe": 2, "pp": 1, "gf": 2, "gc": 7 },
    { "team": "Escocia", "flag": "gb-sct", "pts": 1, "pj": 3, "pg": 0, "pe": 1, "pp": 2, "gf": 1, "gc": 3 }
  ],
  "F": [
    { "team": "Marruecos", "flag": "ma", "pts": 4, "pj": 3, "pg": 1, "pe": 2, "pp": 0, "gf": 3, "gc": 1 },
    { "team": "Inglaterra", "flag": "gb-eng", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 3, "gc": 1 },
    { "team": "Polonia", "flag": "pl", "pts": 3, "pj": 3, "pg": 1, "pe": 1, "pp": 1, "gf": 1, "gc": 3 },
    { "team": "Portugal", "flag": "pt", "pts": 2, "pj": 3, "pg": 1, "pe": 0, "pp": 2, "gf": 2, "gc": 4 }
  ]
};

data.groups = groupsData;
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Injected 1986 Groups accurately.");
