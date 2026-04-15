const fs = require('fs');

const dbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_enfrentamientos.json';

try {
  let data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const riestraName = 'Club Deportivo Riestra Asociación de Fomento Barrio Sud';
  
  // Format: "Opponent Name": [riestra_wins, opponent_wins, draws]
  const patches = {
    "Asociación Atlética Estudiantes": [0, 4, 0],
    "Club Atlético Gimnasia y Esgrima": [1, 1, 2]
  };

  let matchesUpdated = 0;

  data.forEach(match => {
    if (match.equipo_a === riestraName || match.equipo_b === riestraName) {
      const oppName = match.equipo_a === riestraName ? match.equipo_b : match.equipo_a;
      
      if (patches[oppName]) {
        const stats = patches[oppName];
        const r_wins = stats[0];
        const o_wins = stats[1];
        const draws = stats[2];
        const total = r_wins + o_wins + draws;

        match.pj = total;
        match.empates = draws;
        match.pe = draws;

        if (match.equipo_a === riestraName) {
          match.victorias_a = r_wins;
          match.pg_a = r_wins;
          match.victorias_b = o_wins;
          match.pg_b = o_wins;
          match.goles_a = r_wins; 
          match.goles_b = o_wins;
        } else {
          match.victorias_b = r_wins;
          match.pg_b = r_wins;
          match.victorias_a = o_wins;
          match.pg_a = o_wins;
          match.goles_b = r_wins;
          match.goles_a = o_wins;
        }

        matchesUpdated++;
      }
    }
  });

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Success! Patched ${matchesUpdated} H2H objects for Riestra.`);
} catch (err) {
  console.error("Error reading or writing JSON:", err);
}
