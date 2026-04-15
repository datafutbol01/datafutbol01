const fs = require('fs');
const path = require('path');
const Jimp = require(path.join(process.env.TEMP, 'v-cut', 'node_modules', 'jimp'));

const srcPath = 'D:\\escudos\\velez\\blog escudo 1.png';
const clubId = 'velez-sarsfield';
const destFolder = path.join(__dirname, '..', 'app', 'public', 'escudos', 'historicos', clubId);
const jsonPath = path.join(__dirname, '..', 'app', 'src', 'data', 'clubes', 'argentina', `${clubId}.json`);

if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

async function processImage() {
    try {
        const image = await Jimp.read(srcPath);
        const w = image.bitmap.width;
        const h = image.bitmap.height;
        const sliceW = Math.floor(w / 4);

        const history = [
            { ano: '1910', desc: "Primera camiseta oficial adoptando los colores italianos (verde, blanco y rojo) en homenaje a los orígenes fundacionales de los socios creadores." },
            { ano: '1914', desc: "Diseño histórico de transición y uso temprano previos a la adopción de la V icónica, portando colores identitarios en la primera etapa institucional." },
            { ano: '1933', desc: "Consolidación de la icónica 'V' azulada sobre el pecho blanco. Nace el diseño que identificaría a la institución velezana para toda la eternidad visual y deportiva del club." },
            { ano: '1945', desc: "Variante histórica del popular diseño de la V manteniendo la fidelidad al estilo característico del Fortín de Liniers en la era clásica." }
        ];

        let historicos = [];
        
        for (let i = 0; i < 4; i++) {
            const outName = `velez_${history[i].ano}.png`;
            const outPath = path.join(destFolder, outName);
            
            let clone = image.clone();
            clone.crop(i * sliceW, 0, sliceW, h);
            await clone.writeAsync(outPath);
            
            historicos.push({
                ano: history[i].ano,
                url: `/escudos/historicos/${clubId}/${outName}`,
                desc: history[i].desc
            });
        }

        const clubData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        let currentArr = clubData.evolucion_escudos || [];
        let currentObj = currentArr.find(e => e.ano === 'Actualidad');
        if (!currentObj) {
            currentObj = { ano: 'Actualidad', url: `/escudos/velez-sarsfield.png`, desc: `Escudo oficial actual de Vélez Sarsfield.` };
        }

        clubData.evolucion_escudos = [currentObj, ...historicos];
        fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2));
        
        console.log('✅ 4 camisetas de Vélez cortadas e integradas.');
    } catch (err) {
        console.error('Error al procesar la imagen de Velez', err);
    }
}
processImage();
