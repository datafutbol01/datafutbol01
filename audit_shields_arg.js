const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'app', 'src', 'data');
const argClubesDir = path.join(srcDir, 'clubes', 'argentina');
const ligasDir = path.join(srcDir, 'ligas');
const publicDir = path.join(__dirname, 'app', 'public');

const escudosDir = path.join(publicDir, 'escudos');
const escudosHistDir = path.join(publicDir, 'escudos_historicos');
const fotosRetroDir = path.join(publicDir, 'fotos_retro');

const toSlug = (name) => {
    return name.toLowerCase()
               .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
               .replace(/[^a-z0-9]+/g, '-')
               .replace(/(^-|-$)/g, '');
};

let baseClubs = new Set();
let tourneyClubs = new Set();
let h2hClubs = new Set();

// 1. Base Clubs
fs.readdirSync(argClubesDir).filter(f => f.endsWith('.json')).forEach(f => {
    try {
        const data = JSON.parse(fs.readFileSync(path.join(argClubesDir, f), 'utf8'));
        if (data.id) baseClubs.add(data.id);
    } catch(e) {}
});

// 2. Temporadas (SOLO CAMPEONES)
try {
    const tempPath = path.join(ligasDir, 'argentina_temporadas.json');
    const data = JSON.parse(fs.readFileSync(tempPath, 'utf8'));
    data.forEach(t => {
        if (t.campeon) tourneyClubs.add(toSlug(t.campeon));
    });
} catch(e) {}

// 3. Copas (SOLO CAMPEONES)
try {
    const copasPath = path.join(ligasDir, 'argentina_copas.json');
    if (fs.existsSync(copasPath)) {
        const data = JSON.parse(fs.readFileSync(copasPath, 'utf8'));
        data.forEach(c => {
            if (c.campeon) tourneyClubs.add(toSlug(c.campeon));
        });
    }
} catch(e) {}

// 4. H2H Rivals
try {
    const h2hPath = path.join(ligasDir, 'argentina_enfrentamientos.json');
    const data = JSON.parse(fs.readFileSync(h2hPath, 'utf8'));
    Object.keys(data).forEach(club1 => {
        data[club1].forEach(opp => {
            if (opp.rival) h2hClubs.add(toSlug(opp.rival));
        });
    });
} catch(e) {}

let allRequired = new Set([...baseClubs, ...tourneyClubs, ...h2hClubs]);

const getBasenames = (dirPath) => {
    if (!fs.existsSync(dirPath)) return new Set();
    return new Set(fs.readdirSync(dirPath).map(f => path.basename(f, path.extname(f)).toLowerCase()));
};

const escudos = getBasenames(escudosDir);
const historicos = getBasenames(escudosHistDir);
const fotos = getBasenames(fotosRetroDir);

let missingBase = [];
let missingOthers = [];

baseClubs.forEach(slug => {
    if (!escudos.has(slug)) missingBase.push(slug);
});

allRequired.forEach(slug => {
    if (baseClubs.has(slug)) return; 

    let found = false;
    if (escudos.has(slug) || historicos.has(slug) || fotos.has(slug)) found = true;
    else {
        for (let name of escudos) if (name.startsWith(slug + '_') || name.startsWith(slug + '-')) found = true;
        for (let name of historicos) if (name.startsWith(slug + '_') || name.startsWith(slug + '-')) found = true;
        for (let name of fotos) if (name.startsWith(slug + '_') || name.startsWith(slug + '-')) found = true;
    }

    if (!found) missingOthers.push(slug);
});

let output = `=== REPORTE REAL PUNTO 2 (ARGENTINA) ===\n`;
output += `Faltan escudos actuales de Base (en /escudos/): ${missingBase.length}\n`;
if (missingBase.length > 0) output += `> FALTAN: ${missingBase.join(', ')}\n`;

output += `Faltan activos visuales de Externos: ${missingOthers.length}\n`;
if (missingOthers.length > 0) output += `> FALTAN: ${missingOthers.join(', ')}\n`;

fs.writeFileSync('reporte_punto2_final.txt', output, 'utf8');
