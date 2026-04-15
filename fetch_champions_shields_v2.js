const fs = require('fs');
const path = require('path');
const https = require('https');

const dataPath = path.join(__dirname, 'app', 'src', 'data', 'copas', 'champions', '1994.json');
const escudosDir = path.join(__dirname, 'app', 'escudos_a_descargar');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const participants = data.participants;

async function scrapeWikiHtmlForImage(queryName) {
    return new Promise((resolve) => {
        const searchPath = `/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(queryName)}&utf8=&format=json&srlimit=1`;
        
        https.get({ host: 'en.wikipedia.org', path: searchPath, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    if (json.query && json.query.search && json.query.search.length > 0) {
                        const title = json.query.search[0].title;
                        const pagePath = `/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;
                        
                        https.get({ host: 'en.wikipedia.org', path: pagePath, headers: { 'User-Agent': 'Mozilla/5.0' } }, (pageRes) => {
                            let html = '';
                            pageRes.on('data', chunk => html += chunk);
                            pageRes.on('end', () => {
                                // Regex to find the <img src="//upload...> inside the infobox
                                const imgMatch = html.match(/<td class="infobox-image">.*?<img.*?src="(\/\/upload\.wikimedia\.org\/[^"]+)"/i) 
                                    || html.match(/<table class="infobox.*?<img.*?src="(\/\/upload\.wikimedia\.org\/[^"]+)"/i);
                                
                                if (imgMatch && imgMatch[1]) {
                                    let imgUrl = "https:" + imgMatch[1];
                                    // Make it bigger if it is a thumb
                                    if (imgUrl.includes('/thumb/')) {
                                        // Remove thumbnail specifics to get original, or just request a larger thumb
                                        // e.g. upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/150px-FC_Porto.svg.png
                                        // Change 150px to 500px to ensure good quality without relying on vector rendering issues
                                        imgUrl = imgUrl.replace(/\/\d+px-/, '/500px-');
                                    }
                                    resolve(imgUrl);
                                } else {
                                    resolve(null);
                                }
                            });
                        });
                    } else {
                        resolve(null);
                    }
                } catch(e) { resolve(null); }
            });
        });
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
                if (res.statusCode !== 200) {
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
    console.log(`\nIniciando Scraper HTML de Wikipedia para forzar escudos...`);
    
    // Solo aquellos equipos que AÚN están vacíos
    for (const team of participants) {
        const folderPath = path.join(escudosDir, team.id);
        
        // Verifica si la carpeta está vacía
        let needsDownload = false;
        if (fs.existsSync(folderPath)) {
            const files = fs.readdirSync(folderPath);
            if (files.length === 0) needsDownload = true;
        } else {
            fs.mkdirSync(folderPath, { recursive: true });
            needsDownload = true;
        }
        
        if (needsDownload) {
            console.log(`Forzando búsqueda de: ${team.name}...`);
            let imageUrl = await scrapeWikiHtmlForImage(team.name + " club");
            if (!imageUrl) imageUrl = await scrapeWikiHtmlForImage(team.name + " football");
            if (!imageUrl) imageUrl = await scrapeWikiHtmlForImage(team.name);
            
            if (imageUrl) {
                const ext = path.extname(imageUrl.split('?')[0]).toLowerCase() || '.png';
                const finalExt = ext === '.svg' ? '.svg' : '.png'; // Use PNG extension since wiki thumb serves PNG
                const destPath = path.join(folderPath, `${team.id}${finalExt}`);
                
                const success = await downloadImage(imageUrl, destPath);
                if (success) {
                    console.log(`   ✅ ENCONTRADO Y DESCARGADO: ${team.name}`);
                } else {
                    console.log(`   ❌ Falló descarga: ${imageUrl}`);
                }
            } else {
                console.log(`   🔍 Sigue sin encontrarse: ${team.name}`);
            }
        }
    }
    console.log(`¡Listo!`);
}

main();
