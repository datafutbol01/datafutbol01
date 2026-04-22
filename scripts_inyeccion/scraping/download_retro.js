const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app/public/fotos_retro');
if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }

function download(url, dest) {
  const file = fs.createWriteStream(dest);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, function(response) {
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, dest);
      return;
    }
    response.pipe(file);
    file.on('finish', function() { file.close(); });
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    console.error("Error bajando", dest);
  });
}

// Bajar fotos a local
download('https://upload.wikimedia.org/wikipedia/commons/e/e0/Alumni1906.JPG', path.join(dir, 'alumni_1906.jpg'));
download('https://upload.wikimedia.org/wikipedia/commons/d/da/Eliseo-brown.jpg', path.join(dir, 'eliseo_brown.jpg'));
download('https://upload.wikimedia.org/wikipedia/commons/9/91/Belgrano_AC_1908_champion.jpg', path.join(dir, 'belgrano_1908.jpg'));

// Modificar JSON para enlazar las rutas locales
const dfPath = path.join(__dirname, 'app/src/data/ligas/argentina_temporadas.json');
const d = JSON.parse(fs.readFileSync(dfPath, 'utf-8'));

const t06 = d.find(x => x.id === '1906-pd');
if (t06) {
  t06.foto_campeon = '/fotos_retro/alumni_1906.jpg';
  t06.foto_goleador = '/fotos_retro/eliseo_brown.jpg';
}

const t08 = d.find(x => x.id === '1908-pd');
if (t08) {
  t08.foto_equipo_arriba = '/fotos_retro/belgrano_1908.jpg';
  t08.foto_goleador_arriba = '/fotos_retro/eliseo_brown.jpg';
}

fs.writeFileSync(dfPath, JSON.stringify(d, null, 2));
console.log('Fotos descargadas a disco e inyectadas en formato Local (/fotos_retro/...).');
