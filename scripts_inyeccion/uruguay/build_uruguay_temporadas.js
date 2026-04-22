const fs = require('fs');
const path = require('path');

const fileOut = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'uruguay_temporadas.json');

const campeonatosUruguayos = [
  { a: 1900, c: "CURCC", s: "Albion" },
  { a: 1901, c: "CURCC", s: "Nacional" },
  { a: 1902, c: "Nacional", s: "CURCC" },
  { a: 1903, c: "Nacional", s: "CURCC" },
  { a: 1904, c: "No se disputó", s: "-" },
  { a: 1905, c: "CURCC", s: "Nacional" },
  { a: 1906, c: "Montevideo Wanderers", s: "CURCC" },
  { a: 1907, c: "CURCC", s: "Montevideo Wanderers" },
  { a: 1908, c: "River Plate FC", s: "Montevideo Wanderers" },
  { a: 1909, c: "Montevideo Wanderers", s: "CURCC" },
  { a: 1910, c: "River Plate FC", s: "CURCC" },
  { a: 1911, c: "CURCC", s: "Montevideo Wanderers" },
  { a: 1912, c: "Nacional", s: "CURCC" },
  { a: 1913, c: "River Plate FC", s: "Nacional" },
  { a: 1914, c: "River Plate FC", s: "Peñarol" },
  { a: 1915, c: "Nacional", s: "Peñarol" },
  { a: 1916, c: "Nacional", s: "Peñarol" },
  { a: 1917, c: "Nacional", s: "Peñarol" },
  { a: 1918, c: "Peñarol", s: "Nacional" },
  { a: 1919, c: "Nacional", s: "Universal" },
  { a: 1920, c: "Nacional", s: "Peñarol" },
  { a: 1921, c: "Peñarol", s: "Nacional" },
  { a: 1922, c: "Nacional", s: "Montevideo Wanderers" },
  { a: 1923, c: "Nacional", s: "Rampla Juniors" },
  { a: 1924, c: "Nacional", s: "Bella Vista" },
  { a: 1925, c: "No culminó", s: "-" },
  { a: 1926, c: "Peñarol", s: "Montevideo Wanderers", n: "Consejo Provisorio" },
  { a: 1927, c: "Rampla Juniors", s: "Peñarol" },
  { a: 1928, c: "Peñarol", s: "Rampla Juniors" },
  { a: 1929, c: "Peñarol", s: "Nacional" },
  { a: 1930, c: "No se disputó", s: "-" },
  { a: 1931, c: "Montevideo Wanderers", s: "Nacional" },
  { a: 1932, c: "Peñarol", s: "Rampla Juniors" },
  { a: 1933, c: "Nacional", s: "Peñarol" },
  { a: 1934, c: "Nacional", s: "Peñarol" },
  { a: 1935, c: "Peñarol", s: "Nacional" },
  { a: 1936, c: "Peñarol", s: "Nacional" },
  { a: 1937, c: "Peñarol", s: "Nacional" },
  { a: 1938, c: "Peñarol", s: "Nacional" },
  { a: 1939, c: "Nacional", s: "Peñarol" },
  { a: 1940, c: "Nacional", s: "Rampla Juniors" },
  { a: 1941, c: "Nacional", s: "Peñarol" },
  { a: 1942, c: "Nacional", s: "Peñarol" },
  { a: 1943, c: "Nacional", s: "Peñarol" },
  { a: 1944, c: "Peñarol", s: "Nacional" },
  { a: 1945, c: "Peñarol", s: "Nacional" },
  { a: 1946, c: "Nacional", s: "Peñarol" },
  { a: 1947, c: "Nacional", s: "Peñarol" },
  { a: 1948, c: "Incompleto (Huelga)", s: "-" },
  { a: 1949, c: "Peñarol", s: "Nacional" },
  { a: 1950, c: "Nacional", s: "Peñarol" },
  { a: 1951, c: "Peñarol", s: "Nacional" },
  { a: 1952, c: "Nacional", s: "Peñarol" },
  { a: 1953, c: "Peñarol", s: "Nacional" },
  { a: 1954, c: "Peñarol", s: "Nacional" },
  { a: 1955, c: "Nacional", s: "Peñarol" },
  { a: 1956, c: "Nacional", s: "Peñarol" },
  { a: 1957, c: "Nacional", s: "Peñarol" },
  { a: 1958, c: "Peñarol", s: "Nacional" },
  { a: 1959, c: "Peñarol", s: "Nacional" },
  { a: 1960, c: "Peñarol", s: "Cerro" },
  { a: 1961, c: "Peñarol", s: "Nacional" },
  { a: 1962, c: "Peñarol", s: "Nacional" },
  { a: 1963, c: "Nacional", s: "Peñarol" },
  { a: 1964, c: "Peñarol", s: "Rampla Juniors" },
  { a: 1965, c: "Peñarol", s: "Nacional" },
  { a: 1966, c: "Nacional", s: "Peñarol" },
  { a: 1967, c: "Peñarol", s: "Nacional" },
  { a: 1968, c: "Peñarol", s: "Nacional" },
  { a: 1969, c: "Nacional", s: "Peñarol" },
  { a: 1970, c: "Nacional", s: "Peñarol" },
  { a: 1971, c: "Nacional", s: "Peñarol" },
  { a: 1972, c: "Nacional", s: "Peñarol" },
  { a: 1973, c: "Peñarol", s: "Nacional" },
  { a: 1974, c: "Peñarol", s: "Nacional" },
  { a: 1975, c: "Peñarol", s: "Nacional" },
  { a: 1976, c: "Defensor", s: "Peñarol" },
  { a: 1977, c: "Nacional", s: "Peñarol" },
  { a: 1978, c: "Peñarol", s: "Nacional" },
  { a: 1979, c: "Peñarol", s: "Nacional" },
  { a: 1980, c: "Nacional", s: "Montevideo Wanderers" },
  { a: 1981, c: "Peñarol", s: "Nacional" },
  { a: 1982, c: "Peñarol", s: "Nacional" },
  { a: 1983, c: "Nacional", s: "Danubio" },
  { a: 1984, c: "Central Español", s: "Peñarol" },
  { a: 1985, c: "Peñarol", s: "Montevideo Wanderers" },
  { a: 1986, c: "Peñarol", s: "Nacional" },
  { a: 1987, c: "Defensor", s: "Nacional" },
  { a: 1988, c: "Danubio", s: "Peñarol" },
  { a: 1989, c: "Progreso", s: "Nacional" },
  { a: 1990, c: "Bella Vista", s: "Nacional" },
  { a: 1991, c: "Defensor Sporting", s: "Nacional" },
  { a: 1992, c: "Nacional", s: "River Plate" },
  { a: 1993, c: "Peñarol", s: "Defensor Sporting" },
  { a: 1994, c: "Peñarol", s: "Defensor Sporting" },
  { a: 1995, c: "Peñarol", s: "Nacional" },
  { a: 1996, c: "Peñarol", s: "Nacional" },
  { a: 1997, c: "Peñarol", s: "Defensor Sporting" },
  { a: 1998, c: "Nacional", s: "Peñarol" },
  { a: 1999, c: "Peñarol", s: "Nacional" },
  { a: 2000, c: "Nacional", s: "Peñarol" },
  { a: 2001, c: "Nacional", s: "Danubio" },
  { a: 2002, c: "Nacional", s: "Danubio" },
  { a: 2003, c: "Peñarol", s: "Nacional" },
  { a: 2004, c: "Danubio", s: "Nacional" },
  { a: "2005", c: "Nacional", s: "Defensor Sporting" },
  { a: "2005-06", c: "Nacional", s: "Rocha" },
  { a: "2006-07", c: "Danubio", s: "Peñarol" },
  { a: "2007-08", c: "Defensor Sporting", s: "Peñarol" },
  { a: "2008-09", c: "Nacional", s: "Defensor Sporting" },
  { a: "2009-10", c: "Peñarol", s: "Nacional" },
  { a: "2010-11", c: "Nacional", s: "Defensor Sporting" },
  { a: "2011-12", c: "Nacional", s: "Peñarol" },
  { a: "2012-13", c: "Peñarol", s: "Defensor Sporting" },
  { a: "2013-14", c: "Danubio", s: "Montevideo Wanderers" },
  { a: "2014-15", c: "Nacional", s: "Peñarol" },
  { a: "2015-16", c: "Peñarol", s: "Nacional" },
  { a: 2016, c: "Nacional", s: "Montevideo Wanderers" },
  { a: 2017, c: "Peñarol", s: "Defensor Sporting" },
  { a: 2018, c: "Peñarol", s: "Nacional" },
  { a: 2019, c: "Nacional", s: "Peñarol" },
  { a: 2020, c: "Nacional", s: "Rentistas" },
  { a: 2021, c: "Peñarol", s: "Nacional" },
  { a: 2022, c: "Nacional", s: "Liverpool" },
  { a: 2023, c: "Liverpool", s: "Peñarol" },
  { a: 2024, c: "Peñarol", s: "Nacional" },
  { a: 2025, c: "A definir", s: "A definir" },
  { a: 2026, c: "A definir", s: "A definir" }
];

