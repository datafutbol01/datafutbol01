import fs from 'fs';

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/2022.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// First, collect all 32 squads
const allSquads = [];
data.participants.forEach(p => {
    if(p.squad) allSquads.push(p.squad);
});

// Map of first player's name to the correct team ID
const signatureMap = {
    "Saad Al Sheeb": "qatar",
    "Hernán Galíndez": "ecuador",
    "Remko Pasveer": "paises_bajos",
    "Seny Dieng": "senegal",
    "Jordan Pickford": "inglaterra",
    "Matt Turner": "estados_unidos",
    "Alireza Beiranvand": "iran",
    "Wayne Hennessey": "gales",
    "Franco Armani": "argentina",
    "Mohammed Al Rubaie": "arabia_saudita",
    "Alfredo Talavera": "mexico",
    "Wojciech Szczęsny": "polonia",
    "Hugo Lloris": "francia",
    "Mathew Ryan": "australia",
    "Kasper Schmeichel": "dinamarca",
    "Aymen Mathlouthi": "tunez",
    "Robert Sánchez": "espana",
    "Keylor Navas": "costa_rica",
    "Manuel Neuer": "alemania",
    "Eiji Kawashima": "japon",
    "Thibaut Courtois": "belgica",
    "Dayne St. Clair": "canada",
    "Yassine Bounou": "marruecos",
    "Dominik Livaković": "croacia",
    "Alisson": "brasil",
    "Marko Dmitrović": "serbia",
    "Yann Sommer": "suiza",
    "Simon Ngapandouetnbu": "camerun",
    "Rui Patrício": "portugal",
    "Lawrence Ati-Zigi": "ghana",
    "Fernando Muslera": "uruguay",
    "Kim Seung-gyu": "corea_del_sur"
};

// Reassign
data.participants.forEach(p => {
    p.squad = []; // clear first
});

let matched = 0;
allSquads.forEach(squad => {
    const firstPlayer = squad[0].name;
    const targetId = signatureMap[firstPlayer];
    if (targetId) {
        const teamObj = data.participants.find(p => p.id === targetId);
        if (teamObj) {
            teamObj.squad = squad;
            matched++;
        }
    } else {
        console.log("Unmatched signature:", firstPlayer);
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log(`Matched ${matched} squads correctly based on signatures.`);
