const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const data = {
  "burnley": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 2, "años": ["1920-21", "1959-60"] },
    { "nombre": "FA Cup", "cantidad": 1, "años": ["1913-14"] },
    { "nombre": "FA Community Shield", "cantidad": 2, "años": ["1960", "1973"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 4, "años": ["1897-98", "1972-73", "2015-16", "2022-23"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 1, "años": ["1981-82"] },
    { "nombre": "EFL League Two / Cuarta División", "cantidad": 1, "años": ["1991-92"] }
  ],
  "chelsea": [
    { "nombre": "First Division / Premier League", "cantidad": 6, "años": ["1954-55", "2004-05", "2005-06", "2009-10", "2014-15", "2016-17"] },
    { "nombre": "FA Cup", "cantidad": 8, "años": ["1969-70", "1996-97", "1999-00", "2006-07", "2008-09", "2009-10", "2011-12", "2017-18"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 5, "años": ["1964-65", "1997-98", "2004-05", "2006-07", "2014-15"] },
    { "nombre": "FA Community Shield", "cantidad": 4, "años": ["1955", "2000", "2005", "2009"] },
    { "nombre": "UEFA Champions League", "cantidad": 2, "años": ["2011-12", "2020-21"] },
    { "nombre": "UEFA Europa League", "cantidad": 2, "años": ["2012-13", "2018-19"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 2, "años": ["1970-71", "1997-98"] },
    { "nombre": "UEFA Super Cup", "cantidad": 2, "años": ["1998", "2021"] },
    { "nombre": "FIFA Club World Cup", "cantidad": 1, "años": ["2021"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 2, "años": ["1983-84", "1988-89"] }
  ],
  "crystal-palace": [
    { "nombre": "EFL Championship / Segunda División", "cantidad": 2, "años": ["1978-79", "1993-94"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 1, "años": ["1920-21"] }
  ],
  "everton": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 9, "años": ["1890-91", "1914-15", "1927-28", "1931-32", "1938-39", "1962-63", "1969-70", "1984-85", "1986-87"] },
    { "nombre": "FA Cup", "cantidad": 5, "años": ["1905-06", "1932-33", "1965-66", "1983-84", "1994-95"] },
    { "nombre": "FA Community Shield", "cantidad": 9, "años": ["1928", "1932", "1963", "1970", "1984", "1985", "1986", "1987", "1995"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 1, "años": ["1984-85"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 1, "años": ["1930-31"] }
  ],
  "fulham": [
    { "nombre": "EFL Championship / Segunda División", "cantidad": 3, "años": ["1948-49", "2000-01", "2021-22"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 2, "años": ["1931-32", "1998-99"] },
    { "nombre": "Copa Intertoto de la UEFA", "cantidad": 1, "años": ["2002"] }
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
