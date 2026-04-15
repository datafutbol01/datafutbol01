const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'app/src/data/clubes/espania');
const publicDir = path.join(__dirname, 'app/public');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

let missing = [];
let totalCheck = 0;

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file)));
  if (data.evolucion_escudos) {
    for (const esc of data.evolucion_escudos) {
      if (esc.ano !== 'Actualidad') {
        const filePath = path.join(publicDir, esc.url);
        totalCheck++;
        if (!fs.existsSync(filePath)) {
          missing.push(`- ${data.id} (${esc.ano}): Falta la imagen física [${esc.url}]`);
        }
      }
    }
  }
}

if (missing.length === 0) {
  console.log(`Auditoría perfecta. Se chequearon ${totalCheck} escudos históricos y TODOS los archivos físicos existen.`);
} else {
  console.log(`Auditoría finalizada. Se chequearon ${totalCheck} escudos históricos.`);
  console.log('\nATENCIÓN: FALTAN LOS SIGUIENTES ARCHIVOS:\n');
  console.log(missing.join('\n'));
}
