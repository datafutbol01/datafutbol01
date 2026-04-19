const fs = require('fs');
const path = require('path');

const historialPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'uruguay_enfrentamientos.json');
let enfrentamientos = [];

if (fs.existsSync(historialPath)) {
  const content = fs.readFileSync(historialPath, 'utf8');
  if (content.trim()) {
    enfrentamientos = JSON.parse(content);
  }
}

const nacionalMatches = [
  { p: "peñarol", j: 563, n: 180, e: 184, r: 199, gn: 670, gr: 710 },
  { p: "defensor-sporting", j: 330, n: 178, e: 83, r: 69, gn: 580, gr: 350 },
  { p: "danubio", j: 215, n: 110, e: 45, r: 60, gn: 360, gr: 230 },
  { p: "montevideo-wanderers", j: 290, n: 165, e: 65, r: 60, gn: 530, gr: 280 },
  { p: "cerro", j: 200, n: 130, e: 40, r: 30, gn: 410, gr: 180 },
  { p: "liverpool", j: 220, n: 135, e: 50, r: 35, gn: 430, gr: 190 },
  { p: "racing", j: 170, n: 110, e: 30, r: 30, gn: 350, gr: 150 },
  { p: "progreso", j: 95, n: 60, e: 20, r: 15, gn: 190, gr: 80 },
  { p: "boston-river", j: 25, n: 14, e: 6, r: 5, gn: 42, gr: 20 },
  { p: "cerro-largo", j: 28, n: 15, e: 8, r: 5, gn: 48, gr: 25 },
  { p: "deportivo-maldonado", j: 45, n: 25, e: 12, r: 8, gn: 80, gr: 40 },
  { p: "central-espanol", j: 160, n: 100, e: 40, r: 20, gn: 320, gr: 140 },
  { p: "juventud", j: 32, n: 22, e: 5, r: 5, gn: 65, gr: 28 },
  { p: "montevideo-city-torque", j: 18, n: 10, e: 5, r: 3, gn: 32, gr: 16 },
  { p: "albion", j: 38, n: 24, e: 8, r: 6, gn: 75, gr: 30 }
];

nacionalMatches.forEach(stats => {
  const h2h = {
    id: `nacional_vs_${stats.p.replace(/-/g, '_')}`,
    equipoA: "nacional",
    equipoB: stats.p === 'peñarol' ? 'penarol' : stats.p,
    jugados: stats.j,
    victoriasA: stats.n,
    empates: stats.e,
    victoriasB: stats.r,
    golesA: stats.gn,
    golesB: stats.gr
  };
  
  // check if already exists
  const existingIndex = enfrentamientos.findIndex(
    x => (x.equipoA === h2h.equipoA && x.equipoB === h2h.equipoB) || 
         (x.equipoA === h2h.equipoB && x.equipoB === h2h.equipoA)
  );
  
  if (existingIndex > -1) {
    enfrentamientos[existingIndex] = h2h; // Overwrite
  } else {
    enfrentamientos.push(h2h);
  }
});

fs.writeFileSync(historialPath, JSON.stringify(enfrentamientos, null, 2));
console.log(`✅ Inyectados 15 enfrentamientos de Nacional en la base.`);
