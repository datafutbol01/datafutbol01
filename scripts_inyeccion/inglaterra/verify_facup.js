const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const rawList = `1871-72	Wanderers	Royal Engineers	1-0
1872-73	Wanderers	Oxford University	2-0
1873-74	Oxford University	Royal Engineers	2-0
1874-75	Royal Engineers	Old Etonians	1-1 y 2-0
1875-76	Wanderers	Old Etonians	1-1 y 3-0
1876-77	Wanderers	Oxford University	2-1
1877-78	Wanderers	Royal Engineers	3-1
1878-79	Old Etonians	Clapham Rovers	1-0
1879-80	Clapham Rovers	Oxford University	1-0
1880-81	Old Carthusians	Old Etonians	3-0
1881-82	Old Etonians	Blackburn Rovers	1-0
1882-83	Blackburn Olympic	Old Etonians	2-1
1883-84	Blackburn Rovers	Queen's Park	2-1
1884-85	Blackburn Rovers	Queen's Park	2-0
1885-86	Blackburn Rovers	West Bromwich Albion	0-0 y 2-0
1886-87	Aston Villa	West Bromwich Albion	2-0
1887-88	West Bromwich Albion	Preston North End	2-1
1888-89	Preston North End	Wolverhampton	3-0
1889-90	Blackburn Rovers	The Wednesday	6-1
1890-91	Blackburn Rovers	Notts County	3-1
1891-92	West Bromwich Albion	Aston Villa	3-0
1892-93	Wolverhampton	Everton	1-0
1893-94	Notts County	Bolton Wanderers	4-1
1894-95	Aston Villa	West Bromwich Albion	1-0
1895-96	The Wednesday	Wolverhampton	2-1
1896-97	Aston Villa	Everton	3-2
1897-98	Nottingham Forest	Derby County	3-1
1898-99	Sheffield United	Derby County	4-1
1899-1900	Bury	Southampton	4-0
1900-01	Tottenham Hotspur	Sheffield United	2-2 y 3-1
1901-02	Sheffield United	Southampton	1-1 y 2-1
1902-03	Bury	Derby County	6-0
1903-04	Manchester City	Bolton Wanderers	1-0
1904-05	Aston Villa	Newcastle United	2-0
1905-06	Everton	Newcastle United	1-0
1906-07	The Wednesday	Everton	2-1
1907-08	Wolverhampton	Newcastle United	3-1
1908-09	Manchester United	Bristol City	1-0
1909-10	Newcastle United	Barnsley	1-1 y 2-0
1910-11	Bradford City	Newcastle United	0-0 y 1-0
1911-12	Barnsley	West Bromwich Albion	0-0 y 1-0
1912-13	Aston Villa	Sunderland	1-0
1913-14	Burnley	Liverpool	1-0
1914-15	Sheffield United	Chelsea	3-0
1915-19	Primera Guerra Mundial
1919-20	Aston Villa	Huddersfield Town	1-0
1920-21	Tottenham Hotspur	Wolverhampton	1-0
1921-22	Huddersfield Town	Preston North End	1-0
1922-23	Bolton Wanderers	West Ham United	2-0
1923-24	Newcastle United	Aston Villa	2-0
1924-25	Sheffield United	Cardiff City	1-0
1925-26	Bolton Wanderers	Manchester City	1-0
1926-27	Cardiff City	Arsenal	1-0
1927-28	Blackburn Rovers	Huddersfield Town	3-1
1928-29	Bolton Wanderers	Portsmouth	2-0
1929-30	Arsenal	Huddersfield Town	2-0
1930-31	West Bromwich Albion	Birmingham	3-1
1931-32	Newcastle United	Arsenal	2-1
1932-33	Everton	Manchester City	3-0
1933-34	Manchester City	Portsmouth	2-1
1934-35	Sheffield Wednesday	West Bromwich Albion	4-2
1935-36	Arsenal	Sheffield United	1-0
1936-37	Sunderland	Preston North End	3-1
1937-38	Preston North End	Huddersfield Town	1-0
1938-39	Portsmouth	Wolverhampton	4-1
1939-45	Segunda Guerra Mundial
1945-46	Derby County	Charlton Athletic	4-1
1946-47	Charlton Athletic	Burnley	1-0
1947-48	Manchester United	Blackpool	4-2
1948-49	Wolverhampton Wanderers	Leicester City	3-1
1949-50	Arsenal	Liverpool	2-0
1950-51	Newcastle United	Blackpool	2-0
1951-52	Newcastle United	Arsenal	1-0
1952-53	Blackpool	Bolton Wanderers	4-3
1953-54	West Bromwich Albion	Preston North End	3-2
1954-55	Newcastle United	Manchester City	3-1
1955-56	Manchester City	Birmingham City	3-1
1956-57	Aston Villa	Manchester United	2-1
1957-58	Bolton Wanderers	Manchester United	2-0
1958-59	Nottingham Forest	Luton Town	2-1
1959-60	Wolverhampton Wanderers	Blackburn Rovers	3-0
1960-61	Tottenham Hotspur	Leicester City	2-0
1961-62	Tottenham Hotspur	Burnley	3-1
1962-63	Manchester United	Leicester City	3-1
1963-64	West Ham United	Preston North End	3-2
1964-65	Liverpool	Leeds United	2-1
1965-66	Everton	Sheffield Wednesday	3-2
1966-67	Tottenham Hotspur	Chelsea	2-1
1967-68	West Bromwich Albion	Everton	1-0
1968-69	Manchester City	Leicester City	1-0
1969-70	Chelsea	Leeds United	2-2 y 2-1
1970-71	Arsenal	Liverpool	2-1
1971-72	Leeds United	Arsenal	1-0
1972-73	Sunderland	Leeds United	1-0
1973-74	Liverpool	Newcastle United	3-0
1974-75	West Ham United	Fulham	2-0
1975-76	Southampton	Manchester United	1-0
1976-77	Manchester United	Liverpool	2-1
1977-78	Ipswich Town	Arsenal	1-0
1978-79	Arsenal	Manchester United	3-2
1979-80	West Ham United	Arsenal	1:0
1980-81	Tottenham Hotspur	Manchester City	1-1 y 3:2
1981-82	Tottenham Hotspur	Queens Park Rangers	1-1 y 1-0
1982-83	Manchester United	Brighton & Hove Albion	2-2 y 4-0
1983-84	Everton	Watford	2-0
1984-85	Manchester United	Everton	1-0
1985-86	Liverpool	Everton	3-1
1986-87	Coventry City	Tottenham Hotspur	3-2
1987-88	Wimbledon	Liverpool	1-0
1988-89	Liverpool	Everton	3-2
1989-90	Manchester United	Crystal Palace	3-3 y 1-0
1990-91	Tottenham Hotspur	Nottingham Forest	2-1
1991-92	Liverpool	Sunderland	2-0
1992-93	Arsenal	Sheffield Wednesday	1-1 y 2-1
1993-94	Manchester United	Chelsea	4-0
1994-95	Everton	Manchester United	1-0
1995-96	Manchester United	Liverpool	1-0
1996-97	Chelsea	Middlesbrough	2-0
1997-98	Arsenal	Newcastle United	2-0
1998-99	Manchester United	Newcastle United	2-0
1999-00	Chelsea	Aston Villa	1-0
2000-01	Liverpool	Arsenal	2-1
2001-02	Arsenal	Chelsea	2-0
2002-03	Arsenal	Southampton	1-0
2003-04	Manchester United	Millwall	3-0
2004-05	Arsenal	Manchester United	0-0 (5-4)
2005-06	Liverpool	West Ham United	3-3 (3-1)
2006-07	Chelsea	Manchester United	1-0
2007-08	Portsmouth	Cardiff City	1-0
2008-09	Chelsea	Everton	2-1
2009-10	Chelsea	Portsmouth	1-0
2010-11	Manchester City	Stoke City	1-0
2011-12	Chelsea	Liverpool	2-1
2012-13	Wigan Athletic	Manchester City	1-0
2013-14	Arsenal	Hull City	3-2
2014-15	Arsenal	Aston Villa	4-0
2015-16	Manchester United	Crystal Palace	2-1
2016-17	Arsenal	Chelsea	2-1
2017-18	Chelsea	Manchester United	1-0
2018-19	Manchester City	Watford	6-0
2019-20	Arsenal	Chelsea	2-1
2020-21	Leicester City	Chelsea	1-0
2021-22	Liverpool	Chelsea	0:0 (6-5)
2022-23	Manchester City	Manchester United	2-1
2023-24	Manchester United	Manchester City	2-1
2024-25	Crystal Palace	Manchester City	1-0`;

