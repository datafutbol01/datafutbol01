import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Variables de entorno o Secrets de GitHub
const API_KEY = process.env.API_FOOTBALL_KEY || process.env.VITE_API_FOOTBALL_KEY;
const WHATSAPP_PHONE = process.env.WHATSAPP_PHONE; // Ej: +5491123456789
const WHATSAPP_APIKEY = process.env.WHATSAPP_APIKEY;

const LIGAS_MAP = [
    { file: 'inglaterra', id: 39 },
    { file: 'espania', id: 140 },
    { file: 'italia', id: 135 },
    { file: 'argentina', id: 128 },
    { file: 'mex_liga_mx', id: 262 },
    { file: 'francia', id: 61 },
    { file: 'alemania', id: 78 },
    { file: 'paises_bajos', id: 88 },
    { file: 'por_primeira', id: 94 }
];

const normalizarNombre = (str) => {
    return str.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar tildes
        .replace(/[^a-z0-9]/g, '-'); // Reemplazar todo lo que no sea letra o numero por guion
};

const sendNotification = async (message) => {
    if (!WHATSAPP_PHONE || !WHATSAPP_APIKEY) return;
    try {
        const text = encodeURIComponent(message);
        const url = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${text}&apikey=${WHATSAPP_APIKEY}`;
        
        await fetch(url, { method: 'GET' });
        console.log('Notificación de WhatsApp enviada con éxito.');
    } catch (e) {
        console.error('Error enviando notificación de WhatsApp:', e.message);
    }
};

async function main() {
    if (!API_KEY) {
        console.error("No se encontró API_FOOTBALL_KEY. Abortando.");
        process.exit(1);
    }

    console.log("Iniciando Bot de Actualización H2H...");
    let report = "🤖 **Reporte Automático de Historiales (H2H)** 🤖\n\n";
    let totalUpdated = 0;

    // Calcular las fechas: desde hace 3 días hasta hoy
    const today = new Date();
    const past = new Date(today);
    past.setDate(past.getDate() - 3);

    const dateTo = today.toISOString().split('T')[0];
    const dateFrom = past.toISOString().split('T')[0];
    // NOTA: Para el 2026, si estamos en mayo, asumimos la temporada "2025" o "2026" dependiendo de la liga.
    // Usaremos el endpoint sin temporada y con from/to.

    for (const liga of LIGAS_MAP) {
        const filePath = path.join(__dirname, `../app/src/data/ligas/${liga.file}_enfrentamientos.json`);
        if (!fs.existsSync(filePath)) continue;

        let db = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        let dbUpdated = false;
        let ligaUpdatedCount = 0;

        try {
            console.log(`Pidiendo resultados para ${liga.file} (${dateFrom} al ${dateTo})...`);
            // Season param is sometimes mandatory. We will use the current year as a safe guess, or omit if possible.
            // API-Football requires season for fixtures?league=X. We will use 2026. If the league started in 2025, it's 2025.
            // Para simplificar, obtenemos la temporada actual de la liga desde el endpoint /leagues
            const url = `https://v3.football.api-sports.io/fixtures?league=${liga.id}&from=${dateFrom}&to=${dateTo}&season=2026`;
            
            const response = await fetch(url, {
                headers: {
                    'x-apisports-key': API_KEY
                }
            });
            const result = await response.json();

            // Fallback si la temporada 2026 está vacía (por ligas que cruzaron de 2025)
            let fixtures = result.response || [];
            if (fixtures.length === 0) {
                const urlFallback = `https://v3.football.api-sports.io/fixtures?league=${liga.id}&from=${dateFrom}&to=${dateTo}&season=2025`;
                const fallbackResp = await fetch(urlFallback, { headers: { 'x-apisports-key': API_KEY } });
                const fallbackResult = await fallbackResp.json();
                fixtures = fallbackResult.response || [];
            }

            const finishedMatches = fixtures.filter(f => f.fixture.status.short === 'FT' || f.fixture.status.short === 'AET' || f.fixture.status.short === 'PEN');

            for (const match of finishedMatches) {
                const homeName = normalizarNombre(match.teams.home.name);
                const awayName = normalizarNombre(match.teams.away.name);
                
                // Extraer el nombre principal (ej: "manchester united" -> "manchester") para matcheo difuso
                const homeKey = homeName.split('-')[0]; 
                const awayKey = awayName.split('-')[0];

                const entry = db.find(e => e.id && e.id.includes(homeKey) && e.id.includes(awayKey));

                if (entry) {
                    entry.pj = (entry.pj || 0) + 1;
                    
                    const homeGoals = match.goals.home;
                    const awayGoals = match.goals.away;
                    
                    if (homeGoals === awayGoals) {
                        entry.empates = (entry.empates || 0) + 1;
                        if (entry.pe !== undefined) entry.pe = (entry.pe || 0) + 1;
                    } else {
                        // Saber si el ganador es el A o el B en nuestra DB
                        // Chequeamos si la posicion del equipo local en nuestro ID coincide con el comienzo del ID
                        const isHomeA = entry.id.indexOf(homeKey) < entry.id.indexOf(awayKey);
                        const isHomeWinner = homeGoals > awayGoals;

                        if ((isHomeWinner && isHomeA) || (!isHomeWinner && !isHomeA)) {
                            entry.victorias_a = (entry.victorias_a || 0) + 1;
                            if (entry.pg_a !== undefined) entry.pg_a = (entry.pg_a || 0) + 1;
                        } else {
                            entry.victorias_b = (entry.victorias_b || 0) + 1;
                            if (entry.pg_b !== undefined) entry.pg_b = (entry.pg_b || 0) + 1;
                        }
                    }
                    dbUpdated = true;
                    ligaUpdatedCount++;
                    totalUpdated++;
                    console.log(`✅ ${liga.file}: Actualizado ${entry.id}`);
                }
            }

            if (dbUpdated) {
                fs.writeFileSync(filePath, JSON.stringify(db, null, 2), 'utf8');
                report += `✅ **${liga.file.toUpperCase()}**: Se actualizaron ${ligaUpdatedCount} historiales.\n`;
            }

        } catch (e) {
            console.error(`Error procesando liga ${liga.file}:`, e);
        }
    }

    if (totalUpdated > 0) {
        report += `\nTotal de partidos impactados en la base de datos: **${totalUpdated}**.\nLa PWA se ha re-compilado exitosamente con los nuevos datos.`;
        await sendNotification(report);
    } else {
        console.log("No hubieron partidos relevantes para actualizar en la base de datos.");
        await sendNotification("🤖 **Reporte H2H**: Script ejecutado sin novedades (No hubieron cruces clave entre grandes este fin de semana).");
    }

    console.log("Bot finalizado.");
}

main();
