const axios = require('axios');
const cheerio = require('cheerio');

async function test11v11() {
  try {
    const url = 'https://www.11v11.com/teams/boca-juniors/tab/opposingTeams/opposition/River%20Plate/';
    console.log('Fetching', url);
    let res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
    let $ = cheerio.load(res.data);
    
    // Find the summary table giving the H2H stats
    // The summary in 11v11 is usually like: "Boca Juniors have won 34, River Plate have won 28, and they have drawn 30 times"
    // or a table.
    const text = $('body').text().replace(/\s+/g, ' ').substring(0, 1000);
    console.log(`Page fetched. Length:`, text.length);
    console.log(text);

  } catch (e) {
    console.log('Error:', e.message);
  }
}
test11v11();
