const fs = require('fs');

let indexId = 1;
function gen(anio, torneo, campeon) {
    return {
        id: `ita_${indexId++}`,
        anio: String(anio),
        torneo,
        campeon
    };
}

const data = [];

// SERIE A (1898 - 2024)
data.push(gen(1898, "Campeonato Italiano", "Genoa"));
data.push(gen(1899, "Campeonato Italiano", "Genoa"));
data.push(gen(1900, "Campeonato Italiano", "Genoa"));
data.push(gen(1901, "Campeonato Italiano", "Milan"));
data.push(gen(1902, "Campeonato Italiano", "Genoa"));
data.push(gen(1903, "Campeonato Italiano", "Genoa"));
data.push(gen(1904, "Prima Categoria", "Genoa"));
data.push(gen(1905, "Prima Categoria", "Juventus"));
data.push(gen(1906, "Prima Categoria", "Milan"));
data.push(gen(1907, "Prima Categoria", "Milan"));
data.push(gen(1908, "Prima Categoria", "Pro Vercelli"));
data.push(gen(1909, "Prima Categoria", "Pro Vercelli"));
data.push(gen(1910, "Prima Categoria", "Inter"));
data.push(gen(1911, "Prima Categoria", "Pro Vercelli"));
data.push(gen(1912, "Prima Categoria", "Pro Vercelli"));
data.push(gen(1913, "Prima Categoria", "Pro Vercelli"));
data.push(gen(1914, "Prima Categoria", "Casale"));
data.push(gen(1915, "Prima Categoria", "Genoa"));
// WWI 1916-1919
data.push(gen(1920, "Prima Categoria", "Inter"));
data.push(gen(1921, "Prima Categoria", "Pro Vercelli"));
data.push(gen(1922, "Prima Divisione (CCI)", "Pro Vercelli"));
data.push(gen(1922, "Prima Categoria (FIGC)", "Novese"));
data.push(gen(1923, "Prima Divisione", "Genoa"));
data.push(gen(1924, "Prima Divisione", "Genoa"));
data.push(gen(1925, "Prima Divisione", "Bologna"));
data.push(gen(1926, "Prima Divisione", "Juventus"));
data.push(gen(1927, "Divisione Nazionale", "Revocado (Torino)"));
data.push(gen(1928, "Divisione Nazionale", "Torino"));
data.push(gen(1929, "Divisione Nazionale", "Bologna"));

const serieA = [
    [1930, "Inter"], [1931, "Juventus"], [1932, "Juventus"], [1933, "Juventus"], [1934, "Juventus"],
    [1935, "Juventus"], [1936, "Bologna"], [1937, "Bologna"], [1938, "Inter"], [1939, "Bologna"],
    [1940, "Inter"], [1941, "Bologna"], [1942, "Roma"], [1943, "Torino"],
    [1946, "Torino"], [1947, "Torino"], [1948, "Torino"], [1949, "Torino"], [1950, "Juventus"],
    [1951, "Milan"], [1952, "Juventus"], [1953, "Inter"], [1954, "Inter"], [1955, "Milan"],
    [1956, "Fiorentina"], [1957, "Milan"], [1958, "Juventus"], [1959, "Milan"], [1960, "Juventus"],
    [1961, "Juventus"], [1962, "Milan"], [1963, "Inter"], [1964, "Bologna"], [1965, "Inter"],
    [1966, "Inter"], [1967, "Juventus"], [1968, "Milan"], [1969, "Fiorentina"], [1970, "Cagliari"],
    [1971, "Inter"], [1972, "Juventus"], [1973, "Juventus"], [1974, "Lazio"], [1975, "Juventus"],
    [1976, "Torino"], [1977, "Juventus"], [1978, "Juventus"], [1979, "Milan"], [1980, "Inter"],
    [1981, "Juventus"], [1982, "Juventus"], [1983, "Roma"], [1984, "Juventus"], [1985, "Hellas Verona"],
    [1986, "Juventus"], [1987, "Napoli"], [1988, "Milan"], [1989, "Inter"], [1990, "Napoli"],
    [1991, "Sampdoria"], [1992, "Milan"], [1993, "Milan"], [1994, "Milan"], [1995, "Juventus"],
    [1996, "Milan"], [1997, "Juventus"], [1998, "Juventus"], [1999, "Milan"], [2000, "Lazio"],
    [2001, "Roma"], [2002, "Juventus"], [2003, "Juventus"], [2004, "Milan"], [2005, "Juventus (Revocado)"],
    [2006, "Inter"], [2007, "Inter"], [2008, "Inter"], [2009, "Inter"], [2010, "Inter"],
    [2011, "Milan"], [2012, "Juventus"], [2013, "Juventus"], [2014, "Juventus"], [2015, "Juventus"],
    [2016, "Juventus"], [2017, "Juventus"], [2018, "Juventus"], [2019, "Juventus"], [2020, "Juventus"],
    [2021, "Inter"], [2022, "Milan"], [2023, "Napoli"], [2024, "Inter"]
];

