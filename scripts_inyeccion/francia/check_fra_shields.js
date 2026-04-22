const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('app/src/data/ligas/francia_temporadas.json', 'utf8'));
const champions = [...new Set(data.map(d => d.campeon))];

const publicDir = 'app/public/escudos';
const publicDir2 = 'app/public/escudos_historicos';

const missing = [];

champions.forEach(c => {
    if(c === 'Desierto') return;
    
    const id = c.toLowerCase()
        .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/ç/g, 'c')
        .replace('-y-marseille', '')
        .replace('stade-francais', 'stade-francais');

    let found = false;
    const exts = ['.png', '.webp', '.svg', '.jpg'];

    for (const ext of exts) {
        if (fs.existsSync(path.join(publicDir, id + ext)) || fs.existsSync(path.join(publicDir2, id + ext))) {
            found = true;
            break;
        }
    }

    if (!found) {
        const jsonPath = 'app/src/data/clubes/francia/' + id + '.json';
        if (fs.existsSync(jsonPath)) found = true;
    }

    if (!found) {
        missing.push({ name: c, expected_id: id });
    }
});

console.log('Total unique champions:', champions.length);
console.log('\nMissing shields for:');
missing.forEach(m => console.log(`- ${m.name} -> expected file: ${m.expected_id}.png/webp/svg`));
