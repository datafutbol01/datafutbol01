const axios = require('axios');

async function checkSlug(slug) {
    try {
        const res = await axios.get(`https://www.11v11.com/teams/${slug}/`, {maxRedirects: 5, validateStatus: () => true});
        if (res.status === 200) {
            console.log(`[OK] ${slug}`);
            return true;
        } else {
            console.log(`[FAIL] ${slug} (Status: ${res.status})`);
            return false;
        }
    } catch (e) {
        console.log(`[ERROR] ${slug}: ${e.message}`);
        return false;
    }
}

const testSlugs = [
    'augsburg', 'fc-augsburg',
    'union-berlin', '1-fc-union-berlin',
    'freiburg', 'sc-freiburg',
    'heidenheim', '1-fc-heidenheim', 'fc-heidenheim-1846',
    'hoffenheim', 'tsg-1899-hoffenheim',
    'koln', '1-fc-koln',
    'rb-leipzig', 
    'mainz-05', '1-fsv-mainz-05',
    'st-pauli', 'fc-st-pauli',
    'wolfsburg', 'vfl-wolfsburg',
    'bayern-munich', 'fc-bayern-munchen', 'bayern-munchen',
    'borussia-dortmund',
    'bayer-leverkusen', 'bayer-04-leverkusen',
    'werder-bremen', 'sv-werder-bremen',
    'borussia-monchengladbach',
    'eintracht-frankfurt',
    'vfb-stuttgart', 'vfb-stuttgart-1893',
    'hamburger-sv'
];

async function run() {
    for (const s of testSlugs) {
        await checkSlug(s);
    }
}

run();
