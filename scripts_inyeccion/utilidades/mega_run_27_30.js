const fs = require('fs');

function extractTable(htmlText, startMarker, endMarker) {
    let startIdx = htmlText.indexOf(startMarker);
    if(startIdx === -1) {
        console.log("NOT FOUND:", startMarker);
        return [];
    }
    
    let endIdx = htmlText.indexOf(endMarker, startIdx);
    if(endIdx === -1) endIdx = startIdx + 4000;
    
    let block = htmlText.substring(startIdx, endIdx);
    let lines = block.split('\n');
    let res = [];
    
    lines.forEach(line => {
        let match = line.match(/^\s*(\d+)\.\s+(.*?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
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

let h20 = fs.readFileSync('rsssf1920s.html', 'utf8').replace(/\uFFFd/g, 'n').replace(/\r/g, '');

const tables = {
    '1927-pd': extractTable(h20, "1927</a> </h4>", "1928</a>"),
    '1928-pd': extractTable(h20, "1928</a></h4>", "1929</a>"),
    '1929-impar': extractTable(h20, "Secci", "Secci"),
    // Since Secci matches the first one, let's grab the raw block for 1929
};

// 1929 is tricky, let's just grab the block between 1929 and 1930
let block1929 = h20.substring(h20.indexOf("1929</a></h4>"), h20.indexOf("1930</a></h4>"));
let t1929 = [];
block1929.split('\n').forEach(line => {
    let match = line.match(/^\s*(\d+)\.\s+(.*?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
    if(match) {
        t1929.push({
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

let block1930 = h20.substring(h20.indexOf("1930</a></h4>"), h20.length);
let t1930 = [];
block1930.split('\n').forEach(line => {
    let match = line.match(/^\s*(\d+)\.\s+(.*?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
    if(match && t1930.length < 36) { // 1930 has 36 teams
        t1930.push({
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

const patchData = {
    '1927-pd': { t: tables['1927-pd'], c: "San Lorenzo de Almagro", sc: "Boca Juniors", obs: "*(1) El histórico torneo gigante de la Paz Institucional.*" },
    '1928-pd': { t: tables['1928-pd'], c: "Huracán", sc: "Boca Juniors", obs: "*(1) El campeonato de los 36 valientes. Huracán levanta el título.*" },
    '1929-pd': { t: t1929, c: "Gimnasia y Esgrima La Plata", sc: "Boca Juniors", obs: "*(1) El torneo se dividió en Sección Par y Sección Impar por cuestiones de calendario. Boca Juniors y Gimnasia LP ganaron sus respectivos grupos. En la gran final del 9 de febrero de 1930, Gimnasia venció a Boca 2-1 y se coronó Campeón.*" },
    '1930-pd': { t: t1930, c: "Boca Juniors", sc: "Estudiantes LP", obs: "*(1) El Canto de Cisne de la era amateur. Boca Juniors aplasta y se corona.*" }
};

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let counts = 0;
data.forEach(t => {
    let p = patchData[t.id];
    if (p && p.t && p.t.length >= 10) {
        t.tabla_posiciones = p.t;
        t.campeon = p.c;
        t.subcampeon = p.sc;
        t.obs = p.obs;
        counts++;
        console.log("Patched:", t.id, "Teams:", p.t.length);
    }
});

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
console.log("Total updated unified:", counts);
