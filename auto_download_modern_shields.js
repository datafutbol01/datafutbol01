const https = require('https');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'app/src/data/clubes/argentina');
const escudosDir = path.join(__dirname, 'app/public/escudos');

if (!fs.existsSync(escudosDir)) {
    fs.mkdirSync(escudosDir, { recursive: true });
}

// User-Agent obligatorio para engañar el filtro anti-bot de Wikipedia
const options = {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
};

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, options, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Automáticamente seguir 1 nivel de redirect si ocurre
                return https.get(response.headers.location, options, (res2) => {
                    res2.pipe(file);
                    file.on('finish', () => resolve());
                });
            }
            response.pipe(file);
            file.on('finish', () => resolve());
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

// Algunos clubes necesitan un término de búsqueda muy preciso en Wikipedia
const customTerms = {
    "argentinos-jrs": "Asociación Atlética Argentinos Juniors",
    "boca-juniors": "Club Atlético Boca Juniors",
    "central-cordoba": "Club Atlético Central Córdoba (Santiago del Estero)",
    "estudiantes-lp": "Club Estudiantes de La Plata",
    "gimnasia-lp": "Club de Gimnasia y Esgrima La Plata",
    "gimnasia-mza": "Club Atlético Gimnasia y Esgrima (Mendoza)",
    "godoy-cruz": "Club Deportivo Godoy Cruz Antonio Tomba",
    "huracan": "Club Atlético Huracán",
    "independiente": "Club Atlético Independiente",
    "lanus": "Club Atlético Lanús",
    "newells-old-boys": "Club Atlético Newell's Old Boys",
    "racing-club": "Racing Club",
    "river-plate": "Club Atlético River Plate",
    "rosario-central": "Club Atlético Rosario Central",
    "san-lorenzo": "Club Atlético San Lorenzo de Almagro",
    "sarmiento-junin": "Club Atlético Sarmiento (Junín)",
    "talleres-cba": "Club Atlético Talleres (Córdoba)",
    "tigre": "Club Atlético Tigre",
    "union": "Club Atlético Unión (Santa Fe)",
    "velez-sarsfield": "Club Atlético Vélez Sarsfield",
    "belgrano-cba": "Club Atlético Belgrano",
    "instituto": "Instituto Atlético Central Córdoba"
};

async function processClubs() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
    console.log(`🦅 Iniciando escaneo oficial de Wikipedia para ${files.length} clubes...`);

    for (const file of files) {
        const clubId = file.replace('.json', '');
        const clubPath = path.join(dataDir, file);
        const clubData = JSON.parse(fs.readFileSync(clubPath, 'utf8'));
        
        let searchTerm = customTerms[clubId] || clubData.datos.nombre_completo || clubId;
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
    console.log("¡Cacería de escudos actuales finalizada con éxito!");
}

processClubs();
