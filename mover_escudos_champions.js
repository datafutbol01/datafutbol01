const fs = require('fs');
const path = require('path');

const srcBase = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';

const folders = fs.readdirSync(srcBase, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => !['arg_nuevos', 'eng_nuevos', 'esp_nuevos', 'champions_league_procesados', 'procesados_alemania', 'procesados_francia', 'procesados_italia', 'francia_historicos'].includes(dirent.name))
    .map(dirent => dirent.name);

let movedCount = 0;

folders.forEach(teamFolder => {
    const dirPath = path.join(srcBase, teamFolder);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.svg'));
    
    if (files.length > 0) {
        const fileToMove = files[0]; // grab the first image
        const srcPath = path.join(dirPath, fileToMove);
        const destPath = path.join(destBase, `${teamFolder}.png`); // standardize output
        
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Movido: ${teamFolder} -> public/escudos/${teamFolder}.png`);
        movedCount++;
    }
});

console.log(`\n¡Listo! ${movedCount} escudos fueron copiados a la carpeta pública y están listos para brillar.`);
