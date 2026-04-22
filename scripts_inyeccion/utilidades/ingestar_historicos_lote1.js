const fs = require('fs');
const path = require('path');

const stagingDir = path.join(__dirname, 'app', 'escudos_a_descargar');
const publicHistoricos = path.join(__dirname, 'app', 'public', 'escudos_historicos');
const publicEscudos = path.join(__dirname, 'app', 'public', 'escudos');

const clubesEspania = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
const clubesInglaterra = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

// Mapping folder -> slug
function toSlug(name) {
    let n = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    if(n === 'athletic club') return 'athletic-club';
    if(n === 'atletico madrid') return 'atletico-madrid';
    if(n === 'real sociedad') return 'real-sociedad';
    if(n === 'celta vigo') return 'celta-vigo';
    if(n === 'rayo vallecano') return 'rayo-vallecano';
    if(n === 'real madrid') return 'real-madrid';
    if(n === 'deportivo la coruña') return 'deportivo-la-coruna';
    if(n === 'las palmas') return 'las-palmas';
    if(n === 'real unión') return 'real-union';
    if(n === 'racing de irún') return 'racing-de-irun';
    return n.replace(/\./g, '').replace(/\s+/g, '-');
}

function extractYear(filename) {
    const match = filename.match(/\b(18|19|20)\d{2}\b/);
    return match ? match[0] : 'Histórico';
}

function processFolders() {
    const folders = fs.readdirSync(stagingDir).filter(f => fs.statSync(path.join(stagingDir, f)).isDirectory());
    for(const f of folders) {
        if(f.toLowerCase() > 'bradford city') continue; // Processing only up to Bradford City

        const slug = toSlug(f);
        const sourcePath = path.join(stagingDir, f);
        const files = fs.readdirSync(sourcePath).filter(file => !file.startsWith('.'));

        if(files.length === 0) continue; // Empty folder, skip

        console.log(`\n--- Processing [${f}] (${slug}) -> ${files.length} files ---`);

        // Check if JSON exists in Spain or England
        let jsonPath = null;
        let isBaseClub = false;
        
        if(fs.existsSync(path.join(clubesEspania, `${slug}.json`))) {
            jsonPath = path.join(clubesEspania, `${slug}.json`);
            isBaseClub = true;
        } else if(fs.existsSync(path.join(clubesInglaterra, `${slug}.json`))) {
            jsonPath = path.join(clubesInglaterra, `${slug}.json`);
            isBaseClub = true;
        }

        if(isBaseClub) {
            // BASE CLUB (Has JSON)
            const targetFolder = path.join(publicHistoricos, slug);
            if(!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, {recursive: true});

            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            if(!data.evolucion_escudos) data.evolucion_escudos = [];

            // Separate current final shield to append at the end
            const currentShieldIdx = data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad');
            let currentShield = null;
            if (currentShieldIdx !== -1) {
                currentShield = data.evolucion_escudos.splice(currentShieldIdx, 1)[0];
            }

            for(const file of files) {
                const oldLocation = path.join(sourcePath, file);
                const year = extractYear(file);
                
                // Decode URI component if the name got garbled by browser downloads
                let decodedName = decodeURIComponent(file);
                // remove special characters from filename except extension
                const ext = path.extname(decodedName);
                const base = path.basename(decodedName, ext).replace(/[^\w-]/g, '_');
                const cleanDestName = `${base}${ext}`;

                const newLocation = path.join(targetFolder, cleanDestName);
                
                fs.copyFileSync(oldLocation, newLocation);
                
                // Add to array only if not already exists by URL
                const fileUrl = `/escudos_historicos/${slug}/${cleanDestName}`;
                if(!data.evolucion_escudos.some(e => e.url === fileUrl)) {
                    data.evolucion_escudos.push({
                        ano: year,
                        url: fileUrl,
                        desc: `Escudo usado en la época (${year}).`
                    });
                }
            }

            // Sort purely numerical years
            data.evolucion_escudos.sort((a,b) => {
                const numA = parseInt(a.ano);
                const numB = parseInt(b.ano);
                if(!isNaN(numA) && !isNaN(numB)) return numA - numB;
                if(!isNaN(numA)) return -1;
                if(!isNaN(numB)) return 1;
                return 0;
            });

            // Re-append current shield
            if (currentShield) {
                // Force its url back to `/escudos/${slug}.png` or whatever is in `data.datos.escudo_actual`
                // But user requested: "acordate que como imagne de cada club va el esxcudo actual"
                // So let's make sure it's fully mapped.
                if(data.datos && data.datos.escudo_actual) {
                    currentShield.url = data.datos.escudo_actual;
                }
                data.evolucion_escudos.push(currentShield);
            }

            // Save JSON changes
            fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

            // Clean staging dir
            files.forEach(file => fs.unlinkSync(path.join(sourcePath, file)));
            fs.rmdirSync(sourcePath);
            console.log(`Updated JSON and moved historical escudos for Base Club: ${slug}`);

        } else {
            // HISTORIC CLUB WITHOUT JSON (e.g., Bradford City, Arenas de Getxo)
            // Just move the main missing shield heavily to public/escudos/[slug].[ext]
            console.log(`No Base JSON found for ${slug}, processing as Historic winner.`);
            
            // Assume the first file is the main shield
            const mainFile = files[0];
            const oldLocation = path.join(sourcePath, mainFile);
            const ext = path.extname(mainFile);
            const newLocation = path.join(publicEscudos, `${slug}${ext}`);

            // If there's already a .png and the new file is .png, overwrite. If it exists as another ext, remove the old one.
            try {
                fs.copyFileSync(oldLocation, newLocation);
            } catch(e) {
                console.error("Copy err:", e);
            }

            // Clean staging dir
            files.forEach(file => fs.unlinkSync(path.join(sourcePath, file)));
            try { fs.rmdirSync(sourcePath); } catch(ex){}
            
            console.log(`Activated generic visual shield for Historic Club: ${slug}${ext}`);
        }
    }
}
processFolders();
