const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');
const filesToFix = ['aston-villa.json', 'bournemouth.json', 'brentford.json', 'brighton.json'];

for (const file of filesToFix) {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (data.evolucion_escudos && Array.isArray(data.evolucion_escudos)) {
            // Check if the first element represents a more modern year than the last element
            // Example: 2024 is at index 0, 1878 is at the end.
            const firstAno = parseInt(data.evolucion_escudos[0].ano) || 9999;
            const lastAno = parseInt(data.evolucion_escudos[data.evolucion_escudos.length - 1].ano) || 0;
            
            if (firstAno > lastAno) {
                console.log(`Reversing evolucion_escudos array for ${file}`);
                data.evolucion_escudos.reverse();
                
                // Asegurar que el último escudo (el actual) apunte directo al de la app si no lo hace, 
                // pero si ya estaba configurado con un fallback de webp lo dejamos porque ya funciona.
                // Sin embargo el usuario prefería "el escudo actual". Así que forzamos la url al root si hace falta.
                // Lo dejamos intacto por diseño, solo lo ordenamos cronológicamente.
                
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
            } else {
                console.log(`${file} is already ordered properly.`);
            }
        }
    }
}
