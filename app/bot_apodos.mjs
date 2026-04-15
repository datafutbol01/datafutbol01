import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generarApodos() {
    const dataDir = path.join(process.cwd(), 'src/data/clubes/argentina');
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

    console.log(`🚀 Iniciando Bot Periodista: Redacción de Origen de Apodos para ${files.length} clubes.\n`);

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        generationConfig: { responseMimeType: "application/json" }
    });

    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(dataDir, files[i]);
        let db = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Saltar Racing que ya está perfecto, o si ya se generó antes
        if (db.id === "racing-club" || db.origen_apodos) {
            console.log(`[${i+1}/${files.length}] ⏭️ Saltando ${db.id} (Ya tiene origen_apodos).`);
            continue;
        }

        const clubName = db.datos?.nombre_completo || db.datos?.nombre_corto || db.id;
        const apodosConocidos = db.datos?.apodo || "los apodos más populares de su historia";

        console.log(`[${i+1}/${files.length}] ✍️ Escribiendo crónicas para: ${clubName}...`);

        const prompt = `
Sos el mejor analista de revisionismo histórico del fútbol argentino.
Necesito que redactes las crónicas rigurosas del origen de los apodos del club de fútbol argentino "${clubName}".
Sus apodos populares suelen ser: "${apodosConocidos}". (Si el club tiene otros muy históricos y esenciales, inclúyelos).

Para CADA apodo, escribe un texto tipo "informe periodístico enciclopédico, directo y riguroso". 
Ese texto debe incluir: año o década exacta de origen, contexto sociocultural, qué periodista, hincha o medio lo inventó (si se sabe) y el motivo real sin adornos ficticios.
PROHIBIDO usar lenguaje poético o romántico. Lenguaje directo.

Devuelve EXCLUSIVAMENTE un ARRAY de formato JSON puro con esta estructura estricta:
[
  {
    "apodo": "Ej: El Xeneize",
    "origen": "El apodo surgió a principios del siglo XX por la ola de inmigrantes genoveses..."
  }
]
`;

        try {
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            
            let data;
            try {
                data = JSON.parse(responseText);
            } catch(e) {
                console.error(`⚠️ Error al parsear JSON con ${clubName}.`);
                continue;
            }

            if (Array.isArray(data) && data.length > 0) {
                // Inyectar en el JSON antes del array "historia"
                // En Javascript, los objetos conservan orden de escritura sólo si los recreamos, pero no importa tanto, 
                // con agregarlo alcanza. 
                const newDb = { ...db, origen_apodos: data };
                
                // Reordenar un poquito para quede estético si queremos, pero basta con asignarlo.
                fs.writeFileSync(filePath, JSON.stringify(newDb, null, 2));
                console.log(`✅ ¡Guardados ${data.length} crónicas de apodos para ${clubName}!`);
            } else {
                console.log(`⚠️ Array vacío devuelto por Gemini para ${clubName}`);
            }

        } catch (error) {
            console.error(`❌ Error consultando ${clubName}:`, error.message);
            if (error.message.toLowerCase().includes('quota') || error.message.includes('429')) {
                console.log('⏳ Límite de Cuota alcanzado. Descansando 65 segundos...');
                await delay(65000);
                i--; // reintenta
            }
        }

        // Descanso entre clubes para evitar quemar límites (8s normal)
        if (i < files.length - 1) {
            await delay(8000);
        }
    }

    console.log("🎉 ¡Proceso de Apodos Completado!");
}

generarApodos();
