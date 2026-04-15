const fs = require('fs');

const html = fs.readFileSync('rsssf1910s.html', 'utf8');

// I will manually extract the exact text block for 1913 FAF and AAF from the HTML since regex on RSSSF is tricky.
const rawFAF = `
 1. CA Estudiantes                  18  14   3   1  64: 16   31 (La Plata)
 2. Gimnasia y Esgrima BA           18  11   6   1  46: 19   28 (Buenos Aires)
 3. Argentino de Quilmes            18  12   3   3  38: 21   27 (Quilmes)
 4. Kimberley (Buenos Aires)        18   9   3   6  34: 31   21 (Buenos Aires)
 5. INDEPENDIENTE (Avellaneda)      18   7   5   6  39: 33   19 (Avellaneda)
 6. Hispano Argentino               18   8   1   9  21: 40   17 (Buenos Aires)
 7. Tigre                           18   6   3   9  23: 38   15 (Victoria)
 8. Porteño                         18   4   4  10  26: 32   12 (Buenos Aires)
 9. Atlanta                         18   3   2  13  33: 57    8 (Buenos Aires)
10. Sociedad Sportiva Argentina     18   0   2  16  15: 52    2 (Buenos Aires)
`;

const rawAAF = `
 1. RACING CLUB                     20  17   1   2  52:  6   35 (Avellaneda)
 2. San Isidro                      20  14   4   2  53: 15   32 (San Isidro)
 3. River Plate                     19  13   5   1  36: 12   31 (Buenos Aires)
 4. Boca Juniors                    19  12   3   4  35: 19   27 (Buenos Aires)
 5. Platense                        18   9   3   6  38: 32   21 (Buenos Aires)
 6. Belgrano Athletic               18   8   2   8  34: 16   18 (Buenos Aires)
 7. Quilmes                         19   8   2   9  29: 21   18 (Quilmes)
 8. Estudiantes (BA)                19   7   3   9  32: 32   17 (Buenos Aires)
 9. Estudiantil Porteño             19   7   3   9  43: 44   17 (Buenos Aires)
10. Banfield                        18   6   4   8  24: 36   16 (Banfield)
11. Comercio                        19   6   3  10  30: 42   15 (Buenos Aires)
12. Ferro Carril Oeste              17   2   5  10  22: 36    9 (Buenos Aires)
13. Ferrocarril Sud                 17   3   2  12  19: 54    8 (Avellaneda)
14. Olivos                          17   2   3  12  15: 51    7 (Olivos)
15. Riachuelo                       17   1   3  13  16: 62    5 (Buenos Aires)
`;

function parseTable(raw) {
    let lines = raw.trim().split('\n');
    let table = [];
    lines.forEach((line, index) => {
        line = line.trim();
        if(!line) return;
        // Parse " 1. CA Estudiantes  18  14   3   1  64: 16   31"
        // Regex to separate name, matches and stats
        let match = line.match(/^(\d+)\.\s+(.*?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
        if(match) {
            table.push({
                pos: parseInt(match[1]),
                equipo: match[2].trim().replace(/\(.*\)$/, '').trim(), // Remove location like "(La Plata)"
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

const t1913faf = parseTable(rawFAF);
const t1913aaf = parseTable(rawAAF);

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let fFound = false;
let aFound = false;
data.forEach(t => {
    if(t.id === '1913-faf') {
        t.tabla_posiciones = t1913faf;
        t.campeon = "Estudiantes (LP)";
        t.subcampeon = "Gimnasia y Esgrima (BA)";
        fFound = true;
    }
    if(t.id === '1913-aaf') {
        t.tabla_posiciones = t1913aaf;
        t.campeon = "Racing Club";
        t.subcampeon = "San Isidro";
        aFound = true;
    }
});

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

console.log("FAF Parsed:", t1913faf.length, "teams");
console.log("AAF Parsed:", t1913aaf.length, "teams");
console.log("1913 fully rebuilt precisely with GF and GC.");
