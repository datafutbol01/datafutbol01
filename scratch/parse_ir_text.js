const fs = require('fs');
const path = require('path');

const fileP = path.join(__dirname, '..', 'app', 'src', 'data', 'ligas', 'argentina_enfrentamientos.json');
let enfrentamientos = JSON.parse(fs.readFileSync(fileP, 'utf8'));

const mapToOfficial = {
    'Aldosivi': 'Club Atlético Aldosivi',
    'Argentinos Juniors': 'Asociación Atlética Argentinos Juniors',
    'Atlético Tucumán': 'Club Atlético Tucumán',
    'Banfield': 'Club Atlético Banfield',
    'Barracas Central': 'Club Atlético Barracas Central',
    'Belgrano de Córdoba': 'Club Atlético Belgrano',
    'Boca Juniors': 'Club Atlético Boca Juniors',
    'Central Córdoba SdE': 'Club Atlético Central Córdoba (SdE)',
    'Defensa y Justicia': 'Club Social y Deportivo Defensa y Justicia',
    'Deportivo Riestra': 'Club Deportivo Riestra Asociación de Fomento Barrio Sud',
    'Estudiantes': 'Club Estudiantes de La Plata',
    'Estudiantes de Río Cuarto': 'Asociación Atlética Estudiantes',
    'Gimnasia de La Plata': 'Club de Gimnasia y Esgrima La Plata',
    'Gimnasia de Mendoza': 'Club Atlético Gimnasia y Esgrima',
    'Huracán': 'Club Atlético Huracán',
    'Independiente': 'Club Atlético Independiente',
    'Instituto de Córdoba': 'Instituto Atlético Central Córdoba',
    'Lanús': 'Club Atlético Lanús',
    "Newell\'s Old Boys": "Club Atlético Newell's Old Boys",
    'Platense': 'Club Atlético Platense',
    'Racing Club': 'Racing Club',
    'River Plate': 'Club Atlético River Plate',
    'Rosario Central': 'Club Atlético Rosario Central',
    'San Lorenzo': 'Club Atlético San Lorenzo de Almagro',
    'Sarmiento de Junín': 'Club Atlético Sarmiento',
    'Talleres de Córdoba': 'Club Atlético Talleres',
    'Tigre': 'Club Atlético Tigre',
    'Unión de Santa Fe': 'Club Atlético Unión',
    'Vélez Sarsfield': 'Club Atlético Vélez Sarsfield'
};

const BASE_CLUB = 'Club Sportivo Independiente Rivadavia';

