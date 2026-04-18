const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = "07048fa03363eb0cd181ac3797f13670";
const mappedPath = path.join(__dirname, 'app', 'src', 'config', 'mapped_teams.json');
const processedPath = path.join(__dirname, 'partidos_procesados.json');
const rootClubs = path.join(__dirname, 'app', 'src', 'data', 'clubes');

let mapped = {};
if (fs.existsSync(mappedPath)) {
    mapped = JSON.parse(fs.readFileSync(mappedPath, 'utf8'));
}

let processed = {};
if (fs.existsSync(processedPath)) {
    processed = JSON.parse(fs.readFileSync(processedPath, 'utf8'));
}

const LEAGUES = [39, 140, 128]; // Premier League, LaLiga, Argentina Primera

// Helper para actualizar JSON
function updateTeam(folder, fileId, rivalFileId, w, d, l) {
    const p = path.join(rootClubs, folder, `${fileId}.json`);
    if(!fs.existsSync(p)) return false;
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!data.h2h) data.h2h = {};
    if (!data.h2h[rivalFileId]) {
        data.h2h[rivalFileId] = { pj: 0, pg: 0, pe: 0, pp: 0 };
    }
    data.h2h[rivalFileId].pj++;
    data.h2h[rivalFileId].pg += w;
    data.h2h[rivalFileId].pe += d;
    data.h2h[rivalFileId].pp += l;
    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    return true;
}

async function run() {
    console.log("Iniciando Modo Actualización...");
    for (const lid of LEAGUES) {
        console.log(`Buscando partidos para Liga ID ${lid} desde 12/04 hasta hoy...`);
        try {
            // Note: In reality API-football 2024 represents the 24/25 season for Europe, 
            // but for Argentina 2024 is the 2024 calendar season. Let's try 2024 first.
            // A better query is just checking the latest matches or specific dates.
            // But API-Football requires season for from/to ranges, wait no it doesn't always, but better to provide.
            // Actually querying by `date` is easy. Or `league=ID&season=2024`. Or just querying by `date=YYYY-MM-DD`.
            
            // We'll search backwards for dates from 2026-04-12 to 2026-04-18
            const dates = ['2026-04-12', '2026-04-13', '2026-04-14', '2026-04-15', '2026-04-16', '2026-04-17', '2026-04-18'];

            for (const d of dates) {
                const response = await axios.get(`https://v3.football.api-sports.io/fixtures?league=${lid}&date=${d}&timezone=America/Argentina/Buenos_Aires`, {
                    headers: { "x-rapidapi-host": "v3.football.api-sports.io", "x-rapidapi-key": apiKey }
                });

                const fixtures = response.data.response;
                if (!fixtures) continue;

                for (const f of fixtures) {
                    const status = f.fixture.status.short;
                    if (['FT', 'AET', 'PEN'].includes(status)) {
                        const fid = f.fixture.id.toString();
                        if (processed[fid]) continue;

                        const homeId = f.teams.home.id;
                        const awayId = f.teams.away.id;

                        const localA = mapped[homeId];
                        const localB = mapped[awayId];

                        if (localA && localB && localA.file_id && localB.file_id) {
                            // Definir resultado
                            let gh = f.goals.home;
                            let ga = f.goals.away;
                            
                            // Si hubieron penales, usamos el de penales (o no, en H2H global usualmente cuentan los 90/120 min)
                            // Generalmente en el fútbol, si van a penales, estadísticamente es un Empate.
                            // Pero verifiquemos si el user prefiere penales. Asumamos 90/120min:
                            let wA = 0, dA = 0, lA = 0;
                            let wB = 0, dB = 0, lB = 0;

                            if (status === 'PEN') {
                                // Es un empate oficial para estadísticas FIFA
                                dA = 1; dB = 1;
                            } else {
                                if (gh > ga) { wA=1; lB=1; }
                                else if (gh < ga) { lA=1; wB=1; }
                                else { dA=1; dB=1; }
                            }

                            console.log(`+ Procesando [${d}]: ${localA.file_id} ${gh}-${ga} ${localB.file_id}`);
                            updateTeam(localA.country_file, localA.file_id, localB.file_id, wA, dA, lA);
                            updateTeam(localB.country_file, localB.file_id, localA.file_id, wB, dB, lB);
                            
                            processed[fid] = { date: d, match: `${localA.file_id} vs ${localB.file_id}` };
                        }
                    }
                }
            }
        } catch (e) {
            console.log(`Error con liga ${lid}:`, e.message);
        }
    }
    
    fs.writeFileSync(processedPath, JSON.stringify(processed, null, 2));
    console.log("¡Actualización terminada! Partidos nuevos guardados.");
}
run();
