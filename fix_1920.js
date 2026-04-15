const fs = require('fs');

const raw1920AAF = `
 1. BOCA JUNIORS                     24  20   3   1  52:   7   43 (Buenos Aires)
 2. Banfield                         24  13   5   6  35:  21   31 (Banfield)
 3. Huracán                          24  13   5   6  38:  26   31 (Buenos Aires)
 4. Porteño                          24  13   4   7  31:  26   30 (Buenos Aires)
 5. Del Plata                        24  10   6   8  22:  27   26 (Buenos Aires)
 6. Sportivo Barracas                24  10   5   9  26:  28   25 (Buenos Aires)
 7. Nueva Chicago                    24  10   3  11  17:  36   23 (Buenos Aires)
 8. Sportivo del Norte               24   9   4  11  19:  47   22 (Buenos Aires)
 9. Estudiantes LP                   24  10   1  13  34:  37   21 (La Plata)
10. Sportivo Palermo                 24   8   3  13  26:  52   19 (Buenos Aires)
11. Lanús                                 0   0   0   0:   0    0 (Lanús)
12. Sportivo Almagro                      0   0   0   0:   0    0 (Villa Lynch)
13. Palermo                               0   0   0   0:   0    0 (Buenos Aires)
`;

const raw1920AAmF = `
 1. RIVER PLATE                      34  25   6   3  70: 22   56 (Buenos Aires)
 2. Racing Club                      34  25   4   5  77: 23   54 (Avellaneda)
 3. San Lorenzo de Almagro           34  17  12   5  58: 30   46 (Buenos Aires)
 4. Atlanta                          34  17   7  10  49: 29   41 (Buenos Aires)
 5. Gimnasia y Esgrima La Plata      34  17   7  10  46: 32   41 (La Plata)
 6. Vélez Sarsfield                  34  17   5  12  60: 32   39 (Buenos Aires)
 7. Platense                         34  16   5  13  51: 39   37 (Buenos Aires)
 8. Independiente                    34  12  11  11  58: 47   35 (Avellaneda)
 9. San Isidro                       34  12   9  13  52: 53   33 (San Isidro)
10. Quilmes                          34  13   6  15  35: 48   32 (Quilmes)
11. Estudiantil Porteño              34   9  12  13  38: 42   30 (Buenos Aires)
12. Ferro Carril Oeste               34  12   6  16  34: 61   30 (Buenos Aires)
13. Defensores de Belgrano           34   9   9  16  28: 40   27 (Buenos Aires)
14. Barracas Central                 34   9   8  17  28: 49   26 (Buenos Aires)
15. Tigre                            34   9   4  21  38: 77   22 (Tigre)
16. Sportivo Buenos Aires            34   6   6  22  33: 64   18 (Isla Maciel)
17. Sportivo Almagro                 17   6   5   6  22: 21   17 (Buenos Aires)
18. Lanús                            17   6   3   8  14: 23   15 (Lanús)
19. Estudiantes (BA)                 34   4   5  25  31: 90   13 (Buenos Aires)
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

const t1920aaf = parseTable(raw1920AAF);
const t1920aamf = parseTable(raw1920AAmF);

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let counts = 0;
data.forEach(t => {
    if(t.id === '1920-aaf') {
        t.tabla_posiciones = t1920aaf;
        t.campeon = "Boca Juniors";
        t.subcampeon = "Banfield";
        t.obs = "*(1) Lanús, Sportivo Almagro y Palermo abandonaron la liga a mitad de temporada.*";
        counts++;
    }
    if(t.id === '1920-aamf') {
        t.tabla_posiciones = t1920aamf;
        t.campeon = "River Plate";
        t.subcampeon = "Racing Club";
        t.obs = "*(1) River Plate logra el primer campeonato oficial de su historia en la máxima categoría, quebrando la hegemonía de Racing Club.*";
        counts++;
    }
});

if(counts > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    console.log("Patched 1920 AAF and AAmF.");
}
