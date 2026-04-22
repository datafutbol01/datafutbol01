const fs = require('fs');
const filePath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let anomalies = [];

data.forEach(t => {
    let equiposSet = new Set();
    let duplicates = new Set();
    let zeroPtsTeams = 0;
    
    if (!t.tabla_posiciones) return;
    
    t.tabla_posiciones.forEach(row => {
        if (!row.equipo) return;
        
        let equipo = row.equipo.trim();
        
        if (equiposSet.has(equipo)) {
            duplicates.add(equipo);
        }
        equiposSet.add(equipo);
        
        if (row.pts === 0 && row.pj === 0) {
            zeroPtsTeams++;
        }
    });
    
    if (duplicates.size > 0 || zeroPtsTeams > 3) {
        anomalies.push({
            id: t.id,
            torneo: t.torneo,
            anio: t.anio,
            duplicates: Array.from(duplicates),
            tabla_length: t.tabla_posiciones.length,
            zeroPtsTeams: zeroPtsTeams
        });
    }
});

console.log(JSON.stringify(anomalies, null, 2));
