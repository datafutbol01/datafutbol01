const fs = require('fs');
const path = require('path');

const ligasDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'uruguay');
const escudosBase = path.join(__dirname, 'app', 'public', 'escudos', 'uruguay');

const files = fs.readdirSync(ligasDir).filter(f => f.endsWith('.json'));

function getActualShield(clubId) {
  if (clubId === 'penarol') return '/escudos/uruguay/penarol/Escudo-penarol-2015actual.webp';
  if (clubId === 'nacional') return '/escudos/uruguay/nacional/Cndef2019-actual.webp';
  
  const escudoDir = path.join(escudosBase, clubId);
  if (!fs.existsSync(escudoDir)) return null;
  
  const images = fs.readdirSync(escudoDir);
  if (images.length === 0) return null;
  
  let validImg = images[0];
  if (validImg.includes('?')) {
     const ext = path.extname(validImg);
     const safe = 'logo_oficial' + ext;
     fs.renameSync(path.join(escudoDir, validImg), path.join(escudoDir, safe));
     validImg = safe;
  }
  return `/escudos/uruguay/${clubId}/${validImg}`;
}

let count = 0;
files.forEach(f => {
  const clubId = f.replace('.json', '');
  const jsonData = JSON.parse(fs.readFileSync(path.join(ligasDir, f), 'utf8'));
  
  const shieldRoute = getActualShield(clubId);
  if (shieldRoute) {
    if (jsonData.datos) {
      jsonData.datos.escudo_actual = shieldRoute;
      // also ensure that array evolucion_escudos exists for future if Nacional/Penarol
      if (!jsonData.evolucion_escudos) jsonData.evolucion_escudos = [];
      fs.writeFileSync(path.join(ligasDir, f), JSON.stringify(jsonData, null, 2));
      count++;
    }
  }
});

console.log(`✅ ${count} escudos inyectados en los JSON de los clubes.`);
