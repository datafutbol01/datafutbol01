const fs = require('fs');

const data = JSON.parse(fs.readFileSync('app/src/data/ligas/escocia_temporadas.json', 'utf8')); 
const campeones = Array.from(new Set(data.map(d => d.campeon))).filter(c => c);

const aliasesText = `3rd lanark rv: third-lanark, third lanark: third-lanark, airdrie united: airdrieonians, airdrieonians (1878): airdrieonians, airdrieonians: airdrieonians, greenock morton: morton, dumbarton: dumbarton, vale of leven: vale-of-leven, clyde: clyde, east fife: east-fife, partick thistle: partick-thistle, queen's park: queen-s-park, queen s park: queen-s-park, raith rovers: raith-rovers, stenhousemuir: stenhousemuir, stranraer: stranraer, dunfermline athletic: dunfermline-athletic, hamilton academical: hamilton-academical, inverness ct: inverness-ct, inverness caledonian thistle: inverness-ct, queen of the south: queen-of-the-south, alloa athletic: alloa-athletic, st johnstone: st-johnstone, ross county: ross-county`;

const aliasMap = {};
aliasesText.split(',').forEach(p => {
    const match = p.split(':');
    if(match.length > 1) aliasMap[match[0].trim()] = match[1].trim();
});

const extMap = { 'ross-county': 'svg', 'st-johnstone': 'svg' };

const missing = [];
const resolvedFiles = [];
const allClubsDirs = fs.readdirSync('app/src/data/clubes/escocia').map(x => x.replace('.json', ''));

campeones.forEach(c => {
    const slug = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let aliasId = aliasMap[slug];
    
    let clubIdFromDir = slug.replace(/[^a-z0-9]/g, '-');
    let finalId = aliasId || clubIdFromDir;
    
    let fromJson = allClubsDirs.includes(finalId);
    let logo = '';

    if (fromJson) {
        const clubInfo = JSON.parse(fs.readFileSync(`app/src/data/clubes/escocia/${finalId}.json`, 'utf8'));
        if (clubInfo.datos && clubInfo.datos.escudo_actual) logo = clubInfo.datos.escudo_actual;
        else if (clubInfo.evolucion_escudos && clubInfo.evolucion_escudos.length > 0) {
            const actual = clubInfo.evolucion_escudos.find(e => e.ano === 'Actualidad' || e.ano === '2024');
            logo = actual ? actual.url : clubInfo.evolucion_escudos[0].url;
        } else {
            logo = `/escudos/${finalId}.png`;
        }
    } else if (aliasId) {
        logo = `/escudos/${aliasId}.${extMap[aliasId] || 'png'}`;
    } else {
        logo = `/escudos/${clubIdFromDir}.${extMap[clubIdFromDir] || 'png'}`;
    }
    
    if (logo.includes('/escudos/')) {
        const physicalPath = 'app/public' + logo;
        if (!fs.existsSync(physicalPath)) {
            missing.push({ team: c, path: physicalPath });
        } else {
            resolvedFiles.push({ team: c, path: physicalPath });
        }
    } else {
         // Should not happen for this specific log test
    }
});

console.log('MISSING FILES:', missing);
