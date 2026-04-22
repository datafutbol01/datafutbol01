const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

function fix(teamId, oldKey, newKey) {
  const p = path.join(DIR, `${teamId}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (data.h2h && data.h2h[oldKey]) {
      const addedData = data.h2h[oldKey];
      delete data.h2h[oldKey];
      if (!data.h2h[newKey]) data.h2h[newKey] = { pj: 0, pg: 0, pe: 0, pp: 0 };
      data.h2h[newKey].pj += addedData.pj;
      data.h2h[newKey].pg += addedData.pg;
      data.h2h[newKey].pe += addedData.pe;
      data.h2h[newKey].pp += addedData.pp;
      fs.writeFileSync(p, JSON.stringify(data, null, 2));
      console.log(`Fixed ${teamId}: moved ${oldKey} to ${newKey}`);
  }
}

fix('instituto', 'deportivo-riestra', 'riestra');
fix('independiente-rivadavia', 'argentinos-juniors', 'argentinos-jrs');

const updates = [
  { p1: 'riestra', p2: 'instituto', r1: 0, r2: 1 },
  { p1: 'independiente-rivadavia', p2: 'argentinos-jrs', r1: 3, r2: 1 }
];

function updateTeam(id, rivalId, w, d, l) {
  const p = path.join(DIR, `${id}.json`);
  if (!fs.existsSync(p)) {
      console.log(`NO EXISTE ${id}`);
      return;
  }
  // only update if we didn't already update them incorrectly.
  // We didn't update riestra and argentinos-jrs because they threw NO EXISTE
  if (id === 'riestra' || id === 'argentinos-jrs') {
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
