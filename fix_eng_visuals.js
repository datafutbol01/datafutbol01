const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = path.join(__dirname, 'app', 'public');
const escudosDir = path.join(publicDir, 'escudos');

// 1. Clones para alias
const aliases = {
    'newcastle-united': 'newcastle.png',
    'manchester-utd': 'manchester-united.png'
};

Object.entries(aliases).forEach(([missingSlug, targetFile]) => {
    const srcPath = path.join(escudosDir, targetFile);
    if (!fs.existsSync(srcPath)) {
        // intentamos buscar en carpetas recien desempaquetadas
        let hist = path.join(publicDir, 'escudos_historicos', targetFile);
        if (fs.existsSync(hist)) {
           fs.copyFileSync(hist, path.join(publicDir, 'escudos_historicos', `${missingSlug}.png`));
        }
    } else {
        const destPath = path.join(publicDir, 'escudos_historicos', `${missingSlug}.png`);
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Cloned: ${targetFile} -> ${missingSlug}.png`);
        }
    }
});

// 2. Fetch Middlesbrough from Wiki
const destMiddlesbrough = path.join(publicDir, 'escudos_historicos', 'middlesbrough.png');
if (!fs.existsSync(destMiddlesbrough)) {
    const apiurl = `https://en.wikipedia.org/w/api.php?action=query&titles=Middlesbrough_F.C.&prop=pageimages&format=json&pithumbsize=500`;
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
                    const file = fs.createWriteStream(destMiddlesbrough);
                    https.get(imgUrl, (response) => {
                        response.pipe(file);
                        file.on('finish', () => file.close(() => console.log('Downloaded middlesbrough.png')));
                    });
                }
            } catch (e) { console.error('Error fetching middlesbrough', e); }
        });
    });
}