const rawText = `Agropecuario Argentino	Agropecuario Argentino	4	0	2	2	2:6	» Todos los partidos
Aldosivi	Aldosivi	20	10	6	4	27:21	» Todos los partidos
All Boys	All Boys	15	3	9	3	15:17	» Todos los partidos
Almagro	Almagro	13	3	4	6	12:15	» Todos los partidos
Almirante Brown	Almirante Brown	15	5	4	6	16:15	» Todos los partidos
Alvarado	Alvarado	4	3	0	1	7:5	» Todos los partidos
Argentino de Quilmes	Argentino de Quilmes	1	1	0	0	1:0	» Todos los partidos
Argentinos Juniors	Argentinos Juniors	7	3	1	2	8:8	» Todos los partidos
Arsenal de Sarandí	Arsenal de Sarandí	1	0	1	0	1:1	» Todos los partidos
Atlanta	Atlanta	7	2	3	1	8:8	» Todos los partidos
Atlético Paraná	Atlético Paraná	5	0	4	1	3:4	» Todos los partidos
Atlético Rafaela	Atlético Rafaela	15	8	4	3	24:20	» Todos los partidos
Atlético Tucumán	Atlético Tucumán	17	4	8	5	15:17	» Todos los partidos
Banfield	Banfield	9	1	1	7	8:18	» Todos los partidos
Barracas Central	Barracas Central	9	2	3	4	10:10	» Todos los partidos
Belgrano de Córdoba	Belgrano de Córdoba	16	7	4	5	21:14	» Todos los partidos
Belgrano de San Francisco	Belgrano de San Francisco	6	3	1	2	8:6	» Todos los partidos
Ben Hur de Rafaela	Ben Hur de Rafaela	2	1	1	0	2:1	» Todos los partidos
Boca Juniors	Boca Juniors	3	0	1	2	1:6	» Todos los partidos
Boca Unidos	Boca Unidos	16	3	8	5	14:16	» Todos los partidos
Brown de Adrogué	Brown de Adrogué	12	2	6	4	6:12	» Todos los partidos
C.A.I. de Comodoro Rivadavia	C.A.I. de Comodoro Rivadavia	8	3	3	2	12:13	» Todos los partidos
CA Los Andes	CA Los Andes	9	5	2	2	10:8	» Todos los partidos
Central Córdoba Rosario	Central Córdoba Rosario	1	1	0	0	2:1	» Todos los partidos
Central Córdoba SdE	Central Córdoba SdE	9	4	2	3	11:10	» Todos los partidos
Chacarita Juniors	Chacarita Juniors	17	5	4	8	12:19	» Todos los partidos
Chaco For Ever	Chaco For Ever	3	1	1	1	3:3	» Todos los partidos
Colón de Santa Fe	Colón de Santa Fe	1	0	0	1	0:1	» Todos los partidos
Crucero del Norte	Crucero del Norte	9	4	3	2	10:7	» Todos los partidos
Defensa y Justicia	Defensa y Justicia	17	6	9	2	32:28	» Todos los partidos
Defensores de Belgrano	Defensores de Belgrano	6	2	4	0	9:6	» Todos los partidos
Deportivo Madryn	Deportivo Madryn	3	2	1	0	5:1	» Todos los partidos
Deportivo Maipú	Deportivo Maipú	3	2	1	0	4:2	» Todos los partidos
Deportivo Merlo	Deportivo Merlo	8	0	0	8	4:14	» Todos los partidos
Deportivo Morón	Deportivo Morón	6	2	3	1	8:6	» Todos los partidos
Deportivo Riestra	Deportivo Riestra	6	2	2	2	7:6	» Todos los partidos
Desamparados de San Juan	Desamparados de San Juan	2	1	0	1	1:3	» Todos los partidos
Douglas Haig	Douglas Haig	9	3	2	4	8:13	» Todos los partidos
Estudiantes	Estudiantes	3	0	2	1	4:5	» Todos los partidos
Estudiantes de Caseros	Estudiantes de Caseros	6	4	1	1	7:3	» Todos los partidos
Estudiantes de Río Cuarto	Estudiantes de Río Cuarto	4	1	1	2	3:7	» Todos los partidos
Estudiantes de San Luis	Estudiantes de San Luis	6	4	1	1	7:4	» Todos los partidos
Ferro Carril Oeste	Ferro Carril Oeste	28	7	10	11	25:33	» Todos los partidos
Ferrocarril Midland	Ferrocarril Midland	1	1	0	0	1:0	» Todos los partidos
Flandria	Flandria	4	1	2	1	4:6	» Todos los partidos
Gimnasia de Jujuy	Gimnasia de Jujuy	22	7	9	6	24:21	» Todos los partidos
Gimnasia de La Plata	Gimnasia de La Plata	7	4	2	1	10:9	» Todos los partidos
Gimnasia de Mendoza	Gimnasia de Mendoza	6	3	0	3	9:7	» Todos los partidos
Godoy Cruz	Godoy Cruz	5	0	3	2	3:5	» Todos los partidos
Guaraní Antonio Franco	Guaraní Antonio Franco	2	0	1	1	0:2	» Todos los partidos
Guillermo Brown	Guillermo Brown	15	6	4	5	14:12	» Todos los partidos
Güemes de SdE	Güemes de SdE	3	1	2	0	3:1	» Todos los partidos
Huracán	Huracán	14	4	4	6	10:17	» Todos los partidos
Independiente	Independiente	6	3	1	2	6:5	» Todos los partidos
Instituto de Córdoba	Instituto de Córdoba	27	5	11	11	22:29	» Todos los partidos
Juventud Unida Universitario	Juventud Unida Universitario	1	0	1	0	1:1	» Todos los partidos
Juventud Unida de Gualeguaychú	Juventud Unida de Gualeguaychú	6	1	3	2	5:6	» Todos los partidos
Lanús	Lanús	4	1	1	2	3:3	» Todos los partidos
Mitre de SdE	Mitre de SdE	7	2	1	4	7:8	» Todos los partidos
Newell's Old Boys	Newell's Old Boys	3	1	1	1	2:2	» Todos los partidos
Nueva Chicago	Nueva Chicago	15	8	5	1	25:14	» Todos los partidos
Olimpo de Bahía Blanca	Olimpo de Bahía Blanca	7	3	0	4	7:10	» Todos los partidos
Patronato de Paraná	Patronato de Paraná	12	2	4	6	11:13	» Todos los partidos
Platense	Platense	10	4	3	3	16:11	» Todos los partidos
Quilmes	Quilmes	14	5	3	6	18:26	» Todos los partidos
Racing Club	Racing Club	4	1	2	1	4:4	» Todos los partidos
Racing de Córdoba	Racing de Córdoba	2	0	1	1	1:3	» Todos los partidos
Ramón Santamarina	Ramón Santamarina	12	6	2	4	18:11	» Todos los partidos
River Plate	River Plate	6	1	1	3	4:10	» Todos los partidos
Rosario Central	Rosario Central	9	2	3	4	9:10	» Todos los partidos
Sacachispas	Sacachispas	1	0	0	1	1:3	» Todos los partidos
San Lorenzo	San Lorenzo	1	1	0	0	1:0	» Todos los partidos
San Martín de San Juan	San Martín de San Juan	13	4	3	6	16:16	» Todos los partidos
San Martín de Tucumán	San Martín de Tucumán	10	3	4	3	9:12	» Todos los partidos
San Telmo	San Telmo	3	2	0	1	8:4	» Todos los partidos
Sarmiento de Junín	Sarmiento de Junín	12	4	4	4	8:9	» Todos los partidos
Sportivo Italiano	Sportivo Italiano	2	1	0	1	5:4	» Todos los partidos
Talleres de Córdoba	Talleres de Córdoba	9	3	2	4	14:16	» Todos los partidos
Temperley	Temperley	5	1	1	3	4:7	» Todos los partidos
Tigre	Tigre	5	3	1	1	9:6	» Todos los partidos
Tiro Federal de Rosario	Tiro Federal de Rosario	8	3	2	3	9:11	» Todos los partidos
Tristan Suárez	Tristan Suárez	5	3	0	2	9:7	» Todos los partidos
Unión de Mar del Plata	Unión de Mar del Plata	2	0	2	0	1:1	» Todos los partidos
Unión de Santa Fe	Unión de Santa Fe	16	4	3	9	18:26	» Todos los partidos
Villa Dálmine	Villa Dálmine	12	7	5	0	13:3	» Todos los partidos
Villa San Carlos	Villa San Carlos	2	2	0	0	3:0	» Todos los partidos
Vélez Sarsfield	Vélez Sarsfield	3	0	0	3	0:6`;

