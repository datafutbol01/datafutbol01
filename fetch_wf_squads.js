const https = require('https');
const fs = require('fs');

const slugs = {
    "salzburg": "sv-austria-salzburg",
    "aek": "aek-athens",
    "psg": "paris-saint-germain",
    "bayern-munich": "bayern-muenchen",
    "spartak_moscow": "spartak-moskva",
    "dynamo_kyiv": "dynamo-kyiv",
    "ifk_goteborg": "ifk-goeteborg",
    "barcelona": "fc-barcelona",
    "manchester-united": "manchester-united",
    "galatasaray": "galatasaray",
    "hajduk_split": "hajduk-split",
    "benfica": "sl-benfica",
    "steaua": "steaua-bucuresti",
    "anderlecht": "rsc-anderlecht",
    "avenir_beggen": "avenir-beggen",
    "sparta_prague": "sparta-praha",
    "maccabi_haifa": "maccabi-haifa",
    "rangers": "rangers-fc",
    "legia_warsaw": "legia-warszawa",
    "servette": "servette-fc",
    "silkeborg": "silkeborg-if",
    "vac_fc": "vac-fc"
};

function fetchWorldFootball(slug) {
    return new Promise((resolve, reject) => {
        const url = `https://www.worldfootball.net/teams/${slug}/1995/2/`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
            if (res.statusCode !== 200) {
                console.log(`Failed for ${slug}: ${res.statusCode}`);
                // Try fcsb if steaua fails
                if (slug === 'steaua-bucuresti') {
                    https.get(`https://www.worldfootball.net/teams/fcsb/1995/2/`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
                        let b = '';
                        res2.on('data', c => b += c);
                        res2.on('end', () => resolve(b));
                    });
                    return;
                }
                resolve(null);
                return;
            }
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => resolve(body));
        }).on('error', reject);
    });
}

function mapPos(p) {
    if(!p) return 'MED';
    p = p.trim().toLowerCase();
    if(p.includes('gk') || p.includes('goalkeeper')) return 'POR';
    if(p.includes('df') || p.includes('defence')) return 'DEF';
    if(p.includes('mf') || p.includes('midfield')) return 'MED';
    if(p.includes('fw') || p.includes('forward')) return 'DEL';
    return 'MED';
}

function mapFlag(f) {
    f = f.toLowerCase().trim();
    if (f === 'england') return 'gb-eng';
    if (f === 'scotland') return 'gb-sct';
    if (f === 'wales') return 'gb-wls';
    if (f === 'northern ireland') return 'gb-nir';
    if (f === 'germany') return 'de';
    if (f === 'netherlands') return 'nl';
    if (f === 'italy') return 'it';
    if (f === 'spain') return 'es';
    if (f === 'sweden') return 'se';
    if (f === 'turkey') return 'tr';
    if (f === 'france') return 'fr';
    if (f === 'russia') return 'ru';
    if (f === 'ukraine') return 'ua';
    if (f === 'portugal') return 'pt';
    if (f === 'croatia') return 'hr';
    if (f === 'romania') return 'ro';
    if (f === 'belgium') return 'be';
    if (f === 'austria') return 'at';
    if (f === 'greece') return 'gr';
    if (f === 'yugoslavia') return 'yu'; 
    if (f === 'nigeria') return 'ng';
    if (f === 'brazil') return 'br';
    if (f === 'argentina') return 'ar';
    if (f === 'finland') return 'fi';
    if (f === 'ivory coast' || f === "côte d'ivoire") return 'ci';
    if (f === 'south africa') return 'za';
    if (f === 'australia') return 'au';
    if (f === 'denmark') return 'dk';
    if (f === 'switzerland') return 'ch';
    if (f === 'poland') return 'pl';
    if (f === 'hungary') return 'hu';
    if (f === 'republic of ireland' || f === 'ireland') return 'ie';
    if (f === 'bulgaria') return 'bg';
    if (f === 'cyprus') return 'cy';
    if (f === 'israel') return 'il';
    if (f === 'czech republic' || f === 'czechia') return 'cz';
    if (f === 'macedonia' || f === 'north macedonia') return 'mk';
    if (f === 'slovakia') return 'sk';
    if (f === 'georgia') return 'ge';
    if (f === 'latvia') return 'lv';
    if (f === 'bosnia-herzegovina' || f === 'bosnia and herzegovina') return 'ba';
    if (f === 'cameroon') return 'cm';
    if (f === 'colombia') return 'co';
    if (f === 'chile') return 'cl';
    if (f === 'uruguay') return 'uy';
    if (f === 'norway') return 'no';
    if (f === 'serbia') return 'yu'; // In 1994, FR Yugoslavia
    if (f === 'montenegro') return 'yu'; // In 1994, FR Yugoslavia
    if (f === 'senegal') return 'sn';
    if (f === 'morocco') return 'ma';
    if (f === 'ghana') return 'gh';
    if (f === 'luxembourg') return 'lu';
    
    return f; // fallback
}

function parseHtmlSquad(html) {
    const squad = [];
    const rows = html.split('<tr>');
    let currentPos = 'MED'; // fallback
    rows.forEach(r => {
        if (!r.includes('<td') || r.includes('<th>')) {
            if (r.includes('Goalkeeper')) currentPos = 'POR';
            else if (r.includes('Defender')) currentPos = 'DEF';
            else if (r.includes('Midfielder')) currentPos = 'MED';
            else if (r.includes('Forward')) currentPos = 'DEL';
            return;
        }
        
        const cols = r.split('<td').map(c => c.split('</td>')[0].replace(/.*?>/, '').trim());
        if (cols.length >= 4) {
            let noMatch = cols[0].match(/(\d+)/);
            let no = noMatch ? noMatch[1] : '-';
            
            let nameMatch = cols[1].match(/title="([^"]+)"/);
            if (!nameMatch) return;
            let name = nameMatch[1];
            
            // Extract flag alt
            let flagMatch = r.match(/alt="([^"]+)"/);
            let flag = flagMatch ? mapFlag(flagMatch[1]) : 'unknown';
            
            if (name) {
                squad.push({
                    no: no,
                    flag: flag,
                    pos: currentPos,
                    name: name
                });
            }
        }
    });
    return squad;
}

(async () => {
    const fileDataPath = 'app/src/data/copas/champions/1995.json';
    const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
    
    for (const team of json.participants) {
        if (team.id === 'ajax' || team.id === 'milan') continue; // Skip already done
        
        const slug = slugs[team.id];
        if (!slug) {
            console.log(`No slug for ${team.name}`);
            continue;
        }
        
        console.log(`Fetching ${slug}...`);
        const html = await fetchWorldFootball(slug);
        if (html) {
            const squad = parseHtmlSquad(html);
            if (squad.length > 0) {
                team.squad = squad;
                console.log(`✅ Saved ${squad.length} players to ${team.name}`);
            } else {
                console.log(`⚠️ No players found in HTML for ${team.name}`);
            }
        }
    }
    
    fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
    console.log("Finished generating accurate squads from WorldFootball.");
})();
