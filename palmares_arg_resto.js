const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "talleres-cba": [
    { "nombre": "Copa Conmebol", "cantidad": 1, "años": ["1999"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 2, "años": ["1998", "2016"] },
    { "nombre": "Torneo Federal Autónomo", "cantidad": 2, "años": ["2013", "2015"] },
    { "nombre": "Ligas Cordobesas Regionales", "cantidad": 27, "años": ["Historial Completo Desde 1915"] }
  ],
  "belgrano-cba": [
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 2, "años": ["1986", "2022"] },
    { "nombre": "Ligas Cordobesas Regionales", "cantidad": 31, "años": ["Historial Completo Desde 1913"] }
  ],
  "instituto": [
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 2, "años": ["1999", "2004"] },
    { "nombre": "Ligas Cordobesas Regionales", "cantidad": 9, "años": ["Historial Completo Desde 1925"] }
  ],
  "estudiantes-rc": [
    { "nombre": "Torneo Federal A / Tercera División", "cantidad": 1, "años": ["2019"] },
    { "nombre": "Ligas Regionales del Interior", "cantidad": 38, "años": ["Múltiples Ediciones"] }
  ],
  "atletico-tucuman": [
    { "nombre": "Primera B Nacional / Segunda División", "cantidad": 2, "años": ["2009", "2015"] },
    { "nombre": "Torneo Argentino A / Tercera División", "cantidad": 1, "años": ["2008"] },
    { "nombre": "Ligas Tucumanas Regionales", "cantidad": 21, "años": ["Historial Completo Desde 1920"] }
  ],
  "central-cordoba": [
    { "nombre": "Torneo Federal A / Interior", "cantidad": 2, "años": ["1986", "2018"] },
    { "nombre": "Ligas Santiagueñas Regionales", "cantidad": 48, "años": ["Múltiples Ediciones Locales"] }
  ],
  "sarmiento-junin": [
    { "nombre": "Copa de la República Física", "cantidad": 1, "años": ["1958"] },
    { "nombre": "Ascensos de Categoría (Primera B Nacional / Primera B / C)", "cantidad": 5, "años": ["1977", "1980", "2004", "2012", "2020"] }
  ],
  "aldosivi": [
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 2, "años": ["2018", "2024"] },
    { "nombre": "Ligas Marplatenses Regionales", "cantidad": 6, "años": ["Historial Local"] }
  ],
  "union": [
    { "nombre": "Ascensos de Categoría Históricos", "cantidad": 7, "años": ["1966", "1968", "1989", "1996", "2011", "2014"] },
    { "nombre": "Ligas Santafesinas Regionales", "cantidad": 38, "años": ["Historial Local Desde 1907"] }
  ],
  "defensa-justicia": [
    { "nombre": "Copa Sudamericana", "cantidad": 1, "años": ["2020"] },
    { "nombre": "Recopa Sudamericana", "cantidad": 1, "años": ["2021"] },
    { "nombre": "Ascensos de Categoría Históricos (A, B, C, D)", "cantidad": 4, "años": ["1982", "1997", "2014"] }
  ],
  "gimnasia-mdz": [
    { "nombre": "Torneos del Interior / Federales", "cantidad": 4, "años": ["Múltiples Clasificaciones"] },
    { "nombre": "Ligas Mendocinas Regionales", "cantidad": 20, "años": ["Múltiples Títulos Provinciales"] }
  ],
  "independiente-rivadavia": [
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 3, "años": ["1999", "2007", "2023"] },
    { "nombre": "Ligas Mendocinas Regionales", "cantidad": 25, "años": ["Múltiples Títulos Provinciales"] }
  ],
  "barracas-central": [
    { "nombre": "Ascensos de Categoría Históricos (A, B, C, D)", "cantidad": 3, "años": ["2010", "2019", "2021"] }
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
