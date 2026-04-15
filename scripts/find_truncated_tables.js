const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json', 'utf8'));

const truncated = [];
data.forEach(t => {
    if (t.tabla_posiciones && t.tabla_posiciones.length > 0) {
       const maxPj = Math.max(...t.tabla_posiciones.map(r => r.pj));
       const numTeams = t.tabla_posiciones.length;
       
       // In a single round robin, teams play N-1 games. Double round robin they play 2*(N-1)
       // Let's assume single round robin as worst-case scenario: min expected teams = maxPj / 2 + 1
       // Actually, safely we can assume min Expected Teams = (maxPj) / 2
       const minExpectedTeams = Math.floor(maxPj / 2); // conservative
       
       // Another clear heuristic: If there are descensos listed, but they are not in the table
       const missingDescensos = t.descensos && t.descensos.length > 0 && t.descensos.some(d => !t.tabla_posiciones.some(row => row.equipo.includes(d)));

       if (numTeams <= minExpectedTeams || missingDescensos) {
           truncated.push({
               id: t.id,
               anio: t.anio,
               torneo: t.torneo,
               table_length: numTeams,
               max_pj: maxPj,
               missing_descensos: missingDescensos
           });
       }
    }
});
console.log(JSON.stringify(truncated, null, 2));
