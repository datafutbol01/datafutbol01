import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runBatch() {
    const mainTeam = "Club Estudiantes de La Plata";
    
    // Equipos a evaluar (se excluyen ya hechos: Boca, River, Independiente, Racing, Argentinos, Riestra, Barracas, y San Lorenzo)
    const rivals = [
        "Club Atlético Aldosivi",
        "Club Atlético Banfield",
        "Club Atlético Belgrano",
        "Club Atlético Central Córdoba (SdE)",
        "Club Social y Deportivo Defensa y Justicia",
        "Club de Gimnasia y Esgrima La Plata",
        "Club Atlético Gimnasia y Esgrima (Mendoza)",
        "Club Atlético Huracán",
        "Club Sportivo Independiente Rivadavia",
        "Instituto Atlético Central Córdoba",
        "Club Atlético Lanús",
        "Club Atlético Newell's Old Boys",
        "Club Atlético Platense",
        "Club Atlético Sarmiento",
        "Club Atlético Talleres",
        "Club Atlético Tigre",
        "Club Atlético Tucumán",
        "Club Atlético Unión",
        "Club Atlético Vélez Sarsfield"
    ];

    console.log(`🚀 Iniciando Bot Masivo para: ${mainTeam}`);
    console.log(`Se procesarán ${rivals.length} rivales (San Lorenzo y los Grandes ya excluidos de esta pasada porque ya sumaron contra el Pincha).\n`);

    const dbPath = 'src/data/ligas/argentina_enfrentamientos.json';
    let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        generationConfig: { responseMimeType: "application/json" }
    });

    for (let i = 0; i < rivals.length; i++) {
        const rival = rivals[i];
        console.log(`[${i+1}/${rivals.length}] Buscando: ${mainTeam} vs ${rival}...`);

        const prompt = `
Sos el mejor analista de estadísticas y revisionismo histórico del fútbol argentino.
Necesito que busques la suma total y exacta del HISTORIAL OFICIAL COMPLETO ABSOLUTO de todos los partidos que disputaron "${mainTeam}" y "${rival}".
Esta suma "Total Oficial" DEBE incluir obligatoriamente, sumar todas estas cosas y no dejar afuera a ninguna:
1. Todos los encuentros de la era profesional de liga.
2. Todos los encuentros de la Era Amateur (indispensable, las viejas bases de datos lo omiten).
3. Todas las Copas Nacionales históricas antiguas y también las modernas (Copa de la Liga, Copa Argentina) sin excepción.
4. Cualquier torneo de Ascenso (B Nacional, Primera Nacional, Viejos Nacionales del interior) si se cruzaron ahí.
5. Copas Internacionales si corresponde.
    
Devuelve EXCLUSIVAMENTE y SOLAMENTE código JSON puro estructurado así:
{
  "pj": <numero_total>,
  "victorias_a": <victorias_${mainTeam}>,
  "victorias_b": <victorias_${rival}>,
  "empates": <empates>
}
Verifica que victorias_a + victorias_b + empates sea igual a pj.
`;

        try {
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            
            let data;
            try {
                data = JSON.parse(responseText);
            } catch(e) {
                console.error(`⚠️ Error al parsear JSON con ${rival}.`);
                continue;
            }

            const idx = db.findIndex(item => 
                (item.equipo_a.includes(mainTeam) || item.equipo_b.includes(mainTeam)) &&
                (item.equipo_a.includes(rival) || item.equipo_b.includes(rival)) &&
                // Asegurarse estricta que Estudiantes no confunda equipos (ej. Racing vs Racing de CBA si hubiera)
                !(item.equipo_a.includes("Estudiantes (Río Cuarto)") || item.equipo_b.includes("Estudiantes (Río Cuarto)"))
            );

            if (idx !== -1) {
                db[idx].pj = data.pj;
                if (db[idx].equipo_a.includes(mainTeam)) {
                    db[idx].victorias_a = data.victorias_a || db[idx].victorias_a;
                    db[idx].pg_a = data.victorias_a || db[idx].pg_a;
                    db[idx].victorias_b = data.victorias_b || db[idx].victorias_b;
                    db[idx].pg_b = data.victorias_b || db[idx].pg_b;
                } else {
                    db[idx].victorias_a = data.victorias_b || db[idx].victorias_a;
                    db[idx].pg_a = data.victorias_b || db[idx].pg_a;
                    db[idx].victorias_b = data.victorias_a || db[idx].victorias_b;
                    db[idx].pg_b = data.victorias_a || db[idx].pg_b;
                }
                db[idx].empates = data.empates || db[idx].empates;
                db[idx].pe = data.empates || db[idx].pe;
                
                fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
                console.log(`✅ ¡Guardado en DB! PJ: ${data.pj} (${data.victorias_a}V - ${data.empates}E - ${data.victorias_b}V)`);
            } else {
                console.log(`⚠️ Cruce no encontrado en DB: ${rival}`);
            }

        } catch (error) {
            console.error(`❌ Error consultando ${rival}:`, error.message);
            if (error.message.toLowerCase().includes('quota') || error.message.includes('429')) {
                console.log('⏳ Límite de Cuota alcanzado. Descansando 65 segundos...');
                await delay(65000);
                i--; // reintenta
            }
        }

        if (i < rivals.length - 1) {
            await delay(8000);
        }
    }

    console.log("🎉 ¡Proceso Completado para Estudiantes de La Plata!");
}

runBatch();
