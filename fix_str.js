const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';
const files = fs.readdirSync(dir);

const fixes = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã ': 'Á',
    'Ã‰': 'É',
    'Ã\x8D': 'Í',
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Ã‘': 'Ñ',
    'Â°': '°',
    'Â¿': '¿',
    'Â¡': '¡',
    'Ã¤': 'ä',
    'Ã«': 'ë',
    'Ã¯': 'ï',
    'Ã¶': 'ö',
    'Ã¼': 'ü',
    'Ã§': 'ç'
};

files.forEach(f => {
    if (!f.endsWith('.json')) return;
    const p = path.join(dir, f);
    let content = fs.readFileSync(p, 'utf8');
    
    let changed = false;
    for (const bad in fixes) {
        if (content.includes(bad)) {
            content = content.split(bad).join(fixes[bad]);
            changed = true;
        }
    }
    
    // Check if valid JSON after replace
    try {
        JSON.parse(content);
        if (changed) {
            fs.writeFileSync(p, content, 'utf8');
            console.log('Fixed str replaced', f);
        }
    } catch(e) {
        console.log('JSON still broken after fix for', f, e.message);
    }
});
