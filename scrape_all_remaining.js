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

function toSlug(name) {
    let n = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    if(n === 'real betis' || n === 'betis') return 'real-betis';
    if(n === 'real sociedad') return 'real-sociedad';
    if(n === 'real madrid') return 'real-madrid';
    if(n === 'rayo vallecano') return 'rayo-vallecano';
    if(n === 'real zaragoza') return 'real-zaragoza';
    if(n === 'sevilla') return 'sevilla';
    if(n === 'valencia') return 'valencia';
    if(n === 'valladolid') return 'valladolid';
    if(n === 'villarreal') return 'villarreal';
    if(n === 'tottenham hotspur') return 'tottenham-hotspur'; 
    return n.replace(/\./g, '').replace(/\s+/g, '-');
}

const remainingClubs = [
    'Real Betis', 'Real Madrid', 'Real Sociedad', 'Real Unión', 'Real Zaragoza', 
    'Royal Engineers', 'Sevilla', 'Southampton', 'Stoke City', 'Swansea City', 
    'Swindon Town', 'Tottenham Hotspur', 'Valencia', 'Valladolid', 'Villarreal', 
    'Wanderers', 'Wigan Athletic', 'Wimbledon'
];

async function scrapeAll(slug, url, destDir, isBaseClub, jsonPath) {
    console.log(`\nScraping -> ${url}`);
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
        console.log(`Found ${Object.keys(unique).length} logos for ${slug}`);
        let data = {};
        if (isBaseClub && fs.existsSync(jsonPath)) {
            data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            if (!data.evolucion_escudos) data.evolucion_escudos = [];
            
            const curIdx = data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad');
            let current = null;
            if (curIdx !== -1) current = data.evolucion_escudos.splice(curIdx, 1)[0];

            for (const [year, src] of Object.entries(unique)) {
                const ext = path.extname(new URL(src).pathname) || '.png';
                const cleanName = `${slug}_${year}_web${ext}`;
                const destPath = path.join(destDir, cleanName);
                await downloadImage(src, destPath);

                const fileUrl = `/escudos_historicos/${slug}/${cleanName}`;
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
            // HISTORIC CLUB
            // Just download the most recent one we found and use it as main shield.
            const years = Object.keys(unique).sort();
            const latestYear = years[years.length - 1];
            const src = unique[latestYear];
            const ext = path.extname(new URL(src).pathname) || '.png';
            const cleanName = `${slug}${ext}`;
            const destPath = path.join(__dirname, 'app', 'public', 'escudos', cleanName);
            await downloadImage(src, destPath);
        }
    } else {
        console.log(`No logos found on FootballKitArchive for ${slug}.`);
    }

    // Clean up staging dir
    const stagingPath = path.join(__dirname, 'app', 'escudos_a_descargar', slug.replace(/-/g, ' ')); // naive guess, doesn't matter much if it fails to delete
    // We will just do a sweeping RM sync at the end.
}

async function main() {
    for (const clubName of remainingClubs) {
        const slug = toSlug(clubName);
        let isBaseClub = false;
        let jsonPath = null;

        const spPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania', `${slug}.json`);
        const enPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra', `${slug}.json`);
        // If the slug mapping for english differs
        const enPathBase = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra', `${slug.replace('-hotspur', '')}.json`);

        if (fs.existsSync(spPath)) {
            isBaseClub = true; jsonPath = spPath;
        } else if (fs.existsSync(enPath)) {
            isBaseClub = true; jsonPath = enPath;
        } else if (fs.existsSync(enPathBase)) {
            isBaseClub = true; jsonPath = enPathBase;
        }

        const url = `https://www.footballkitarchive.com/${slug}-logo-history/`;
        const destDir = path.join(__dirname, 'app', 'public', 'escudos_historicos', slug);
        await scrapeAll(slug, url, destDir, isBaseClub, jsonPath);
    }
}

main();
