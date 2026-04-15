const axios = require('axios');
const cheerio = require('cheerio');

async function go() {
    const clubs = [
        'Angers SCO', 'AJ Auxerre', 'Stade Brestois', 'Le Havre', 
        'RC Lens', 'LOSC Lille', 'Lorient', 'Olympique Lyonnais', 
        'Marseille', 'Metz', 'AS Monaco', 'Nantes', 
        'OGC Nice', 'Paris FC', 'Paris SG', 'Stade Rennais', 
        'Strasbourg', 'Toulouse'
    ];
    let map = {};
    for (let c of clubs) {
        try {
            const url = `https://www.ceroacero.es/search.php?search_type=equipa&search_str=${encodeURIComponent(c)}`;
            const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            const $ = cheerio.load(res.data);
            const link = $('td.text a.op-1').first().attr('href');
            if (link) {
                // equipa.php?id=123
                const m = link.match(/id=(\d+)/);
                if (m) map[c] = m[1];
            } else {
                console.log('No link for', c);
            }
        } catch(e) {
             console.log('Error for', c, e.response?.status);
        }
    }
    console.log(map);
}
go();
