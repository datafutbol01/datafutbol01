const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Failed to download ${url}`);
                return resolve();
            }
            const fileStream = fs.createWriteStream(dest);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
        }).on('error', (err) => {
            console.error(err);
            resolve();
        });
    });
}

async function scrapeLogos(slug, url) {
    try {
        const destDir = path.join(__dirname, 'app', 'public', 'escudos_historicos', slug);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        console.log(`Fetching ${url}...`);
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $ = cheerio.load(data);
        const results = [];

        // In FootballKitArchive, logos are usually in boxes, but it's hard to guess the exact class without looking.
        // Usually images under certain elements. Let's find any img with 'logo' in the src or alt inside the history container.
        $('img').each((i, el) => {
            const src = $(el).attr('src') || $(el).attr('data-src');
            const alt = $(el).attr('alt') || '';
            if (src && (alt.toLowerCase().includes('logo') || src.includes('logo'))) {
                // Try to guess year from alt or surrounding text
                const parentText = $(el).parent().text() || $(el).parent().parent().text();
                const yearMatch = parentText.match(/(18|19|20)\d{2}/) || alt.match(/(18|19|20)\d{2}/);
                const year = yearMatch ? yearMatch[0] : null;

                if (year) {
                    // Make absolute URL
                    const fullSrc = src.startsWith('http') ? src : (src.startsWith('//') ? 'https:' + src : 'https://www.footballkitarchive.com' + src);
                    results.push({ src: fullSrc, year });
                }
            }
        });

        // Deduplicate by year
        const unique = {};
        for(const img of results) {
            if(!unique[img.year]) unique[img.year] = img.src;
        }

        console.log(`Found logos for ${slug}:`, Object.keys(unique));

        for (const [year, src] of Object.entries(unique)) {
            const ext = path.extname(new URL(src).pathname) || '.png';
            const filename = `${slug}_${year}${ext}`;
            const destPath = path.join(destDir, filename);
            console.log(`Downloading ${year} to ${filename}`);
            await downloadImage(src, destPath);
        }

    } catch (e) {
        console.error(`Error scraping ${slug}:`, e.message);
    }
}

async function main() {
    await scrapeLogos('osasuna', 'https://www.footballkitarchive.com/ca-osasuna-logo-history/');
    await scrapeLogos('mallorca', 'https://www.footballkitarchive.com/rcd-mallorca-logo-history/');
}

main();
