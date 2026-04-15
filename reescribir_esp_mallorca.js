const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania', 'mallorca.json');

const mallorca = [
    { nombre: "Samuel Eto'o", desc: "Máximo goleador en la historia del club en Primera División. Anotó dos goles decisivos en la final de la Copa del Rey de 2003 que obtuvo el equipo." },
    { nombre: "Miguel Ángel Nadal", desc: "Defensor central nacido en Baleares. Disputó una gran cantidad de partidos oficiales divididos en dos amplias etapas separadas por su paso al Fútbol Club Barcelona." },
    { nombre: "Ariel Ibagaza", desc: "Mediocampista organizador argentino. Capitaneó al equipo durante las clasificaciones continentales del club y en la obtención de la histórica Copa del Rey." },
    { nombre: "Jovan Stanković", desc: "Mediocampista titular que jugó de manera ininterrumpida por siete campañas en el plantel. Jugó como mediocampista en la final de la Recopa de Europa instaurada en 1999." },
    { nombre: "Dani Güiza", desc: "Delantero centro que se consagró máximo goleador oficial de la Primera División nacional en la temporada de 2008 tras jugar un excelente torneo en el club." }
];

let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

if (data.idolos && Array.isArray(data.idolos)) {
  data.idolos.forEach((idolo) => {
    const idoloMatch = mallorca.find(i => 
       i.nombre.toLowerCase() === idolo.nombre.toLowerCase() ||
       idolo.nombre.toLowerCase().includes(i.nombre.toLowerCase().split(' ')[0]) ||
       i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' / ')[0]) || 
       i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' ')[0])
    );
    if (idoloMatch) {
       idolo.desc = idoloMatch.desc;
    }
  });
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`[ESPAÑA - INDIVIDUAL] Crónicas aplicadas perfectamente en: Mallorca`);
