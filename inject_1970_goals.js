import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1970.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = []; // Mex vs URSS
g1[0].goals2 = [];

g1[1].goals1 = ["Van Moer 12', 54'", "Lambert 76' (p)"]; // Bel vs ElS
g1[1].goals2 = [];

g1[2].goals1 = ["Byshovets 14', 63'", "Asatiani 57'", "Khmelnytskyi 76'"]; // URSS vs Bel
g1[2].goals2 = ["Lambert 86'"];

g1[3].goals1 = ["Valdivia 45', 46'", "Fragoso 58'", "Basaguren 83'"]; // Mex vs ElS
g1[3].goals2 = [];

g1[4].goals1 = ["Byshovets 51', 74'"]; // URSS vs ElS
g1[4].goals2 = [];

g1[5].goals1 = ["Peña 14' (p)"]; // Mex vs Bel
g1[5].goals2 = [];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = ["Maneiro 23'", "Mujica 50'"]; // Uru vs Isr
g2[0].goals2 = [];

g2[1].goals1 = ["Domenghini 10'"]; // Ita vs Sue
g2[1].goals2 = [];

g2[2].goals1 = []; // Uru vs Ita
g2[2].goals2 = [];

g2[3].goals1 = ["Turesson 53'"]; // Sue vs Isr
g2[3].goals2 = ["Spiegler 56'"];

g2[4].goals1 = ["Grahn 90'"]; // Sue vs Uru
g2[4].goals2 = [];

g2[5].goals1 = []; // Ita vs Isr
g2[5].goals2 = [];


// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = ["Hurst 11'"]; // Ing vs Rum
g3[0].goals2 = [];

g3[1].goals1 = ["Rivelino 24'", "Pelé 59'", "Jairzinho 61', 83'"]; // Bra vs Che
g3[1].goals2 = ["Petráš 11'"];

g3[2].goals1 = ["Neagu 52'", "Dumitrache 75' (p)"]; // Rum vs Che
g3[2].goals2 = ["Petráš 5'"];

g3[3].goals1 = ["Jairzinho 59'"]; // Bra vs Ing
g3[3].goals2 = [];

g3[4].goals1 = ["Pelé 19', 67'", "Jairzinho 22'"]; // Bra vs Rum
g3[4].goals2 = ["Dumitrache 34'", "Dembrovschi 84'"];

g3[5].goals1 = ["Clarke 50' (p)"]; // Ing vs Che
g3[5].goals2 = [];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Gallardo 50'", "Chumpitaz 55'", "Cubillas 73'"]; // Per vs Bul
g4[0].goals2 = ["Dermendzhiev 13'", "Bonev 49'"];

g4[1].goals1 = ["Seeler 56'", "Müller 80'"]; // Ale vs Mar
g4[1].goals2 = ["Houmane 21'"];

g4[2].goals1 = ["Cubillas 65', 75'", "Challe 67'"]; // Per vs Mar
g4[2].goals2 = [];

g4[3].goals1 = ["Libuda 20'", "Müller 27', 52' (p), 88'", "Seeler 67'"]; // Ale vs Bul
g4[3].goals2 = ["Nikodimov 12'", "Kolev 89'"];

g4[4].goals1 = ["Müller 19', 26', 39'"]; // Ale vs Per
g4[4].goals2 = ["Cubillas 44'"];

g4[5].goals1 = ["Zhechev 40'"]; // Bul vs Mar
g4[5].goals2 = ["Ghazouani 61'"];

// Bracket
const b = data.bracket;

// Quarter Finals
b.quarterFinals[0].goals1 = []; // URSS vs Uru
b.quarterFinals[0].goals2 = ["Espárrago 117'"];

b.quarterFinals[1].goals1 = ["Rivelino 11'", "Tostão 15', 52'", "Jairzinho 75'"]; // Bra vs Per
b.quarterFinals[1].goals2 = ["Gallardo 28'", "Cubillas 70'"];

b.quarterFinals[2].goals1 = ["Guzmán 25' (a.g.)", "Riva 63', 76'", "Rivera 70'"]; // Ita vs Mex
b.quarterFinals[2].goals2 = ["González 13'"];

b.quarterFinals[3].goals1 = ["Beckenbauer 68'", "Seeler 82'", "Müller 108'"]; // Ale vs Ing
b.quarterFinals[3].goals2 = ["Mullery 31'", "Peters 49'"];

// Semi Finals
b.semiFinals[0].goals1 = ["Cubilla 19'"]; // Uru vs Bra
b.semiFinals[0].goals2 = ["Clodoaldo 44'", "Jairzinho 76'", "Rivelino 89'"];

b.semiFinals[1].goals1 = ["Boninsegna 8'", "Burgnich 98'", "Riva 104'", "Rivera 111'"]; // Ita vs Ale
b.semiFinals[1].goals2 = ["Schnellinger 90'", "Müller 94', 110'"];

// Third Place & Final
b.thirdPlace.goals1 = []; // Uru vs Ale
b.thirdPlace.goals2 = ["Overath 26'"];

b.final.goals1 = ["Pelé 18'", "Gérson 66'", "Jairzinho 71'", "Carlos Alberto 86'"]; // Bra vs Ita
b.final.goals2 = ["Boninsegna 37'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1970 exact manual goal injection complete.');
