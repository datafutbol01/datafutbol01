const fs = require('fs');
const path = require('path');
const pubDir = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos';

['rangers', 'aik', 'norma_tallinn'].forEach(team => {
    const oldPath = path.join(pubDir, team + '.svg');
    const newPath = path.join(pubDir, team + '.png');
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
    }
});
console.log("Renamed explicitly back to png so CupsHub can find them.");
