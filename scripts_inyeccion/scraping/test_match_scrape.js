import * as cheerio from 'cheerio';

async function testMatchScraping() {
    const url = 'https://en.wikipedia.org/wiki/1930_FIFA_World_Cup';
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    $('.footballbox').each((i, el) => {
        const team1 = $(el).find('th.fhome').text().trim();
        const score = $(el).find('th.fscore').text().trim();
        const team2 = $(el).find('th.faway').text().trim();
        
        let goals1 = [];
        $(el).find('.fgoals:first-child').html()?.split(/<br\s*\/?>/i).forEach(g => {
            const txt = cheerio.load(g).text().trim();
            if (txt) goals1.push(txt);
        });

        let goals2 = [];
        $(el).find('.fgoals:last-child').html()?.split(/<br\s*\/?>/i).forEach(g => {
            const txt = cheerio.load(g).text().trim();
            if (txt && txt !== 'Report') goals2.push(txt);
        });

        if (team1) {
            console.log(`${team1} ${score} ${team2}`);
            console.log(`  Goals 1:`, goals1);
            console.log(`  Goals 2:`, goals2);
        }
    });
}
testMatchScraping();
