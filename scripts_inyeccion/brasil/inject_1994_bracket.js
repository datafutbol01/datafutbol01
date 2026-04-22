import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1994.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.bracket = {
  roundOf16: [
    { team1: "Alemania", flag1: "de", team2: "Bélgica", flag2: "be", score: "3-2", goals1: ["Völler 6', 40'", "Klinsmann 11'"], goals2: ["Grün 8'", "Albert 90'"] },
    { team1: "España", flag1: "es", team2: "Suiza", flag2: "ch", score: "3-0", goals1: ["Hierro 15'", "Luis Enrique 74'", "Begiristain 86' (p)"], goals2: [] },
    { team1: "Arabia Saudita", flag1: "sa", team2: "Suecia", flag2: "se", score: "1-3", goals1: ["Al-Ghesheyan 85'"], goals2: ["Dahlin 6'", "K. Andersson 51', 88'"] },
    { team1: "Rumania", flag1: "ro", team2: "Argentina", flag2: "ar", score: "3-2", goals1: ["Dumitrescu 11', 18'", "Hagi 58'"], goals2: ["Batistuta 16' (p)", "Balbo 75'"] },
    { team1: "Países Bajos", flag1: "nl", team2: "Irlanda", flag2: "ie", score: "2-0", goals1: ["Bergkamp 11'", "Jonk 41'"], goals2: [] },
    { team1: "Brasil", flag1: "br", team2: "Estados Unidos", flag2: "us", score: "1-0", goals1: ["Bebeto 72'"], goals2: [] },
    { team1: "Nigeria", flag1: "ng", team2: "Italia", flag2: "it", score: "1-2", goals1: ["Amunike 25'"], goals2: ["R. Baggio 88', 102' (p)"] },
    { team1: "México", flag1: "mx", team2: "Bulgaria", flag2: "bg", score: "1-1", penalties: "1-3", goals1: ["García Aspe 18' (p)"], goals2: ["Stoichkov 6'"] }
  ],
  quarterFinals: [
    { team1: "Italia", flag1: "it", team2: "España", flag2: "es", score: "2-1", goals1: ["D. Baggio 25'", "R. Baggio 88'"], goals2: ["Caminero 58'"] },
    { team1: "Países Bajos", flag1: "nl", team2: "Brasil", flag2: "br", score: "2-3", goals1: ["Bergkamp 64'", "Winter 76'"], goals2: ["Romário 53'", "Bebeto 63'", "Branco 81'"] },
    { team1: "Bulgaria", flag1: "bg", team2: "Alemania", flag2: "de", score: "2-1", goals1: ["Stoichkov 75'", "Letchkov 78'"], goals2: ["Matthäus 47' (p)"] },
    { team1: "Rumania", flag1: "ro", team2: "Suecia", flag2: "se", score: "2-2", penalties: "4-5", goals1: ["Răducioiu 88', 101'"], goals2: ["Brolin 78'", "K. Andersson 115'"] }
  ],
  semiFinals: [
    { team1: "Bulgaria", flag1: "bg", team2: "Italia", flag2: "it", score: "1-2", goals1: ["Stoichkov 44' (p)"], goals2: ["R. Baggio 21', 25'"] },
    { team1: "Suecia", flag1: "se", team2: "Brasil", flag2: "br", score: "0-1", goals1: [], goals2: ["Romário 80'"] }
  ],
  thirdPlace: [
    { team1: "Suecia", flag1: "se", team2: "Bulgaria", flag2: "bg", score: "4-0", goals1: ["Brolin 8'", "Mild 30'", "Larsson 37'", "K. Andersson 40'"], goals2: [] }
  ],
  final: [
    { team1: "Brasil", flag1: "br", team2: "Italia", flag2: "it", score: "0-0", penalties: "3-2", goals1: [], goals2: [] }
  ]
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Fase final y cuadro 1994 (Tragedia de Baggio) inyectados con éxito.");
