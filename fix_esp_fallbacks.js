const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'app', 'public');
const escudosDir = path.join(publicDir, 'escudos');
const histDir = path.join(publicDir, 'escudos_historicos');
const jsonDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

// Borramos los falsos la_liga_logo que copie
const bases = ['elche', 'real-oviedo', 'girona', 'real-sociedad', 'real-valladolid', 'celta-vigo'];
const ligaLogoSize = 716010; // size of la_liga_logo.png from previous dumps
bases.forEach(slug => {
    let fakePath = path.join(escudosDir, `${slug}.png`);
    if (fs.existsSync(fakePath)) {
        let stats = fs.statSync(fakePath);
        if (stats.size === ligaLogoSize) {
            fs.unlinkSync(fakePath);
            console.log(`Deleted fake la_liga_logo from ${slug}.png`);
        }
    }
});

// Ahora buscamos el ultimo escudo .webp o .png de escudos_historicos y lo ponemos como actual
const slugMap = {
    'celta-vigo': 'celta-vigo',
    'girona': 'girona',
    'real-sociedad': 'real-sociedad',
    'real-valladolid': 'valladolid',
    'elche': 'elche',
    'real-oviedo': 'real-oviedo'
};

Object.keys(slugMap).forEach(slug => {
    let histFolderSlug = slugMap[slug]; // La carpeta desempaquetada o el slug
    let jsonPath = path.join(jsonDir, `${slug}.json`);
    if (!fs.existsSync(jsonPath)) return;

    let clubData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    let evo = clubData.evolucion_escudos;
    if (!evo || evo.length === 0) return;

    // Buscar una imagen desempaquetada para este club si no habia.
    // En mi script desempaquetador (fix_folders.js) copie ej: "girona.webp" 
    // Wait, let's find ANY image holding its name in histDir
    let allHist = fs.readdirSync(histDir).filter(f => f.startsWith(histFolderSlug + '.'));
    if (allHist.length > 0) {
        let targetSrc = path.join(histDir, allHist[0]); // eg girona.webp
        let ext = path.extname(targetSrc);
        
        let targetDest = path.join(escudosDir, `${slug}${ext}`);
        fs.copyFileSync(targetSrc, targetDest);
        console.log(`Copied REAL shield: ${targetSrc} -> ${targetDest}`);
        
        // Fix JSON to point to the actual extension!
        evo[evo.length - 1].url = `/escudos/${slug}${ext}`;
        fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2), 'utf8');
        console.log(`Updated JSON slug to point to ${ext}`);
    } else {
        console.log(`No se encontro imagen historica plana para ${slug}, buscando subcarpetas`);
        let subfolder = path.join(histDir, histFolderSlug);
        if (fs.existsSync(subfolder) && fs.statSync(subfolder).isDirectory()) {
            let files = fs.readdirSync(subfolder).filter(f => !f.endsWith('.json'));
            if (files.length > 0) {
                 let targetSrc = path.join(subfolder, files[files.length-1]);
                 let ext = path.extname(targetSrc);
                 let targetDest = path.join(escudosDir, `${slug}${ext}`);
                 fs.copyFileSync(targetSrc, targetDest);
                 console.log(`Extracted REAL shield from subfolder: ${targetSrc} -> ${targetDest}`);
                 
                 evo[evo.length - 1].url = `/escudos/${slug}${ext}`;
                 fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2), 'utf8');
            }
        }
    }
});
