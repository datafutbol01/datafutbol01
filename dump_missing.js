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

const extractSlugsFromTable = (table) => {
    let slugs = new Set();
    if (Array.isArray(table)) {
        table.forEach(row => {
            if (row.equipo) slugs.add(toSlug(row.equipo));
        });
    }
    return slugs;
};

const extractSlugsFromMatch = (match) => {
    let slugs = new Set();
    if (match.l) slugs.add(toSlug(match.l));
    if (match.v) slugs.add(toSlug(match.v));
    return slugs;
};

let baseClubs = new Set();
let tourneyClubs = new Set();
let h2hClubs = new Set();

// Base
fs.readdirSync(argClubesDir).filter(f => f.endsWith('.json')).forEach(f => {
    try {
        const data = JSON.parse(fs.readFileSync(path.join(argClubesDir, f), 'utf8'));
        if (data.id) baseClubs.add(data.id);
    } catch(e) {}
});

// Temporadas
try {
    const tempPath = path.join(ligasDir, 'argentina_temporadas.json');
    const data = JSON.parse(fs.readFileSync(tempPath, 'utf8'));
    data.forEach(t => {
        if (t.campeon) tourneyClubs.add(toSlug(t.campeon));
        if (t.subcampeon) tourneyClubs.add(toSlug(t.subcampeon));
        if (t.tabla_posiciones) {
            extractSlugsFromTable(t.tabla_posiciones).forEach(s => tourneyClubs.add(s));
        }
    });
} catch(e) {}

let allRequired = new Set([...baseClubs, ...tourneyClubs]);

const getBasenames = (dirPath) => {
    if (!fs.existsSync(dirPath)) return new Set();
    return new Set(fs.readdirSync(dirPath).map(f => path.basename(f, path.extname(f)).toLowerCase()));
};

const escudos = getBasenames(escudosDir);
const historicos = getBasenames(escudosHistDir);
const fotos = getBasenames(fotosRetroDir);

let missingOthers = [];

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

fs.writeFileSync('missing_arg_list.txt', missingOthers.join('\n'), 'utf8');
