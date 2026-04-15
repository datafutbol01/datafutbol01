import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1986.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Only convert if it's currently an array (our recent injection)
if (Array.isArray(data.groups['A'])) {
  const newGroups = {};
  for (const [key, standings] of Object.entries(data.groups)) {
    newGroups[key] = {
      standings: standings,
      matches: []
    };
  }
  data.groups = newGroups;
}

const matchesData = {
  "A": [
    { team1: "Bulgaria", flag1: "bg", score: "1-1", team2: "Italia", flag2: "it", goals1: ["Sirakov 85'"], goals2: ["Altobelli 44'"] },
    { team1: "Argentina", flag1: "ar", score: "3-1", team2: "Corea del Sur", flag2: "kr", goals1: ["Valdano 6', 46'", "Ruggeri 18'"], goals2: ["Park Chang-sun 73'"] },
    { team1: "Italia", flag1: "it", score: "1-1", team2: "Argentina", flag2: "ar", goals1: ["Altobelli 6' (p)"], goals2: ["Maradona 34'"] },
    { team1: "Corea del Sur", flag1: "kr", score: "1-1", team2: "Bulgaria", flag2: "bg", goals1: ["Kim Jong-boo 70'"], goals2: ["Getov 11'"] },
    { team1: "Corea del Sur", flag1: "kr", score: "2-3", team2: "Italia", flag2: "it", goals1: ["Choi Soon-ho 62'", "Huh Jung-moo 83'"], goals2: ["Altobelli 17', 73'", "Cho Kwang-rae 82' (e.c.)"] },
    { team1: "Argentina", flag1: "ar", score: "2-0", team2: "Bulgaria", flag2: "bg", goals1: ["Valdano 4'", "Burruchaga 77'"], goals2: [] }
  ],
  "B": [
    { team1: "Bélgica", flag1: "be", score: "1-2", team2: "México", flag2: "mx", goals1: ["Vandenbergh 45'"], goals2: ["Quirarte 23'", "Sánchez 39'"] },
    { team1: "Paraguay", flag1: "py", score: "1-0", team2: "Irak", flag2: "iq", goals1: ["Romero 35'"], goals2: [] },
    { team1: "México", flag1: "mx", score: "1-1", team2: "Paraguay", flag2: "py", goals1: ["Flores 3'"], goals2: ["Romero 85'"] },
    { team1: "Irak", flag1: "iq", score: "1-2", team2: "Bélgica", flag2: "be", goals1: ["Radhi 59'"], goals2: ["Scifo 16'", "Claesen 21' (p)"] },
    { team1: "Irak", flag1: "iq", score: "0-1", team2: "México", flag2: "mx", goals1: [], goals2: ["Quirarte 54'"] },
    { team1: "Paraguay", flag1: "py", score: "2-2", team2: "Bélgica", flag2: "be", goals1: ["Cabañas 50', 76'"], goals2: ["Vercauteren 30'", "Veyt 59'"] }
  ],
  "C": [
    { team1: "Canadá", flag1: "ca", score: "0-1", team2: "Francia", flag2: "fr", goals1: [], goals2: ["Papin 79'"] },
    { team1: "Unión Soviética", flag1: "su", score: "6-0", team2: "Hungría", flag2: "hu", goals1: ["Yakovenko 2'", "Aleinikov 4'", "Belanov 24' (p)", "Yaremchuk 66'", "Dajka 73' (e.c.)", "Rodionov 80'"], goals2: [] },
    { team1: "Francia", flag1: "fr", score: "1-1", team2: "Unión Soviética", flag2: "su", goals1: ["Fernández 60'"], goals2: ["Rats 53'"] },
    { team1: "Hungría", flag1: "hu", score: "2-0", team2: "Canadá", flag2: "ca", goals1: ["Esterházy 2'", "Détári 75'"], goals2: [] },
    { team1: "Hungría", flag1: "hu", score: "0-3", team2: "Francia", flag2: "fr", goals1: [], goals2: ["Stopyra 29'", "Tigana 62'", "Rocheteau 84'"] },
    { team1: "Unión Soviética", flag1: "su", score: "2-0", team2: "Canadá", flag2: "ca", goals1: ["Blokhin 58'", "Zavarov 74'"], goals2: [] }
  ],
  "D": [
    { team1: "España", flag1: "es", score: "0-1", team2: "Brasil", flag2: "br", goals1: [], goals2: ["Sócrates 62'"] },
    { team1: "Argelia", flag1: "dz", score: "1-1", team2: "Irlanda del Norte", flag2: "gb-nir", goals1: ["Zidane 59'"], goals2: ["Whiteside 6'"] },
    { team1: "Brasil", flag1: "br", score: "1-0", team2: "Argelia", flag2: "dz", goals1: ["Careca 66'"], goals2: [] },
    { team1: "Irlanda del Norte", flag1: "gb-nir", score: "1-2", team2: "España", flag2: "es", goals1: ["Clarke 46'"], goals2: ["Butragueño 1'", "Salinas 18'"] },
    { team1: "Irlanda del Norte", flag1: "gb-nir", score: "0-3", team2: "Brasil", flag2: "br", goals1: [], goals2: ["Careca 15', 87'", "Josimar 42'"] },
    { team1: "Argelia", flag1: "dz", score: "0-3", team2: "España", flag2: "es", goals1: [], goals2: ["Calderé 15', 68'", "Eloy 70'"] }
  ],
  "E": [
    { team1: "Uruguay", flag1: "uy", score: "1-1", team2: "Alemania Federal", flag2: "de", goals1: ["Alzamendi 4'"], goals2: ["Allofs 84'"] },
    { team1: "Escocia", flag1: "gb-sct", score: "0-1", team2: "Dinamarca", flag2: "dk", goals1: [], goals2: ["Elkjær 57'"] },
    { team1: "Alemania Federal", flag1: "de", score: "2-1", team2: "Escocia", flag2: "gb-sct", goals1: ["Völler 23'", "Allofs 49'"], goals2: ["Strachan 18'"] },
    { team1: "Dinamarca", flag1: "dk", score: "6-1", team2: "Uruguay", flag2: "uy", goals1: ["Elkjær 11', 67', 80'", "Lerby 41'", "Laudrup 52'", "J. Olsen 88'"], goals2: ["Francescoli 45' (p)"] },
    { team1: "Dinamarca", flag1: "dk", score: "2-0", team2: "Alemania Federal", flag2: "de", goals1: ["J. Olsen 43' (p)", "Eriksen 62'"], goals2: [] },
    { team1: "Escocia", flag1: "gb-sct", score: "0-0", team2: "Uruguay", flag2: "uy", goals1: [], goals2: [] }
  ],
  "F": [
    { team1: "Marruecos", flag1: "ma", score: "0-0", team2: "Polonia", flag2: "pl", goals1: [], goals2: [] },
    { team1: "Portugal", flag1: "pt", score: "1-0", team2: "Inglaterra", flag2: "gb-eng", goals1: ["Carlos Manuel 75'"], goals2: [] },
    { team1: "Inglaterra", flag1: "gb-eng", score: "0-0", team2: "Marruecos", flag2: "ma", goals1: [], goals2: [] },
    { team1: "Polonia", flag1: "pl", score: "1-0", team2: "Portugal", flag2: "pt", goals1: ["Smolarek 68'"], goals2: [] },
    { team1: "Inglaterra", flag1: "gb-eng", score: "3-0", team2: "Polonia", flag2: "pl", goals1: ["Lineker 9', 14', 34'"], goals2: [] },
    { team1: "Portugal", flag1: "pt", score: "1-3", team2: "Marruecos", flag2: "ma", goals1: ["Diamantino 80'"], goals2: ["Khairi 19', 26'", "Merry Krimau 62'"] }
  ]
};

for (const [group, matches] of Object.entries(matchesData)) {
   data.groups[group].matches = matches;
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Injected matches data into 1986.json");
