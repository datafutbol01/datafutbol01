const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const targetDir = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';
const archiveDir = path.join(srcDir, 'procesados_italia');

const map = {
    'casale': 'Casale.webp',
    'novese': 'US_Novese_Logo.svg.png',
    'pro-vercelli': 'Vercelli.webp',
    'sampdoria': 'Sampdoria.webp',
    'vado': '11483.png',
    'venezia': 'Venezia_FC_Logo_29.webp',
    'vicenza': 'Vicenza_Calcio_logo.svg'
};

if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });

for (const [clubId, file] of Object.entries(map)) {
    const p = path.join(srcDir, clubId, file);
    if (fs.existsSync(p)) {
        // extract extension
        const extMatch = file.match(/\.([a-z]+)$/i);
        const ext = extMatch ? extMatch[1].toLowerCase() : 'png';
        
        fs.copyFileSync(p, path.join(targetDir, `${clubId}.${ext}`));
        
        // Move directory to archive
        const dir = path.join(srcDir, clubId);
        const arch = path.join(archiveDir, clubId);
        if (fs.existsSync(arch)) fs.rmSync(arch, { recursive: true, force: true });
        fs.renameSync(dir, arch);
        console.log(`Procesado ${clubId}`);
    }
}