const intermedios = [
  { a: 2017, c: "Nacional", s: "Defensor Sporting" },
  { a: 2018, c: "Nacional", s: "Montevideo City Torque" },
  { a: 2019, c: "Liverpool", s: "River Plate" },
  { a: 2020, c: "Nacional", s: "Montevideo Wanderers" },
  { a: 2021, c: "No se disputó", s: "-" },
  { a: 2022, c: "Nacional", s: "Liverpool" },
  { a: 2023, c: "Defensor Sporting", s: "Montevideo Wanderers" },
  { a: 2024, c: "Nacional", s: "Peñarol" },
  { a: 2025, c: "A definir", s: "A definir" },
  { a: 2026, c: "A definir", s: "A definir" }
];

const supercopas = [
  { a: 2018, c: "Peñarol", s: "Nacional" },
  { a: 2019, c: "Nacional", s: "Peñarol" },
  { a: 2020, c: "Liverpool", s: "Nacional" },
  { a: 2021, c: "Nacional", s: "Montevideo Wanderers" },
  { a: 2022, c: "Peñarol", s: "Plaza Colonia" },
  { a: 2023, c: "Liverpool", s: "Nacional" },
  { a: 2024, c: "Liverpool", s: "Defensor Sporting" },
  { a: 2025, c: "Nacional", s: "Peñarol" },
  { a: 2026, c: "A definir", s: "A definir" }
];

