const fs = require('fs');
const path = require('path');

const dataDir = './app/src/data/clubes/argentina';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

// Diccionario de máxima precisión para estadios históricos icónicos o muy antiguos
const dic = {
  "El Viejo Gasómetro": { lat: -34.6247, lng: -58.4114, direccion: "Av. La Plata 1700, Boedo, CABA" },
  "Avenida Alvear y Tagle": { lat: -34.5815, lng: -58.3972, direccion: "Av. Alvear (hoy Libertador) y Tagle, Recoleta" },
  "Dársena Sur": { lat: -34.6288, lng: -58.3582, direccion: "Dársena Sur, Isla Demarchi, La Boca" },
  "Estadio de Aristóbulo del Valle y Caboto": { lat: -34.6331, lng: -58.3610, direccion: "Aristóbulo del Valle y Caboto, La Boca" },
  "Estadio de La Crucecita": { lat: -34.6644, lng: -58.3524, direccion: "Avenida Mitre y Lacarra, Crucecita, Avellaneda" },
  "Manuela Pedraza y Crámer": { lat: -34.5458, lng: -58.4683, direccion: "Manuela Pedraza y Crámer, Núñez" },
  "Estadio de Villa Luro": { lat: -34.6358, lng: -58.5028, direccion: "Basualdo y Guardia Nacional, Villa Luro, CABA" },
  "Potreros del Ferrocarril Sud": { lat: -34.6700, lng: -58.3680, direccion: "Terrenos del ex-Ferrocarril, Avellaneda" },
  "Estadio de Alsina y Colón": { lat: -34.6672, lng: -58.3683, direccion: "Alsina y Colón, Avellaneda" },
  "Estudiantes - Viejo 1 y 57": { lat: -34.9113, lng: -57.9366, direccion: "Avenida 1 y Calle 57, La Plata" }
};

let actualizados = 0;

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const club = JSON.parse(raw);
  
  let modificado = false;

  if (club.canchas && Array.isArray(club.canchas)) {
    club.canchas.forEach(c => {
      // Si a la cancha le falta latitud o longitud
      if (!c.lat || !c.lng) {
        modificado = true;
        actualizados++;
        
        // Asignar desde diccionario si existe
        if (dic[c.nombre]) {
          c.lat = dic[c.nombre].lat;
          c.lng = dic[c.nombre].lng;
          if (!c.direccion) c.direccion = dic[c.nombre].direccion;
        } else {
          // Si no, caer en el fallback del estadio actual o aproximación a la ciudad
          c.lat = club.datos.estadio_lat;
          c.lng = club.datos.estadio_lng;
          
          if (!c.direccion) {
            if (c.barrio && c.ciudad) {
               c.direccion = c.barrio + ", " + c.ciudad;
            } else if (c.barrio) {
               c.direccion = c.barrio;
            } else if (c.ciudad) {
               c.direccion = c.ciudad;
            } else {
               c.direccion = "Ubicación histórica en " + club.datos.estadio_direccion;
            }
          }
        }
      }
    });
  }

  if (modificado) {
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2));
  }
});

console.log('Proceso finalizado. Estadios completados con GPS y Dirección: ' + actualizados);
