const fs = require('fs');
const path = require('path');

const data = [];

// Helper to push
function addT(anio, torneo, campeon) {
    let suffix = torneo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    let id = anio + "-" + suffix;
    data.push({ id, anio: anio.toString(), torneo, campeon, tabla_posiciones: [] });
}

// 1. LA LIGA (Primera División)
const laLigaChampions = [
    { y: "1929", c: "FC Barcelona" },
    { y: "1930", c: "Athletic Club" },
    { y: "1931", c: "Athletic Club" },
    { y: "1932", c: "Real Madrid" },
    { y: "1933", c: "Real Madrid" },
    { y: "1934", c: "Athletic Club" },
    { y: "1935", c: "Real Betis" },
    { y: "1936", c: "Athletic Club" },
    // 1937-1939 Guerra Civil
    { y: "1940", c: "Atlético de Madrid" }, // Athletic Aviación
    { y: "1941", c: "Atlético de Madrid" },
    { y: "1942", c: "Valencia CF" },
    { y: "1943", c: "Athletic Club" },
    { y: "1944", c: "Valencia CF" },
    { y: "1945", c: "FC Barcelona" },
    { y: "1946", c: "Sevilla FC" },
    { y: "1947", c: "Valencia CF" },
    { y: "1948", c: "FC Barcelona" },
    { y: "1949", c: "FC Barcelona" },
    { y: "1950", c: "Atlético de Madrid" },
    { y: "1951", c: "Atlético de Madrid" },
    { y: "1952", c: "FC Barcelona" },
    { y: "1953", c: "FC Barcelona" },
    { y: "1954", c: "Real Madrid" },
    { y: "1955", c: "Real Madrid" },
    { y: "1956", c: "Athletic Club" },
    { y: "1957", c: "Real Madrid" },
    { y: "1958", c: "Real Madrid" },
    { y: "1959", c: "FC Barcelona" },
    { y: "1960", c: "FC Barcelona" },
    { y: "1961", c: "Real Madrid" },
    { y: "1962", c: "Real Madrid" },
    { y: "1963", c: "Real Madrid" },
    { y: "1964", c: "Real Madrid" },
    { y: "1965", c: "Real Madrid" },
    { y: "1966", c: "Atlético de Madrid" },
    { y: "1967", c: "Real Madrid" },
    { y: "1968", c: "Real Madrid" },
    { y: "1969", c: "Real Madrid" },
    { y: "1970", c: "Atlético de Madrid" },
    { y: "1971", c: "Valencia CF" },
    { y: "1972", c: "Real Madrid" },
    { y: "1973", c: "Atlético de Madrid" },
    { y: "1974", c: "FC Barcelona" },
    { y: "1975", c: "Real Madrid" },
    { y: "1976", c: "Real Madrid" },
    { y: "1977", c: "Atlético de Madrid" },
    { y: "1978", c: "Real Madrid" },
    { y: "1979", c: "Real Madrid" },
    { y: "1980", c: "Real Madrid" },
    { y: "1981", c: "Real Sociedad" },
    { y: "1982", c: "Real Sociedad" },
    { y: "1983", c: "Athletic Club" },
    { y: "1984", c: "Athletic Club" },
    { y: "1985", c: "FC Barcelona" },
    { y: "1986", c: "Real Madrid" },
    { y: "1987", c: "Real Madrid" },
    { y: "1988", c: "Real Madrid" },
    { y: "1989", c: "Real Madrid" },
    { y: "1990", c: "Real Madrid" },
    { y: "1991", c: "FC Barcelona" },
    { y: "1992", c: "FC Barcelona" },
    { y: "1993", c: "FC Barcelona" },
    { y: "1994", c: "FC Barcelona" },
    { y: "1995", c: "Real Madrid" },
    { y: "1996", c: "Atlético de Madrid" },
    { y: "1997", c: "Real Madrid" },
    { y: "1998", c: "FC Barcelona" },
    { y: "1999", c: "FC Barcelona" },
    { y: "2000", c: "Deportivo La Coruña" },
    { y: "2001", c: "Real Madrid" },
    { y: "2002", c: "Valencia CF" },
    { y: "2003", c: "Real Madrid" },
    { y: "2004", c: "Valencia CF" },
    { y: "2005", c: "FC Barcelona" },
    { y: "2006", c: "FC Barcelona" },
    { y: "2007", c: "Real Madrid" },
    { y: "2008", c: "Real Madrid" },
    { y: "2009", c: "FC Barcelona" },
    { y: "2010", c: "FC Barcelona" },
    { y: "2011", c: "FC Barcelona" },
    { y: "2012", c: "Real Madrid" },
    { y: "2013", c: "FC Barcelona" },
    { y: "2014", c: "Atlético de Madrid" },
    { y: "2015", c: "FC Barcelona" },
    { y: "2016", c: "FC Barcelona" },
    { y: "2017", c: "Real Madrid" },
    { y: "2018", c: "FC Barcelona" },
    { y: "2019", c: "FC Barcelona" },
    { y: "2020", c: "Real Madrid" },
    { y: "2021", c: "Atlético de Madrid" },
    { y: "2022", c: "Real Madrid" },
    { y: "2023", c: "FC Barcelona" },
    { y: "2024", c: "Real Madrid" }
];

