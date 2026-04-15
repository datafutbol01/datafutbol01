const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const files = fs.readdirSync(dir);

let count = 0;

files.forEach(file => {
  if(file.endsWith('.json')) {
    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (data.evolucion_escudos && Array.isArray(data.evolucion_escudos)) {
      data.evolucion_escudos = data.evolucion_escudos.map(escudo => {
        // Dejamos solo "ano" y "url"
        return {
          ano: escudo.ano,
          url: escudo.url
        };
      });
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      count++;
      console.log(`[FRANCIA] Limpiados escudos en: ${file}`);
    }
  }
});

console.log(`\nFinalizado. ${count} clubes modificados en Francia.`);
