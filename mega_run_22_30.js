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
let h30 = fs.readFileSync('rsssf1930s.html', 'utf8').replace(/\uFFFd/g, 'n').replace(/\r/g, '');

// Clean the newline splits that RSSSF sometimes does in 1920s file:
// e.g. "66 (Avellan\n neda)" -> this was breaking the regex because the line ends abruptly, but my regex doesn't match the parens anyway!

const tables = {
    '1922-aaf': extractTable(h20, "Copa Campeonato 1922", "Amateurs de Football - 1922"),
    '1922-aamf': extractTable(h20, "Amateurs de Football - 1922", "1923"),
    '1923-aaf': extractTable(h20, "Copa Campeonato 1923", "Amateurs de Football - 1923"),
    '1923-aamf': extractTable(h20, "Amateurs de Football - 1923", "1924"),
    '1924-aaf': extractTable(h20, "Copa Campeonato 1924", "Amateurs de Football - 1924"),
    '1924-aamf': extractTable(h20, "Amateurs de Football - 1924", "1925"),
    '1925-aaf': extractTable(h20, "Copa Campeonato 1925", "Amateurs de Football - 1925"),
    '1925-aamf': extractTable(h20, "Amateurs de Football - 1925", "1926"),
    '1926-aaf': extractTable(h20, "Copa Campeonato 1926", "Amateurs de Football - 1926"),
    '1926-aamf': extractTable(h20, "Amateurs de Football - 1926", "1927"),
    '1927-pd': extractTable(h20, "Amateurs y Profesionales) - 1927", "1928"),
    '1928-pd': extractTable(h20, "Amateurs y Profesionales) - 1928", "1929"),
    '1929-pd-impar': extractTable(h20, "Seccion Impar", "Seccion Par"),
    '1929-pd-par': extractTable(h20, "Seccion Par", "Campeonato de Honor"),
    '1930-pd': extractTable(h20, "Amateurs y Profesionales) - 1930", "1931")
};

const final1929 = [...tables['1929-pd-impar'], ...tables['1929-pd-par']];
// 1929 ranking inside the array is 1-18 and 1-17. Let's fix 'pos' to be sequential just for structure.
// Actually historical rankings in grouped tournaments keep group positions. Let's just keep them!

const patchData = {
    '1922-aaf': { t: tables['1922-aaf'], c: "Huracán", sc: "Sportivo Palermo" },
    '1922-aamf': { t: tables['1922-aamf'], c: "Independiente", sc: "River Plate" },
    '1923-aaf': { t: tables['1923-aaf'], c: "Boca Juniors", sc: "Huracán" },
    '1923-aamf': { t: tables['1923-aamf'], c: "San Lorenzo de Almagro", sc: "Independiente" },
    '1924-aaf': { t: tables['1924-aaf'], c: "Boca Juniors", sc: "Temperley" },
    '1924-aamf': { t: tables['1924-aamf'], c: "San Lorenzo de Almagro", sc: "Gimnasia y Esgrima La Plata" },
    '1925-aaf': { t: tables['1925-aaf'], c: "Huracán", sc: "Nueva Chicago" },
    '1925-aamf': { t: tables['1925-aamf'], c: "Racing Club", sc: "San Lorenzo de Almagro" },
    '1926-aaf': { t: tables['1926-aaf'], c: "Boca Juniors", sc: "Argentinos Juniors" },
    '1926-aamf': { t: tables['1926-aamf'], c: "Independiente", sc: "San Lorenzo de Almagro" },
    '1927-pd': { t: tables['1927-pd'], c: "San Lorenzo de Almagro", sc: "Boca Juniors" },
    '1928-pd': { t: tables['1928-pd'], c: "Huracán", sc: "Boca Juniors" },
    '1929-pd': { t: final1929, c: "Gimnasia y Esgrima La Plata", sc: "Boca Juniors" },
    '1930-pd': { t: tables['1930-pd'], c: "Boca Juniors", sc: "Estudiantes LP" },
};

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let counts = 0;
data.forEach(t => {
    let p = patchData[t.id];
    if (p && p.t && p.t.length > 5) {
        t.tabla_posiciones = p.t;
        t.campeon = p.c;
        t.subcampeon = p.sc;
        counts++;
        console.log("Patched:", t.id, "Teams:", p.t.length);
    }
});

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
console.log("Total updated:", counts);
