const fs = require('fs');
const path = require('path');

const aliases = {
  // ESP
  "real madrid": "real-madrid", "barcelona": "barcelona", "fc barcelona": "barcelona", 
  "atletico de madrid": "atletico-madrid", "atletico madrid": "atletico-madrid", "atlético de madrid": "atletico-madrid",
  "athletic club": "athletic-club", "athletic bilbao": "athletic-club", 
  "real sociedad": "real-sociedad", "real betis": "real-betis", "betis": "real-betis", 
  "villarreal": "villarreal", "villarreal cf": "villarreal", "valencia": "valencia", "valencia cf": "valencia", 
  "sevilla": "sevilla", "sevilla fc": "sevilla", "osasuna": "osasuna", "ca osasuna": "osasuna", 
  "celta de vigo": "celta-vigo", "celta vigo": "celta-vigo", "rayo vallecano": "rayo-vallecano", 
  "mallorca": "mallorca", "rcd mallorca": "mallorca", "alaves": "alaves", "deportivo alaves": "alaves", 
  "las palmas": "las-palmas", "ud las palmas": "las-palmas", "getafe": "getafe", "getafe cf": "getafe", 
  "leganes": "leganes", "cd leganes": "leganes", "real valladolid": "real-valladolid", "valladolid": "real-valladolid", 
  "espanyol": "espanyol", "rcd espanyol": "espanyol", "girona": "girona", "girona fc": "girona",
  
  // ENG aliases that might be duplicated
  "manchester utd": "manchester-united", "manchester utd.": "manchester-united", "manchester united": "manchester-united"
};

const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const folders = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const slugToMainFolder = {};

folders.forEach(folderName => {
    const normalized = folderName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const slug = aliases[normalized] || normalized.replace(/[^a-z0-9]/g, '-');
    
    if (!slugToMainFolder[slug]) {
        slugToMainFolder[slug] = [];
    }
    slugToMainFolder[slug].push(folderName);
});

Object.keys(slugToMainFolder).forEach(slug => {
    const folderGroup = slugToMainFolder[slug];
    if (folderGroup.length > 1) {
        // Find the "best" folder to keep. (shortest name or whatever)
        // Let's just pick the first one as primary, or the one that already has files, or just the shortest name.
        folderGroup.sort((a, b) => a.length - b.length);
        const primaryFolder = folderGroup[0];
        const primaryPath = path.join(baseDir, primaryFolder);
        
        console.log(`Merging into ${primaryFolder}:`, folderGroup.slice(1));
        
        for (let i = 1; i < folderGroup.length; i++) {
            const dupFolder = folderGroup[i];
            const dupPath = path.join(baseDir, dupFolder);
            const files = fs.readdirSync(dupPath);
            
            files.forEach(file => {
                const srcFile = path.join(dupPath, file);
                const destFile = path.join(primaryPath, file);
                if (!fs.existsSync(destFile)) {
                    fs.renameSync(srcFile, destFile);
                } else {
                    // Deal with collision
                    fs.renameSync(srcFile, path.join(primaryPath, 'dup_' + file));
                }
            });
            
            // Remove the duplicate folder
            try {
                fs.rmdirSync(dupPath);
                console.log(`  Deleted ${dupFolder}`);
            } catch (e) {
                console.error(`  Could not delete ${dupFolder}`, e.message);
            }
        }
    }
});

console.log("Cleanup complete!");
