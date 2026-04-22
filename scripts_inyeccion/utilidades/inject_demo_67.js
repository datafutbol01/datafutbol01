const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

data.push({
  "id": "1967-mt",
  "anio": "1967",
  "torneo": "Torneo Metropolitano",
  "campeon": "Estudiantes (LP)",
  "subcampeon": "Racing Club",
  "obs": "*(1) El primer Metropolitano de la historia desarmó el formato antiguo, usando dos zonas. Estudiantes de La Plata hizo historia pura transformándose en el primer equipo 'chico' en romper el monopolio de los cinco grandes al vapulear a Racing en la Final.*",
  "zonas": {
    "Zona A": [
      {"pos": 1, "equipo": "Racing Club", "pts": 29, "pj": 22, "pg": 10, "pe": 9, "pp": 3},
      {"pos": 2, "equipo": "Estudiantes (LP)", "pts": 29, "pj": 22, "pg": 11, "pe": 7, "pp": 4},
      {"pos": 3, "equipo": "Velez Sarsfield", "pts": 27, "pj": 22, "pg": 10, "pe": 7, "pp": 5},
      {"pos": 4, "equipo": "Boca Juniors", "pts": 26, "pj": 22, "pg": 8, "pe": 10, "pp": 4}
    ],
    "Zona B": [
      {"pos": 1, "equipo": "Platense", "pts": 28, "pj": 22, "pg": 13, "pe": 2, "pp": 7},
      {"pos": 2, "equipo": "Independiente", "pts": 27, "pj": 22, "pg": 10, "pe": 7, "pp": 5},
      {"pos": 3, "equipo": "Rosario Central", "pts": 26, "pj": 22, "pg": 9, "pe": 8, "pp": 5},
      {"pos": 4, "equipo": "San Lorenzo", "pts": 25, "pj": 22, "pg": 10, "pe": 5, "pp": 7}
    ]
  },
  "fase_knockout": [
    {"ronda": "Semifinal", "partido": "Estudiantes (LP) 4 - 3 Platense", "estadio": "La Bombonera", "campeon": false},
    {"ronda": "Semifinal", "partido": "Racing Club 2 - 0 Independiente", "estadio": "El Cilindro", "campeon": false},
    {"ronda": "Final", "partido": "Estudiantes (LP) 3 - 0 Racing Club", "estadio": "Viejo Gasómetro", "campeon": true}
  ]
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('1967 Metro Demo agregado for testing zonas y playoffs.');
