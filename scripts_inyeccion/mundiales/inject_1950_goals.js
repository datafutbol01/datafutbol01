import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1950.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Ademir 30', 79'", "Jair 65'", "Baltazar 71'"]; // Bra vs Mex
g1[0].goals2 = [];

g1[1].goals1 = ["Mitić 59'", "Tomašević 70'", "Ognjanov 75'"]; // Yug vs Sui
g1[1].goals2 = [];

g1[2].goals1 = ["Alfredo 3'", "Baltazar 32'"]; // Bra vs Sui
g1[2].goals2 = ["Fatton 17', 88'"];

g1[3].goals1 = ["Bobek 19'", "Ž. Čajkovski 22', 62'", "Tomašević 81'"]; // Yug vs Mex
g1[3].goals2 = ["Ortiz 89' (p)"];

g1[4].goals1 = ["Ademir 4'", "Zizinho 69'"]; // Bra vs Yug
g1[4].goals2 = [];

g1[5].goals1 = ["Bader 10'", "Antenen 44'"]; // Sui vs Mex
g1[5].goals2 = ["Casarín 89'"];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["Mortensen 39'", "Mannion 51'"]; // Eng vs Chi
g2[0].goals2 = [];

g2[1].goals1 = ["Igoa 81'", "Basora 83'", "Zarra 89'"]; // Esp vs USA
g2[1].goals2 = ["Pariani 17'"];

g2[2].goals1 = ["Basora 17'", "Zarra 30'"]; // Esp vs Chi
g2[2].goals2 = [];

g2[3].goals1 = ["Gaetjens 38'"]; // USA vs Eng
g2[3].goals2 = [];

g2[4].goals1 = ["Zarra 48'"]; // Esp vs Eng
g2[4].goals2 = [];

g2[5].goals1 = ["Robledo 16'", "Cremaschi 32', 60'", "Prieto 54'", "Riera 82'"]; // Chi vs USA
g2[5].goals2 = ["Wallace 47'", "Maca 48' (p)"];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Jeppson 25', 68'", "Andersson 33'"]; // Sue vs Ita
g3[0].goals2 = ["Carapellese 7'", "Muccinelli 75'"];

g3[1].goals1 = ["Sundqvist 17'", "Palmér 26'"]; // Sue vs Par
g3[1].goals2 = ["López 35'", "López Fretes 74'"];

g3[2].goals1 = ["Carapellese 12'", "Pandolfini 62'"]; // Ita vs Par
g3[2].goals2 = [];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Míguez 14', 40', 51'", "Vidal 18'", "Schiaffino 23', 54'", "Pérez 83'", "Ghiggia 87'"]; // Uru vs Bol
g4[0].goals2 = [];

// Final Group
const fg = data.finalGroup.matches;
fg[0].goals1 = ["Ghiggia 29'", "Varela 73'"]; // Uru vs Esp
fg[0].goals2 = ["Basora 37', 39'"];

fg[1].goals1 = ["Ademir 17', 36', 52', 58'", "Chico 39', 88'", "Maneca 85'"]; // Bra vs Sue
fg[1].goals2 = ["Andersson 67' (p)"];

fg[2].goals1 = ["Ademir 15', 57'", "Jair 21'", "Chico 31', 55'", "Zizinho 67'"]; // Bra vs Esp
fg[2].goals2 = ["Igoa 71'"];

fg[3].goals1 = ["Ghiggia 39'", "Míguez 77', 85'"]; // Uru vs Sue
fg[3].goals2 = ["Palmér 5'", "Sundqvist 40'"];

fg[4].goals1 = ["Sundqvist 15'", "Mellberg 33'", "Palmér 80'"]; // Sue vs Esp
fg[4].goals2 = ["Zarra 82'"];

fg[5].goals1 = ["Schiaffino 66'", "Ghiggia 79'"]; // Uru vs Bra
fg[5].goals2 = ["Friaça 47'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1950 exact manual goal injection complete.');
