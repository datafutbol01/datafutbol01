const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

const slugs = {
    "sv-austria-salzburg": "salzburg",
    "aek-athens": "aek",
    "paris-saint-germain": "psg",
    "bayern-muenchen": "bayern-munich",
    "spartak-moskva": "spartak_moscow",
    "dynamo-kyiv": "dynamo_kyiv",
    "ifk-goeteborg": "ifk_goteborg",
    "fc-barcelona": "barcelona",
    "manchester-united": "manchester-united",
    "galatasaray": "galatasaray",
    "hajduk-split": "hajduk_split",
    "sl-benfica": "benfica",
    "steaua-bucuresti": "steaua",
    "fcsb": "steaua",
    "rsc-anderlecht": "anderlecht",
    "avenir-beggen": "avenir_beggen",
    "sparta-praha": "sparta_prague",
    "maccabi-haifa": "maccabi_haifa",
    "rangers-fc": "rangers",
    "legia-warszawa": "legia_warsaw",
    "servette-fc": "servette",
    "silkeborg-if": "silkeborg",
    "vac-fc": "vac_fc",
    "ac-milan": "AC Milan"
};

const mapPosLog = {};
function mapFlag(f) {
    if (!f) return 'unknown';
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
    if (f === 'serbia') return 'yu'; 
    if (f === 'montenegro') return 'yu';
    if (f === 'senegal') return 'sn';
    if (f === 'morocco') return 'ma';
    if (f === 'ghana') return 'gh';
    return f;
}

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    console.log("Fetching match list from WorldFootball 1994/95...");
    await page.goto('https://www.worldfootball.net/all_matches/champions-league-1994-1995/', { waitUntil: 'domcontentloaded' });
    
    // Extract match links
    const matchLinks = await page.evaluate(() => {
        const links = [];
        document.querySelectorAll('a').forEach(a => {
            const href = a.getAttribute('href');
            if (href && href.includes('/report/champions-league-1994-1995-')) {
                links.push('https://www.worldfootball.net' + href);
            }
        });
        return Array.from(new Set(links)); // unique
    });
    
    console.log(`Found ${matchLinks.length} matches to sweep. Sweeping starting XIs and benches...`);
    
    const fileDataPath = 'app/src/data/copas/champions/1995.json';
    const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
    
    // Track extracted players per team URL
    const squadsCache = {}; // e.g. { "sv-austria-salzburg": [ { name, flag, no, pos } ] }

    // Read match links slowly to avoid rate limit
    let count = 0;
    for (const link of matchLinks) {
        count++;
        console.log(`[${count}/${matchLinks.length}] Sweeping ${link.split('/').pop()}`);
        
        try {
            await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 30000 });
            
            const matchData = await page.evaluate(() => {
                const results = { teamA: { url: '', players: [] }, teamB: { url: '', players: [] } };
                
                // Usually headers have the team URLs
                const teamLinks = document.querySelectorAll('th a[href*="/teams/"]');
                if (teamLinks.length >= 2) {
                    results.teamA.url = teamLinks[0].getAttribute('href').split('/')[2]; // slug
                    results.teamB.url = teamLinks[1].getAttribute('href').split('/')[2];
                }

                // Lineups are usually in identical tables next to each other
                // Looking for 'Lineups' text or directly the players tables
                const tables = document.querySelectorAll('table.standard_tbg');
                // The first block is starting XI, second block is substitutes. They are often arranged per team
                // Finding player rows
                document.querySelectorAll('tr').forEach(tr => {
                    const tds = tr.querySelectorAll('td');
                    if (tds.length === 3 || tds.length === 4) { // typical player row in report
                        let no = '', name = '', pos = 'MED', flag = 'unknown';
                        let aTag, flagImg;
                        
                        // Structure varies, we look for A tag inside
                        const aTags = Array.from(tr.querySelectorAll('a')).filter(a => a.getAttribute('href') && a.getAttribute('href').includes('/player_summary/'));
                        if (aTags.length > 0) {
                            aTag = aTags[0];
                            name = aTag.innerText.trim();
                            
                            // Check for number before it
                            const textNodes = Array.from(tr.childNodes).filter(n => n.nodeType === 3);
                            if (textNodes.length > 0) {
                                no = textNodes.map(n => n.nodeValue.trim()).filter(v => v.match(/^\d+$/))[0] || '-';
                            }
                            
                            flagImg = tr.querySelector('img[src*="flaggen"]');
                            if (flagImg) flag = flagImg.getAttribute('alt');
                            
                            // Guess position from layout or just leave MED, because WF match reports often don't have position listed explicitly
                            // Or they have GK, DF...
                            
                            // Which team?
                            // Try to infer from DOM tree matching teamA or teamB block
                            // Worldfootball puts them in two columns using inner tables or colgroups
                            const parentTh = tr.closest('table').previousElementSibling; // heuristic
                            
                            // We will just grab all players and figure out which team they belong to by seeing which team slug parent container they are under.
                            let side = 'teamA';
                            const tdParent = tr.closest('td');
                            if (tdParent) {
                                // if it's the second td in a 2-col layout
                                const sibling = tdParent.previousElementSibling;
                                if (sibling) side = 'teamB';
                            }
                            
                            results[side].players.push({ name, no, flag, pos: 'MED' });
                        }
                    }
                });
                
                return results;
            });
            
            // Assign to cache
            const teamA = matchData.teamA.url;
            const teamB = matchData.teamB.url;
            
            if (teamA && teamA !== '') {
                if (!squadsCache[teamA]) squadsCache[teamA] = [];
                matchData.teamA.players.forEach(p => squadsCache[teamA].push(p));
            }
            if (teamB && teamB !== '') {
                if (!squadsCache[teamB]) squadsCache[teamB] = [];
                matchData.teamB.players.forEach(p => squadsCache[teamB].push(p));
            }

            // Sleep
            await new Promise(r => setTimeout(r, 600));

        } catch (e) {
            console.log("Error on match", link, e.message);
        }
    }
    
    // Deduplicate and process into JSON
    console.log("Finished sweeping matches, deduplicating...");
    for (const team of json.participants) {
        if (team.squad && team.squad.length > 10) continue; // Skip Ajax, Milan, PSG, Bayern
        
        let targetSlug = null;
        for (const [k, v] of Object.entries(slugs)) {
            if (v === team.id || (team.id === 'vac_fc' && k === 'vac-fc')) targetSlug = k;
        }
        
        const rawPlayers = squadsCache[targetSlug] || squadsCache[team.id];
        if (rawPlayers) {
            const unique = [];
            rawPlayers.forEach(p => {
                if (!unique.some(u => u.name === p.name)) {
                    p.flag = mapFlag(p.flag);
                    unique.push(p);
                }
            });
            team.squad = unique;
            console.log(`✅ Injected ${unique.length} verified players to ${team.name}`);
        } else {
            console.log(`⚠️ No swept data for ${team.name}`);
        }
    }
    
    fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
    await browser.close();
    console.log("All done!");
})();
