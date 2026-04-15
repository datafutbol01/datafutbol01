const https = require('https');
const fs = require('fs');

async function searchWikiPage(query) {
    return new Promise((resolve, reject) => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srlimit=1`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla' } }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                const data = JSON.parse(body);
                if (data.query && data.query.search && data.query.search.length > 0) {
                    resolve(data.query.search[0].title);
                } else {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

function fetchWikiText(title) {
    return new Promise((resolve, reject) => {
        const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=wikitext&format=json`;
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

function mapFlag(f) {
    f = f.toLowerCase().trim();
    if (f === 'eng' || f === 'england') return 'gb-eng';
    if (f === 'sco' || f === 'scotland') return 'gb-sct';
    if (f === 'wal' || f === 'wales') return 'gb-wls';
    if (f === 'nir' || f === 'northern ireland') return 'gb-nir';
    if (f === 'ger' || f === 'germany' || f === 'west germany') return 'de';
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
    if (f === 'yug' || f === 'yugoslavia' || f === 'fr yugoslavia') return 'yu'; 
    if (f === 'nga' || f === 'nigeria') return 'ng';
    if (f === 'brz' || f === 'bra' || f === 'brazil') return 'br';
    if (f === 'arg' || f === 'argentina') return 'ar';
    if (f === 'fin' || f === 'finland') return 'fi';
    if (f === 'civ' || f === 'ivory coast') return 'ci';
    if (f === 'rsa' || f === 'south africa') return 'za';
    if (f === 'aus' || f === 'australia') return 'au';
    if (f === 'den' || f === 'denmark') return 'dk';
    if (f === 'sui' || f === 'switzerland') return 'ch';
    if (f === 'pol' || f === 'poland') return 'pl';
    if (f === 'hun' || f === 'hungary') return 'hu';
    if (f === 'irl' || f === 'republic of ireland') return 'ie';
    if (f === 'bul' || f === 'bulgaria') return 'bg';
    if (f === 'cyp' || f === 'cyprus') return 'cy';
    if (f === 'isr' || f === 'israel') return 'il';
    if (f === 'cze' || f === 'czk' || f === 'czech republic') return 'cz';
    if (f === 'nko' || f === 'mkd' || f === 'macedonia') return 'mk';
    if (f === 'svk' || f === 'slovakia') return 'sk';
    if (f === 'geo' || f === 'georgia') return 'ge';
    if (f === 'lva' || f === 'latvia') return 'lv';
    if (f === 'bih' || f === 'bosnia and herzegovina') return 'ba';
    if (f === 'cmr' || f === 'cameroon') return 'cm';
    if (f === 'col' || f === 'colombia') return 'co';
    if (f === 'chl' || f === 'chile') return 'cl';
    if (f === 'uru' || f === 'uruguay') return 'uy';
    
    return f;
}

function parseSquadTable(wikitext) {
    const squad = [];
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
        
        // Manual fallbacks from earlier request
        if (player.name === 'Tarik Oulida' && !player.no) player.no = '16';
        if (player.name === 'Clyde Wijnhard' && !player.no) player.no = '15';
        if (player.flag === 'zaire') player.flag = 'zr'; // Specific cleanups
        
        if (player.name && !squad.some(s => s.name === player.name)) {
            squad.push(player);
        }
    }
    return squad;
}

(async () => {
    const fileDataPath = 'app/src/data/copas/champions/1995.json';
    const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
    
    for (const team of json.participants) {
        if (team.squad && team.squad.length > 0 && team.id !== 'ajax') {
            console.log(`Skipping ${team.name}, already has squad`);
            continue;
        }
        
        let query = `1994-95 ${team.name} season squad`;
        if (team.flag === 'se' || team.flag === 'ru' || team.flag === 'no') {
            query = `1994 ${team.name} season squad`; 
        }
        
        const pageTitle = await searchWikiPage(query);
        if (!pageTitle) {
            console.log(`❌ Could not find Wikipedia page for ${team.name}`);
            continue;
        }
        
        console.log(`Fetching ${pageTitle} for ${team.name}...`);
        const wikitext = await fetchWikiText(pageTitle);
        if (wikitext) {
            const squad = parseSquadTable(wikitext);
            if (squad.length > 0) {
                team.squad = squad;
                console.log(`✅ Saved ${squad.length} players to ${team.name}`);
            } else {
                console.log(`⚠️ No squad table found inside ${pageTitle}`);
            }
        }
    }
    
    fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
    console.log("Finished processing squads.");
})();
