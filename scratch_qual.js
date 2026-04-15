const https = require('https');
https.get("https://en.wikipedia.org/w/api.php?action=parse&page=1994%E2%80%9395_UEFA_Champions_League&format=json", {headers:{'User-Agent':"Mozilla"}}, (res) => {
    let body = "";
    res.on('data', c=>body+=c);
    res.on('end', () => {
        const text = JSON.parse(body).parse.text['*'];
        console.log(text.substring(text.indexOf('id="Qualifying_round"'), text.indexOf('id="Qualifying_round"') + 5000));
    });
});