for (const s of serieA) {
    data.push(gen(s[0], "Serie A", s[1]));
}

const coppaItaliaText = `1922: Vado
1936: Torino
1937: Genoa
1938: Juventus
1939: Inter
1940: Fiorentina
1941: Venezia
1942: Juventus
1943: Torino
1958: Lazio
1959: Juventus
1960: Juventus
1961: Fiorentina
1962: Napoli
1963: Atalanta
1964: Roma
1965: Juventus
1966: Fiorentina
1967: Milan
1968: Torino
1969: Roma
1970: Bologna
1971: Torino
1972: Milan
1973: Milan
1974: Bologna
1975: Fiorentina
1976: Napoli
1977: Milan
1978: Inter
1979: Juventus
1980: Roma
1981: Roma
1982: Inter
1983: Juventus
1984: Roma
1985: Sampdoria
1986: Roma
1987: Napoli
1988: Sampdoria
1989: Sampdoria
1990: Juventus
1991: Roma
1992: Parma
1993: Torino
1994: Sampdoria
1995: Juventus
1996: Fiorentina
1997: Vicenza
1998: Lazio
1999: Parma
2000: Lazio
2001: Fiorentina
2002: Parma
2003: Milan
2004: Lazio
2005: Inter
2006: Inter
2007: Roma
2008: Roma
2009: Lazio
2010: Inter
2011: Inter
2012: Napoli
2013: Lazio
2014: Napoli
2015: Juventus
2016: Juventus
2017: Juventus
2018: Juventus
2019: Lazio
2020: Napoli
2021: Juventus
2022: Inter
2023: Inter
2024: Juventus`;

const coppaLines = coppaItaliaText.trim().split('\n');
for (const line of coppaLines) {
    const parts = line.split(':');
    if (parts.length === 2) {
        data.push(gen(parts[0].trim(), "Coppa Italia", parts[1].trim()));
    }
}

const supercoppaText = `1988: Milan
1989: Inter
1990: Napoli
1991: Sampdoria
1992: Milan
1993: Milan
1994: Milan
1995: Juventus
1996: Fiorentina
1997: Juventus
1998: Lazio
1999: Parma
2000: Lazio
2001: Roma
2002: Juventus
2003: Juventus
2004: Milan
2005: Inter
2006: Inter
2007: Roma
2008: Inter
2009: Lazio
2010: Inter
2011: Milan
2012: Juventus
2013: Juventus
2014: Napoli
2015: Juventus
2016: Milan
2017: Lazio
2018: Juventus
2019: Lazio
2020: Juventus
2021: Inter
2022: Inter
2023: Inter`;

const scLines = supercoppaText.trim().split('\n');
for (const line of scLines) {
    const parts = line.split(':');
    if (parts.length === 2) {
        data.push(gen(parts[0].trim(), "Supercoppa Italiana", parts[1].trim()));
    }
}

fs.writeFileSync('c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/italia_temporadas.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Generado italia_temporadas.json con', data.length, 'torneos.');
