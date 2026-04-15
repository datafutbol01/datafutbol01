const https = require('https');
const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'app', 'public', 'escudos_historicos');

const queries = {
    'st-andrew-s-old-caledonians': 'Club_Atlético_St._Andrew%27s',
    'san-isidro': 'Club_Atlético_San_Isidro',
    'estudiantes-de-buenos-aires': 'Club_Atlético_Estudiantes',
    'tiro-federal-de-rosario': 'Club_Atlético_Tiro_Federal_Argentino',
    'tiro-federal-rosario': 'Club_Atlético_Tiro_Federal_Argentino',
    'san-martin-tucuman': 'Club_Atlético_San_Martín_(Tucumán)',
    'river-plate-liga-cultural-sgo-del-estero': 'Liga_Santiagueña_de_Fútbol', // Use league logo or just use generic
    'liga-cordobesa': 'Liga_Cordobesa_de_Fútbol',
    'barracas-central': 'Club_Atlético_Barracas_Central',
    'barracas-athletic-club': 'Barracas_Athletic_Club'
};

const download = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(cb);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => {});
        if (cb) cb(err.message);
    });
};

const fetchWikiImage = (slug, wikiTitle) => {
    const apiurl = `https://es.wikipedia.org/w/api.php?action=query&titles=${wikiTitle}&prop=pageimages&format=json&pithumbsize=500`;
    https.get(apiurl, (res) => {
        let body = '';
        res.on('data', d => body += d);
        res.on('end', () => {
            try {
                const data = JSON.parse(body);
                const pages = data.query.pages;
                const pageId = Object.keys(pages)[0];
                if (pageId !== '-1' && pages[pageId].thumbnail) {
                    const imgUrl = pages[pageId].thumbnail.source;
                    const isBase = slug === 'barracas-central';
                    const targetDir = isBase ? path.join(__dirname, 'app', 'public', 'escudos') : destDir;
                    const downloadPath = path.join(targetDir, `${slug}.png`);
                    
                    download(imgUrl, downloadPath, () => {
                        console.log(`[MEGABOT] Descargado escudo para: ${slug}`);
                    });
                } else {
                    console.log(`[MEGABOT] No se encontro imagen para: ${slug}`);
                }
            } catch (e) {
                console.log(`[MEGABOT] Error parseando JSON para: ${slug}`);
            }
        });
    });
};

Object.keys(queries).forEach(slug => {
    fetchWikiImage(slug, queries[slug]);
});

// Arreglamos newells de paso porque faltó en el cloner anterior
let newellsSrc = path.join(__dirname, 'app', 'public', 'escudos', 'newells-old-boys.png');
let newellsDest = path.join(destDir, 'newell-s-old-boys.png');
if (fs.existsSync(newellsSrc)) {
    fs.copyFileSync(newellsSrc, newellsDest);
    console.log(`Cloned: newells-old-boys.png -> newell-s-old-boys.png`);
}
