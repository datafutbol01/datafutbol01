const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

const formatT = (nombre, anios) => ({ nombre, cantidad: anios.length, anios });

const palmares = {
  "alaves.json": [
    formatT("Segunda División", ["1929-30", "1953-54", "1997-98", "2015-16"]),
    formatT("Copa Federación", ["1946"])
  ],
  "athletic-club.json": [
    formatT("La Liga", ["1929-30", "1930-31", "1933-34", "1935-36", "1942-43", "1955-56", "1982-83", "1983-84"]),
    formatT("Copa del Rey", ["1903", "1904", "1910", "1911", "1914", "1915", "1916", "1921", "1923", "1930", "1931", "1932", "1933", "1943", "1944", "1945", "1950", "1955", "1956", "1958", "1969", "1973", "1984", "2024"]),
    formatT("Supercopa de España", ["1984", "2015", "2021"]),
    formatT("Copa Eva Duarte", ["1950"])
  ],
  "atletico-madrid.json": [
    formatT("La Liga", ["1939-40", "1940-41", "1949-50", "1950-51", "1965-66", "1969-70", "1972-73", "1976-77", "1995-96", "2013-14", "2020-21"]),
    formatT("Copa del Rey", ["1960", "1961", "1965", "1972", "1976", "1985", "1991", "1992", "1996", "2013"]),
    formatT("Supercopa de España", ["1985", "2014"]),
    formatT("Copa Eva Duarte", ["1951"]),
    formatT("Europa League", ["2009-10", "2011-12", "2017-18"]),
    formatT("Recopa de Europa", ["1961-62"]),
    formatT("Supercopa de la UEFA", ["2010", "2012", "2018"]),
    formatT("Copa Intercontinental", ["1974"]),
    formatT("Segunda División", ["2001-02"])
  ],
  "barcelona.json": [
    formatT("La Liga", ["1929", "1944-45", "1947-48", "1948-49", "1951-52", "1952-53", "1958-59", "1959-60", "1973-74", "1984-85", "1990-91", "1991-92", "1992-93", "1993-94", "1997-98", "1998-99", "2004-05", "2005-06", "2008-09", "2009-10", "2010-11", "2012-13", "2014-15", "2015-16", "2017-18", "2018-19", "2022-23"]),
    formatT("Copa del Rey", ["1910", "1912", "1913", "1920", "1922", "1925", "1926", "1928", "1942", "1951", "1952", "1953", "1957", "1959", "1963", "1968", "1971", "1978", "1981", "1983", "1988", "1990", "1997", "1998", "2009", "2012", "2015", "2016", "2017", "2018", "2021"]),
    formatT("Supercopa de España", ["1983", "1991", "1992", "1994", "1996", "2005", "2006", "2009", "2010", "2011", "2013", "2016", "2018", "2023"]),
    formatT("Copa Eva Duarte", ["1948", "1952", "1953"]),
    formatT("Copa de la Liga", ["1983", "1986"]),
    formatT("Champions League", ["1991-92", "2005-06", "2008-09", "2010-11", "2014-15"]),
    formatT("Recopa de Europa", ["1978-79", "1981-82", "1988-89", "1996-97"]),
    formatT("Copa de Ferias", ["1955-58", "1958-60", "1965-66"]),
    formatT("Supercopa de la UEFA", ["1992", "1997", "2009", "2011", "2015"]),
    formatT("Mundial de Clubes", ["2009", "2011", "2015"]),
    formatT("Copa Latina", ["1949", "1952"])
  ],
  "celta-vigo.json": [
    formatT("Copa Intertoto", ["2000"]),
    formatT("Segunda División", ["1935-36", "1981-82", "1991-92"])
  ],
  "espanyol.json": [
    formatT("Copa del Rey", ["1929", "1940", "2000", "2006"]),
    formatT("Segunda División", ["1993-94", "2020-21"])
  ],
  "getafe.json": [
    formatT("Segunda División B", ["1998-99"])
  ],
  "girona.json": [
    formatT("Segunda División B", ["2007-08"])
  ],
  "las-palmas.json": [
    formatT("Segunda División", ["1953-54", "1963-64", "1984-85", "1999-00"])
  ],
  "leganes.json": [
    formatT("Segunda División", ["2023-24"])
  ],
  "mallorca.json": [
    formatT("Copa del Rey", ["2003"]),
    formatT("Supercopa de España", ["1998"]),
    formatT("Segunda División", ["1959-60", "1964-65"])
  ],
  "osasuna.json": [
    formatT("Segunda División", ["1952-53", "1955-56", "1960-61", "2018-19"])
  ],
  "rayo-vallecano.json": [
    formatT("Segunda División", ["2017-18"])
  ],
  "real-betis.json": [
    formatT("La Liga", ["1934-35"]),
    formatT("Copa del Rey", ["1977", "2005", "2022"]),
    formatT("Segunda División", ["1931-32", "1941-42", "1957-58", "1970-71", "1973-74", "2010-11", "2014-15"])
  ],
  "real-madrid.json": [
    formatT("La Liga", ["1931-32", "1932-33", "1953-54", "1954-55", "1956-57", "1957-58", "1960-61", "1961-62", "1962-63", "1963-64", "1964-65", "1966-67", "1967-68", "1968-69", "1971-72", "1975-76", "1977-78", "1978-79", "1979-80", "1985-86", "1986-87", "1987-88", "1988-89", "1989-90", "1994-95", "1996-97", "2000-01", "2002-03", "2006-07", "2007-08", "2011-12", "2016-17", "2019-20", "2021-22", "2023-24"]),
    formatT("Copa del Rey", ["1905", "1906", "1907", "1908", "1917", "1934", "1936", "1946", "1947", "1962", "1970", "1974", "1975", "1980", "1982", "1989", "1993", "2011", "2014", "2023"]),
    formatT("Supercopa de España", ["1988", "1989", "1990", "1993", "1997", "2001", "2003", "2008", "2012", "2017", "2020", "2022", "2024"]),
    formatT("Copa Eva Duarte", ["1947"]),
    formatT("Copa de la Liga", ["1985"]),
    formatT("Champions League", ["1955-56", "1956-57", "1957-58", "1958-59", "1959-60", "1965-66", "1997-98", "1999-00", "2001-02", "2013-14", "2015-16", "2016-17", "2017-18", "2021-22", "2023-24"]),
    formatT("Europa League", ["1984-85", "1985-86"]),
    formatT("Supercopa de la UEFA", ["2002", "2014", "2016", "2017", "2022", "2024"]),
    formatT("Mundial de Clubes", ["2014", "2016", "2017", "2018", "2022"]),
    formatT("Copa Intercontinental", ["1960", "1998", "2002"]),
    formatT("Copa Latina", ["1955", "1957"]),
    formatT("Copa Iberoamericana", ["1994"])
  ],
  "real-sociedad.json": [
    formatT("La Liga", ["1980-81", "1981-82"]),
    formatT("Copa del Rey", ["1909", "1987", "2020"]),
    formatT("Supercopa de España", ["1982"]),
    formatT("Segunda División", ["1948-49", "1966-67", "2009-10"])
  ],
  "real-valladolid.json": [
    formatT("Copa de la Liga", ["1984"]),
    formatT("Segunda División", ["1947-48", "1958-59", "2006-07"])
  ],
  "sevilla.json": [
    formatT("La Liga", ["1945-46"]),
    formatT("Copa del Rey", ["1935", "1939", "1948", "2007", "2010"]),
    formatT("Supercopa de España", ["2007"]),
    formatT("Europa League", ["2005-06", "2006-07", "2013-14", "2014-15", "2015-16", "2019-20", "2022-23"]),
    formatT("Supercopa de la UEFA", ["2006"]),
    formatT("Segunda División", ["1929", "1933-34", "1968-69", "2000-01"])
  ],
  "valencia.json": [
    formatT("La Liga", ["1941-42", "1943-44", "1946-47", "1970-71", "2001-02", "2003-04"]),
    formatT("Copa del Rey", ["1941", "1949", "1954", "1967", "1979", "1999", "2008", "2019"]),
    formatT("Supercopa de España", ["1999"]),
    formatT("Copa Eva Duarte", ["1949"]),
    formatT("Europa League", ["2003-04"]),
    formatT("Copa de Ferias", ["1961-62", "1962-63"]),
    formatT("Recopa de Europa", ["1979-80"]),
    formatT("Supercopa de la UEFA", ["1980", "2004"]),
    formatT("Segunda División", ["1930-31", "1986-87"])
  ],
  "villarreal.json": [
    formatT("Europa League", ["2020-21"]),
    formatT("Tercera División", ["1970"])
  ]
};

Object.entries(palmares).forEach(([file, newTitulos]) => {
   if (fs.existsSync(path + file)) {
      const data = JSON.parse(fs.readFileSync(path + file, 'utf8'));
      data.titulos = newTitulos;
      fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
      console.log('Processed', file);
   }
});
