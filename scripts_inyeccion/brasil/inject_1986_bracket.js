import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1986.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

data.bracket = {
  "roundOf16": [
     { team1: "Argentina", flag1: "ar", score: "1-0", team2: "Uruguay", flag2: "uy", goals1: ["Pasculli 42'"], goals2: [], penalties: null },
     { team1: "Inglaterra", flag1: "gb-eng", score: "3-0", team2: "Paraguay", flag2: "py", goals1: ["Lineker 31', 73'", "Beardsley 56'"], goals2: [], penalties: null },
     { team1: "Dinamarca", flag1: "dk", score: "1-5", team2: "España", flag2: "es", goals1: ["J. Olsen 33' (p)"], goals2: ["Butragueño 43', 56', 80', 88'", "Goikoetxea 68' (p)"], penalties: null },
     { team1: "Unión Soviética", flag1: "su", score: "3-4", team2: "Bélgica", flag2: "be", goals1: ["Belanov 27', 70', 111'"], goals2: ["Scifo 56'", "Ceulemans 77'", "Demol 102'", "Claesen 110'"], penalties: null },

     { team1: "Brasil", flag1: "br", score: "4-0", team2: "Polonia", flag2: "pl", goals1: ["Sócrates 30' (p)", "Josimar 55'", "Edinho 79'", "Careca 83' (p)"], goals2: [], penalties: null },
     { team1: "Italia", flag1: "it", score: "0-2", team2: "Francia", flag2: "fr", goals1: [], goals2: ["Platini 15'", "Stopyra 57'"], penalties: null },
     { team1: "Marruecos", flag1: "ma", score: "0-1", team2: "Alemania Federal", flag2: "de", goals1: [], goals2: ["Matthäus 87'"], penalties: null },
     { team1: "México", flag1: "mx", score: "2-0", team2: "Bulgaria", flag2: "bg", goals1: ["Negrete 34'", "Servín 61'"], goals2: [], penalties: null }
  ],
  "quarterFinals": [
     { team1: "Argentina", flag1: "ar", score: "2-1", team2: "Inglaterra", flag2: "gb-eng", goals1: ["Maradona 51', 55'"], goals2: ["Lineker 81'"], penalties: null },
     { team1: "España", flag1: "es", score: "1-1", team2: "Bélgica", flag2: "be", goals1: ["Señor 85'"], goals2: ["Ceulemans 35'"], penalties: "4-5" },
     { team1: "Brasil", flag1: "br", score: "1-1", team2: "Francia", flag2: "fr", goals1: ["Careca 17'"], goals2: ["Platini 40'"], penalties: "3-4" },
     { team1: "Alemania Federal", flag1: "de", score: "0-0", team2: "México", flag2: "mx", goals1: [], goals2: [], penalties: "4-1" }
  ],
  "semiFinals": [
     { team1: "Argentina", flag1: "ar", score: "2-0", team2: "Bélgica", flag2: "be", goals1: ["Maradona 51', 63'"], goals2: [], penalties: null },
     { team1: "Francia", flag1: "fr", score: "0-2", team2: "Alemania Federal", flag2: "de", goals1: [], goals2: ["Brehme 9'", "Völler 89'"], penalties: null }
  ],
  "thirdPlace": { team1: "Bélgica", flag1: "be", score: "2-4", team2: "Francia", flag2: "fr", goals1: ["Ceulemans 11'", "Claesen 73'"], goals2: ["Ferreri 27'", "Papin 43'", "Genghini 104'", "Amoros 111' (p)"], penalties: null },
  "final": { team1: "Argentina", flag1: "ar", score: "3-2", team2: "Alemania Federal", flag2: "de", goals1: ["Brown 23'", "Valdano 55'", "Burruchaga 84'"], goals2: ["Rummenigge 74'", "Völler 80'"], penalties: null }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Injected 1986 Knockout Bracket!");
