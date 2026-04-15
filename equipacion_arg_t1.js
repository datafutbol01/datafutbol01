const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "boca-juniors": [
    {
      "desde": 1905,
      "hasta": 1905,
      "c1": "#ffffff",
      "c2": "#000000",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "rayas-verticales",
      "desc": "Primera camiseta oficial. Blanca con franjas verticales negras muy finas."
    },
    {
      "desde": 1905,
      "hasta": 1906,
      "c1": "#87CEEB",
      "c2": "#87CEEB",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Camiseta íntegramente de color celeste."
    },
    {
      "desde": 1906,
      "hasta": 1907,
      "c1": "#ffffff",
      "c2": "#000080",
      "sh": "#000080",
      "me": "#111111",
      "tipo": "rayas-verticales",
      "desc": "Camiseta blanca con finas rayas verticales azules."
    },
    {
      "desde": 1907,
      "hasta": 1913,
      "c1": "#004B87",
      "c2": "#FFB81C",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "banda-diagonal",
      "desc": "Adopción de los colores azul y amarillo, inspirados en un barco sueco. Diseño con banda diagonal."
    },
    {
      "desde": 1913,
      "hasta": null,
      "c1": "#003DA5",
      "c2": "#FFD700",
      "sh": "#003DA5",
      "me": "#FFD700",
      "tipo": "franja-horizontal",
      "desc": "Establecimiento del diseño clásico y definitivo: fondo azul con una franja horizontal amarilla en el pecho."
    }
  ],
  "river-plate": [
    {
      "desde": 1901,
      "hasta": 1904,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Camisa totalmente blanca con pantalones oscuros tras la fundación original."
    },
    {
      "desde": 1905,
      "hasta": 1930,
      "c1": "#ffffff",
      "c2": "#ED1C24",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "banda-diagonal",
      "desc": "Incorporación de la franja o banda diagonal roja cruzando el pecho de izquierda a derecha."
    },
    {
      "desde": 1931,
      "hasta": 1933,
      "c1": "#ffffff",
      "c2": "#ED1C24",
      "sh": "#ffffff",
      "me": "#333333",
      "tipo": "rayas-verticales",
      "desc": "En los primeros años del profesionalismo se utilizó una camiseta tricolor a rayas verticales rojas, blancas y negras."
    },
    {
      "desde": 1934,
      "hasta": null,
      "c1": "#ffffff",
      "c2": "#ED1C24",
      "sh": "#111111",
      "me": "#ffffff",
      "tipo": "banda-diagonal",
      "desc": "Retorno definitivo y oficialización de la clásica banda diagonal roja sobre fondo blanco."
    }
  ],
  "independiente": [
    {
      "desde": 1905,
      "hasta": 1907,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#000080",
      "me": "#000080",
      "tipo": "liso",
      "desc": "Primer uniforme histórico: camisa blanca con un bolsillo azul en el lado izquierdo del pecho."
    },
    {
      "desde": 1908,
      "hasta": null,
      "c1": "#E2001A",
      "c2": "#E2001A",
      "sh": "#000080",
      "me": "#E2001A",
      "tipo": "liso",
      "desc": "Adopción de la camiseta íntegramente roja, en homenaje al equipo inglés Nottingham Forest."
    }
  ],
  "racing-club": [
    {
      "desde": 1903,
      "hasta": 1903,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "liso",
      "desc": "La primera camiseta del club en el año de su fundación fue totalmente blanca."
    },
    {
      "desde": 1904,
      "hasta": 1904,
      "c1": "#FFD700",
      "c2": "#000000",
      "sh": "#111111",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "Camiseta a bastones verticales de color negro y amarillo."
    },
    {
      "desde": 1904,
      "hasta": 1908,
      "c1": "#87CEEB",
      "c2": "#FFC0CB",
      "sh": "#000080",
      "me": "#000080",
      "tipo": "cuadros",
      "desc": "Reemplazo del diseño por una curiosa camiseta dividida a cuadros celestes y rosas."
    },
    {
      "desde": 1910,
      "hasta": null,
      "c1": "#87CEEB",
      "c2": "#ffffff",
      "sh": "#111111",
      "me": "#ffffff",
      "tipo": "rayas-verticales",
      "desc": "Adopción definitiva del diseño a rayas verticales de color celeste y blanco, en homenaje a los colores patrios."
    }
  ],
  "san-lorenzo": [
    {
      "desde": 1908,
      "hasta": 1910,
      "c1": "#800020",
      "c2": "#800020",
      "sh": "#ffffff",
      "me": "#111111",
      "tipo": "liso",
      "desc": "La primera indumentaria fue de tonalidad principal borravino liso o rojo oscuro, con cuellos blancos."
    },
    {
      "desde": 1911,
      "hasta": null,
      "c1": "#000080",
      "c2": "#B22222",
      "sh": "#ffffff",
      "me": "#000080",
      "tipo": "rayas-verticales",
      "desc": "Se establece el uso oficial de la camiseta a bastones verticales azules y rojos, inspirados en tela cedida por la iglesia."
    }
  ],
  "huracan": [
    {
      "desde": 1908,
      "hasta": null,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#ffffff",
      "me": "#ffffff",
      "tipo": "liso",
      "desc": "La camiseta titular del club fue blanca históricamente desde su origen oficial, destacando el escudo colorado del globo."
    }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Overwrite deeply array of equipacion 
    fileData.equipacion = data[club];
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated equipacion for ${club}`);
  }
}
