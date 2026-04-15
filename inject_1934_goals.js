import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1934.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Inject 1934 goals exactly manually
const b = data.bracket;

// Round of 16
// { team1: "Italia", team2: "Estados Unidos" }
b.roundOf16[0].goals1 = ["Schiavio 18', 29', 64'", "Orsi 20', 69'", "Ferrari 63'", "Meazza 90'"];
b.roundOf16[0].goals2 = ["Donelli 57'"];

// { team1: "España", team2: "Brasil" }
b.roundOf16[1].goals1 = ["Iraragorri 18' (p), 25'", "Lángara 29'"];
b.roundOf16[1].goals2 = ["Leônidas 55'"];

// { team1: "Austria", team2: "Francia" }
b.roundOf16[2].goals1 = ["Sindelar 44'", "Schall 93'", "Bican 109'"];
b.roundOf16[2].goals2 = ["Nicolas 18'", "Verriest 116' (p)"];

// { team1: "Hungría", team2: "Egipto" }
b.roundOf16[3].goals1 = ["Teleki 11'", "Toldi 27', 61'", "Vincze 53'"];
b.roundOf16[3].goals2 = ["Fawzi 31', 39'"];

// { team1: "Checoslovaquia", team2: "Rumania" }
b.roundOf16[4].goals1 = ["Puč 50'", "Nejedlý 67'"];
b.roundOf16[4].goals2 = ["Dobay 11'"];

// { team1: "Suiza", team2: "Países Bajos" }
b.roundOf16[5].goals1 = ["Kielholz 7', 43'", "Abegglen 69'"];
b.roundOf16[5].goals2 = ["Smit 19'", "Vente 84'"];

// { team1: "Alemania", team2: "Bélgica" }
b.roundOf16[6].goals1 = ["Kobierski 25'", "Siffling 49'", "Conen 66', 70', 87'"];
b.roundOf16[6].goals2 = ["Voorhoof 29', 43'"];

// { team1: "Suecia", team2: "Argentina" }
b.roundOf16[7].goals1 = ["Jonasson 9', 67'", "Kroon 79'"];
b.roundOf16[7].goals2 = ["Belis 4'", "Galateo 48'"];


// QuarterFinals
// { team1: "Italia", team2: "España" }
b.quarterFinals[0].goals1 = ["Meazza 11'"];
b.quarterFinals[0].goals2 = [];

// { team1: "Austria", team2: "Hungría" }
b.quarterFinals[1].goals1 = ["Horvath 8'", "Zischek 51'"];
b.quarterFinals[1].goals2 = ["Sárosi 60' (p)"];

// { team1: "Checoslovaquia", team2: "Suiza" }
b.quarterFinals[2].goals1 = ["Svoboda 24'", "Sobotka 49'", "Nejedlý 82'"];
b.quarterFinals[2].goals2 = ["Kielholz 18'", "Jäggi 78'"];

// { team1: "Alemania", team2: "Suecia" }
b.quarterFinals[3].goals1 = ["Hohmann 60', 63'"];
b.quarterFinals[3].goals2 = ["Dunker 82'"];


// SemiFinals
// { team1: "Italia", team2: "Austria" }
b.semiFinals[0].goals1 = ["Guaita 19'"];
b.semiFinals[0].goals2 = [];

// { team1: "Checoslovaquia", team2: "Alemania" }
b.semiFinals[1].goals1 = ["Nejedlý 19', 71', 80'"];
b.semiFinals[1].goals2 = ["Noack 62'"];


// Third Place & Final
b.thirdPlace.goals1 = ["Lehner 1', 42'", "Conen 27'"];
b.thirdPlace.goals2 = ["Horvath 28'", "Sesta 54'"];

b.final.goals1 = ["Orsi 81'", "Schiavio 95'"];
b.final.goals2 = ["Puč 71'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1934 perfect manual goal injection complete.');
