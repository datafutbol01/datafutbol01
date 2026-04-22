const https = require('https');
const fs = require('fs');
const path = require('path');

const escudosDir = path.join(__dirname, 'app/public/escudos');

const urls = {
  'rosario-central.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Escudo_del_Club_Atl%C3%A9tico_Rosario_Central.svg/512px-Escudo_del_Club_Atl%C3%A9tico_Rosario_Central.svg.png',
  'san-lorenzo.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/San_Lorenzo_de_Almagro_logo.svg/512px-San_Lorenzo_de_Almagro_logo.svg.png',
  'talleres-cba.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Escudo_Club_Atl%C3%A9tico_Talleres_%28C%C3%B3rdoba%29.svg/512px-Escudo_Club_Atl%C3%A9tico_Talleres_%28C%C3%B3rdoba%29.svg.png',
  'velez-sarsfield.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg/512px-Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg.png',
  'tigre.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Club_Atl%C3%A9tico_Tigre.svg/512px-Club_Atl%C3%A9tico_Tigre.svg.png' // corrected url
};

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
};

Object.entries(urls).forEach(([filename, url]) => {
  const dest = path.join(escudosDir, filename);
  https.get(url, options, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Descargado ${filename}`);
      });
    } else {
        console.error(`Error al descargar ${filename}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error en la solicitud de ${filename}: ${err.message}`);
  });
});
