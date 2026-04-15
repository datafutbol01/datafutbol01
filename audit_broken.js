const fs = require('fs');
const path = require('path');
const clubesDir = path.join(__dirname, 'app/src/data/clubes/espania');
const publicDir = path.join(__dirname, 'app/public');
const files = fs.readdirSync(clubesDir).filter(f => f.endsWith('.json'));

let deadLinks = [];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(clubesDir, file)));
  
  if (data.datos && data.datos.escudo_actual) {
    const actFile = path.join(publicDir, data.datos.escudo_actual);
    if (!fs.existsSync(actFile)) deadLinks.push(`[ACTUAL] ${data.id}: ${data.datos.escudo_actual}`);
  }

  if (data.evolucion_escudos) {
    for (const esc of data.evolucion_escudos) {
      if (esc.url) {
         const histFile = path.join(publicDir, esc.url);
         if (!fs.existsSync(histFile)) deadLinks.push(`[HISTORICO] ${data.id} (${esc.ano}): ${esc.url}`);
      }
    }
  }
}

if (deadLinks.length > 0) {
  console.log('ENCONTRADOS LINKS ROTOS:');
  deadLinks.forEach(dl => console.log('- ' + dl));
} else {
  console.log('Todo esta perfecto y 100% matcheado.');
}
