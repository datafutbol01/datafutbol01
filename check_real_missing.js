const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'app', 'escudos_a_descargar');
const pubDir = path.join(__dirname, 'app', 'public', 'escudos');

const directories = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'champions_league_procesados' && dirent.name !== 'arg_nuevos' && dirent.name !== 'eng_nuevos' && dirent.name !== 'esp_nuevos' && dirent.name !== 'francia_historicos' && dirent.name !== 'procesados_alemania' && dirent.name !== 'procesados_francia' && dirent.name !== 'procesados_italia')
    .map(dirent => dirent.name);

let alreadyInPublic = 0;
let trullyMissing = 0;

console.log("Revisando los vacíos contra tu carpeta oficial (app/public/escudos/):");

for (const folder of directories) {
    const pubPath = path.join(pubDir, folder);
    const pubPathPng = path.join(pubDir, folder + '.png');
    const pubPathSvg = path.join(pubDir, folder + '.svg');
    const pubPathWebp = path.join(pubDir, folder + '.webp');
    
    // Check if he has the file literally
    if (fs.existsSync(pubPathPng) || fs.existsSync(pubPathSvg) || fs.existsSync(pubPathWebp) || fs.existsSync(pubPath)) {
        console.log(`- ${folder} ¡Ya lo tenías en public! Lo puedes borrar de las pendientes.`);
        alreadyInPublic++;
    } else {
        console.log(`- ${folder} Falta 100%.`);
        trullyMissing++;
    }
}
console.log(`\nDe los ${directories.length} vacíos... En realidad te faltan buscar ${trullyMissing}.`);
