const https = require('https');
const fs = require('fs');

const exactTitles = {
    "salzburg": "1994–95 SV Austria Salzburg season",
    "aek": "1994–95 AEK Athens F.C. season",
    "psg": "1994–95 Paris Saint-Germain F.C. season",
    "bayern-munich": "1994–95 FC Bayern Munich season",
    "spartak_moscow": "1994 FC Spartak Moscow season",
    "dynamo_kyiv": "1994–95 FC Dynamo Kyiv season",
    "ifk_goteborg": "1994 IFK Göteborg season",
    "barcelona": "1994–95 FC Barcelona season",
    "manchester-united": "1994–95 Manchester United F.C. season",
    "galatasaray": "1994–95 Galatasaray S.K. season",
    "hajduk_split": "1994–95 HNK Hajduk Split season",
    "benfica": "1994–95 S.L. Benfica season",
    "steaua": "1994–95 FC Steaua București season",
    "anderlecht": "1994–95 R.S.C. Anderlecht season",
    "avenir_beggen": "1994–95 FC Avenir Beggen season",
    "sparta_prague": "1994–95 AC Sparta Prague season",
    "maccabi_haifa": "1994–95 Maccabi Haifa F.C. season",
    "rangers": "1994–95 Rangers F.C. season",
    "legia_warsaw": "1994–1995 Legia Warsaw season",
    "servette": "1994–95 Servette FC season",
    "silkeborg": "1994–95 Silkeborg IF season",
    "vac_fc": "1994–95 Vác FC season"
};

// Also reuse my robust map functions
function mapPos(p) {
    if(!p) return 'MED';
    p = p.toUpperCase().replace(/\[.*?\]/g, '');
    if(p.includes('GK')) return 'POR';
    if(p.includes('DF')) return 'DEF';
    if(p.includes('MF')) return 'MED';
    if(p.includes('FW')) return 'DEL';
    return 'MED';
}

function mapFlag(f) {
    if(!f) return 'unknown';
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
    if (f === 'yug' || f === 'yugoslavia') return 'yu'; 
    if (f === 'nga' || f === 'nigeria') return 'ng';
    if (f === 'brz' || f === 'bra' || f === 'brazil') return 'br';
    if (f === 'arg' || f === 'argentina') return 'ar';
    if (f === 'fin' || f === 'finland') return 'fi';
    
    const iso2 = {
        'den': 'dk', 'sui': 'ch', 'pol': 'pl', 'hun': 'hu', 'irl': 'ie', 'bul': 'bg',
        'cyp': 'cy', 'isv': 'vi', 'isr': 'il', 'czk': 'cz', 'cze': 'cz', 'col': 'co',
        'chm': 'cm', 'yug': 'yu', 'srb': 'yu', 'rsa': 'za', 'ghn': 'gh', 'mco': 'ma',
        'civ': 'ci', 'blr': 'by', 'geo': 'ge', 'lva': 'lv', 'ltn': 'lt'
    };
    if (iso2[f]) return iso2[f];
    return f;
}

function fetchWikiText(title) {
    return new Promise((resolve) => {
        const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=wikitext&format=json`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla' } }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    resolve(data.error ? null : data.parse.wikitext['*']);
                } catch(e) { resolve(null); }
            });
        }).on('error', () => resolve(null));
    });
}

function parseSquad(wikitext) {
    const squad = [];
    const regex = /\{\{(?:football squad player|fs player)\s*\|(.*?)\}\}/gi;
    let m;
    while ((m = regex.exec(wikitext)) !== null) {
        let props = m[1].split('|');
        let player = { no: '' };
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
        
        if (player.name && player.no && player.no !== '' && player.no !== '-') {
            // Keep it if NO exists! Filter rule applied.
            if (!squad.some(s => s.name === player.name)) squad.push(player);
        }
    }
    return squad;
}

(async () => {
    const fileDataPath = 'app/src/data/copas/champions/1995.json';
    const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
    
    let injected = 0;
    for (const team of json.participants) {
        if (team.id === 'ajax' || team.id === 'milan') continue; // Ajax is manual
        
        const title = exactTitles[team.id];
        if (!title) continue;
        
        const wikitext = await fetchWikiText(title);
        if (wikitext) {
            const squad = parseSquad(wikitext);
            if (squad.length > 5) {
                team.squad = squad;
                injected++;
                console.log(`✅ Saved ${squad.length} players to ${team.name}`);
            } else {
                console.log(`⚠️ Squad too small or zero for ${team.name}`);
            }
        } else {
            console.log(`❌ Page not found for ${team.name}`);
        }
    }
    
    fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
    console.log(`Finished processing squads. Injected ${injected} new teams.`);
})();
