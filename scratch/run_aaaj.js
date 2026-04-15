const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const fileP = path.join(__dirname, '..', 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let enfrentamientos = JSON.parse(fs.readFileSync(fileP, 'utf8'));

// Mapa rápido de Livefutbol -> JSON oficial nuestro para los equipos más comunes de primera
const mapToOfficial = {
    'Aldosivi': 'Club Atlético Aldosivi',
    'Boca Juniors': 'Club Atlético Boca Juniors',
    'River Plate': 'Club Atlético River Plate',
    'Independiente': 'Club Atlético Independiente',
    'Racing Club': 'Racing Club',
    'San Lorenzo': 'Club Atlético San Lorenzo de Almagro',
    'Vélez Sarsfield': 'Club Atlético Vélez Sarsfield',
    'Estudiantes': 'Club Estudiantes de La Plata',
    'Gimnasia': 'Club de Gimnasia y Esgrima La Plata',
    'Rosario Central': 'Club Atlético Rosario Central',
    'Newell\'s Old Boys': 'Club Atlético Newell\'s Old Boys',
    'Huracán': 'Club Atlético Huracán',
    'Talleres': 'Club Atlético Talleres',
    'Belgrano': 'Club Atlético Belgrano',
    'Lanús': 'Club Atlético Lanús',
    'Banfield': 'Club Atlético Banfield',
    'Defensa y Justicia': 'Club Social y Deportivo Defensa y Justicia',
    'Tigre': 'Club Atlético Tigre',
    'Platense': 'Club Atlético Platense',
    'Unión': 'Club Atlético Unión',
    'Colón': 'Club Atlético Colón', // Histórico
    'Atlético Tucumán': 'Club Atlético Tucumán',
    'Central Córdoba (SdE)': 'Club Atlético Central Córdoba',
    'Barracas Central': 'Club Atlético Barracas Central',
    'Sarmiento': 'Club Atlético Sarmiento',
    'Independiente Rivadavia': 'Club Sportivo Independiente Rivadavia',
    'Deportivo Riestra': 'Club Deportivo Riestra',
    'Instituto': 'Instituto Atlético Central Córdoba'
};

const URL = 'https://www.livefutbol.com/teams/te120/argentinos-juniors/record-opponent/';

async function run() {
    try {
        console.log("Descargando data de Argentinos Jrs...");
        const res = await axios.get(URL, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
        const $ = cheerio.load(res.data);
        
        let countMods = 0;

        $('table.standard_tbg tr').each((i, el) => {
            const tds = $(el).find('td');
            if (tds.length >= 6) {
                const rivalLink = $(tds[0]).find('a').text().trim();
                if (!rivalLink) return;

                const pj = parseInt($(tds[1]).text()) || 0;
                const win = parseInt($(tds[2]).text()) || 0;
                const draw = parseInt($(tds[3]).text()) || 0;
                const lose = parseInt($(tds[4]).text()) || 0;
                const golesStr = $(tds[5]).text().split(':');
                const gf = parseInt(golesStr[0]) || 0;
                const gc = parseInt(golesStr[1]) || 0;

                let offName = mapToOfficial[rivalLink];
                if (!offName) {
                    // Try rough matching
                    offName = Object.values(mapToOfficial).find(v => v.includes(rivalLink));
                }
                
                if (offName) {
                    // Buscar la entrada en enfrentamientos.json
                    const isA = (e) => e.equipo_a === 'Asociación Atlética Argentinos Juniors' && e.equipo_b === offName;
                    const isB = (e) => e.equipo_b === 'Asociación Atlética Argentinos Juniors' && e.equipo_a === offName;
                    
                    let match = enfrentamientos.find(e => isA(e) || isB(e));
                    
                    if (match) {
                        if (isA(match)) {
                            match.pj = pj; match.victorias_a = win; match.empates = draw; match.victorias_b = lose;
                            match.pe = draw; match.pg_a = win; match.pg_b = lose; 
                            match.goles_a = gf; match.goles_b = gc;
                        } else {
                            match.pj = pj; match.victorias_b = win; match.empates = draw; match.victorias_a = lose;
                            match.pe = draw; match.pg_b = win; match.pg_a = lose;
                            match.goles_b = gf; match.goles_a = gc;
                        }
                        countMods++;
                        console.log(`Actualizado: Argentinos vs ${rivalLink} (${pj} PJ)`);
                    }
                }
            }
        });
        
        fs.writeFileSync(fileP, JSON.stringify(enfrentamientos, null, 2));
        console.log(`\n¡Listo! Se actualizaron ${countMods} historiales de Argentinos Juniors.`);
    } catch(e) {
        console.error("Fallo:", e.message);
    }
}
run();
