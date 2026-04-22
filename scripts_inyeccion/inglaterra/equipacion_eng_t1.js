const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const data = {
  "arsenal": [
    {
      "desde": 1886,
      "hasta": 1933,
      "c1": "#8B0000",
      "c2": "#8B0000",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Primera equipación de Woolwich Arsenal. Camisetas íntegramente de color rojo oscuro."
    },
    {
      "desde": 1933,
      "hasta": null,
      "c1": "#EF0107",
      "c2": "#ffffff",
      "sh": "#ffffff",
      "me": "#EF0107",
      "tipo": "liso",
      "desc": "Herbert Chapman introduce la clásica camiseta roja brillante con mangas blancas."
    }
  ],
  "chelsea": [
    {
      "desde": 1905,
      "hasta": 1912,
      "c1": "#96C8A2",
      "c2": "#96C8A2",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Durante sus primeros años vistieron color azul muy claro (Eton Blue)."
    },
    {
      "desde": 1912,
      "hasta": 1964,
      "c1": "#034694",
      "c2": "#034694",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Cambio al tradicional color azul real en sus camisetas."
    },
    {
      "desde": 1964,
      "hasta": null,
      "c1": "#034694",
      "c2": "#034694",
      "sh": "#034694",
      "me": "#ffffff",
      "tipo": "liso",
      "desc": "Tommy Docherty introduce short azul para tener un uniforme casi enteramente de ese tono."
    }
  ],
  "liverpool": [
    {
      "desde": 1892,
      "hasta": 1896,
      "c1": "#000080",
      "c2": "#ffffff",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "mitad-vertical",
      "desc": "El club comenzó jugando en Anfield con camisetas a cuartos azul y blanca heredadas del Everton."
    },
    {
      "desde": 1896,
      "hasta": 1964,
      "c1": "#C8102E",
      "c2": "#C8102E",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Se abandona el azul y blanco y se adopta la histórica camiseta roja lisa."
    },
    {
      "desde": 1964,
      "hasta": null,
      "c1": "#C8102E",
      "c2": "#C8102E",
      "sh": "#C8102E",
      "me": "#C8102E",
      "tipo": "liso",
      "desc": "Bill Shankly incorpora el pantalón y medias rojas forjando la histórica y temida vestimenta 'Todo Rojo'."
    }
  ],
  "manchester-city": [
    {
      "desde": 1880,
      "hasta": 1884,
      "c1": "#111111",
      "c2": "#111111",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Bajo el nombre de St. Mark's su primer uniforme registrado era camisa negra con cruz blanca."
    },
    {
      "desde": 1894,
      "hasta": null,
      "c1": "#6CABDD",
      "c2": "#6CABDD",
      "sh": "#ffffff",
      "me": "#6CABDD",
      "tipo": "liso",
      "desc": "Al refundarse como Manchester City, el club asume sus definitivos colores celestes lisos."
    }
  ],
  "manchester-united": [
    {
      "desde": 1878,
      "hasta": 1892,
      "c1": "#FBE122",
      "c2": "#006A4E",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "mitad-vertical",
      "desc": "Los orígenes fundacionales industriales de Newton Heath fueron bajo diseño de mitades verde y amarilla."
    },
    {
      "desde": 1902,
      "hasta": null,
      "c1": "#DA291C",
      "c2": "#DA291C",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Al refundarse asumiendo el nombre de Manchester United, se oficializa la camiseta roja sólida clásica."
    }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    fileData.equipacion = data[club];
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated equipacion for ${club}`);
  }
}
