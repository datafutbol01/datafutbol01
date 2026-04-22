const fs = require('fs');
const path = require('path');

const srcFolder = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar/aberdeen';
const pubEscudos = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';
const pubHistoricos = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos/aberdeen';
const dbFile = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia/aberdeen.json';
const destProcessed = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar/escocia_procesados/aberdeen';

// Garantizar carpeta de históricos
if (!fs.existsSync(pubHistoricos)) {
  fs.mkdirSync(pubHistoricos, { recursive: true });
}

const files = fs.readdirSync(srcFolder);
let data = JSON.parse(fs.readFileSync(dbFile, 'utf8'));

let evolucion_escudos = [];

files.forEach(file => {
  const fileLower = file.toLowerCase();
  const ext = path.extname(file);
  const srcPath = path.join(srcFolder, file);

  if (fileLower.includes('actual') || fileLower === 'aberdeen.webp' || fileLower === 'aberdeen.png') {
    // Current shield
    const destPath = path.join(pubEscudos, `aberdeen${ext}`);
    fs.copyFileSync(srcPath, destPath);
    evolucion_escudos.push({
      ano: "Actualidad",
      url: `/escudos/aberdeen${ext}`
    });
  } else {
    // Historical shield
    const destPath = path.join(pubHistoricos, file);
    fs.copyFileSync(srcPath, destPath);
    
    // Extract year, e.g., "Aberdeen_FC_logo_1972-1986.webp"
    let ano = "Histórico";
    const match = file.match(/19\d{2}|20\d{2}/); 
    if (match) {
      ano = match[0];
    }
    
    evolucion_escudos.push({
      ano: ano,
      url: `/escudos_historicos/aberdeen/${file}`
    });
  }
});

// Ordenar evolucion_escudos
evolucion_escudos.sort((a, b) => {
  if (a.ano === 'Actualidad') return 1;
  if (b.ano === 'Actualidad') return -1;
  return parseInt(a.ano) - parseInt(b.ano);
});

data.evolucion_escudos = evolucion_escudos;

fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');

// Move to procesados
const procesadosDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar/escocia_procesados';
if (!fs.existsSync(procesadosDir)) {
  fs.mkdirSync(procesadosDir);
}
fs.renameSync(srcFolder, destProcessed);

console.log("Aberdeen procesado exitosamente.");
