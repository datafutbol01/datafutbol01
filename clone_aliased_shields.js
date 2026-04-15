const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'app', 'public');
const escudosDir = path.join(publicDir, 'escudos');
const histDir = path.join(publicDir, 'escudos_historicos');
const fotosDir = path.join(publicDir, 'fotos_retro');

const mapping = {
    'newell-s-old-boys': 'newells.png',
    'san-lorenzo-de-almagro': 'san-lorenzo.png',
    'estudiantes-de-la-plata': 'estudiantes-lp.png',
    'gimnasia-y-esgrima-la-plata': 'gimnasia-lp.png',
    'gimnasia-y-esgrima-lp': 'gimnasia-lp.png',
    'argentinos-juniors': 'argentinos-jrs.png',
    'talleres-de-cordoba': 'talleres-cba.png',
    'talleres-c': 'talleres-cba.png',
    'central-cordoba-sde': 'central-cordoba.png',
    'alumni-athletic-club': 'alumni.jpg',
    'lomas-athletic-club': 'lomas-athletic.jpg',
    'barracas-athletic-club': 'barracas-athletic.jpg',
    'belgrano-athletic-club': 'belgrano-athletic.jpg',
    'san-martin-tucuman': 'san-martin-tucuman.png' // Si existe algo similar
};

const findSrc = (target) => {
    let s1 = path.join(escudosDir, target);
    if (fs.existsSync(s1)) return s1;
    let s2 = path.join(histDir, target);
    if (fs.existsSync(s2)) return s2;
    let s3 = path.join(fotosDir, target);
    if (fs.existsSync(s3)) return s3;
    return null;
};

let fixes = 0;
for (const [missingSlug, targetFile] of Object.entries(mapping)) {
    let srcPath = findSrc(targetFile);
    if (srcPath) {
        let ext = path.extname(targetFile);
        
        // Write it into escudos_historicos to not mix up current base shields folder too much,
        // UNLESS it's a current team, in which case put it in escudos
        let isBaseMap = targetFile.endsWith('.png') && targetFile !== 'alumni.png'; 
        let destFolder = isBaseMap ? escudosDir : histDir;
        let destPath = path.join(destFolder, `${missingSlug}${ext}`);
        
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Cloned: ${targetFile} -> ${missingSlug}${ext}`);
            fixes++;
        }
    }
}

console.log(`\nAliases creados en disco: ${fixes}`);