let countPrimera = 0;
const historialesCompletos = [];

// 1. Clear out previous matches involving Independiente Rivadavia in Primera file
enfrentamientos.forEach(m => {
    if (m.equipo_a === BASE_CLUB || m.equipo_b === BASE_CLUB) {
        m.pj = 0; m.victorias_a = 0; m.victorias_b = 0; m.empates = 0;
        m.goles_a = 0; m.goles_b = 0; m.pg_a = 0; m.pe = 0; m.pg_b = 0;
    }
});

const lines = rawText.trim().split('\n');
lines.forEach(line => {
    const parts = line.split('\t');
    if (parts.length >= 7) {
        let rawName = parts[0].trim();
        const pj = parseInt(parts[2]) || 0;
        const v_ir = parseInt(parts[3]) || 0;
        const e = parseInt(parts[4]) || 0;
        const v_rival = parseInt(parts[5]) || 0;
        const golesStr = parts[6].includes(':') ? parts[6].split(':') : [0,0];
        const gf = parseInt(golesStr[0]) || 0;
        const gc = parseInt(golesStr[1]) || 0;
        
        historialesCompletos.push({rival: rawName, pj: pj, victorias: v_ir, empates: e, derrotas: v_rival, goles_a_favor: gf, goles_en_contra: gc});

        let offName = mapToOfficial[rawName] || rawName;

        let match = enfrentamientos.find(e => 
            (e.equipo_a === BASE_CLUB && e.equipo_b === offName) ||
            (e.equipo_b === BASE_CLUB && e.equipo_a === offName)
        );

        if (match) {
            if (match.equipo_a === BASE_CLUB) {
                match.pj = pj; match.victorias_a = v_ir; match.empates = e; match.victorias_b = v_rival;
                match.pe = e; match.pg_a = v_ir; match.pg_b = v_rival; match.goles_a = gf; match.goles_b = gc;
            } else {
                match.pj = pj; match.victorias_b = v_ir; match.empates = e; match.victorias_a = v_rival;
                match.pe = e; match.pg_b = v_ir; match.pg_a = v_rival; match.goles_b = gf; match.goles_a = gc;
            }
            countPrimera++;
        } else {
            // Check if offName represents one of the other 29 clubs that we missed
            let maybePrimera = Object.values(mapToOfficial).includes(offName);
            if(maybePrimera) {
                console.log("MATCH MISSING BUT EXISTS IN PRIMERA:", offName);
            }
        }
    }
});

// Purge any 0 PJ to avoid rendering empty rows for B-teams (though we mapped via offName perfectly)
let finalEnfrentamientos = enfrentamientos.filter(e => {
    if(e.equipo_a === BASE_CLUB || e.equipo_b === BASE_CLUB) {
        return e.pj > 0;
    }
    return true;
});

fs.writeFileSync(fileP, JSON.stringify(finalEnfrentamientos, null, 2));
console.log('Se actualizaron exitosamente', countPrimera, 'historiales de Primera para Independiente Rivadavia.');

// 2. Save complete JSON
const fullDir = path.join(__dirname, '..', 'app', 'src', 'data', 'historiales_completos');
if (!fs.existsSync(fullDir)) fs.mkdirSync(fullDir);
fs.writeFileSync(path.join(fullDir, 'independiente_rivadavia.json'), JSON.stringify(historialesCompletos, null, 2));
console.log('Se guardó el historial completo oficial de', historialesCompletos.length, 'rivales en data/historiales_completos/independiente_rivadavia.json');
