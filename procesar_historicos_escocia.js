const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const pubEscudos = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';

const omitir = ['renton', 'st-bernard-s', 'champions_league_procesados', 'escocia_procesados', 'francia_historicos', 'procesados_alemania', 'procesados_francia', 'procesados_italia'];

const dirs = fs.readdirSync(baseDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !omitir.includes(dirent.name))
        .map(dirent => dirent.name);

dirs.forEach(club => {
    const clubDir = path.join(baseDir, club);
    const files = fs.readdirSync(clubDir);
    
    if (files.length > 0) {
        // Tomamos el primero o el que dice actual
        let fileToCopy = files[0];
        files.forEach(f => {
            if (f.toLowerCase().includes('actual') || f.toLowerCase() === `${club}${path.extname(f)}`) {
                fileToCopy = f;
            }
        });

        const ext = path.extname(fileToCopy);
        const srcPath = path.join(clubDir, fileToCopy);
        const destPath = path.join(pubEscudos, `${club}.png`); // Forzamos o usamos ext, asumiremos .png para UI

        console.log(`Copiando escudo de ${club}: ${fileToCopy} -> ${club}.png`);
        fs.copyFileSync(srcPath, destPath);
    }
});

console.log("Proceso terminado.");
