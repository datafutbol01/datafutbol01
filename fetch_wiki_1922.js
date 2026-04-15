const https = require('https');
const fs = require('fs');

const url = 'https://es.wikipedia.org/wiki/Campeonato_de_Primera_Divisi%C3%B3n_1922_de_la_AAmF_(Argentina)';

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('1922_wiki.html', data);
        console.log('Downloaded');
    });
}).on('error', (e) => {
    console.error(e);
});
