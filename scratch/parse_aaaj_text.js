const fs = require('fs');
const path = require('path');

const fileP = path.join(__dirname, '..', 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let enfrentamientos = JSON.parse(fs.readFileSync(fileP, 'utf8'));

const mapToOfficial = {
    'Aldosivi': 'Club Atlético Aldosivi',
    'Boca Juniors': 'Club Atlético Boca Juniors',
    'River Plate': 'Club Atlético River Plate',
    'Independiente': 'Club Atlético Independiente',
    'Racing Club': 'Racing Club',
    'San Lorenzo': 'Club Atlético San Lorenzo de Almagro',
    'Vélez Sarsfield': 'Club Atlético Vélez Sarsfield',
    'Estudiantes': 'Club Estudiantes de La Plata',
    'Gimnasia de La Plata': 'Club de Gimnasia y Esgrima La Plata',
    'Rosario Central': 'Club Atlético Rosario Central',
    "Newell\'s Old Boys": "Club Atlético Newell's Old Boys",
    'Huracán': 'Club Atlético Huracán',
    'Talleres de Córdoba': 'Club Atlético Talleres',
    'Belgrano de Córdoba': 'Club Atlético Belgrano',
    'Lanús': 'Club Atlético Lanús',
    'Banfield': 'Club Atlético Banfield',
    'Defensa y Justicia': 'Club Social y Deportivo Defensa y Justicia',
    'Tigre': 'Club Atlético Tigre',
    'Platense': 'Club Atlético Platense',
    'Unión de Santa Fe': 'Club Atlético Unión',
    'Colón de Santa Fe': 'Club Atlético Colón',
    'Atlético Tucumán': 'Club Atlético Tucumán',
    'Central Córdoba SdE': 'Club Atlético Central Córdoba',
    'Barracas Central': 'Club Atlético Barracas Central',
    'Sarmiento de Junín': 'Club Atlético Sarmiento',
    'Independiente Rivadavia': 'Club Sportivo Independiente Rivadavia',
    'Deportivo Riestra': 'Club Deportivo Riestra',
    'Instituto de Córdoba': 'Instituto Atlético Central Córdoba',
    'Godoy Cruz': 'Club Deportivo Godoy Cruz Antonio Tomba'
};

const rawText = `Aldosivi	Aldosivi	16	8	1	7	23:18	» Todos los partidos
All Boys	All Boys	10	7	2	1	13:2	» Todos los partidos
Almagro	Almagro	10	3	6	1	6:3	» Todos los partidos
Almirante Brown de Arrecifes	Almirante Brown de Arrecifes	2	1	1	0	3:1	» Todos los partidos
Armenio	Armenio	5	5	0	0	16:2	» Todos los partidos
Arsenal de Sarandí	Arsenal de Sarandí	29	11	9	9	38:35	» Todos los partidos
Atlético Paraná	Atlético Paraná	2	2	0	0	2:0	» Todos los partidos
Atlético Rafaela	Atlético Rafaela	13	4	4	5	14:13	» Todos los partidos
Atlético Tucumán	Atlético Tucumán	13	4	6	3	19:18	» Todos los partidos
Banfield	Banfield	42	21	11	10	65:48	» Todos los partidos
Barracas Central	Barracas Central	8	2	4	2	11:9	» Todos los partidos
Belgrano de Córdoba	Belgrano de Córdoba	39	10	16	13	40:39	» Todos los partidos
Belgrano de San Francisco	Belgrano de San Francisco	1	0	1	0	0:0	» Todos los partidos
Boca Juniors	Boca Juniors	68	14	23	31	72:103	» Todos los partidos
Boca Unidos	Boca Unidos	4	3	0	1	8:1	» Todos los partidos
Brown de Adrogué	Brown de Adrogué	2	0	1	1	0:1	» Todos los partidos
C.A.I. de Comodoro Rivadavia	C.A.I. de Comodoro Rivadavia	4	4	0	0	11:1	» Todos los partidos
CA Los Andes	CA Los Andes	8	3	4	1	15:9	» Todos los partidos
Cañuelas	Cañuelas	1	1	0	0	1:0	» Todos los partidos
Central Córdoba SdE	Central Córdoba SdE	10	4	5	1	10:6	» Todos los partidos
Central Norte	Central Norte	1	1	0	0	3:0	» Todos los partidos
Chacarita Juniors	Chacarita Juniors	13	7	3	3	17:14	» Todos los partidos
Chaco For Ever	Chaco For Ever	4	2	1	1	6:4	» Todos los partidos
Colón de Santa Fe	Colón de Santa Fe	46	24	7	14	61:51	» Todos los partidos
Crucero del Norte	Crucero del Norte	3	2	1	0	6:1	» Todos los partidos
Defensa y Justicia	Defensa y Justicia	19	5	2	10	21:26	» Todos los partidos
Defensores de Belgrano	Defensores de Belgrano	4	3	1	0	7:2	» Todos los partidos
Deportivo Español	Deportivo Español	26	9	5	12	36:31	» Todos los partidos
Deportivo Mandiyú	Deportivo Mandiyú	14	5	6	3	25:26	» Todos los partidos
Deportivo Riestra	Deportivo Riestra	2	1	0	1	2:2	» Todos los partidos
Douglas Haig	Douglas Haig	5	3	2	0	8:3	» Todos los partidos
El Porvenir de Gerli	El Porvenir de Gerli	4	3	1	0	5:1	» Todos los partidos
Estudiantes	Estudiantes	67	25	22	19	91:81	» Todos los partidos
Estudiantes de Caseros	Estudiantes de Caseros	1	0	0	0	:	» Todos los partidos
Estudiantes de Río Cuarto	Estudiantes de Río Cuarto	1	0	1	0	0:0	» Todos los partidos
Estudiantes de San Luis	Estudiantes de San Luis	2	2	0	0	6:2	» Todos los partidos
Excursionistas	Excursionistas	1	1	0	0	3:0	» Todos los partidos
Ferro Carril Oeste	Ferro Carril Oeste	37	9	17	11	32:32	» Todos los partidos
Ferrocarril Midland	Ferrocarril Midland	1	0	0	0	:	» Todos los partidos
Flandria	Flandria	2	2	0	0	3:0	» Todos los partidos
Gimnasia de Jujuy	Gimnasia de Jujuy	26	9	8	9	28:26	» Todos los partidos
Gimnasia de La Plata	Gimnasia de La Plata	63	22	20	20	90:82	» Todos los partidos
Gimnasia y Esgrima (CdU)	Gimnasia y Esgrima (CdU)	4	3	1	0	6:1	» Todos los partidos
Gimnasia y Tiro de Salta	Gimnasia y Tiro de Salta	5	2	2	1	3:2	» Todos los partidos
Godoy Cruz	Godoy Cruz	27	10	9	8	27:24	» Todos los partidos
Guaraní Antonio Franco	Guaraní Antonio Franco	3	1	1	1	2:1	» Todos los partidos
Guillermo Brown	Guillermo Brown	2	0	1	1	0:2	» Todos los partidos
Huracán	Huracán	49	12	19	17	59:60	» Todos los partidos
Huracán de Tres Arroyos	Huracán de Tres Arroyos	6	1	2	3	8:10	» Todos los partidos
Independiente	Independiente	67	21	25	21	80:86	» Todos los partidos
Independiente Rivadavia	Independiente Rivadavia	7	2	1	3	8:8	» Todos los partidos
Independiente de Chivilcoy	Independiente de Chivilcoy	1	1	0	0	2:1	» Todos los partidos
Instituto de Córdoba	Instituto de Córdoba	34	11	11	12	29:32	» Todos los partidos
Juventud Antoniana 	Juventud Antoniana	4	0	2	2	4:10	» Todos los partidos
Juventud Unida de Gualeguaychú	Juventud Unida de Gualeguaychú	2	1	1	0	4:0	» Todos los partidos
Laferrere	Laferrere	1	0	0	0	:	» Todos los partidos
Lanús	Lanús	53	14	19	20	45:60	» Todos los partidos
Newell's Old Boys	Newell's Old Boys	64	19	19	26	60:77	» Todos los partidos
Nueva Chicago	Nueva Chicago	12	6	2	4	18:13	» Todos los partidos
Olimpo de Bahía Blanca	Olimpo de Bahía Blanca	15	6	5	4	14:12	» Todos los partidos
Patronato de Paraná	Patronato de Paraná	7	2	3	2	7:7	» Todos los partidos
Platense	Platense	37	11	14	12	32:31	» Todos los partidos
Quilmes	Quilmes	17	2	8	7	13:20	» Todos los partidos
Racing Club	Racing Club	65	24	14	27	87:95	» Todos los partidos
Racing de Córdoba	Racing de Córdoba	10	2	6	2	16:15	» Todos los partidos
Racing de Olavarría	Racing de Olavarría	1	1	0	0	3:0	» Todos los partidos
Ramón Santamarina	Ramón Santamarina	2	2	0	0	4:0	» Todos los partidos
River Plate	River Plate	69	19	27	23	79:90	» Todos los partidos
Rosario Central	Rosario Central	57	17	18	22	67:76	» Todos los partidos
San Lorenzo	San Lorenzo	69	22	18	28	73:85	» Todos los partidos
San Martín de Mendoza	San Martín de Mendoza	4	1	2	1	6:6	» Todos los partidos
San Martín de San Juan	San Martín de San Juan	17	7	4	6	23:17	» Todos los partidos
San Martín de Tucumán	San Martín de Tucumán	11	3	5	2	14:11	» Todos los partidos
San Telmo	San Telmo	1	1	0	0	2:1	» Todos los partidos
Sarmiento de Junín	Sarmiento de Junín	7	2	3	2	3:3	» Todos los partidos
Sportivo Italiano	Sportivo Italiano	2	1	1	0	5:1	» Todos los partidos
Talleres de Córdoba	Talleres de Córdoba	38	15	8	15	65:58	» Todos los partidos
Temperley	Temperley	8	1	4	3	7:11	» Todos los partidos
Tigre	Tigre	28	8	9	10	23:28	» Todos los partidos
Tiro Federal de Rosario	Tiro Federal de Rosario	4	2	1	1	10:5	» Todos los partidos
Unión de Santa Fe	Unión de Santa Fe	40	15	12	13	53:46	» Todos los partidos
Villa Dálmine	Villa Dálmine	2	1	0	1	2:2	» Todos los partidos
Vélez Sarsfield	Vélez Sarsfield	70	19	19	31	60:85`;

let count = 0;
let newRows = 0;

// Primero sacamos todo viejo de aaaj, como pidió el user, pero ojo, si lo sacamos perdemos el color del rival en los nuevos insert.
// Así que solo "reseteamos" las variables estadisticas a 0 si hace falta limpiarlo completamente.
enfrentamientos.forEach(m => {
    if (m.equipo_a === 'Asociación Atlética Argentinos Juniors' || m.equipo_b === 'Asociación Atlética Argentinos Juniors') {
        m.pj = 0;
        m.victorias_a = 0;
        m.victorias_b = 0;
        m.empates = 0;
        m.goles_a = 0;
        m.goles_b = 0;
        m.pg_a = 0;
        m.pe = 0;
        m.pg_b = 0;
    }
});

const lines = rawText.trim().split('\n');
lines.forEach(line => {
    const parts = line.split('\t');
    if (parts.length >= 7) {
        let rawName = parts[0].trim();
        const pj = parseInt(parts[2]) || 0;
        const win_arg = parseInt(parts[3]) || 0;
        const draw = parseInt(parts[4]) || 0;
        const lose_arg = parseInt(parts[5]) || 0;
        const golesStr = parts[6].includes(':') ? parts[6].split(':') : [0,0];
        const gf = parseInt(golesStr[0]) || 0;
        const gc = parseInt(golesStr[1]) || 0;

        let offName = mapToOfficial[rawName] || rawName;

        let match = enfrentamientos.find(e => 
            (e.equipo_a === 'Asociación Atlética Argentinos Juniors' && e.equipo_b === offName) ||
            (e.equipo_b === 'Asociación Atlética Argentinos Juniors' && e.equipo_a === offName)
        );

        if (!match) {
            // Intentar matcheo relajado si existe en the json
            match = enfrentamientos.find(e => 
                (e.equipo_a === 'Asociación Atlética Argentinos Juniors' && e.equipo_b.includes(rawName)) ||
                (e.equipo_b === 'Asociación Atlética Argentinos Juniors' && e.equipo_a.includes(rawName))
            );
        }

        if (match) {
            if (match.equipo_a === 'Asociación Atlética Argentinos Juniors') {
                match.pj = pj;
                match.victorias_a = win_arg;
                match.empates = draw;
                match.victorias_b = lose_arg;
                match.pe = draw;
                match.pg_a = win_arg;
                match.pg_b = lose_arg;
                match.goles_a = gf;
                match.goles_b = gc;
            } else {
                match.pj = pj;
                match.victorias_b = win_arg;
                match.empates = draw;
                match.victorias_a = lose_arg;
                match.pe = draw;
                match.pg_b = win_arg;
                match.pg_a = lose_arg;
                match.goles_b = gf;
                match.goles_a = gc;
            }
            count++;
        }
    }
});

// Purge any AAJ matches that end up with 0 PJ, just to keep JSON clean.
let finalEnfrentamientos = enfrentamientos.filter(e => {
    if(e.equipo_a === 'Asociación Atlética Argentinos Juniors' || e.equipo_b === 'Asociación Atlética Argentinos Juniors') {
        return e.pj > 0;
    }
    return true;
});

fs.writeFileSync(fileP, JSON.stringify(finalEnfrentamientos, null, 2));
console.log('Se actualizaron exitosamente', count, 'historiales de Argentinos Juniors.');
