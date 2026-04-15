const fs = require('fs');
const https = require('https');
const path = require('path');

const files = [
    { title: 'File:Woolwich_Arsenal_crest.png', name: 'arsenal_1888.png', fallback: 'File:Arsenal_Crest_1888.png' },
    { title: 'File:Arsenal_F.C._Crest_1925–1949.png', name: 'arsenal_1925.png' },
    { title: 'File:Arsenal_fc_old_crest_small.png', name: 'arsenal_1949.png' }
];

const dest = path.join(__dirname, '../app/public/escudos');

function getWikiUrl(title) {
    return new Promise((resolve, reject) => {
        const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const json = JSON.parse(data);
                const pages = json.query.pages;
                const pageId = Object.keys(pages)[0];
                if (pageId === "-1" || !pages[pageId].imageinfo) {
                    resolve(null);
                } else {
                    resolve(pages[pageId].imageinfo[0].url);
                }
            });
        }).on('error', reject);
    });
}

function download(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode));
            const stream = fs.createWriteStream(filepath);
            res.pipe(stream);
            stream.on('finish', () => resolve());
        }).on('error', reject);
    });
}

async function run() {
    for (const f of files) {
        let url = await getWikiUrl(f.title);
        if (!url && f.fallback) {
            url = await getWikiUrl(f.fallback);
        }
        if (url) {
            console.log(`Descargando ${f.name} desde ${url}...`);
            await download(url, path.join(dest, f.name));
            console.log(`✅ ${f.name} guardado con éxito.`);
        } else {
            console.log(`❌ No se encontró la URL para ${f.title}`);
        }
    }
}

run();
