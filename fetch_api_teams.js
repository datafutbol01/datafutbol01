const fs = require('fs');

const TARGET_LEAGUES = {
    ARGENTINA_PRIMERA: { id: 128, file: 'argentina' },
    ENG_PREMIER: { id: 39, file: 'inglaterra' },
    ESP_LALIGA: { id: 140, file: 'espania' }
    // Podemos seguir agregando
};

const apiKey = process.env.VITE_API_FOOTBALL_KEY || "07048fa03363eb0cd181ac3797f13670";

async function run() {
    console.log("Iniciando escaneo de mapeo con la API Key:", apiKey.substring(0, 5) + "...");
    const diccionario = {};

    for (const [leagueName, info] of Object.entries(TARGET_LEAGUES)) {
        console.log(`Pidiendo equipos de la liga ${leagueName} (ID: ${info.id})...`);
        const response = await fetch(`https://v3.football.api-sports.io/teams?league=${info.id}&season=2024`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            }
        });
        const data = await response.json();
        
        if (data.response) {
            data.response.forEach(item => {
                const team = item.team;
                diccionario[team.id] = {
                    api_name: team.name,   // Nombre que usa la API
                    json_name: "",         // Acá pondremos tu nombre exacto
                    country_file: info.file // Para saber en qué archivo buscar
                };
            });
            console.log(`✅ ${data.response.length} equipos guardados de ${leagueName}.`);
        } else {
            console.log(`❌ Error con ${leagueName}:`, data);
        }
    }

    fs.writeFileSync('./app/src/config/mapped_teams.json', JSON.stringify(diccionario, null, 2));
    console.log("\nDiccionario maestro generado y guardado en app/src/config/mapped_teams.json");
}

run();
