const axios = require('axios');

async function checkSlug(name, slugObj) {
    for (const slug of slugObj.slugs) {
        try {
            const res = await axios.get(`https://www.livefutbol.com/equipos/${slug}/`, {
                headers: { 'User-Agent': 'Mozilla/5.0' },
                maxRedirects: 5,
                validateStatus: () => true
            });
            if (res.status === 200) {
                console.log(`[OK] ${name} -> ${slug}`);
                return slug;
            } else {
                console.log(`[FAIL] ${name} -> ${slug} (${res.status})`);
            }
        } catch (e) {
            console.log(`[ERROR] ${slug}: ${e.message}`);
        }
    }
    return null;
}

const teams = [
    { name: 'augsburg', slugs: ['fc-augsburg', 'augsburg'] },
    { name: 'union-berlin', slugs: ['1-fc-union-berlin', 'union-berlin'] },
    { name: 'freiburg', slugs: ['sc-freiburg', 'freiburg'] },
    { name: 'heidenheim', slugs: ['1-fc-heidenheim-1846', 'fc-heidenheim', 'heidenheim'] },
    { name: 'hoffenheim', slugs: ['tsg-hoffenheim', 'tsg-1899-hoffenheim', 'hoffenheim'] },
    { name: 'koln', slugs: ['1-fc-koeln', '1-fc-koln', 'fc-koln'] },
    { name: 'rb-leipzig', slugs: ['rb-leipzig'] },
    { name: 'mainz-05', slugs: ['1-fsv-mainz-05', 'fsv-mainz-05', 'mainz-05'] },
    { name: 'st-pauli', slugs: ['fc-st-pauli', 'st-pauli'] },
    { name: 'wolfsburg', slugs: ['vfl-wolfsburg', 'wolfsburg'] },
    { name: 'bayern-munich', slugs: ['bayern-muenchen', 'fc-bayern-muenchen', 'bayern-munich'] },
    { name: 'borussia-dortmund', slugs: ['borussia-dortmund'] },
    { name: 'bayer-leverkusen', slugs: ['bayer-leverkusen'] },
    { name: 'werder-bremen', slugs: ['werder-bremen'] },
    { name: 'borussia-monchengladbach', slugs: ['bor-moenchengladbach', 'borussia-moenchengladbach', 'borussia-monchengladbach', 'borussia-m-gladbach'] },
    { name: 'eintracht-frankfurt', slugs: ['eintracht-frankfurt'] },
    { name: 'vfb-stuttgart', slugs: ['vfb-stuttgart'] },
    { name: 'hamburger-sv', slugs: ['hamburger-sv'] }
];

async function run() {
    for (const t of teams) {
        await checkSlug(t.name, t);
    }
}
run();
