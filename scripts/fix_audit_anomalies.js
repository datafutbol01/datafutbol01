const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

let t2021 = data.find(t => t.anio === '2021' && t.torneo === 'Liga');
if (t2021) {
    t2021.campeon = "River Plate";
    t2021.tabla_posiciones = [
        {"pos": 1, "equipo": "River Plate", "pts": 54, "pj": 25, "pg": 16, "pe": 6, "pp": 3},
        {"pos": 2, "equipo": "Defensa y Justicia", "pts": 47, "pj": 25, "pg": 13, "pe": 8, "pp": 4},
        {"pos": 3, "equipo": "Talleres (C)", "pts": 46, "pj": 25, "pg": 14, "pe": 4, "pp": 7},
        {"pos": 4, "equipo": "Boca Juniors", "pts": 41, "pj": 25, "pg": 11, "pe": 8, "pp": 6},
        {"pos": 5, "equipo": "Velez Sarsfield", "pts": 39, "pj": 25, "pg": 10, "pe": 9, "pp": 6},
        {"pos": 6, "equipo": "Estudiantes (LP)", "pts": 39, "pj": 25, "pg": 10, "pe": 9, "pp": 6},
        {"pos": 7, "equipo": "Colon", "pts": 39, "pj": 25, "pg": 11, "pe": 6, "pp": 8},
        {"pos": 8, "equipo": "Huracan", "pts": 38, "pj": 25, "pg": 10, "pe": 8, "pp": 7},
        {"pos": 9, "equipo": "Independiente", "pts": 38, "pj": 25, "pg": 10, "pe": 8, "pp": 7},
        {"pos": 10, "equipo": "Lanus", "pts": 37, "pj": 25, "pg": 10, "pe": 7, "pp": 8},
        {"pos": 11, "equipo": "Gimnasia (LP)", "pts": 36, "pj": 25, "pg": 9, "pe": 9, "pp": 7},
        {"pos": 12, "equipo": "Union", "pts": 34, "pj": 25, "pg": 10, "pe": 4, "pp": 11},
        {"pos": 13, "equipo": "Aldosivi", "pts": 33, "pj": 25, "pg": 10, "pe": 3, "pp": 12},
        {"pos": 14, "equipo": "Argentinos", "pts": 32, "pj": 25, "pg": 8, "pe": 8, "pp": 9},
        {"pos": 15, "equipo": "Racing Club", "pts": 32, "pj": 25, "pg": 8, "pe": 8, "pp": 9},
        {"pos": 16, "equipo": "Rosario Central", "pts": 32, "pj": 25, "pg": 8, "pe": 8, "pp": 9},
        {"pos": 17, "equipo": "Godoy Cruz", "pts": 31, "pj": 25, "pg": 8, "pe": 7, "pp": 10},
        {"pos": 18, "equipo": "Platense", "pts": 31, "pj": 25, "pg": 7, "pe": 10, "pp": 8},
        {"pos": 19, "equipo": "Newells Old Boys", "pts": 28, "pj": 25, "pg": 7, "pe": 7, "pp": 11},
        {"pos": 20, "equipo": "Banfield", "pts": 27, "pj": 25, "pg": 5, "pe": 12, "pp": 8},
        {"pos": 21, "equipo": "San Lorenzo", "pts": 27, "pj": 25, "pg": 7, "pe": 6, "pp": 12},
        {"pos": 22, "equipo": "Central Cordoba (SdE)", "pts": 26, "pj": 25, "pg": 6, "pe": 8, "pp": 11},
        {"pos": 23, "equipo": "Patronato", "pts": 25, "pj": 25, "pg": 5, "pe": 10, "pp": 10},
        {"pos": 24, "equipo": "Sarmiento (J)", "pts": 24, "pj": 25, "pg": 6, "pe": 6, "pp": 13},
        {"pos": 25, "equipo": "Atletico Tucuman", "pts": 22, "pj": 25, "pg": 5, "pe": 7, "pp": 13},
        {"pos": 26, "equipo": "Arsenal", "pts": 21, "pj": 25, "pg": 4, "pe": 9, "pp": 12}
    ];
}

let ptsSwappedCount = 0;
for (let t of data) {
    if(!t.tabla_posiciones || t.tabla_posiciones.length === 0) continue;
    
    // Corregir la inversión sistemática de Puntos y PJ en los datos sacados de wikipedia (1930s-1960s)
    let p1 = t.tabla_posiciones[0];
    let pMid = t.tabla_posiciones[Math.floor(t.tabla_posiciones.length / 2)];
    
    // Si el primero tiene muchisimos más "PJ" que "PTS", y los equipos son ~18 (alrededor de 34 partidos reales)
    // Ejemplo Boca 50 PJ, 36 PTS. Deberia ser 50 PTS, 34 PJ (!). En la wiki, la columna 3 era PJ y la 4 PG.
    // Si mi scraper leyó PJ=50, entonces la columna PJ de Wiki en realidad era PTS.
    // Y la columna PTS extraída? Era dif de goles u otra cosa.
    // La fórmula correcta: PJ siempre es constante y aprox (numTeams-1)*2 en torneos largos.
    
    if (p1.pj > 40 && p1.pts < 40 && t.tabla_posiciones.length <= 20 && pMid.pj > pMid.pts && t.anio > "1928" && t.anio < "1965") {
        const truePjLength = (t.tabla_posiciones.length - 1) * 2;
        
        t.tabla_posiciones.forEach(r => {
            // El valor de "r.pj" que levantó el bot, en realidad es el puntaje de la tabla.
            r.pts = r.pj;
            
            // Y los partidos jugados deberían ser la suma de PG+PE+PP (que el bot sí leyó bien porque estaban en orden)
            let sumPj = r.pg + r.pe + r.pp;
            if (sumPj === 0 || isNaN(sumPj)) sumPj = r.pts > 0 ? truePjLength : 0; // fallback
            
            r.pj = sumPj > 0 ? sumPj : truePjLength;
        });
        ptsSwappedCount++;
    }
}

// Limpiar Goleadores en Restauracion
for (let t of data) {
    if(t.goleadores && t.goleadores.length > 0 && t.goleadores[0].nombre === "Dato en Restauración") {
        t.goleadores = []; // Remove placeholder
    }
}

fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
console.log(`Corregido torne 2021. Puntos swapeados en ${ptsSwappedCount} torneos históricos. Eliminados placeholders de goleadores.`);
