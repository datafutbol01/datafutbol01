const fs = require('fs');
const path = require('path');

const dataDir = './app/src/data/clubes/';
const escudosRoot = './app/public';
const moveLog = [];

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (let file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, files);
    } else if (filePath.endsWith('.json')) {
      files.push(filePath);
    }
  }
  return files;
}

const jsonFiles = getFiles(dataDir);
let changedCount = 0;

for (let file of jsonFiles) {
  // Ej: path = app\src\data\clubes\inglaterra\arsenal.json
  const parts = file.split(path.sep);
  // dataDir has 4 parts: app, src, data, clubes -> parts[4] = pais, parts[5] = club.json
  const country = parts[parts.length - 2];
  const clubId = path.basename(file, '.json');
  
  const destDir = path.join(escudosRoot, 'escudos', country, clubId);
  
  let jsonStr = fs.readFileSync(file, 'utf8');
  let data;
  try { data = JSON.parse(jsonStr); } catch(e) { continue; }
  
  let jsonChanged = false;

  const processUrlField = (obj, field) => {
     if (obj && obj[field] && typeof obj[field] === 'string') {
        const oldUrl = obj[field];
        // Only process paths mapping to our public folder logic
        if (oldUrl.startsWith('/escudos/') || oldUrl.includes('escudos')) {
             if (oldUrl.startsWith(`/escudos/${country}/${clubId}/`)) return; // Already perfect
             
             // Extract true file name
             const filename = oldUrl.split('/').pop();
             // Current physical path relative to app/public
             const currentPhysicalPath = path.join(escudosRoot, oldUrl);
             const newPhysicalPath = path.join(destDir, filename);
             
             // If original exists, move it
             if (fs.existsSync(currentPhysicalPath)) {
                 if (!fs.existsSync(destDir)) { fs.mkdirSync(destDir, { recursive: true }); }
                 if (currentPhysicalPath !== newPhysicalPath) {
                    fs.cpSync(currentPhysicalPath, newPhysicalPath);
                    try { fs.unlinkSync(currentPhysicalPath); } catch(e){} // Delete old
                 }
             }
             
             const newUrl = `/escudos/${country}/${clubId}/${filename}`;
             if (oldUrl !== newUrl) {
                 obj[field] = newUrl;
                 jsonChanged = true;
             }
        }
     }
  };

  if (data.datos) processUrlField(data.datos, 'escudo_actual');
  if (data.evolucion_escudos) {
     data.evolucion_escudos.forEach(e => processUrlField(e, 'url'));
  }
  if (data.canchas) {
     data.canchas.forEach(c => processUrlField(c, 'foto'));
  }

  if (jsonChanged) {
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
      changedCount++;
  }
}

console.log(`Processed all JSONs. Modified ${changedCount} files and moved their images to /escudos/pais/equipo/`);

// Now create the missing folders block
const missing31 = ['leicester-city', 'swansea-city', 'wigan-athletic', 'birmingham-city', 'portsmouth', 'middlesbrough', 'blackburn-rovers', 'sheffield-wednesday', 'luton-town', 'wimbledon', 'reading-fc', 'coventry-city', 'oxford-united', 'norwich-city', 'ipswich-town', 'derby-county', 'southampton', 'stoke-city', 'swindon-town', 'west-bromwich-albion', 'qpr', 'blackpool', 'preston-north-end', 'huddersfield-town', 'sheffield-united', 'barnsley', 'bury', 'blackburn-olympic', 'old-etonians', 'old-carthusians', 'oxford-university'];

const missingDir = path.join(escudosRoot, 'escudos', '00_A_DESCARGAR_AHORA_INGLATERRA');
if (!fs.existsSync(missingDir)) fs.mkdirSync(missingDir, {recursive: true});

missing31.forEach(id => {
   const d = path.join(missingDir, id);
   if (!fs.existsSync(d)) fs.mkdirSync(d);
});
console.log('Created missing 31 folders in 00_A_DESCARGAR_AHORA_INGLATERRA');
