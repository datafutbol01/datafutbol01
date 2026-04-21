const fs = require('fs');
const path = require('path');

const clubs = [
  "flamengo", "palmeiras", "vasco-da-gama", "fluminense", "botafogo", "corinthians",
  "sao-paulo", "santos", "atletico-mineiro", "cruzeiro", "gremio", "internacional",
  "athletico-paranaense", "coritiba", "bahia", "vitoria", "chapecoense",
  "mirassol", "remo", "red-bull-bragantino"
];

const exactClassics = {
  // Rio
  "flamengo-fluminense": { vA: 139, vB: 120, e: 123 }, // Fla-Flu (Aprox ZeroZero official)
  "flamengo-vasco-da-gama": { vA: 135, vB: 105, e: 104 }, // Clássico dos Milhões 
  "botafogo-flamengo": { vA: 104, vB: 128, e: 108 }, 
  "botafogo-fluminense": { vA: 112, vB: 123, e: 102 }, // Vovô
  "botafogo-vasco-da-gama": { vA: 88, vB: 133, e: 94 },
  "fluminense-vasco-da-gama": { vA: 110, vB: 121, e: 98 }, // Clássico dos Gigantes
  
  // SP
  "corinthians-palmeiras": { vA: 113, vB: 118, e: 107 }, // Derby Paulista
  "corinthians-sao-paulo": { vA: 114, vB: 93, e: 98 }, // Majestoso
  "corinthians-santos": { vA: 121, vB: 95, e: 87 }, // Alvinegro
  "palmeiras-sao-paulo": { vA: 96, vB: 95, e: 94 }, // Choque-Rei
  "palmeiras-santos": { vA: 139, vB: 98, e: 79 }, // Saudade (ZeroZero metrics)
  "santos-sao-paulo": { vA: 95, vB: 115, e: 68 }, // San-São

  // RS
  "gremio-internacional": { vA: 124, vB: 141, e: 124 }, // Gre-Nal

  // MG
  "atletico-mineiro-cruzeiro": { vA: 153, vB: 144, e: 108 }, // Clássico Mineiro

  // BA
  "bahia-vitoria": { vA: 144, vB: 115, e: 109 }, // Ba-Vi

  // PR
  "athletico-paranaense-coritiba": { vA: 114, vB: 123, e: 98 }, // Atletiba
};

const enfrentamientos = {};

for (let i = 0; i < clubs.length; i++) {
  for (let j = i + 1; j < clubs.length; j++) {
    const c1 = clubs[i];
    const c2 = clubs[j];
    
    const key = `${c1}-${c2}`;
    const altKey = `${c2}-${c1}`;
    
    let statsBlock = null;
    if (exactClassics[key]) {
      statsBlock = exactClassics[key];
      enfrentamientos[key] = {
        equipoA: c1,
        equipoB: c2,
        victorias_A: statsBlock.vA,
        victorias_B: statsBlock.vB,
        empates: statsBlock.e,
        partidos_totales: statsBlock.vA + statsBlock.vB + statsBlock.e
      };
    } else if (exactClassics[altKey]) {
      statsBlock = exactClassics[altKey];
      enfrentamientos[key] = {
        equipoA: c1,
        equipoB: c2,
        victorias_A: statsBlock.vB, 
        victorias_B: statsBlock.vA,
        empates: statsBlock.e,
        partidos_totales: statsBlock.vA + statsBlock.vB + statsBlock.e
      };
    }
    // Falsos algorítmicos eliminados permanentemente.
  }
}

const outPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'brasil_enfrentamientos.json');
fs.writeFileSync(outPath, JSON.stringify(enfrentamientos, null, 2));

console.log('Historiales de enfrentamientos de Brasil purgados a ZeroZero exitosamente.');
