const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const palmares = {
  'penarol.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 54, años: ['1900', '1901', '1905', '1907', '1911', '1918', '1921', '1928', '1929', '1932', '1935', '1936', '1937', '1938', '1944', '1945', '1949', '1951', '1953', '1954', '1958', '1959', '1960', '1961', '1962', '1964', '1965', '1967', '1968', '1973', '1974', '1975', '1978', '1979', '1981', '1982', '1985', '1986', '1993', '1994', '1995', '1996', '1997', '1999', '2003', '2009-10', '2012-13', '2015-16', '2017', '2018', '2021', '2024'] },
    { nombre: 'Copa Libertadores', cantidad: 5, años: ['1960', '1961', '1966', '1982', '1987'] },
    { nombre: 'Copa Intercontinental', cantidad: 3, años: ['1966', '1982', '1987'] }
  ],
  'nacional.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 50, años: ['1902', '1903', '1912', '1915', '1916', '1917', '1919', '1920', '1922', '1923', '1924', '1933', '1934', '1939', '1940', '1941', '1942', '1943', '1946', '1947', '1950', '1952', '1955', '1956', '1957', '1963', '1966', '1969', '1970', '1971', '1972', '1977', '1980', '1983', '1992', '1998', '2000', '2001', '2002', '2005', '2005-06', '2008-09', '2011-12', '2014-15', '2016', '2019', '2020', '2022', '2025'] },
    { nombre: 'Copa Libertadores', cantidad: 3, años: ['1971', '1980', '1988'] },
    { nombre: 'Copa Intercontinental', cantidad: 3, años: ['1971', '1980', '1988'] },
    { nombre: 'Copa Interamericana', cantidad: 2, años: ['1972', '1989'] },
    { nombre: 'Recopa Sudamericana', cantidad: 1, años: ['1989'] }
  ],
  'defensor-sporting.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 4, años: ['1976', '1987', '1991', '2007-08'] },
    { nombre: 'Liguilla Pre-Libertadores', cantidad: 8, años: ['1976', '1979', '1981', '1989', '1991', '1995', '2000', '2006'] },
    { nombre: 'Copa AUF Uruguay', cantidad: 2, años: ['2022', '2023'] }
  ],
  'danubio.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 4, años: ['1988', '2004', '2006-07', '2013-14'] },
    { nombre: 'Torneo Apertura', cantidad: 3, años: ['2001', '2006', '2013'] },
    { nombre: 'Torneo Clausura', cantidad: 3, años: ['2002', '2004', '2007'] }
  ],
  'montevideo-wanderers.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 3, años: ['1906', '1909', '1931'] },
    { nombre: 'Torneo Clausura', cantidad: 1, años: ['2014'] },
    { nombre: 'Liguilla Pre-Libertadores', cantidad: 2, años: ['1987', '2001'] }
  ],
  'progreso.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 1, años: ['1989'] },
    { nombre: 'Torneo Competencia', cantidad: 1, años: ['1985'] }
  ],
  'central-espanol.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 1, años: ['1984'] },
    { nombre: 'Torneo Competencia', cantidad: 1, años: ['1944'] },
    { nombre: 'Segunda División', cantidad: 3, años: ['1961', '1983', '2012'] }
  ],
  'liverpool.json': [
    { nombre: 'Campeonato Uruguayo', cantidad: 1, años: ['2023'] },
    { nombre: 'Supercopa Uruguaya', cantidad: 3, años: ['2020', '2023', '2024'] },
    { nombre: 'Torneo Intermedio', cantidad: 2, años: ['2019', '2023'] },
    { nombre: 'Torneo Clausura', cantidad: 2, años: ['2020', '2023'] },
    { nombre: 'Torneo Apertura', cantidad: 1, años: ['2022'] }
  ],
  'cerro.json': [
    { nombre: 'Liguilla Pre-Libertadores', cantidad: 1, años: ['2009'] },
    { nombre: 'Segunda División', cantidad: 2, años: ['1946', '1998'] },
    { nombre: 'Copa de Primera División', cantidad: 1, años: ['Pla Cup 1950'] }
  ],
  'racing.json': [
    { nombre: 'Torneo Apertura', cantidad: 1, años: ['1989'] },
    { nombre: 'Segunda División', cantidad: 6, años: ['1955', '1958', '1974', '1989', '2008', '2022'] }
  ],
  'cerro-largo.json': [
    { nombre: 'Segunda División', cantidad: 1, años: ['2018'] },
    { nombre: 'Torneo Apertura de Segunda', cantidad: 1, años: ['2007'] }
  ],
  'albion.json': [
    { nombre: 'Copa Competencia', cantidad: 1, años: ['1900'] },
    { nombre: 'Segunda División', cantidad: 1, años: ['2021'] },
    { nombre: 'Tercera División', cantidad: 1, años: ['2017'] }
  ],
  'deportivo-maldonado.json': [
    { nombre: 'Liga Ernestina', cantidad: 5, años: ['Amateur'] },
    { nombre: 'Segunda División Amateur', cantidad: 1, años: ['2019'] }
  ],
  'juventud.json': [
    { nombre: 'Torneo Viareggio (Internacional)', cantidad: 1, años: ['2006'] },
    { nombre: 'Segunda División', cantidad: 1, años: ['1999'] },
    { nombre: 'Tercera División', cantidad: 1, años: ['1995'] }
  ],
  'boston-river.json': [
    { nombre: 'Segunda División Amateur / Liga Metropolitana', cantidad: 1, años: ['2006'] }
  ],
  'montevideo-city-torque.json': [
    { nombre: 'Segunda División', cantidad: 2, años: ['2017', '2019'] },
    { nombre: 'Tercera División', cantidad: 1, años: ['2011-12'] }
  ]
};

for (const [filename, titulos] of Object.entries(palmares)) {
    const p = path.join(dir, filename);
    if(fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        try {
            let json = JSON.parse(content);
            json.titulos = titulos;
            fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
            console.log('Added palmares for', filename);
        } catch(e) {
            console.log('Error adding palmares for', filename, e.message);
        }
    }
}
