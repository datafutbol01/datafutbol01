const https = require('https');
const fs = require('fs');
const path = require('path');

const escudosDir = path.join(__dirname, 'app/public/escudos');
const options = {
    headers: { 'User-Agent': 'MiEnciclopediaFutbol/1.0 Node.js' }
};

const customTerms = {
    "rosario-central": "Archivo:Escudo_del_Club_Atlético_Rosario_Central.svg",
    "tigre": "Archivo:Escudo_del_Club_Atlético_Tigre_-_2019.svg"
};

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, options, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return https.get(response.headers.location, options, (res2) => {
                    res2.pipe(file);
                    file.on('finish', () => resolve());
                });
            }
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => resolve());
            } else {
                reject(new Error(`Status Code: ${response.statusCode}`));
            }
        }).on('error', err => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function getWikipediaPageImage(fileName) {
    return new Promise((resolve, reject) => {
        const url = `https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
        https.get(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    const pages = data.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId === '-1' || !pages[pageId].imageinfo) {
                        resolve(null);
                    } else {
                        // For SVGs, we can request a thumb by using iiurlwidth
                        const thumbUrl = `https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&iiurlwidth=1000&format=json`;
                        https.get(thumbUrl, options, (resThumb) => {
                             let bodyThumb = '';
                             resThumb.on('data', chunk => bodyThumb += chunk);
                             resThumb.on('end', () => {
                                 try{
                                     const dataT = JSON.parse(bodyThumb);
                                     const pagesT = dataT.query.pages;
                                     const pIdT = Object.keys(pagesT)[0];
                                     resolve(pagesT[pIdT].imageinfo[0].thumburl);
                                 } catch(e) { resolve(pages[pageId].imageinfo[0].url); }
                             });
                        });
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

async function processClubs() {
    for (const [clubId, fileName] of Object.entries(customTerms)) {
        console.log(`Buscando escudo para: ${fileName} (${clubId})...`);
        try {
            const imgUrl = await getWikipediaPageImage(fileName);
            if (imgUrl) {
                const destPath = path.join(escudosDir, `${clubId}.png`);
                await downloadImage(imgUrl, destPath);
                console.log(`   ✅ Descargado: ${clubId}.png`);
            } else {
                console.log(`   ❌ No se encontró escudo`);
            }
        } catch (error) {
            console.log(`   ⚠️ Error descargando ${clubId}: ${error.message}`);
        }
    }
}
processClubs();
