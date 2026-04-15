
const fs = require('fs');
const filepath = 'app/src/data/ligas/argentina_enfrentamientos.json';
const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

const h2h_knowledge = {
  'Argentinos Juniors': { victorias_edlp: 45, victorias_rival: 51, empates: 39 }, // Fixed based on what json actually had: 45, 51, 39
  'Boca Juniors': { victorias_edlp: 54, victorias_rival: 116, empates: 55 },
  'Barracas Central': { victorias_edlp: 8, victorias_rival: 1, empates: 3 },
  'Independiente': { victorias_edlp: 60, victorias_rival: 74, empates: 56 },
  'River Plate': { victorias_edlp: 46, victorias_rival: 100, empates: 43 },
  'San Lorenzo': { victorias_edlp: 55, victorias_rival: 76, empates: 55 },
  'Deportivo Riestra': { victorias_edlp: 1, victorias_rival: 1, empates: 0 },
  'Racing Club': { victorias_edlp: 70, victorias_rival: 73, empates: 46 }
};

const mapOfficialToCommon = {
  'Asociación Atlética Argentinos Juniors': 'Argentinos Juniors',
  'Boca Juniors': 'Boca Juniors',
  'Club Atlético Barracas Central': 'Barracas Central',
  'Club Atlético Independiente': 'Independiente',
  'Club Atlético River Plate': 'River Plate',
  'Club Atlético San Lorenzo de Almagro': 'San Lorenzo',
  'Club Deportivo Riestra Asociación de Fomento Barrio Sud': 'Deportivo Riestra',
  'Racing Club': 'Racing Club'
};

const officialKeys = Object.keys(mapOfficialToCommon);

console.log('Comparacion de historiales vs Estudiantes:');
console.log('==========================================');

data.forEach(m => {
  if (m.equipo_a === 'Club Estudiantes de La Plata' || m.equipo_b === 'Club Estudiantes de La Plata') {
    const isA = m.equipo_a === 'Club Estudiantes de La Plata';
    const rivalOficial = isA ? m.equipo_b : m.equipo_a;
    
    if (officialKeys.includes(rivalOficial)) {
      const common = mapOfficialToCommon[rivalOficial];
      // Since I originally inputted my raw numbers from internal state, 
      // let's re-inject what I used originally:
      const knowledge = {
        'Argentinos Juniors': { victorias_edlp: 51, victorias_rival: 45, empates: 39 },
        'Boca Juniors': { victorias_edlp: 54, victorias_rival: 116, empates: 55 },
        'Barracas Central': { victorias_edlp: 8, victorias_rival: 1, empates: 3 },
        'Independiente': { victorias_edlp: 60, victorias_rival: 74, empates: 56 },
        'River Plate': { victorias_edlp: 46, victorias_rival: 100, empates: 43 },
        'San Lorenzo': { victorias_edlp: 55, victorias_rival: 76, empates: 55 },
        'Deportivo Riestra': { victorias_edlp: 1, victorias_rival: 1, empates: 0 },
        'Racing Club': { victorias_edlp: 70, victorias_rival: 73, empates: 46 }
      }[common];
      
      const v_edlp_json = isA ? m.victorias_a : m.victorias_b;
      const v_rival_json = isA ? m.victorias_b : m.victorias_a;
      const empates_json = m.empates;
      
      const isMatch = (v_edlp_json === knowledge.victorias_edlp) && 
                      (v_rival_json === knowledge.victorias_rival) && 
                      (empates_json === knowledge.empates);
                      
      console.log();
      console.log('[' + common + ']');
      console.log('Mi IA:   EDLP ' + knowledge.victorias_edlp + ' - ' + knowledge.empates + ' - ' + knowledge.victorias_rival + ' ' + common);
      console.log('Sus datos: EDLP ' + v_edlp_json + ' - ' + empates_json + ' - ' + v_rival_json + ' ' + common);
      console.log('Son Iguales? -> ' + (isMatch ? 'SI' : 'NO'));
      
      if (!isMatch) {
         console.log('   Diferencia EDLP: ' + (knowledge.victorias_edlp - v_edlp_json));
         console.log('   Diferencia Empates: ' + (knowledge.empates - empates_json));
         console.log('   Diferencia ' + common + ': ' + (knowledge.victorias_rival - v_rival_json));
      }
    }
  }
});

