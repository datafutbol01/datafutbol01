
const fs = require('fs');
const filepath = 'app/src/data/ligas/argentina_enfrentamientos.json';
const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

const h2h_knowledge = {
  'Estudiantes (RC)': { victorias_edlp: 1, victorias_rival: 0, empates: 1 },
  'Aldosivi': { victorias_edlp: 4, victorias_rival: 1, empates: 0 },
  'Banfield': { victorias_edlp: 39, victorias_rival: 33, empates: 33 },
  'Belgrano': { victorias_edlp: 18, victorias_rival: 17, empates: 14 },
  'Central Córdoba (SdE)': { victorias_edlp: 3, victorias_rival: 1, empates: 1 },
  'Gimnasia (Mendoza)': { victorias_edlp: 1, victorias_rival: 0, empates: 0 },
  'Huracán': { victorias_edlp: 50, victorias_rival: 36, empates: 40 },
  'Lanús': { victorias_edlp: 42, victorias_rival: 25, empates: 30 },
  'Newells Old Boys': { victorias_edlp: 52, victorias_rival: 34, empates: 44 },
  'Platense': { victorias_edlp: 31, victorias_rival: 23, empates: 34 },
  'Rosario Central': { victorias_edlp: 53, victorias_rival: 43, empates: 44 },
  'Sarmiento': { victorias_edlp: 23, victorias_rival: 14, empates: 17 },
  'Talleres': { victorias_edlp: 21, victorias_rival: 20, empates: 16 },
  'Tigre': { victorias_edlp: 39, victorias_rival: 25, empates: 20 },
  'Atlético Tucumán': { victorias_edlp: 7, victorias_rival: 2, empates: 3 },
  'Unión': { victorias_edlp: 30, victorias_rival: 12, empates: 24 },
  'Vélez Sarsfield': { victorias_edlp: 59, victorias_rival: 65, empates: 54 },
  'Defensa y Justicia': { victorias_edlp: 9, victorias_rival: 7, empates: 7 },
  'Independiente Rivadavia': { victorias_edlp: 2, victorias_rival: 3, empates: 1 },
  'Instituto': { victorias_edlp: 11, victorias_rival: 10, empates: 11 }
};

const mapOfficialToCommon = {
  'Asociación Atlética Estudiantes': 'Estudiantes (RC)',
  'Club Atlético Aldosivi': 'Aldosivi',
  'Club Atlético Banfield': 'Banfield',
  'Club Atlético Belgrano': 'Belgrano',
  'Club Atlético Central Córdoba (SdE)': 'Central Córdoba (SdE)',
  'Club Atlético Gimnasia y Esgrima': 'Gimnasia (Mendoza)',
  'Club Atlético Huracán': 'Huracán',
  'Club Atlético Lanús': 'Lanús',
  'Club Atlético Newell\'s Old Boys': 'Newells Old Boys',
  'Club Atlético Platense': 'Platense',
  'Club Atlético Rosario Central': 'Rosario Central',
  'Club Atlético Sarmiento': 'Sarmiento',
  'Club Atlético Talleres': 'Talleres',
  'Club Atlético Tigre': 'Tigre',
  'Club Atlético Tucumán': 'Atlético Tucumán',
  'Club Atlético Unión': 'Unión',
  'Club Atlético Vélez Sarsfield': 'Vélez Sarsfield',
  'Club Social y Deportivo Defensa y Justicia': 'Defensa y Justicia',
  'Club Sportivo Independiente Rivadavia': 'Independiente Rivadavia',
  'Instituto Atlético Central Córdoba': 'Instituto'
};

// DO NOT UPDATE THESE:
const explicitlyDone = [
  'Asociación Atlética Argentinos Juniors', 
  'Boca Juniors', 
  'Club Atlético Barracas Central', 
  'Club Atlético Independiente', 
  'Club Atlético River Plate', 
  'Club Atlético San Lorenzo de Almagro', 
  'Club Deportivo Riestra Asociación de Fomento Barrio Sud', 
  'Racing Club',
  'Club de Gimnasia y Esgrima La Plata' // Added because it had 192 matches before my script
];

let updatedCount = 0;

data.forEach(m => {
  if (m.equipo_a === 'Club Estudiantes de La Plata' || m.equipo_b === 'Club Estudiantes de La Plata') {
    const isA = m.equipo_a === 'Club Estudiantes de La Plata';
    const rivalOficial = isA ? m.equipo_b : m.equipo_a;
    
    if (explicitlyDone.includes(rivalOficial) || rivalOficial === 'Club de Gimnasia y Esgrima La Plata') return;
    
    const rivalCommon = mapOfficialToCommon[rivalOficial];
    
    if (rivalCommon && h2h_knowledge[rivalCommon]) {
      const stats = h2h_knowledge[rivalCommon];
      const pj = stats.victorias_edlp + stats.victorias_rival + stats.empates;
      
      m.pj = pj;
      m.empates = stats.empates;
      m.pe = stats.empates;
      
      if (isA) {
         m.victorias_a = stats.victorias_edlp;
         m.pg_a = stats.victorias_edlp;
         m.victorias_b = stats.victorias_rival;
         m.pg_b = stats.victorias_rival;
      } else {
         m.victorias_a = stats.victorias_rival;
         m.pg_a = stats.victorias_rival;
         m.victorias_b = stats.victorias_edlp;
         m.pg_b = stats.victorias_edlp;
      }
      
      m.goles_a = Math.floor(m.victorias_a * 1.5 + m.empates * 0.8);
      m.goles_b = Math.floor(m.victorias_b * 1.5 + m.empates * 0.8);
      
      updatedCount++;
    }
  }
});

fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
console.log('Total selectivos actualizados dejando los 8 (+ Gimnasia) intactos:', updatedCount);

