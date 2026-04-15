const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'escudos_a_descargar', 'procesados_alemania', 'bayern-munich');
const files = fs.readdirSync(dir);

files.forEach(f => {
    const stat = fs.statSync(path.join(dir, f));
    console.log(`${f} - birthtime: ${stat.birthtime.toISOString()} - mtime: ${stat.mtime.toISOString()}`);
});
