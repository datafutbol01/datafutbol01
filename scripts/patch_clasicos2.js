const fs = require('fs');

async function patchClasicos() {
    const enfrentamientosPath = './app/src/data/ligas/argentina_enfrentamientos.json';
    const jsonStr = fs.readFileSync(enfrentamientosPath, 'utf8');
    const data = JSON.parse(jsonStr);

    const clasicosTotales = [
        {
            teamA: 'Boca Juniors', teamB: 'Club Atlético River Plate', 
            pj: 265,
            vA: 93, vB: 88, pe: 84
        },
        {
            teamA: 'Club Atlético Independiente', teamB: 'Racing Club',
            pj: 238,
            vA: 89, vB: 71, pe: 78
        },
        {
            teamA: 'Club Atlético Rosario Central', teamB: "Club Atlético Newell's Old Boys",
            pj: 279,
            vA: 99, vB: 77, pe: 103
        },
        {
            teamA: 'Club Atlético San Lorenzo de Almagro', teamB: 'Club Atlético Huracán',
            pj: 193, 
            vA: 87, vB: 49, pe: 56
        },
        {
            teamA: 'Club Estudiantes de La Plata', teamB: 'Club de Gimnasia y Esgrima La Plata',
            pj: 192,
            vA: 69, vB: 51, pe: 72
        }
    ];

    for (const clasico of clasicosTotales) {
        const match = data.find(h => 
            (h.equipo_a === clasico.teamA && h.equipo_b === clasico.teamB) ||
            (h.equipo_b === clasico.teamA && h.equipo_a === clasico.teamB)
        );

        if (match) {
            match.pj = clasico.pj;
            match.pe = clasico.pe;
            match.empates = clasico.pe;
            
            if (match.equipo_a === clasico.teamA) {
                match.pg_a = clasico.vA; match.victorias_a = clasico.vA;
                match.pg_b = clasico.vB; match.victorias_b = clasico.vB;
            } else {
                match.pg_a = clasico.vB; match.victorias_a = clasico.vB;
                match.pg_b = clasico.vA; match.victorias_b = clasico.vA;
            }
            console.log(`✅ Actualizado FINAL: ${match.equipo_a} vs ${match.equipo_b}`);
        } else {
            console.log(`❌ No encontrado: ${clasico.teamA} vs ${clasico.teamB}`);
        }
    }

    // Reset Independiente Rivadavia Racing Club because it was corrupted
    const riva = data.find(h => h.equipo_a === 'Club Sportivo Independiente Rivadavia' && h.equipo_b === 'Racing Club');
    if (riva && riva.pj > 200) {
        riva.pj = 0; riva.pe = 0; riva.empates = 0;
        riva.pg_a = 0; riva.victorias_a = 0;
        riva.pg_b = 0; riva.victorias_b = 0;
        console.log('✅ Corregido: Independiente Rivadavia vs Racing');
    }

    fs.writeFileSync(enfrentamientosPath, JSON.stringify(data, null, 2));
}
patchClasicos().catch(console.error);
