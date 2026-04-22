const https = require('https');
const fs = require('fs');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (response) => {
      if (response.statusCode === 200) {
         const file = fs.createWriteStream(dest);
         response.pipe(file);
         file.on('finish', () => { file.close(); resolve(); });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
         download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
         reject('Status: ' + response.statusCode + ' for ' + url);
      }
    }).on('error', reject);
  });
};

async function run() {
  try {
    const escudosDir = path.join(__dirname, 'app', 'public', 'escudos');
    
    await download('https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Aston_Villa_logo.svg/512px-Aston_Villa_logo.svg.png', path.join(escudosDir, 'aston-villa.png'));
    console.log('✅ aston-villa.png bajado');
    
    await download('https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Aston_Villa.svg/512px-Aston_Villa.svg.png', path.join(escudosDir, 'aston-villa_1992.png'));
    console.log('✅ aston-villa_1992.png bajado');
    
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lion_Rampant_of_Scotland.svg/512px-Lion_Rampant_of_Scotland.svg.png', path.join(escudosDir, 'aston-villa_1874.png'));
    console.log('✅ aston-villa_1874.png bajado');
    
  } catch (e) {
    console.error('Error:', e);
  }
}
run();
