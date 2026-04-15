const fs = require('fs');

function extractTablesFromAtoB(_html, startStr, endStr) {
    let startIdx = _html.indexOf(startStr);
    if(startIdx === -1) return [];
    let endIdx = endStr ? _html.indexOf(endStr, startIdx) : -1;
    if(endIdx === -1) endIdx = startIdx + 3000;
    
    let block = _html.substring(startIdx, endIdx);
    let lines = block.split('\n');
    let res = [];
    lines.forEach(line => {
        let match = line.match(/^\s*(\d+)\.\s+(.*?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
        if(match) {
            let equipo = match[2].trim();
            equipo = equipo.replace(/\([^\)]+\)$/, '').trim();
            res.push({
                pos: parseInt(match[1]),
                equipo: equipo,
                pj: parseInt(match[3]),
                pg: parseInt(match[4]),
                pe: parseInt(match[5]),
                pp: parseInt(match[6]),
                gf: parseInt(match[7]),
                gc: parseInt(match[8]),
                pts: parseInt(match[9])
            });
        }
    });
    return res;
}

let h20 = fs.readFileSync('rsssf1920s.html', 'utf8').replace(/\uFFFd/g, 'n');
let h30 = fs.readFileSync('rsssf1930s.html', 'utf8').replace(/\uFFFd/g, 'n');

let t1921aamf = extractTablesFromAtoB(h20, "Amateurs de Football - 1921", "1922");
let t1926aamf = extractTablesFromAtoB(h20, "Amateurs de Football - 1926", "1927");
let t1931aaf = extractTablesFromAtoB(h30, "Profesionales) - 1931", "1932");
let t1936cc = extractTablesFromAtoB(h30, "Copa Campeonato 1936", "Copa de Oro 1936");

// Write patches directly
const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let counts = 0;
data.forEach(t => {
    if(t.id === '1921-aamf' && t1921aamf.length > 5) { t.tabla_posiciones = t1921aamf; counts++; }
    if(t.id === '1926-aamf' && t1926aamf.length > 5) { t.tabla_posiciones = t1926aamf; counts++; }
    if(t.id === '1931-aaf' && t1931aaf.length > 5) { t.tabla_posiciones = t1931aaf; counts++; }
    if(t.id === '1936-cc' && t1936cc.length > 5) { t.tabla_posiciones = t1936cc; counts++; }
});

if(counts > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

console.log("Teams found:");
console.log("21 AAmF:", t1921aamf.length);
console.log("26 AAmF:", t1926aamf.length);
console.log("31 AAF:", t1931aaf.length);
console.log("36 CC:", t1936cc.length);
console.log("Patched", counts, "tournaments");
