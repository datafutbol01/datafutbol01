const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'app', 'public');
const fotosDir = path.join(publicDir, 'fotos_retro');

const missing = [
    'st-andrew-s-old-caledonians',
    'san-isidro',
    'estudiantes-de-buenos-aires',
    'tiro-federal-de-rosario',
    'tiro-federal-rosario',
    'river-plate-liga-cultural-sgo-del-estero',
    'liga-cordobesa',
    'san-martin-tucuman' // Lo ponemos aca porque fallo la api de wikipedia y no es de primera division ahora  mismo
];

let baseRetro = path.join(publicDir, 'futbol_1910.jpg');

missing.forEach(slug => {
    let dest = path.join(fotosDir, `${slug}.jpg`);
    if (fs.existsSync(baseRetro) && !fs.existsSync(dest)) {
        fs.copyFileSync(baseRetro, dest);
        console.log(`Assigned generic retro photo to: ${slug}`);
    }
});

// Create barracas central missing base shield just to not break UI using a placeholder
let barracasDest = path.join(publicDir, 'escudos', 'barracas-central.png');
if (!fs.existsSync(barracasDest)) {
    fs.copyFileSync(baseRetro, barracasDest);
    console.log('Assigned generic photo to barracas-central.png to prevent UI break');
}
