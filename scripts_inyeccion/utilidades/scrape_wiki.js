const https = require('https');

function findImages(category, keyword) {
    https.get('https://commons.wikimedia.org/wiki/Category:' + category, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            let match;
            const regex = /<img alt="[^"]*" src="(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^"]+)"/g;
            console.log(`--- ${category} ---`);
            while ((match = regex.exec(data)) !== null) {
                if (keyword && !match[1].toLowerCase().includes(keyword.toLowerCase())) continue;
                // remove the /120px- part at the end to get full resolution
                let fullUrl = match[1].replace(/\/thumb\//, '/').replace(/\/[^\/]+$/, '');
                console.log(fullUrl);
            }
        });
    });
}

findImages('2022_FIFA_World_Cup_Final', 'messi');
findImages('2002_FIFA_World_Cup_Final', 'ronaldo');
findImages('1990_FIFA_World_Cup_Final', 'matth');
