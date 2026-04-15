const fs = require('fs');
const path = require('path');

const mapCoords = {
    "Rosenaustadion": { lat: 48.3582, lng: 10.8752 },
    "Ulrich-Haberland-Stadion": { lat: 51.0383, lng: 7.0022 },
    "Olympiastadion": { lat: 48.1730, lng: 11.5466 },
    "Grünwalder Stadion": { lat: 48.1109, lng: 11.5744 },
    "Stadion Rote Erde": { lat: 51.4925, lng: 7.4544 },
    "Bökelbergstadion": { lat: 51.2057, lng: 6.4311 },
    "Riederwaldstadion": { lat: 50.1283, lng: 8.7303 },
    "Dreisamstadion / Schwarzwald-Stadion": { lat: 47.9888, lng: 7.8931 },
    "Sportplatz am Rothenbaum": { lat: 53.5683, lng: 9.9880 },
    "Albstadion": { lat: 48.6685, lng: 10.1394 },
    "Dietmar-Hopp-Stadion": { lat: 49.2638, lng: 8.8772 },
    "Radrennbahn Müngersdorf": { lat: 50.9335, lng: 6.8749 },
    "Stadion am Bruchweg": { lat: 49.9997, lng: 8.2435 },
    "Stadion am Bad (Markranstädt)": { lat: 51.3094, lng: 12.2155 },
    "Sportplatz an der Sternschanze": { lat: 53.5641, lng: 9.9680 },
    "Friedrich-Ludwig-Jahn-Sportpark": { lat: 52.5435, lng: 13.4042 },
    "Neckarstadion (Diseño Clásico)": { lat: 48.7922, lng: 9.2320 },
    "Campo deportivo Krähenberg / Kälberwerder": { lat: 53.0764, lng: 8.8300 },
    "VfL-Stadion am Elsterweg": { lat: 52.4285, lng: 10.8048 }
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');
const files = fs.readdirSync(dir);

for (const file of files) {
    if (file.endsWith('.json')) {
        const filePath = path.join(dir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        if (data.canchas && Array.isArray(data.canchas)) {
            // Index 0: usar datos maestro si existen
            if (data.datos && data.datos.estadio_lat && data.datos.estadio_lng) {
                data.canchas[0].lat = parseFloat(data.datos.estadio_lat);
                data.canchas[0].lng = parseFloat(data.datos.estadio_lng);
            }
            
            // Indice > 0: usar el diccionario
            for (let i = 1; i < data.canchas.length; i++) {
                const cancha = data.canchas[i];
                if (mapCoords[cancha.nombre]) {
                    cancha.lat = mapCoords[cancha.nombre].lat;
                    cancha.lng = mapCoords[cancha.nombre].lng;
                } else {
                    // fall back a la actual
                    cancha.lat = data.canchas[0].lat;
                    cancha.lng = data.canchas[0].lng;
                }
            }
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[OK] Coordenadas mapeadas para ${file}`);
    }
}
console.log('Finalizado: Todos las canchas tienen lat y lng para renderizar sus mapas');
