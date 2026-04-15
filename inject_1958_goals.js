import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1958.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Rahn 32', 79'", "Seeler 42'"]; // Ale vs Arg
g1[0].goals2 = ["Corbatta 3'"];

g1[1].goals1 = ["Cush 21'"]; // Irl vs Che
g1[1].goals2 = [];

g1[2].goals1 = ["Corbatta 37' (p)", "Menéndez 56'", "Avio 60'"]; // Arg vs Irl
g1[2].goals2 = ["McParland 4'"];

g1[3].goals1 = ["Schäfer 60'", "Rahn 71'"]; // Ale vs Che
g1[3].goals2 = ["Dvořák 24'", "Zikán 42'"];

g1[4].goals1 = ["Rahn 20'", "Seeler 78'"]; // Ale vs Irl
g1[4].goals2 = ["McParland 18', 60'"];

g1[5].goals1 = ["Dvořák 8'", "Zikán 17', 39'", "Feureisl 68'", "Hovorka 81', 89'"]; // Che vs Arg
g1[5].goals2 = ["Corbatta 64' (p)"];

g1[6].goals1 = ["McParland 44', 97'"]; // Irl vs Che (Play-off)
g1[6].goals2 = ["Zikán 18'"];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["Fontaine 24', 30', 67'", "Piantoni 52'", "Wisnieski 61'", "Kopa 70'", "Vincent 83'"]; // Fra vs Par
g2[0].goals2 = ["Amarilla 20', 44' (p)", "Romero 50'"];

g2[1].goals1 = ["Petaković 6'"]; // Yug vs Esc
g2[1].goals2 = ["Murray 49'"];

g2[2].goals1 = ["Petaković 16'", "Veselinović 63', 88'"]; // Yug vs Fra
g2[2].goals2 = ["Fontaine 4', 85'"];

g2[3].goals1 = ["Agüero 4'", "Ré 45'", "Parodi 73'"]; // Par vs Esc
g2[3].goals2 = ["Mudie 24'", "Collins 74'"];

g2[4].goals1 = ["Kopa 22'", "Fontaine 44'"]; // Fra vs Esc
g2[4].goals2 = ["Baird 58'"];

g2[5].goals1 = ["Parodi 20'", "Agüero 52'", "Romero 80'"]; // Par vs Yug
g2[5].goals2 = ["Ognjanović 18'", "Veselinović 21'", "Rajkov 73'"];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Simonsson 17', 64'", "Liedholm 57' (p)"]; // Sue vs Mex
g3[0].goals2 = [];

g3[1].goals1 = ["Bozsik 5'"]; // Hun vs Gal
g3[1].goals2 = ["J. Charles 27'"];

g3[2].goals1 = ["Belmonte 89'"]; // Mex vs Gal
g3[2].goals2 = ["I. Allchurch 32'"];

g3[3].goals1 = ["Hamrin 34', 55'"]; // Sue vs Hun
g3[3].goals2 = ["Tichy 77'"];

g3[4].goals1 = []; // Sue vs Gal
g3[4].goals2 = [];

g3[5].goals1 = ["Tichy 19', 46'", "Sándor 54'", "Bencsics 69'"]; // Hun vs Mex
g3[5].goals2 = [];

g3[6].goals1 = ["I. Allchurch 55'", "Medwin 76'"]; // Gal vs Hun (Play-off)
g3[6].goals2 = ["Tichy 33'"];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Mazzola 37', 85'", "Nílton Santos 50'"]; // Bra vs Aus
g4[0].goals2 = [];

g4[1].goals1 = ["Simonyan 13'", "A. Ivanov 56'"]; // URSS vs Ing
g4[1].goals2 = ["Kevan 66'", "Finney 85' (p)"];

g4[2].goals1 = []; // Bra vs Ing
g4[2].goals2 = [];

g4[3].goals1 = ["Ilyin 15'", "V. Ivanov 62'"]; // URSS vs Aus
g4[3].goals2 = [];

g4[4].goals1 = ["Vavá 3', 77'"]; // Bra vs URSS
g4[4].goals2 = [];

g4[5].goals1 = ["Haynes 56'", "Kevan 74'"]; // Ing vs Aus
g4[5].goals2 = ["Koller 15'", "Körner 71'"];

g4[6].goals1 = ["Ilyin 69'"]; // URSS vs Ing (Play-off)
g4[6].goals2 = [];

// Bracket
const b = data.bracket;
b.quarterFinals[0].goals1 = ["Wisnieski 44'", "Fontaine 55', 63'", "Piantoni 68'"]; // Fra vs Irl
b.quarterFinals[0].goals2 = [];

b.quarterFinals[1].goals1 = ["Hamrin 49'", "Simonsson 88'"]; // Sue vs URSS
b.quarterFinals[1].goals2 = [];

b.quarterFinals[2].goals1 = ["Pelé 66'"]; // Bra vs Gal
b.quarterFinals[2].goals2 = [];

b.quarterFinals[3].goals1 = ["Rahn 12'"]; // Ale vs Yug
b.quarterFinals[3].goals2 = [];

b.semiFinals[0].goals1 = ["Vavá 2'", "Didi 39'", "Pelé 52', 64', 75'"]; // Bra vs Fra
b.semiFinals[0].goals2 = ["Fontaine 9'", "Piantoni 83'"];

b.semiFinals[1].goals1 = ["Skoglund 32'", "Gren 81'", "Hamrin 88'"]; // Sue vs Ale
b.semiFinals[1].goals2 = ["Schäfer 24'"];

b.thirdPlace.goals1 = ["Fontaine 16', 36', 78', 89'", "Kopa 27' (p)", "Douis 50'"]; // Fra vs Ale
b.thirdPlace.goals2 = ["Cieslarczyk 18'", "Rahn 52'", "Schäfer 84'"];

b.final.goals1 = ["Vavá 9', 32'", "Pelé 55', 90'", "Zagallo 68'"]; // Bra vs Sue
b.final.goals2 = ["Liedholm 4'", "Simonsson 80'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1958 exact manual goal injection complete.');
