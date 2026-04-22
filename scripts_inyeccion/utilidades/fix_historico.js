const fs = require('fs');
const path = require('path');

const baseDirs = [
    path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania'),
    path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra')
];

function extractYearFix(str) {
    const m = str.match(/(?:^|_|-|\b|%20)(18|19|20)\d{2}(?:_|-|\b|%20|\.|$)/);
    if(m) return m[1] + str.substr(m.index + m[1].length, 2);
    // fallback if we can find any 4 digits starting with 18, 19, 20
    const lazy = str.match(/(18|19|20)\d{2}/);
    if(lazy) return lazy[0];
    return 'Histórico';
}

for (const dir of baseDirs) {
    if(!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    for (const f of files) {
        const p = path.join(dir, f);
        const data = JSON.parse(fs.readFileSync(p, 'utf8'));
        if (data.evolucion_escudos && data.evolucion_escudos.length > 0) {
            let changed = false;
            for (let i = 0; i < data.evolucion_escudos.length; i++) {
                if (data.evolucion_escudos[i].ano === 'Histórico') {
                    // try to extract from URL
                    const yr = extractYearFix(data.evolucion_escudos[i].url);
                    if (yr !== 'Histórico') {
                        data.evolucion_escudos[i].ano = yr;
                        data.evolucion_escudos[i].desc = `Escudo usado en la época (${yr}).`;
                        changed = true;
                    }
                }
            }
            if (changed) {
                // sort again
                data.evolucion_escudos.sort((a,b) => {
                    if (a.ano === 'Actualidad') return 1;
                    if (b.ano === 'Actualidad') return -1;
                    const numA = parseInt(a.ano);
                    const numB = parseInt(b.ano);
                    if(!isNaN(numA) && !isNaN(numB)) return numA - numB;
                    if(!isNaN(numA)) return -1;
                    if(!isNaN(numB)) return 1;
                    return 0;
                });
                fs.writeFileSync(p, JSON.stringify(data, null, 2));
                console.log('Fixed', f);
            }
        }
    }
}
