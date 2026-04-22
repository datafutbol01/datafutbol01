const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';
const files = fs.readdirSync(dir);

function fixDoubleEncoding(obj) {
    if (typeof obj === 'string') {
        try {
            return decodeURIComponent(escape(obj));
        } catch(e) {
            return obj;
        }
    } else if (Array.isArray(obj)) {
        return obj.map(fixDoubleEncoding);
    } else if (obj !== null && typeof obj === 'object') {
        const newObj = {};
        for (const k in obj) {
            newObj[k] = fixDoubleEncoding(obj[k]);
        }
        return newObj;
    }
    return obj;
}

files.forEach(f => {
    if (!f.endsWith('.json')) return;
    const p = path.join(dir, f);
    const content = fs.readFileSync(p, 'utf8');
    try {
        let json = JSON.parse(content);
        json = fixDoubleEncoding(json);
        fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
        console.log('Fixed encoding for', f);
    } catch(e) {
        console.log('Error parsing', f, e.message);
    }
});