const copasAuf = [
  { a: 2022, c: "Defensor Sporting", s: "La Luz" },
  { a: 2023, c: "Defensor Sporting", s: "Montevideo City Torque" },
  { a: 2024, c: "Defensor Sporting", s: "Nacional" },
  { a: 2025, c: "A definir", s: "A definir" },
  { a: 2026, c: "A definir", s: "A definir" }
];

const output = [];

const parseYearStr = (y) => typeof y === 'string' && y.includes('-') ? y.split('-')[0] : String(y);

campeonatosUruguayos.forEach((t) => {
  output.push({
    id: `uru_camp_${t.a}`,
    torneo: `Campeonato Uruguayo ${t.n ? t.n + ' ' : ''}${t.a}`,
    anio: parseYearStr(t.a),
    campeon: t.c,
    subcampeon: t.s,
    posiciones: []
  });
});

intermedios.forEach((t) => {
  output.push({
    id: `uru_int_${t.a}`,
    torneo: `Torneo Intermedio ${t.a}`,
    anio: String(t.a),
    campeon: t.c,
    subcampeon: t.s,
    posiciones: []
  });
});

supercopas.forEach((t) => {
  output.push({
    id: `uru_sup_${t.a}`,
    torneo: `Supercopa Uruguaya ${t.a}`,
    anio: String(t.a),
    campeon: t.c,
    subcampeon: t.s,
    posiciones: []
  });
});

copasAuf.forEach((t) => {
  output.push({
    id: `uru_auf_${t.a}`,
    torneo: `Copa AUF Uruguay ${t.a}`,
    anio: String(t.a),
    campeon: t.c,
    subcampeon: t.s,
    posiciones: []
  });
});

fs.writeFileSync(fileOut, JSON.stringify(output, null, 2));
console.log(`✅ ${output.length} torneos inyectados en uruguay_temporadas.json`);
