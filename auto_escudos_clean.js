const fs = require('fs');
const path = require('path');
const https = require('https');

const clubesDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
const escudosDir = path.join(__dirname, 'app', 'public', 'escudos');

if (!fs.existsSync(escudosDir)) {
    fs.mkdirSync(escudosDir, { recursive: true });
}

const mapNames = {
    'athletic-club': 'Athletic Bilbao',
    'real-sociedad': 'Real Sociedad',
    'atletico-madrid': 'Atletico Madrid',
    'rayo-vallecano': 'Rayo Vallecano',
    'real-valladolid': 'Real Valladolid',
    'celta-vigo': 'Celta Vigo',
    'real-madrid': 'Real Madrid',
    'real-betis': 'Real Betis',
    'las-palmas': 'Las Palmas',
    'osasuna': 'Osasuna',
    'getafe': 'Getafe',
    'elche': 'Elche',
    'girona': 'Girona',
    'leganes': 'Leganes',
    'villarreal': 'Villarreal',
    'sevilla': 'Sevilla',
    'valencia': 'Valencia',
    'mallorca': 'Mallorca',
    'espanyol': 'Espanyol',
    'real-oviedo': 'Real Oviedo'
};

const processClub = (file) => {
    return new Promise((resolve) => {
        const filePath = path.join(clubesDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const id = data.id;
        
        let searchName = mapNames[id] || data.datos.nombre_corto || data.datos.nombre_completo;
        searchName = encodeURIComponent(searchName.replace(/ /g, '_'));

        console.log(`Buscando escudo para ${id} (${searchName})...`);

        https.get(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${searchName}`, (res) => {
            let body = '';
            res.on('data', d => body += d);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    if (json && json.teams && json.teams.length > 0) {
                        // Find the one representing soccer in Spain if possible, otherwise take the first
                        const team = json.teams.find(t => t.strCountry === 'Spain' && t.strSport === 'Soccer') || json.teams[0];
                        const badgeUrl = team.strBadge;
                        
                        if (badgeUrl) {
                            const dest = path.join(escudosDir, `${id}.png`);
                            const fileStream = fs.createWriteStream(dest);
                            https.get(badgeUrl, (imgRes) => {
                                imgRes.pipe(fileStream);
                                fileStream.on('finish', () => {
                                    fileStream.close();
                                    console.log(`✅ ${id}.png descargado limpio y perfecto.`);
                                    resolve();
                                });
                            }).on('error', (err) => {
                                console.log(`❌ Error descargando img para ${id}`);
                                resolve();
                            });
                        } else {
                            console.log(`⚠️ No se encontró URL de badge para ${id}`);
                            resolve();
                        }
                    } else {
                        console.log(`⚠️ No se encontraron resultados en TheSportsDB para ${id}`);
                        resolve();
                    }
                } catch(e) {
                    console.log(`❌ Error parseando JSON para ${id}`);
                    resolve();
                }
            });
        }).on('error', (err) => {
            console.log(`❌ Error de red para ${id}`);
            resolve();
        });
    });
};

const run = async () => {
    const files = fs.readdirSync(clubesDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
        await processClub(file);
    }
    console.log('¡Escudos regenerados puramente con TheSportsDB!');
};

run();
