const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'escudos_a_descargar', 'procesados_alemania');
const pubActualDir = path.join(__dirname, 'app', 'public', 'escudos');
const pubHistDir = path.join(__dirname, 'app', 'public', 'escudos_historicos');
const clubJsonDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const folders = fs.readdirSync(baseDir);

const mapFolderToJson = {
    'fc-koln': 'koln',
    'sc-freiburg': 'freiburg',
    'fc-st-pauli': 'st-pauli'
};

const extractYearsRegex = /\b((?:18|19|20)\d{2}\s*(?:[-\u2013]\s*(?:18|19|20)\d{2})?)\b/;

for (const folder of folders) {
    const srcDir = path.join(baseDir, folder);
    if (!fs.statSync(srcDir).isDirectory()) continue;

    const clubId = mapFolderToJson[folder] || folder;
    const jsonPath = path.join(clubJsonDir, `${clubId}.json`);
    
    if (!fs.existsSync(jsonPath)) {
        console.log(`JSON no encontrado para ${clubId}`);
        continue;
    }

    const filesRaw = fs.readdirSync(srcDir).filter(f => f.match(/\.(png|jpe?g|webp|svg)$/i));
    if (filesRaw.length === 0) {
        console.log(`⚠️ Carpeta ${folder} sigue vacía, no se puede hacer nada.`);
        continue;
    }

    // Leer stats para ordenar por último modificado/creado
    const fileStats = filesRaw.map(f => {
        const stats = fs.statSync(path.join(srcDir, f));
        // Usamos mtimeMs que es el tiempo de creación modificado por la descarga (último escrito)
        return { file: f, time: stats.mtimeMs };
    });

    // Ordenar descendente: el más nuevo (último ingresado) es el índice 0
    fileStats.sort((a, b) => b.time - a.time);

    const actualFileObj = fileStats.shift(); // El último ingresado
    const historicosFiles = fileStats; // El resto

    // -- LIMPIAR HISTORICOS PREVIOS --
    const histClubDir = path.join(pubHistDir, clubId);
    if (fs.existsSync(histClubDir)) {
        fs.rmSync(histClubDir, { recursive: true, force: true });
    }
    fs.mkdirSync(histClubDir, { recursive: true });

    // Arrays para el JSON
    const nuevasEvoluciones = [];

    // PROCESAR ACTUAL
    const actF = actualFileObj.file;
    const actExtMatch = actF.match(/\.([a-z0-9]+)$/i);
    const actExt = actExtMatch ? actExtMatch[1].toLowerCase() : 'png';
    const actTargetPath = path.join(pubActualDir, `${clubId}.${actExt}`);
    fs.copyFileSync(path.join(srcDir, actF), actTargetPath);
    nuevasEvoluciones.push({ ano: "Actualidad", url: `/escudos/${clubId}.${actExt}` });

    // PROCESAR HISTORICOS
    for (const hObj of historicosFiles) {
        const f = hObj.file;
        let decoded = decodeURIComponent(f);
        decoded = decoded.replace(/%28/g, '(').replace(/%29/g, ')'); 

        const extMatch = f.match(/\.([a-z0-9]+)$/i);
        const ext = extMatch ? extMatch[1].toLowerCase() : 'png';

        let foundYearMatch = decoded.match(extractYearsRegex);
        
        let anoLabel = foundYearMatch ? foundYearMatch[1] : decoded.replace(/\.[a-z0-9]+$/i, '').trim();
        anoLabel = anoLabel.replace(/\(/g, '').replace(/\)/g, '').trim();
        
        const safeName = anoLabel.replace(/[^a-zA-Z0-9-]/g, '_') || 'hist';
        const targetName = `${safeName}.${ext}`;
        const targetPath = path.join(histClubDir, targetName);
        
        fs.copyFileSync(path.join(srcDir, f), targetPath);
        nuevasEvoluciones.push({ ano: anoLabel, url: `/escudos_historicos/${clubId}/${targetName}` });
    }

    // ORDENAR HISTORICOS CRONOLOGICAMENTE
    nuevasEvoluciones.sort((a, b) => {
        if (a.ano === 'Actualidad') return 1;
        if (b.ano === 'Actualidad') return -1;
        const ya = parseInt(a.ano.split(/[-_]/)[0]) || 0;
        const yb = parseInt(b.ano.split(/[-_]/)[0]) || 0;
        return ya - yb;
    });

    // GUARDAR EN JSON
    const club = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    club.datos = club.datos || {};
    club.datos.escudo_actual = `/escudos/${clubId}.${actExt}`;
    club.evolucion_escudos = nuevasEvoluciones;

    fs.writeFileSync(jsonPath, JSON.stringify(club, null, 2), 'utf8');

    console.log(`✔️ ${clubId}: Actual ajustado a "${actF}". ${historicosFiles.length} históricos mapeados firmemente.`);
}

console.log("¡Todos los escudos ajustados basandose en el ÚLTIMO INGRESADO a la carpeta!");
