const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const ligasPath = path.join(baseDir, 'app', 'src', 'data', 'ligas', 'alemania.json');
const clubesDir = path.join(baseDir, 'app', 'src', 'data', 'clubes', 'alemania');
const publicDir = path.join(baseDir, 'app', 'public');

let hasErrors = false;
function logError(msg) {
    console.error(`[ERROR] ${msg}`);
    hasErrors = true;
}

if (!fs.existsSync(ligasPath)) {
    logError(`No se encontro la liga en ${ligasPath}`);
    process.exit(1);
}

const liga = JSON.parse(fs.readFileSync(ligasPath, 'utf8'));
const equipos = liga.equipos;

if (equipos.length !== 18) {
    logError(`La Bundesliga deberia tener 18 equipos, tiene ${equipos.length}`);
}

const checkFileExists = (filePath, context) => {
    if (!filePath) return;
    const absPath = path.join(publicDir, filePath.startsWith('/') ? filePath.slice(1) : filePath);
    if (!fs.existsSync(absPath)) {
        logError(`Falta archivo [${context}]: ${filePath}`);
    }
}

equipos.forEach(equipoId => {
    const equipoPath = path.join(clubesDir, `${equipoId}.json`);
    if (!fs.existsSync(equipoPath)) {
        logError(`Falta JSON del equipo: ${equipoId}.json`);
        return;
    }
    
    const equipo = JSON.parse(fs.readFileSync(equipoPath, 'utf8'));
    
    // Validar escudos
    checkFileExists(equipo.escudo, `Escudo de ${equipoId}`);
    if (equipo.escudos_historicos) {
        equipo.escudos_historicos.forEach((eh, idx) => checkFileExists(eh.url, `Escudo historico de ${equipoId} (index ${idx})`));
    }
    
    // Validar estadio
    if (equipo.estadio && equipo.estadio.imagen) {
        checkFileExists(equipo.estadio.imagen, `Estadio de ${equipoId}`);
    }
    
    // Validar palmares escudos
    if (equipo.palmares) {
        equipo.palmares.forEach(p => {
             if (p.escudo) checkFileExists(p.escudo, `Palmares escudo en ${equipoId}`);
        });
    }

    // Validar fundacion_historia
    if (!equipo.fundacion_historia || equipo.fundacion_historia.length === 0) {
        logError(`Falta historia de fundacion para ${equipoId}`);
    }

    // Validar leyendas
    if (equipo.leyendas) {
        if (!equipo.leyendas.idolos || equipo.leyendas.idolos.length === 0) logError(`Faltan idolos en ${equipoId}`);
        if (!equipo.leyendas.maximos_goleadores || equipo.leyendas.maximos_goleadores.length === 0) logError(`Faltan maximos_goleadores en ${equipoId}`);
        if (!equipo.leyendas.mas_presencias || equipo.leyendas.mas_presencias.length === 0) logError(`Faltan mas_presencias en ${equipoId}`);
    } else {
        logError(`Falta seccion leyendas para ${equipoId}`);
    }
});

// Check historial (enfrentamientos) and temporadas
const temporadasPath = path.join(baseDir, 'app', 'src', 'data', 'ligas', 'alemania_temporadas.json');
if (!fs.existsSync(temporadasPath)) logError(`Falta alemania_temporadas.json`);
else {
    const temp = JSON.parse(fs.readFileSync(temporadasPath, 'utf8'));
    if (!temp.temporadas || temp.temporadas.length === 0) logError(`Temporadas vacias`);
    else console.log(`[INFO] alemanda_temporadas ok. (${temp.temporadas.length} checkeables)`);
}

const enfrentamientosPath = path.join(baseDir, 'app', 'src', 'data', 'ligas', 'alemania_enfrentamientos.json');
if (!fs.existsSync(enfrentamientosPath)) logError(`Falta alemania_enfrentamientos.json`);
else {
    const enfs = JSON.parse(fs.readFileSync(enfrentamientosPath, 'utf8'));
    if (Object.keys(enfs).length === 0) logError(`Enfrentamientos vacios`);
    else console.log(`[INFO] enfrentamientos ok. (${Object.keys(enfs).length} llaves iteradas)`);
}

if (!hasErrors) {
    console.log('[SUCCESS] Todos los datos, escudos, historiales y json de la Bundesliga parecen estar correctos.');
} else {
    console.log('[WARNING] Se encontraron errores en la Bundesliga.');
}
