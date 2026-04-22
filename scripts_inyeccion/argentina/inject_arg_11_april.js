const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

const updates = [
  { p1: 'deportivo-riestra', p2: 'instituto', r1: 0, r2: 1 },
  { p1: 'independiente-rivadavia', p2: 'argentinos-juniors', r1: 3, r2: 1 },
  { p1: 'estudiantes-lp', p2: 'union', r1: 2, r2: 1 },
  { p1: 'boca-juniors', p2: 'independiente', r1: 1, r2: 1 },
  { p1: 'estudiantes-rc', p2: 'barracas-central', r1: 1, r2: 2 }
];

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

for (const match of updates) {
  let w1 = 0, d1 = 0, l1 = 0;
  let w2 = 0, d2 = 0, l2 = 0;

  if (match.r1 > match.r2) { w1=1; l2=1; }
  else if (match.r1 < match.r2) { l1=1; w2=1; }
  else { d1=1; d2=1; }

  updateTeam(match.p1, match.p2, w1, d1, l1);
  updateTeam(match.p2, match.p1, w2, d2, l2);
}
