const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const estadiosPuros = {
    'defensor-sporting.json': {
        "nombre": "Parque Ricci",
        "apodo": "La Cancha del Cordón",
        "capacidad": 2000,
        "inauguracion": "1910s",
        "direccion": "Capitán Videla y Alarcón, Montevideo",
        "lat": -34.899451,
        "lng": -56.146608,
        "condicion": "historico"
    },
    'cerro.json': {
        "nombre": "Parque Santa Rosa",
        "apodo": "El Santa Rosa",
        "capacidad": 1500,
        "inauguracion": "1926",
        "direccion": "Santa Rosa y Bogotá, Villa del Cerro, Montevideo",
        "lat": -34.8872,
        "lng": -56.2514,
        "condicion": "historico"
    },
    'nacional.json': {
        "nombre": "Cancha de Punta de las Carretas",
        "apodo": "Punta de las Carretas",
        "capacidad": 1000,
        "inauguracion": "1899",
        "direccion": "Punta Carretas, Montevideo, Uruguay",
        "lat": -34.9213,
        "lng": -56.1601,
        "condicion": "historico"
    },
    'albion.json': {
        "nombre": "Cancha del Paso del Molino",
        "apodo": "Paso del Molino",
        "capacidad": 500,
        "inauguracion": "1891",
        "direccion": "Paso del Molino, Prado, Montevideo",
        "lat": -34.8624,
        "lng": -56.2163,
        "condicion": "historico"
    }
};

for (const [filename, estadioObj] of Object.entries(estadiosPuros)) {
    const p = path.join(dir, filename);
    if(fs.existsSync(p)) {
        let data = JSON.parse(fs.readFileSync(p, 'utf8'));
        if (data.datos && data.datos.estadios) {
            const exists = data.datos.estadios.some(e => e.nombre === estadioObj.nombre);
            if (!exists) {
                data.datos.estadios.unshift(estadioObj);
                fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
                console.log('Injected historic stadium into', filename);
            }
        }
    }
}
