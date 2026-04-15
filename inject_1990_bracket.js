import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1990.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.bracket = {
  "roundOf16": [
    { "team1": "Italia", "flag1": "it", "score": "2-0", "team2": "Uruguay", "flag2": "uy", "goals1": ["Schillaci 65'", "Serena 83'"], "goals2": [], "penalties": null },
    { "team1": "Irlanda", "flag1": "ie", "score": "0-0", "team2": "Rumania", "flag2": "ro", "goals1": [], "goals2": [], "penalties": "5-4" },
    { "team1": "España", "flag1": "es", "score": "1-2", "team2": "Yugoslavia", "flag2": "yu", "goals1": ["Salinas 83'"], "goals2": ["Stojković 78', 92'"], "penalties": null },
    { "team1": "Brasil", "flag1": "br", "score": "0-1", "team2": "Argentina", "flag2": "ar", "goals1": [], "goals2": ["Caniggia 80'"], "penalties": null },
    { "team1": "Alemania Federal", "flag1": "de", "score": "2-1", "team2": "Países Bajos", "flag2": "nl", "goals1": ["Klinsmann 51'", "Brehme 82'"], "goals2": ["Koeman 89' (p)"], "penalties": null },
    { "team1": "Checoslovaquia", "flag1": "cs", "score": "4-1", "team2": "Costa Rica", "flag2": "cr", "goals1": ["Skuhravý 12', 63', 82'", "Kubík 75'"], "goals2": ["González 54'"], "penalties": null },
    { "team1": "Inglaterra", "flag1": "gb-eng", "score": "1-0", "team2": "Bélgica", "flag2": "be", "goals1": ["Platt 119'"], "goals2": [], "penalties": null },
    { "team1": "Camerún", "flag1": "cm", "score": "2-1", "team2": "Colombia", "flag2": "co", "goals1": ["Milla 106', 109'"], "goals2": ["Redín 115'"], "penalties": null }
  ],
  "quarterFinals": [
    { "team1": "Italia", "flag1": "it", "score": "1-0", "team2": "Irlanda", "flag2": "ie", "goals1": ["Schillaci 38'"], "goals2": [], "penalties": null },
    { "team1": "Yugoslavia", "flag1": "yu", "score": "0-0", "team2": "Argentina", "flag2": "ar", "goals1": [], "goals2": [], "penalties": "2-3" },
    { "team1": "Alemania Federal", "flag1": "de", "score": "1-0", "team2": "Checoslovaquia", "flag2": "cs", "goals1": ["Matthäus 25' (p)"], "goals2": [], "penalties": null },
    { "team1": "Inglaterra", "flag1": "gb-eng", "score": "3-2", "team2": "Camerún", "flag2": "cm", "goals1": ["Platt 25'", "Lineker 83' (p), 105' (p)"], "goals2": ["Kundé 61' (p)", "Ekéké 65'"], "penalties": null }
  ],
  "semiFinals": [
    { "team1": "Italia", "flag1": "it", "score": "1-1", "team2": "Argentina", "flag2": "ar", "goals1": ["Schillaci 17'"], "goals2": ["Caniggia 67'"], "penalties": "3-4" },
    { "team1": "Alemania Federal", "flag1": "de", "score": "1-1", "team2": "Inglaterra", "flag2": "gb-eng", "goals1": ["Brehme 60'"], "goals2": ["Lineker 80'"], "penalties": "4-3" }
  ],
  "thirdPlace": { "team1": "Italia", "flag1": "it", "score": "2-1", "team2": "Inglaterra", "flag2": "gb-eng", "goals1": ["Baggio 71'", "Schillaci 86' (p)"], "goals2": ["Platt 81'"], "penalties": null },
  "final": { "team1": "Alemania Federal", "flag1": "de", "score": "1-0", "team2": "Argentina", "flag2": "ar", "goals1": ["Brehme 85' (p)"], "goals2": [], "penalties": null }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Italia 1990 bracket injected successfully!");
