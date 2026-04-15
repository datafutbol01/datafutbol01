const fs = require('fs');

const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

const milanSquad = [
    { no: "1", flag: "it", pos: "POR", name: "Sebastiano Rossi" },
    { no: "12", flag: "it", pos: "POR", name: "Mario Ielpo" },
    { no: "6", flag: "it", pos: "DEF", name: "Franco Baresi" },
    { no: "3", flag: "it", pos: "DEF", name: "Paolo Maldini" },
    { no: "5", flag: "it", pos: "DEF", name: "Alessandro Costacurta" },
    { no: "2", flag: "it", pos: "DEF", name: "Mauro Tassotti" },
    { no: "13", flag: "it", pos: "DEF", name: "Christian Panucci" },
    { no: "14", flag: "it", pos: "DEF", name: "Filippo Galli" },
    { no: "8", flag: "fr", pos: "MED", name: "Marcel Desailly" },
    { no: "4", flag: "it", pos: "MED", name: "Demetrio Albertini" },
    { no: "10", flag: "hr", pos: "MED", name: "Zvonimir Boban" },
    { no: "10", flag: "yu", pos: "MED", name: "Dejan Savićević" },
    { no: "7", flag: "it", pos: "MED", name: "Roberto Donadoni" },
    { no: "15", flag: "it", pos: "MED", name: "Gianluigi Lentini" },
    { no: "16", flag: "it", pos: "MED", name: "Stefano Eranio" },
    { no: "11", flag: "it", pos: "DEL", name: "Marco Simone" },
    { no: "9", flag: "it", pos: "DEL", name: "Daniele Massaro" },
    { no: "18", flag: "it", pos: "DEL", name: "Paolo Di Canio" }
];

const bayernSquad = [
    { no: "1", flag: "de", pos: "POR", name: "Oliver Kahn" },
    { no: "12", flag: "de", pos: "POR", name: "Sven Scheuer" },
    { no: "10", flag: "de", pos: "DEF", name: "Lothar Matthäus" },
    { no: "5", flag: "de", pos: "DEF", name: "Thomas Helmer" },
    { no: "2", flag: "de", pos: "DEF", name: "Markus Babbel" },
    { no: "4", flag: "de", pos: "DEF", name: "Oliver Kreuzer" },
    { no: "6", flag: "de", pos: "MED", name: "Christian Nerlinger" },
    { no: "15", flag: "de", pos: "MED", name: "Dieter Frey" },
    { no: "7", flag: "de", pos: "MED", name: "Mehmet Scholl" },
    { no: "8", flag: "de", pos: "MED", name: "Markus Schupp" },
    { no: "16", flag: "de", pos: "MED", name: "Dietmar Hamann" },
    { no: "17", flag: "de", pos: "MED", name: "Christian Ziege" },
    { no: "21", flag: "ch", pos: "MED", name: "Alain Sutter" },
    { no: "9", flag: "fr", pos: "DEL", name: "Jean-Pierre Papin" },
    { no: "11", flag: "de", pos: "DEL", name: "Marcel Witeczek" },
    { no: "19", flag: "de", pos: "DEL", name: "Emil Kostadinov" },
    { no: "20", flag: "de", pos: "DEL", name: "Alexander Zickler" }
];

const psgSquad = [
    { no: "1", flag: "fr", pos: "POR", name: "Bernard Lama" },
    { no: "16", flag: "fr", pos: "POR", name: "Luc Borrelli" },
    { no: "3", flag: "fr", pos: "DEF", name: "Alain Roche" },
    { no: "4", flag: "br", pos: "DEF", name: "Ricardo Gomes" },
    { no: "6", flag: "fr", pos: "DEF", name: "Paul Le Guen" },
    { no: "5", flag: "fr", pos: "DEF", name: "Patrick Colleter" },
    { no: "13", flag: "fr", pos: "DEF", name: "Antoine Kombouaré" },
    { no: "15", flag: "fr", pos: "DEF", name: "José Cobos" },
    { no: "8", flag: "fr", pos: "MED", name: "Vincent Guérin" },
    { no: "10", flag: "br", pos: "MED", name: "Valdo" },
    { no: "14", flag: "fr", pos: "MED", name: "Daniel Bravo" },
    { no: "7", flag: "br", pos: "MED", name: "Raí" },
    { no: "12", flag: "sn", pos: "DEF", name: "Oumar Dieng" },
    { no: "11", flag: "fr", pos: "DEL", name: "David Ginola" },
    { no: "9", flag: "lr", pos: "DEL", name: "George Weah" },
    { no: "17", flag: "fr", pos: "DEL", name: "Pascal Nouma" }
];

json.participants.find(p => p.id === 'milan').squad = milanSquad;
json.participants.find(p => p.id === 'bayern-munich').squad = bayernSquad;
json.participants.find(p => p.id === 'psg').squad = psgSquad;

fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
console.log("Injected Top 4 precisely");
