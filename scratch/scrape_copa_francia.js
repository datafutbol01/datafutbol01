const fs = require('fs');
const path = require('path');

const API_KEY = '07048fa03363eb0cd181ac3797f13670';
const LEAGUE_ID = 66; // Coupe de France
const SEASON = 2025; // Current season

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

async function scrapeCopaFrancia() {
    try {
        console.log("Iniciando scraper para Copa de Francia...");

        // 1. Goleadores
        const topscorers = await fetchApi(`players/topscorers?league=${LEAGUE_ID}&season=${SEASON}`);
        
        // 2. Asistencias
        const topassists = await fetchApi(`players/topassists?league=${LEAGUE_ID}&season=${SEASON}`);
        
        // 3. Tarjetas Rojas
        const topredcards = await fetchApi(`players/topredcards?league=${LEAGUE_ID}&season=${SEASON}`);

        // 4. Tarjetas Amarillas
        const topyellowcards = await fetchApi(`players/topyellowcards?league=${LEAGUE_ID}&season=${SEASON}`);

        // 5. Fixtures para la llave
        const fixtures = await fetchApi(`fixtures?league=${LEAGUE_ID}&season=${SEASON}`);

        const copaData = {
            year: 2026,
            host: "Francia",
            coverImage: null, // Dejamos nulo para que use la de IA si quieren, o buscar una
            groups: {}, // No hay fase de grupos
            secondStageGroups: {},
            knockoutPhase: {
                "octavos": [],
                "cuartos": [],
                "semifinal": [],
                "tercerPuesto": [],
                "final": []
            },
            awards: {
                goldenBoot: {
                    winner: topscorers?.[0]?.player?.name || "TBD",
                    team: topscorers?.[0]?.statistics?.[0]?.team?.name || "",
                    goals: topscorers?.[0]?.statistics?.[0]?.goals?.total || 0
                },
                topAssists: {
                    winner: topassists?.[0]?.player?.name || "TBD",
                    team: topassists?.[0]?.statistics?.[0]?.team?.name || "",
                    assists: topassists?.[0]?.statistics?.[0]?.goals?.assists || 0
                }
            },
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

        // Parse fixtures into knockout phases
        if (fixtures) {
            fixtures.forEach(match => {
                let stage = "";
                const round = match.league.round.toLowerCase();
                if (round.includes("8th") || round.includes("octavos") || round.includes("16")) stage = "octavos";
                else if (round.includes("quarter") || round.includes("cuartos") || round.includes("8")) stage = "cuartos";
                else if (round.includes("semi")) stage = "semifinal";
                else if (round.includes("final") && !round.includes("quarter") && !round.includes("semi")) stage = "final";
                
                if (stage) {
                    copaData.knockoutPhase[stage].push({
                        teamA: match.teams.home.name,
                        teamB: match.teams.away.name,
                        scoreA: match.goals.home ?? "-",
                        scoreB: match.goals.away ?? "-",
                        penaltyA: match.score.penalty.home,
                        penaltyB: match.score.penalty.away,
                        date: match.fixture.date,
                        status: match.fixture.status.short,
                        flagA: match.teams.home.logo,
                        flagB: match.teams.away.logo
                    });
                }
            });
        }

        const outDir = path.join(__dirname, '../app/src/data/copas/francia');
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        fs.writeFileSync(path.join(outDir, '2026.json'), JSON.stringify(copaData, null, 2));
        console.log("Archivo 2026.json generado con éxito!");

    } catch (e) {
        console.error("Error scraping API:", e);
    }
}

scrapeCopaFrancia();
