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
    
    // Validar escudos en root.datos y root.escudo
    if (equipo.datos && equipo.datos.escudo_actual) checkFileExists(equipo.datos.escudo_actual, `Escudo de ${equipoId}`);
    else if (equipo.escudo) checkFileExists(equipo.escudo, `Escudo de ${equipoId}`);

    if (equipo.evolucion_escudos) {
        equipo.evolucion_escudos.forEach((eh, idx) => checkFileExists(eh.url, `Escudo historico de ${equipoId} (index ${idx})`));
    }
    
    // Validar historia
    if (!equipo.historia || equipo.historia.length === 0) {
        logError(`Falta array de historia para ${equipoId}`);
    } else {
        if (!equipo.historia[0].desc || equipo.historia[0].desc.trim() === '') {
            logError(`Falta la descripcion en relato de historia para ${equipoId}`);
        }
    }

    // Validar leyendas en root
    if (!equipo.idolos || equipo.idolos.length === 0) logError(`Faltan idolos en ${equipoId}`);
    if (!equipo.goleadores_historicos || equipo.goleadores_historicos.length === 0) logError(`Faltan goleadores en ${equipoId}`);
    if (!equipo.presencias_historicas || equipo.presencias_historicas.length === 0) logError(`Faltan mas_presencias en ${equipoId}`);

    // Validar canchas/estadios
    if (equipo.canchas && equipo.canchas.length > 0) {
        if (equipo.canchas[0].imagen) {
             checkFileExists(equipo.canchas[0].imagen, `Estadio de ${equipoId}`);
        }
    }

    // Validar equipacion (solo que exista)
    if (!equipo.equipacion || equipo.equipacion.length === 0) {
        logError(`Falta la equipacion para ${equipoId}`);
    }
});

// Check historial (enfrentamientos) and temporadas
const temporadasPath = path.join(baseDir, 'app', 'src', 'data', 'ligas', 'alemania_temporadas.json');
if (!fs.existsSync(temporadasPath)) logError(`Falta alemania_temporadas.json`);
else {
    const temp = JSON.parse(fs.readFileSync(temporadasPath, 'utf8'));
    if (!Array.isArray(temp) || temp.length === 0) logError(`Temporadas vacias o formato incorrecto`);
    else console.log(`[INFO] alemania_temporadas ok. (${temp.length} torneos registrados)`);
}

const enfrentamientosPath = path.join(baseDir, 'app', 'src', 'data', 'ligas', 'alemania_enfrentamientos.json');
if (!fs.existsSync(enfrentamientosPath)) logError(`Falta alemania_enfrentamientos.json`);
else {
    const enfs = JSON.parse(fs.readFileSync(enfrentamientosPath, 'utf8'));
    if (Object.keys(enfs).length === 0) logError(`Enfrentamientos vacios`);
    else console.log(`[INFO] enfrentamientos ok. (${Object.keys(enfs).length} llaves iteradas)`);
}

if (!hasErrors) {
    console.log('[SUCCESS] La Bundesliga fue revisada con la estructura correcta y todo esta de primera.');
} else {
    console.log('[WARNING] Se encontraron errores en la Bundesliga (version corregida).');
}
