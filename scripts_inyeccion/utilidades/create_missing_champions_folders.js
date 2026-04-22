const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'app', 'escudos_a_descargar');

const foldersToCreate = [
    'ajax', 'benfica', 'porto', 'anderlecht', 'galatasaray', 
    'feyenoord', 'steaua', 'dynamo_kyiv', 'spartak_moscow', 
    'sparta_praha', 'ifk_goteborg', 'salzburg', 'aek', 
    'aarau', 'copenhagen', 'rosenborg', 'hajduk_split', 
    'skonto', 'honved', 'dinamo_minsk', 'ia_akranes', 
    'ekranas', 'omonia', 'floriana', 'avenir_beggen', 
    'maccabi_haifa', 'legia_warsaw', 'servette', 
    'silkeborg', 'vac_fc'
];

foldersToCreate.forEach(folder => {
    const dirPath = path.join(destDir, folder);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Creada: ${folder}`);
    } else {
        console.log(`Ya existía: ${folder}`);
    }
});

console.log("¡Carpetas creadas con éxito!");
