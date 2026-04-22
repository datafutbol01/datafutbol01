const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/gonza/futbolhistoria/clubes/app/escudos_a_descargar';
const procesadosDir = path.join(baseDir, 'escocia_procesados');
const pubEscudos = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';
const pubHistoricos = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos';
const dbPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia';

if (!fs.existsSync(procesadosDir)) {
  fs.mkdirSync(procesadosDir, { recursive: true });
}

const clubs = [
  'aberdeen', 'celtic', 'dundee', 'dundee-united', 'hearts',
  'hibernian', 'kilmarnock', 'motherwell', 'rangers', 
  'ross-county', 'st-johnstone', 'st-mirren'
];

clubs.forEach(club => {
  let srcFolder = path.join(baseDir, club);
  let isAlreadyProcessed = false;
  
  if (!fs.existsSync(srcFolder)) {
    srcFolder = path.join(procesadosDir, club);
    isAlreadyProcessed = true;
  }
  
  if (!fs.existsSync(srcFolder)) {
    console.log(`Carpeta para ${club} no encontrada. Se omite.`);
    return;
  }

  const dbFile = path.join(dbPath, `${club}.json`);
  if (!fs.existsSync(dbFile)) {
    console.log(`JSON de ${club} no encontrado. Se omite.`);
    return;
  }
  
  let data = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
  
  // Create historical folder if not exists
  const clubHistoricosDir = path.join(pubHistoricos, club);
  if (!fs.existsSync(clubHistoricosDir)) {
    fs.mkdirSync(clubHistoricosDir, { recursive: true });
  }

  let evolucion_escudos = [];
  const files = fs.readdirSync(srcFolder);

  files.forEach(file => {
    const fileLower = file.toLowerCase();
    const ext = path.extname(file);
    const srcPath = path.join(srcFolder, file);

    // Detect if this is the "current" shield
    // If it says "actual", or matches the club name identically, or if the folder ONLY has 1 shield
    const isCurrent = fileLower.includes('actual') 
                      || fileLower === `${club}${ext}`
                      || files.length === 1;

    if (isCurrent && !fileLower.includes('1991-2020')) {
      const destPath = path.join(pubEscudos, `${club}${ext}`);
      fs.copyFileSync(srcPath, destPath);
      
      // Ensure we only have one 'Actualidad' in the array if multiple trigger this
      if (!evolucion_escudos.some(e => e.ano === "Actualidad")) {
        evolucion_escudos.push({
          ano: "Actualidad",
          url: `/escudos/${club}${ext}`
        });
      }
    } else {
      // Historical shield
      const destPath = path.join(clubHistoricosDir, file);
      fs.copyFileSync(srcPath, destPath);
      
      let ano = "Histórico";
      // Try to match YYYY-YYYY or YYYY_YYYY
      const rangeMatch = file.match(/(\d{4})\s*[-_]\s*(\d{4})/);
      if (rangeMatch) {
        ano = `${rangeMatch[1]}-${rangeMatch[2]}`;
      } else {
        // Fallback to single Year
        const singleMatch = file.match(/(\d{4})/);
        if (singleMatch) {
          ano = singleMatch[1];
        }
      }
      
      evolucion_escudos.push({
        ano: ano,
        url: `/escudos_historicos/${club}/${file}`
      });
    }
  });

  // Sort: historical ascending by year, then 'Actualidad' at the end
  evolucion_escudos.sort((a, b) => {
    if (a.ano === 'Actualidad') return 1;
    if (b.ano === 'Actualidad') return -1;
    let yearA = parseInt(a.ano.substring(0, 4)) || 0;
    let yearB = parseInt(b.ano.substring(0, 4)) || 0;
    return yearA - yearB;
  });

  data.evolucion_escudos = evolucion_escudos;
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');

  // Move processed folder
  if (!isAlreadyProcessed) {
    fs.renameSync(srcFolder, path.join(procesadosDir, club));
  }

  console.log(`[Exito] ${club} actualizado con rangos correctos.`);
});
