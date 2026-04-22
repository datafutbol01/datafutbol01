const fs = require('fs');

const engCsvToID = {
    "Arsenal": "arsenal",
    "Aston Villa": "aston-villa",
    "AFC Bournemouth": "bournemouth",
    "Bournemouth": "bournemouth",
    "Brentford": "brentford",
    "Brighton & Hove Albion": "brighton",
    "Burnley": "burnley",
    "Chelsea": "chelsea",
    "Crystal Palace": "crystal-palace",
    "Everton": "everton",
    "Fulham": "fulham",
    "Leeds United": "leeds-united",
    "Liverpool": "liverpool",
    "Manchester City": "manchester-city",
    "Manchester United": "manchester-united",
    "Newton Heath": "manchester-united", // Historic Man Utd name? Wait, keeping simple
    "Newcastle United": "newcastle",
    "Nottingham Forest": "nottingham-forest",
    "Sunderland": "sunderland",
    "Tottenham Hotspur": "tottenham",
    "West Ham United": "west-ham-united",
    "Wolverhampton Wanderers": "wolverhampton-wanderers"
};

const fullNamesToID = {
    'Arsenal Football Club': 'arsenal',
    'Aston Villa Football Club': 'aston-villa',
    'A.F.C. Bournemouth': 'bournemouth',
    'Brentford Football Club': 'brentford',
    'Brighton & Hove Albion Football Club': 'brighton',
    'Burnley': 'burnley',
    'Chelsea Football Club': 'chelsea',
    'Crystal Palace Football Club': 'crystal-palace',
    'Everton Football Club': 'everton',
    'Fulham Football Club': 'fulham',
    'Leeds United Football Club': 'leeds-united',
    'Liverpool Football Club': 'liverpool',
    'Manchester City Football Club': 'manchester-city',
    'Manchester United Football Club': 'manchester-united',
    'Newcastle United Football Club': 'newcastle',
    'Nottingham Forest Football Club': 'nottingham-forest',
    'Sunderland Association Football Club': 'sunderland',
    'Tottenham Hotspur Football Club': 'tottenham',
    'West Ham United Football Club': 'west-ham-united',
    'Wolverhampton Wanderers Football Club': 'wolverhampton-wanderers'
};

async function processEngland() {
    const stats = {};
    const text = fs.readFileSync('./england.csv', 'utf8');
    const lines = text.split('\n');

    let processed = 0;
    for (const line of lines) {
        if (!line || line.startsWith('"Date"')) continue;
        const pts = line.split(',');
        if (pts.length < 7) continue;

        const localTeam = pts[2].replace(/"/g, '').trim();
        const visitorTeam = pts[3].replace(/"/g, '').trim();
        const localGoals = parseInt(pts[5]);
        const visitorGoals = parseInt(pts[6]);

        const idLocal = engCsvToID[localTeam];
        const idVisitor = engCsvToID[visitorTeam];

        if (idLocal && idVisitor && !isNaN(localGoals) && !isNaN(visitorGoals)) {
            processed++;
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

    const enfrentamientosPath = './app/src/data/ligas/inglaterra_enfrentamientos.json';
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
    console.log(`\n🎉 INYECCIÓN LOGRADA! Partidos útiles del CSV: ${processed}`);
    console.log(`Cruces Mapeados: ${cruzados} / 190.`);
}

processEngland();
