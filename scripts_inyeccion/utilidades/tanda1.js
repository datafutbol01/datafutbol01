const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const data = {
  "arsenal": [
    { "nombre": "First Division / Premier League", "cantidad": 13, "años": ["1930-31", "1932-33", "1933-34", "1934-35", "1937-38", "1947-48", "1952-53", "1970-71", "1988-89", "1990-91", "1997-98", "2001-02", "2003-04"] },
    { "nombre": "FA Cup", "cantidad": 14, "años": ["1929-30", "1935-36", "1949-50", "1970-71", "1978-79", "1992-93", "1997-98", "2001-02", "2002-03", "2004-05", "2013-14", "2014-15", "2016-17", "2019-20"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 2, "años": ["1986-87", "1992-93"] },
    { "nombre": "FA Community Shield", "cantidad": 17, "años": ["1930", "1931", "1933", "1934", "1938", "1948", "1953", "1991", "1998", "1999", "2002", "2004", "2014", "2015", "2017", "2020", "2023"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 1, "años": ["1993-94"] },
    { "nombre": "Copa de Ferias", "cantidad": 1, "años": ["1969-70"] }
  ],
  "aston-villa": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 7, "años": ["1893-94", "1895-96", "1896-97", "1898-99", "1899-00", "1909-10", "1980-81"] },
    { "nombre": "FA Cup", "cantidad": 7, "años": ["1886-87", "1894-95", "1896-97", "1904-05", "1912-13", "1919-20", "1956-57"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 5, "años": ["1960-61", "1974-75", "1976-77", "1993-94", "1995-96"] },
    { "nombre": "FA Community Shield", "cantidad": 1, "años": ["1981"] },
    { "nombre": "European Cup / Champions League", "cantidad": 1, "años": ["1981-82"] },
    { "nombre": "UEFA Super Cup", "cantidad": 1, "años": ["1982"] },
    { "nombre": "Copa Intertoto de la UEFA", "cantidad": 2, "años": ["2001", "2008"] },
    { "nombre": "Second Division", "cantidad": 2, "años": ["1937-38", "1959-60"] },
    { "nombre": "Third Division", "cantidad": 1, "años": ["1971-72"] }
  ],
  "bournemouth": [
    { "nombre": "EFL Championship / Segunda División", "cantidad": 1, "años": ["2014-15"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 1, "años": ["1986-87"] },
    { "nombre": "EFL Trophy / Associate Members' Cup", "cantidad": 1, "años": ["1983-84"] }
  ],
  "brentford": [
    { "nombre": "EFL Championship / Segunda División", "cantidad": 1, "años": ["1934-35"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 2, "años": ["1932-33", "1991-92"] },
    { "nombre": "EFL League Two / Cuarta División", "cantidad": 1, "años": ["1962-63"] }
  ],
  "brighton": [
    { "nombre": "FA Community Shield", "cantidad": 1, "años": ["1910"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 3, "años": ["1957-58", "2000-01", "2010-11"] },
    { "nombre": "EFL League Two / Cuarta División", "cantidad": 2, "años": ["1964-65", "2000-01"] }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    fileData.titulos = data[club];
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated ${club}`);
  }
}
