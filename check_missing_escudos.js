const fs = require('fs');
const path = require('path');

const fileP = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'alemania_temporadas.json');
const temporadas = JSON.parse(fs.readFileSync(fileP, 'utf8'));

const normalizeName = (name) => {
    return name.toLowerCase()
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ß/g, 'ss')
        .replace(/ñ/g, 'n')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
};

const escudosDir = path.join(__dirname, 'app', 'public', 'escudos');
const missingUnique = new Set();
const foundUnique = new Set();

temporadas.forEach(t => {
    const slug = normalizeName(t.campeon);
    let found = false;
    // Check if any file starts with slug + "."
    if (fs.existsSync(escudosDir)) {
        const files = fs.readdirSync(escudosDir);
        for (let f of files) {
            if (f.startsWith(slug + '.')) {
                found = true;
                break;
            }
        }
    }
    
    if (!found) {
        missingUnique.add(t.campeon);
    } else {
        foundUnique.add(t.campeon);
    }
});

console.log("=== CLUBES CON ESCUDO FALTANTE ===");
Array.from(missingUnique).sort().forEach(c => console.log("- " + c));
console.log("\n=== CLUBES YA LISTOS ===");
Array.from(foundUnique).sort().forEach(c => console.log("- " + c));
