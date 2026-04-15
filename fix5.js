const fs = require('fs');

// 1. Fix Union replacing it with Boca for 1976 Metropolitano
let data = fs.readFileSync('app/src/data/ligas/argentina_temporadas.json', 'utf8');
data = data.replace(/"campeon": "Union",/g, '"campeon": "Boca Juniors",');
fs.writeFileSync('app/src/data/ligas/argentina_temporadas.json', data);
console.log('Replaced Union with Boca!');

// 2. Patch League.jsx aliases
let code = fs.readFileSync('app/src/pages/League.jsx', 'utf8');
const replaceAliases = `"velez sarsfield": "velez-sarsfield",
                                        "vélez sarsfield": "velez-sarsfield",
                                        "velez": "velez-sarsfield",
                                        "huracan": "huracan",
                                        "argentinos": "argentinos-juniors",
                                        "newells": "newells-old-boys",
                                        "union": "union",`;
code = code.replace(`"velez sarsfield": "velez-sarsfield",
                                        "vélez sarsfield": "velez-sarsfield",`, replaceAliases);

fs.writeFileSync('app/src/pages/League.jsx', code);
console.log('Aliases patched in League.jsx');
