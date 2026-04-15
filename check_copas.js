const fs = require('fs');
const path = require('path');
const dPath = 'C:\\Users\\gonza\\futbolhistoria\\clubes\\app\\src\\data\\ligas\\argentina_temporadas.json';
const pub = 'C:\\Users\\gonza\\futbolhistoria\\clubes\\app\\public\\escudos';
const jsonPath = 'C:\\Users\\gonza\\futbolhistoria\\clubes\\app\\src\\data\\clubes\\argentina';
const torneos = JSON.parse(fs.readFileSync(dPath, 'utf8'));

const copas = torneos.filter(t => {
    const n=(t.torneo||'').toLowerCase();
    return n.includes('copa')||n.includes('superfinal')||n.includes('trofeo de campeones');
});

const uniqueL = new Set();
copas.forEach(c => uniqueL.add(c.campeon));

const missing = [];
const aliases = {
    'estudiantes de buenos aires': 'estudiantes-ba',
    'club atlético san isidro': 'casi',
    'club atletico san isidro': 'casi',
    'san isidro': 'casi',
    'nueva chicago': 'nueva-chicago',
    'central cordoba (rosario)': 'central-cordoba-rosario',
    'tiro federal': 'tiro-federal',
    'san martin (t)': 'san-martin-t',
    'san martín (t)': 'san-martin-t',
    'quilmes athletic club': 'quilmes',
    'rosario athletic': 'rosario-athletic'
};

for(const name of uniqueL) {
    if(!name || name==='Desconocido') continue;
    let norm = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let alias = aliases[norm] || norm.replace(/[^a-z0-9]/g, '-');
    
    // Si la gema final termina con -fc o club, limpialo para intentar un match generico
    if(alias === 'rosario-athletic') alias = 'rosario-athletic'; 
    else if(alias === 'club-atletico-san-isidro') alias = 'casi';
    
    // Check if JSON exists
    if(fs.existsSync(path.join(jsonPath, alias + '.json'))) continue;
    // Check if alias has mapping or JSON file in aliases from League.jsx! 
    // It's easier: just verify if ANY file starts with alias inside /escudos.
    
    const files = fs.readdirSync(pub);
    // Find a file that matches exactly alias.png, alias.jpg, alias.svg, alias.webp
    const found = files.find(f => f.startsWith(alias + '.'));
    if(!found) {
        // sometimes alias from League overrides the simple slug
        const overrides = {
            'estudiantes-ba': 'estudiantes-ba',
            'casi': 'casi',
            'estudiantil-porteno': 'estudiantil-porteno',
            'rosario-athletic': 'rosario-athletic'
        };
        const over = overrides[alias] || alias;
        const foundOver = files.find(f => f.startsWith(over + '.'));
        if(!foundOver) {
             missing.push(name);
        }
    }
}
console.log('FALTAN ESCUDOS PARA:', missing);
