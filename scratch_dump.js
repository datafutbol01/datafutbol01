const https = require('https');
const fs = require('fs');

https.get("https://en.wikipedia.org/w/api.php?action=parse&page=1994%E2%80%9395_UEFA_Champions_League_group_stage&prop=wikitext&format=json", {headers:{'User-Agent':"Mozilla"}}, (res) => {
    let body = "";
    res.on('data', c=>body+=c);
    res.on('end', () => {
        try {
            const data = JSON.parse(body);
            if (data.error) {
                console.log("Error finding page group stage directly", data.error);
                return;
            }
            const text = data.parse.wikitext['*'];
            fs.writeFileSync('wiki_dump.txt', text);
            console.log("Dumped group stage wikitext to wiki_dump.txt");
        } catch(e) {
            console.log(e);
        }
    });
});
