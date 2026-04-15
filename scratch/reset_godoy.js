const fs = require('fs');
const dbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_enfrentamientos.json';

try {
  let data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  let matchesReset = 0;
  const team1 = 'Club Deportivo Godoy Cruz Antonio Tomba';
  const team2 = 'Club Deportivo Riestra Asociación de Fomento Barrio Sud';

  data.forEach(match => {
    if ((match.equipo_a === team1 && match.equipo_b === team2) || (match.equipo_b === team1 && match.equipo_a === team2)) {
      match.pj = 0;
      match.victorias_a = 0;
      match.victorias_b = 0;
      match.empates = 0;
      match.pg_a = 0;
      match.pg_b = 0;
      match.pe = 0;
      match.goles_a = 0;
      match.goles_b = 0;
      matchesReset++;
    }
  });

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Reset ${matchesReset} match objects back to 0.`);
} catch (err) {
  console.error(err);
}
