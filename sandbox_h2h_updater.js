const fs = require('fs');
const path = require('path');

// 1. EL LABORATORIO: Cargamos el archivo de enfrentamientos de Argentina
const DB_PATH = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let enfrentamientos = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

// 2. EL DICCIONARIO BÁSICO: Mapeamos los IDs numéricos de la API a los nombres exactos que tenés en tus JSON
const API_DICTIONARY = {
    451: "Boca Juniors",
    435: "Club Atlético River Plate",
    // Mañana llenaremos el resto...
};

// 3. LA NOTIFICACIÓN DE LA API (Ejemplo falso: Jugaron Boca y River, terminó 2-1 a favor de Boca)
const partidoTerminado = {
    fixture: {
        id: 999999,
        status: { short: "FT" } // Confirmado que terminó
    },
    teams: {
        home: { id: 451, name: "Boca Juniors", winner: true },
        away: { id: 435, name: "River Plate", winner: false }
    },
    goals: {
        home: 2, // Goles de Boca
        away: 1  // Goles de River
    }
};

console.log("=== INICIANDO CIRUGÍA DE HISTORIAL (LABORATORIO) ===");

// 4. EL MOTOR DE ACTUALIZACIÓN
function actualizarHistorial(partido) {
    if (partido.fixture.status.short !== 'FT') return; // Si no terminó, no hace nada

    const localAPI = partido.teams.home.id;
    const visitanteAPI = partido.teams.away.id;

    // Traducir los IDs a tus nombres oficiales
    const nombreLocal = API_DICTIONARY[localAPI];
    const nombreVisitante = API_DICTIONARY[visitanteAPI];

    if (!nombreLocal || !nombreVisitante) {
        console.log("⚠️ Equipos no encontrados en el diccionario. Se ignora el partido.");
        return;
    }

    // Buscar en tu base de datos madre el cruce exacto entre estos dos
    let cruceEncontrado = enfrentamientos.find(cruce => 
        (cruce.equipo_a === nombreLocal && cruce.equipo_b === nombreVisitante) ||
        (cruce.equipo_a === nombreVisitante && cruce.equipo_b === nombreLocal)
    );

    if (cruceEncontrado) {
        console.log(`\nCruce encontrado en tu JSON: ${cruceEncontrado.equipo_a} vs ${cruceEncontrado.equipo_b}`);
        console.log(`HISTORIAL ACTUAL: PJ:${cruceEncontrado.pj} | Victorias A:${cruceEncontrado.victorias_a} | Victorias B:${cruceEncontrado.victorias_b} | Empates: ${cruceEncontrado.empates}`);
        
        // Sumar 1 Partido Jugado
        cruceEncontrado.pj += 1;

        // Determinar quién es A y quién es B en tu JSON
        const esLocalElEquipoA = (cruceEncontrado.equipo_a === nombreLocal);

        // Actualizar Victorias / Empates
        if (partido.goals.home > partido.goals.away) {
            // Ganó Local
            if (esLocalElEquipoA) { cruceEncontrado.victorias_a += 1; cruceEncontrado.pg_a += 1; }
            else { cruceEncontrado.victorias_b += 1; cruceEncontrado.pg_b += 1; }
        } else if (partido.goals.home < partido.goals.away) {
            // Ganó Visitante
            if (esLocalElEquipoA) { cruceEncontrado.victorias_b += 1; cruceEncontrado.pg_b += 1; }
            else { cruceEncontrado.victorias_a += 1; cruceEncontrado.pg_a += 1; }
        } else {
            // Empate
            cruceEncontrado.empates += 1;
            cruceEncontrado.pe += 1;
        }

        // Sumar los Goles
        if (esLocalElEquipoA) {
            cruceEncontrado.goles_a += partido.goals.home;
            cruceEncontrado.goles_b += partido.goals.away;
        } else {
            cruceEncontrado.goles_b += partido.goals.home;
            cruceEncontrado.goles_a += partido.goals.away;
        }

        console.log(`\nNUEVO HISTORIAL: PJ:${cruceEncontrado.pj} | Victorias A:${cruceEncontrado.victorias_a} | Victorias B:${cruceEncontrado.victorias_b} | Empates: ${cruceEncontrado.empates}`);
        console.log(`Operación exitosa.`);
        
        // En un caso real, acá guardaríamos el archivo modificado:
        // fs.writeFileSync(DB_PATH, JSON.stringify(enfrentamientos, null, 2));

    } else {
        console.log(`⚠️ No se encontró el historial previo entre ${nombreLocal} y ${nombreVisitante}`);
    }
}

// Ejecutar prueba
actualizarHistorial(partidoTerminado);
