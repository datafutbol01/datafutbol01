const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'app', 'escudos_a_descargar');
const destDir = path.join(srcDir, 'champions_league_procesados');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const years = ['1994.json', '1995.json'];
let movedCount = 0;
let emptyCount = 0;

for (const yearFile of years) {
    const dataPath = path.join(__dirname, 'app', 'src', 'data', 'copas', 'champions', yearFile);
    if (!fs.existsSync(dataPath)) continue;
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const participants = data.participants || [];

    for (const team of participants) {
        const folderPath = path.join(srcDir, team.id);
        
        // Check if the team folder exists in the source directory
        if (fs.existsSync(folderPath)) {
            const files = fs.readdirSync(folderPath);
            
            // If the folder has files (not empty), move it to 'procesados'
            if (files.length > 0) {
                const destFolderPath = path.join(destDir, team.id);
                // Move the whole folder
                try {
                    fs.renameSync(folderPath, destFolderPath);
                    movedCount++;
                } catch (e) {
                    console.error(`Error al mover ${team.id}:`, e);
                }
            } else {
                // It's empty, leave it in 'escudos_a_descargar'
                emptyCount++;
            }
        }
    }
}

console.log(`\n¡Limpieza Completa para 1994 y 1995!`);
console.log(`Carpetas COMPLEJAS movidas a champions_league_procesados: ${movedCount}`);
console.log(`Carpetas VACÍAS que quedaron a la vista: ${emptyCount}`);
