const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "argentinos-jrs": [
    { "nombre": "Campeonato de Primera División", "cantidad": 3, "años": ["1984", "1985", "2010"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 1, "años": ["1985"] },
    { "nombre": "Copa Interamericana", "cantidad": 1, "años": ["1986"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 4, "años": ["1940", "1955", "1997", "2017"] }
  ],
  "lanus": [
    { "nombre": "Campeonato de Primera División", "cantidad": 2, "años": ["2007", "2016"] },
    { "nombre": "Copa Bicentenario / Supercopa Argentina", "cantidad": 2, "años": ["2016", "2016"] },
    { "nombre": "Copa Conmebol", "cantidad": 1, "años": ["1996"] },
    { "nombre": "Copa Sudamericana", "cantidad": 1, "años": ["2013"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 4, "años": ["1950", "1964", "1971", "1976"] },
    { "nombre": "Tercera División", "cantidad": 1, "años": ["1981"] }
  ],
  "banfield": [
    { "nombre": "Campeonato de Primera División", "cantidad": 1, "años": ["2009"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 1, "años": ["1920"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 8, "años": ["1899", "1939", "1946", "1962", "1973", "1993", "2001", "2014"] }
  ],
  "platense": [
    { "nombre": "Ascensos y Segunda División Histórica", "cantidad": 3, "años": ["1912", "1976", "2021"] },
    { "nombre": "Tercera División", "cantidad": 2, "años": ["2006", "2018"] }
  ],
  "tigre": [
    { "nombre": "Copa de la Superliga Argentina", "cantidad": 1, "años": ["2019"] },
    { "nombre": "Primera Nacional / Segunda División Histórica", "cantidad": 6, "años": ["1912", "1914", "1945", "1953", "1979", "2021"] }
  ],
  "riestra": [
    { "nombre": "Ascensos Históricos y Divisiones de Ascenso", "cantidad": 4, "años": ["1953", "2014", "2017", "2023"] }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Overwrite deeply array of titulos 
    fileData.titulos = data[club];
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated palmares for ${club}`);
  }
}
