const fs = require('fs');
const path = require('path');

const mappedPath = './app/src/config/mapped_teams.json';
const mapped = require(mappedPath);

const directories = ['argentina', 'espania', 'inglaterra', 'alemania', 'italia', 'francia', 'escocia'];
const rootClubs = path.join(__dirname, 'app', 'src', 'data', 'clubes');

// 1. Build a lookup index array to do fuzzy/exact matching
const allLocalClubs = [];

for (const dir of directories) {
    const dirPath = path.join(rootClubs, dir);
    if (!fs.existsSync(dirPath)) continue;
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        if (!file.endsWith('.json')) continue;
        const fileId = file.replace('.json', '');
        const data = JSON.parse(fs.readFileSync(path.join(dirPath, file), 'utf8'));
        
        allLocalClubs.push({
            fileId: fileId,
            folder: dir,
            name: data.name ? data.name : "",
            shortName: data.shortName ? data.shortName : ""
        });
    }
}

// 2. Map them!
let matched = 0;
for (const [apiId, obj] of Object.entries(mapped)) {
    // If it already has a file_id, skip
    if (obj.file_id) { matched++; continue; }

    const targetJsonName = (obj.json_name || "").toLowerCase();
    const targetApiName = (obj.api_name || "").toLowerCase();

    // Find best match in its folder
    let bestMatch = allLocalClubs.find(c => c.folder === obj.country_file && 
        (c.name.toLowerCase() === targetJsonName || 
         c.shortName.toLowerCase() === targetJsonName || 
         c.fileId === targetJsonName ||
         c.name.toLowerCase() === targetApiName ||
         c.shortName.toLowerCase() === targetApiName ||
         c.fileId === targetApiName ||
         c.fileId.replace(/-/g, ' ') === targetApiName ||
         targetApiName.includes(c.fileId.replace(/-/g, ' '))));

    // Si aún no la encuentra, buscamos coincidencia parcial
    if (!bestMatch) {
        bestMatch = allLocalClubs.find(c => c.folder === obj.country_file && 
            (c.name.toLowerCase().includes(targetApiName) || targetApiName.includes(c.name.toLowerCase())));
    }

    if (bestMatch) {
        obj.file_id = bestMatch.fileId;
        matched++;
    } else {
        console.log(`[!] Faltó linkear manual: API Name = "${obj.api_name}", JSON Name = "${obj.json_name}"`);
    }
}

fs.writeFileSync(mappedPath, JSON.stringify(mapped, null, 2));
console.log(`Matched ${matched} / ${Object.keys(mapped).length} equipos en mapped_teams.json`);
