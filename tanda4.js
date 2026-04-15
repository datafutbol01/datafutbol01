const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const data = {
  "nottingham-forest": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 1, "años": ["1977-78"] },
    { "nombre": "FA Cup", "cantidad": 2, "años": ["1897-98", "1958-59"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 4, "años": ["1977-78", "1978-79", "1988-89", "1989-90"] },
    { "nombre": "FA Community Shield", "cantidad": 1, "años": ["1978"] },
    { "nombre": "UEFA Champions League / European Cup", "cantidad": 2, "años": ["1978-79", "1979-80"] },
    { "nombre": "UEFA Super Cup", "cantidad": 1, "años": ["1979"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 3, "años": ["1906-07", "1921-22", "1997-98"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 1, "años": ["1950-51"] }
  ],
  "sunderland": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 6, "años": ["1891-92", "1892-93", "1894-95", "1901-02", "1912-13", "1935-36"] },
    { "nombre": "FA Cup", "cantidad": 2, "años": ["1936-37", "1972-73"] },
    { "nombre": "FA Community Shield", "cantidad": 1, "años": ["1936"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 5, "años": ["1975-76", "1995-96", "1998-99", "2004-05", "2006-07"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 1, "años": ["1987-88"] }
  ],
  "tottenham": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 2, "años": ["1950-51", "1960-61"] },
    { "nombre": "FA Cup", "cantidad": 8, "años": ["1900-01", "1920-21", "1960-61", "1961-62", "1966-67", "1980-81", "1981-82", "1990-91"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 4, "años": ["1970-71", "1972-73", "1998-99", "2007-08"] },
    { "nombre": "FA Community Shield", "cantidad": 7, "años": ["1921", "1951", "1961", "1962", "1967", "1981", "1991"] },
    { "nombre": "UEFA Europa League / UEFA Cup", "cantidad": 2, "años": ["1971-72", "1983-84"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 1, "años": ["1962-63"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 2, "años": ["1919-20", "1949-50"] }
  ],
  "west-ham-united": [
    { "nombre": "FA Cup", "cantidad": 3, "años": ["1963-64", "1974-75", "1979-80"] },
    { "nombre": "FA Community Shield", "cantidad": 1, "años": ["1964"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 1, "años": ["1964-65"] },
    { "nombre": "UEFA Europa Conference League", "cantidad": 1, "años": ["2022-23"] },
    { "nombre": "Copa Intertoto de la UEFA", "cantidad": 1, "años": ["1999"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 2, "años": ["1957-58", "1980-81"] }
  ],
  "wolverhampton-wanderers": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 3, "años": ["1953-54", "1957-58", "1958-59"] },
    { "nombre": "FA Cup", "cantidad": 4, "años": ["1892-93", "1907-08", "1948-49", "1959-60"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 2, "años": ["1973-74", "1979-80"] },
    { "nombre": "FA Community Shield", "cantidad": 4, "años": ["1954", "1959", "1960", "1961"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 4, "años": ["1931-32", "1976-77", "2008-09", "2017-18"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 3, "años": ["1923-24", "1988-89", "2013-14"] },
    { "nombre": "EFL League Two / Cuarta División", "cantidad": 1, "años": ["1987-88"] }
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
