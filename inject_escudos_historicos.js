const fs = require('fs');
const path = require('path');

const temporadasFilePath = './app/src/data/ligas/inglaterra_temporadas.json';
let temporadas = JSON.parse(fs.readFileSync(temporadasFilePath, 'utf8'));

// Aliases exactly as found in League.jsx to map "campeon" strictly
const aliases = {
    "blackburn rovers": "blackburn-rovers", "sheffield wednesday": "sheffield-wednesday", "the wednesday": "sheffield-wednesday", "sheffield united": "sheffield-united", "west bromwich albion": "west-bromwich-albion", "west bromwich": "west-bromwich-albion", "huddersfield town": "huddersfield-town",
    "portsmouth": "portsmouth", "preston north end": "preston-north-end", "derby county": "derby-county", "bolton wanderers": "bolton-wanderers", "wimbledon": "wimbledon", "coventry city": "coventry-city", "ipswich town": "ipswich-town", "birmingham city": "birmingham-city", "swansea city": "swansea-city", "middlesbrough": "middlesbrough", "charlton athletic": "charlton-athletic", "wigan athletic": "wigan-athletic", "blackpool": "blackpool", "cardiff city": "cardiff-city",
    "luton town": "luton-town", "reading fc": "reading-fc", "oxford united": "oxford-united", "norwich city": "norwich-city", "southampton": "southampton", "stoke city": "stoke-city", "swindon town": "swindon-town", "qpr": "qpr", "queens park rangers": "qpr", "barnsley": "barnsley", "bury": "bury", "blackburn olympic": "blackburn-olympic", "old etonians": "old-etonians", "old carthusians": "old-carthusians", "clapham rovers": "clapham-rovers", "wanderers": "wanderers", "royal engineers": "royal-engineers", "oxford university": "oxford-university"
};

// Target IDs we want to inject
const targetIds = [
  'leicester-city', 'swansea-city', 'wigan-athletic', 'birmingham-city', 
  'portsmouth', 'middlesbrough', 'blackburn-rovers', 'sheffield-wednesday', 
  'luton-town', 'wimbledon', 'reading-fc', 'coventry-city', 'oxford-united', 
  'norwich-city', 'ipswich-town', 'derby-county', 'southampton', 'stoke-city', 
  'swindon-town', 'west-bromwich-albion', 'qpr', 'blackpool', 'preston-north-end', 
  'huddersfield-town', 'sheffield-united', 'barnsley', 'bury', 'blackburn-olympic', 
  'old-etonians', 'old-carthusians', 'oxford-university', 'clapham-rovers', 'wanderers', 'royal-engineers', 'notts-county', 'bolton-wanderers', 'charlton-athletic', 'cardiff-city', 'st-andrews-old-caledonians'
];

let injectedCount = 0;

temporadas.forEach(t => {
    if (!t.campeon) return;
    
    // Normalize campeon to match format
    const normalizedCampeon = t.campeon.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Resolve alias or fallback to hyphens
    let resolvedId = aliases[normalizedCampeon] || normalizedCampeon.replace(/[^a-z0-9]/g, '-');
    
    // Handle the specific Leicster case if absent from aliases
    if (resolvedId === 'leicester') resolvedId = 'leicester-city';
    
    if (targetIds.includes(resolvedId)) {
       // Look up if we have an image folder mapping
       const clubImgDir = path.join('./app/public/escudos/inglaterra/', resolvedId);
       if (fs.existsSync(clubImgDir)) {
           const files = fs.readdirSync(clubImgDir).filter(f => !f.startsWith('.'));
           if (files.length > 0) {
              // Find "actual" / simplest name, exactly like before
              let candidate = files[0];
              for (let file of files) {
                  const lower = file.toLowerCase();
                  const hasYear = /[12][0-9]{3}/.test(lower);
                  const hasOld = lower.includes('old') && !resolvedId.includes('old');
                  if ( (/[12][0-9]{3}/.test(candidate) || candidate.toLowerCase().includes('old')) && !hasYear && !hasOld ) {
                      candidate = file;
                  } else if (!hasYear && !hasOld && file.length < candidate.length) {
                      candidate = file;
                  }
              }
              // For Old Etonians and West Bromwich, force the correct file
              if (resolvedId === 'old-etonians') candidate = 'old-etonians.jpg';
              if (resolvedId === 'west-bromwich-albion') candidate = 'west-bromwich-albion.webp';
              
              t.escudo_historico = `/escudos/inglaterra/${resolvedId}/${candidate}`;
              injectedCount++;
           }
       }
    }
});

fs.writeFileSync(temporadasFilePath, JSON.stringify(temporadas, null, 2));
console.log(`Inyectamos "escudo_historico" a mano en ${injectedCount} campeonatos de Inglaterra.`);
