const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
    try {
        const r = await axios.get('https://lahistoriariver.com/historiales');
        const $ = cheerio.load(r.data);
        const nextDataStr = $('#__NEXT_DATA__').html();
        if (nextDataStr) {
            const data = JSON.parse(nextDataStr);
            // find where the history array is
            if (data.props && data.props.pageProps && data.props.pageProps.historiales) {
                const h = data.props.pageProps.historiales;
                console.log('Se encontraron', h.length, 'rivales.');
                // console log the one against Boca Juniors to verify
                const boca = h.find(x => x.nombre_rival.includes('Boca') || x.equipo_rival.includes('Boca'));
                if (boca) {
                    console.log('BOCA FOUND:', boca);
                } else {
                    console.log('Boca not found! First 3:', h.slice(0,3));
                }
            } else {
                console.log('JSON NEXT_DATA found but no historiales inside pageProps.');
                console.log(Object.keys(data.props.pageProps));
            }
        } else {
            console.log('No NEXT_DATA found! Looking for elements. Found links:', $('a').length);
        }
    } catch(e) {
        console.log('Error:', e.message);
    }
}
test();
