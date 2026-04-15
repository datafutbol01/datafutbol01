const fs = require('fs');
const path = require('path');
const https = require('https');

const dataPath = path.join(__dirname, 'app', 'src', 'data', 'copas', 'champions', '1994.json');
const escudosDir = path.join(__dirname, 'app', 'escudos_a_descargar');

if (!fs.existsSync(escudosDir)) fs.mkdirSync(escudosDir, { recursive: true });

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const participants = data.participants;

async function fetchWikiImage(queryName) {
    return new Promise((resolve) => {
        // We add " F.C." or " football" to improve Wikipedia matches for clubs
        const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(queryName)}`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    const pages = json.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId !== "-1" && pages[pageId].original) {
                        resolve(pages[pageId].original.source);
                    } else {
                        resolve(null);
                    }
                } catch(e) { resolve(null); }
            });
        }).on('error', () => resolve(null));
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
                if (res.statusCode !== 200) {
                    // Follow redirect once
                    downloadImage(res.headers.location, dest).then(resolve);
                    return;
                }
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(true); });
            } else {
                resolve(false);
            }
        }).on('error', () => resolve(false));
    });
}

async function main() {
    let createdCount = 0;
    let downloadedCount = 0;

    console.log(`Buscando escudos para la Champions 1994...`);
    
    for (const team of participants) {
        const folderPath = path.join(escudosDir, team.id);
        
        // Verifica si la carpeta ya existe. Si falta, la crea e intenta descargar
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`\n📁 Creada: ${team.id}`);
            createdCount++;
            
            // Intenta buscar el escudo en Wikipedia (primero con "FC", luego normal)
            let imageUrl = await fetchWikiImage(team.name + " F.C.");
            if (!imageUrl) imageUrl = await fetchWikiImage(team.name + " club");
            if (!imageUrl) imageUrl = await fetchWikiImage(team.name);
            
            if (imageUrl) {
                const ext = path.extname(imageUrl).split('?')[0] || '.png';
                // Avoid downloading weird wiki text representations, ensure it's an image
                if (['.png', '.svg', '.jpg', '.jpeg', '.webp'].includes(ext.toLowerCase())) {
                    const destPath = path.join(folderPath, `${team.id}${ext}`);
                    const success = await downloadImage(imageUrl, destPath);
                    if (success) {
                        console.log(`   ✅ Descargado: ${imageUrl.split('/').pop()}`);
                        downloadedCount++;
                    } else {
                        console.log(`   ❌ Falló la descarga de la imagen: ${imageUrl}`);
                    }
                } else {
                    console.log(`   ⚠️ SVG u otro formato complejo ignorado, descargar manual.`);
                }
            } else {
                console.log(`   🔍 No se encontró escudo en Wikipedia para "${team.name}". (Mete manual)`);
            }
        }
    }
    
    console.log(`\n¡Proceso Terminado! Carpetas creadas: ${createdCount} | Escudos automáticos: ${downloadedCount}`);
}

main();
