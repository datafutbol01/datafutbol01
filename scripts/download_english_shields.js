const fs = require('fs');
const path = require('path');
const https = require('https');

// URLs de escudos en Wikimedia Commons (versiones PNG de alta calidad sin fondo)
const escudosUrls = {
    "arsenal": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
    "aston-villa": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Aston_Villa_logo.svg/1200px-Aston_Villa_logo.svg.png",
    "bournemouth": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/1200px-AFC_Bournemouth_%282013%29.svg.png",
    "brentford": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/1200px-Brentford_FC_crest.svg.png",
    "brighton": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png",
    "burnley": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/1200px-Burnley_FC_Logo.svg.png",
    "chelsea": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
    "crystal-palace": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png",
    "everton": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png",
    "fulham": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/1200px-Fulham_FC_%28shield%29.svg.png",
    "leeds-united": "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png",
    "liverpool": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    "manchester-city": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    "manchester-united": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    "newcastle": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",
    "nottingham-forest": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/1200px-Nottingham_Forest_F.C._logo.svg.png",
    "sunderland": "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Logo_Sunderland.svg/1200px-Logo_Sunderland.svg.png",
    "tottenham": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
    "west-ham": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png",
    "wolves": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers_comp.svg/1200px-Wolverhampton_Wanderers_comp.svg.png"
};

const escudosDir = path.join(__dirname, '../app/public/escudos');

if (!fs.existsSync(escudosDir)) {
    fs.mkdirSync(escudosDir, { recursive: true });
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } };
        https.get(url, options, (res) => {
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    resolve();
                });
            } else {
                reject(new Error(`Error descargando ${url}: ${res.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function run() {
    let success = 0;
    for (const [id, url] of Object.entries(escudosUrls)) {
        const filepath = path.join(escudosDir, `${id}.png`);
        try {
            await downloadImage(url, filepath);
            console.log(`✅ Escudo descargado: ${id}.png`);
            success++;
        } catch (e) {
            console.error(`❌ Falló ${id}: ${e.message}`);
        }
    }
    console.log(`\n¡Extracción finalizada! ${success}/20 escudos de la Premier League instalados en /public/escudos/`);
}

run();
