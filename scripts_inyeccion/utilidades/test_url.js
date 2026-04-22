const https = require('https');

https.get('https://www.worldfootball.net/teams/fc-barcelona/1995/2/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Location: ${res.headers.location}`);
});
