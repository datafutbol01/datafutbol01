const fs = require('fs');
const path = require('path');

const definitions = [
  { file: 'Escudo ferrocarril oeste.png', slug: 'ferro-carril-oeste', name: 'Ferro Carril Oeste' },
  { file: 'Escudo_del_Club_Atlético_Chacarita_Juniors.svg.png', slug: 'chacarita-juniors', name: 'Chacarita Juniors' },
  { file: 'Escudo_de_Quilmes_Atlético_Club.svg.png', slug: 'quilmes', name: 'Quilmes' },
  { file: 'logoarsenal de sarandi.png', slug: 'arsenal', name: 'Arsenal' },
  { file: 'club porteño.jpg', slug: 'porteno', name: 'Porteño' },
  { file: 'club_sportivo_barracas_de_barracas_ciudad_autonoma_de_buenos.jpg', slug: 'sportivo-barracas', name: 'Sportivo Barracas' },
  { file: 'Estudiantil_porteno_1931.jpg', slug: 'estudiantil-porteno', name: 'Estudiantil Porteño' },
  { file: 'St.andrews_1891.jpg', slug: 'st-andrews-old-caledonians', name: 'St. Andrew\'s' },
  { file: '37e9aa44ac94567b18462edf06cb9c84.jpg', slug: 'alumni', name: 'Alumni' },
  { file: 'images.jpg', slug: 'belgrano-athletic', name: 'Belgrano Athletic' }
];

definitions.forEach(def => {
    const srcPath = path.join('app', def.file);
    if (!fs.existsSync(srcPath)) {
        console.log('Not found:', srcPath);
        return;
    }

    const destExt = path.extname(def.file);
    const pubUrl = '/escudos/' + def.slug + destExt;
    const destPath = path.join('app', 'public', 'escudos', def.slug + destExt);

    fs.renameSync(srcPath, destPath);
    console.log('Moved', def.slug);

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

const additionalAliases = `"estudiantil porteño": "estudiantil-porteno",
                                        "st. andrew's / old caledonians": "st-andrews-old-caledonians",
                                        "st. andrews / old caledonians": "st-andrews-old-caledonians",
                                        "belgrano athletic club": "belgrano-athletic",
                                        "belgrano athletic": "belgrano-athletic",
                                        "porteño": "porteno",`;

if (!code.includes('"estudiantil porteño"')) {
    code = code.replace('"porteño": "porteno",', additionalAliases);
    fs.writeFileSync('app/src/pages/League.jsx', code);
    console.log('Aliases mapped in League.jsx');
}

console.log('Finished correctly.');
