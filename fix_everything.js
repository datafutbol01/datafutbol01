const fs = require('fs');
const path = require('path');

const ligasDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'uruguay');
const escudosBase = path.join(__dirname, 'app', 'public', 'escudos', 'uruguay');
const temporadasPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'uruguay_temporadas.json');

const files = fs.readdirSync(ligasDir).filter(f => f.endsWith('.json'));

let routeMap = {};

// 1. Rename files cleanly and update Club JSONs
files.forEach(f => {
  const clubId = f.replace('.json', '');
  const jsonData = JSON.parse(fs.readFileSync(path.join(ligasDir, f), 'utf8'));
  
  if (clubId === 'penarol' || clubId === 'nacional') {
      routeMap[clubId] = clubId === 'penarol' 
        ? '/escudos/uruguay/penarol/Escudo-penarol-2015actual.webp' 
        : '/escudos/uruguay/nacional/Cndef2019-actual.webp';
      return;
  }

  const escudoDir = path.join(escudosBase, clubId);
  if (!fs.existsSync(escudoDir)) return;
  
  const images = fs.readdirSync(escudoDir);
  if (images.length === 0) return;
  
  // Pick the file
  let validImg = images[0];
  const oldPath = path.join(escudoDir, validImg);
  
  const ext = path.extname(validImg) || '.png';
  const safeName = `logo${ext}`;
  const newPath = path.join(escudoDir, safeName);
  
  if (validImg !== safeName) {
     fs.renameSync(oldPath, newPath);
  }
  
  const shieldRoute = `/escudos/uruguay/${clubId}/${safeName}`;
  routeMap[clubId] = shieldRoute;
  
  if (jsonData.datos) {
    jsonData.datos.escudo_actual = shieldRoute;
    fs.writeFileSync(path.join(ligasDir, f), JSON.stringify(jsonData, null, 2));
  }
});

// 2. Update uruguay_temporadas.json
const mapClubDir = {
  "Danubio": "danubio",
  "Defensor": "defensor-sporting",
  "Defensor Sporting": "defensor-sporting",
  "Montevideo Wanderers": "montevideo-wanderers",
  "Progreso": "progreso",
  "Central Español": "central-espanol",
  "Liverpool": "liverpool"
};

const temporadas = JSON.parse(fs.readFileSync(temporadasPath, 'utf8'));
temporadas.forEach(t => {
  if (t.campeon === "CURCC") {
    t.escudo_historico = "/escudos/uruguay/penarol/Emblema_CURCC.webp";
  } else if (t.campeon === "Peñarol") {
    t.escudo_historico = routeMap['penarol'];
  } else if (t.campeon === "Nacional") {
    t.escudo_historico = routeMap['nacional'];
  } else if (mapClubDir[t.campeon] && routeMap[mapClubDir[t.campeon]]) {
    t.escudo_historico = routeMap[mapClubDir[t.campeon]];
  }
});

fs.writeFileSync(temporadasPath, JSON.stringify(temporadas, null, 2));
console.log("¡Todo reparado! Escudos actualizados en clubes y temporadas.");
