const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const data = {
  "leeds-united": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 3, "años": ["1968-69", "1973-74", "1991-92"] },
    { "nombre": "FA Cup", "cantidad": 1, "años": ["1971-72"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 1, "años": ["1967-68"] },
    { "nombre": "FA Community Shield", "cantidad": 2, "años": ["1969", "1992"] },
    { "nombre": "Copa de Ferias", "cantidad": 2, "años": ["1967-68", "1970-71"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 4, "años": ["1923-24", "1963-64", "1989-90", "2019-20"] },
    { "nombre": "EFL League One / Tercera División", "cantidad": 1, "años": ["2009-10"] }
  ],
  "liverpool": [
    { "nombre": "First Division / Premier League", "cantidad": 19, "años": ["1900-01", "1905-06", "1921-22", "1922-23", "1946-47", "1963-64", "1965-66", "1972-73", "1975-76", "1976-77", "1978-79", "1979-80", "1981-82", "1982-83", "1983-84", "1985-86", "1987-88", "1989-90", "2019-20"] },
    { "nombre": "FA Cup", "cantidad": 8, "años": ["1964-65", "1973-74", "1985-86", "1988-89", "1991-92", "2000-01", "2005-06", "2021-22"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 10, "años": ["1980-81", "1981-82", "1982-83", "1983-84", "1994-95", "2000-01", "2002-03", "2011-12", "2021-22", "2023-24"] },
    { "nombre": "FA Community Shield", "cantidad": 16, "años": ["1964", "1965", "1966", "1974", "1976", "1977", "1979", "1980", "1982", "1986", "1988", "1989", "1990", "2001", "2006", "2022"] },
    { "nombre": "UEFA Champions League", "cantidad": 6, "años": ["1976-77", "1977-78", "1980-81", "1983-84", "2004-05", "2018-19"] },
    { "nombre": "UEFA Europa League", "cantidad": 3, "años": ["1972-73", "1975-76", "2000-01"] },
    { "nombre": "UEFA Super Cup", "cantidad": 4, "años": ["1977", "2001", "2005", "2019"] },
    { "nombre": "FIFA Club World Cup", "cantidad": 1, "años": ["2019"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 4, "años": ["1893-94", "1895-96", "1904-05", "1961-62"] }
  ],
  "manchester-city": [
    { "nombre": "First Division / Premier League", "cantidad": 10, "años": ["1936-37", "1967-68", "2011-12", "2013-14", "2017-18", "2018-19", "2020-21", "2021-22", "2022-23", "2023-24"] },
    { "nombre": "FA Cup", "cantidad": 7, "años": ["1903-04", "1933-34", "1955-56", "1968-69", "2010-11", "2018-19", "2022-23"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 8, "años": ["1969-70", "1975-76", "2013-14", "2015-16", "2017-18", "2018-19", "2019-20", "2020-21"] },
    { "nombre": "FA Community Shield", "cantidad": 7, "años": ["1937", "1968", "1972", "2012", "2018", "2019", "2024"] },
    { "nombre": "UEFA Champions League", "cantidad": 1, "años": ["2022-23"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 1, "años": ["1969-70"] },
    { "nombre": "UEFA Super Cup", "cantidad": 1, "años": ["2023"] },
    { "nombre": "FIFA Club World Cup", "cantidad": 1, "años": ["2023"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 7, "años": ["1898-99", "1902-03", "1909-10", "1927-28", "1946-47", "1965-66", "2001-02"] }
  ],
  "manchester-united": [
    { "nombre": "First Division / Premier League", "cantidad": 20, "años": ["1907-08", "1910-11", "1951-52", "1955-56", "1956-57", "1964-65", "1966-67", "1992-93", "1993-94", "1995-96", "1996-97", "1998-99", "1999-00", "2000-01", "2002-03", "2006-07", "2007-08", "2008-09", "2010-11", "2012-13"] },
    { "nombre": "FA Cup", "cantidad": 13, "años": ["1908-09", "1947-48", "1962-63", "1976-77", "1982-83", "1984-85", "1989-90", "1993-94", "1995-96", "1998-99", "2003-04", "2015-16", "2023-24"] },
    { "nombre": "EFL Cup (League Cup)", "cantidad": 6, "años": ["1991-92", "2005-06", "2008-09", "2009-10", "2016-17", "2022-23"] },
    { "nombre": "FA Community Shield", "cantidad": 21, "años": ["1908", "1911", "1952", "1956", "1957", "1965", "1967", "1977", "1983", "1990", "1993", "1994", "1996", "1997", "2003", "2007", "2008", "2010", "2011", "2013", "2016"] },
    { "nombre": "UEFA Champions League", "cantidad": 3, "años": ["1967-68", "1998-99", "2007-08"] },
    { "nombre": "UEFA Europa League", "cantidad": 1, "años": ["2016-17"] },
    { "nombre": "Recopa de Europa UEFA", "cantidad": 1, "años": ["1990-91"] },
    { "nombre": "UEFA Super Cup", "cantidad": 1, "años": ["1991"] },
    { "nombre": "Copa Intercontinental", "cantidad": 1, "años": ["1999"] },
    { "nombre": "FIFA Club World Cup", "cantidad": 1, "años": ["2008"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 2, "años": ["1935-36", "1974-75"] }
  ],
  "newcastle": [
    { "nombre": "First Division (Inglaterra)", "cantidad": 4, "años": ["1904-05", "1906-07", "1908-09", "1926-27"] },
    { "nombre": "FA Cup", "cantidad": 6, "años": ["1910-11", "1923-24", "1931-32", "1950-51", "1951-52", "1954-55"] },
    { "nombre": "FA Community Shield", "cantidad": 1, "años": ["1909"] },
    { "nombre": "Copa de Ferias", "cantidad": 1, "años": ["1968-69"] },
    { "nombre": "Copa Intertoto de la UEFA", "cantidad": 1, "años": ["2006"] },
    { "nombre": "EFL Championship / Segunda División", "cantidad": 4, "años": ["1964-65", "1992-93", "2009-10", "2016-17"] }
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
