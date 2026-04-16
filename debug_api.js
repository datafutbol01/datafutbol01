const apiKey = "07048fa03363eb0cd181ac3797f13670";
async function run() {
    console.log("Probando fecha de HOY con timezone arg:");
    const response = await fetch(`https://v3.football.api-sports.io/fixtures?date=2026-04-16&timezone=America/Argentina/Buenos_Aires&league=13`, {
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey
        }
    });
    const data = await response.json();
    console.log(`Partidos devueltos para el 16 de abril en Libertadores: ${data.response?.length}`);
    data.response?.forEach(m => {
       console.log(`- ${m.fixture.date} | ${m.teams.home.name} vs ${m.teams.away.name} (Status: ${m.fixture.status.short})`);
    });
}
run();
