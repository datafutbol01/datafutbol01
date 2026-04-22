const fs = require('fs');
const path = require('path');

const publicEscudosDir = path.join(__dirname, 'app', 'public', 'escudos');
const dataDir = path.join(__dirname, 'app', 'src', 'data', 'copas', 'champions');
const years = ['1994.json', '1995.json'];

// Load all shields
const allShieldsFiles = fs.readdirSync(publicEscudosDir).filter(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.svg'));
// create a base set for quick lookup
const shieldsSet = new Set(allShieldsFiles.map(f => {
    // strip extension
    return f.substring(0, f.lastIndexOf('.'));
}));

const missing = new Set();

for (const yearFile of years) {
    const filePath = path.join(dataDir, yearFile);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const participants = data.participants || [];
        for (const team of participants) {
            let hasShield = false;
            // 1. check if explicitly set in json and exists
            if (team.escudo) {
                const shieldName = team.escudo.split('/').pop();
                const shieldBase = shieldName.substring(0, shieldName.lastIndexOf('.'));
                if (shieldsSet.has(shieldBase)) {
                    hasShield = true;
                }
            } else {
                // 2. check string match for team.id in the shields logic
                if(shieldsSet.has(team.id)) {
                    hasShield = true;
                }
            }

            if (!hasShield) {
                missing.add(team.id + ` (${team.name} - ${yearFile})`);
            }
        }
    }
}

console.log("Escudos faltantes para Champions 1994 y 1995:");
if (missing.size === 0) {
    console.log("¡No falta ninguno! Todos tienen su escudo en public/escudos.");
} else {
    Array.from(missing).forEach(m => console.log("- " + m));
}
