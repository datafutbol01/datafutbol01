const https = require('https');
const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'app', 'public', 'escudos');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => resolve());
    }).on('error', reject);
  });
};

async function run() {
  try {
    // 2024 shield
    await download('https://static.wikia.nocookie.net/logopedia/images/4/4c/Aston_Villa_FC_%282024%E2%80%93present%29.svg/revision/latest/scale-to-width-down/500?cb=20240507204918', path.join(p, 'aston-villa.png'));
    console.log('✅ aston-villa.png downloaded from Logopedia!');
    
    // 1992 shield (1992-2007 version)
    await download('https://static.wikia.nocookie.net/logopedia/images/2/23/Aston_Villa_FC_%281992-2007%29.svg/revision/latest/scale-to-width-down/500', path.join(p, 'aston-villa_1992.png'));
    console.log('✅ aston-villa_1992.png downloaded from Logopedia!');
    
    // 1874 shield (Lion)
    await download('https://static.wikia.nocookie.net/logopedia/images/e/e0/Aston_Villa_FC_-_1874_logo.png/revision/latest/scale-to-width-down/500', path.join(p, 'aston-villa_1874.png'));
    console.log('✅ aston-villa_1874.png downloaded from Logopedia!');
    
  } catch (err) {
    console.error('Failed:', err);
  }
}

run();
