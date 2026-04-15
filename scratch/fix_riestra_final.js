const fs = require('fs');

const dbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_enfrentamientos.json';

try {
  let data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  const riestraName = 'Club Deportivo Riestra Asociación de Fomento Barrio Sud';

  // Format: [Riestra wins, Opponent wins, Draws] => PJ is auto-calculated
  const verifications = {
    "Club Atlético River Plate": [2, 1, 1],
    "Boca Juniors": [0, 1, 1],
    "Club Atlético San Lorenzo de Almagro": [1, 1, 2],
    "Club Atlético Independiente": [1, 2, 1],
    "Racing Club": [0, 2, 0],
    "Club Atlético Platense": [3, 3, 4],
    "Club Atlético Barracas Central": [31, 34, 31],
    "Asociación Atlética Argentinos Juniors": [1, 1, 0],
    "Club Atlético Tucumán": [4, 0, 0],
    "Club Atlético Banfield": [1, 1, 1],
    "Club Atlético Belgrano": [0, 3, 1],
    "Club Atlético Tigre": [1, 3, 3],
    "Club Atlético Central Córdoba (SdE)": [2, 1, 1],
    "Club Atlético Sarmiento": [5, 10, 2],
    "Club Atlético Vélez Sarsfield": [1, 1, 3],
    "Club Estudiantes de La Plata": [0, 2, 0],
    "Club de Gimnasia y Esgrima La Plata": [1, 1, 1],
    "Club Atlético Huracán": [1, 1, 2],
    "Club Atlético Lanús": [3, 4, 2],
    "Club Social y Deportivo Defensa y Justicia": [1, 3, 3],
    "Club Atlético Rosario Central": [0, 3, 3],
    "Club Atlético Newell's Old Boys": [0, 1, 2],
    "Club Atlético Talleres": [1, 0, 1],
    "Instituto Atlético Central Córdoba": [1, 4, 3],
    "Club Deportivo Godoy Cruz Antonio Tomba": [1, 0, 1],
    "Club Atlético Unión": [0, 1, 1],
    "Club Sportivo Independiente Rivadavia": [2, 3, 2]
  };

  let matchesUpdated = 0;

  data.forEach(match => {
    if (match.equipo_a === riestraName || match.equipo_b === riestraName) {
      const oppName = match.equipo_a === riestraName ? match.equipo_b : match.equipo_a;
      
      if (verifications[oppName]) {
        const stats = verifications[oppName]; // [riestra_w, opp_w, draws]
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
          // Clean dummy goals
          match.goles_a = r_wins; // Proxy logic just to have valid numbers without calculating all goals
          match.goles_b = o_wins;
        } else {
          // Riestra is team B
          match.victorias_b = r_wins;
          match.pg_b = r_wins;
          match.victorias_a = o_wins;
          match.pg_a = o_wins;
          // Clean dummy goals
          match.goles_b = r_wins;
          match.goles_a = o_wins;
        }

        matchesUpdated++;
      }
    }
  });

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Success! Updated ${matchesUpdated} H2H objects for Riestra.`);

} catch (err) {
  console.error("Error reading or writing JSON:", err);
}
