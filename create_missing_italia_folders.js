const fs = require('fs');
const path = require('path');

const ligasDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/italia_temporadas.json';
const jsonClubesDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';
const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';

const temporadas = JSON.parse(fs.readFileSync(ligasDir, 'utf8'));

const extractNames = new Set();
temporadas.forEach(t => {
    if (t.campeon) extractNames.add(t.campeon.trim());
    if (t.subcampeon) extractNames.add(t.subcampeon.trim());
    if (t.detalles) {
        if (t.detalles.campeon) extractNames.add(t.detalles.campeon.trim());
        if (t.detalles.subcampeon) extractNames.add(t.detalles.subcampeon.trim());
    }
});

let carpetasCreadas = [];

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')     
        .replace(/[^\w\-]+/g, '') 
        .replace(/\-\-+/g, '-')   
        .replace(/^-+/, '')       
        .replace(/-+$/, '');      
}

// Estos son mapeos que el UI usa para campeones
const manualSlugMap = {
    "Hellas Verona": "hellas-verona",
    "Sampdoria": "sampdoria",
    "Pro Vercelli": "pro-vercelli",
    "Casale": "casale",
    "Novese": "novese",
    "Vicenza": "vicenza",
    "Venezia": "venezia",
    "Vado": "vado"
};

extractNames.forEach(nombre => {
    let rawSlug = manualSlugMap[nombre] || slugify(nombre);
    
    // Si no está registrado como club principal ni hay JSON
    const jsonPath = path.join(jsonClubesDir, `${rawSlug}.json`);
    
    // Exclusion de nombres artificiales 'desierto', etc.
    if (!fs.existsSync(jsonPath) && rawSlug !== 'desierto' && rawSlug !== 'anulado' && rawSlug !== 'vacante') {
        const folderTarget = path.join(destBase, rawSlug);
        if (!fs.existsSync(folderTarget)) {
            fs.mkdirSync(folderTarget, { recursive: true });
            carpetasCreadas.push(rawSlug);
        }
    }
});

console.log("Mapeo de clubes históricos faltantes completado.");
console.log("Carpetas creadas para recolección de escudos:", carpetasCreadas);
