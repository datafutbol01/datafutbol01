const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';
const files = fs.readdirSync(dir);

files.forEach(f => {
    if (!f.endsWith('.json')) return;
    const p = path.join(dir, f);
    const content = fs.readFileSync(p, { encoding: 'latin1' }); 
    let correct = Buffer.from(content, 'latin1').toString('utf8');
    
    // Remove BOM if present
    if (correct.charCodeAt(0) === 0xFEFF) {
        correct = correct.slice(1);
    }

    try {
        JSON.parse(correct);
        fs.writeFileSync(p, correct, 'utf8');
        console.log('Fixed', f);
    } catch(e) {
        console.log('Error parsing', f, e.message);
    }
});
