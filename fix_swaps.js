import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2022.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Swap Senegal and Países Bajos
const senegal = data.participants.find(p => p.id === 'senegal');
const holanda = data.participants.find(p => p.id === 'paises_bajos');

const temp = senegal.squad;
senegal.squad = holanda.squad;
holanda.squad = temp;

fs.writeFileSync(file, JSON.stringify(data, null, 2));

// Print first player of ALL teams to quickly inspect for other swaps
data.participants.forEach(p => {
   if (p.squad && p.squad.length > 0) {
       console.log(`${p.name.padEnd(20)}: ${p.squad[0].name} (${p.squad[1].name})`);
   }
});
