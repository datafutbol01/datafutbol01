const fs = require('fs');
const path = require('path');

const API_KEY = '07048fa03363eb0cd181ac3797f13670';
const LEAGUE_ID = 88; // Eredivisie usually 88
const SEASON = 2025; // 2025/2026 season in API-Football is '2025' or '2024'? Wait, current is 2024 for 24/25. Wait, in previous scripts I used 2025 for 2025/2026 or 2024 for 24/25. Let me fetch current season dynamically!

async function fetchApi(endpoint) {
    const url = `https://v3.football.api-sports.io/${endpoint}`;
    console.log(`Fetching: ${url}`);
    const res = await fetch(url, {
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY
        }
    });
    const data = await res.json();
    return data.response;
}

async function scrapeEredivisie() {
    try {
        console.log("Iniciando scraper para Eredivisie...");
        
        // Let's ensure league ID 88 is Eredivisie and find the current season.
        const leagueInfo = await fetchApi(`leagues?id=${LEAGUE_ID}`);
        if (!leagueInfo || leagueInfo.length === 0) {
            console.error("League not found.");
            return;
        }
        
        const currentSeasonObj = leagueInfo[0].seasons.find(s => s.current);
        const CURRENT_SEASON = currentSeasonObj ? currentSeasonObj.year : 2024;
        console.log(`Temporada actual de Eredivisie: ${CURRENT_SEASON}`);

        // 1. Standings
        const standingsRes = await fetchApi(`standings?league=${LEAGUE_ID}&season=${CURRENT_SEASON}`);
        const standings = standingsRes[0]?.league?.standings[0] || [];

        // 2. Goleadores
        const topscorers = await fetchApi(`players/topscorers?league=${LEAGUE_ID}&season=${CURRENT_SEASON}`);
        
        // 3. Asistencias
        const topassists = await fetchApi(`players/topassists?league=${LEAGUE_ID}&season=${CURRENT_SEASON}`);
        
        // 4. Tarjetas Rojas
        const topredcards = await fetchApi(`players/topredcards?league=${LEAGUE_ID}&season=${CURRENT_SEASON}`);

        // 5. Tarjetas Amarillas
        const topyellowcards = await fetchApi(`players/topyellowcards?league=${LEAGUE_ID}&season=${CURRENT_SEASON}`);

        const ligaData = {
            year: CURRENT_SEASON === 2024 ? 2025 : 2026, // Usually 2024 means 24/25, we call it 2025 in UI
            host: "Países Bajos",
            coverImage: null,
            standings: standings.map(team => ({
                rank: team.rank,
                team: team.team.name,
                flag: team.team.logo,
                pts: team.points,
                pj: team.all.played,
                pg: team.all.win,
                pe: team.all.draw,
                pp: team.all.lose,
                gf: team.all.goals.for,
                gc: team.all.goals.against,
                gd: team.goalsDiff
            })),
            stats: {
                goleadores: topscorers?.slice(0, 5).map(p => ({
                    name: p.player.name,
                    team: p.statistics[0].team.name,
                    goals: p.statistics[0].goals.total
                })) || [],
                asistencias: topassists?.slice(0, 5).map(p => ({
                    name: p.player.name,
                    team: p.statistics[0].team.name,
                    assists: p.statistics[0].goals.assists
                })) || [],
                rojas: topredcards?.slice(0, 5).map(p => ({
                    name: p.player.name,
                    team: p.statistics[0].team.name,
                    cards: p.statistics[0].cards.red
                })) || [],
                amarillas: topyellowcards?.slice(0, 5).map(p => ({
                    name: p.player.name,
                    team: p.statistics[0].team.name,
                    cards: p.statistics[0].cards.yellow
                })) || []
            }
        };

        const outDir = path.join(__dirname, '../app/src/data/ligas/holanda');
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        fs.writeFileSync(path.join(outDir, '2026.json'), JSON.stringify(ligaData, null, 2));
        console.log("Archivo 2026.json (Eredivisie) generado con éxito en app/src/data/ligas/holanda!");

    } catch (e) {
        console.error("Error scraping API:", e);
    }
}

scrapeEredivisie();
