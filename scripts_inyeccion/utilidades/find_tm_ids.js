const axios = require('axios');
const cheerio = require('cheerio');

async function go() {
    const clubs = [
        'Angers SCO', 'AJ Auxerre', 'Stade Brestois', 'Havre AC', 
        'RC Lens', 'LOSC Lille', 'FC Lorient', 'Olympique Lyon', 
        'Marseille', 'FC Metz', 'AS Monaco', 'FC Nantes', 
        'OGC Nice', 'Paris FC', 'Paris Saint-Germain', 'Stade Rennais', 
        'Strasbourg', 'Toulouse FC'
    ];
    
    let map = {};
    for (let c of clubs) {
        try {
            const url = `https://www.transfermarkt.es/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(c)}`;
            const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
            const $ = cheerio.load(res.data);
            // find first team link
            const link = $('a.vereinprofil_tooltip').first().attr('href');
            if (link) {
                // link format: /angers-sco/startseite/verein/1420/saison_id/2023
                const m = link.match(/\/verein\/(\d+)/);
                if (m) map[c] = m[1];
            }
        } catch(e) {}
    }
    console.log(map);
}
go();
