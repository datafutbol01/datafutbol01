const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

function updateTeam(id, rivalId, w, d, l) {
  const p = path.join(DIR, `${id}.json`);
  if (!fs.existsSync(p)) {
      console.log(`NO EXISTE ${id}`);
      return;
  }
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!data.h2h) data.h2h = {};
  if (!data.h2h[rivalId]) {
      data.h2h[rivalId] = { pj: 0, pg: 0, pe: 0, pp: 0 };
  }
  data.h2h[rivalId].pj++;
  data.h2h[rivalId].pg += w;
  data.h2h[rivalId].pe += d;
  data.h2h[rivalId].pp += l;
  
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
  console.log(`Updated ${id}: +1PJ, +${w}PG, +${d}PE, +${l}PP contra ${rivalId}`);
}

// Sevilla (2) vs Atletico Madrid (1) -> Sevilla gana, Atletico pierde
updateTeam('sevilla', 'atletico-madrid', 1, 0, 0); // Sevilla: +1PG
updateTeam('atletico-madrid', 'sevilla', 0, 0, 1); // Atletico Madrid: +1PP
