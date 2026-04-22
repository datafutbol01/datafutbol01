const fs = require('fs');

const raw1914AAF = `
 1. RACING CLUB                     12  11   1   0  42:  7   23 (Avellaneda)
 2. Estudiantes (BA)                12  10   1   1  34: 12   21 (Buenos Aires)
 3. Boca Juniors                    12   5   5   2  19: 11   15 (Buenos Aires)
 4. San Isidro                      12   2   7   3  10: 12   11 (San Isidro)
 5. River Plate                     12   4   3   5  15: 15   11 (Buenos Aires)
 6. Platense                        12   4   2   6  14: 17   10 (Buenos Aires)
 7. Belgrano Athletic               12   3   2   7  14: 20    8 (Buenos Aires)
 8. Ferro Carril Oeste              12   2   2   8  17: 30    6 (Buenos Aires)
 9. Estudiantil Porteño             12   2   1   9  14: 39    5 (Buenos Aires)
10. Comercio                        12   1   3   8  13: 34    5 (Buenos Aires)
11. Huracán                         12   1   3   8   8: 29    5 (Buenos Aires)
12. Quilmes                         12   1   2  10  12: 50    4 (Quilmes)
13. Banfield                        12   0   0  12   0: 12    0 (Banfield)
14. Ferrocarril Sud                      disjoined              (Avellaneda)
15. Olivos                               disjoined              (Olivos)
16. Riachuelo                            disjoined              (Buenos Aires)
`;

const raw1914FAF = `
 1. PORTEÑO                         14  10   4   0  46: 18   24 (Buenos Aires)
 2. Estudiantes LP                  14   9   3   2  31: 16   21 (La Plata)
 3. INDEPENDIENTE                   14   7   5   2  27: 13   19 (Avellaneda)
 4. Kimberley (Buenos Aires)        14   5   2   7  21: 39   12 (Buenos Aires)
 5. Gimnasia y Esgrima BA           14   4   3   7  19: 20   11 (Buenos Aires)
 6. Hispano Argentino               14   4   3   7  25: 29   11 (Buenos Aires)
 7. Atlanta                         14   4   2   8  21: 33   10 (Buenos Aires)
 8. Floresta                        14   1   2  11  11: 33    4 (Buenos Aires)
`;

function parseTable(raw) {
    let lines = raw.trim().split('\n');
    let table = [];
    lines.forEach((line, index) => {
        line = line.trim();
        if(!line) return;
        let match = line.match(/^(\d+)\.\s+(.*?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
        if(match) {
            table.push({
                pos: parseInt(match[1]),
                equipo: match[2].trim().replace(/\(.*\)$/, '').trim(),
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
    return table;
}

const t1914faf = parseTable(raw1914FAF);
const t1914aaf = parseTable(raw1914AAF);

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

data.forEach(t => {
    if(t.id === '1914-faf') {
        t.tabla_posiciones = t1914faf;
        t.campeon = "Porteño";
        t.subcampeon = "Estudiantes (LP)";
    }
    if(t.id === '1914-aaf') {
        t.tabla_posiciones = t1914aaf;
        t.campeon = "Racing Club";
        t.subcampeon = "Estudiantes (BA)";
    }
});

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

console.log("FAF 1914 Parsed:", t1914faf.length, "teams");
console.log("AAF 1914 Parsed:", t1914aaf.length, "teams");
console.log("1914 fully rebuilt precisely with GF and GC.");
