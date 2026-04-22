const fs = require('fs');
const path = require('path');

const ligasDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'uruguay');
const escudosBase = path.join(__dirname, 'app', 'public', 'escudos', 'uruguay');

const files = fs.readdirSync(ligasDir).filter(f => f.endsWith('.json'));

let count = 0;
files.forEach(f => {
  const clubId = f.replace('.json', '');
  const jsonData = JSON.parse(fs.readFileSync(path.join(ligasDir, f), 'utf8'));
  
  if (clubId === 'penarol' || clubId === 'nacional') return;

  const escudoDir = path.join(escudosBase, clubId);
  if (!fs.existsSync(escudoDir)) return;
  
  const images = fs.readdirSync(escudoDir);
  if (images.length === 0) return;
  
  let validImg = images[0];
  const oldPath = path.join(escudoDir, validImg);
  
  // Force rename to a perfectly safe lowercase ascii name `logo_club.EXT`
  const ext = path.extname(validImg);
  const safe = `logo_${clubId}${ext}`;
  const newPath = path.join(escudoDir, safe);
  
  if (validImg !== safe) {
     fs.renameSync(oldPath, newPath);
     validImg = safe;
  }
  
  const shieldRoute = `/escudos/uruguay/${clubId}/${validImg}`;
  if (jsonData.datos) {
    jsonData.datos.escudo_actual = shieldRoute;
    fs.writeFileSync(path.join(ligasDir, f), JSON.stringify(jsonData, null, 2));
    count++;
  }
});

console.log(`✅ ${count} escudos corregidos estructuralmente en disco y en JSON.`);
