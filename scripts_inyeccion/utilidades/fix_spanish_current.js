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

const espSlugs = {
    'alaves': 'deportivo-alaves',
    'athletic-club': 'athletic-club',
    'atletico-madrid': 'atletico-madrid',
    'barcelona': 'fc-barcelona',
    'celta-vigo': 'celta-de-vigo',
    'espanyol': 'rcd-espanyol',
    'getafe': 'getafe-cf',
    'girona': 'girona-fc',
    'las-palmas': 'ud-las-palmas',
    'leganes': 'cd-leganes',
    'mallorca': 'rcd-mallorca',
    'osasuna': 'ca-osasuna',
    'rayo-vallecano': 'rayo-vallecano',
    'real-betis': 'real-betis',
    'real-madrid': 'real-madrid',
    'real-sociedad': 'real-sociedad',
    'sevilla': 'sevilla-fc',
    'valencia': 'valencia-cf',
    'valladolid': 'real-valladolid',
    'villarreal': 'villarreal-cf'
};

const escudosDir = path.join(__dirname, 'app', 'public', 'escudos');

async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });

    for (const [slug, fkaSlug] of Object.entries(espSlugs)) {
        console.log(`Fixing current shield for ${slug}...`);
        const url = `https://www.footballkitarchive.com/${fkaSlug}-logo-history/`;
        
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 800 });
        
        try {
            const res = await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });
            if (res && res.status() === 200) {
                // Get the very last image which is their current/latest logo
                const logoInfo = await page.evaluate(() => {
                    const imgs = document.querySelectorAll('img');
                    const results = [];
                    imgs.forEach(img => {
                        const src = img.src || img.getAttribute('data-src');
                        if (src && src.includes('logo')) {
                            results.push(src);
                        }
                    });
                    return results.length > 0 ? results[results.length - 1] : null;
                });

                if (logoInfo) {
                    const ext = path.extname(new URL(logoInfo).pathname) || '.png';
                    const destPath = path.join(escudosDir, `${slug}.png`); // standardize into png
                    await downloadImage(logoInfo, destPath);
                    console.log(`Successfully restored ${slug}.png`);
                }
            }
        } catch(e) {
            console.log(`Failed for ${slug}: ${e.message}`);
        }
        await page.close();
    }
    await browser.close();
}

main();
