const axios = require('axios');
const cheerio = require('cheerio');

async function go() {
  const urls = [
      'https://www.livefutbol.com/clasificacion/fra-ligue-1-2023-2024/',
      'https://www.livefutbol.com/clasificacion/fra-ligue-1-1998-1999/', // para buscar equipos mas viejos o ausentes
      'https://www.livefutbol.com/clasificacion/fra-ligue-2-2023-2024/'
  ];
  let set = new Set();
  
  for(let u of urls) {
      try {
        const res = await axios.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $ = cheerio.load(res.data);
        $('a[href^="/equipos/"]').each((i, e) => {
            set.add($(e).attr('href').split('/')[2]);
        });
      } catch(e){}
  }

  console.log(Array.from(set).join('\n'));
}

go();
