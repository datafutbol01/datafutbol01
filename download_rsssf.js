const http = require('http');

http.get('http://www.rsssf.org/tablesa/arghist-ama1910s.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    require('fs').writeFileSync('rsssf_1910s.html', data);
    console.log("Downloaded 1910s.");
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

http.get('http://www.rsssf.org/tablesa/arghist-ama1920s.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    require('fs').writeFileSync('rsssf_1920s.html', data);
    console.log("Downloaded 1920s.");
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

http.get('http://www.rsssf.org/tablesa/arghist-ama1930s.html', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    require('fs').writeFileSync('rsssf_1930s.html', data);
    console.log("Downloaded 1930s.");
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
