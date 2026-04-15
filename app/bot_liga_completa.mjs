import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runMassiveBatch() {
    console.log("🚀 Iniciando Bot Maestro de Liga Completa...");

    const dbPath = 'src/data/ligas/argentina_enfrentamientos.json';
    let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // Equipos ya blindados (se skipean si están en A o B)
    const completedTeams = [
        "Boca Juniors",
        "River Plate",
        "Racing Club",
        "Club Atlético Independiente",
        "Asociación Atlética Argentinos Juniors",
        "Barracas Central",
        "Deportivo Riestra",
        "Club Deportivo Riestra"
    ];

    const isExcluded = (teamStr) => completedTeams.some(e => teamStr.includes(e));

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        generationConfig: { responseMimeType: "application/json" }
    });

    // Identificar cruces a actualizar
    let targets = [];
    for (let i = 0; i < db.length; i++) {
        if (!isExcluded(db[i].equipo_a) && !isExcluded(db[i].equipo_b)) {
            targets.push({ idx: i, match: db[i] });
        }
    }

    console.log(`📡 Se han detectado ${targets.length} cruces no validados aún.`);

    for (let i = 0; i < targets.length; i++) {
        const { idx, match } = targets[i];
        const teamA = match.equipo_a;
        const teamB = match.equipo_b;
        
        console.log(`[${i+1}/${targets.length}] Buscando: ${teamA} vs ${teamB}...`);

        const prompt = `
Sos el mejor analista de estadísticas y revisionismo histórico del fútbol argentino.
Necesito que busques la suma total y exacta del HISTORIAL OFICIAL COMPLETO ABSOLUTO de todos los partidos que disputaron "${teamA}" y "${teamB}".
Esta suma "Total Oficial" DEBE INCLUIR OBLIGATORIAMENTE todas estas cosas y no dejar afuera a ninguna:
1. Era Profesional de Liga.
2. Era Amateur (indispensable, esto lo suelen omitir).
3. Todas las Copas Nacionales históricas y modernas sin excepción.
4. Cualquier torneo de Ascenso (B Nacional, Primera Nacional, Viejos Nacionales del interior) si se cruzaron ahí.
5. Copas Internacionales si corresponde.
    
Devuelve EXCLUSIVAMENTE y SOLAMENTE código JSON puro estructurado así:
{
  "pj": <numero_total>,
  "victorias_a": <victorias_${teamA}>,
  "victorias_b": <victorias_${teamB}>,
  "empates": <empates>
}
Revisión Lógica Estricta: Asegurate de que matemáticamente (victorias_a + victorias_b + empates) sume exactamente "pj". Si no suma, revisa de nuevo antes de responder.
`;

        try {
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            
            let data;
            try {
                data = JSON.parse(responseText);
            } catch(e) {
                console.error(`⚠️ Error al parsear JSON:`, responseText);
                continue;
            }

            // Inyección de Datos
            db[idx].pj = parseInt(data.pj) || 0;
            db[idx].victorias_a = parseInt(data.victorias_a) || 0;
            db[idx].pg_a = parseInt(data.victorias_a) || 0;
            db[idx].victorias_b = parseInt(data.victorias_b) || 0;
            db[idx].pg_b = parseInt(data.victorias_b) || 0;
            db[idx].empates = parseInt(data.empates) || 0;
            db[idx].pe = parseInt(data.empates) || 0;
            
            // Verificación matemática
            if (db[idx].victorias_a + db[idx].victorias_b + db[idx].empates !== db[idx].pj) {
                console.log(`❌ Advertencia matemática en [${teamA} vs ${teamB}]: V${db[idx].victorias_a} + V${db[idx].victorias_b} + E${db[idx].empates} != PJ${db[idx].pj}.`);
            } else {
                console.log(`✅ ¡Éxito! PJ: ${db[idx].pj} (${db[idx].victorias_a}V - ${db[idx].empates}E - ${db[idx].victorias_b}V)`);
            }

            // Cada 5 registros exitosos guardamos el JSON por si hay corte de luz
            if (i % 5 === 0) {
                fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
            }

            // Esperar para no saturar Free Rate (aprox 4.5s recom, subido a 6 para cuidar el límite a largo plazo)
            await delay(6000);

        } catch (error) {
            console.error(`❌ Error de API:`, error.message);
            // Si nos pasamos de la cuota, pausamos 65 segundos y reintentamos
            if (error.message.toLowerCase().includes('quota') || error.message.includes('429')) {
                console.log('⏳ Límite de Cuota alcanzado. Descansando 65 segundos para enfriar...');
                await delay(65000);
                i--; // Retrocedemos el contador para volver a intentar este mismo partido
            } else {
                // Otro error raro (servidor caido, timeout etc)
                await delay(10000);
            }
        }
    }

    // Guardado final absoluto
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    console.log("🎉 ¡PROCESO DE TODA LA LIGA COMPLETADO! TODOS LOS HISTORIALES ESTANDARIZADOS.");
}

runMassiveBatch();
