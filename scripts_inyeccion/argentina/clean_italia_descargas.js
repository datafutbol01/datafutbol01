const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const targetDir = path.join(baseDir, 'procesados_italia');

const italianClubs = [
    "atalanta", "bologna", "cagliari", "como", "cremonese", "fiorentina", 
    "genoa", "hellas-verona", "inter", "juventus", "lazio", "lecce", 
    "milan", "napoli", "parma", "pisa", "roma", "sassuolo", "torino", "udinese"
];

// Crear la carpeta archivo si no existe
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

let movidos = 0;

for (const clubId of italianClubs) {
    const srcPath = path.join(baseDir, clubId);
    const destPath = path.join(targetDir, clubId);

    if (fs.existsSync(srcPath)) {
        // En caso de que el destino ya exista por algún error previo, se borra
        if (fs.existsSync(destPath)) {
            fs.rmSync(destPath, { recursive: true, force: true });
        }
        
        // Mover la carpeta entera
        fs.renameSync(srcPath, destPath);
        console.log(`Carpeta movida a archivo: ${clubId}`);
        movidos++;
    }
}

console.log(`\n¡Limpieza completada! Se archivaron ${movidos} carpetas de Italia en 'procesados_italia'.`);
