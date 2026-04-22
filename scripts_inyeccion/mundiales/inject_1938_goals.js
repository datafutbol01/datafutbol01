import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/1938.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const b = data.bracket;

// Round of 16
b.roundOf16[0].goals1 = ["Veinante 1'", "Nicolas 16', 69'"];
b.roundOf16[0].goals2 = ["Isemborghs 38'"];

b.roundOf16[1].goals1 = ["Ferraris 2'", "Piola 94'"];
b.roundOf16[1].goals2 = ["Brustad 83'"];

b.roundOf16[2].goals1 = ["Leônidas 18', 93', 104'", "Romeu 25'", "Perácio 44', 71'"];
b.roundOf16[2].goals2 = ["Scherfke 23' (p)", "Wilimowski 53', 59', 89', 118'"];

b.roundOf16[3].goals1 = ["Košťálek 93'", "Nejedlý 111'", "Zeman 118'"];
b.roundOf16[3].goals2 = [];

b.roundOf16[4].goals1 = ["Kohut 13'", "Toldi 15'", "Sárosi 28', 89'", "Zsengellér 35', 76'"];
b.roundOf16[4].goals2 = [];

b.roundOf16[5].goals1 = ["Walaschek 42'", "Bickel 64'", "Abegglen 75', 78'"];
b.roundOf16[5].goals2 = ["Hahnemann 8'", "Lörtscher 22' (a.g.)"];

b.roundOf16[6].goals1 = ["Socorro 51'", "Fernández 57'"];
b.roundOf16[6].goals2 = ["Dobay 35'"];

b.roundOf16[7].goals1 = [];
b.roundOf16[7].goals2 = [];

// Quarter Finals
b.quarterFinals[0].goals1 = ["Colaussi 9'", "Piola 51', 72'"];
b.quarterFinals[0].goals2 = ["Heisserer 10'"];

b.quarterFinals[1].goals1 = ["Leônidas 57'", "Roberto 62'"];
b.quarterFinals[1].goals2 = ["Kopecký 25'"];

b.quarterFinals[2].goals1 = ["Sárosi 40'", "Zsengellér 89'"];
b.quarterFinals[2].goals2 = [];

b.quarterFinals[3].goals1 = ["H. Andersson 9', 81', 89'", "Wetterström 22', 37', 44'", "Keller 80'", "Nyberg 84'"];
b.quarterFinals[3].goals2 = [];

// Semi Finals
b.semiFinals[0].goals1 = ["Colaussi 51'", "Meazza 60' (p)"];
b.semiFinals[0].goals2 = ["Romeu 87'"];

b.semiFinals[1].goals1 = ["Jacobsson 19' (a.g.)", "Titkos 37'", "Zsengellér 39', 85'", "Sárosi 65'"];
b.semiFinals[1].goals2 = ["Nyberg 1'"];

// Third Place & Final
b.thirdPlace.goals1 = ["Romeu 44'", "Leônidas 63', 74'", "Perácio 80'"];
b.thirdPlace.goals2 = ["Jonasson 28'", "Nyberg 38'"];

b.final.goals1 = ["Colaussi 6', 35'", "Piola 16', 82'"];
b.final.goals2 = ["Titkos 8'", "Sárosi 70'"];

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('1938 exact manual goal injection complete.');
