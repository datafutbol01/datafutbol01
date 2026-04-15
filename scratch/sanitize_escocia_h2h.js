const fs = require('fs');
const path = require('path');

const dirPath = path.join('C:', 'Users', 'gonza', 'futbolhistoria', 'clubes', 'app', 'src', 'data', 'clubes', 'escocia');

let borrados = 0;
let procesados = 0;

try {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    if (file.endsWith('.json')) {
      procesados++;
      const filePath = path.join(dirPath, file);
      const data = fs.readFileSync(filePath, 'utf8');
      
      try {
        const json = JSON.parse(data);
        let modificado = false;
        
        // Remove any variations of the mistakenly injected H2H histories
        if (json.historial) {
          delete json.historial;
          modificado = true;
        }
        if (json.historial_h2h) {
          delete json.historial_h2h;
          modificado = true;
        }
        if (json.h2h) {
          delete json.h2h;
          modificado = true;
        }

        if (modificado) {
          fs.writeFileSync(filePath, JSON.stringify(json, null, 4), 'utf8');
          console.log(`[LIMPIO] Propiedad intrusa borrada de: ${file}`);
          borrados++;
        }
      } catch (err) {
        console.error(`Error procesando JSON en ${file}:`, err.message);
      }
    }
  });

  console.log(`\nRevisión completa: ${procesados} archivos analizados. Se limpiaron ${borrados} equipos.`);
} catch (e) {
  console.error("Error crítico accediendo a la carpeta:", e.message);
}
