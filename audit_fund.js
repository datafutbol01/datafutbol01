const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'app/src/data/clubes/espania');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

let output = '';
for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file)));
  const fund = data.historia[0];
  output += `\n=================================\n--- ${data.datos.nombre_corto || data.id} ---\n`;
  if (fund) {
    output += `Año: ${fund.ano}\nHito: ${fund.hito}\nDesc: ${fund.desc}\n`;
  } else {
    output += `NO HAY HISTORIA DE FUNDACIÓN\n`;
  }
}
fs.writeFileSync('audit_fundacion_esp.txt', output);
console.log('Extraído en audit_fundacion_esp.txt');