for(let item of laLigaChampions) {
    addT(item.y, "La Liga", item.c);
}

// 2. COPA DEL REY
const copaDelReyChampions = [
    { y: "1903", c: "Athletic Club" },
    { y: "1904", c: "Athletic Club" },
    { y: "1905", c: "Real Madrid" },
    { y: "1906", c: "Real Madrid" },
    { y: "1907", c: "Real Madrid" },
    { y: "1908", c: "Real Madrid" },
    { y: "1909", c: "Real Sociedad" }, // As Club Ciclista de San Sebastián
    { y: "1910", c: "Athletic Club" },
    { y: "1910-b", c: "FC Barcelona" }, // FEF and UEC (both recognized)
    { y: "1911", c: "Athletic Club" },
    { y: "1912", c: "FC Barcelona" },
    { y: "1913", c: "Racing de Irún" },
    { y: "1913-b", c: "FC Barcelona" },
    { y: "1914", c: "Athletic Club" },
    { y: "1915", c: "Athletic Club" },
    { y: "1916", c: "Athletic Club" },
    { y: "1917", c: "Real Madrid" },
    { y: "1918", c: "Real Unión" },
    { y: "1919", c: "Arenas de Getxo" },
    { y: "1920", c: "FC Barcelona" },
    { y: "1921", c: "Athletic Club" },
    { y: "1922", c: "FC Barcelona" },
    { y: "1923", c: "Athletic Club" },
    { y: "1924", c: "Real Unión" },
    { y: "1925", c: "FC Barcelona" },
    { y: "1926", c: "FC Barcelona" },
    { y: "1927", c: "Real Unión" },
    { y: "1928", c: "FC Barcelona" },
    { y: "1929", c: "RCD Espanyol" },
    { y: "1930", c: "Athletic Club" },
    { y: "1931", c: "Athletic Club" },
    { y: "1932", c: "Athletic Club" },
    { y: "1933", c: "Athletic Club" },
    { y: "1934", c: "Real Madrid" },
    { y: "1935", c: "Sevilla FC" },
    { y: "1936", c: "Real Madrid" },
    { y: "1939", c: "Sevilla FC" },
    { y: "1940", c: "RCD Espanyol" },
    { y: "1941", c: "Valencia CF" },
    { y: "1942", c: "FC Barcelona" },
    { y: "1943", c: "Athletic Club" },
    { y: "1944", c: "Athletic Club" },
    { y: "1945", c: "Athletic Club" },
    { y: "1946", c: "Real Madrid" },
    { y: "1947", c: "Real Madrid" },
    { y: "1948", c: "Sevilla FC" },
    { y: "1949", c: "Valencia CF" },
    { y: "1950", c: "Athletic Club" },
    { y: "1951", c: "FC Barcelona" },
    { y: "1952", c: "FC Barcelona" },
    { y: "1953", c: "FC Barcelona" },
    { y: "1954", c: "Valencia CF" },
    { y: "1955", c: "Athletic Club" },
    { y: "1956", c: "Athletic Club" },
    { y: "1957", c: "FC Barcelona" },
    { y: "1958", c: "Athletic Club" },
    { y: "1959", c: "FC Barcelona" },
    { y: "1960", c: "Atlético de Madrid" },
    { y: "1961", c: "Atlético de Madrid" },
    { y: "1962", c: "Real Madrid" },
    { y: "1963", c: "FC Barcelona" },
    { y: "1964", c: "Real Zaragoza" },
    { y: "1965", c: "Atlético de Madrid" },
    { y: "1966", c: "Real Zaragoza" },
    { y: "1967", c: "Valencia CF" },
    { y: "1968", c: "FC Barcelona" },
    { y: "1969", c: "Athletic Club" },
    { y: "1970", c: "Real Madrid" },
    { y: "1971", c: "FC Barcelona" },
    { y: "1972", c: "Atlético de Madrid" },
    { y: "1973", c: "Athletic Club" },
    { y: "1974", c: "Real Madrid" },
    { y: "1975", c: "Real Madrid" },
    { y: "1976", c: "Atlético de Madrid" },
    { y: "1977", c: "Real Betis" },
    { y: "1978", c: "FC Barcelona" },
    { y: "1979", c: "Valencia CF" },
    { y: "1980", c: "Real Madrid" },
    { y: "1981", c: "FC Barcelona" },
    { y: "1982", c: "Real Madrid" },
    { y: "1983", c: "FC Barcelona" },
    { y: "1984", c: "Athletic Club" },
    { y: "1985", c: "Atlético de Madrid" },
    { y: "1986", c: "Real Zaragoza" },
    { y: "1987", c: "Real Sociedad" },
    { y: "1988", c: "FC Barcelona" },
    { y: "1989", c: "Real Madrid" },
    { y: "1990", c: "FC Barcelona" },
    { y: "1991", c: "Atlético de Madrid" },
    { y: "1992", c: "Atlético de Madrid" },
    { y: "1993", c: "Real Madrid" },
    { y: "1994", c: "Real Zaragoza" },
    { y: "1995", c: "Deportivo La Coruña" },
    { y: "1996", c: "Atlético de Madrid" },
    { y: "1997", c: "FC Barcelona" },
    { y: "1998", c: "FC Barcelona" },
    { y: "1999", c: "Valencia CF" },
    { y: "2000", c: "RCD Espanyol" },
    { y: "2001", c: "Real Zaragoza" },
    { y: "2002", c: "Deportivo La Coruña" },
    { y: "2003", c: "RCD Mallorca" },
    { y: "2004", c: "Real Zaragoza" },
    { y: "2005", c: "Real Betis" },
    { y: "2006", c: "RCD Espanyol" },
    { y: "2007", c: "Sevilla FC" },
    { y: "2008", c: "Valencia CF" },
    { y: "2009", c: "FC Barcelona" },
    { y: "2010", c: "Sevilla FC" },
    { y: "2011", c: "Real Madrid" },
    { y: "2012", c: "FC Barcelona" },
    { y: "2013", c: "Atlético de Madrid" },
    { y: "2014", c: "Real Madrid" },
    { y: "2015", c: "FC Barcelona" },
    { y: "2016", c: "FC Barcelona" },
    { y: "2017", c: "FC Barcelona" },
    { y: "2018", c: "FC Barcelona" },
    { y: "2019", c: "Valencia CF" },
    { y: "2020", c: "Real Sociedad" }, // Moved to 2021 due to covid, but belongs to 19-20 season
    { y: "2021", c: "FC Barcelona" },
    { y: "2022", c: "Real Betis" },
    { y: "2023", c: "Real Madrid" },
    { y: "2024", c: "Athletic Club" }
];

