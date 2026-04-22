const fs = require('fs');
const path = require('path');

const foldersToCreate = [
    'freiburger-fc',
    'holstein-kiel',
    'karlsruher-fv',
    'phonix-karlsruhe',
    'spvgg-furth',
    'union-92-berlin',
    'vfr-mannheim',
    'viktoria-berlin'
];

const targetDir = path.join(__dirname, 'app', 'escudos_a_descargar');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

foldersToCreate.forEach(folder => {
    const fullPath = path.join(targetDir, folder);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath);
        console.log(`Created directory: ${folder}`);
    } else {
        console.log(`Directory already exists: ${folder}`);
    }
});
