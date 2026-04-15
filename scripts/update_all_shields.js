const fs = require('fs');
const path = require('path');

const usbBaseDir = 'D:\\escudos';
const publicHistoricosDir = path.join(__dirname, '..', 'app', 'public', 'escudos', 'historicos');
const jsonBaseDir = path.join(__dirname, '..', 'app', 'src', 'data', 'clubes', 'argentina');

const mapping = {
    "argentinos juniors": "argentinos-jrs",
    "atletico tucuman": "atletico-tucuman",
    "banfield": "banfield",
    "barracas": "barracas-central",
    "belgrano cda": "belgrano-cba",
    "boca": "boca-juniors",
    "Central Cordoba": "central-cordoba",
    "defensa y justicia": "defensa-justicia",
    "estudiantes de la plata": "estudiantes-lp",
    "estudiantes de rio cuarto": "estudiantes-rc",
    "gimnasia": "gimnasia-lp",
    "gimnasia de mendoza": "gimnasia-mdz",
    "huracan": "huracan",
    "independiente": "independiente",
    "Independiente (m)": "independiente-rivadavia",
    "instituto": "instituto",
    "lanus": "lanus",
    "newells": "newells-old-boys",
    "platense": "platense",
    "racing": "racing-club",
    "riestra": "riestra",
    "river": "river-plate",
    "rosario central": "rosario-central",
    "sarmiento": "sarmiento-junin",
    "talleres": "talleres-cba",
    "tigre": "tigre",
    "union": "union",
    "velez": "velez-sarsfield"
};

let successCount = 0;

for (const [usbFolder, clubId] of Object.entries(mapping)) {
    const srcDir = path.join(usbBaseDir, usbFolder);
    const destDir = path.join(publicHistoricosDir, clubId);
    const jsonPath = path.join(jsonBaseDir, `${clubId}.json`);

    if (!fs.existsSync(srcDir)) continue;
    if (!fs.existsSync(jsonPath)) continue;

    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    let files;
    try { files = fs.readdirSync(srcDir); } catch(e) { continue; }

    const clubData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    let historicos = [];

    for (const file of files) {
        if (!file.match(/\.(png|jpg|jpeg|webp|svg|avif)$/i)) continue;
        
        let cleanName = file.replace(/ \(\d+\)/g, '').replace(/%3F/g, '-');
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, cleanName));
        
        let yearMatch = cleanName.match(/(\d{4})/);
        let year = yearMatch ? yearMatch[1] : '';
        
        if (!year) year = "Amateurismo/Histórico";
        
        historicos.push({
            ano: year,
            url: `/escudos/historicos/${clubId}/${cleanName}`,
            desc: `Diseño histórico representativo de la época de ${year}. En esta etapa, la institución deportiva afianzó gran parte de los elementos gráficos que la acompañarían en su futuro, conservando la esencia visual y popular que la identifica históricamente en los formatos oficiales elaborados a puño y dibujo manual.`
        });
    }

    historicos = historicos
        .filter(h => h.ano !== "Amateurismo/Histórico")
        .sort((a,b) => parseInt(a.ano) - parseInt(b.ano));

    let currentArr = clubData.evolucion_escudos || [];
    let currentObj = currentArr.find(e => e.ano === 'Actualidad');
    
    if (!currentObj) {
        if(currentArr.length > 0 && currentArr[0].ano === 'Actualidad') {
           currentObj = currentArr[0];
        } else {
           currentObj = { ano: 'Actualidad', url: `/escudos/${clubId}.png`, desc: `Escudo oficial actual de ${clubData.datos.nombre_completo}.` };
        }
    }

    // Force strict order! Actualidad ALWAYS goes at [0]
    clubData.evolucion_escudos = [currentObj, ...historicos];
    
    fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2));
    console.log(`✅ Procesado con éxito: ${clubId} -> importó ${historicos.length} imágenes`);
    successCount++;
}

console.log(`\n¡MIGRACIÓN FINALIZADA! Total de clubes actualizados: ${successCount}`);
