import * as cheerio from 'cheerio';

async function testMatchScraping() {
    const url = 'https://en.wikipedia.org/wiki/1930_FIFA_World_Cup';
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    $('.footballbox').each((i, el) => {
        const team1 = $(el).find('th.fhome').text().trim().replace(/\s+/g, ' ');
        const team2 = $(el).find('th.faway').text().trim().replace(/\s+/g, ' ');
        
        let goals1HTML = $(el).find('td.fgoals').first().html();
        let goals2HTML = $(el).find('td.fgoals').last().html();

        const parseGoals = (gHtml) => {
             if (!gHtml) return [];
             const gNodes = gHtml.split(/<br\s*\/?>/i);
             const goals = [];
             gNodes.forEach(n => {
                 let t = cheerio.load(n).text().trim();
                 t = t.replace(/report/i, '').replace(/\[.*?\]/g, '').trim();
                 if (t) goals.push(t);
             });
             return goals;
        };

        if (team1) {
            console.log(team1, 'vs', team2);
            console.log(`  G1:`, parseGoals(goals1HTML));
            console.log(`  G2:`, parseGoals(goals2HTML));
        }
    });
}
testMatchScraping();
