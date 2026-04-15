const fs = require('fs');

const kaggleToID = {
    "Aldosivi": "aldosivi",
    "Argentinos": "argentinos-jrs",
    "Boca Juniors": "boca-juniors",
    "River Plate": "river-plate",
    "Independiente": "independiente",
    "Racing Club": "racing-club",
    "San Lorenzo": "san-lorenzo",
    "Huracan": "huracan",
    "Velez": "velez-sarsfield",
    "Estudiantes (LP)": "estudiantes-lp",
    "Gimnasia (LP)": "gimnasia-lp",
    "Rosario Central": "rosario-central",
    "Newells": "newells-old-boys",
    "Talleres (C)": "talleres-cba",
    "Belgrano": "belgrano-cba",
    "Instituto": "instituto-cba",
    "Lanus": "lanus",
    "Banfield": "banfield",
    "Platense": "platense",
    "Tigre": "tigre",
    "Def y Justicia": "defensa-justicia",
    "Sarmiento (J)": "sarmiento-junn",
    "Union": "union-sf",
    "Atl Tucuman": "atletico-tucuman",
    "Central Cba (SdE)": "central-cordoba-sde",
    "Barracas Central": "barracas-central",
    "Dep Riestra": "deportivo-riestra",
    "Ind Rivadavia": "independiente-rivadavia",
    "Godoy Cruz": "godoy-cruz",
    "Estudiantes (RC)": "estudiantes-rc",
    "Gimnasia (M)": "gimnasia-mdz"
};

const fullNamesToID = {
    'Asociación Atlética Argentinos Juniors': 'argentinos-jrs',
    'Asociación Atlética Estudiantes': 'estudiantes-rc',
    'Boca Juniors': 'boca-juniors',
    'Club Atlético Aldosivi': 'aldosivi',
    'Club Atlético Banfield': 'banfield',
    'Club Atlético Barracas Central': 'barracas-central',
    'Club Atlético Belgrano de Córdoba': 'belgrano-cba',
    'Club Atlético Central Córdoba (SdE)': 'central-cordoba-sde',
    'Club Atlético Gimnasia y Esgrima': 'gimnasia-mdz',
    'Club Atlético Huracán': 'huracan',
    'Club Atlético Independiente': 'independiente',
    'Club Atlético Lanús': 'lanus',
    "Club Atlético Newell's Old Boys": 'newells-old-boys',
    'Club Atlético Platense': 'platense',
    'Club Atlético River Plate': 'river-plate',
    'Club Atlético Rosario Central': 'rosario-central',
    'Club Atlético San Lorenzo de Almagro': 'san-lorenzo',
    'Club Atlético Sarmiento': 'sarmiento-junn',
    'Club Atlético Talleres': 'talleres-cba',
    'Club Atlético Tigre': 'tigre',
    'Club Atlético Tucumán': 'atletico-tucuman',
    'Club Atlético Unión': 'union-sf',
    'Club Atlético Vélez Sarsfield': 'velez-sarsfield',
    'Club Deportivo Riestra Asociación de Fomento Barrio Sud': 'deportivo-riestra',
    'Club Estudiantes de La Plata': 'estudiantes-lp',
    'Club Social y Deportivo Defensa y Justicia': 'defensa-justicia',
    'Club Sportivo Independiente Rivadavia': 'independiente-rivadavia',
    'Club de Gimnasia y Esgrima La Plata': 'gimnasia-lp',
    'Instituto Atlético Central Córdoba': 'instituto-cba',
    'Racing Club': 'racing-club'
};

async function processData() {
    const stats = {};
    const text = fs.readFileSync('./results.csv', 'utf8');
    const lines = text.split('\n');

    let index = 0;
    for (const line of lines) {
        if (index === 0) { index++; continue; } 
        const parts = line.split(',');
        if (parts.length < 8) continue;
        
        const localTeam = parts[3].trim();
        const localGoals = parseInt(parts[4]);
        const visitorGoals = parseInt(parts[5]);
        const visitorTeam = parts[6].trim();

        const idLocal = kaggleToID[localTeam];
        const idVisitor = kaggleToID[visitorTeam];

        if (idLocal && idVisitor && !isNaN(localGoals) && !isNaN(visitorGoals)) {
            const [teamA, teamB] = [idLocal, idVisitor].sort();
            const key = `${teamA}|${teamB}`;

            if (!stats[key]) {
                stats[key] = { pj: 0, pg_a: 0, pe: 0, pg_b: 0, gf_a: 0, gf_b: 0 };
            }

            stats[key].pj += 1;
            
            const isLocalA = (idLocal === teamA);
            const goalsA = isLocalA ? localGoals : visitorGoals;
            const goalsB = isLocalA ? visitorGoals : localGoals;

            stats[key].gf_a += goalsA;
            stats[key].gf_b += goalsB;

            if (goalsA > goalsB) {
                stats[key].pg_a += 1;
            } else if (goalsB > goalsA) {
                stats[key].pg_b += 1;
            } else {
                stats[key].pe += 1;
            }
        }
    }

    const enfrentamientosPath = './app/src/data/ligas/argentina_enfrentamientos.json';
    const jsonStr = fs.readFileSync(enfrentamientosPath, 'utf8');
    const data = JSON.parse(jsonStr);

    let cruzados = 0;
    for (const h2h of data) {
        let teamA = fullNamesToID[h2h.equipo_a];
        let teamB = fullNamesToID[h2h.equipo_b];

        if(!teamA || !teamB) continue;

        const [tA, tB] = [teamA, teamB].sort();
        const key = `${tA}|${tB}`;

        if (stats[key]) {
            h2h.pj = stats[key].pj;
            h2h.empates = stats[key].pe;
            h2h.pe = stats[key].pe;

            if (tA === teamA) {
                h2h.pg_a = stats[key].pg_a;
                h2h.victorias_a = stats[key].pg_a;
                h2h.pg_b = stats[key].pg_b;
                h2h.victorias_b = stats[key].pg_b;
                h2h.goles_a = stats[key].gf_a;
                h2h.goles_b = stats[key].gf_b;
            } else {
                h2h.pg_a = stats[key].pg_b;
                h2h.victorias_a = stats[key].pg_b;
                h2h.pg_b = stats[key].pg_a;
                h2h.victorias_b = stats[key].pg_a;
                h2h.goles_a = stats[key].gf_b;
                h2h.goles_b = stats[key].gf_a;
            }
            cruzados++;
        }
    }

    fs.writeFileSync(enfrentamientosPath, JSON.stringify(data, null, 2));

    const superC = data.find(h => h.id == 'boca-river');
    console.log(`\n🎉 INYECCIÓN EXITOSA. Cruces hallados y llenados: ${cruzados} / 435.`);
    if (superC) {
        console.log(`\n🔎 PRUEBA DE TESTEO (SUPERCLÁSICO):`);
        console.log(`PJ: ${superC.pj} | BOCA VICTORIAS: ${superC.equipo_a.includes('Boca') ? superC.pg_a : superC.pg_b} | RIVER VICTORIAS: ${superC.equipo_b.includes('River') ? superC.pg_b : superC.pg_a} | EMPATES: ${superC.pe}`);
    }
}

processData().catch(console.error);
