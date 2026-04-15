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
    if(n === 'real sociedad') return 'real-sociedad';
    if(n === 'real madrid') return 'real-madrid';
    if(n === 'rayo vallecano') return 'rayo-vallecano';
    if(n === 'racing de irún' || n === 'racing de irun') return 'racing-de-irun';
    if(n === 'real unión' || n === 'real union') return 'real-union';
    if(n === 'real zaragoza') return 'real-zaragoza';
    if(n === 'sevilla') return 'sevilla';
    if(n === 'valencia') return 'valencia';
    if(n === 'valladolid') return 'valladolid';
    if(n === 'villarreal') return 'villarreal';
    if(n === 'osasuna') return 'osasuna';
    if(n === 'tottenham hotspur') return 'tottenham'; // Tottenham's json is tottenham.json
    return n.replace(/\./g, '').replace(/\s+/g, '-');
}

function extractYearFix(str) {
    const m = str.match(/(?:^|_|-|\b|%20)(18|19|20)\d{2}(?:_|-|\b|%20|\.|$)/);
    if(m) return m[1] + str.substr(m.index + m[1].length, 2);
    const lazy = str.match(/(18|19|20)\d{2}/);
    if(lazy) return lazy[0];
    return 'Histórico';
}

function processFolders() {
    const folders = fs.readdirSync(stagingDir).filter(f => fs.statSync(path.join(stagingDir, f)).isDirectory());
    for(const f of folders) {
        if(f.toLowerCase() <= 'middlesbrough') continue; // Already processed

        const slug = toSlug(f);
        const sourcePath = path.join(stagingDir, f);
        let files = fs.readdirSync(sourcePath).filter(file => !file.startsWith('.'));

        if(files.length === 0) {
            console.log(`\n--- Skipping [${f}] (Empty folder) ---`);
            continue;
        }

        console.log(`\n--- Processing [${f}] (${slug}) ---`);

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
            // BASE CLUB
            const targetFolder = path.join(publicHistoricos, slug);
            if(!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, {recursive: true});

            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            if(!data.evolucion_escudos) data.evolucion_escudos = [];

            const currentShieldIdx = data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad');
            let currentShield = null;
            if (currentShieldIdx !== -1) {
                currentShield = data.evolucion_escudos.splice(currentShieldIdx, 1)[0];
            }

            for(const file of files) {
                if(file.endsWith('.htm') || file.endsWith('.html')) continue;

                const CONST_FILES_KEPT = ['Osasuna.webp', 'Mallorca.webp']; // Example of just one file, it's just processed
                const oldLocation = path.join(sourcePath, file);
                const decodedName = decodeURIComponent(file);
                const ext = path.extname(decodedName);
                const base = path.basename(decodedName, ext).replace(/[^\w-]/g, '_');
                const cleanDestName = `${base}${ext}`;
                const year = extractYearFix(cleanDestName);

                const newLocation = path.join(targetFolder, cleanDestName);
                fs.copyFileSync(oldLocation, newLocation);
                
                const fileUrl = `/escudos_historicos/${slug}/${cleanDestName}`;
                // Avoid redundant inserts
                if(!data.evolucion_escudos.some(e => e.url === fileUrl)) {
                    data.evolucion_escudos.push({
                        ano: year,
                        url: fileUrl,
                        desc: `Escudo usado en la época (${year}).`
                    });
                }
            }

            data.evolucion_escudos.sort((a,b) => {
                const numA = parseInt(a.ano);
                const numB = parseInt(b.ano);
                if(!isNaN(numA) && !isNaN(numB)) return numA - numB;
                if(!isNaN(numA)) return -1;
                if(!isNaN(numB)) return 1;
                return 0;
            });

            if (currentShield) {
                if(data.datos && data.datos.escudo_actual) currentShield.url = data.datos.escudo_actual;
                data.evolucion_escudos.push(currentShield);
            }

            fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
            files.forEach(file => fs.unlinkSync(path.join(sourcePath, file)));
            fs.rmdirSync(sourcePath);
            console.log(`Updated Base Club: ${slug}`);

        } else {
            // HISTORIC CLUB
            console.log(`Historic Club: ${slug}`);
            const imageFiles = files.filter(f => f.match(/\.(png|jpe?g|webp|svg|gif)$/i));
            if(imageFiles.length > 0) {
                const mainFile = imageFiles[0];
                const oldLocation = path.join(sourcePath, mainFile);
                const ext = path.extname(mainFile);
                const newLocation = path.join(publicEscudos, `${slug}${ext}`);
                fs.copyFileSync(oldLocation, newLocation);
            }
            files.forEach(file => fs.unlinkSync(path.join(sourcePath, file)));
            try { fs.rmdirSync(sourcePath); } catch(ex){}
            console.log(`Saved generic shield for ${slug}`);
        }
    }
}
processFolders();
