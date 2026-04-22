const fs = require('fs');
const path = require('path');

const photoMap = {
  1930: 'José_Nasazzi',
  1934: 'Giuseppe_Meazza',
  1938: 'Leônidas_da_Silva',
  1950: 'Alcides_Ghiggia',
  1954: 'Ferenc_Puskás',
  1958: 'Didi_(footballer,_born_1928)',
  1962: 'Garrincha',
  1966: 'Eusébio',
  1970: 'Pelé',
  1974: 'Johan_Cruyff',
  1978: 'Mario_Kempes',
  1982: 'Paolo_Rossi',
  1990: 'Lothar_Matthäus',
  1994: 'Romário',
  1998: 'Ronaldo_(Brazilian_footballer)',
  2002: 'Ronaldinho',
  2006: 'Zinedine_Zidane',
  2010: 'Diego_Forlán',
  2014: 'Mario_Götze', 
  2018: 'Luka_Modrić',
  2022: 'Lionel_Messi'
};

async function fetchAndInject() {
  console.log('Iniciando búsqueda en Wikipedia...');
  
  for (const [year, title] of Object.entries(photoMap)) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=1000`;
      const res = await fetch(url);
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      
      if (pages[pageId].thumbnail) {
        const imageUrl = pages[pageId].thumbnail.source;
        console.log(`✅ ${year} (${title}): ${imageUrl}`);
        
        const jsonPath = path.join(process.cwd(), 'app', 'src', 'data', 'mundiales', `${year}.json`);
        if (fs.existsSync(jsonPath)) {
            const raw = fs.readFileSync(jsonPath, 'utf8');
            const parsed = JSON.parse(raw);
            parsed.coverImage = imageUrl;
            fs.writeFileSync(jsonPath, JSON.stringify(parsed, null, 4));
            console.log(`   -> Guardado en ${year}.json`);
        }
      } else {
        console.log(`❌ ${year} (${title}): NO SE ENCONTRÓ IMAGEN`);
      }
    } catch (e) {
      console.log(`Error buscando ${year}: ${e.message}`);
    }
  }
  console.log('¡Proceso terminado!');
}

fetchAndInject();
