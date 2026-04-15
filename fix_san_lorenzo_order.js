const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina', 'san-lorenzo.json');

try {
    const clubData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    // Check if it's unordered
    if (clubData.evolucion_escudos && clubData.evolucion_escudos[0].ano !== 'Actualidad') {
        const current = clubData.evolucion_escudos.find(e => e.ano === 'Actualidad');
        const historicos = clubData.evolucion_escudos.filter(e => e.ano !== 'Actualidad');
        
        // Push current to index 0
        clubData.evolucion_escudos = [current, ...historicos];
        
        fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2));
        console.log('JSON fixed: Actualidad is now at index 0.');
    } else {
        console.log('JSON was already correct or missing data.');
    }
} catch (e) {
    console.error('Error fixing json:', e);
}
