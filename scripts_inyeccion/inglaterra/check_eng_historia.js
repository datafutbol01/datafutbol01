const fs = require('fs');
const path = require('path');

const dir = 'app/src/data/clubes/inglaterra/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

let out = '';
files.forEach(f => {
  const json = JSON.parse(fs.readFileSync(path.join(dir, f)));
  if (json.historia && json.historia.length > 0) {
    out += `--- ${f} ---\n`;
    out += `[0] ${json.historia[0].hito}: ${json.historia[0].desc.substring(0, 200)}...\n`;
    // Verificamos si tiene algunas palabras poéticas típicas
    const h = json.historia[0].desc.toLowerCase();
    if (h.includes('pletórico') || h.includes('inmaculado') || h.includes('majestuoso') || h.includes('glorioso') || h.includes('estelar')) {
        out += `  -> ⚠️ ADVERTENCIA: Contiene palabras poéticas.\n`;
    }
  }
});

fs.writeFileSync('check_eng_out.txt', out);
console.log('Análisis completado en check_eng_out.txt');
