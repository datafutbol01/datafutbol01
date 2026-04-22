const fs = require('fs');

const d = {
  "rangers": [
    { "nombre": "Scottish League Championship (Primera División)", "cantidad": 55, "anios": ["1890-91", "1898-99", "1899-00", "1900-01", "1901-02", "1910-11", "1911-12", "1912-13", "1917-18", "1919-20", "1920-21", "1922-23", "1923-24", "1924-25", "1926-27", "1927-28", "1928-29", "1929-30", "1930-31", "1932-33", "1933-34", "1934-35", "1936-37", "1938-39", "1946-47", "1948-49", "1949-50", "1952-53", "1955-56", "1956-57", "1958-59", "1960-61", "1962-63", "1963-64", "1974-75", "1975-76", "1977-78", "1986-87", "1988-89", "1989-90", "1990-91", "1991-92", "1992-93", "1993-94", "1994-95", "1995-96", "1996-97", "1998-99", "1999-00", "2002-03", "2004-05", "2008-09", "2009-10", "2010-11", "2020-21"] },
    { "nombre": "Scottish Cup (Copa de Escocia)", "cantidad": 34, "anios": ["1893-94", "1896-97", "1897-98", "1902-03", "1927-28", "1929-30", "1931-32", "1933-34", "1934-35", "1935-36", "1947-48", "1948-49", "1949-50", "1952-53", "1959-60", "1961-62", "1962-63", "1963-64", "1965-66", "1972-73", "1975-76", "1977-78", "1978-79", "1980-81", "1991-92", "1992-93", "1995-96", "1998-99", "1999-00", "2001-02", "2002-03", "2007-08", "2008-09", "2021-22"] },
    { "nombre": "Scottish League Cup (Copa de la Liga)", "cantidad": 28, "anios": ["1946-47", "1948-49", "1960-61", "1961-62", "1963-64", "1964-65", "1970-71", "1975-76", "1977-78", "1978-79", "1981-82", "1983-84", "1984-85", "1986-87", "1987-88", "1988-89", "1990-91", "1992-93", "1993-94", "1996-97", "1998-99", "2001-02", "2002-03", "2004-05", "2007-08", "2009-10", "2010-11", "2023-24"] },
    { "nombre": "European Cup Winners' Cup (Recopa de Europa)", "cantidad": 1, "anios": ["1971-72"] }
  ],
  "celtic": [
    { "nombre": "Scottish League Championship (Primera División)", "cantidad": 54, "anios": ["1892-93", "1893-94", "1895-96", "1897-98", "1904-05", "1905-06", "1906-07", "1907-08", "1908-09", "1909-10", "1913-14", "1914-15", "1915-16", "1916-17", "1918-19", "1921-22", "1925-26", "1935-36", "1937-38", "1953-54", "1965-66", "1966-67", "1967-68", "1968-69", "1969-70", "1970-71", "1971-72", "1972-73", "1973-74", "1976-77", "1978-79", "1980-81", "1981-82", "1985-86", "1987-88", "1997-98", "2000-01", "2001-02", "2003-04", "2005-06", "2006-07", "2007-08", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20", "2021-22", "2022-23", "2023-24"] },
    { "nombre": "Scottish Cup (Copa de Escocia)", "cantidad": 42, "anios": ["1891-92", "1898-99", "1899-00", "1903-04", "1906-07", "1907-08", "1910-11", "1911-12", "1913-14", "1922-23", "1924-25", "1926-27", "1930-31", "1932-33", "1936-37", "1950-51", "1953-54", "1964-65", "1966-67", "1968-69", "1970-71", "1971-72", "1973-74", "1974-75", "1976-77", "1979-80", "1984-85", "1987-88", "1988-89", "1994-95", "2000-01", "2003-04", "2004-05", "2006-07", "2010-11", "2012-13", "2016-17", "2017-18", "2018-19", "2019-20", "2022-23", "2023-24"] },
    { "nombre": "Scottish League Cup (Copa de la Liga)", "cantidad": 21, "anios": ["1956-57", "1957-58", "1965-66", "1966-67", "1967-68", "1968-69", "1969-70", "1974-75", "1982-83", "1997-98", "1999-00", "2000-01", "2005-06", "2008-09", "2014-15", "2016-17", "2017-18", "2018-19", "2019-20", "2021-22", "2022-23"] },
    { "nombre": "European Cup (Copa de Europa)", "cantidad": 1, "anios": ["1966-67"] }
  ],
  "aberdeen": [
    { "nombre": "Scottish League Championship", "cantidad": 4, "anios": ["1954-55", "1979-80", "1983-84", "1984-85"] },
    { "nombre": "Scottish Cup", "cantidad": 7, "anios": ["1946-47", "1969-70", "1981-82", "1982-83", "1983-84", "1985-86", "1989-90"] },
    { "nombre": "Scottish League Cup", "cantidad": 6, "anios": ["1955-56", "1976-77", "1985-86", "1989-90", "1995-96", "2013-14"] },
    { "nombre": "European Cup Winners' Cup (Recopa de Europa)", "cantidad": 1, "anios": ["1982-83"] },
    { "nombre": "European Super Cup (Supercopa de Europa)", "cantidad": 1, "anios": ["1983"] }
  ],
  "dundee-united": [
    { "nombre": "Scottish League Championship", "cantidad": 1, "anios": ["1982-83"] },
    { "nombre": "Scottish Cup", "cantidad": 2, "anios": ["1993-94", "2009-10"] },
    { "nombre": "Scottish League Cup", "cantidad": 2, "anios": ["1979-80", "1980-81"] }
  ],
  "hearts": [
    { "nombre": "Scottish League Championship", "cantidad": 4, "anios": ["1894-95", "1896-97", "1957-58", "1959-60"] },
    { "nombre": "Scottish Cup", "cantidad": 8, "anios": ["1890-91", "1895-96", "1900-01", "1905-06", "1955-56", "1997-98", "2005-06", "2011-12"] },
    { "nombre": "Scottish League Cup", "cantidad": 4, "anios": ["1954-55", "1958-59", "1959-60", "1962-63"] }
  ],
  "hibernian": [
    { "nombre": "Scottish League Championship", "cantidad": 4, "anios": ["1902-03", "1947-48", "1950-51", "1951-52"] },
    { "nombre": "Scottish Cup", "cantidad": 3, "anios": ["1886-87", "1901-02", "2015-16"] },
    { "nombre": "Scottish League Cup", "cantidad": 3, "anios": ["1972-73", "1991-92", "2006-07"] }
  ],
  "motherwell": [
    { "nombre": "Scottish League Championship", "cantidad": 1, "anios": ["1931-32"] },
    { "nombre": "Scottish Cup", "cantidad": 2, "anios": ["1951-52", "1990-91"] },
    { "nombre": "Scottish League Cup", "cantidad": 1, "anios": ["1950-51"] }
  ],
  "kilmarnock": [
    { "nombre": "Scottish League Championship", "cantidad": 1, "anios": ["1964-65"] },
    { "nombre": "Scottish Cup", "cantidad": 3, "anios": ["1919-20", "1928-29", "1996-97"] },
    { "nombre": "Scottish League Cup", "cantidad": 1, "anios": ["2011-12"] }
  ],
  "st-mirren": [
    { "nombre": "Scottish Cup", "cantidad": 3, "anios": ["1925-26", "1958-59", "1986-87"] },
    { "nombre": "Scottish League Cup", "cantidad": 1, "anios": ["2012-13"] },
    { "nombre": "Anglo-Scottish Cup", "cantidad": 1, "anios": ["1979-80"] }
  ],
  "st-johnstone": [
    { "nombre": "Scottish Cup", "cantidad": 2, "anios": ["2013-14", "2020-21"] },
    { "nombre": "Scottish League Cup", "cantidad": 1, "anios": ["2020-21"] }
  ],
  "dundee": [
    { "nombre": "Scottish League Championship", "cantidad": 1, "anios": ["1961-62"] },
    { "nombre": "Scottish Cup", "cantidad": 1, "anios": ["1909-10"] },
    { "nombre": "Scottish League Cup", "cantidad": 3, "anios": ["1951-52", "1952-53", "1973-74"] }
  ],
  "ross-county": [
    { "nombre": "Scottish League Cup", "cantidad": 1, "anios": ["2015-16"] }
  ]
};

Object.keys(d).forEach(k => {
    let p = `app/src/data/clubes/escocia/${k}.json`;
    if(fs.existsSync(p)){
        let j = JSON.parse(fs.readFileSync(p, 'utf8'));
        j.titulos = d[k];
        fs.writeFileSync(p, JSON.stringify(j, null, 2));
    }
});
console.log('Done!');
