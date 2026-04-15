const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // Available at root

const procDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar/champions_league_procesados';
const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';

async function processImages() {
    const folders = fs.readdirSync(procDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
        
    let count = 0;

    for (const teamFolder of folders) {
        const teamPath = path.join(procDir, teamFolder);
        const files = fs.readdirSync(teamPath);
        if (files.length > 0) {
            const file = files[0]; // The image file
            const srcPath = path.join(teamPath, file);
            const destPath = path.join(destBase, `${teamFolder}.png`);
            
            try {
                // If the user's previous code just renamed them to .png, or we convert:
                // We convert to ensure compatibility.
                await sharp(srcPath).png().toFile(destPath);
                
                // Cleanup any wrong extensions we left behind in the previous step
                const exts = ['.webp', '.jpg', '.svg'];
                exts.forEach(ext => {
                    if (ext !== '.png') {
                        const badPath = path.join(destBase, `${teamFolder}${ext}`);
                        if (fs.existsSync(badPath)) fs.unlinkSync(badPath);
                    }
                });
                
                console.log(`✅ Convertido a PNG: ${teamFolder}`);
                count++;
            } catch (err) {
                console.error(`❌ Error convirtiendo ${teamFolder}:`, err.message);
            }
        }
    }
    console.log(`¡Listo! ${count} escudos convertidos a .png.`);
}

processImages();
