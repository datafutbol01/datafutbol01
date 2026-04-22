const fs = require('fs');

const raw1921AAF = `
 1. HURACÁN                          18  14   3   1  54: 15   31 (Buenos Aires)
 2. Del Plata                        18  13   3   2  28: 11   29 (Buenos Aires)
 3. Boca Juniors                     18  10   5   3  30: 17   25 (Buenos Aires)
 4. Nueva Chicago                    18   6   7   5  13: 12   19 (Buenos Aires)
 5. El Porvenir                      18   6   7   5  17: 22   19 (Gerli)
 6. Sportivo del Norte               18   4   7   7  17: 23   15 (Buenos Aires)
 7. Sportivo Barracas                18   5   4   9  22: 31   14 (Buenos Aires)
 8. Estudiantes de La Plata          18   5   3  10  17: 34   13 (La Plata)
 9. Sportivo Palermo                 18   3   4  11  14: 28   10 (Buenos Aires)
10. Porteño                          18   0   5  13  10: 29    5 (Buenos Aires)
`;

const raw1921AAmF = `
 1. RACING CLUB                      38  30   6   2  73: 16   66 (Avellaneda)
 2. River Plate                      38  25   4   9  69: 30   54 (Buenos Aires)
 3. Independiente                    38  22   9   7  62: 28   53 (Avellaneda)
 4. Gimnasia y Esgrima La Plata      38  23   6   9  64: 39   52 (La Plata)
 5. Defensores de Belgrano           38  20   8  10  42: 28   48 (Buenos Aires)
 6. San Lorenzo de Almagro           38  20   7  11  47: 25   47 (Buenos Aires)
 7. Tigre                            38  15  13  10  61: 53   43 (Tigre)
 8. Platense                         38  16  10  12  63: 38   42 (Buenos Aires)
 9. Atlanta                          38  17   7  14  47: 44   41 (Buenos Aires)
10. Banfield                         38  16   6  16  47: 43   38 (Banfield)
11. Barracas Central                 38  15   7  16  47: 47   37 (Buenos Aires)
12. Vélez Sarsfield                  38  13  10  15  53: 43   36 (Buenos Aires)
13. Sportivo Almagro                 38  14   6  18  40: 54   34 (Buenos Aires)
14. Estudiantes (BA)                 38  12   8  18  38: 57   32 (Buenos Aires)
15. Lanús                            38  10   8  20  33: 60   28 (Lanús)
16. Sportivo Buenos Aires            38   8  11  19  38: 62   27 (Isla Maciel)
17. Quilmes                          38   8   9  21  43: 65   25 (Quilmes)
18. Estudiantil Porteño              38   9   6  23  38: 58   24 (Buenos Aires)
19. San Isidro                       38   8   6  24  33: 78   22 (San Isidro)
20. Ferro Carril Oeste               38   2   7  29  22: 92   11 (Buenos Aires)
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

const t1921aaf = parseTable(raw1921AAF);
const t1921aamf = parseTable(raw1921AAmF);

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let counts = 0;
data.forEach(t => {
    if(t.id === '1921-aaf') {
        t.tabla_posiciones = t1921aaf;
        t.campeon = "Huracán";
        t.subcampeon = "Del Plata";
        t.obs = "*(1) Con Boca Juniors dedicándose de lleno a giras y competiciones paralelas, Huracán aprovecha la liga oficial AAF y consigue levantar el PRIMER CAMPEONATO absoluto de su historia.*";
        counts++;
    }
    if(t.id === '1921-aamf') {
        t.tabla_posiciones = t1921aamf;
        t.campeon = "Racing Club";
        t.subcampeon = "River Plate";
        t.obs = "*(1) Racing Club recupera la hegemonía y vuelve a campeonar en la liga Amateurs con unos impresionantes 66 puntos.*";
        counts++;
    }
});

if(counts > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    console.log("Patched 1921 AAF and AAmF.");
}
