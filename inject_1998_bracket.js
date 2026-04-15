import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1998.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Strict Top-Down Visual Ordering for WorldCupsHub.jsx
data.bracket = {
  roundOf16: [
    // Top Half - Sector 1
    { team1: "Brasil", flag1: "br", team2: "Chile", flag2: "cl", score: "4-1", goals1: ["Sampaio 11', 26'", "Ronaldo 45+3' (p), 72'"], goals2: ["Salas 70'"] },
    { team1: "Nigeria", flag1: "ng", team2: "Dinamarca", flag2: "dk", score: "1-4", goals1: ["Babangida 77'"], goals2: ["Møller 3'", "B. Laudrup 12'", "Sand 58'", "Helveg 76'"] },
    // Top Half - Sector 2
    { team1: "Países Bajos", flag1: "nl", team2: "Yugoslavia", flag2: "yu", score: "2-1", goals1: ["Bergkamp 38'", "Davids 90+2'"], goals2: ["Komljenović 48'"] },
    { team1: "Argentina", flag1: "ar", team2: "Inglaterra", flag2: "gb-eng", score: "2-2", penalties: "4-3", goals1: ["Batistuta 5' (p)", "Zanetti 45+1'"], goals2: ["Shearer 9' (p)", "Owen 16'"] },
    // Bottom Half - Sector 3
    { team1: "Italia", flag1: "it", team2: "Noruega", flag2: "no", score: "1-0", goals1: ["Vieri 18'"], goals2: [] },
    { team1: "Francia", flag1: "fr", team2: "Paraguay", flag2: "py", score: "1-0", goals1: ["Blanc 114'"], goals2: [] },
    // Bottom Half - Sector 4
    { team1: "Alemania", flag1: "de", team2: "México", flag2: "mx", score: "2-1", goals1: ["Klinsmann 74'", "Bierhoff 86'"], goals2: ["Hernández 47'"] },
    { team1: "Rumania", flag1: "ro", team2: "Croacia", flag2: "hr", score: "0-1", goals1: [], goals2: ["Šuker 45+2' (p)"] }
  ],
  quarterFinals: [
    // Semi 0 Input
    { team1: "Brasil", flag1: "br", team2: "Dinamarca", flag2: "dk", score: "3-2", goals1: ["Bebeto 10'", "Rivaldo 25', 59'"], goals2: ["M. Jørgensen 2'", "B. Laudrup 50'"] },
    { team1: "Países Bajos", flag1: "nl", team2: "Argentina", flag2: "ar", score: "2-1", goals1: ["Kluivert 12'", "Bergkamp 90'"], goals2: ["López 17'"] },
    // Semi 1 Input
    { team1: "Italia", flag1: "it", team2: "Francia", flag2: "fr", score: "0-0", penalties: "3-4", goals1: [], goals2: [] },
    { team1: "Alemania", flag1: "de", team2: "Croacia", flag2: "hr", score: "0-3", goals1: [], goals2: ["Jarni 45+3'", "Vlaović 80'", "Šuker 85'"] }
  ],
  semiFinals: [
    { team1: "Brasil", flag1: "br", team2: "Países Bajos", flag2: "nl", score: "1-1", penalties: "4-2", goals1: ["Ronaldo 46'"], goals2: ["Kluivert 87'"] },
    { team1: "Francia", flag1: "fr", team2: "Croacia", flag2: "hr", score: "2-1", goals1: ["Thuram 47', 70'"], goals2: ["Šuker 46'"] }
  ],
  thirdPlace: { team1: "Países Bajos", flag1: "nl", team2: "Croacia", flag2: "hr", score: "1-2", goals1: ["Zenden 22'"], goals2: ["Prosinečki 14'", "Šuker 36'"] },
  final: { team1: "Brasil", flag1: "br", team2: "Francia", flag2: "fr", score: "0-3", goals1: [], goals2: ["Zidane 27', 45+1'", "Petit 90+3'"] }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Llave eliminatoria de 1998 inyectada exitosamente con bracket rules estrictas.");
