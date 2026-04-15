import * as cheerio from 'cheerio';

fetch('https://en.wikipedia.org/wiki/Zaire')
  .then(r => r.text())
  .then(html => {
    const $ = cheerio.load(html);
    const img = $('img').toArray().find(i => $(i).attr('src') && $(i).attr('src').includes('Flag_of_Zaire'));
    if (img) console.log('Zaire flag:', $(img).attr('src'));
    else console.log('Not found');
  });
