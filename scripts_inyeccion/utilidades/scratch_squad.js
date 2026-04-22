const https = require('https');
const fs = require('fs');

function fetchWikiText(title) {
    return new Promise((resolve, reject) => {
        const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${title}&prop=wikitext&format=json`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla' } }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                const data = JSON.parse(body);
                if (data.error) resolve(null);
                else resolve(data.parse.wikitext['*']);
            });
        }).on('error', reject);
    });
}

function mapPos(p) {
    p = p.toUpperCase();
    if(p.includes('GK')) return 'POR';
    if(p.includes('DF')) return 'DEF';
    if(p.includes('MF')) return 'MED';
    if(p.includes('FW')) return 'DEL';
    return p;
}

// Map flags specific to 1990s
function mapFlag(f) {
    f = f.toLowerCase().trim();
    if (f === 'eng' || f === 'england') return 'gb-eng';
    if (f === 'sco' || f === 'scotland') return 'gb-sct';
    if (f === 'wal' || f === 'wales') return 'gb-wls';
    if (f === 'nir' || f === 'northern ireland') return 'gb-nir';
    if (f === 'ger' || f === 'germany') return 'de';
    if (f === 'ned' || f === 'netherlands') return 'nl';
    if (f === 'ita' || f === 'italy') return 'it';
    if (f === 'esp' || f === 'spain') return 'es';
    if (f === 'swe' || f === 'sweden') return 'se';
    if (f === 'tur' || f === 'turkey') return 'tr';
    if (f === 'fra' || f === 'france') return 'fr';
    if (f === 'rus' || f === 'russia') return 'ru';
    if (f === 'ukr' || f === 'ukraine') return 'ua';
    if (f === 'por' || f === 'portugal') return 'pt';
    if (f === 'cro' || f === 'croatia') return 'hr';
    if (f === 'rou' || f === 'romania') return 'ro';
    if (f === 'bel' || f === 'belgium') return 'be';
    if (f === 'aut' || f === 'austria') return 'at';
    if (f === 'gre' || f === 'greece') return 'gr';
    if (f === 'yug' || f === 'yugoslavia' || f === 'fr yugoslavia') return 'yu'; // Important 1990s detail
    if (f === 'nga' || f === 'nigeria') return 'ng';
    if (f === 'brz' || f === 'bra' || f === 'brazil') return 'br';
    if (f === 'arg' || f === 'argentina') return 'ar';
    if (f === 'fin' || f === 'finland') return 'fi';
    
    // Attempt ISO mapping if 3-letters
    const iso2 = {
        'den': 'dk', 'sui': 'ch', 'pol': 'pl', 'hun': 'hu', 'irl': 'ie', 'bul': 'bg',
        'cyp': 'cy', 'isv': 'vi', 'isr': 'il', 'czk': 'cz', 'cze': 'cz'
    };
    if (iso2[f]) return iso2[f];
    return f;
}

function parseSquadTable(wikitext) {
    const squad = [];
    // Looking for Player templates: {{football squad player|no=1|nat=NED|pos=GK|name=[[Edwin van der Sar]]}}
    const regex = /\{\{(?:football squad player|fs player)\s*\|(.*?)\}\}/gi;
    let m;
    while ((m = regex.exec(wikitext)) !== null) {
        let props = m[1].split('|');
        let player = {};
        props.forEach(p => {
            const arr = p.split('=');
            if(arr.length < 2) return;
            const key = arr[0].trim().toLowerCase();
            const val = arr.slice(1).join('=').trim();
            if(key === 'no') player.no = val;
            if(key === 'pos') player.pos = mapPos(val);
            if(key === 'name') {
                let name = val.replace(/\[\[[^\|]*\|(.*?)\]\]/g, '$1');
                name = name.replace(/\[\[(.*?)\]\]/g, '$1');
                name = name.replace(/\(.*\)/g, '').trim(); 
                player.name = name;
            }
            if(key === 'nat') player.flag = mapFlag(val);
        });
        if (player.name && !squad.some(s => s.name === player.name)) {
            squad.push(player);
        }
    }
    return squad;
}

(async () => {
    const title = encodeURIComponent('1994–95 AFC Ajax season');
    console.log("Fetching", title);
    const wikitext = await fetchWikiText(title);
    if (!wikitext) {
        console.log("Failed to fetch wikitext");
        return;
    }
    const squad = parseSquadTable(wikitext);
    console.log(squad);
    
    const fileDataPath = 'app/src/data/copas/champions/1995.json';
    const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
    
    // find ajax
    const ajax = json.participants.find(p => p.id === 'ajax');
    if (ajax) {
        ajax.squad = squad;
        fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
        console.log(`Saved ${squad.length} players to Ajax`);
    }
})();
