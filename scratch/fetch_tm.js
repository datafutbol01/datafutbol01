const url = 'https://www.transfermarkt.com/cwmbran-town/kader/verein/5013/saison_id/1993/plus/1';
fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } })
  .then(r => r.text())
  .then(html => {
    const fs = require('fs');
    fs.writeFileSync('scratch/cwmbran.html', html);
    console.log('Saved to scratch/cwmbran.html');
  }).catch(err => console.error(err));
