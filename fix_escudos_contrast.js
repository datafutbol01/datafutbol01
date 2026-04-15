const fs = require('fs');
const path = require('path');

const clubesDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';

const swaps = {
    "juventus": "Juventus_FC_logo_w29.webp",
    "hellas-verona": "Hellas_Verona_logo.svg",
    "napoli": "SSC_Napoli.svg.webp"
};

for (const [clubId, newShield] of Object.entries(swaps)) {
    const jsonPath = path.join(clubesDir, clubId + '.json');
    if (!fs.existsSync(jsonPath)) continue;

    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    // Find the old one to demote, and new one to promote
    const newShieldUrl = `/escudos_historicos/${clubId}/${newShield}`;
    
    data.evolucion_escudos.forEach(e => {
        if (e.ano === "Actualidad") e.ano = "Histórico"; // Demote current
        if (e.url === newShieldUrl) e.ano = "Actualidad"; // Promote new
    });
    
    data.datos.escudo_actual = newShieldUrl;
    
    // Check if the new URL wasn't in evolucion at all
    if (!data.evolucion_escudos.find(e => e.url === newShieldUrl)) {
        data.evolucion_escudos.push({
            ano: "Actualidad",
            url: newShieldUrl,
            descripcion: "Escudo histórico"
        });
    }

    // Re-sort
    data.evolucion_escudos.sort((a,b) => {
        if (a.ano === "Actualidad") return 1;
        if (b.ano === "Actualidad") return -1;
        if (a.ano === "Histórico") return -1;
        if (b.ano === "Histórico") return 1;
        return parseInt(a.ano) - parseInt(b.ano);
    });

    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Corregido ${clubId} a: ${newShield}`);
}
