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

const dataDir = path.join(__dirname, 'app', 'src', 'data');
const argDir = path.join(dataDir, 'clubes', 'argentina');
const escudosPath = path.join(__dirname, 'app', 'public', 'escudos');
const historicosPath = path.join(__dirname, 'app', 'public', 'escudos_historicos');

async function scrapeLogos(teamName, knownSlug, isBaseClub, browser, jsonPath) {
    // Generate permutations
    const s = knownSlug;
    let urlsToTry = [
        `https://www.footballkitarchive.com/${s}-logo-history/`,
        `https://www.footballkitarchive.com/ca-${s}-logo-history/`,
        `https://www.footballkitarchive.com/club-atletico-${s}-logo-history/`,
        `https://www.footballkitarchive.com/${s}-fc-logo-history/`,
        `https://www.footballkitarchive.com/cs-${s}-logo-history/`,
        `https://www.footballkitarchive.com/racing-club-logo-history/`, 
        `https://www.footballkitarchive.com/san-lorenzo-de-almagro-logo-history/`,
        `https://www.footballkitarchive.com/rosario-central-logo-history/`
    ];

    // Some hardcoded corrections because FKA is tricky for Latam
    if (s === 'boca-juniors') urlsToTry.unshift(`https://www.footballkitarchive.com/ca-boca-juniors-logo-history/`);
    if (s === 'river-plate') urlsToTry.unshift(`https://www.footballkitarchive.com/ca-river-plate-logo-history/`);
    if (s === 'independiente') urlsToTry.unshift(`https://www.footballkitarchive.com/ca-independiente-logo-history/`);
    if (s === 'racing-club') urlsToTry.unshift(`https://www.footballkitarchive.com/racing-club-logo-history/`);
    if (s === 'san-lorenzo') urlsToTry.unshift(`https://www.footballkitarchive.com/san-lorenzo-de-almagro-logo-history/`);
    if (s === 'rosario-central') urlsToTry.unshift(`https://www.footballkitarchive.com/rosario-central-logo-history/`);
    if (s === 'velez-sarsfield') urlsToTry.unshift(`https://www.footballkitarchive.com/ca-velez-sarsfield-logo-history/`);
    if (s === 'estudiantes-lp') urlsToTry.unshift(`https://www.footballkitarchive.com/estudiantes-de-la-plata-logo-history/`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    let loadedUrl = null;
    for (const url of urlsToTry) {
        try {
            console.log(`[${s}] Trying ${url}...`);
            const res = await page.goto(url, { waitUntil: 'networkidle2', timeout: 8000 });
            if (res && res.status() === 200) {
                loadedUrl = url;
                break;
            }
        } catch(e) {}
    }

    if (!loadedUrl) {
        console.log(`[${s}] Not found on FKA.`);
        await page.close();
        return;
    }

    // Scroll to load all
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

    await page.close();

    const unique = {};
    for(const l of logos) {
        if(!unique[l.year]) unique[l.year] = l.src;
    }
    const yearsFound = Object.keys(unique);

    if (yearsFound.length === 0) {
        console.log(`[${s}] Page loaded but no logos extracted.`);
        return;
    }

    console.log(`[${s}] Found ${yearsFound.length} logos!`);

    if (isBaseClub && jsonPath) {
        const destDir = path.join(historicosPath, s);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        let data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        if (!data.evolucion_escudos) data.evolucion_escudos = [];
        
        const curIdx = data.evolucion_escudos.findIndex(e => e.ano === 'Actualidad');
        let current = null;
        if (curIdx !== -1) current = data.evolucion_escudos.splice(curIdx, 1)[0];
        
        // Remove 'Histórico' parches
        data.evolucion_escudos = data.evolucion_escudos.filter(e => e.ano !== 'Histórico');

        for (const [year, src] of Object.entries(unique)) {
            const ext = path.extname(new URL(src).pathname) || '.png';
            const cleanName = `${s}_${year}_web${ext}`;
            const destPath = path.join(destDir, cleanName);
            await downloadImage(src, destPath);

            const fileUrl = `/escudos_historicos/${s}/${cleanName}`;
            if (!data.evolucion_escudos.some(e => e.url === fileUrl)) {
                data.evolucion_escudos.push({
                    ano: year,  url: fileUrl,  desc: `Escudo usado en la época (${year}). Extraído desde la web.`
                });
            }
        }

        data.evolucion_escudos.sort((a,b) => parseInt(a.ano) - parseInt(b.ano));
        if (current) data.evolucion_escudos.push(current);
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

    } else {
        // Historic Club
        const latestYear = yearsFound.sort()[yearsFound.length - 1];
        const src = unique[latestYear];
        const ext = path.extname(new URL(src).pathname) || '.png';
        const cleanName = `${s}${ext}`;
        const destPath = path.join(escudosPath, cleanName);

        // DELIVERABLE: DESTRUIR FOTOS ANTIGUAS
        // If we are about to save a new web shield, we must delete any existing file with that slug so we replace it!
        for (const extCheck of ['.png', '.webp', '.jpg', '.jpeg', '.gif']) {
            const possibleOldFile = path.join(escudosPath, `${s}${extCheck}`);
            if (fs.existsSync(possibleOldFile)) {
                try { fs.unlinkSync(possibleOldFile); console.log(`Deleted old photo/placeholder for ${s} (${extCheck})`); } catch(e){}
            }
        }

        console.log(`Saved pristine website shield for historic club: ${teamName} -> ${cleanName}`);
        await downloadImage(src, destPath);
    }
}

async function main() {
    const browser = await puppeteer.launch({ headless: 'new' });

    console.log("=== FASE 1: 30 CLUBES BASE ===");
    const baseFiles = fs.readdirSync(argDir).filter(f => f.endsWith('.json'));
    for (const file of baseFiles) {
        const slug = path.basename(file, '.json');
        const jsonPath = path.join(argDir, file);
        await scrapeLogos(slug, slug, true, browser, jsonPath);
    }

    console.log("=== FASE 2: HISTÓRICOS MENORES ===");
    const leagues = ['argentina_temporadas.json', 'argentina_copas.json', 'argentina_copas_ligas.json'];
    const teams = new Set();
    
    for (const l of leagues) {
        const p = path.join(dataDir, 'ligas', l);
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf8'));
            if (data.historico) {
                data.historico.forEach(y => {
                    if (y.campeon) teams.add(y.campeon);
                    if (y.subcampeon) teams.add(y.subcampeon);
                    if (y.tabla_posiciones) y.tabla_posiciones.forEach(r => { if(r.equipo) teams.add(r.equipo); });
                });
            }
            if (data.copas) {
                data.copas.forEach(cup => cup.ediciones.forEach(e => {
                    if (e.campeon) teams.add(e.campeon);
                    if (e.subcampeon) teams.add(e.subcampeon);
                }));
            }
        }
    }

    const missingTeams = [];
    teams.forEach(t => {
        if (!t || t.toLowerCase() === 'no hubo campeonato' || t.toLowerCase() === 'vacante') return;
        const s = toSlug(t);
        const hasJson = fs.existsSync(path.join(argDir, `${s}.json`));
        // We do NOT check if hasImage=true anymore! Because we want to OVERWRITE buggy photos for ALL historic teams if we find a shield!
        if (!hasJson) {
            missingTeams.push({ name: t, slug: s });
        }
    });

    console.log(`Found ${missingTeams.length} Non-Base Argentine Teams across all tables. Attempting to scrape and replace photos...`);

    for (let i = 0; i < missingTeams.length; i++) {
        const team = missingTeams[i];
        console.log(`[${i+1}/${missingTeams.length}] Resolving Historic: ${team.name}`);
        await scrapeLogos(team.name, team.slug, false, browser, null);
    }

    await browser.close();
    console.log("=== OPERACIÓN ARGENTINA FINALIZADA ===");
}

main();