const targetMap = {
  'arsenal.json': 'Arsenal',
  'aston-villa.json': 'Aston Villa',
  'bournemouth.json': 'Bournemouth',
  'brentford.json': 'Brentford',
  'brighton.json': 'Brighton',
  'burnley.json': 'Burnley',
  'chelsea.json': 'Chelsea',
  'crystal-palace.json': 'Crystal Palace',
  'everton.json': 'Everton',
  'fulham.json': 'Fulham',
  'leeds-united.json': 'Leeds United',
  'liverpool.json': 'Liverpool',
  'manchester-city.json': 'Manchester City',
  'manchester-united.json': 'Manchester United',
  'newcastle.json': 'Newcastle United',
  'nottingham-forest.json': 'Nottingham Forest',
  'sunderland.json': 'Sunderland',
  'tottenham.json': 'Tottenham Hotspur',
  'west-ham-united.json': 'West Ham United',
  // Note: some clubs might appear with "Wanderers" implicitly. Wovlerhampton = Wolverhampton Wanderers.
  'wolverhampton-wanderers.json': 'Wolverhampton Wanderers'
};

const userYearsByClub = {};
for (const val of Object.values(targetMap)) {
  userYearsByClub[val] = [];
}
// Alias mapping
const alias = {
  "Wolverhampton": "Wolverhampton Wanderers"
};

