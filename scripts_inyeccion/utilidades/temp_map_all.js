const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = "07048fa03363eb0cd181ac3797f13670";
const mappedPath = path.join(__dirname, 'app', 'src', 'config', 'mapped_teams.json');

const leaguesToMap = {
    135: { season: 2025, folder: 'italia' },
    78: { season: 2025, folder: 'alemania' },
    61: { season: 2025, folder: 'francia' },
    281: { season: 2025, folder: 'escocia' }, // Actually Scotland Premiership is 281
    268: { season: 2026, folder: 'uruguay' }, 
    71: { season: 2026, folder: 'brasil' }
};

const normalizeStr = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

async function start() {
    let mapped = {};
    if (fs.existsSync(mappedPath)) {
        mapped = JSON.parse(fs.readFileSync(mappedPath, 'utf8'));
    }

    for (const [lid, info] of Object.entries(leaguesToMap)) {
        console.log(`Mapping lid: ${lid} (${info.folder})`);
        
        let localFiles = [];
        const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', info.folder);
        if (fs.existsSync(dir)) {
            localFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));
        }

        try {
            const resp = await axios.get(`https://v3.football.api-sports.io/teams?league=${lid}&season=${info.season}`, {
                headers: { "x-rapidapi-key": apiKey }
            });
            const apiTeams = resp.data.response || [];

            for (const t of apiTeams) {
                const apiId = t.team.id.toString();
                if (mapped[apiId]) continue; // already mapped

                const apiName = t.team.name;
                const apiNorm = normalizeStr(apiName);
                
                // Intentar match con archivo local
                let bestMatchId = null;
                for(const fileId of localFiles) {
                    const fNorm = normalizeStr(fileId);
                    if (apiNorm.includes(fNorm) || fNorm.includes(apiNorm)) {
                        bestMatchId = fileId;
                        break;
                    }
                }

                // If not found by direct inclusion, see if we can read the file "nombre_corto"
                if (!bestMatchId) {
                    for(const fileId of localFiles) {
                        try {
                            const d = JSON.parse(fs.readFileSync(path.join(dir, fileId + '.json')));
                            if(d.datos && d.datos.nombre_corto) {
                                const scNorm = normalizeStr(d.datos.nombre_corto);
                                if (apiNorm.includes(scNorm) || scNorm.includes(apiNorm)) {
                                    bestMatchId = fileId;
                                    break;
                                }
                            }
                        }catch(e){}
                    }
                }

                if (bestMatchId) {
                    mapped[apiId] = {
                        api_name: apiName,
                        json_name: apiName,
                        country_file: info.folder,
                        file_id: bestMatchId
                    };
                    console.log(`Matched [API] ${apiName} -> [LOCAL] ${bestMatchId}`);
                } else {
                    console.log(`[!] No match found for API team: ${apiName}`);
                }
            }
        } catch (e) {
            console.log(`Error en lid ${lid}`, e.message);
        }
    }

    fs.writeFileSync(mappedPath, JSON.stringify(mapped, null, 2));
    console.log("Terminado!");
}

start();
