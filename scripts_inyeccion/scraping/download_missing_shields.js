const https = require('https');
const fs = require('fs');
const path = require('path');

const shields = [
  { id: 'boca-juniors', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Boca_Juniors_logo18.png' },
  { id: 'defensa-justicia', url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Escudo_del_Club_Social_y_Deportivo_Defensa_y_Justicia.png' },
  { id: 'estudiantes-lp', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Estudiantes_de_La_Plata_logo.png' },
  { id: 'estudiantes-rc', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_A._A._Estudiantes_%28R%C3%ADo_Cuarto%29.png' },
  { id: 'huracan', url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Escudo_de_Hurac%C3%A1n.png' },
  { id: 'independiente-rivadavia', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Escudo_de_Independiente_Rivadavia.png' },
  { id: 'instituto', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Instituto_Atletico_Central_Cordoba_logo.png' },
  { id: 'lanus', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Escudo_del_Club_Atl%C3%A9tico_Lan%C3%BAs.svg' },
  { id: 'newells-old-boys', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Escudo_del_Club_Atl%C3%A9tico_Newell%27s_Old_Boys.png' },
  { id: 'platense', url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Logo_d_C_A_Platense.png' },
  { id: 'racing-club', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Racing_Club_logo.png' }
];

const destFolder = path.join(__dirname, 'app', 'public', 'escudos');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        return reject(new Error('Failed ' + res.statusCode + ' for ' + url));
      }

      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const s of shields) {
    // Wikipedia has issues sometimes with SVG, we try our best.
    const isSvg = s.url.endsWith('.svg');
    const ext = isSvg ? '.svg' : '.png';
    const filePath = path.join(destFolder, s.id + ext);
    
    try {
      console.log('Descargando', s.id, '...');
      await download(s.url, filePath);
      console.log('=> OK:', s.id);
      
      if (isSvg) {
          console.log('    Guardado como SVG. Puedes borrar el .png que haya.');
      }
      
    } catch (e) {
      console.error('=> ERROR:', s.id, e.message);
    }
  }
}

run();
