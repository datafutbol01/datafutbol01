const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

const extMap = {};
files.forEach(f => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    if (data.datos && data.datos.escudo_actual) {
        const ext = data.datos.escudo_actual.split('.').pop();
        extMap[data.id] = ext;
    }
});

let outputStr = '';
for (const [key, val] of Object.entries(extMap)) {
    if (val !== 'png') {
        outputStr += `'${key}': '${val}', `;
    }
}
console.log(outputStr);
