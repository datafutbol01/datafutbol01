const fs = require('fs');
const path = require('path');

const srcBase = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos';
const clubesDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';

// Ensure dest base exists
if (!fs.existsSync(destBase)) fs.mkdirSync(destBase, { recursive: true });

const folders = fs.readdirSync(srcBase, { withFileTypes: true }).filter(d => d.isDirectory());

for (const folder of folders) {
    const clubId = folder.name;
    const jsonPath = path.join(clubesDir, clubId + '.json');
    if (!fs.existsSync(jsonPath)) continue;

    console.log(`Procesando escudos de: ${clubId}`);
    
    // Copy files
    const srcFolder = path.join(srcBase, clubId);
    const destFolder = path.join(destBase, clubId);
    if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

    const files = fs.readdirSync(srcFolder).filter(f => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    if (files.length === 0) continue;

    let currentShield = null;
    let maxYear = -1;

    let evolucion = [];

    files.forEach(f => {
        fs.copyFileSync(path.join(srcFolder, f), path.join(destFolder, f));

        // Find years
        const match = f.match(/(18|19|20)\d{2}/g);
        let foundYear = null;
        if (match) {
            foundYear = parseInt(match[match.length - 1]);
            if (foundYear > maxYear) {
                maxYear = foundYear;
                currentShield = f;
            }
        }

        evolucion.push({
            ano: foundYear ? String(foundYear) : "Histórico",
            url: `/escudos_historicos/${clubId}/${f}`,
            descripcion: "Escudo histórico"
        });
    });

    if (!currentShield) {
        currentShield = files.find(f => f.toLowerCase().includes('202')) 
                     || files.find(f => f.toLowerCase().includes('logo') && !f.toLowerCase().includes('old'))
                     || files[files.length - 1];
    } else {
        // Enforce that the actual current shield might just be the one with the 'actualidad' logic
        const currentYearRecord = evolucion.find(e => e.url.includes(currentShield));
        if (currentYearRecord && currentYearRecord.ano !== "Histórico") {
            currentYearRecord.ano = "Actualidad";
        }
    }

    // Sort evolucion by year
    evolucion.sort((a,b) => {
        if (a.ano === "Actualidad") return 1;
        if (b.ano === "Actualidad") return -1;
        if (a.ano === "Histórico") return -1;
        if (b.ano === "Histórico") return 1;
        return parseInt(a.ano) - parseInt(b.ano);
    });

    // Modificar JSON
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    if (!data.datos) data.datos = {};
    data.datos.escudo_actual = `/escudos_historicos/${clubId}/${currentShield}`;
    data.evolucion_escudos = evolucion;

    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log("¡Mapeo CPTizado de escudos de la Serie A completado!");
