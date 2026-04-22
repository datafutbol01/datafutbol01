const fs = require('fs');
const path = require('path');

const clubs = ['sevilla', 'valencia', 'villarreal'];
const jsonDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania';
const publicDir = 'c:/Users/gonza/futbolhistoria/clubes/app/public/escudos_historicos';

clubs.forEach(club => {
    const jsonPath = path.join(jsonDir, club + '.json');
    if (!fs.existsSync(jsonPath)) return;
    
    const clubData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    
    // Obtenemos el escudo 'Actualidad' que ya estaba guardado para re-agregarlo al final
    const escActual = clubData.evolucion_escudos ? clubData.evolucion_escudos.find(e => e.ano === 'Actualidad') : null;
    
    const imageFiles = fs.readdirSync(path.join(publicDir, club));
    
    let newEvolucion = [];
    
    imageFiles.forEach(file => {
        let ano = "Histórico";
        // Buscamos 4 numeros seguidos de una s opcional (1950s) o -1 (1908-1)
        const match = file.match(/(\d{4}[sS]?(-\d)?)/);
        if (match) {
            ano = match[1].replace('-1', '').trim();
        }
        
        newEvolucion.push({
            ano: ano,
            url: `/escudos_historicos/${club}/${file}`,
            desc: "Escudo recuperado de archivo histórico."
        });
    });
    
    // Ordenamos muy burdamente por año
    newEvolucion.sort((a, b) => {
        if (a.ano === 'Histórico') return -1;
        if (b.ano === 'Histórico') return 1;
        return parseInt(a.ano) - parseInt(b.ano);
    });
    
    // Agregamos el actual al final
    if (escActual) {
        newEvolucion.push(escActual);
    } else {
        // Por las dudas si no estaba armamos uno por defecto
        newEvolucion.push({
            ano: "Actualidad",
            url: `/escudos/${club}.png`,
            desc: "Escudo actual."
        });
    }
    
    clubData.evolucion_escudos = newEvolucion;
    fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2), 'utf-8');
});

console.log('Escudos inyectados correctamente a Sevilla, Valencia y Villarreal.');
