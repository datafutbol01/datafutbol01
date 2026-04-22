const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) return resolve();
            const fileStream = fs.createWriteStream(dest);
            res.pipe(fileStream);
            fileStream.on('finish', () => { fileStream.close(); resolve(); });
        }).on('error', (err) => resolve());
    });
}

function extractYearFix(str) {
    const lazy = str.match(/(18|19|20)\d{2}/);
    if(lazy) return lazy[0];
    return 'Histórico';
}

async function scrapeAll(slug, url) {
    console.log(`Starting to scrape ${slug} at ${url}`);
    const destDir = path.join(__dirname, 'app', 'public', 'escudos_historicos', slug);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Scroll to bottom slowly to trigger lazy loading of all logos
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
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

    // Deduplicate
    const unique = {};
    for(const l of logos) {
        if(!unique[l.year]) unique[l.year] = l.src;
    }

    console.log(`Found ${Object.keys(unique).length} logos for ${slug}:`, Object.keys(unique));

    const jsonPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania', `${slug}.json`);
    let data = {};
    if (fs.existsSync(jsonPath)) {
        data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        if (!data.evolucion_escudos) data.evolucion_escudos = [];
    }

    const curIdx = data.evolucion_escudos ? data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad') : -1;
    let current = null;
    if (curIdx !== -1) current = data.evolucion_escudos.splice(curIdx, 1)[0];

    for (const [year, src] of Object.entries(unique)) {
        const ext = path.extname(new URL(src).pathname) || '.png';
        const cleanName = `${slug}_${year}_full${ext}`;
        const destPath = path.join(destDir, cleanName);
        await downloadImage(src, destPath);

        const fileUrl = `/escudos_historicos/${slug}/${cleanName}`;
        if (data.evolucion_escudos && !data.evolucion_escudos.some(e => e.url === fileUrl)) {
            data.evolucion_escudos.push({
                ano: year,
                url: fileUrl,
                desc: `Escudo usado en la época (${year}). Extraído desde Archivo Web Completo.`
            });
        }
    }

    if (data.evolucion_escudos) {
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
        console.log(`Updated JSON for ${slug} with full history.`);
    }
}

async function main() {
    await scrapeAll('osasuna', 'https://www.footballkitarchive.com/ca-osasuna-logo-history/');
    await scrapeAll('mallorca', 'https://www.footballkitarchive.com/rcd-mallorca-logo-history/');
}

main();
