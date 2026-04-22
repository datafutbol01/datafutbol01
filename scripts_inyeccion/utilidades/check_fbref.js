const https = require('https');

https.get('https://fbref.com/en/comps/8/1994-1995/stats/1994-1995-Champions-League-Stats', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let body = '';
    console.log(res.statusCode);
});
