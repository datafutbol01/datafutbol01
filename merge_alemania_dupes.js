const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const pairs = [
    { target: 'koln', obsolete: 'fc-koln' },
    { target: 'freiburg', obsolete: 'sc-freiburg' },
    { target: 'st-pauli', obsolete: 'fc-st-pauli' }
];

for (const pair of pairs) {
    const targetPath = path.join(dir, `${pair.target}.json`);
    const obsoletePath = path.join(dir, `${pair.obsolete}.json`);
    
    if (fs.existsSync(targetPath) && fs.existsSync(obsoletePath)) {
        // Read both
        const targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8')); // currently has shields only
        const obsoleteData = JSON.parse(fs.readFileSync(obsoletePath, 'utf8')); // currently has all legends, historia, etc
        
        // Merge shields into the rich data
        obsoleteData.datos.escudo_actual = targetData.datos.escudo_actual;
        obsoleteData.evolucion_escudos = targetData.evolucion_escudos;
        obsoleteData.id = pair.target;
        obsoleteData.meta = obsoleteData.meta || {};
        obsoleteData.meta.slug = pair.target;
        
        // Save the merged data to the target path
        fs.writeFileSync(targetPath, JSON.stringify(obsoleteData, null, 2), 'utf8');
        
        // Delete the obsolete file
        fs.unlinkSync(obsoletePath);
        console.log(`Merged ${pair.obsolete} into ${pair.target} and deleted ${pair.obsolete}.json`);
    } else {
        console.log(`Could not find both paths for ${pair.target}`);
    }
}
