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
    return n.replace(/\./g, '').replace(/\s+/g, '-');
}

const ligasDir = path.join(__dirname, 'app', 'src', 'data', 'ligas');
const clubesInglaterra = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');
const escudosPath = path.join(__dirname, 'app', 'public', 'escudos');

async function scrapeHistoricalShield(slug, teamName, browser) {
    const urlsToTry = [
        `https://www.footballkitarchive.com/${slug}-fc-logo-history/`,
        `https://www.footballkitarchive.com/${slug}-logo-history/`,
        `https://www.footballkitarchive.com/${slug}-afc-logo-history/`,
        `https://www.footballkitarchive.com/${slug}-united-logo-history/`
    ];

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    let loaded = false;
    for (const url of urlsToTry) {
        try {
            console.log(`Trying ${url}...`);
            const res = await page.goto(url, { waitUntil: 'networkidle2', timeout: 8000 });
            if (res && res.status() === 200) {
                loaded = true;
                break;
            }
        } catch(e) {}
    }

    if (!loaded) {
        console.log(`Not found on FKA for ${teamName} (${slug}).`);
        await page.close();
        return;
    }

    const logos = await page.evaluate(() => {
        const results = [];
        const imgs = document.querySelectorAll('img');
        imgs.forEach(img => {
            const src = img.src || img.getAttribute('data-src');
            if (src && src.includes('logo')) {
                results.push(src);
            }
        });
        return results;
    });

    await page.close();

    if (logos.length > 0) {
        const src = logos[logos.length - 1]; // Assume the last found image in the lazy DOM is the most modern or relevant
        const ext = path.extname(new URL(src).pathname) || '.png';
        const cleanName = `${slug}${ext}`;
        const destPath = path.join(escudosPath, cleanName);
        console.log(`Saved generic shield for ${teamName} -> ${cleanName}`);
        await downloadImage(src, destPath);
    }
}

async function main() {
    const tempFile = path.join(ligasDir, 'inglaterra_temporadas.json');
    const copasFile = path.join(ligasDir, 'inglaterra_copas.json');

    const teams = new Set();

    if (fs.existsSync(tempFile)) {
        const data = JSON.parse(fs.readFileSync(tempFile, 'utf8'));
        if (data.historico) {
            data.historico.forEach(y => {
                if (y.campeon) teams.add(y.campeon);
                if (y.subcampeon) teams.add(y.subcampeon);
                if (y.tabla_posiciones) {
                    y.tabla_posiciones.forEach(r => {
                        if (r.equipo) teams.add(r.equipo);
                    });
                }
            });
        }
    }

    if (fs.existsSync(copasFile)) {
        const data = JSON.parse(fs.readFileSync(copasFile, 'utf8'));
        if (data.copas) {
            data.copas.forEach(cup => {
                cup.ediciones.forEach(e => {
                    if (e.campeon) teams.add(e.campeon);
                    if (e.subcampeon) teams.add(e.subcampeon);
                });
            });
        }
    }

    const missingTeams = [];
    teams.forEach(t => {
        if (!t || t.toLowerCase() === 'no hubo campeonato' || t.toLowerCase() === 'vacante') return;
        const s = toSlug(t);
        const hasJson = fs.existsSync(path.join(clubesInglaterra, `${s}.json`)) || fs.existsSync(path.join(clubesInglaterra, `${s}-fc.json`));
        let hasImage = false;
        for (const ext of ['.png', '.webp', '.jpg', '.jpeg', '.gif', '.svg']) {
            if (fs.existsSync(path.join(escudosPath, `${s}${ext}`))) {
                hasImage = true;
                break;
            }
        }
        if (!hasJson && !hasImage) {
            missingTeams.push({ name: t, slug: s });
        }
    });

    console.log(`Found ${missingTeams.length} Missing English Teams across all historical tables.`);

    if (missingTeams.length > 0) {
        const browser = await puppeteer.launch({ headless: 'new' });
        for (let i = 0; i < missingTeams.length; i++) {
            const team = missingTeams[i];
            console.log(`[${i+1}/${missingTeams.length}] Resolving ${team.name}`);
            await scrapeHistoricalShield(team.slug, team.name, browser);
        }
        await browser.close();
    }
}

main();
