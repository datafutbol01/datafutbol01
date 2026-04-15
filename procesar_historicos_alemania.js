const fs = require('fs');
const path = require('path');

const clubs = [
    'kaiserslautern', 'nurnberg', 'eintracht-braunschweig', '1860-munich', 'schalke-04', 
    'rapid-viena', 'dresdner-sc', 'first-vienna', 'rot-weiss-essen', 'karlsruher-sc', 
    'schwarz-weiss-essen', 'kickers-offenbach', 'fortuna-dusseldorf', 'bayer-uerdingen', 
    'hannover-96', 'hertha-bsc', 'vfb-leipzig'
];

const baseDir = path.join(__dirname, 'app', 'escudos_a_descargar');
const destDir = path.join(baseDir, 'procesados_alemania');
const pubActualDir = path.join(__dirname, 'app', 'public', 'escudos');
const pubHistDir = path.join(__dirname, 'app', 'public', 'escudos_historicos');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);

const extMap = {};

for (const clubId of clubs) {
    const srcDir = path.join(baseDir, clubId);
    if (!fs.existsSync(srcDir) || !fs.statSync(srcDir).isDirectory()) continue;

    const filesRaw = fs.readdirSync(srcDir).filter(f => f.match(/\.(png|jpe?g|webp|svg)$/i));
    if (filesRaw.length === 0) {
        console.log(`⚠️ ${clubId}: Vacío, saltando...`);
        try { fs.renameSync(srcDir, path.join(destDir, clubId)); } catch(e) { console.log(`Could not move ${clubId}`); }
        continue;
    }

    const fileStats = filesRaw.map(f => {
        const stats = fs.statSync(path.join(srcDir, f));
        return { file: f, time: stats.mtimeMs };
    });

    fileStats.sort((a, b) => b.time - a.time);

    const actualFileObj = fileStats.shift();
    const historicosFiles = fileStats;

    // Process actual
    const actF = actualFileObj.file;
    const actExt = actF.match(/\.([a-z0-9]+)$/i) ? actF.match(/\.([a-z0-9]+)$/i)[1].toLowerCase() : 'png';
    const actTargetPath = path.join(pubActualDir, `${clubId}.${actExt}`);
    fs.copyFileSync(path.join(srcDir, actF), actTargetPath);
    
    if (actExt !== 'png') {
        extMap[clubId] = actExt;
    }

    // Process historicos
    if (historicosFiles.length > 0) {
        const histClubDir = path.join(pubHistDir, clubId);
        if (fs.existsSync(histClubDir)) {
            fs.rmSync(histClubDir, { recursive: true, force: true });
        }
        fs.mkdirSync(histClubDir, { recursive: true });

        for (const hObj of historicosFiles) {
            const f = hObj.file;
            const ext = f.match(/\.([a-z0-9]+)$/i) ? f.match(/\.([a-z0-9]+)$/i)[1].toLowerCase() : 'png';
            
            let safeName = decodeURIComponent(f).replace(/[^a-zA-Z0-9-]/g, '_');
            const targetPath = path.join(histClubDir, `${safeName}.${ext}`);
            fs.copyFileSync(path.join(srcDir, f), targetPath);
        }
    }

    // Move to procesados
    try {
        fs.renameSync(srcDir, path.join(destDir, clubId));
    } catch(e) {
        console.log(`Error moving directory ${clubId}. Manually move it.`);
    }
    console.log(`✔️ ${clubId}: Actual (${actF}) + ${historicosFiles.length} historicos -> Listo.`);
}

console.log('--- MAPA DE EXTENSIONES PARA LEAGUE.JSX ---');
console.log(JSON.stringify(extMap));
