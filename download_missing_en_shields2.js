const https = require('https');
const fs = require('fs');
const path = require('path');

const clubs = [
  { id: 'crystal-palace', article: 'Crystal_Palace_F.C.' },
  { id: 'liverpool', article: 'Liverpool_F.C.' },
  { id: 'manchester-united', article: 'Manchester_United_F.C.' },
  { id: 'newcastle', article: 'Newcastle_United_F.C.' },
  { id: 'nottingham-forest', article: 'Nottingham_Forest_F.C.' },
  { id: 'sunderland', article: 'Sunderland_A.F.C.' },
  { id: 'tottenham', article: 'Tottenham_Hotspur_F.C.' },
  { id: 'west-ham', article: 'West_Ham_United_F.C.' }
];

const destFolder = path.join(__dirname, 'app', 'public', 'escudos');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 303) {
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
    console.log(`Buscando ${c.id}...`);
    try {
      // Step 1: get main image of the Wikipedia article
      const api = `https://en.wikipedia.org/w/api.php?action=query&titles=${c.article}&prop=pageimages&pithumbsize=500&format=json`;
      const data = await new Promise((res, rej) => {
        https.get(api, { headers: { 'User-Agent': 'NodeBot/1.0' } }, r => {
          let d = '';
          r.on('data', chunk => d += chunk);
          r.on('end', () => res(d));
        }).on('error', rej);
      });
      
      const json = JSON.parse(data);
      const pages = json.query.pages;
      const page = pages[Object.keys(pages)[0]];
      
      if (!page || !page.thumbnail || !page.thumbnail.source) {
         console.log(`=> No thumbnail found for ${c.id}`);
         continue;
      }
      
      let imgUrl = page.thumbnail.source;
      const filePath = path.join(destFolder, `${c.id}.png`);
      console.log(`Descargando ${imgUrl}`);
      await download(imgUrl, filePath);
      console.log(`=> OK: ${c.id}`);
    } catch(e) {
      console.error(`=> ERROR: ${e.message}`);
    }
  }
}

run();
