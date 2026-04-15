const fs = require('fs');
const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
let data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

let restored = 0;

for (let t of data) {
    if (t.tabla_posiciones && t.tabla_posiciones.length > 0) {
        let isCorrupt = false;
        
        // Corrupted pattern: PJ, PG, PE, PP no sumen PJ
        let row = t.tabla_posiciones[0];
        
        // Also the specific corruption from the scraper:
        // json.pg == Real_PJ.
        // If all teams in this tournament have similar json.pg (which is actually PJ max, maybe 24 or 34 for everyone):
        // Wait, not all teams played 24.
        // The most foolproof check:
        // is 2 * json.pe + json.pp === json.pj?
        // (Because Real_Pts = Real_PG*2 + Real_PE  -->  json.pj = json.pe*2 + json.pp)
        // Let's test this!
        let mathMatchesShift = (row.pe * 2 + row.pp === row.pj) || ((row.pe * 2 + row.pp) === row.pj - 1) || ((row.pe * 2 + row.pp) === row.pj + 1);

        // If it's the 1919-1960 era shift:
        // REAL: PJ = json.pg | PG = json.pe | PE = json.pp | Pts = json.pj | PP = json.pg - json.pe - json.pp
        
        // Let's check how many rows fit this strict mathematical shift.
        let shiftMatches = 0;
        let totalCheck = Math.min(10, t.tabla_posiciones.length);
        
        for (let i = 0; i < totalCheck; i++) {
            let r = t.tabla_posiciones[i];
            let testPts = r.pj;
            let testPj = r.pg;
            let testPg = r.pe;
            let testPe = r.pp;
            let expectedPts = testPg * 2 + testPe;
            
            // Allow 1 or 2 points margin for "Tribunal de Disciplina" point deductions
            if (Math.abs(expectedPts - testPts) <= 2) {
                shiftMatches++;
            }
        }
        
        // If 80% of rows match the shift math, it is DEFINITELY shifted!
        if (shiftMatches >= totalCheck * 0.8) {
            isCorrupt = true;
        }

        if (isCorrupt) {
             t.tabla_posiciones.forEach(r => {
                 let realPts = r.pj;
                 let realPj = r.pg;
                 let realPg = r.pe;
                 let realPe = r.pp;
                 let realPp = realPj - realPg - realPe;
                 // Prevent negative
                 if (realPp < 0) realPp = 0;
                 
                 r.pts = realPts;
                 r.pj = realPj;
                 r.pg = realPg;
                 r.pe = realPe;
                 r.pp = realPp;
             });
             restored++;
             console.log(`Corregido Matemáticamente: ${t.anio} ${t.torneo} | Campeón Pts:${row.pts} PJ:${row.pj}->${row.pg}`);
        }
    }
}

console.log(`\n¡RESTAURACION MATEMÁTICA COMPLETADA! ${restored} problemas estadísticos curados.`);
fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
