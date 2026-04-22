const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'app', 'public', 'escudos', 'uruguay');

function getSafeFile(dir) {
  const dirPath = path.join(basePath, dir);
  if (!fs.existsSync(dirPath)) return null;
  const files = fs.readdirSync(dirPath);
  if (files.length === 0) return null;
  let file = files[0];
  
  // if broken filename, try to rename
  if (file.includes('')) {
    const ext = path.extname(file);
    const newName = 'logo_limpio' + ext;
    fs.renameSync(path.join(dirPath, file), path.join(dirPath, newName));
    file = newName;
  }
  return `/escudos/uruguay/${dir}/${file}`;
}

const mapClubDir = {
  "Danubio": "danubio",
  "Defensor": "defensor-sporting",
  "Defensor Sporting": "defensor-sporting",
  "Montevideo Wanderers": "montevideo-wanderers",
  "Progreso": "progreso",
  "Central Español": "central-espanol",
  "Liverpool": "liverpool"
};

const temporadasPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'uruguay_temporadas.json');
const temporadas = JSON.parse(fs.readFileSync(temporadasPath, 'utf8'));

temporadas.forEach(t => {
  if (t.campeon === "CURCC") {
    t.escudo_historico = "/escudos/uruguay/penarol/Emblema_CURCC.webp";
  } else if (t.campeon === "Peñarol") {
    t.escudo_historico = "/escudos/uruguay/penarol/Escudo-penarol-2015actual.webp";
  } else if (t.campeon === "Nacional") {
    t.escudo_historico = "/escudos/uruguay/nacional/Cndef2019-actual.webp";
  } else if (mapClubDir[t.campeon]) {
    const filePath = getSafeFile(mapClubDir[t.campeon]);
    if (filePath) {
      t.escudo_historico = filePath;
    }
  } else if (t.campeon === "A definir") {
     // do nothing
  }
});

fs.writeFileSync(temporadasPath, JSON.stringify(temporadas, null, 2));
console.log("Inyección dura de escudos_historicos en uruguay_temporadas.json completada para todos los años.");
