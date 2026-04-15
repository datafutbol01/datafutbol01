const cheerio = require('cheerio');
async function run() {
    const res = await fetch('https://www.soccerbase.com/teams/head_to_head.sd?team_id=14&team2_id=509', { headers: { 'User-Agent': 'Mozilla/5.0' }});
    const html = await res.text();
    const $ = cheerio.load(html);
    
    // Find h2h stats table
    const boxes = $('.stTable');
    boxes.each((i, el) => {
        console.log($(el).text().replace(/\s+/g, ' ').trim());
    });
}
run();
