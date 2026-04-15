import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1974.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group 1
const g1 = data.groups["1"].matches;
g1[0].goals1 = ["Breitner 18'"]; // AleFederal vs Chi 
g1[0].goals2 = [];

g1[1].goals1 = ["Curran 58' (a.g.)", "Streich 72'"]; // AleDem vs Aus
g1[1].goals2 = [];

g1[2].goals1 = []; // Aus vs AleFederal
g1[2].goals2 = ["Overath 12'", "Cullmann 34'", "Müller 53'"]; 

g1[3].goals1 = ["Ahumada 69'"]; // Chi vs AleDem
g1[3].goals2 = ["Hoffmann 55'"];

g1[4].goals1 = []; // Aus vs Chi
g1[4].goals2 = [];

g1[5].goals1 = ["Sparwasser 77'"]; // AleDem vs AleFederal
g1[5].goals2 = [];

// Group 2
const g2 = data.groups["2"].matches;
g2[0].goals1 = []; // Bra vs Yug
g2[0].goals2 = [];

g2[1].goals1 = []; // Zai vs Esc
g2[1].goals2 = ["Lorimer 26'", "Jordan 34'"];

g2[2].goals1 = ["Bajević 8', 30', 81'", "Džajić 14'", "Šurjak 18'", "Katalinski 22'", "Bogićević 35'", "Oblak 61'", "Petković 65'"]; // Yug vs Zai
g2[2].goals2 = [];

g2[3].goals1 = []; // Esc vs Bra
g2[3].goals2 = [];

g2[4].goals1 = ["Jordan 88'"]; // Esc vs Yug
g2[4].goals2 = ["Karasi 81'"];

g2[5].goals1 = []; // Zai vs Bra
g2[5].goals2 = ["Jairzinho 12'", "Rivelino 66'", "Valdomiro 79'"];

// Group 3
const g3 = data.groups["3"].matches;
g3[0].goals1 = []; // Uru vs Pai
g3[0].goals2 = ["Rep 7', 86'"];

g3[1].goals1 = []; // Sue vs Bul
g3[1].goals2 = [];

g3[2].goals1 = ["Bonev 75'"]; // Bul vs Uru
g3[2].goals2 = ["Pavoni 87'"]; 

g3[3].goals1 = []; // Pai vs Sue
g3[3].goals2 = [];

g3[4].goals1 = ["Krol 78' (a.g.)"]; // Bul vs Pai
g3[4].goals2 = ["Neeskens 5' (p), 44' (p)", "Rep 71'", "de Jong 88'"];

g3[5].goals1 = ["Edström 46', 77'", "Sandberg 74'"]; // Sue vs Uru
g3[5].goals2 = [];

// Group 4
const g4 = data.groups["4"].matches;
g4[0].goals1 = ["Rivera 52'", "Benetti 66'", "Anastasi 79'"]; // Ita vs Hai
g4[0].goals2 = ["Sanon 46'"];

g4[1].goals1 = ["Lato 7', 62'", "Szarmach 8'"]; // Pol vs Arg
g4[1].goals2 = ["Heredia 60'", "Babington 66'"];

g4[2].goals1 = ["Houseman 20'"]; // Arg vs Ita
g4[2].goals2 = ["Perfumo 35' (a.g.)"];

g4[3].goals1 = ["Sanon 63'"]; // Hai vs Pol
g4[3].goals2 = ["Lato 17', 87'", "Deyna 18'", "Szarmach 30', 34', 50'", "Gorgoń 31'"];

g4[4].goals1 = ["Yazalde 15', 68'", "Houseman 18'", "Ayala 55'"]; // Arg vs Hai
g4[4].goals2 = ["Sanon 63'"];

g4[5].goals1 = ["Szarmach 38'", "Deyna 44'"]; // Pol vs Ita
g4[5].goals2 = ["Capello 85'"];

// Second Stage Group A
const sa = data.secondStageGroups["A"].matches;
sa[0].goals1 = ["Cruyff 11', 90'", "Krol 25'", "Rep 73'"]; // Pai vs Arg
sa[0].goals2 = [];

sa[1].goals1 = ["Rivelino 60'"]; // Bra vs AleDem
sa[1].goals2 = [];

sa[2].goals1 = ["Brindisi 35'"]; // Arg vs Bra
sa[2].goals2 = ["Rivelino 32'", "Jairzinho 49'"];

sa[3].goals1 = []; // AleDem vs Pai
sa[3].goals2 = ["Neeskens 7'", "Rensenbrink 59'"];

sa[4].goals1 = ["Houseman 20'"]; // Arg vs AleDem
sa[4].goals2 = ["Streich 14'"];

sa[5].goals1 = ["Neeskens 50'", "Cruyff 65'"]; // Pai vs Bra
sa[5].goals2 = [];

// Second Stage Group B
const sb = data.secondStageGroups["B"].matches;
sb[0].goals1 = []; // Yug vs AleFederal
sb[0].goals2 = ["Breitner 39'", "Müller 82'"];

sb[1].goals1 = []; // Sue vs Pol
sb[1].goals2 = ["Lato 43'"];

sb[2].goals1 = ["Deyna 24' (p)", "Lato 62'"]; // Pol vs Yug
sb[2].goals2 = ["Karasi 43'"];

sb[3].goals1 = ["Overath 51'", "Bonhof 52'", "Grabowski 76'", "Hoeneß 89' (p)"]; // AleFederal vs Sue
sb[3].goals2 = ["Edström 24'", "Sandberg 53'"];

sb[4].goals1 = []; // Pol vs AleFederal
sb[4].goals2 = ["Müller 76'"];

sb[5].goals1 = ["Edström 29'", "Torstensson 85'"]; // Sue vs Yug
sb[5].goals2 = ["Šurjak 27'"];


// Bracket
const b = data.bracket;

// Third Place & Final
b.thirdPlace.goals1 = []; // Bra vs Pol
b.thirdPlace.goals2 = ["Lato 76'"];

b.final.goals1 = ["Neeskens 2' (p)"]; // Pai vs AleFederal
b.final.goals2 = ["Breitner 25' (p)", "Müller 43'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1974 exact manual goal injection complete.');
