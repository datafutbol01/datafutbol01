const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "boca-juniors": [
    { "nombre": "Campeonato de Primera División", "cantidad": 35, "años": ["1919", "1920", "1923", "1924", "1926", "1930", "1931", "1934", "1935", "1940", "1943", "1944", "1954", "1962", "1964", "1965", "1969", "1970", "1976 (M)", "1976 (N)", "1981", "1992", "1998", "1999", "2000", "2003", "2005", "2006", "2008", "2011", "2015", "2017", "2018", "2020", "2022"] },
    { "nombre": "Copa Argentina", "cantidad": 4, "años": ["1969", "2012", "2015", "2021"] },
    { "nombre": "Copa de la Liga / Supercopas Nacionales", "cantidad": 4, "años": ["2018", "2020", "2022", "2022"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 9, "años": ["1919", "1920", "1923", "1924", "1925", "1926", "1940", "1946", "1969"] },
    { "nombre": "Copas Rioplatenses Históricas", "cantidad": 4, "años": ["1919", "1920", "1940", "1946"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 6, "años": ["1977", "1978", "2000", "2001", "2003", "2007"] },
    { "nombre": "Copa Intercontinental", "cantidad": 3, "años": ["1977", "2000", "2003"] },
    { "nombre": "Copa Sudamericana", "cantidad": 2, "años": ["2004", "2005"] },
    { "nombre": "Recopa Sudamericana", "cantidad": 4, "años": ["1990", "2005", "2006", "2008"] },
    { "nombre": "Supercopa / Máster / Nicolás Leoz", "cantidad": 3, "años": ["1989", "1992", "1993"] }
  ],
  "river-plate": [
    { "nombre": "Campeonato de Primera División", "cantidad": 38, "años": ["1920", "1932", "1936", "1936", "1937", "1941", "1942", "1945", "1947", "1952", "1953", "1955", "1956", "1957", "1975", "1975", "1977", "1979", "1979", "1980", "1981", "1986", "1990", "1991", "1993", "1994", "1996", "1997", "1997", "1999", "2000", "2002", "2003", "2004", "2008", "2014", "2021", "2023"] },
    { "nombre": "Copa Argentina", "cantidad": 3, "años": ["2016", "2017", "2019"] },
    { "nombre": "Supercopa / Trofeo de Campeones", "cantidad": 5, "años": ["2014", "2017", "2019", "2021", "2023"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 8, "años": ["1914", "1932", "1932", "1937", "1941", "1942", "1952", "1968"] },
    { "nombre": "Copas Rioplatenses Históricas", "cantidad": 6, "años": ["1914", "1936", "1937", "1941", "1945", "1947"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 4, "años": ["1986", "1996", "2015", "2018"] },
    { "nombre": "Copa Intercontinental", "cantidad": 1, "años": ["1986"] },
    { "nombre": "Copa Sudamericana", "cantidad": 1, "años": ["2014"] },
    { "nombre": "Recopa Sudamericana", "cantidad": 3, "años": ["2015", "2016", "2019"] },
    { "nombre": "Supercopa Sudamericana / Interamericana / Suruga", "cantidad": 3, "años": ["1987", "1997", "2015"] }
  ],
  "independiente": [
    { "nombre": "Campeonato de Primera División", "cantidad": 16, "años": ["1922", "1926", "1938", "1939", "1948", "1960", "1963", "1967", "1970", "1971", "1977", "1978", "1983", "1989", "1994", "2002"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 9, "años": ["1914", "1917", "1924", "1925", "1926", "1938", "1939", "1939", "1939"] },
    { "nombre": "Copas Rioplatenses Históricas", "cantidad": 2, "años": ["1938", "1939"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 7, "años": ["1964", "1965", "1972", "1973", "1974", "1975", "1984"] },
    { "nombre": "Copa Intercontinental", "cantidad": 2, "años": ["1973", "1984"] },
    { "nombre": "Copa Sudamericana", "cantidad": 2, "años": ["2010", "2017"] },
    { "nombre": "Recopa Sudamericana", "cantidad": 1, "años": ["1995"] },
    { "nombre": "Supercopa Sudamericana", "cantidad": 2, "años": ["1994", "1995"] },
    { "nombre": "Copa Interamericana", "cantidad": 3, "años": ["1973", "1974", "1976"] },
    { "nombre": "Copa Suruga Bank", "cantidad": 1, "años": ["2018"] }
  ],
  "racing-club": [
    { "nombre": "Campeonato de Primera División", "cantidad": 18, "años": ["1913", "1914", "1915", "1916", "1917", "1918", "1919", "1921", "1925", "1949", "1950", "1951", "1958", "1961", "1966", "2001", "2014", "2019"] },
    { "nombre": "Trofeo de Campeones / Supercopa Int", "cantidad": 2, "años": ["2019", "2023"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 13, "años": ["1912", "1913", "1914", "1915", "1917", "1917", "1918", "1932", "1933", "1945", "1958", "1961", "1966"] },
    { "nombre": "Copas Rioplatenses Históricas", "cantidad": 3, "años": ["1913", "1917", "1918"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 1, "años": ["1967"] },
    { "nombre": "Copa Intercontinental", "cantidad": 1, "años": ["1967"] },
    { "nombre": "Supercopa Sudamericana", "cantidad": 1, "años": ["1988"] },
    { "nombre": "Supercopa Interamericana", "cantidad": 1, "años": ["1988"] }
  ],
  "san-lorenzo": [
    { "nombre": "Campeonato de Primera División", "cantidad": 15, "años": ["1923", "1924", "1927", "1933", "1936", "1946", "1959", "1968", "1972", "1972", "1974", "1995", "2001", "2007", "2013"] },
    { "nombre": "Supercopa Argentina", "cantidad": 1, "años": ["2015"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 1, "años": ["1943"] },
    { "nombre": "Copas Rioplatenses Históricas", "cantidad": 1, "años": ["1927"] },
    { "nombre": "Copa Libertadores de América", "cantidad": 1, "años": ["2014"] },
    { "nombre": "Copa Sudamericana", "cantidad": 1, "años": ["2002"] },
    { "nombre": "Copa Mercosur", "cantidad": 1, "años": ["2001"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 1, "años": ["1982"] }
  ],
  "huracan": [
    { "nombre": "Campeonato de Primera División", "cantidad": 5, "años": ["1921", "1922", "1925", "1928", "1973"] },
    { "nombre": "Copa Argentina / Supercopa Argentina", "cantidad": 2, "años": ["2014", "2014"] },
    { "nombre": "Copas Nacionales Históricas", "cantidad": 6, "años": ["1920", "1922", "1925", "1942", "1943", "1944"] },
    { "nombre": "Primera Nacional / Segunda División", "cantidad": 2, "años": ["1990", "2000"] }
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
