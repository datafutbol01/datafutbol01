const fs = require('fs');
const path = require('path');

const stagingDir = path.join('c:/Users/gonza/futbolhistoria/clubes', 'app', 'escudos_a_descargar', 'francia_historicos');
const targetHistoricos = path.join('c:/Users/gonza/futbolhistoria/clubes', 'app', 'public', 'escudos_historicos');
const targetEscudos = path.join('c:/Users/gonza/futbolhistoria/clubes', 'app', 'public', 'escudos');

function toSlug(name) {
    let n = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    return n.replace(/\s+/g, '-');
}

const aliases = {
    'ef-nancy-lorraine': 'nancy',
    'nancy-lorraine': 'nancy',
    'club-francais': 'stade-francais'
};

function copyWithOverwrites() {
    if (!fs.existsSync(stagingDir)) {
        console.log("No staging dir found.");
        return;
    }

    const folders = fs.readdirSync(stagingDir).filter(f => fs.statSync(path.join(stagingDir, f)).isDirectory());
    
    // Group files by final alias
    const unifiedMap = {};

    for (const f of folders) {
        let slug = toSlug(f);
        if (aliases[slug]) slug = aliases[slug];

        if (!unifiedMap[slug]) unifiedMap[slug] = [];
        
        const sourcePath = path.join(stagingDir, f);
        const files = fs.readdirSync(sourcePath).filter(file => !file.startsWith('.'));
        
        for (const file of files) {
            unifiedMap[slug].push({
                origFolder: sourcePath,
                fileName: file
            });
        }
    }

    Object.keys(unifiedMap).forEach(slug => {
        const files = unifiedMap[slug];
        if (files.length === 0) return;

        // Create historic sequence folder
        const historicFolder = path.join(targetHistoricos, slug);
        if (!fs.existsSync(historicFolder)) fs.mkdirSync(historicFolder, { recursive: true });

        let bestFileForMain = files[0];
        let maxYear = 0;

        files.forEach((fileObj, idx) => {
            const oldLocation = path.join(fileObj.origFolder, fileObj.fileName);
            // clean name
            let decodedName = decodeURIComponent(fileObj.fileName);
            const ext = path.extname(decodedName);
            const base = path.basename(decodedName, ext).replace(/[^\w-]/g, '_');
            const cleanDestName = `${base}${ext}`;

            const newLocation = path.join(historicFolder, cleanDestName);
            fs.copyFileSync(oldLocation, newLocation);

            // Determine best file for main shield (public/escudos/slug.png)
            if (decodedName.toLowerCase().includes('actual')) {
                bestFileForMain = fileObj;
                maxYear = 9999;
            } else {
                const yearMatch = decodedName.match(/\b(18|19|20)\d{2}\b/g);
                if (yearMatch && maxYear < 9999) {
                    const year = parseInt(yearMatch[yearMatch.length - 1]);
                    if (year > maxYear) {
                        maxYear = year;
                        bestFileForMain = fileObj;
                    }
                } else if (idx === 0 && maxYear === 0) {
                    bestFileForMain = fileObj;
                }
            }
        });

        // Copy best to public/escudos/slug.png
        if (bestFileForMain) {
            const ext = path.extname(decodeURIComponent(bestFileForMain.fileName));
            // Ensure .png or webp depending on frontend. Usually the frontend has <img src={\`/escudos/\${id}.png\`}/> 
            // So we MUST rename extensions to .png if the frontend rigidly uses .png, 
            // but `replace_file_content` logic earlier showed he has `.png` hardcoded.
            // Wait, he uses `onerror` to switch to `.webp` sometimes, but let's just write to the original extension and also `.png`
            const mainPathOriginalExt = path.join(targetEscudos, `${slug}${ext}`);
            const mainPathPng = path.join(targetEscudos, `${slug}.png`);
            
            const bestSourcePath = path.join(bestFileForMain.origFolder, bestFileForMain.fileName);
            fs.copyFileSync(bestSourcePath, mainPathOriginalExt);
            fs.copyFileSync(bestSourcePath, mainPathPng); // duplicate as png to fulfill strict src='/escudos/id.png'
            
            // If the alias applies locally, we must ALSO copy to the aliased 'escudos/club-francais.png'
            // so that if Cup matches have 'club-francais' it still renders perfectly!
            for (const [orig, mapped] of Object.entries(aliases)) {
                if (mapped === slug) {
                    fs.copyFileSync(bestSourcePath, path.join(targetEscudos, `${orig}.png`));
                }
            }
        }

        console.log(`Ingested ${files.length} images for -> ${slug}`);
    });
    
    console.log("Francia historic ingest complete.");
}

copyWithOverwrites();
