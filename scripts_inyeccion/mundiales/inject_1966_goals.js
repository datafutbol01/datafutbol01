import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1966.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = []; // Ing vs Uru 
g1[0].goals2 = [];

g1[1].goals1 = ["Hausser 62'"]; // Fra vs Mex
g1[1].goals2 = ["Borja 48'"];

g1[2].goals1 = ["Rocha 26'", "Cortés 31'"]; // Uru vs Fra
g1[2].goals2 = ["De Bourgoing 15' (p)"];

g1[3].goals1 = ["B. Charlton 37'", "Hunt 75'"]; // Ing vs Mex
g1[3].goals2 = [];

g1[4].goals1 = []; // Mex vs Uru
g1[4].goals2 = [];

g1[5].goals1 = ["Hunt 38', 75'"]; // Ing vs Fra
g1[5].goals2 = [];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["Held 16'", "Haller 21', 77' (p)", "Beckenbauer 39', 52'"]; // Ale vs Sui
g2[0].goals2 = [];

g2[1].goals1 = ["Artime 65', 77'"]; // Arg vs Esp
g2[1].goals2 = ["Pirri 67'"];

g2[2].goals1 = ["Sanchís 57'", "Amancio 75'"]; // Esp vs Sui
g2[2].goals2 = ["Quentin 31'"];

g2[3].goals1 = []; // Arg vs Ale
g2[3].goals2 = [];

g2[4].goals1 = ["Artime 52'", "Onega 79'"]; // Arg vs Sui
g2[4].goals2 = [];

g2[5].goals1 = ["Emmerich 39'", "Seeler 84'"]; // Ale vs Esp
g2[5].goals2 = ["Fusté 23'"];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Pelé 15'", "Garrincha 63'"]; // Bra vs Bul
g3[0].goals2 = [];

g3[1].goals1 = ["José Augusto 1', 67'", "Torres 90'"]; // Por vs Hun
g3[1].goals2 = ["Bene 60'"];

g3[2].goals1 = ["Bene 2'", "Farkas 64'", "Mészöly 73' (p)"]; // Hun vs Bra
g3[2].goals2 = ["Tostão 14'"];

g3[3].goals1 = ["Vutsov 7' (a.g.)", "Eusébio 38'", "Torres 81'"]; // Por vs Bul
g3[3].goals2 = [];

g3[4].goals1 = ["Simões 15'", "Eusébio 27', 85'"]; // Por vs Bra
g3[4].goals2 = ["Rildo 73'"];

g3[5].goals1 = ["Davidov 43' (a.g.)", "Mészöly 45'", "Bene 54'"]; // Hun vs Bul
g3[5].goals2 = ["Asparuhov 15'"];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Malofeyev 31', 88'", "Banishevskiy 33'"]; // URSS vs Cor
g4[0].goals2 = [];

g4[1].goals1 = ["Mazzola 8'", "Barison 51'"]; // Ita vs Chi
g4[1].goals2 = [];

g4[2].goals1 = ["Pak Seung-Zin 88'"]; // Cor vs Chi
g4[2].goals2 = ["Marcos 26' (p)"];

g4[3].goals1 = ["Chislenko 57'"]; // URSS vs Ita
g4[3].goals2 = [];

g4[4].goals1 = ["Pak Doo-Ik 42'"]; // Cor vs Ita
g4[4].goals2 = [];

g4[5].goals1 = ["Porkuyan 28', 85'"]; // URSS vs Chi
g4[5].goals2 = ["Marcos 32'"];

// Bracket
const b = data.bracket;
b.quarterFinals[0].goals1 = ["Hurst 78'"]; // Ing vs Arg
b.quarterFinals[0].goals2 = [];

b.quarterFinals[1].goals1 = ["Haller 11', 83'", "Beckenbauer 70'", "Seeler 75'"]; // Ale vs Uru
b.quarterFinals[1].goals2 = [];

b.quarterFinals[2].goals1 = ["Chislenko 5'", "Porkuyan 46'"]; // URSS vs Hun
b.quarterFinals[2].goals2 = ["Bene 57'"];

b.quarterFinals[3].goals1 = ["Eusébio 27', 43' (p), 56', 59' (p)", "José Augusto 80'"]; // Por vs Cor
b.quarterFinals[3].goals2 = ["Pak Seung-Zin 1'", "Li Dong-Woon 22'", "Yang Seung-Kook 25'"];

// Semi Finals
b.semiFinals[0].goals1 = ["B. Charlton 30', 80'"]; // Ing vs Por
b.semiFinals[0].goals2 = ["Eusébio 82' (p)"];

b.semiFinals[1].goals1 = ["Haller 43'", "Beckenbauer 67'"]; // Ale vs URSS
b.semiFinals[1].goals2 = ["Porkuyan 88'"];

b.thirdPlace.goals1 = ["Eusébio 12' (p)", "Torres 89'"]; // Por vs URSS
b.thirdPlace.goals2 = ["Malofeyev 43'"];

b.final.goals1 = ["Hurst 18', 101', 120'", "Peters 78'"]; // Ing vs Ale
b.final.goals2 = ["Haller 12'", "Weber 89'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1966 exact manual goal injection complete.');
