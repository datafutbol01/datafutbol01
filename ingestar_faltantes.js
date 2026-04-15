const fs = require('fs');
const path = require('path');

const definitions = [
    { name: 'Quilmes', slug: 'quilmes', filename: 'Escudo_del_Quilmes_AC.png' },
    { name: 'Chacarita Juniors', slug: 'chacarita-juniors', filename: 'Chacarita_juniors_escudo.png' },
    { name: 'Ferro Carril Oeste', slug: 'ferro-carril-oeste', filename: 'Ferro_carril_oeste_logo.png' },
    { name: 'Arsenal', slug: 'arsenal', filename: 'iso-star.png' },
    { name: 'Colón', slug: 'colon', filename: 'Escudo_Colon_Con_Estrella.webp' },
    { name: 'Patronato', slug: 'patronato', filename: 'CAPATRON-1-1.png' },
    { name: 'Atlanta', slug: 'atlanta', filename: 'Atlanta_escudo_hist.png' },
    { name: 'Sportivo Dock Sud', slug: 'sportivo-dock-sud', filename: 'Sportivo_dock_sud.png' },
    { name: 'Sportivo Barracas', slug: 'sportivo-barracas', filename: 'Sportivo_barracas_escudo.png' },
    { name: 'Alumni', slug: 'alumni', filename: 'Alumni_ba_athletic_club_escudo.png' },
    { name: 'Porteño', slug: 'porteno', filename: 'Porteno_de_buenos.jpg' }
];

definitions.forEach(def => {
    const srcPath = path.join('app', def.filename);
    const destExt = path.extname(def.filename);
    const pubUrl = '/escudos/' + def.slug + destExt;
    const destPath = path.join('app', 'public', 'escudos', def.slug + destExt);

    if(fs.existsSync(srcPath)) {
        fs.renameSync(srcPath, destPath);
        console.log('Moved', def.slug);
    }

    const jsonPath = path.join('app', 'src', 'data', 'clubes', 'argentina', def.slug + '.json');
    if(!fs.existsSync(jsonPath)) {
        const clubData = {
            id: def.slug,
            datos: {
                nombre_oficial: def.name,
                nombre_corto: def.name,
                fundacion: 'Desconocida',
                estadio: { nombre: '' },
                escudo_actual: pubUrl
            },
            evolucion_escudos: [
                { ano: 'Actualidad', url: pubUrl, desc: 'Escudo de ' + def.name }
            ]
        };
        fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2));
    }
});

let code = fs.readFileSync('app/src/pages/League.jsx', 'utf8');

const replaceAliases = `"lomas athletic club": "lomas-athletic",
                                        "lomas academy": "lomas-academy",
                                        "quilmes": "quilmes",
                                        "chacarita": "chacarita-juniors",
                                        "ferro": "ferro-carril-oeste",
                                        "arsenal": "arsenal",
                                        "colon": "colon",
                                        "patronato": "patronato",
                                        "atlanta": "atlanta",
                                        "sportivo dock sud": "sportivo-dock-sud",
                                        "sportivo barracas": "sportivo-barracas",
                                        "alumni": "alumni",
                                        "english high school ac (alumni)": "alumni",
                                        "alumni athletic club": "alumni",
                                        "porteño": "porteno",`;

code = code.replace('"lomas athletic club": "lomas-athletic",\n                                        "lomas academy": "lomas-academy",', replaceAliases);

fs.writeFileSync('app/src/pages/League.jsx', code);
console.log('Done mapping aliases and moving files!');
