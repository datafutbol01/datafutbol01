const fs = require('fs');

const raw1919AAF = `
 1. BOCA JUNIORS                     8   8   0   0  29:  5   16 (Buenos Aires)
 2. Estudiantes LP                   8   3   1   4  10:  7    7 (La Plata)
 3. Huracán                          5   2   0   3   4: 11    4 (Buenos Aires)
 4. Eureka                           5   1   1   3   5:  6    3 (Buenos Aires)
 5. Sportivo Almagro                 4   1   1   2   4:  8    3 (Buenos Aires)
 6. Porteño                          6   1   1   4   5: 20    3 (Buenos Aires)
`;

const raw1919AAmF = `
 1. RACING CLUB                     13  13   0   0  43: 10   26 (Avellaneda)
 2. Vélez Sarsfield                 13   9   2   2  21:  8   20 (Buenos Aires)
 3. River Plate                     13   6   4   3  16: 11   16 (Buenos Aires)
 4. Defensores de Belgrano          13   6   4   3  20: 18   16 (Buenos Aires)
 5. Atlanta                         13   6   2   5  27: 17   14 (Buenos Aires)
 6. San Lorenzo de Almagro          13   5   3   5  22: 20   13 (Buenos Aires)
 7. Gimnasia y Esgrima La Plata     13   6   1   6  18: 19   13 (La Plata)
 8. Independiente                   13   5   2   6  22: 20   12 (Avellaneda)
 9. Platense                        13   5   2   6  22: 24   12 (Buenos Aires)
10. Sportivo Barracas               13   5   2   6  20: 23   12 (Buenos Aires)
11. Estudiantil Porteño             13   4   3   6  19: 21   11 (Buenos Aires)
12. Tigre                           13   4   1   8  17: 23    9 (Victoria)
13. San Isidro                      13   2   1  10  14: 27    5 (San Isidro)
14. Estudiantes (BA)                13   1   1  11   8: 48    3 (Buenos Aires)
`;

function parseTable(raw) {
    let table = [];
    raw.trim().split('\n').forEach(line => {
        let m = line.match(/^.*?(\d+)\.\s+([A-Za-zñÑáéíóúÁÉÍÓÚ\s\(\)]+?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+):\s*(\d+)\s+(\d+)/);
        if(m) {
            table.push({
                pos: parseInt(m[1]),
                equipo: m[2].trim().replace(/\([^\)]+\)$/, '').trim(),
                pj: parseInt(m[3]),
                pg: parseInt(m[4]),
                pe: parseInt(m[5]),
                pp: parseInt(m[6]),
                gf: parseInt(m[7]),
                gc: parseInt(m[8]),
                pts: parseInt(m[9])
            });
        }
    });
    return table;
}

const t1919aaf = parseTable(raw1919AAF);
const t1919aamf = parseTable(raw1919AAmF);

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let counts = 0;
data.forEach(t => {
    if(t.id === '1919-aaf') {
        t.tabla_posiciones = t1919aaf;
        t.campeon = "Boca Juniors";
        t.subcampeon = "Estudiantes LP";
        t.obs = "*(1) Año del Gran Cisma. 13 clubes se escindieron de la AAF. El torneo original fue anulado y debió reiniciarse con los 6 equipos que se mantuvieron fieles a la Asociación, consagrando a Boca Juniors.*";
        counts++;
    }
    if(t.id === '1919-aamf') {
        t.tabla_posiciones = t1919aamf;
        t.campeon = "Racing Club";
        t.subcampeon = "Vélez Sarsfield";
        t.obs = "*(1) Nace la Asociación Amateurs de Football, fundada por los clubes rebeldes desafiliados. Racing se consagró campeón ganando el 100% de los puntos en disputa.*";
        counts++;
    }
});

if(counts > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    console.log("Patched 1919 AAF and AAmF.");
} else {
    console.log("1919 entries not found");
}
