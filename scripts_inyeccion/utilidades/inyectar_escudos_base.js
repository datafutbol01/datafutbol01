const fs = require('fs');
const path = require('path');

const clubsData = {
    'dumbarton': 'Dumbarton Football Club',
    'inverness-ct': 'Inverness Caledonian Thistle Football Club',
    'dunfermline-athletic': 'Dunfermline Athletic Football Club',
    'east-fife': 'East Fife Football Club',
    'morton': 'Greenock Morton Football Club',
    'queen-s-park': "Queen's Park Football Club",
    'hamilton-academical': 'Hamilton Academical Football Club',
    'ross-county': 'Ross County Football Club',
    'st-johnstone': 'St Johnstone Football Club',
    'airdrieonians': 'Airdrieonians Football Club',
    'alloa-athletic': 'Alloa Athletic Football Club',
    'stranraer': 'Stranraer Football Club',
    // also ensuring these are considered if they don't exist:
    'partick-thistle': 'Partick Thistle Football Club',
    'clyde': 'Clyde Football Club',
    'raith-rovers': 'Raith Rovers Football Club',
    'stenhousemuir': 'Stenhousemuir Football Club',
    'queen-of-the-south': 'Queen of the South Football Club',
    'vale-of-leven': 'Vale of Leven Football Club',
    'third-lanark': 'Third Lanark Athletic Club'
};

const extMap = { 'ross-county': 'svg', 'st-johnstone': 'svg' };

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'escocia');
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

// Create missing JSONs
for (const [id, fullname] of Object.entries(clubsData)) {
    const file = path.join(baseDir, `${id}.json`);
    const ext = extMap[id] || 'png';
    const escudoUrl = `/escudos/${id}.${ext}`;
    
    if (!fs.existsSync(file)) {
        const data = {
            id,
            meta: { etiquetas: ['escocia', 'scottish', id] },
            datos: {
                nombre_completo: fullname,
                nombre_corto: fullname.replace(' Football Club', '').replace(' Athletic Club', ''),
                escudo_actual: escudoUrl,
            },
            evolucion_escudos: [
                {
                    ano: "Actualidad",
                    url: escudoUrl
                }
            ],
            historia: [],
            titulos: [],
            idolos: [],
            goleadores_historicos: [],
            presencias_historicas: []
        };
        fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Created: ${id}.json con escudo_actual`);
    }
}

// Update existing JSONs to inject escudo_actual
const existingFiles = fs.readdirSync(baseDir).filter(f => f.endsWith('.json'));
existingFiles.forEach(f => {
    const p = path.join(baseDir, f);
    const content = JSON.parse(fs.readFileSync(p, 'utf8'));
    
    let updated = false;
    
    // Check if escudo_actual is missing
    if (content.datos && !content.datos.escudo_actual) {
        let escudoUrl = `/escudos/${content.id}.png`;
        if (content.evolucion_escudos) {
            const actual = content.evolucion_escudos.find(e => e.ano === "Actualidad");
            if (actual && actual.url) escudoUrl = actual.url;
        }
        content.datos.escudo_actual = escudoUrl;
        updated = true;
    }
    
    if (updated) {
        fs.writeFileSync(p, JSON.stringify(content, null, 2), 'utf8');
        console.log(`Inyectado escudo_actual en: ${f}`);
    }
});

console.log("Proceso exitoso.");
