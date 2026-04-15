const fs = require('fs');

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let t1914aaf = null;
let found = false;

data.forEach(t => {
    if(t.id === '1914-aaf') {
        t1914aaf = t.tabla_posiciones;
        
        // Check if Ferrocarril Sud is already in there
        if (!t1914aaf.some(e => e.equipo === "Ferrocarril Sud")) {
            t1914aaf.push({ pos: 14, equipo: "Ferrocarril Sud", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0 });
            t1914aaf.push({ pos: 15, equipo: "Olivos", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0 });
            t1914aaf.push({ pos: 16, equipo: "Riachuelo", pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0 });
            found = true;
        }
        
        // Add observation context
        if(!t.obs) {
           t.obs = "*(1) Ferrocarril Sud, Olivos y Riachuelo fueron desafiliados/disueltos durante el torneo y quedaron con 0 puntos tras anularse su participación.*";
        }
    }
});

if(found) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    console.log("Appended missing desafiliated teams to 1914 AAF.");
} else {
    console.log("Teams were already there or 1914-aaf not found.");
}
