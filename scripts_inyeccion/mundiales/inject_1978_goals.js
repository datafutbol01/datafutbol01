import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1978.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Rossi 29'", "Zaccarelli 54'"]; // Ita vs Fra
g1[0].goals2 = ["Lacombe 1'"];

g1[1].goals1 = ["Luque 14'", "Bertoni 83'"]; // Arg vs Hun
g1[1].goals2 = ["Csapó 10'"];

g1[2].goals1 = ["Rossi 34'", "Bettega 35'", "Benetti 61'"]; // Ita vs Hun
g1[2].goals2 = ["A. Tóth 81' (p)"];

g1[3].goals1 = ["Passarella 45' (p)", "Luque 73'"]; // Arg vs Fra
g1[3].goals2 = ["Platini 60'"];

g1[4].goals1 = ["Lopez 23'", "Berdoll 38'", "Rocheteau 42'"]; // Fra vs Hun
g1[4].goals2 = ["Zombori 41'"];

g1[5].goals1 = ["Bettega 67'"]; // Ita vs Arg
g1[5].goals2 = [];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = []; // Ale vs Pol
g2[0].goals2 = [];

g2[1].goals1 = ["Kaabi 55'", "Ghommidh 79'", "Dhouieb 87'"]; // Tun vs Mex
g2[1].goals2 = ["Vázquez Ayala 45' (p)"];

g2[2].goals1 = ["Lato 43'"]; // Pol vs Tun
g2[2].goals2 = [];

g2[3].goals1 = ["D. Müller 15'", "H. Müller 30'", "Rummenigge 38', 73'", "Flohe 44', 89'"]; // Ale vs Mex
g2[3].goals2 = [];

g2[4].goals1 = []; // Ale vs Tun
g2[4].goals2 = [];

g2[5].goals1 = ["Boniek 43', 84'", "Deyna 56'"]; // Pol vs Mex
g2[5].goals2 = ["Rangel 52'"];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Schachner 10'", "Krankl 76'"]; // Aus vs Esp
g3[0].goals2 = ["Dani 21'"];

g3[1].goals1 = ["Reinaldo 45'"]; // Bra vs Sue
g3[1].goals2 = ["Sjöberg 37'"];

g3[2].goals1 = ["Krankl 42' (p)"]; // Aus vs Sue
g3[2].goals2 = [];

g3[3].goals1 = []; // Bra vs Esp
g3[3].goals2 = [];

g3[4].goals1 = ["Asensi 75'"]; // Esp vs Sue
g3[4].goals2 = [];

g3[5].goals1 = ["Roberto Dinamite 40'"]; // Bra vs Aus
g3[5].goals2 = [];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Cueto 43'", "Cubillas 71', 77'"]; // Per vs Esc
g4[0].goals2 = ["Jordan 14'"];

g4[1].goals1 = ["Rensenbrink 40' (p), 62', 78' (p)"]; // Pai vs Ira
g4[1].goals2 = [];

g4[2].goals1 = ["Eskandarian 43' (a.g.)"]; // Esc vs Ira
g4[2].goals2 = ["Danaeifard 60'"];

g4[3].goals1 = []; // Pai vs Per
g4[3].goals2 = [];

g4[4].goals1 = ["Velásquez 2'", "Cubillas 36' (p), 39' (p), 79'"]; // Per vs Ira
g4[4].goals2 = ["Rowshan 41'"];

g4[5].goals1 = ["Dalglish 44'", "Gemmill 46' (p), 68'"]; // Esc vs Pai
g4[5].goals2 = ["Rensenbrink 34' (p)", "Rep 71'"];

// Second Stage Group A
const sa = data.secondStageGroups["A"].matches;
sa[0].goals1 = ["Brandts 6'", "Rensenbrink 35' (p)", "Rep 36', 53'", "W. van de Kerkhof 82'"]; // Pai vs Aus
sa[0].goals2 = ["Obermayer 79'"];

sa[1].goals1 = []; // Ita vs Ale
sa[1].goals2 = [];

sa[2].goals1 = ["Haan 27'", "R. van de Kerkhof 84'"]; // Pai vs Ale
sa[2].goals2 = ["Abramczik 3'", "D. Müller 70'"];

sa[3].goals1 = ["Rossi 14'"]; // Ita vs Aus
sa[3].goals2 = [];

sa[4].goals1 = ["Vogts 59' (a.g.)", "Krankl 66', 87'"]; // Aus vs Ale
sa[4].goals2 = ["Rummenigge 19'", "Hölzenbein 68'"];

sa[5].goals1 = ["Brandts 50'", "Haan 75'"]; // Pai vs Ita
sa[5].goals2 = ["Brandts 18' (a.g.)"];

// Second Stage Group B
const sb = data.secondStageGroups["B"].matches;
sb[0].goals1 = ["Dirceu 15', 27'", "Zico 72' (p)"]; // Bra vs Per
sb[0].goals2 = [];

sb[1].goals1 = ["Kempes 16', 71'"]; // Arg vs Pol
sb[1].goals2 = [];

sb[2].goals1 = []; // Bra vs Arg
sb[2].goals2 = [];

sb[3].goals1 = ["Szarmach 65'"]; // Pol vs Per
sb[3].goals2 = [];

sb[4].goals1 = ["Nelinho 12'", "Roberto Dinamite 57', 63'"]; // Bra vs Pol
sb[4].goals2 = ["Lato 45'"];

sb[5].goals1 = ["Kempes 21', 46'", "Tarantini 43'", "Luque 50', 72'", "Houseman 67'"]; // Arg vs Per
sb[5].goals2 = [];

// Third Place & Final
const b = data.bracket;

b.thirdPlace.goals1 = ["Nelinho 64'", "Dirceu 71'"]; // Bra vs Ita
b.thirdPlace.goals2 = ["Causio 38'"];

b.final.goals1 = ["Kempes 38', 105'", "Bertoni 115'"]; // Arg vs Pai
b.final.goals2 = ["Nanninga 82'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1978 exact manual goal injection complete.');
