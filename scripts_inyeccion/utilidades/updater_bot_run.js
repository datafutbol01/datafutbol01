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

const LEAGUES = [135, 78, 61, 179, 268, 71]; // Italia, Alemania, Francia, Escocia, Uruguay, Brasil

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
                            // Al actualizar, también inyectar la huella temporal en el propio club
                            const nowStr = new Date().toISOString();
                            data.ultima_actualizacion = nowStr;
                            
                            fs.writeFileSync(p, JSON.stringify(data, null, 2));
                            return nowStr;
}

async function run() {
    console.log("Iniciando Modo Actualización...");
    const masterLogPath = path.join(__dirname, 'sync_log.json');
    let masterLog = {};
    if (fs.existsSync(masterLogPath)) {
        masterLog = JSON.parse(fs.readFileSync(masterLogPath, 'utf8'));
    }

    // Mega Catch-Up para Ligas Secundarias: del 11 de abril al 20 de abril
    const dates = [
        '2026-04-20', '2026-04-21', '2026-04-22'
    ];
    let lastStamp = null;

    for (const lid of LEAGUES) {
        console.log(`Buscando partidos para Liga ID ${lid} en fechas ${dates.join(', ')}...`);
        try {
            for (const d of dates) {
                const seasonObj = { 39: 2025, 140: 2025, 128: 2026, 71: 2026, 268: 2026 };
                const seasonStr = seasonObj[lid] || 2025; // Por si agregamos otras después
                const callUrl = `https://v3.football.api-sports.io/fixtures?league=${lid}&season=${seasonStr}&date=${d}&timezone=America/Argentina/Buenos_Aires`;
                
                const response = await axios.get(callUrl, {
                    headers: { "x-rapidapi-host": "v3.football.api-sports.io", "x-rapidapi-key": apiKey }
                });

                const extErrors = response.data.errors;
                if(extErrors && Object.keys(extErrors).length > 0) {
                    console.log(`[!] Error de API en liga ${lid} fecha ${d}: `, extErrors);
                    continue;
                }

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
                            let gh = f.goals.home;
                            let ga = f.goals.away;
                            
                            let wA = 0, dA = 0, lA = 0;
                            let wB = 0, dB = 0, lB = 0;

                            if (status === 'PEN') {
                                dA = 1; dB = 1;
                            } else {
                                if (gh > ga) { wA=1; lB=1; }
                                else if (gh < ga) { lA=1; wB=1; }
                                else { dA=1; dB=1; }
                            }

                            console.log(`+ Procesando [${d}]: ${localA.file_id} ${gh}-${ga} ${localB.file_id}`);
                            const stampA = updateTeam(localA.country_file, localA.file_id, localB.file_id, wA, dA, lA);
                            const stampB = updateTeam(localB.country_file, localB.file_id, localA.file_id, wB, dB, lB);
                            if (stampA) lastStamp = stampA;
                            
                            processed[fid] = { date: d, match: `${localA.file_id} vs ${localB.file_id}`, update_time: new Date().toISOString() };
                        }
                    }
                }
            }
            if (lastStamp) {
                masterLog[`liga_${lid}`] = `Última actualización: ${lastStamp}`;
            }
        } catch (e) {
            console.log(`Error con liga ${lid}:`, e.message);
        }
    }
    
    fs.writeFileSync(processedPath, JSON.stringify(processed, null, 2));
    fs.writeFileSync(masterLogPath, JSON.stringify(masterLog, null, 2));
    console.log("¡Actualización terminada! Partidos nuevos guardados. Logs registrados.");
}
run();
