const fs = require('fs');
const https = require('https');
const path = require('path');

const destBase = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';

const downloads = [
  {
    name: 'rangers.png',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Rangers_FC.svg/512px-Rangers_FC.svg.png'
  },
  {
    name: 'aik.png',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Allm%C3%A4nna_Idrottsklubben_logo.svg/512px-Allm%C3%A4nna_Idrottsklubben_logo.svg.png'
  },
  {
    name: 'norma_tallinn.png',
    // fallback clean image for norma tallinn
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coat_of_arms_of_Tallinn_%28Estonian_SSR%29.svg/512px-Coat_of_arms_of_Tallinn_%28Estonian_SSR%29.svg.png'
  }
];

downloads.forEach(img => {
  const destPath = path.join(destBase, img.name);
  const file = fs.createWriteStream(destPath);
  https.get(img.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('✅ Reemplazado permanentemente con PNG real: ' + img.name);
    });
  }).on('error', err => {
    fs.unlink(destPath);
    console.error('Error descargando ' + img.name + ': ' + err.message);
  });
});
