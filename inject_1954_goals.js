import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1954.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Baltazar 23'", "Didi 30'", "Pinga 34', 43'", "Julinho 69'"]; // Bra vs Mex
g1[0].goals2 = [];

g1[1].goals1 = ["Milutinović 15'"]; // Yug vs Fra
g1[1].goals2 = [];

g1[2].goals1 = ["Vincent 19'", "Cárdenas 46' (a.g.)", "Kopa 88' (p)"]; // Fra vs Mex
g1[2].goals2 = ["Lamadrid 54'", "Balcázar 85'"];

g1[3].goals1 = ["Didi 69'"]; // Bra vs Yug
g1[3].goals2 = ["Zebec 48'"];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["Schäfer 14'", "Klodt 52'", "O. Walter 60'", "Morlock 84'"]; // Ale vs Tur
g2[0].goals2 = ["Suat 2'"];

g2[1].goals1 = ["Puskás 12', 89'", "Lantos 18'", "Kocsis 24', 36', 50'", "Czibor 59'", "Palotás 75', 83'"]; // Hun vs Cor
g2[1].goals2 = [];

g2[2].goals1 = ["Kocsis 3', 21', 69', 78'", "Puskás 17'", "Hidegkuti 52', 54'", "Tóth 75'"]; // Hun vs Ale
g2[2].goals2 = ["Pfaff 25'", "Rahn 77'", "Herrmann 84'"];

g2[3].goals1 = ["Suat 10', 30'", "Lefter 24'", "Burhan 37', 64', 70'", "Erol 76'"]; // Tur vs Cor
g2[3].goals2 = [];

g2[4].goals1 = ["O. Walter 7'", "Schäfer 12', 79'", "Morlock 30', 60', 77'", "F. Walter 62'"]; // Ale vs Tur (Playoff)
g2[4].goals2 = ["Mustafa 21'", "Lefter 82'"];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Míguez 71'", "Schiaffino 84'"]; // Uru vs Che
g3[0].goals2 = [];

g3[1].goals1 = ["Probst 33'"]; // Aus vs Esc
g3[1].goals2 = [];

g3[2].goals1 = ["Borges 17', 47', 57'", "Míguez 30', 83'", "Abbadie 54', 85'"]; // Uru vs Esc
g3[2].goals2 = [];

g3[3].goals1 = ["Stojaspal 3', 65'", "Probst 4', 21', 24'"]; // Aus vs Che
g3[3].goals2 = [];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Ballaman 18'", "Hügi 78'"]; // Sui vs Ita
g4[0].goals2 = ["Boniperti 44'"];

g4[1].goals1 = ["Broadis 26', 63'", "Lofthouse 36', 91'"]; // Ing vs Bel
g4[1].goals2 = ["Anoul 5', 71'", "Coppens 67'", "Dickinson 94' (a.g.)"];

g4[2].goals1 = ["Pandolfini 41' (p)", "Galli 48'", "Frignani 58'", "Lorenzi 78'"]; // Ita vs Bel
g4[2].goals2 = ["Anoul 81'"];

g4[3].goals1 = ["Mullen 43'", "Wilshaw 69'"]; // Ing vs Sui
g4[3].goals2 = [];

g4[4].goals1 = ["Hügi 14', 85'", "Ballaman 48'", "Fatton 90'"]; // Sui vs Ita (Playoff)
g4[4].goals2 = ["Nesti 67'"];

// Bracket
const b = data.bracket;
b.quarterFinals[0].goals1 = ["Wagner 25', 27', 53'", "R. Körner 26', 34'", "Ocwirk 32'", "Probst 76'"]; // Aus vs Sui
b.quarterFinals[0].goals2 = ["Ballaman 16', 39'", "Hügi 17', 19', 60'"];

b.quarterFinals[1].goals1 = ["Borges 5'", "Varela 39'", "Schiaffino 46'", "Ambrois 114'"]; // Uru vs Ing
b.quarterFinals[1].goals2 = ["Lofthouse 16'", "Finney 67'"];

b.quarterFinals[2].goals1 = ["Hidegkuti 4'", "Kocsis 7', 88'", "Lantos 60' (p)"]; // Hun vs Bra
b.quarterFinals[2].goals2 = ["Djalma Santos 18' (p)", "Julinho 65'"];

b.quarterFinals[3].goals1 = ["Horvat 9' (a.g.)", "Rahn 85'"]; // Ale vs Yug
b.quarterFinals[3].goals2 = [];

b.semiFinals[0].goals1 = ["Czibor 13'", "Hidegkuti 46'", "Kocsis 111', 116'"]; // Hun vs Uru
b.semiFinals[0].goals2 = ["Hohberg 75', 86'"];

b.semiFinals[1].goals1 = ["Schäfer 31'", "Morlock 47'", "F. Walter 54' (p), 64' (p)", "O. Walter 61', 89'"]; // Ale vs Aus
b.semiFinals[1].goals2 = ["Probst 51'"];

b.thirdPlace.goals1 = ["Stojaspal 16' (p)", "Cruz 59' (a.g.)", "Ocwirk 89'"]; // Aus vs Uru
b.thirdPlace.goals2 = ["Hohberg 22'"];

b.final.goals1 = ["Morlock 10'", "Rahn 18', 84'"]; // Ale vs Hun
b.final.goals2 = ["Puskás 6'", "Czibor 8'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1954 exact manual goal injection complete.');
