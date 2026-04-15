const https = require('https');

async function searchAndFetchLogo(teamName) {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(teamName + " football club")}&utf8=&format=json&srlimit=1`;
    
    return new Promise((resolve) => {
        https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    if (json.query && json.query.search && json.query.search.length > 0) {
                        const title = json.query.search[0].title;
                        
                        // Now fetch the image for this title
                        const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(title)}`;
                        https.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (imgRes) => {
                            let imgBody = '';
                            imgRes.on('data', chunk => imgBody += chunk);
                            imgRes.on('end', () => {
                                try {
                                    const imgJson = JSON.parse(imgBody);
                                    const pages = imgJson.query.pages;
                                    const pageId = Object.keys(pages)[0];
                                    if (pageId !== "-1" && pages[pageId].original) {
                                        resolve(pages[pageId].original.source);
                                    } else {
                                        resolve(null);
                                    }
                                } catch (e) { resolve(null); }
                            });
                        });
                    } else {
                        resolve(null);
                    }
                } catch(e) { resolve(null); }
            });
        });
    });
}

(async () => {
    const teams = ["Levski Sofia", "Steaua București", "HJK Helsinki", "Rosenborg"];
    for (const team of teams) {
        const url = await searchAndFetchLogo(team);
        console.log(`${team}: ${url}`);
    }
})();
