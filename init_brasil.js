const fs = require('fs');
const path = require('path');

const clubs = [
  'athletico-paranaense', 'atletico-mineiro', 'bahia', 'botafogo', 'chapecoense',
  'corinthians', 'coritiba', 'cruzeiro', 'flamengo', 'fluminense',
  'gremio', 'internacional', 'mirassol', 'palmeiras', 'red-bull-bragantino',
  'remo', 'santos', 'sao-paulo', 'vasco-da-gama', 'vitoria'
];

const dataPath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil');
const publicPath = path.join(__dirname, 'app', 'public', 'escudos', 'brasil');

// Crear carpetas
if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath, { recursive: true });
if (!fs.existsSync(publicPath)) fs.mkdirSync(publicPath, { recursive: true });

// Generar esqueletos JSON y carpetas de escudos
clubs.forEach(id => {
  const file = path.join(dataPath, `${id}.json`);
  const escudoDir = path.join(publicPath, id);
  
  if (!fs.existsSync(escudoDir)) fs.mkdirSync(escudoDir, { recursive: true });

  if (!fs.existsSync(file)) {
    const skeleton = {
      id: id,
      datos: {
        nombre_oficial: "",
        nombre_corto: "",
        sigla: "",
        fundacion: "",
        apodo: "",
        socios: 0,
        descripcion_corta: "",
        paleta: [],
        records: {},
        estadios: [],
        escudo_actual: `/escudos/brasil/${id}/logo.png`
      },
      historia: [],
      titulos: [],
      equipacion: [],
      idolos: [],
      goleadores_historicos: [],
      presencias_historicas: [],
      origen_apodos: [],
      evolucion_escudos: []
    };
    fs.writeFileSync(file, JSON.stringify(skeleton, null, 2), 'utf8');
  }
});

console.log("¡Cimientos de la Liga Brasileña creados con éxito (JSONs y carpetas de escudos)!");
