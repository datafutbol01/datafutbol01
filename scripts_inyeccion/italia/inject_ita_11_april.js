const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia'); // Italy directory? Let's check folder name

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

// Atalanta (0) vs Juventus (1) -> Atalanta pierde, Juventus gana
updateTeam('atalanta', 'juventus', 0, 0, 1); // Atalanta: +1PP
updateTeam('juventus', 'atalanta', 1, 0, 0); // Juventus: +1PG
