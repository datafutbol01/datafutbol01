const fs = require('fs');

const text = "dumbarton 1890 1891, 1882, Queen's Park 1873, 1874, 1875, 1879, 1880, 1881, 1883, 1885, 1889, 1892. Greenock Morton 1921, east fife 1937, 1947, 1949, 1953, dumferline 1960, 1967. inverness 2003, 2014, 2017. celtic 1956, 1965, 2005, 2021. aberdeen 1955, 1989. Hearts 1954, 1958, 1962. dundee 1952, 1990. Rangers 1946, 1948. hamilton academical  1991, 1992, 2022. Falkirk 1993, 1997. Stranraer 1996. alloa athletic 1999. Airdrieonians 2000, 2001, St Johnstone 2007. ross county 2010";

// Tokens
let currentTeam = '';
const extracted = [];
const tokens = text.replace(/,/g, ' ').replace(/\./g, ' ').split(/\s+/).filter(x => x);

for (const t of tokens) {
    if (!isNaN(t)) {
        if (currentTeam) extracted.push({ team: currentTeam, year: t });
    } else {
        // It's a word
        // Look ahead to build team name
        if (!isNaN(t)) continue;
        if (extracted.length > 0 && isNaN(extracted[extracted.length-1].year)) {
            // Continuation of team name maybe? We should just build team name properly
        }
    }
}

// Better parsing using regex
const regex = /([a-zA-Z'\s]+)\s+((?:\d{4}[\s,]*)+)/g;
let match;
const parsed = [];
while ((match = regex.exec(text)) !== null) {
    const team = match[1].trim();
    const years = match[2].match(/\d{4}/g);
    years.forEach(y => parsed.push({ team, year: y }));
}

console.log(parsed);

const ligas = JSON.parse(fs.readFileSync('app/src/data/ligas/escocia_temporadas.json', 'utf8'));

// Alias to match the json filename or id
const aliases = {
    "dumbarton": "dumbarton",
    "Queen's Park": "queen-s-park",
    "Greenock Morton": "morton",
    "east fife": "east-fife",
    "dumferline": "dunfermline-athletic",
    "inverness": "inverness-ct",
    "celtic": "celtic",
    "aberdeen": "aberdeen",
    "Hearts": "hearts",
    "dundee": "dundee",
    "Rangers": "rangers",
    "hamilton academical": "hamilton-academical",
    "Falkirk": "falkirk",
    "Stranraer": "stranraer",
    "alloa athletic": "alloa-athletic",
    "Airdrieonians": "airdrieonians",
    "St Johnstone": "st-johnstone",
    "ross county": "ross-county"
};

const missing = [];
for (const p of parsed) {
    // find in ligas
    const matchedTeam = aliases[p.team] || p.team.toLowerCase();
    
    // Attempt to find ANY trophy won by this team in this year
    let won = ligas.filter(l => 
         l.anio === p.year && 
         (l.campeon.toLowerCase().includes(p.team.toLowerCase()) || 
          l.campeon.toLowerCase().includes(matchedTeam) ||
          (p.team === "Hearts" && l.campeon === "Heart of Midlothian") ||
          (p.team === "dumferline" && l.campeon === "Dunfermline Athletic") ||
          (p.team === "Greenock Morton" && l.campeon === "Morton")
         )
    );
    
    if (won.length === 0) {
        console.log(`Could not find anything for ${p.team} in ${p.year}`);
    } else {
        won.forEach(w => {
            const clubJsonFile = `app/src/data/clubes/escocia/${matchedTeam}.json`;
            if (fs.existsSync(clubJsonFile)) {
                const clubData = JSON.parse(fs.readFileSync(clubJsonFile, 'utf8'));
                if (!clubData.titulos) clubData.titulos = [];
                
                let t = clubData.titulos.find(x => x.nombre === w.torneo);
                if (!t) {
                    t = { nombre: w.torneo, cantidad: 0, anios: [] };
                    clubData.titulos.push(t);
                }
                
                // Add if not already present
                if (!t.anios.includes(w.anio) && !t.anios.some(a => a.startsWith(w.anio))) {
                    t.anios.push(w.anio);
                    t.cantidad = t.anios.length;
                    
                    fs.writeFileSync(clubJsonFile, JSON.stringify(clubData, null, 2), 'utf8');
                    console.log(`Added ${w.torneo} ${w.anio} to ${matchedTeam}`);
                } else {
                    console.log(`${w.torneo} ${w.anio} ALREADY in ${matchedTeam}`);
                }
            } else {
                console.log(`No JSON file found for ${matchedTeam}`);
            }
        });
    }
}
