const https = require('https');
const fs = require('fs');

const urls = [
  { url: 'https://www.rsssf.org/tablesa/arghist-ama1920s.html', file: 'rsssf1920s.html' },
  { url: 'https://www.rsssf.org/tablesa/arghist-pro1930s.html', file: 'rsssf1930s.html' }
];

urls.forEach(u => {
  https.get(u.url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      fs.writeFileSync(u.file, data);
      console.log("Downloaded", u.file);
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});
