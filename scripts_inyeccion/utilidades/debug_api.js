const apiKey = "07048fa03363eb0cd181ac3797f13670";
async function run() {
    console.log("Probando endpoint de standings con la key de La Liga...");
    const response = await fetch(`https://v3.football.api-sports.io/standings?league=140&season=2025`, {
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey
        }
    });
    const data = await response.json();
    
    // Todas las ligas mapeadas en el proyecto
    const allowedIds = [
      128, 129, 130, 13, 11, 10, 39, 45, 48, 140, 141, 135, 136,
      78, 79, 61, 62, 2, 3, 845, 531, 5, 4, 1, 15
    ];
    
    const matchesQueNosImportan = data.response?.filter(m => allowedIds.includes(m.league.id));
    
    console.log("Respuesta cruda de la API:", JSON.stringify(data, null, 2).substring(0, 500));
    
    if (matchesQueNosImportan?.length > 0) {
        matchesQueNosImportan.forEach(m => {
           console.log(`- LIGA ${m.league.id}: ${m.teams.home.name} vs ${m.teams.away.name}`);
        });
    }
}
run();
