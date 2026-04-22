const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = path.join(__dirname, 'app', 'public');
const escudosDir = path.join(publicDir, 'escudos');

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
                    }
                } catch (e) { }
            });
        });
    }
};

fetchWikiImage('elche', 'Elche_Club_de_Fútbol');
fetchWikiImage('real-oviedo', 'Real_Oviedo');
fetchWikiImage('real-sociedad', 'Real_Sociedad_de_Fútbol');
fetchWikiImage('real-valladolid', 'Real_Valladolid_Club_de_Fútbol');
