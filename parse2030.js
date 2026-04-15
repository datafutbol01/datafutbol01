const fs = require('fs');

function extractTablesFromAtoB(_html, startStr, endStr) {
    let startIdx = _html.indexOf(startStr);
    if(startIdx === -1) return [];
    let endIdx = _html.indexOf(endStr, startIdx);
    if(endIdx === -1) endIdx = startIdx + 3000;
    
    let block = _html.substring(startIdx, endIdx);
    let lines = block.split('\n');
    let res = [];
    lines.forEach(line => {
        let match = line.match(/^\s*(\d+)\.\s+([A-Za-zñÑáéíóúÁÉÍÓÚ\s\(\)]+?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
        if(match) {
            res.push({
                pos: parseInt(match[1]),
                equipo: match[2].trim().replace(/\([^\)]+\)$/, '').trim(),
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

let h20 = fs.readFileSync('rsssf1920s.html', 'utf8').replace(/\r/g, '');
let h30 = fs.readFileSync('rsssf1930s.html', 'utf8').replace(/\r/g, '');

let t1921aamf = extractTablesFromAtoB(h20, "Asociación Amateurs de Football - 1921", "Asociación Argentina de Football");
if (t1921aamf.length === 0) {
    // Retry with different encode/accent
    t1921aamf = extractTablesFromAtoB(h20, "Asociacin Amateurs de Football - 1921", "Asociacin");
}
let t1926aamf = extractTablesFromAtoB(h20, "Asociacin Amateurs de Football - 1926", "Goleadores");
let t1931aaf = extractTablesFromAtoB(h30, "Asociacin Argentina de Football (Amateurs y Profesionales) - 1931", "Campeonato de Honor");
let t1936cc = extractTablesFromAtoB(h30, "Copa Campeonato 1936", "Copa de Oro 1936");

const out = { t1921aamf, t1926aamf, t1931aaf, t1936cc };
fs.writeFileSync('clean_data.json', JSON.stringify(out, null, 2));

console.log("Teams found:");
console.log("21 AAmF:", t1921aamf.length);
console.log("26 AAmF:", t1926aamf.length);
console.log("31 AAF:", t1931aaf.length);
console.log("36 CC:", t1936cc.length);
