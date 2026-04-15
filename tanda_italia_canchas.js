const fs = require('fs');

const clubs = [
  'atalanta.json', 'bologna.json', 'cagliari.json', 'como.json', 'cremonese.json',
  'fiorentina.json', 'genoa.json', 'hellas-verona.json', 'inter.json', 'juventus.json',
  'lazio.json', 'lecce.json', 'milan.json', 'napoli.json', 'parma.json',
  'pisa.json', 'roma.json', 'sassuolo.json', 'torino.json', 'udinese.json'
];

clubs.forEach(file => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + file;
  if (!fs.existsSync(filepath)) return;
  
  const content = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  const d = content.datos;
  
  // Create canchas array dynamically if it doesn't have it or rebuild it
  if (d && d.estadio_actual) {
    let desc = `Sede principal y hogar deportivo de la institución.`;
    if (d.estadio_apodo) {
      desc = `Estadio principal y del club, conocido coloquialmente bajo la denominación de ${d.estadio_apodo}.`;
    }

    content.canchas = [
      {
        nombre: d.estadio_actual,
        capacidad: d.estadio_capacidad ? d.estadio_capacidad.toLocaleString('es-ES') : "Desconocida",
        inauguracion: d.estadio_inauguracion || "Desconocida",
        url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.estadio_direccion)}`,
        direccion: d.estadio_direccion,
        descripcion: desc
      }
    ];
  }
  
  fs.writeFileSync(filepath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Cancha procesada para ${file}`);
});
