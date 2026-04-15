const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = path.join(__dirname, 'app', 'public');
const escudosDir = path.join(publicDir, 'escudos');
const histDir = path.join(publicDir, 'escudos_historicos');

// 1. Move misplaced base shields from historicos to escudos
const moveBases = ['celta-vigo', 'girona', 'real-sociedad', 'real-valladolid', 'valladolid', 'osasuna'];
moveBases.forEach(slug => {
    ['png', 'jpg'].forEach(ext => {
        const src = path.join(histDir, `${slug}.${ext}`);
        if (fs.existsSync(src)) {
            const destName = slug === 'valladolid' ? 'real-valladolid' : slug;
            const dest = path.join(escudosDir, `${destName}.${ext}`);
            if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
            console.log(`Moved base: ${src} -> ${dest}`);
        }
    });
});

// 2. Clones for historical aliases
const aliases = {
    'fc-barcelona': 'barcelona.png',
    'rcd-espanyol': 'espanyol.png',
    'sevilla-fc': 'sevilla.png',
    'atletico-de-madrid': 'atletico-madrid.png',
    'valencia-cf': 'valencia.png',
    'rcd-mallorca': 'mallorca.png'
};

Object.entries(aliases).forEach(([missingSlug, targetFile]) => {
    const srcPath = path.join(escudosDir, targetFile);
    if (fs.existsSync(srcPath)) {
        const destPath = path.join(histDir, `${missingSlug}.png`);
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Cloned alias: ${targetFile} -> ${missingSlug}.png`);
        }
    }
});

// 3. Fetch missing entirely (Elche, Real Oviedo)
const fetchWikiImage = (slug, wikiTitle) => {
    const dest = path.join(escudosDir, `${slug}.png`);
    if (!fs.existsSync(dest)) {
        const apiurl = `https://es.wikipedia.org/w/api.php?action=query&titles=${wikiTitle}&prop=pageimages&format=json&pithumbsize=500`;
        https.get(apiurl, { headers: { 'User-Agent': 'NodeJS/Agentic' } }, (res) => {
            let body = '';
            res.on('data', d => body += d);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    const pages = data.query.pages;
                    const pageId = Object.keys(pages)[0];
                    if (pageId !== '-1' && pages[pageId].thumbnail) {
                        const imgUrl = pages[pageId].thumbnail.source;
                        const file = fs.createWriteStream(dest);
                        https.get(imgUrl, (response) => {
                            response.pipe(file);
                            file.on('finish', () => file.close(() => console.log(`Downloaded ${slug}.png`)));
                        });
                    } else console.log(`Not found in Wiki: ${slug}`);
                } catch (e) { console.error(`Error fetching ${slug}`, e); }
            });
        });
    }
};

fetchWikiImage('elche', 'Elche_Club_de_Fútbol');
fetchWikiImage('real-oviedo', 'Real_Oviedo');
