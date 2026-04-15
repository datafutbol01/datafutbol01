const axios = require('axios');
const cheerio = require('cheerio');
axios.get('https://www.livefutbol.com/teams/te120/argentinos-juniors/record-opponent/').then(r=>{
    const $ = cheerio.load(r.data);
    let count = 0;
    $('table.standard_tbg tr').each((i,tr)=>{
        const ts=$(tr).find('td');
        if(ts.length>1) {
            console.log("Rival:", $(ts[0]).text().trim(), "PJ:", $(ts[1]).text().trim(), "goles:", $(ts[5]).text().trim());
            count++;
        }
    });
    console.log("Total tables found:", count);
}).catch(console.error);
