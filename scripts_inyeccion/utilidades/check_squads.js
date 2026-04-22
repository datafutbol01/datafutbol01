import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2022.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const senegal = data.participants.find(p => p.id === 'senegal');
const holanda = data.participants.find(p => p.id === 'paises_bajos');

console.log("SENEGAL SQUAD, First 3 players:");
senegal.squad.slice(0, 3).forEach(p => console.log(p.name));

console.log("\nHOLANDA SQUAD, First 3 players:");
holanda.squad.slice(0, 3).forEach(p => console.log(p.name));
