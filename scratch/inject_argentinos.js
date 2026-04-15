const fs = require('fs');
const argentinosData = require('./argentinos_verified.js');

const dbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_enfrentamientos.json';

try {
  let data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const equipoBase = 'Asociación Atlética Argentinos Juniors';
  let matchesUpdated = 0;

  data.forEach(match => {
    if (match.equipo_a === equipoBase || match.equipo_b === equipoBase) {
      const oppName = match.equipo_a === equipoBase ? match.equipo_b : match.equipo_a;
      
      if (argentinosData[oppName]) {
        const stats = argentinosData[oppName]; // [own_w, opp_w, draws]
        const b_wins = stats[0];
        const o_wins = stats[1];
        const draws = stats[2];
        const total = b_wins + o_wins + draws;

        match.pj = total;
        match.empates = draws;
        match.pe = draws;

        if (match.equipo_a === equipoBase) {
          match.victorias_a = b_wins;
          match.pg_a = b_wins;
          match.victorias_b = o_wins;
          match.pg_b = o_wins;
          match.goles_a = b_wins; 
          match.goles_b = o_wins; 
        } else {
          match.victorias_b = b_wins;
          match.pg_b = b_wins;
          match.victorias_a = o_wins;
          match.pg_a = o_wins;
          match.goles_b = b_wins; 
          match.goles_a = o_wins; 
        }

        matchesUpdated++;
      }
    }
  });

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Success! Updated ${matchesUpdated} H2H objects for Argentinos Juniors.`);
} catch (err) {
  console.error("Error reading or writing JSON:", err);
}
