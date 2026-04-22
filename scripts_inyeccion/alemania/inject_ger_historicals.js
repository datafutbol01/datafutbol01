const fs = require('fs');
const path = require('path');

const raw = `1903 VfB Leipzig (1)
1905 Union 92 Berlin (1)
1906 VfB Leipzig (2)
1907 Freiburger FC (1)
1908 Viktoria Berlin (1)
1909 Phönix Karlsruhe (1)
1910 Karlsruher FV (1)
1911 Viktoria Berlin (2)
1912 Holstein Kiel (1)
1913 VfB Leipzig (3)
1914 SpVgg Fürth (1)
1920 1. FC Nürnberg (1)
1921 1. FC Nürnberg (2)
1923 Hamburger SV (1)
1924 1. FC Nürnberg (3)
1925 1. FC Nürnberg (4)
1926 SpVgg Fürth (2)
1927 1. FC Nürnberg (5)
1928 Hamburger SV (2)
1929 SpVgg Fürth (3)
1930 Hertha BSC (1)
1931 Hertha BSC (2)
1932 Bayern Munich (1)
1933 Fortuna Düsseldorf (1)
1934 Schalke 04 (1)
1935 Schalke 04 (2)
1936 1. FC Nürnberg (6)
1937 Schalke 04 (3) †
1938 Hannover 96 (1)
1939 Schalke 04 (4)
1940 Schalke 04 (5)
1941 Rapid Wien (1)
1942 Schalke 04 (6)
1943 Dresdner SC (1)
1944 Dresdner SC (2)
1948 1. FC Nürnberg (7)
1949 VfR Mannheim (1)
1950 VfB Stuttgart (1)
1951 1. FC Kaiserslautern (1)
1952 VfB Stuttgart (2)
1953 1. FC Kaiserslautern (2)
1954 Hannover 96 (2)
1955 Rot-Weiss Essen (1)
1956 Borussia Dortmund (1)
1957 Borussia Dortmund (2)
1958 Schalke 04 (7)
1959 Eintracht Frankfurt (1)
1960 Hamburger SV (3)
1961 1. FC Nürnberg (8)
1962 1. FC Köln (1)
1963 Borussia Dortmund (3)`;

const newEntries = [];
const lines = raw.split('\n');

for (let line of lines) {
    const parts = line.split(' ');
    const anio = parts[0];
    let champ = line.substring(5).trim();
    
    // Remove the trailing (1), (2), etc and †
    champ = champ.replace(/\(\d+\)/, '').replace(/†/, '').trim();
    
    // Standardize some names to match our database or the existing ones
    // "Rapid Wien" -> "Rapid Viena" to match our escudo mapping
    if (champ === 'Rapid Wien') champ = 'Rapid Viena';
    
    newEntries.push({
        id: `${anio}-campeonato-aleman`,
        anio: anio,
        torneo: "Camp. Alemán",
        campeon: champ,
        tabla_posiciones: []
    });
}

// Now read the existing file
const fileP = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'alemania_temporadas.json');
const existing = JSON.parse(fs.readFileSync(fileP, 'utf8'));

// Filter out any we already have? We only have from 1964 and dfb pokals from 1935.
// We should put the new entries at the VERY TOP of the file (before existing Ligas)
// Actually, to sort properly, we should merge the Ligas and Pokals?
// The current list has all Bundesligas from 1964-2024 first, then DFB-Pokals from 1935.
// Wait, the UI sorts it all dynamically by 'anio' DESC or ASC usually.
// Let's just put these new entries at the top of the array!
const finalArray = [...newEntries, ...existing];

// Sort it by anio ASC and then by torneo? 
// No, keep the file's current order pattern just prepend. League.jsx sorts if needed, or preserves order.
fs.writeFileSync(fileP, JSON.stringify(finalArray, null, 2));

console.log(`Injected ${newEntries.length} historical German championships!`);
