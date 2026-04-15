const https = require('https');

https.get('https://www.besoccer.com/team/squad/barcelona/1995', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    console.log(res.statusCode);
});
