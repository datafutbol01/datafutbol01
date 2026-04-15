const fs = require('fs');
const path = require('path');

const DIR_ITALIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia');

const palmares_italia = {
  "juventus": [
    { nombre: "Serie A", cantidad: 36, anios: ["1905", "1925-26", "1930-31", "1931-32", "1932-33", "1933-34", "1934-35", "1949-50", "1951-52", "1957-58", "1959-60", "1960-61", "1966-67", "1971-72", "1972-73", "1974-75", "1976-77", "1977-78", "1980-81", "1981-82", "1983-84", "1985-86", "1994-95", "1996-97", "1997-98", "2001-02", "2002-03", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20"] },
    { nombre: "Coppa Italia", cantidad: 15, anios: ["1937-38", "1941-42", "1958-59", "1959-60", "1964-65", "1978-79", "1982-83", "1989-90", "1994-95", "2014-15", "2015-16", "2016-17", "2017-18", "2020-21", "2023-24"] },
    { nombre: "Supercoppa Italiana", cantidad: 9, anios: ["1995", "1997", "2002", "2003", "2012", "2013", "2015", "2018", "2020"] },
    { nombre: "Liga de Campeones", cantidad: 2, anios: ["1984-85", "1995-96"] },
    { nombre: "Europa League / Copa UEFA", cantidad: 3, anios: ["1976-77", "1989-90", "1992-93"] },
    { nombre: "Recopa de Europa", cantidad: 1, anios: ["1983-84"] },
    { nombre: "Mundial de Clubes / Intercontinental", cantidad: 2, anios: ["1985", "1996"] },
    { nombre: "Supercopa de Europa", cantidad: 2, anios: ["1984", "1996"] },
    { nombre: "Serie B", cantidad: 1, anios: ["2006-07"] }
  ],
  "inter": [
    { nombre: "Serie A", cantidad: 20, anios: ["1909-10", "1919-20", "1929-30", "1937-38", "1939-40", "1952-53", "1953-54", "1962-63", "1964-65", "1965-66", "1970-71", "1979-80", "1988-89", "2005-06", "2006-07", "2007-08", "2008-09", "2009-10", "2020-21", "2023-24"] },
    { nombre: "Coppa Italia", cantidad: 9, anios: ["1938-39", "1977-78", "1981-82", "2004-05", "2005-06", "2009-10", "2010-11", "2021-22", "2022-23"] },
    { nombre: "Supercoppa Italiana", cantidad: 8, anios: ["1989", "2005", "2006", "2008", "2010", "2021", "2022", "2023"] },
    { nombre: "Liga de Campeones", cantidad: 3, anios: ["1963-64", "1964-65", "2009-10"] },
    { nombre: "Europa League / Copa UEFA", cantidad: 3, anios: ["1990-91", "1993-94", "1997-98"] },
    { nombre: "Mundial de Clubes / Intercontinental", cantidad: 3, anios: ["1964", "1965", "2010"] }
  ],
  "milan": [
    { nombre: "Serie A", cantidad: 19, anios: ["1901", "1906", "1907", "1950-51", "1954-55", "1956-57", "1958-59", "1961-62", "1967-68", "1978-79", "1987-88", "1991-92", "1992-93", "1993-94", "1995-96", "1998-99", "2003-04", "2010-11", "2021-22"] },
    { nombre: "Coppa Italia", cantidad: 5, anios: ["1966-67", "1971-72", "1972-73", "1976-77", "2002-03"] },
    { nombre: "Supercoppa Italiana", cantidad: 7, anios: ["1988", "1992", "1993", "1994", "2004", "2011", "2016"] },
    { nombre: "Liga de Campeones", cantidad: 7, anios: ["1962-63", "1968-69", "1988-89", "1989-90", "1993-94", "2002-03", "2006-07"] },
    { nombre: "Recopa de Europa", cantidad: 2, anios: ["1967-68", "1972-73"] },
    { nombre: "Mundial de Clubes / Intercontinental", cantidad: 4, anios: ["1969", "1989", "1990", "2007"] },
    { nombre: "Supercopa de Europa", cantidad: 5, anios: ["1989", "1990", "1994", "2003", "2007"] },
    { nombre: "Serie B", cantidad: 2, anios: ["1980-81", "1982-83"] }
  ],
  "genoa": [
    { nombre: "Serie A / Campeonato", cantidad: 9, anios: ["1898", "1899", "1900", "1902", "1903", "1904", "1914-15", "1922-23", "1923-24"] },
    { nombre: "Coppa Italia", cantidad: 1, anios: ["1936-37"] },
    { nombre: "Serie B", cantidad: 6, anios: ["1934-35", "1952-53", "1961-62", "1972-73", "1975-76", "1988-89"] }
  ],
  "torino": [
    { nombre: "Serie A", cantidad: 7, anios: ["1927-28", "1942-43", "1945-46", "1946-47", "1947-48", "1948-49", "1975-76"] },
    { nombre: "Coppa Italia", cantidad: 5, anios: ["1935-36", "1942-43", "1967-68", "1970-71", "1992-93"] },
    { nombre: "Serie B", cantidad: 3, anios: ["1959-60", "1989-90", "2000-01"] }
  ],
  "bologna": [
    { nombre: "Serie A", cantidad: 7, anios: ["1924-25", "1928-29", "1935-36", "1936-37", "1938-39", "1940-41", "1963-64"] },
    { nombre: "Coppa Italia", cantidad: 2, anios: ["1969-70", "1973-74"] },
    { nombre: "Copa Mitropa", cantidad: 3, anios: ["1932", "1934", "1961"] },
    { nombre: "Serie B", cantidad: 2, anios: ["1987-88", "1995-96"] }
  ],
  "napoli": [
    { nombre: "Serie A", cantidad: 3, anios: ["1986-87", "1989-90", "2022-23"] },
    { nombre: "Coppa Italia", cantidad: 6, anios: ["1961-62", "1975-76", "1986-87", "2011-12", "2013-14", "2019-20"] },
    { nombre: "Supercoppa Italiana", cantidad: 2, anios: ["1990", "2014"] },
    { nombre: "Europa League / Copa UEFA", cantidad: 1, anios: ["1988-89"] },
    { nombre: "Serie B", cantidad: 1, anios: ["1949-50"] }
  ],
  "roma": [
    { nombre: "Serie A", cantidad: 3, anios: ["1941-42", "1982-83", "2000-01"] },
    { nombre: "Coppa Italia", cantidad: 9, anios: ["1963-64", "1968-69", "1979-80", "1980-81", "1983-84", "1985-86", "1990-91", "2006-07", "2007-08"] },
    { nombre: "Supercoppa Italiana", cantidad: 2, anios: ["2001", "2007"] },
    { nombre: "Conference League", cantidad: 1, anios: ["2021-22"] },
    { nombre: "Serie B", cantidad: 1, anios: ["1951-52"] }
  ],
  "lazio": [
    { nombre: "Serie A", cantidad: 2, anios: ["1973-74", "1999-00"] },
    { nombre: "Coppa Italia", cantidad: 7, anios: ["1958", "1997-98", "1999-00", "2003-04", "2008-09", "2012-13", "2018-19"] },
    { nombre: "Supercoppa Italiana", cantidad: 5, anios: ["1998", "2000", "2009", "2017", "2019"] },
    { nombre: "Recopa de Europa", cantidad: 1, anios: ["1998-99"] },
    { nombre: "Supercopa de Europa", cantidad: 1, anios: ["1999"] },
    { nombre: "Serie B", cantidad: 1, anios: ["1968-69"] }
  ],
  "fiorentina": [
    { nombre: "Serie A", cantidad: 2, anios: ["1955-56", "1968-69"] },
    { nombre: "Coppa Italia", cantidad: 6, anios: ["1939-40", "1960-61", "1965-66", "1974-75", "1995-96", "2000-01"] },
    { nombre: "Supercoppa Italiana", cantidad: 1, anios: ["1996"] },
    { nombre: "Recopa de Europa", cantidad: 1, anios: ["1960-61"] },
    { nombre: "Serie B", cantidad: 3, anios: ["1930-31", "1938-39", "1993-94"] }
  ],
  "cagliari": [
    { nombre: "Serie A", cantidad: 1, anios: ["1969-70"] },
    { nombre: "Serie B", cantidad: 1, anios: ["2015-16"] }
  ],
  "parma": [
    { nombre: "Coppa Italia", cantidad: 3, anios: ["1991-92", "1998-99", "2001-02"] },
    { nombre: "Supercoppa Italiana", cantidad: 1, anios: ["1999"] },
    { nombre: "Europa League / Copa UEFA", cantidad: 2, anios: ["1994-95", "1998-99"] },
    { nombre: "Recopa de Europa", cantidad: 1, anios: ["1992-93"] },
    { nombre: "Supercopa de Europa", cantidad: 1, anios: ["1993"] },
    { nombre: "Serie B", cantidad: 1, anios: ["2023-24"] }
  ],
  "atalanta": [
    { nombre: "Coppa Italia", cantidad: 1, anios: ["1962-63"] },
    { nombre: "Europa League", cantidad: 1, anios: ["2023-24"] },
    { nombre: "Serie B", cantidad: 6, anios: ["1927-28", "1939-40", "1958-59", "1983-84", "2005-06", "2010-11"] }
  ],
  "hellas-verona": [
    { nombre: "Serie A", cantidad: 1, anios: ["1984-85"] },
    { nombre: "Serie B", cantidad: 3, anios: ["1956-57", "1981-82", "1998-99"] }
  ],
  "como": [
    { nombre: "Serie B", cantidad: 3, anios: ["1948-49", "1979-80", "2001-02"] }
  ],
  "cremonese": [
    { nombre: "Copa Anglo-Italiana", cantidad: 1, anios: ["1992-93"] }
  ],
  "lecce": [
    { nombre: "Serie B", cantidad: 2, anios: ["1984-85", "2009-10"] }
  ],
  "pisa": [
    { nombre: "Copa Mitropa", cantidad: 2, anios: ["1985-86", "1987-88"] },
    { nombre: "Serie B", cantidad: 2, anios: ["1984-85", "1986-87"] }
  ],
  "sassuolo": [
    { nombre: "Serie B", cantidad: 1, anios: ["2012-13"] }
  ],
  "udinese": [
    { nombre: "Copa Intertoto", cantidad: 1, anios: ["2000"] },
    { nombre: "Serie B", cantidad: 2, anios: ["1924-25", "1955-56"] }
  ]
};

Object.keys(palmares_italia).forEach(clubId => {
  const filePath = path.join(DIR_ITALIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    club.titulos = palmares_italia[clubId];
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Se inyectó el palmarés histórico oficial (Punto 4 de las nuevas reglas) computando hasta 2026 para los 20 clubes de ITALIA.');
