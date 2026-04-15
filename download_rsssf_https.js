const https = require('https');
const fs = require('fs');

const url = 'https://www.rsssf.org/tablesa/arghist-ama1910s.html';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('rsssf1910s.html', data);
    console.log("Downloaded successfully.");
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
