const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'escudos_a_descargar');
const pubActualDir = path.join(__dirname, 'app', 'public', 'escudos');
const pubHistDir = path.join(__dirname, 'app', 'public', 'escudos_historicos');
const archiveDir = path.join(baseDir, 'procesados_alemania');
const clubJsonDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });

const folders = [
    "augsburg", "bayer-leverkusen", "bayern-munich", "borussia-dortmund", 
    "borussia-monchengladbach", "eintracht-frankfurt", "fc-koln", "hamburger-sv", 
    "heidenheim", "hoffenheim", "mainz-05", "rb-leipzig", "sc-freiburg", 
    "fc-st-pauli", "union-berlin", "vfb-stuttgart", "werder-bremen", "wolfsburg"
];

// Mapeo folder -> JSON name if different
const mapFolderToJson = {
    'fc-koln': 'koln',
    'sc-freiburg': 'freiburg',
    'fc-st-pauli': 'st-pauli'
};

const extractYearsRegex = /\b((?:18|19|20)\d{2}\s*(?:[-\u2013]\s*(?:18|19|20)\d{2})?)\b/;

for (const folder of folders) {
    const srcDir = path.join(baseDir, folder);
    if (!fs.existsSync(srcDir)) continue;

    const clubId = mapFolderToJson[folder] || folder;
    const jsonPath = path.join(clubJsonDir, `${clubId}.json`);
    
    if (!fs.existsSync(jsonPath)) {
        console.log(`JSON no encontrado para ${clubId}`);
        continue;
    }
    
    // Leer el json
    const club = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
     клубEvoluciones = club.evolucion_escudos || [];

    const files = fs.readdirSync(srcDir).filter(f => f.match(/\.(png|jpe?g|webp|svg)$/i));
    
    // Identificar el escudo actual vs históricos
    let escudoActualFile = null;
    let historicos = [];
    
    // Heurísticas: Si el archivo se llama actual, tiene 2024, o no tiene años.
    for (const f of files) {
        const lower = f.toLowerCase();
        let decoded = decodeURIComponent(f);
        decoded = decoded.replace(/%28/g, '(').replace(/%29/g, ')'); // Just in case
        
        let foundYearMatch = decoded.match(extractYearsRegex);
        
        // Excepciones: Si es explicitly "2024" o "introduced_2024", it's the actual usually
        let isActual = false;
        if (lower.includes('actual') || lower.includes('2024') || lower.includes('2025')) {
            isActual = true;
        } else if (!foundYearMatch) {
            // No years found, usually means it's the main logo downloaded from wiki
            isActual = true;
        } else {
            // Check if year is very recent and there's no "actual" candidate yet
            // that doesn't have years.
        }
        
        if (isActual) {
            if (!escudoActualFile || lower.includes('actual')) {
                escudoActualFile = f;
            } else {
                historicos.push({ file: f, name: decoded });
            }
        } else {
            historicos.push({ file: f, name: decoded, match: foundYearMatch ? foundYearMatch[1] : null });
        }
    }
    
    // Si todavía no hay actual pero hay históricos, tomar el más reciente
    if (!escudoActualFile && historicos.length > 0) {
        // Ordeno por nombre descendente a ver
        historicos.sort((a,b) => b.name.localeCompare(a.name));
        escudoActualFile = historicos.shift().file;
    }

    // Array acumulador para Json
    const nuevasEvoluciones = [];
    
    // Procesar escudo actual
    if (escudoActualFile) {
        const extMatch = escudoActualFile.match(/\.([a-z0-9]+)$/i);
        const ext = extMatch ? extMatch[1].toLowerCase() : 'png';
        const targetPath = path.join(pubActualDir, `${clubId}.${ext}`);
        fs.copyFileSync(path.join(srcDir, escudoActualFile), targetPath);
        
        // Reset JSON data
        club.datos = club.datos || {};
        club.datos.escudo_actual = `/escudos/${clubId}.${ext}`;
        nuevasEvoluciones.push({ ano: "Actualidad", url: `/escudos/${clubId}.${ext}` });
    }

    // Procesar históricos
    if (historicos.length > 0) {
        const histClubDir = path.join(pubHistDir, clubId);
        if (!fs.existsSync(histClubDir)) fs.mkdirSync(histClubDir, { recursive: true });
        
        for (const h of historicos) {
            const extMatch = h.file.match(/\.([a-z0-9]+)$/i);
            const ext = extMatch ? extMatch[1].toLowerCase() : 'png';
            
            let anoLabel = h.match || h.name.replace(/\.[a-z0-9]+$/i, '').trim();
            // Limpiar label
            anoLabel = anoLabel.replace(/\(/g, '').replace(/\)/g, '').trim();
            
            // Reemplazar espacios y caracteres raros para el filename
            const safeName = anoLabel.replace(/[^a-zA-Z0-9-]/g, '_') || 'hist';
            
            const targetName = `${safeName}.${ext}`;
            const targetPath = path.join(histClubDir, targetName);
            fs.copyFileSync(path.join(srcDir, h.file), targetPath);
            
            nuevasEvoluciones.push({ ano: anoLabel, url: `/escudos_historicos/${clubId}/${targetName}` });
        }
    }
    
    // Sort evoluciones by year ascending before saving
    nuevasEvoluciones.sort((a, b) => {
        if (a.ano === 'Actualidad') return 1;
        if (b.ano === 'Actualidad') return -1;
        const ya = parseInt(a.ano.split(/[-_]/)[0]) || 0;
        const yb = parseInt(b.ano.split(/[-_]/)[0]) || 0;
        return ya - yb;
    });

    // Guardar array limpio eliminando duplicados locos o wiki limits
    club.evolucion_escudos = nuevasEvoluciones;

    fs.writeFileSync(jsonPath, JSON.stringify(club, null, 2), 'utf8');

    // Mover carpeta a archivo
    const destArch = path.join(archiveDir, folder);
    if (fs.existsSync(destArch)) fs.rmSync(destArch, { recursive: true, force: true });
    fs.renameSync(srcDir, destArch);
    console.log(`✔️ ${clubId}: Actual + ${historicos.length} historicos cargados. Y guardado en archivo.`);
}

console.log("¡Todo el flujo de escudos de la Bundesliga procesado con éxito!");
