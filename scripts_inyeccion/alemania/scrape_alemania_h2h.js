const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const fileP = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'alemania_enfrentamientos.json');
let matchups = JSON.parse(fs.readFileSync(fileP, 'utf8'));

const slugsMap = {
    'Augsburg': 'fc-augsburg',
    'Union Berlin': '1-fc-union-berlin',
    'Freiburg': 'sc-freiburg',
    'Heidenheim': '1-fc-heidenheim-1846',
    'Hoffenheim': '1899-hoffenheim',
    'Köln': '1-fc-koeln',
    'RB Leipzig': 'rb-leipzig',
    'Mainz 05': '1-fsv-mainz-05',
    'St. Pauli': 'fc-st-pauli',
    'Wolfsburg': 'vfl-wolfsburg',
    'Bayern Munich': 'bayern-muenchen',
    'Borussia Dortmund': 'borussia-dortmund',
    'Bayer Leverkusen': 'bayer-leverkusen',
    'Werder Bremen': 'werder-bremen',
    'B. Mönchengladbach': 'bor-moenchengladbach',
    'Eintracht Frankfurt': 'eintracht-frankfurt',
    'VfB Stuttgart': 'vfb-stuttgart',
    'Hamburger SV': 'hamburger-sv'
};

const delay = ms => new Promise(res => setTimeout(res, ms));

async function run() {
    let count = 0;
    for (let match of matchups) {
        count++;
        if (match.pj > 0) continue; // Skip already scraped if resuming
        
        const sA = slugsMap[match.equipo_a];
        const sB = slugsMap[match.equipo_b];
        
        if (!sA || !sB) {
            console.log(`Skipping unknown slug for ${match.equipo_a} or ${match.equipo_b}`);
            continue;
        }

        const url = `https://www.livefutbol.com/equipos/${sA}/${sB}/11/`;
        console.log(`[${count}/${matchups.length}] Fetching ${match.equipo_a} vs ${match.equipo_b}...`);
        
        try {
            const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
            const $ = cheerio.load(res.data);
            
            let found = false;
            $('table.standard_tbg').each((i, table) => {
                if ($(table).text().includes('Balance total')) {
                    $(table).find('tr').each((j, tr) => {
                        const rowText = $(tr).text().replace(/\s+/g, ' ').trim();
                        if (rowText.includes('Balance total')) {
                            const cols = $(tr).find('td');
                            const pj = parseInt($(cols[2]).text().trim()) || 0;
                            const vA = parseInt($(cols[3]).text().trim()) || 0;
                            const emp = parseInt($(cols[4]).text().trim()) || 0;
                            const vB = parseInt($(cols[5]).text().trim()) || 0;
                            
                            match.pj = pj;
                            match.victorias_a = vA;
                            match.victorias_b = vB;
                            match.empates = emp;
                            match.pg_a = vA;
                            match.pe = emp;
                            match.pg_b = vB;
                            found = true;
                            console.log(` -> ${pj} PJ | ${vA} W - ${emp} D - ${vB} L`);
                        }
                    });
                }
            });
            if (!found) {
                console.log(' -> No matches found or zero (Table missing)');
                match.pj = 0; // Ensures it is marked processed with 0 if no record exists
            }
        } catch(e) {
            console.log(` -> Failed: ${e.response ? e.response.status : e.message}`);
        }
        
        // Save incrementally
        fs.writeFileSync(fileP, JSON.stringify(matchups, null, 2));
        await delay(1000); // 1 sec delay to avoid rate limits
    }
    console.log('Finished scraping Germany H2H!');
}

run();
