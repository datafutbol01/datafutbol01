const https = require('https');
const fs = require('fs');
const path = require('path');

const targetClubs = [
  { id: 'defensa-justicia', search: 'Escudo Defensa y Justicia' },
  { id: 'tigre', search: 'Escudo Club Atletico Tigre' },
  { id: 'platense', search: 'Escudo Club Atletico Platense' },
  { id: 'belgrano-cba', search: 'Escudo Belgrano Cordoba' },
  { id: 'instituto', search: 'Escudo Instituto Cordoba' }
];

const escudosDir = path.join(__dirname, 'app', 'public', 'escudos');

if (!fs.existsSync(escudosDir)) {
  fs.mkdirSync(escudosDir, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'FutbolHistoriaApp/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function huntShields() {
  console.log('🦅 Iniciando la cacería de Escudos Históricos por Tanda de Varios Clubes...');
  
  for (const club of targetClubs) {
    console.log(`\nBuscando imágenes para: ${club.id}...`);
    try {
      // 1. Buscar archivos en Wikimedia Commons
      const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=File:${encodeURIComponent(club.search)}&utf8=&format=json&srnamespace=6&srlimit=5`;
      const searchResult = await fetchJson(searchUrl);
      
      const files = searchResult.query.search;
      if (files.length === 0) {
        console.log(`   ❌ No se encontraron escudos históricos en Wikimedia para ${club.search}.`);
        continue;
      }

      let count = 1;
      for (const file of files) {
        // 2. Obtener la URL directa de la imagen
        const fileInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(file.title)}&prop=imageinfo&iiprop=url&format=json`;
        const infoResult = await fetchJson(fileInfoUrl);
        
        const pages = infoResult.query.pages;
        const pageId = Object.keys(pages)[0];
        const imageUrl = pages[pageId].imageinfo?.[0]?.url;

        if (imageUrl && (imageUrl.endsWith('.png') || imageUrl.endsWith('.svg'))) {
          // Si es SVG, cambiamos la extensión a .svg, sino .png
          const ext = imageUrl.endsWith('.svg') ? '.svg' : '.png';
          const destName = `${club.id}_retro_hunted_${count}${ext}`;
          const destPath = path.join(escudosDir, destName);
          
          await downloadImage(imageUrl, destPath);
          console.log(`   ✅ Descargado exitosamente: ${destName}`);
          count++;
        }
      }
    } catch (error) {
      console.error(`   ⚠️ Error buscando a ${club.id}: ${error.message}`);
    }
  }
  
  console.log('\n🏁 Cacería masiva terminada. Revisá la carpeta /app/public/escudos/.');
}

huntShields();
