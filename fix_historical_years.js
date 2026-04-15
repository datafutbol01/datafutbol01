const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes');
const ligas = ['argentina', 'inglaterra', 'espania', 'italia', 'alemania', 'francia'];

let modificados = 0;

ligas.forEach(liga => {
  const dir = path.join(baseDir, liga);
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(dir, file);
      let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      let changed = false;
      if (data.evolucion_escudos && Array.isArray(data.evolucion_escudos)) {
        data.evolucion_escudos.forEach(escudo => {
          const anoLow = (escudo.ano || "").toString().toLowerCase();
          // Detectamos si el año es 'histórico', 'historico' u otro texto genérico
          if (anoLow.includes("histórico") || anoLow.includes("historico") || anoLow.trim() === "") {
             // intentar sacar del url
             if (escudo.url) {
               // Busca patrones como 1890, 1890-1920, 1890-95, 1890-19, etc.
               const match = escudo.url.match(/((?:18|19|20)\d{2}(?:\s*-\s*\d{2,4})?)/);
               if (match && match[1]) {
                 escudo.ano = match[1];
                 changed = true;
               }
             }
          }
        });
      }
      
      if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        modificados++;
        console.log(`[${liga.toUpperCase()}] Corregidos años de escudos en: ${file}`);
      }
    }
  });
});

console.log(`\nFinalizado. ${modificados} archivos modificados globalmente reasignando el año desde la URL.`);
