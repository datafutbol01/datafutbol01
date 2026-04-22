const fs = require('fs');

const dataMap = {
  'pisa.json': [
    {
      "desde": 1909,
      "hasta": 1910,
      "c1": "#ffffff",
      "c2": "#db0011",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "mitades",
      "desc": "Al momento resolutivo de documentar conformación, el cuadro integró vestimentas lisas y listadas rojiblancas divididas respondiendo directamente al escudo representativo cívico municipal de bases rojas cruzado oficial."
    },
    {
      "desde": 1910,
      "hasta": null,
      "c1": "#122a61",
      "c2": "#000000",
      "sh": "#000000",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "Transicionando por aprobación de normativas en homenaje estatuarios, implementaron para sus afiliaciones históricas el sistema vertical listado de rayas dividiendo los tonos azules contra fúnebres matices oscuros negros formalizados formalmente."
    }
  ],
  'roma.json': [
    {
      "desde": 1927,
      "hasta": null,
      "c1": "#ab0a23",
      "c2": "#ab0a23",
      "sh": "#ffffff",
      "me": "#ab0a23",
      "tipo": "liso",
      "desc": "Mapeando sus vínculos históricos documentados e impulsados de conformadores iniciales imperiales, portaron invariablemente el rojo carmín liso o llanamente oscuro formal base con vivos amarillo oscuro resolventes de ribetes secundarios para uniformes plenos oficiales formales giallorossi itálico."
    }
  ],
  'sassuolo.json': [
    {
      "desde": 1920,
      "hasta": null,
      "c1": "#005e32",
      "c2": "#000000",
      "sh": "#000000",
      "me": "#005e32",
      "tipo": "rayas-verticales",
      "desc": "Integrando uniformes donados en etapas rudimentarias locales amateurs tempranamente instituyeron bases formales normativas visuales mediante franjenados a rayas verticales combinadoras distribuidas verdes puras esperanza vivas y alternancia en negro listados regulados base neroverdi formales históricos."
    }
  ],
  'torino.json': [
    {
      "desde": 1906,
      "hasta": null,
      "c1": "#870423",
      "c2": "#870423",
      "sh": "#ffffff",
      "me": "#870423",
      "tipo": "liso",
      "desc": "Basado y fundamentado logísticamente sobre las asambleas desprendidas de la original turinesa, y como estandarte a banderas suízas o duques históricos emplearon de forma perenne plana una camisa llanamente de textura base granate roja oscura o bordó."
    }
  ],
  'udinese.json': [
    {
      "desde": 1896,
      "hasta": null,
      "c1": "#ffffff",
      "c2": "#000000",
      "sh": "#000000",
      "me": "#ffffff",
      "tipo": "rayas-verticales",
      "desc": "Estipulando afiliaciones como los patriarcas del medio liguero base, regularizaron logísticamente y mantuvieron por reglamentaciones desde fundación el patrón rayado visual inconfundible franjeado por las mitades blancas cebra y franjas interlineales fúnebres negras."
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
