const fs = require('fs');

const dataMap = {
  'atalanta.json': [
    {
      "desde": 1907,
      "hasta": 1920,
      "c1": "#ffffff",
      "c2": "#000000",
      "sh": "#000000",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "En sus años fundacionales tras su creación en 1907, la escuadra portó camisetas con finas rayas verticales en colores blanco y negro."
    },
    {
      "desde": 1920,
      "hasta": null,
      "c1": "#1a428a",
      "c2": "#000000",
      "sh": "#000000",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "Tras la fusión administrativa con la sociedad Bergamasca, el club adoptó permanentemente el patrón de franjas verticales uniendo el azul y el negro."
    }
  ],
  'bologna.json': [
    {
      "desde": 1909,
      "hasta": null,
      "c1": "#00163b",
      "c2": "#9e0014",
      "sh": "#ffffff",
      "me": "#00163b",
      "tipo": "rayas-verticales",
      "desc": "A lo largo de toda su historia documentada, el equipo emiliano ha competido portando líneas y rayas verticales azules y rojas emulando modelos formales originados de regiones británicas en las etapas fundacionales."
    }
  ],
  'cagliari.json': [
    {
      "desde": 1920,
      "hasta": null,
      "c1": "#001133",
      "c2": "#ab0c21",
      "sh": "#001133",
      "me": "#001133",
      "tipo": "mitades",
      "desc": "Inspirados en los estandartes heráldicos clásicos de la ciudad de Cerdeña y sus regiones locales, su fisonomía oficial es y ha consistido históricamente en mitades verticales divididas al centro entre el azul oscuro y el rojo carmesí."
    }
  ],
  'como.json': [
    {
      "desde": 1907,
      "hasta": null,
      "c1": "#005bb5",
      "c2": "#005bb5",
      "sh": "#ffffff",
      "me": "#005bb5",
      "tipo": "liso",
      "desc": "Respetando su fuerte afiliación histórica lariense, el cuadro porta de forma llana, uniforme y lisa el color azul (Azzurro) derivado visual de los tonos cromáticos y acuáticos de su lago limítrofe."
    }
  ],
  'cremonese.json': [
    {
      "desde": 1903,
      "hasta": 1914,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#000000",
      "me": "#000000",
      "tipo": "liso",
      "desc": "La institución inició sus registros asimilando un color blanco formal en sus camisas primarias durante los primeros torneos previos a la Gran Guerra europea."
    },
    {
      "desde": 1914,
      "hasta": null,
      "c1": "#a1a1a1",
      "c2": "#c20e1a",
      "sh": "#a1a1a1",
      "me": "#111111",
      "tipo": "rayas-verticales",
      "desc": "Integraron la inusual combinación grigiorossa en el ámbito italiano, implementando un diseño dominado por rayas y líneas verticales que intercalan y dividen los colores gris ceniza y rojo vivo en su pechera oficial permanentemente."
    }
  ]
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.equipacion = dataMap[filename];
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Equipacion procesada para ${filename}`);
});
