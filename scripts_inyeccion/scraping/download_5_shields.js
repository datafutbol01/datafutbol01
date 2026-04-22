const https = require('https');
const fs = require('fs');
const path = require('path');

const escudosDir = path.join(__dirname, 'app/public/escudos');
const options = {
    headers: { 'User-Agent': 'MiEnciclopediaFutbol/1.0 (https://github.com/ejemplo) Node.js' }
};

const customTerms = {
    "rosario-central": "Club Atlético Rosario Central",
    "san-lorenzo": "Club Atlético San Lorenzo de Almagro",
    "talleres-cba": "Club Atlético Talleres (Córdoba)",
    "velez-sarsfield": "Club Atlético Vélez Sarsfield",
    "tigre": "Club Atlético Tigre"
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

async function getWikipediaPageImage(searchTerm) {
    return new Promise((resolve, reject) => {
        const url = `https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchTerm)}&prop=pageimages&format=json&pithumbsize=1000`;
        https.get(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    const pages = data.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId === '-1' || !pages[pageId].thumbnail) {
                        resolve(null);
                    } else {
                        resolve(pages[pageId].thumbnail.source);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

async function processClubs() {
    for (const [clubId, searchTerm] of Object.entries(customTerms)) {
        console.log(`Buscando escudo para: ${searchTerm} (${clubId})...`);
        try {
            const imgUrl = await getWikipediaPageImage(searchTerm);
            if (imgUrl) {
                const destPath = path.join(escudosDir, `${clubId}.png`);
                await downloadImage(imgUrl, destPath);
                console.log(`   ✅ Descargado: ${clubId}.png (Alta definición)`);
            } else {
                console.log(`   ❌ No se encontró escudo oficial HD en Wikipedia para: ${searchTerm}`);
            }
        } catch (error) {
            console.log(`   ⚠️ Error descargando ${clubId}: ${error.message}`);
        }
    }
}
processClubs();
