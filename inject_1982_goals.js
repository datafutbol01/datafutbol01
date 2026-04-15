import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1982.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Group A (1)
const ga = data.groups["A"].matches;
ga[0].goals1 = []; // Ita vs Pol
ga[0].goals2 = [];

ga[1].goals1 = []; // Per vs Cam
ga[1].goals2 = [];

ga[2].goals1 = ["Conti 18'"]; // Ita vs Per
ga[2].goals2 = ["Díaz 83'"];

ga[3].goals1 = []; // Pol vs Cam
ga[3].goals2 = [];

ga[4].goals1 = ["Smolarek 55'", "Lato 58'", "Boniek 61'", "Buncol 68'", "Ciolek 76'"]; // Pol vs Per
ga[4].goals2 = ["La Rosa 83'"];

ga[5].goals1 = ["Graziani 60'"]; // Ita vs Cam
ga[5].goals2 = ["M'Bida 61'"];

// Group B (2)
const gb = data.groups["B"].matches;
gb[0].goals1 = ["Rummenigge 67'"]; // Ale vs Arg
gb[0].goals2 = ["Madjer 54'", "Belloumi 68'"];

gb[1].goals1 = []; // Chi vs Aus
gb[1].goals2 = ["Schachner 21'"];

gb[2].goals1 = ["Rummenigge 9', 57', 66'", "Reinders 81'"]; // Ale vs Chi
gb[2].goals2 = ["Moscoso 90'"];

gb[3].goals1 = []; // Arg vs Aus
gb[3].goals2 = ["Schachner 55'", "Krankl 67'"];

gb[4].goals1 = ["Assad 7', 31'", "Bensaoula 35'"]; // Arg vs Chi
gb[4].goals2 = ["Neira 59' (p)", "Letelier 73'"];

gb[5].goals1 = ["Hrubesch 10'"]; // Ale vs Aus
gb[5].goals2 = [];

// Group C (3)
const gc = data.groups["C"].matches;
gc[0].goals1 = []; // Arg vs Bel
gc[0].goals2 = ["Vandenbergh 62'"];

gc[1].goals1 = ["Nyilasi 4', 83'", "Pölöskei 11'", "Fazekas 23', 54'", "Tóth 50'", "Kiss 69', 72', 76'", "Szentes 70'"]; // Hun vs ElSal
gc[1].goals2 = ["Ramírez 64'"];

gc[2].goals1 = ["Bertoni 26'", "Maradona 28', 57'", "Ardiles 60'"]; // Arg vs Hun
gc[2].goals2 = ["Pölöskei 76'"];

gc[3].goals1 = ["Coeck 19'"]; // Bel vs ElSal
gc[3].goals2 = [];

gc[4].goals1 = ["Czerniatynski 76'"]; // Bel vs Hun
gc[4].goals2 = ["Varga 27'"];

gc[5].goals1 = ["Passarella 22' (p)", "Bertoni 52'"]; // Arg vs ElSal
gc[5].goals2 = [];

// Group D (4)
const gd = data.groups["D"].matches;
gd[0].goals1 = ["Robson 1', 67'", "Mariner 83'"]; // Ing vs Fra
gd[0].goals2 = ["Soler 24'"];

gd[1].goals1 = ["Panenka 21' (p)"]; // Che vs Kuw
gd[1].goals2 = ["Al-Dakhil 57'"];

gd[2].goals1 = ["Francis 62'", "Barmoš 66' (a.g.)"]; // Ing vs Che
gd[2].goals2 = [];

gd[3].goals1 = ["Genghini 31'", "Platini 43'", "Six 48'", "Bossis 89'"]; // Fra vs Kuw
gd[3].goals2 = ["Al-Buloushi 75'"];

gd[4].goals1 = ["Six 66'"]; // Fra vs Che
gd[4].goals2 = ["Panenka 84' (p)"];

gd[5].goals1 = ["Francis 27'"]; // Ing vs Kuw
gd[5].goals2 = [];

// Group E (5)
const ge = data.groups["E"].matches;
ge[0].goals1 = ["López Ufarte 65' (p)"]; // Esp vs Hon
ge[0].goals2 = ["Zelaya 7'"];

ge[1].goals1 = []; // Yug vs Irl
ge[1].goals2 = [];

ge[2].goals1 = ["Juanito 14' (p)", "Saura 66'"]; // Esp vs Yug
ge[2].goals2 = ["Gudelj 10'"];

