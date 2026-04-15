const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

const testYears = ["1891", "1901", "1911", "1921", "1931", "1941", "1951", "1961", "1971", "1981", "1991", "2001", "2011", "2021"];
let report = "=== REPORTE DE AUDITORÍA DECENAL (1891 - 2021) ===\n\n";

for (const y of testYears) {
    const torneos = data.filter(d => d.anio === y || (d.anio && d.anio.startsWith(y)));
    report += `\n--- AÑO ${y} (${torneos.length} torneos encontrados) ---\n`;
    
    for (const t of torneos) {
        report += `Torneo: ${t.torneo}\n`;
        report += `Campeón: ${t.campeon}\n`;
        
        let tableStr = "Tabla vacía o inexistente.";
        let errs = [];
        if (t.tabla_posiciones && t.tabla_posiciones.length > 0) {
            const numTeams = t.tabla_posiciones.length;
            const top3 = t.tabla_posiciones.slice(0,3).map(r => `${r.pos}. ${r.equipo} (${r.pts} pts, ${r.pj} PJ)`).join(" | ");
            tableStr = `[${numTeams} equipos] Top 3: ${top3}`;
            
            // Basic heuristic tests:
            const maxPj = Math.max(...t.tabla_posiciones.map(r => r.pj || 0));
            if (numTeams < Math.floor(maxPj/2)) errs.push(`Posible tabla truncada (PJ: ${maxPj}, Eq: ${numTeams})`);
            const p1 = t.tabla_posiciones[0];
            const pLast = t.tabla_posiciones[t.tabla_posiciones.length - 1];
            if (p1.pts < pLast.pts && p1.pts > 0) errs.push(`El último tiene más puntos que el primero`);
            if (p1.pts > 100 || p1.pts < 0) errs.push(`Puntos anormales en el #1 (${p1.pts})`);
        }
        report += `Tabla: ${tableStr}\n`;
        if (errs.length > 0) report += `> ALERTAS: ${errs.join(', ')}\n`;
        
        let golsStr = "No hay goleadores registrados.";
        if (t.goleadores && t.goleadores.length > 0) {
            golsStr = t.goleadores.map(g => `${g.nombre} (${g.equipo}) - ${g.goles} goles`).join(", ");
        }
        report += `Goleadores: ${golsStr}\n\n`;
    }
}

fs.writeFileSync('c:/Users/gonza/futbolhistoria/clubes/scripts/audit_report.txt', report);
console.log('Auditoria generada.');