const lines = rawList.split('\n');
for (let line of lines) {
  if (!line.trim() || line.includes('Guerra Mundial')) continue;
  let parts = line.split('\t');
  if (parts.length < 2) continue;
  
  let yearRaw = parts[0].trim();
  let clubName = parts[1].trim();
  if (alias[clubName]) clubName = alias[clubName];

  Object.keys(userYearsByClub).forEach(trackedClub => {
     if (clubName === trackedClub) {
        userYearsByClub[trackedClub].push(yearRaw);
     }
  });
}

// Ensure the format in JSON matches exactly the format returned (like '1988-89')
const res = {};
let hasDiscrepancies = false;

Object.entries(targetMap).forEach(([file, clubName]) => {
  if (fs.existsSync(path + file)) {
     const data = JSON.parse(fs.readFileSync(path + file));
     let liga = data.titulos.find(t => t.nombre === 'FA Cup');
     if (!liga) {
       // Si el equipo no tenía creada la seccion FA Cup y la ganó según la lista, la creamos
       if (userYearsByClub[clubName].length > 0) {
          liga = { nombre: 'FA Cup', cantidad: userYearsByClub[clubName].length, años: userYearsByClub[clubName] };
          data.titulos.push(liga);
          fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
          res[clubName] = { inyectado_nuevo: userYearsByClub[clubName] };
          hasDiscrepancies = true;
       }
       return;
     }
     
     const myYears = liga.años || [];
     const uYears = userYearsByClub[clubName];
     
     if (uYears.join(',') !== myYears.join(',')) {
         res[clubName] = { 
           en_json_antes: myYears, 
           en_lista_usuario: uYears
         };
         // Autocorrect to exactly match the user list
         liga.años = uYears;
         liga.cantidad = uYears.length;
         fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
         hasDiscrepancies = true;
     }
  }
});

console.log(JSON.stringify(res, null, 2));
if (!hasDiscrepancies) console.log("NO DISCREPANCIES FOUND.");
