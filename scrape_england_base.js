const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadImage(url, dest) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) return resolve();
            const fileStream = fs.createWriteStream(dest);
            res.pipe(fileStream);
            fileStream.on('finish', () => { fileStream.close(); resolve(); });
        }).on('error', () => resolve());
    });
}

const engSlugs = {
    'arsenal': 'arsenal-fc',
    'aston-villa': 'aston-villa',
    'bournemouth': 'afc-bournemouth',
    'brentford': 'brentford-fc',
    'brighton': 'brighton-hove-albion',
    'burnley': 'burnley-fc',
    'chelsea': 'chelsea-fc',
    'crystal-palace': 'crystal-palace',
    'everton': 'everton-fc',
    'fulham': 'fulham-fc',
    'leeds-united': 'leeds-united',
    'liverpool': 'liverpool-fc',
    'manchester-city': 'manchester-city',
    'manchester-united': 'manchester-united',
    'newcastle': 'newcastle-united',
    'nottingham-forest': 'nottingham-forest',
    'sunderland': 'sunderland-afc',
    'tottenham': 'tottenham-hotspur',
    'west-ham-united': 'west-ham-united',
    'wolverhampton-wanderers': 'wolverhampton-wanderers'
};

const engPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

async function scrapeAll(jsonFilename, fkaSlug) {
    const clubId = path.basename(jsonFilename, '.json');
    if (clubId === 'manchester-united') return; // Already beautifully populated!

    const url = `https://www.footballkitarchive.com/${fkaSlug}-logo-history/`;
    const destDir = path.join(__dirname, 'app', 'public', 'escudos_historicos', clubId); // Use local IDs, not FKA slugs! e.g., 'tottenham', not 'tottenham-hotspur'
    
    console.log(`\nScraping [${clubId}] -> ${url}`);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    
    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
    } catch(e) {
        console.log(`Could not load ${url}`);
        await browser.close();
        return;
    }
    
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 200;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    const logos = await page.evaluate(() => {
        const results = [];
        const imgs = document.querySelectorAll('img');
        imgs.forEach(img => {
            const src = img.src || img.getAttribute('data-src');
            const alt = img.alt || '';
            const parentText = img.parentElement ? img.parentElement.innerText : '';
            if (src && (src.includes('logo') || alt.toLowerCase().includes('logo') || src.includes('.png'))) {
                const yearMatch = alt.match(/(18|19|20)\d{2}/) || parentText.match(/(18|19|20)\d{2}/) || src.match(/(18|19|20)\d{2}/);
                if (yearMatch) {
                    results.push({ src, year: yearMatch[0] });
                }
            }
        });
        return results;
    });

    await browser.close();

    const unique = {};
    for(const l of logos) {
        if(!unique[l.year]) unique[l.year] = l.src;
    }

    if (Object.keys(unique).length > 0) {
        console.log(`Found ${Object.keys(unique).length} logos for ${clubId}`);
        const jsonPath = path.join(engPath, jsonFilename);
        
        let data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        if (!data.evolucion_escudos) data.evolucion_escudos = [];
        
        const curIdx = data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad');
        let current = null;
        if (curIdx !== -1) current = data.evolucion_escudos.splice(curIdx, 1)[0];

        // Filter out any "Histórico" fallback in case they were processed earlier
        data.evolucion_escudos = data.evolucion_escudos.filter(e => e.ano !== 'Histórico');

        for (const [year, src] of Object.entries(unique)) {
            const ext = path.extname(new URL(src).pathname) || '.png';
            const cleanName = `${clubId}_${year}_web${ext}`;
            const destPath = path.join(destDir, cleanName);
            await downloadImage(src, destPath);

            const fileUrl = `/escudos_historicos/${clubId}/${cleanName}`;
            if (!data.evolucion_escudos.some(e => e.url === fileUrl)) {
                data.evolucion_escudos.push({
                    ano: year,
                    url: fileUrl,
                    desc: `Escudo usado en la época (${year}). Archivo Web.`
                });
            }
        }

        data.evolucion_escudos.sort((a,b) => {
            const numA = parseInt(a.ano);
            const numB = parseInt(b.ano);
            if(!isNaN(numA) && !isNaN(numB)) return numA - numB;
            if(!isNaN(numA)) return -1;
            if(!isNaN(numB)) return 1;
            return 0;
        });
        if (current) data.evolucion_escudos.push(current);
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

    } else {
        console.log(`No logos found on FootballKitArchive for ${fkaSlug}. Check URL.`);
    }
}

async function main() {
    const files = fs.readdirSync(engPath).filter(f => f.endsWith('.json'));
    for (const file of files) {
        const clubId = path.basename(file, '.json');
        const fkaSlug = engSlugs[clubId];
        if (fkaSlug) {
            await scrapeAll(file, fkaSlug);
        } else {
            console.log(`Missing slug mapping for ${clubId}`);
        }
    }
}

main();
