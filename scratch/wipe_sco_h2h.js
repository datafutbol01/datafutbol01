const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'escocia');

try {
  const files = fs.readdirSync(directoryPath);
  
  let borrados = 0;
  files.forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(directoryPath, file);
      const data = fs.readFileSync(filePath, 'utf8');
      
      try {
        const json = JSON.parse(data);
        if (json.historial) {
          delete json.historial;
          fs.writeFileSync(filePath, JSON.stringify(json, null, 4), 'utf8');
          console.log(`[OK] Historial borrado de: ${file}`);
          borrados++;
        }
      } catch (e) {
        console.error(`Error parseando ${file}:`, e.message);
      }
    }
  });
  
  console.log(`\nProceso terminado. Se borró el historial de ${borrados} equipos en total.`);
} catch (e) {
  console.error("Error ascediendo al directorio:", e.message);
}
