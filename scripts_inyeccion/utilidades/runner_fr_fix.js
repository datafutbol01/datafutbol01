const fs = require('fs');
const path = require('path');

const fr1 = require('./fix_fr_1');
const fr2 = require('./fix_fr_2');
const fr3 = require('./fix_fr_3');

// Unir todos los diccionarios
const allFixes = { ...fr1, ...fr2, ...fr3 };

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const clubId = file.replace('.json', '');
    if (allFixes[clubId]) {
      const filePath = path.join(dir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      const foundacionOriginal = data.historia[0];
      data.historia = [foundacionOriginal, ...allFixes[clubId]];

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[OK] Hitos poéticos purgados en ${clubId}`);
    }
  }
}
console.log('Finalizado: Los 18 clubes franceses tienen lenguaje estrictamente fáctico.');
