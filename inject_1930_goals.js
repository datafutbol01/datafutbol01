import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1930.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Inject 1930 match goals manually
// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Laurent 19'", "Langiller 40'", "Maschinot 43', 87'"]; // Francia vs Mexico
g1[0].goals2 = ["Carreño 70'"];

g1[1].goals1 = ["Monti 81'"]; // Argentina vs Francia
g1[1].goals2 = []; 

g1[2].goals1 = ["Vidal 3', 65'", "Rosas 52' (a.g.)"]; // Chile vs Mexico
g1[2].goals2 = [];

g1[3].goals1 = ["Subiabre 67'"]; // Chile vs Francia
g1[3].goals2 = [];

g1[4].goals1 = ["Stábile 8', 17', 80'", "Zumelzú 12', 55'", "Varallo 53'"]; // Argentina vs Mexico
g1[4].goals2 = ["Rosas 42' (p), 65'", "Gayón 75'"];

g1[5].goals1 = ["Stábile 12', 13'", "Evaristo 51'"]; // Argentina vs Chile
g1[5].goals2 = ["Subiabre 15'"];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["Tirnanić 21'", "Bek 30'"]; // Yugoslavia vs Brasil
g2[0].goals2 = ["Preguinho 62'"];

g2[1].goals1 = ["Bek 60', 67'", "Marjanović 65'", "Vujadinović 85'"]; // Yugoslavia vs Bolivia
g2[1].goals2 = [];

g2[2].goals1 = ["Moderato 37', 73'", "Preguinho 57', 83'"]; // Brasil vs Bolivia
g2[2].goals2 = [];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Deșu 1'", "Stanciu 79'", "Kovács 89'"]; // Rumania vs Peru
g3[0].goals2 = ["De Souza 75'"];

g3[1].goals1 = ["Castro 65'"]; // Uruguay vs Peru
g3[1].goals2 = [];

g3[2].goals1 = ["Dorado 7'", "Scarone 26'", "Anselmo 31'", "Cea 35'"]; // Uruguay vs Rumania
g3[2].goals2 = [];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["McGhee 23'", "Florie 45'", "Patenaude 69'"]; // EE.UU vs Belgica
g4[0].goals2 = [];

g4[1].goals1 = ["Patenaude 10', 15', 50'"]; // EE.UU vs Paraguay
g4[1].goals2 = [];

g4[2].goals1 = ["Vargas Peña 40'"]; // Paraguay vs Belgica
g4[2].goals2 = [];

// Bracket
const b = data.bracket;
b.semiFinals[0].goals1 = ["Monti 20'", "Scopelli 56'", "Stábile 69', 87'", "Peucelle 80', 85'"]; // Argentina vs EE.UU
b.semiFinals[0].goals2 = ["Brown 89'"];

b.semiFinals[1].goals1 = ["Cea 18', 67', 72'", "Anselmo 20', 31'", "Iriarte 61'"]; // Uruguay vs Yugoslavia
b.semiFinals[1].goals2 = ["Vujadinović 4'"];

b.final.goals1 = ["Dorado 12'", "Cea 57'", "Iriarte 68'", "Castro 89'"]; // Uruguay vs Argentina
b.final.goals2 = ["Peucelle 20'", "Stábile 37'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1930 perfect manual goal injection complete.');
