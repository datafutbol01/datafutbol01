const https = require('https');
const fs = require('fs');
const path = require('path');

const escudosDir = path.join(__dirname, 'app/public/escudos');

const urls = [
  ['rosario-central.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Escudo_del_Club_Atl%C3%A9tico_Rosario_Central.svg/256px-Escudo_del_Club_Atl%C3%A9tico_Rosario_Central.svg.png'],
  ['san-lorenzo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/San_Lorenzo_de_Almagro_logo.svg/256px-San_Lorenzo_de_Almagro_logo.svg.png'],
  ['talleres-cba.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Escudo_Club_Atl%C3%A9tico_Talleres_%28C%C3%B3rdoba%29.svg/256px-Escudo_Club_Atl%C3%A9tico_Talleres_%28C%C3%B3rdoba%29.svg.png'],
  ['velez-sarsfield.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg/256px-Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg.png'],
  ['tigre.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Club_Atl%C3%A9tico_Tigre.svg/256px-Club_Atl%C3%A9tico_Tigre.svg.png']
];

const options = {
    headers: {
        'User-Agent': 'MiEnciclopediaFutbolBot/1.0 (https://github.com/ejemplo) Node.js'
    }
};

async function download() {
  for (const [filename, url] of urls) {
    await new Promise((resolve) => {
        const dest = path.join(escudosDir, filename);
        https.get(url, options, (res) => {
          if (res.statusCode === 200) {
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(console.log(`Descargado ${filename}`)); });
          } else {
              resolve(console.error(`Error al descargar ${filename}: ${res.statusCode}`));
          }
        }).on('error', (e) => resolve(console.error(e)));
    });
    // Delay 2s
    await new Promise(r => setTimeout(r, 2000));
  }
}
download();
