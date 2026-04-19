const fs = require('fs');
const path = require('path');

const escudosBase = path.join(__dirname, 'app', 'public', 'escudos', 'uruguay');
const temporadasPath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'uruguay_temporadas.json');

const targets = [
  { dir: 'river-plate-fc', campeon: 'River Plate FC' },
  { dir: 'rampla-juniors', campeon: 'Rampla Juniors' },
  { dir: 'bella-vista', campeon: 'Bella Vista' }
];

let routeMap = {};

targets.forEach(t => {
  const escudoDir = path.join(escudosBase, t.dir);
  if (!fs.existsSync(escudoDir)) return;
  
  const images = fs.readdirSync(escudoDir);
  if (images.length === 0) return;
  
  let validImg = images[0];
  const oldPath = path.join(escudoDir, validImg);
  
  const ext = path.extname(validImg) || '.png';
  const safeName = `logo${ext}`;
  const newPath = path.join(escudoDir, safeName);
  
  if (validImg !== safeName) {
     fs.renameSync(oldPath, newPath);
  }
  
  routeMap[t.campeon] = `/escudos/uruguay/${t.dir}/${safeName}`;
});

const temporadas = JSON.parse(fs.readFileSync(temporadasPath, 'utf8'));

temporadas.forEach(t => {
  if (routeMap[t.campeon]) {
    t.escudo_historico = routeMap[t.campeon];
  }
});

fs.writeFileSync(temporadasPath, JSON.stringify(temporadas, null, 2));
console.log("¡Inyección de los 3 históricos completada!");
