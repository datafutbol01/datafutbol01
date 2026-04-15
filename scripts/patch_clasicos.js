const fs = require('fs');

async function patchClasicos() {
    console.log("Iniciando inyección de Parche Maestro (Historiales Absolutos desde Wikipedia)...");

    const enfrentamientosPath = './app/src/data/ligas/argentina_enfrentamientos.json';
    const jsonStr = fs.readFileSync(enfrentamientosPath, 'utf8');
    const data = JSON.parse(jsonStr);

    const clasicosTotales = [
        {
            team1: 'boca-juniors', team2: 'river-plate', 
            pj: 265,
            v1: 93, v2: 88, empates: 84
        },
        {
            team1: 'independiente', team2: 'racing-club',
            pj: 238,
            v1: 89, v2: 71, empates: 78
        },
        {
            team1: 'rosario-central', team2: 'newells-old-boys',
            pj: 279,
            v1: 99, v2: 77, empates: 103
        },
        {
            team1: 'san-lorenzo', team2: 'huracan',
            pj: 193, // (Uno se dio por perdido a ambos)
            v1: 87, v2: 49, empates: 56
        },
        {
            team1: 'estudiantes-lp', team2: 'gimnasia-lp',
            pj: 192,
            v1: 69, v2: 51, empates: 72
        }
    ];

    let reemplazados = 0;

    for (const clasico of clasicosTotales) {
        // Encontrar cruce
        const match = data.find(h => 
            (h.id.includes(clasico.team1) && h.id.includes(clasico.team2)) ||
            (h.equipo_a.toLowerCase().includes(clasico.team1.split('-')[0]) && h.equipo_b.toLowerCase().includes(clasico.team2.split('-')[0])) ||
            (h.equipo_b.toLowerCase().includes(clasico.team1.split('-')[0]) && h.equipo_a.toLowerCase().includes(clasico.team2.split('-')[0]))
        );

        if (match) {
            match.pj = clasico.pj;
            match.pe = clasico.empates;
            match.empates = clasico.empates;
            
            // Detectar de qué lado está cada equipo en la base
            let isTeam1A = false;
            // Evaluamos por slug (boca-juniors) contra full names o ID
            if (match.id.startsWith(clasico.team1) || match.equipo_a.toLowerCase().includes(clasico.team1.split('-')[0].replace('lp',''))) {
                isTeam1A = true;
            }

            if (isTeam1A) {
                match.pg_a = clasico.v1;
                match.victorias_a = clasico.v1;
                match.pg_b = clasico.v2;
                match.victorias_b = clasico.v2;
            } else {
                match.pg_a = clasico.v2;
                match.victorias_a = clasico.v2;
                match.pg_b = clasico.v1;
                match.victorias_b = clasico.v1;
            }
            reemplazados++;
            console.log(`✅ Actualizado: ${match.equipo_a} vs ${match.equipo_b} -> PJ: ${match.pj}`);
        }
    }

    fs.writeFileSync(enfrentamientosPath, JSON.stringify(data, null, 2));

    console.log(`\n🎉 PARCHE EXITOSO. Clásicos actualizados con historial total absoluto: ${reemplazados} / 5.`);
}

patchClasicos().catch(console.error);
