const fs = require('fs');
const path = require('path');

const clubsDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia';
const ligasDir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas';

if (!fs.existsSync(clubsDir)) fs.mkdirSync(clubsDir, { recursive: true });
if (!fs.existsSync(ligasDir)) fs.mkdirSync(ligasDir, { recursive: true });

const skeleton = (id) => ({
  id,
  meta: { etiquetas: ["escocia", "scottish premiership"] },
  datos: {
    nombre_completo: "",
    sigla: "",
    fundacion: "",
    apodo: "",
    estadio_actual: "",
    estadio_apodo: "",
    estadio_capacidad: 0,
    estadio_inauguracion: "",
    estadio_lat: 0,
    estadio_lng: 0,
    estadio_direccion: "",
    socios: 0,
    descripcion_corta: "",
    paleta: [
      { tag: "Color 1", hex: "#000000" },
      { tag: "Color 2", hex: "#ffffff" }
    ],
    records: {
      mayor_goleada: "",
      maximo_goleador: "",
      mas_presencias: ""
    }
  },
  historia: [],
  canchas: [],
  equipacion: [],
  idolos: [],
  goleadores_historicos: [],
  presencias_historicas: [],
  titulos: [],
  evolucion_escudos: [],
  origen_apodos: []
});

const clubs = [
  'aberdeen', 'celtic', 'dundee', 'dundee-united', 'falkirk', 
  'hearts', 'hibernian', 'kilmarnock', 'livingston', 
  'motherwell', 'rangers', 'st-mirren'
];

clubs.forEach(id => {
  fs.writeFileSync(path.join(clubsDir, `${id}.json`), JSON.stringify(skeleton(id), null, 2));
});

// Create empty arrays for championships and history
fs.writeFileSync(path.join(ligasDir, 'escocia_temporadas.json'), '[]');
fs.writeFileSync(path.join(ligasDir, 'escocia_enfrentamientos.json'), '[]');

console.log('Escocia skeleton created.');
