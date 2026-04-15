const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\gonza\\.gemini\\antigravity\\brain\\d390307d-9606-4a30-9dab-d1694e557c1c';
const appDir = 'c:\\Users\\gonza\\futbolhistoria\\clubes\\app';
const historicosDir = path.join(appDir, 'public', 'escudos_historicos');
const jsonDir = path.join(appDir, 'src', 'data', 'clubes', 'espania');

const files = [
    { name: 'osasuna_1920_1775398927657.png', club: 'osasuna', year: '1920' },
    { name: 'osasuna_1925_1775398928984.png', club: 'osasuna', year: '1925' },
    { name: 'osasuna_1929_1775398930327.png', club: 'osasuna', year: '1929' },
    { name: 'osasuna_1931_1775398931720.png', club: 'osasuna', year: '1931' },
    { name: 'mallorca_1916_23_1775398959381.png', club: 'mallorca', year: '1916' },
    { name: 'mallorca_1916_1775398960582.png', club: 'mallorca', year: '1916' },
    { name: 'mallorca_1923_27_1775398961963.png', club: 'mallorca', year: '1923' },
    { name: 'mallorca_1927_31_1775398963258.png', club: 'mallorca', year: '1927' },
];

for (const {name, club, year} of files) {
    const src = path.join(srcDir, name);
    if (!fs.existsSync(src)) continue;

    const destDir = path.join(historicosDir, club);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive: true});

    const newFileName = `${club}_${year}_bot.png`;
    const dest = path.join(destDir, newFileName);
    fs.copyFileSync(src, dest);

    // Update JSON
    const jsonPath = path.join(jsonDir, `${club}.json`);
    if (fs.existsSync(jsonPath)) {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        if (!data.evolucion_escudos) data.evolucion_escudos = [];

        // Remove the generic 'Histórico' one if present
        data.evolucion_escudos = data.evolucion_escudos.filter(e => e.ano !== 'Histórico');

        // Extract Current
        const curIdx = data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad');
        let current = null;
        if (curIdx !== -1) current = data.evolucion_escudos.splice(curIdx, 1)[0];

        const fileUrl = `/escudos_historicos/${club}/${newFileName}`;
        if (!data.evolucion_escudos.some(e => e.url === fileUrl)) {
            data.evolucion_escudos.push({
                ano: year,
                url: fileUrl,
                desc: `Escudo usado en la época (${year}). Extraído desde Archivo Web.`
            });
        }

        data.evolucion_escudos.sort((a,b) => {
            const numA = parseInt(a.ano);
            const numB = parseInt(b.ano);
            if(!isNaN(numA) && !isNaN(numB)) return numA - numB;
            if(!isNaN(numA)) return -1;
            if(!isNaN(numB)) return 1;
            return 0;
        });

        if (current) data.evolucion_escudos.push(current);

        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
        console.log(`Injected ${year} into ${club}.json`);
    }
}