for(let item of copaDelReyChampions) {
    const finalYear = item.y.replace('-b','');
    addT(finalYear, "Copa del Rey", item.c);
}

// 3. SUPERCOPA DE ESPAÑA
const supercopaChampions = [
    { y: "1982", c: "Real Sociedad" },
    { y: "1983", c: "FC Barcelona" },
    { y: "1984", c: "Athletic Club" },
    { y: "1985", c: "Atlético de Madrid" },
    { y: "1988", c: "Real Madrid" },
    { y: "1989", c: "Real Madrid" },
    { y: "1990", c: "Real Madrid" },
    { y: "1991", c: "FC Barcelona" },
    { y: "1992", c: "FC Barcelona" },
    { y: "1993", c: "Real Madrid" },
    { y: "1994", c: "FC Barcelona" },
    { y: "1995", c: "Deportivo La Coruña" },
    { y: "1996", c: "FC Barcelona" },
    { y: "1997", c: "Real Madrid" },
    { y: "1998", c: "RCD Mallorca" },
    { y: "1999", c: "Valencia CF" },
    { y: "2000", c: "Deportivo La Coruña" },
    { y: "2001", c: "Real Madrid" },
    { y: "2002", c: "Deportivo La Coruña" },
    { y: "2003", c: "Real Madrid" },
    { y: "2004", c: "Real Zaragoza" },
    { y: "2005", c: "FC Barcelona" },
    { y: "2006", c: "FC Barcelona" },
    { y: "2007", c: "Sevilla FC" },
    { y: "2008", c: "Real Madrid" },
    { y: "2009", c: "FC Barcelona" },
    { y: "2010", c: "FC Barcelona" },
    { y: "2011", c: "FC Barcelona" },
    { y: "2012", c: "Real Madrid" },
    { y: "2013", c: "FC Barcelona" },
    { y: "2014", c: "Atlético de Madrid" },
    { y: "2015", c: "Athletic Club" },
    { y: "2016", c: "FC Barcelona" },
    { y: "2017", c: "Real Madrid" },
    { y: "2018", c: "FC Barcelona" },
    { y: "2020", c: "Real Madrid" },
    { y: "2021", c: "Athletic Club" },
    { y: "2022", c: "Real Madrid" },
    { y: "2023", c: "FC Barcelona" },
    { y: "2024", c: "Real Madrid" }
];

