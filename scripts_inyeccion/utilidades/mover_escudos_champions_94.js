const fs = require('fs');
const path = require('path');

const srcBase = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';
const procBase = path.join(srcBase, 'champions_league_procesados');

if (!fs.existsSync(procBase)) fs.mkdirSync(procBase);

const folders = fs.readdirSync(srcBase, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => !['arg_nuevos', 'eng_nuevos', 'esp_nuevos', 'champions_league_procesados', 'procesados_alemania', 'procesados_francia', 'procesados_italia', 'francia_historicos'].includes(dirent.name))
    .map(dirent => dirent.name);

let movedCount = 0;

folders.forEach(teamFolder => {
    const dirPath = path.join(srcBase, teamFolder);
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(png|jpe?g|webp|svg)$/i));
    
    if (files.length > 0) {
        const fileToMove = files[0];
        const ext = path.extname(fileToMove).toLowerCase();
        const srcPath = path.join(dirPath, fileToMove);
        const destPath = path.join(destBase, `${teamFolder}${ext}`);
        
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Movido: ${teamFolder} -> public/escudos/${teamFolder}${ext}`);
        movedCount++;
        
        // Move to procesados
        const procDir = path.join(procBase, teamFolder);
        if (!fs.existsSync(procDir)) fs.mkdirSync(procDir);
        fs.renameSync(srcPath, path.join(procDir, fileToMove));
        
        // Remove empty source dir
        try {
            fs.rmdirSync(dirPath);
        } catch(e) {}
    } else {
        console.log(`⚠️ Carpeta vacía o sin imágenes, omitida: ${teamFolder}`);
    }
});

console.log(`\n¡Listo! ${movedCount} escudos procesados.`);