ge[3].goals1 = ["Laing 60'"]; // Hon vs Irl
ge[3].goals2 = ["Armstrong 9'"];

ge[4].goals1 = []; // Hon vs Yug
ge[4].goals2 = ["Petrović 88' (p)"];

ge[5].goals1 = []; // Esp vs Irl
ge[5].goals2 = ["Armstrong 47'"];

// Group F (6)
const gf = data.groups["F"].matches;
gf[0].goals1 = ["Sócrates 75'", "Éder 88'"]; // Bra vs URSS
gf[0].goals2 = ["Bal 34'"];

gf[1].goals1 = ["Dalglish 18'", "Wark 29', 32'", "Robertson 73'", "Archibald 79'"]; // Esc vs Nze
gf[1].goals2 = ["Sumner 54'", "Wooddin 64'"];

gf[2].goals1 = ["Zico 33'", "Oscar 48'", "Éder 63'", "Falcão 87'"]; // Bra vs Esc
gf[2].goals2 = ["Narey 18'"];

gf[3].goals1 = ["Gavrilov 24'", "Blokhin 48'", "Baltacha 68'"]; // URSS vs Nze
gf[3].goals2 = [];

gf[4].goals1 = ["Chivadze 59'", "Shengelia 84'"]; // URSS vs Esc
gf[4].goals2 = ["Jordan 15'", "Souness 86'"];

gf[5].goals1 = ["Zico 28', 31'", "Falcão 64'", "Serginho 70'"]; // Bra vs Nze
gf[5].goals2 = [];

// Second Stage Group A (Tercera)
const sa = data.secondStageGroups["A (Tercera)"].matches;
sa[0].goals1 = ["Boniek 4', 26', 53'"]; // Pol vs Bel
sa[0].goals2 = [];

sa[1].goals1 = []; // Bel vs URSS
sa[1].goals2 = ["Oganesian 48'"];

sa[2].goals1 = []; // Pol vs URSS
sa[2].goals2 = [];

// Second Stage Group B (Segunda)
const sb = data.secondStageGroups["B (Segunda)"].matches;
sb[0].goals1 = []; // Ale vs Ing
sb[0].goals2 = [];

sb[1].goals1 = ["Littbarski 50'", "Fischer 75'"]; // Ale vs Esp
sb[1].goals2 = ["Zamora 82'"];

sb[2].goals1 = []; // Esp vs Ing
sb[2].goals2 = [];

// Second Stage Group C (Primera)
const sc = data.secondStageGroups["C (Primera)"].matches;
sc[0].goals1 = ["Tardelli 55'", "Cabrini 67'"]; // Ita vs Arg
sc[0].goals2 = ["Passarella 83'"];

sc[1].goals1 = ["Díaz 89'"]; // Arg vs Bra
sc[1].goals2 = ["Zico 11'", "Serginho 66'", "Júnior 75'"];

sc[2].goals1 = ["Rossi 5', 25', 74'"]; // Ita vs Bra
sc[2].goals2 = ["Sócrates 12'", "Falcão 68'"];

// Second Stage Group D (Cuarta)
const sd = data.secondStageGroups["D (Cuarta)"].matches;
sd[0].goals1 = []; // Aus vs Fra
sd[0].goals2 = ["Genghini 39'"];

sd[1].goals1 = ["Pezzey 50'", "Hintermaier 68'"]; // Aus vs Irl
sd[1].goals2 = ["Hamilton 27', 75'"];

sd[2].goals1 = ["Giresse 33', 80'", "Rocheteau 46', 68'"]; // Fra vs Irl
sd[2].goals2 = ["Armstrong 75'"];

// Bracket
const b = data.bracket;

b.semiFinals[0].goals1 = []; // Pol vs Ita
b.semiFinals[0].goals2 = ["Rossi 22', 73'"];

b.semiFinals[1].goals1 = ["Littbarski 17'", "Rummenigge 102'", "Fischer 108'"]; // Ale vs Fra
b.semiFinals[1].goals2 = ["Platini 26' (p)", "Trésor 92'", "Giresse 98'"];

b.thirdPlace.goals1 = ["Szarmach 40'", "Majewski 44'", "Kupcewicz 46'"]; // Pol vs Fra
b.thirdPlace.goals2 = ["Girard 13'", "Couriol 72'"];

b.final.goals1 = ["Rossi 57'", "Tardelli 69'", "Altobelli 81'"]; // Ita vs Ale
b.final.goals2 = ["Breitner 83'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1982 exact manual goal injection complete.');
