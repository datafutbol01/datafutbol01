const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
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
    "steaua": "fcsb",
    "anderlecht": "rsc-anderlecht",
    "avenir_beggen": "avenir-beggen",
    "sparta_prague": "sparta-praha",
    "maccabi_haifa": "maccabi-haifa",
    "rangers": "rangers-fc",
    "legia_warsaw": "legia-warszawa",
    "servette": "servette-fc",
    "silkeborg": "silkeborg-if",
    "vac_fc": "vac-fc",
    "milan": "ac-milan"
};

function mapPos(p) {
    if(!p) return 'MED';
    p = p.trim().toLowerCase();
    if(p.includes('gk') || p.includes('goalkeeper') || p.includes('torwart')) return 'POR';
    if(p.includes('df') || p.includes('defence') || p.includes('abwehr')) return 'DEF';
    if(p.includes('mf') || p.includes('midfield') || p.includes('mittelfeld')) return 'MED';
    if(p.includes('fw') || p.includes('forward') || p.includes('sturm')) return 'DEL';
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
    if (f === 'serbia') return 'yu'; 
    if (f === 'montenegro') return 'yu';
    if (f === 'senegal') return 'sn';
    if (f === 'morocco') return 'ma';
    if (f === 'ghana') return 'gh';
    if (f === 'luxembourg') return 'lu';
    return f;
}

(async () => {
    const browser = await puppeteer.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    let injectedData = false;
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    const fileDataPath = 'app/src/data/copas/champions/1995.json';
    let json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

    for (const team of json.participants) {
        if (team.id === 'ajax') continue; // Always protect Ajax
        // If team already has data and we don't want to re-scrape
        // Wait, some have empty arrays from our cleanup.
        
        const slug = slugs[team.id];
        if (!slug) continue;
        
        const url = `https://www.worldfootball.net/teams/${slug}/1995/2/`;
        console.log(`Scraping ${url}`);
        
        try {
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
            
            // Wait a bit to emulate human behavior
            await new Promise(r => setTimeout(r, 1500));
            
            // Scrape the table if it exists
            const squadData = await page.evaluate(() => {
                const results = [];
                const rows = Array.from(document.querySelectorAll('table.standard_tbg tr'));
                let currentPos = 'MED';
                rows.forEach(r => {
                    const th = r.querySelector('th');
                    if (th) {
                        currentPos = th.innerText.trim();
                        return;
                    }
                    const tds = Array.from(r.querySelectorAll('td'));
                    if (tds.length >= 4) {
                        let no = tds[0].innerText.trim();
                        let aTag = tds[1].querySelector('a');
                        let name = aTag ? aTag.innerText.trim() : null;
                        let flagImg = r.querySelector('img');
                        let flag = flagImg ? flagImg.getAttribute('alt') : 'unknown';
                        
                        if (no === '') no = '-';
                        if (name) {
                            results.push({ no, name, flag, pos: currentPos });
                        }
                    }
                });
                return results;
            });
            
            if (squadData.length > 0) {
                const mappedSquad = squadData.map(s => ({
                    no: s.no,
                    flag: mapFlag(s.flag),
                    pos: mapPos(s.pos),
                    name: s.name
                }));
                
                // Rule: remove players with '-' number completely (must be exact 25-man squad approx)
                team.squad = mappedSquad.filter(s => s.no !== '-');
                console.log(`✅ Saved ${team.squad.length} players to ${team.name}`);
                injectedData = true;
                
                fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
            } else {
                console.log(`⚠️ No players found for ${team.name}`);
            }

        } catch(e) {
            console.log(`❌ Failed for ${team.name}: ${e.message}`);
        }
        
    }
    
    await browser.close();
    console.log("Done scraping WorldFootball stealthily.");
})();
