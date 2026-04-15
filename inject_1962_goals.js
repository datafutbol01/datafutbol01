import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1962.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Cubilla 56'", "Sasía 75'"];
g1[0].goals2 = ["Zuluaga 19' (p)"];

g1[1].goals1 = ["Ivanov 51'", "Ponedelnik 83'"];
g1[1].goals2 = [];

g1[2].goals1 = ["Skoblar 25' (p)", "Galić 29'", "Jerković 49'"];
g1[2].goals2 = ["Cabrera 19'"];

g1[3].goals1 = ["Ivanov 8', 11'", "Chislenko 10'", "Ponedelnik 56'"];
g1[3].goals2 = ["Aceros 21'", "Coll 68'", "Rada 72'", "Klinger 86'"];

g1[4].goals1 = ["Mamykin 38'", "Ivanov 89'"];
g1[4].goals2 = ["Sasía 54'"];

g1[5].goals1 = ["Galić 20', 61'", "Jerković 25', 87'", "Melić 82'"];
g1[5].goals2 = [];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["L. Sánchez 44', 55'", "Ramíez 51'"];
g2[0].goals2 = ["Wüthrich 6'"];

g2[1].goals1 = [];
g2[1].goals2 = [];

g2[2].goals1 = ["Ramírez 73'", "Toro 87'"];
g2[2].goals2 = [];

g2[3].goals1 = ["Brülls 45'", "Seeler 59'"];
g2[3].goals2 = ["Schneiter 73'"];

g2[4].goals1 = ["Szymaniak 21' (p)", "Seeler 82'"];
g2[4].goals2 = [];

g2[5].goals1 = ["Mora 1'", "Bulgarelli 65', 67'"];
g2[5].goals2 = [];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Zagallo 56'", "Pelé 73'"];
g3[0].goals2 = [];

g3[1].goals1 = ["Štibrányi 80'"];
g3[1].goals2 = [];

g3[2].goals1 = [];
g3[2].goals2 = [];

g3[3].goals1 = ["Peiró 90'"];
g3[3].goals2 = [];

g3[4].goals1 = ["Amarildo 72', 86'"];
g3[4].goals2 = ["Adelardo 35'"];

g3[5].goals1 = ["Díaz 12'", "Del Águila 29'", "Hernández 90' (p)"];
g3[5].goals2 = ["Mašek 1'"];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Facundo 4'"];
g4[0].goals2 = [];

g4[1].goals1 = ["Tichy 17'", "Albert 71'"];
g4[1].goals2 = ["Flowers 60' (p)"];

g4[2].goals1 = ["Flowers 17' (p)", "Charlton 42'", "Greaves 67'"];
g4[2].goals2 = ["Sanfilippo 81'"];

g4[3].goals1 = ["Albert 1', 6', 53'", "Tichy 8', 70'", "Solymosi 12'"];
g4[3].goals2 = ["Sokolov 64'"];

g4[4].goals1 = [];
g4[4].goals2 = [];

g4[5].goals1 = [];
g4[5].goals2 = [];

// Bracket
const b = data.bracket;
b.quarterFinals[0].goals1 = ["L. Sánchez 11'", "Rojas 29'"]; // Chi vs URSS
b.quarterFinals[0].goals2 = ["Chislenko 26'"];

b.quarterFinals[1].goals1 = ["Radaković 85'"]; // Yug vs Ale
b.quarterFinals[1].goals2 = [];

b.quarterFinals[2].goals1 = ["Garrincha 31', 59'", "Vavá 53'"]; // Bra vs Ing
b.quarterFinals[2].goals2 = ["Hitchens 38'"];

b.quarterFinals[3].goals1 = ["Scherer 13'"]; // Che vs Hun
b.quarterFinals[3].goals2 = [];

b.semiFinals[0].goals1 = ["Kadraba 48'", "Scherer 80', 84' (p)"]; // Che vs Yug
b.semiFinals[0].goals2 = ["Jerković 69'"];

b.semiFinals[1].goals1 = ["Garrincha 9', 32'", "Vavá 47', 78'"]; // Bra vs Chi
b.semiFinals[1].goals2 = ["Toro 42'", "L. Sánchez 61' (p)"];

b.thirdPlace.goals1 = ["Rojas 90'"]; // Chi vs Yug
b.thirdPlace.goals2 = [];

b.final.goals1 = ["Amarildo 17'", "Zito 69'", "Vavá 78'"]; // Bra vs Che
b.final.goals2 = ["Masopust 15'"];


fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1962 exact manual goal injection complete.');
