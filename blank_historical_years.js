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
          // Si el año NO es "Actualidad" (y variaciones), y tampoco arranca con un número (es un texto sucio)
          const anoStr = (escudo.ano || "").toString().trim();
          if (anoStr !== "Actualidad" && isNaN(parseInt(anoStr)) && anoStr !== "") {
             escudo.ano = "";
             changed = true;
          }
        });
      }
      
      if (changed) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        modificados++;
        console.log(`[${liga.toUpperCase()}] Textos borrados en evolución_escudos de: ${file}`);
      }
    }
  });
});

console.log(`\nFinalizado. ${modificados} archivos modificados blanqueando textos basurilla.`);
