const fs = require('fs');
const cheerio = require('cheerio');

async function scrape(teamId, urlName) {
    const res = await fetch('https://en.wikipedia.org/api/rest_v1/page/html/' + urlName);
    const html = await res.text();
    const $ = cheerio.load(html);
    const titulos = [];
    
    let honoursH2 = $('#Honours, #Honors').parent('h2');
    if(!honoursH2.length) return console.log(teamId, 'No honours found');
    
    let ul = honoursH2.nextAll('ul').eq(0);
    // iterate li
    ul.find('li').each((i, el) => {
        const text = $(el).text();
        // matches things like "Scottish League Championship (55): 1890-91, 1898-99..."
        const match = text.match(/^(.*?)(?:\s*\([0-9]+\))?:\s*(.*)/);
        if (match) {
            let name = match[1].trim();
            // clean up name
            name = name.split('[')[0];
            let yearsRaw = match[2];
            let years = yearsRaw.match(/[0-9]{4}(?:[–\-][0-9]{2,4})?/g);
            if (years) {
                // map long dashes to short
                years = years.map(y => y.replace('–', '-'));
                titulos.push({
                    nombre: name,
                    cantidad: years.length,
                    anios: years
                });
            }
        }
    });

    const path = `app/src/data/clubes/escocia/${teamId}.json`;
    if(fs.existsSync(path)) {
        const data = JSON.parse(fs.readFileSync(path, 'utf8'));
        data.titulos = titulos;
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
        console.log(`Saved ${titulos.length} competiciones for ${teamId}`);
    }
}

async function run() {
    await scrape('rangers', 'Rangers_F.C.');
    await scrape('celtic', 'Celtic_F.C.');
    await scrape('aberdeen', 'Aberdeen_F.C.');
    await scrape('dundee-united', 'Dundee_United_F.C.');
    await scrape('st-mirren', 'St_Mirren_F.C.');
    await scrape('hearts', 'Heart_of_Midlothian_F.C.');
    await scrape('hibernian', 'Hibernian_F.C.');
    await scrape('motherwell', 'Motherwell_F.C.');
    await scrape('kilmarnock', 'Kilmarnock_F.C.');
    await scrape('st-johnstone', 'St_Johnstone_F.C.');
    await scrape('ross-county', 'Ross_County_F.C.');
    await scrape('dundee', 'Dundee_F.C.');
}

run();
