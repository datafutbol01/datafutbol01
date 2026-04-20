const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = "07048fa03363eb0cd181ac3797f13670";
const mappedPath = path.join(__dirname, 'app', 'src', 'config', 'mapped_teams.json');

const normalizeStr = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

async function fixMapping() {
    let mapped = JSON.parse(fs.readFileSync(mappedPath, 'utf8'));

    // Fix Cerro error (id might be 2368 or something. Let's find "Cerro")
    for (const [id, m] of Object.entries(mapped)) {
        if (m.country_file === 'uruguay' && m.api_name === 'Cerro' && m.file_id === 'cerro-largo') {
            mapped[id].file_id = 'cerro';
        }
        // Remove the peruvian teams
        if (m.api_name === 'Universitario' || m.api_name === 'Sporting Cristal' || m.api_name === 'Alianza Lima') {
            delete mapped[id];
        }
    }

    // Hardcoded fixes
    const manualMaps = [
        { id: "85", api_name: "Paris Saint Germain", json_name: "Paris Saint-Germain", country_file: "francia", file_id: "paris-saint-germain" },
        { id: "157", api_name: "Bayern München", json_name: "Bayern Munich", country_file: "alemania", file_id: "bayern-munchen" },
        { id: "134", api_name: "Atletico Paranaense", json_name: "Athletico Paranaense", country_file: "brasil", file_id: "athletico-paranaense" },
        { id: "1062", api_name: "Atletico-MG", json_name: "Atletico Mineiro", country_file: "brasil", file_id: "atletico-mineiro" },
        { id: "794", api_name: "RB Bragantino", json_name: "Red Bull Bragantino", country_file: "brasil", file_id: "red-bull-bragantino" },
        { id: "2384", api_name: "Atletico Torque", json_name: "Montevideo City Torque", country_file: "uruguay", file_id: "montevideo-city-torque" }
    ];

    manualMaps.forEach(m => {
        mapped[m.id] = m;
    });

    // Map Scotland 179
    try {
        const resp = await axios.get(`https://v3.football.api-sports.io/teams?league=179&season=2025`, {
            headers: { "x-rapidapi-key": apiKey }
        });
        const apiTeams = resp.data.response || [];
        
        let localFiles = fs.readdirSync(path.join(__dirname, 'app', 'src', 'data', 'clubes', 'escocia')).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));

        for (const t of apiTeams) {
            const apiId = t.team.id.toString();
            const apiName = t.team.name;
            const apiNorm = normalizeStr(apiName);
            let bestMatchId = null;
            
            for(const fileId of localFiles) {
                const fNorm = normalizeStr(fileId);
                if (apiNorm.includes(fNorm) || fNorm.includes(apiNorm)) {
                    bestMatchId = fileId;
                    break;
                }
            }
            if (bestMatchId) {
                 mapped[apiId] = {
                     api_name: apiName,
                     json_name: apiName,
                     country_file: 'escocia',
                     file_id: bestMatchId
                 };
            }
        }
    }catch(e) {}

    fs.writeFileSync(mappedPath, JSON.stringify(mapped, null, 2));
    console.log("Mappings corregidos!");
}

fixMapping();
