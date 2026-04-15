import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import 'dotenv/config';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generationConfig: { responseMimeType: "application/json" }});
const prompt = `Sos el mejor analista. Suma exacta HISTORIAL OFICIAL COMPLETO ABSOLUTO "Racing Club" vs "Club Atlético Tucumán". Incluir amateurismo, copas, etc. Formato JSON: {"pj": 10, "victorias_a": 5, "victorias_b": 5, "empates": 0}`;
model.generateContent(prompt).then(res => {
    const d = JSON.parse(res.response.text());
    const f = 'src/data/ligas/argentina_enfrentamientos.json';
    let db = JSON.parse(fs.readFileSync(f, 'utf8'));
    const idx = db.findIndex(i => i.equipo_a.includes('Racing') && i.equipo_b.includes('Tucumán') || i.equipo_b.includes('Racing') && i.equipo_a.includes('Tucumán'));
    if(idx !== -1) {
        db[idx].pj = d.pj;
        if(db[idx].equipo_a.includes('Racing')) { db[idx].victorias_a = d.victorias_a; db[idx].pg_a = d.victorias_a; db[idx].victorias_b = d.victorias_b; db[idx].pg_b = d.victorias_b; } 
        else { db[idx].victorias_a = d.victorias_b; db[idx].pg_a = d.victorias_b; db[idx].victorias_b = d.victorias_a; db[idx].pg_b = d.victorias_a; }
        db[idx].empates = d.empates; db[idx].pe = d.empates;
        fs.writeFileSync(f, JSON.stringify(db, null, 2));
        console.log('TUCUMAN PATCHED: ' + d.pj);
    }
});
