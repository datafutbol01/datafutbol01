const fs = require('fs');
const path = require('path');

const dirPath = 'C:\\Users\\gonza\\futbolhistoria\\clubes';

let procesados = 0;
let borrados = 0;

try {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    // Solo apuntamos al directorio raíz donde están boca-juniors.json, racing-club.json, etc.
    // Excluimos archivos que no son de clubes.
    const exclude = ['exts.json', 'exts-historicos.json', 'clean_data.json', 'sco_players.json'];
    if (file.endsWith('.json') && !exclude.includes(file)) {
      procesados++;
      const filePath = path.join(dirPath, file);
      const data = fs.readFileSync(filePath, 'utf8');
      
      try {
        const json = JSON.parse(data);
        let modificado = false;
        
        // Buscamos todas las variantes del array de h2h que inyecté en sesiones anteriores
        if (json.historial_rivales) {
          delete json.historial_rivales;
          modificado = true;
        }
        if (json.historial_h2h) {
          delete json.historial_h2h;
          modificado = true;
        }
        if (json.historial) {
          delete json.historial;
          modificado = true;
        }

        if (modificado) {
          fs.writeFileSync(filePath, JSON.stringify(json, null, 4), 'utf8');
          console.log(`[LIMPIO] H2H borrado del archivo maestro: ${file}`);
          borrados++;
        }
      } catch (err) {
        console.error(`Error parseando ${file}:`, err.message);
      }
    }
  });

  console.log(`\nRevisión de Archivos Maestros: ${procesados} .json escaneados. Se limpiaron ${borrados} clubes raíz.`);
} catch (e) {
  console.error("Error crítico:", e.message);
}
