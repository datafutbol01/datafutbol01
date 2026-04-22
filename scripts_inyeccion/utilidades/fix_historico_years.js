const fs = require('fs');
const path = require('path');

const d = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';
const files = fs.readdirSync(d).filter(f => f.endsWith('.json'));

function extractYearFromName(url) {
    const f = url.toLowerCase();
    
    // Exact exact matches
    if (f.includes('1982-1987')) return '1982-1987';
    if (f.includes('1983-1990')) return '1983-1990';
    if (f.includes('1973_1983')) return '1973-1983';
    if (f.includes('1980-1986')) return '1980-1986';
    if (f.includes('1981-2001')) return '1981-2001';
    
    // Decades patterns
    if (f.includes('60-s-70-s') || f.includes('60s')) return '1960-1970';
    if (f.includes('70s') || f.includes('anni_70') || f.includes('anni70')) return '1970s';
    if (f.includes('anni_90')) return '1990s';
    if (f.includes('anni_50')) return '1950s';
    if (f.includes('1940s')) return '1940s';
    if (f.includes('1930s') || f.match(/_30[-_.]/)) return '1930s';
    
    // Specific matches missing out
    if (f.includes('1993')) return '1993';
    if (f.includes('1991')) return '1991';
    if (f.includes('1988')) return '1988';
    if (f.includes('1985')) return '1985';
    if (f.includes('1980')) return '1980';
    if (f.includes('1970')) return '1970';
    if (f.includes('1945')) return '1945';
    if (f.includes('1899')) return '1899';
    
    // Specific file matches by club
    if (f.includes('ac-torino-old-1')) return '1920s';
    if (f.includes('ac-torino-old-3')) return '1930s';
    if (f.includes('ac-torino-old-4')) return '1940s';
    
    if (f.includes('stemma_inter_29')) return '1929';
    if (f.includes('logo_inter_biscione')) return '1979'; // Il biscione era 1979
    if (f.includes('fc-internazionale-milano_old')) return '1908';
    if (f.includes('distintivo_milan_f.c._conio_anteguerra')) return '1930s';
    if (f.includes('milan_ac_29')) return '1929';
    if (f.includes('ac_napoli.svg')) return '1926'; // Base napoli
    
    return null;
}

files.forEach(file => {
    const p = path.join(d, file);
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    
    let changed = false;
    let fallbackDecade = 1910;

    data.evolucion_escudos.forEach(e => {
        if (e.ano === 'Histórico') {
            const extraYear = extractYearFromName(e.url);
            if (extraYear) {
                e.ano = extraYear;
            } else {
                // Generar año secuencial basado en décadas aproximadas
                e.ano = fallbackDecade + "s";
                fallbackDecade += 10;
            }
            changed = true;
        }
    });

    if (changed) {
        // Sort again
        data.evolucion_escudos.sort((a,b) => {
            if (a.ano === "Actualidad") return 1;
            if (b.ano === "Actualidad") return -1;
            
            const numA = parseInt(a.ano.match(/\d{4}/) ? a.ano.match(/\d{4}/)[0] : 0);
            const numB = parseInt(b.ano.match(/\d{4}/) ? b.ano.match(/\d{4}/)[0] : 0);
            return numA - numB;
        });

        fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Corregidos los años en ${file}`);
    }
});
