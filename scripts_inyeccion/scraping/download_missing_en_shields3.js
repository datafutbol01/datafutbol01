const https = require('https');
const fs = require('fs');
const path = require('path');

const clubs = [
  { id: 'crystal-palace', url: 'https://crests.football-data.org/354.png' },
  { id: 'liverpool', url: 'https://crests.football-data.org/64.svg' },
  { id: 'manchester-united', url: 'https://crests.football-data.org/66.png' },
  { id: 'newcastle', url: 'https://crests.football-data.org/67.png' },
  { id: 'nottingham-forest', url: 'https://crests.football-data.org/351.png' },
  { id: 'sunderland', url: 'https://crests.football-data.org/71.svg' },
  { id: 'tottenham', url: 'https://crests.football-data.org/73.svg' },
  { id: 'west-ham', url: 'https://crests.football-data.org/563.png' }
];

const destFolder = path.join(__dirname, 'app', 'public', 'escudos');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('Failed ' + res.statusCode));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
    }).on('error', reject);
  });
}

async function run() {
  for (const c of clubs) {
    // try PNG first, if fails try SVG
    let dest = path.join(destFolder, `${c.id}.png`);
    try {
        console.log(`Descargando ${c.url}...`);
        await download(c.url, dest);
        console.log(`=> OK: ${c.id}`);
    } catch (e) {
        console.error(`=> Failed PNG for ${c.id}. Trying SVG / alternate extension...`);
        let altUrl = c.url.endsWith('.png') ? c.url.replace('.png', '.svg') : c.url.replace('.svg', '.png');
        try {
            await download(altUrl, dest);
            console.log(`=> OK: ${c.id} (Alternative)`);
        } catch(e2) {
           console.error(`=> Failed entirely for ${c.id}.`);
        }
    }
  }
}

run();