for(let item of supercopaChampions) {
    addT(item.y, "Supercopa de España", item.c);
}

// 4. COPA DE LA LIGA
const copaLigaChampions = [
    { y: "1983", c: "FC Barcelona" },
    { y: "1984", c: "Real Valladolid" },
    { y: "1985", c: "Real Madrid" },
    { y: "1986", c: "FC Barcelona" }
];

for(let item of copaLigaChampions) {
    addT(item.y, "Copa de la Liga", item.c);
}

// 5. COPA EVA DUARTE (Pre-Supercopa)
const evaDuarteChampions = [
    { y: "1947", c: "Real Madrid" },
    { y: "1948", c: "FC Barcelona" },
    { y: "1949", c: "Valencia CF" },
    { y: "1950", c: "Athletic Club" },
    { y: "1951", c: "Atlético de Madrid" },
    { y: "1952", c: "FC Barcelona" },
    { y: "1953", c: "FC Barcelona" }
];

for(let item of evaDuarteChampions) {
    addT(item.y, "Copa Eva Duarte", item.c);
}

// Sort chronologically
data.sort((a,b) => parseInt(a.anio) - parseInt(b.anio));

const destinationFile = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'espania_temporadas.json');
fs.writeFileSync(destinationFile, JSON.stringify(data, null, 2));

console.log("Se inyectaron " + data.length + " temporadas y copas españolas.");
