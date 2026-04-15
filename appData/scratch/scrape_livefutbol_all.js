const cheerio = require('cheerio');

async function getH2H(teamA, teamAslug, teamB, teamBslug) {
    const url = `https://www.livefutbol.com/equipos/${teamAslug}/${teamBslug}/11/`;
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
        const html = await res.text();
        const $ = cheerio.load(html);
        let output = null;
        $('table.standard_tbg').each((i, table) => {
            if ($(table).text().includes('Suma')) {
                $(table).find('tr').each((j, row) => {
                    const txt = $(row).text().replace(/\s+/g, ' ').trim();
                    if(txt.includes('Suma')) {
                        const tds = $(row).find('td');
                        if (tds.length >= 6) {
                            output = {
                                p: parseInt($(tds[1]).text().trim(), 10),
                                w: parseInt($(tds[2]).text().trim(), 10),
                                d: parseInt($(tds[3]).text().trim(), 10),
                                l: parseInt($(tds[4]).text().trim(), 10)
                            };
                        }
                    }
                });
            }
        });
        return output;
    } catch(e) {
        return null;
    }
}

async function run() {
    const rivals = [
        { name: 'Dundee', slug: 'dundee-fc' },
        { name: 'Dundee United', slug: 'dundee-united' },
        { name: 'Falkirk', slug: 'falkirk-fc' },
        { name: 'Heart of Midlothian', slug: 'heart-of-midlothian' },
        { name: 'Hibernian', slug: 'hibernian-fc' },
        { name: 'Kilmarnock', slug: 'kilmarnock-fc' },
        { name: 'Livingston', slug: 'livingston-fc' },
        { name: 'Motherwell', slug: 'motherwell-fc' },
        { name: 'Rangers', slug: 'rangers-fc' },
        { name: 'St Mirren', slug: 'st-mirren-fc' }
    ];
    for (let r of rivals) {
        const stats = await getH2H('Aberdeen', 'aberdeen-fc', r.name, r.slug);
        console.log(r.name, '=>', stats);
        await new Promise(resolve => setTimeout(resolve, 800));
    }
}
run();
