const https = require('https');
const fs = require('fs');
const path = require('path');

const clubs = [
  { id: 'crystal-palace', search: 'File:Crystal_Palace_FC_logo.svg' },
  { id: 'liverpool', search: 'File:Liverpool_FC_logo.svg' },
  { id: 'manchester-united', search: 'File:Manchester_United_FC_crest.svg' },
  { id: 'newcastle', search: 'File:Newcastle_United_Logo.svg' },
  { id: 'nottingham-forest', search: 'File:Nottingham_Forest_logo.svg' },
  { id: 'sunderland', search: 'File:Sunderland_AFC_logo.svg' },
  { id: 'tottenham', search: 'File:Tottenham_Hotspur.svg' },
  { id: 'west-ham', search: 'File:West_Ham_United_FC_logo.svg' }
];

const destFolder = path.join(__dirname, 'app', 'public', 'escudos');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 303) {
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

async function getWikiImageUrl(filename) {
  return new Promise((resolve, reject) => {
    const api = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
    https.get(api, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
           const json = JSON.parse(data);
           const pages = json.query.pages;
           const page = pages[Object.keys(pages)[0]];
           if (page && page.imageinfo && page.imageinfo.length > 0) {
             resolve(page.imageinfo[0].url);
           } else {
             reject(new Error('Image info not found'));
           }
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const c of clubs) {
    console.log(`Buscando URL para ${c.id}...`);
    try {
      let url = await getWikiImageUrl(c.search);
      let ext = url.split('.').pop().split('?')[0];
      if (!ext) ext = 'png';
      
      const filePath = path.join(destFolder, `${c.id}.png`);
      console.log(`Descargando ${url} -> ${filePath}`);
      await download(url, filePath);
      console.log(`=> OK: ${c.id}`);
    } catch(e) {
      console.error(`=> ERROR con ${c.id}: ${e.message}`);
    }
    await delay(3000); // 3 second delay to avoid 429 Too Many Requests
  }
}

run();
