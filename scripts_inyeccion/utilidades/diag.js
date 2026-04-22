const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const clubsPath = 'app/src/data/clubes/espania';
const ignore = ['elche.json', 'real-oviedo.json', 'valladolid.json'];
const files = fs.readdirSync(clubsPath).filter(f => f.endsWith('.json') && !ignore.includes(f));
const foundIds = [];
for (const f of files) {
  try {
      const db = JSON.parse(fs.readFileSync(clubsPath + '/' + f, 'utf8'));
      foundIds.push(db.id);
  } catch(e) {}
}

const map11v11 = {
  'alaves': {}, 'athletic-club': {}, 'atletico-madrid': {}, 'barcelona': {}, 'celta-vigo': {},
  'espanyol': {}, 'getafe': {}, 'girona': {}, 'las-palmas': {}, 'leganes': {}, 'mallorca': {},
  'osasuna': {}, 'rayo-vallecano': {}, 'real-betis': {}, 'real-madrid': {}, 'real-sociedad': {},
  'real-valladolid': {}, 'sevilla': {}, 'valencia': {}, 'villarreal': {}
};

const missing = Object.keys(map11v11).filter(k => !foundIds.includes(k));
console.log('Missing IDs:', missing);

// Test 11v11
async function test11v11() {
  const url = 'https://www.11v11.com/teams/real-madrid/tab/opposingTeams/opposition/Barcelona/';
  console.log('Testing', url);
  try {
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }});
    const $ = cheerio.load(res.data);
    const text = $('body').text().replace(/\s+/g, ' ');
    console.log(text.substring(0, 1000));
    
    let match1 = text.match(/have won (\d+)/gi);
    console.log('Match1:', match1);
  } catch (e) {
    console.log('Error', e.message);
  }
}
test11v11();
