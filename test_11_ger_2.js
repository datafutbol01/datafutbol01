const axios = require('axios');
async function test() {
    const psts = [
        'augsburg', 'union-berlin', 'SC%20Freiburg', 'FC%20Heidenheim', 'hoffenheim',
        'koln', 'RB%20Leipzig', 'Mainz%2005', 'St%20Pauli', 'wolfsburg',
        'bayern-munich', 'borussia-dortmund', 'Bayer%20Leverkusen', 'Werder%20Bremen',
        'borussia-monchengladbach', 'eintracht-frankfurt', 'VfB%20Stuttgart', 'Hamburger%20SV'
    ];
    for (let p of psts) {
        try {
            const r = await axios.get(`https://www.11v11.com/teams/${p}/`, {
                headers:{'User-Agent':'Mozilla/5.0'}
            });
            console.log(`[OK] ${p}`);
        } catch(e) {
            console.log(`[FAIL] ${p}`);
        }
    }
}
test();
