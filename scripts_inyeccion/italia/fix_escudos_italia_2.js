const fs = require('fs');
const path = require('path');

const srcBase = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos';
const clubesDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';

const correctCurrentShields = {
    "atalanta": "AtalantaBC.webp",
    "bologna": "Bolognafc.svg",
    "cagliari": "Cagliari_Calcio_logo_(since_2015).svg",
    "como": "Como_1907_logo_(2019).svg",
    "cremonese": "US_Cremonese_logo.webp",
    "fiorentina": "ACF_Fiorentina_2022.webp",
    "genoa": "Genoa_CFC_logo_(2022).svg",
    "hellas-verona": "Logo_Hellas_Verona_FC_2020.webp",
    "inter": "FC_Internazionale_Milano_2021.webp",
    "juventus": "Juventus_FC_2020.webp",
    "lazio": "Stemma_della_Società_Sportiva_Lazio.svg",
    "lecce": "600px-Leccestemma.webp",
    "milan": "AC_Milan_1995.webp",
    "napoli": "SSC_Napoli_2024_29.svg.webp",
    "parma": "Parma_Calcio.webp",
    "pisa": "Pisa_Sporting_Club_logo.svg",
    "roma": "AS_Roma_2025_crest.webp",
    "sassuolo": "US_Sassuolo_Calcio_logo.svg",
    "torino": "Torino_FC_logo.svg",
    "udinese": "Udinese.webp"
};

const folders = Object.keys(correctCurrentShields);

for (const clubId of folders) {
    const jsonPath = path.join(clubesDir, clubId + '.json');
    if (!fs.existsSync(jsonPath)) continue;

    const srcFolder = path.join(srcBase, clubId);
    const destFolder = path.join(destBase, clubId);
    
    // Copy all files including SVGs
    if (fs.existsSync(srcFolder)) {
        const files = fs.readdirSync(srcFolder).filter(f => f.match(/\.(webp|png|jpg|jpeg|svg)$/i));
        files.forEach(f => {
            fs.copyFileSync(path.join(srcFolder, f), path.join(destFolder, f));
        });
        
        // Load JSON
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        const correctShield = correctCurrentShields[clubId];
        
        // Make sure it's in evolucion
        if (!data.evolucion_escudos) data.evolucion_escudos = [];
        
        // Clear old ones first to prevent duplicates
        const currentUrls = data.evolucion_escudos.map(e => e.url);
        files.forEach(f => {
            const shieldUrl = `/escudos_historicos/${clubId}/${f}`;
            if (!currentUrls.includes(shieldUrl)) {
                data.evolucion_escudos.push({
                    ano: f === correctShield ? "Actualidad" : "Histórico",
                    url: shieldUrl,
                    descripcion: "Escudo histórico"
                });
            } else {
                // If exists, make sure the "ano" is correct
                const p = data.evolucion_escudos.find(e => e.url === shieldUrl);
                if (p) {
                    p.ano = (f === correctShield) ? "Actualidad" : (p.ano === "Actualidad" ? "Histórico" : p.ano);
                }
            }
        });

        // Set the absolute current shield explicitly
        data.datos.escudo_actual = `/escudos_historicos/${clubId}/${correctShield}`;

        // Re-sort
        data.evolucion_escudos.sort((a,b) => {
            if (a.ano === "Actualidad") return 1;
            if (b.ano === "Actualidad") return -1;
            if (a.ano === "Histórico") return -1;
            if (b.ano === "Histórico") return 1;
            return parseInt(a.ano) - parseInt(b.ano);
        });

        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Corregido el escudo actual de ${clubId} a => ${correctShield}`);
    }
}
console.log("¡Corrección fina terminada!");
