const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "rosario-central": [
    { "nombre": "Campeonato de Primera División", "cantidad": 4, "años": ["1971", "1973", "1980", "1987"] },
    { "nombre": "Copa Argentina / Copa de la Liga", "cantidad": 2, "años": ["2018", "2023"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 5, "años": ["1915", "1915", "1916", "1916", "1920"] },
    { "nombre": "Copa Conmebol", "cantidad": 1, "años": ["1995"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 4, "años": ["1942", "1951", "1985", "2013"] }
  ],
  "newells-old-boys": [
    { "nombre": "Campeonato de Primera División", "cantidad": 6, "años": ["1974", "1988", "1991", "1992", "2004", "2013"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 3, "años": ["1911", "1921", "1925"] }
  ],
  "estudiantes-lp": [
    { "nombre": "Campeonato de Primera División", "cantidad": 6, "años": ["1913", "1967", "1982", "1983", "2006", "2010"] },
    { "nombre": "Copa Argentina / Copa de la Liga", "cantidad": 2, "años": ["2023", "2024"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 2, "años": ["1944", "1945"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 4, "años": ["1968", "1969", "1970", "2009"] },
    { "nombre": "Copa Intercontinental", "cantidad": 1, "años": ["1968"] },
    { "nombre": "Copa Interamericana", "cantidad": 1, "años": ["1969"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 2, "años": ["1954", "1995"] }
  ],
  "gimnasia-lp": [
    { "nombre": "Campeonato de Primera División", "cantidad": 1, "años": ["1929"] },
    { "nombre": "Copas Nacionales Históricas / Copa Centenario", "cantidad": 1, "años": ["1993"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 3, "años": ["1944", "1947", "1952"] }
  ],
  "velez-sarsfield": [
    { "nombre": "Campeonato de Primera División", "cantidad": 10, "años": ["1968", "1993", "1995", "1996", "1998", "2005", "2009", "2011", "2012", "2013"] },
    { "nombre": "Supercopa Argentina", "cantidad": 1, "años": ["2013"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 1, "años": ["1994"] },
    { "nombre": "Copa Intercontinental", "cantidad": 1, "años": ["1994"] },
    { "nombre": "Supercopa Sudamericana", "cantidad": 1, "años": ["1996"] },
    { "nombre": "Recopa Sudamericana", "cantidad": 1, "años": ["1997"] },
    { "nombre": "Copa Interamericana", "cantidad": 1, "años": ["1996"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 1, "años": ["1943"] }
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
