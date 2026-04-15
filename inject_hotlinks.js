const https = require('https');
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'app/src/data/clubes/argentina');

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

const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } };

function getWikipediaImageUrl(searchTerm) {
    return new Promise((resolve) => {
        const url = 'https://es.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(searchTerm) + '&prop=pageimages&format=json&pithumbsize=1000';
        https.get(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    const pages = data.query.pages;
                    const pageId = Object.keys(pages)[0];
                    resolve((pageId !== '-1' && pages[pageId].thumbnail) ? pages[pageId].thumbnail.source : null);
                } catch (e) { resolve(null); }
            });
        }).on('error', () => resolve(null));
    });
}

async function run() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
        const clubId = file.replace('.json', '');
        if (clubId === 'aldosivi' || clubId === 'defensa-justicia') continue; // Ya los hicimos perfectos.

        const p = path.join(dataDir, file);
        const data = JSON.parse(fs.readFileSync(p, 'utf8'));
        const search = customTerms[clubId] || data.datos.nombre_completo || clubId;
        
        console.log("Buscando Hotlink para", search);
        const url = await getWikipediaImageUrl(search);
        
        if (url) {
            // Reemplazamos tooda la evolución de escudos (y los falsos retros) por un único escudo moderno oficial externo.
            data.evolucion_escudos = [{
                ano: 'Actualidad',
                url: url,
                desc: 'Escudo oficial actual enlazado directamente a la red estática de la enciclopedia.'
            }];
            fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
            console.log('✅ Inyectado link nativo en ' + clubId);
        } else {
            console.log('❌ Falló link natural para ' + clubId);
        }
    }
}

run();
