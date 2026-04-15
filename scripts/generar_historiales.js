const fs = require('fs');
const path = require('path');

const clubesDir = path.join(__dirname, '../app/src/data/clubes/argentina');
const historialesPath = path.join(__dirname, '../app/src/data/ligas/argentina_enfrentamientos.json');

function start() {
    console.log('Iniciando generador de 435 historiales de Primera División...');

    // 1. Leer los archivos JSON de los clubes y sacar sus datos base
    const archivosClubes = fs.readdirSync(clubesDir).filter(f => f.endsWith('.json'));
    const clubes = [];
    
    for (const archivo of archivosClubes) {
        const contenido = fs.readFileSync(path.join(clubesDir, archivo), 'utf8');
        try {
            const club = JSON.parse(contenido);
            const nombre = club.datos?.nombre_corto || club.datos?.nombre_completo || club.id;
            
            // Buscar color predominante (el de la remera principal)
            let colorPrincipal = '#ffffff';
            if (club.equipacion && club.equipacion.length > 0) {
                const colores = club.equipacion[club.equipacion.length - 1]; // equipación más reciente
                colorPrincipal = colores.c1 || '#ffffff';
            }

            clubes.push({
                id: club.id,
                nombre: nombre,
                color: colorPrincipal
            });
        } catch(e) {
            console.error(`Error leyendo ${archivo}:`, e.message);
        }
    }

    console.log(`Leídos ${clubes.length} clubes correctamente.`);

    if (clubes.length !== 30) {
       console.log('ADVERTENCIA: No se encontraron 30 clubes (¡revisar la carpeta!) Encontrados:', clubes.length);
    }

    // 2. Leer historiales existentes (los 7 clásicos) para respetarlos 
    let historialesExistentes = [];
    if (fs.existsSync(historialesPath)) {
        historialesExistentes = JSON.parse(fs.readFileSync(historialesPath, 'utf8'));
    }

    const nuevosHistoriales = [];

    // 3. Generar cruces (Combinatoria nC2 = 30 * 29 / 2 = 435 cruces)
    for (let i = 0; i < clubes.length; i++) {
        for (let j = i + 1; j < clubes.length; j++) {
            const cAct = clubes[i];
            const cRiv = clubes[j];

            // Buscar si ya existe este cruce en el array viejo
            const cruzViejo = historialesExistentes.find(h => {
                // El ID de los viejos es onda `boca-river` o usan equipo_a / equipo_b comparado
                const byId = h.id === `${cAct.id}-${cRiv.id}` || h.id === `${cRiv.id}-${cAct.id}`;
                const byName = (h.equipo_a === cAct.nombre && h.equipo_b === cRiv.nombre) || 
                               (h.equipo_a === cRiv.nombre && h.equipo_b === cAct.nombre);
                
                // Hack para algunos ids viejos tipo "boca-river" que en id de club es "boca-juniors"-"river-plate"
                const idViejoParts = h.id ? h.id.split('-') : [];
                let fuzzyMatch = false;
                if (idViejoParts.length >= 2) {
                   const hasAct = idViejoParts.some(p => cAct.id.includes(p));
                   const hasRiv = idViejoParts.some(p => cRiv.id.includes(p));
                   fuzzyMatch = hasAct && hasRiv;
                }

                return byId || byName || fuzzyMatch;
            });

            if (cruzViejo) {
                // Si existe (Clásico), presérvalo exactamente igual, pero asegurate que los nombres coincidan exactamente con la DB para evitar bugs en UI.
                nuevosHistoriales.push({
                    ...cruzViejo,
                    // Si el orden viejo era inverso, mapealo bien
                    equipo_a: cAct.nombre,
                    equipo_b: cRiv.nombre,
                    // Si el viejo los tenia invertidos, invertir estadísticas:
                    victorias_a: (cruzViejo.equipo_a === cRiv.nombre) ? cruzViejo.victorias_b : cruzViejo.victorias_a,
                    victorias_b: (cruzViejo.equipo_a === cRiv.nombre) ? cruzViejo.victorias_a : cruzViejo.victorias_b,
                    color_a: (cruzViejo.equipo_a === cRiv.nombre) ? cruzViejo.color_b : cruzViejo.color_a,
                    color_b: (cruzViejo.equipo_a === cRiv.nombre) ? cruzViejo.color_a : cruzViejo.color_b
                });
            } else {
                // Generar scaffold para cruce sin datos aún.
                nuevosHistoriales.push({
                    id: `${cAct.id}-${cRiv.id}`,
                    nombre: "Enfrentamiento Histórico",
                    equipo_a: cAct.nombre,
                    equipo_b: cRiv.nombre,
                    color_a: cAct.color,
                    color_b: cRiv.color,
                    pj: 0,
                    victorias_a: 0,
                    victorias_b: 0,
                    empates: 0,
                    historia: "Registros en proceso de archivo para la gran enciclopedia histórica del fútbol argentino. Próximamente dispondremos de todas las estadísticas al detalle para este encuentro."
                });
            }
        }
    }

    // 4. Escribir resultados
    fs.writeFileSync(historialesPath, JSON.stringify(nuevosHistoriales, null, 2), 'utf8');
    console.log(`¡Éxito! Archivo argentina_enfrentamientos.json guardado con ${nuevosHistoriales.length} cruces.`);
}

start();
