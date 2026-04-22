const fs = require('fs');
const path = require('path');

const publicHistoricos = path.join('c:/Users/gonza/futbolhistoria/clubes', 'app', 'public', 'escudos_historicos');

let datelessCount = 0;
let datelessFiles = [];

function scanDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        
        if (entry.isDirectory()) {
            scanDirectory(fullPath);
        } else {
            // Check if file has an extension we care about
            if (['.png', '.jpg', '.webp', '.svg', '.jpeg'].includes(path.extname(entry.name).toLowerCase())) {
                const nameLower = entry.name.toLowerCase();
                // Check if it has a 4 digit year
                const hasYear = /(18|19|20)\d{2}/.test(nameLower);
                const hasActual = nameLower.includes('actual') || nameLower.includes('present');
                
                // If the file is literally just the slug like "boca-juniors.png", it might be intended as the base shield, but let's count it if the user asks for files without dates.
                // Wait, if it's the exact name of the parent directory (e.g. nancy.png inside nancy/), we maybe shouldn't count it? Let's just strictly check for dates.
                if (!hasYear && !hasActual) {
                    datelessCount++;
                    const relPath = path.relative(publicHistoricos, fullPath);
                    datelessFiles.push(relPath);
                }
            }
        }
    }
}

if (fs.existsSync(publicHistoricos)) {
    scanDirectory(publicHistoricos);
}

fs.writeFileSync('dateless_report.txt', `Total dateless escudos: ${datelessCount}\n\nList:\n${datelessFiles.join('\n')}`, 'utf8');
console.log(`Found ${datelessCount} dateless shields. Wrote to dateless_report.txt`);
