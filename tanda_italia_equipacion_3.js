const fs = require('fs');

const dataMap = {
  'lazio.json': [
    {
      "desde": 1900,
      "hasta": null,
      "c1": "#7ec1e8",
      "c2": "#7ec1e8",
      "sh": "#ffffff",
      "me": "#7ec1e8",
      "tipo": "liso",
      "desc": "Con honorabilidades alusivas y olímpicas originales de Grecia como principal motivo del equipo atlético, su modelo fundacional consiste invariablemente a través de las décadas en un color cielo o celeste inquebrantable de base totalmente plana o lisa."
    }
  ],
  'lecce.json': [
    {
      "desde": 1908,
      "hasta": 1927,
      "c1": "#ffffff",
      "c2": "#000000",
      "sh": "#ffffff",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "A lo largo de sus registros más tempranos interregionales, la primera asociación deportiva de base apuliana compitió formalmente vistiendo de líneas blanquinegras o bianconeri a modo utilitario."
    },
    {
      "desde": 1927,
      "hasta": null,
      "c1": "#d1000b",
      "c2": "#ebbc00",
      "sh": "#001e4a",
      "me": "#d1000b",
      "tipo": "rayas-verticales",
      "desc": "Asumiendo e integrando las afiliaciones cromáticas cívicas correspondientes al estandarte oficial documentado regional la escuadra optó formalizando definitivamente franjas y rayas de forma siempre formales verticales incorporando el amarillo intenso oro y la franja roja o sangre."
    }
  ],
  'milan.json': [
    {
      "desde": 1899,
      "hasta": null,
      "c1": "#bd061e",
      "c2": "#000000",
      "sh": "#ffffff",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "Basado e instituido oficialmente bajo órdenes heráldicas británicas normadas y aprobadas en firmas desde su asamblea, utilizaron históricamente su atuendo rayado vertical liguero normado compuesto eternamente a base del rojo diablo y formales matices negros oscuros de modo continuo."
    }
  ],
  'napoli.json': [
    {
      "desde": 1926,
      "hasta": null,
      "c1": "#2c8ed9",
      "c2": "#2c8ed9",
      "sh": "#ffffff",
      "me": "#2c8ed9",
      "tipo": "liso",
      "desc": "Acatando las normativas geográficas formales por estatutos e instituyendo el azul de mar de las bahías golfos del sur del mediodía frente al golfo utilizaron logísticamente y sin variación camisas color azul llana plana celeste lisa general que determinaron sus apelativos azzurri."
    }
  ],
  'parma.json': [
    {
      "desde": 1913,
      "hasta": null,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "liso",
      "desc": "La institución crociata portó formaciones ligueras tradicionales que respetan formalmente en estatutos a la plana casaca lisa blanca, resaltando normativamente como decoración adjunta y permanente de estatus de identidad visual a la cruz ancha y distintiva color negro al frente o al pecho."
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
