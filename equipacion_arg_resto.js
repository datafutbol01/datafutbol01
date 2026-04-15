const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "rosario-central": [
    { "desde": 1889, "hasta": 1903, "c1": "#ED1C24", "c2": "#ffffff", "sh": "#ffffff", "me": "#111111", "tipo": "cuadros", "desc": "Camiseta a cuadros rojos y blancos (Central Argentine Railway)." },
    { "desde": 1903, "hasta": 1904, "c1": "#000080", "c2": "#ffffff", "sh": "#ffffff", "me": "#000080", "tipo": "rayas-verticales", "desc": "Camiseta a bastones azules y blancos." },
    { "desde": 1904, "hasta": null, "c1": "#003DA5", "c2": "#FFD700", "sh": "#003DA5", "me": "#FFD700", "tipo": "rayas-verticales", "desc": "Diseño definitivo a rayas verticales azules y amarillas oro." }
  ],
  "newells-old-boys": [
    { "desde": 1903, "hasta": 1904, "c1": "#ffffff", "c2": "#87CEEB", "sh": "#ffffff", "me": "#111111", "tipo": "rayas-verticales", "desc": "Camisa inicial de bastones blancos y celestes." },
    { "desde": 1905, "hasta": null, "c1": "#E2001A", "c2": "#000000", "sh": "#111111", "me": "#111111", "tipo": "mitad-vertical", "desc": "Diseño clásico dividido a mitades verticales roja y negra." }
  ],
  "estudiantes-lp": [
    { "desde": 1905, "hasta": 1906, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Primera camiseta a bastones rojos y blancos." },
    { "desde": 1906, "hasta": 1908, "c1": "#E2001A", "c2": "#ffffff", "sh": "#ffffff", "me": "#111111", "tipo": "banda-diagonal", "desc": "Breve uso de camiseta con banda diagonal roja." },
    { "desde": 1908, "hasta": null, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Retorno definitivo a los bastones verticales rojos y blancos." }
  ],
  "gimnasia-lp": [
    { "desde": 1887, "hasta": 1903, "c1": "#ffffff", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "tipo": "liso", "desc": "Blancas lisas utilizadas para la práctica de esgrima." },
    { "desde": 1903, "hasta": 1910, "c1": "#ffffff", "c2": "#000080", "sh": "#ffffff", "me": "#000080", "tipo": "rayas-verticales", "desc": "Uso de camiseta rayada celeste y blanca o azul y blanca." },
    { "desde": 1910, "hasta": null, "c1": "#ffffff", "c2": "#000080", "sh": "#ffffff", "me": "#000080", "tipo": "franja-horizontal", "desc": "Diseño inalterable blanco con la franja horizontal azul marino." }
  ],
  "velez-sarsfield": [
    { "desde": 1910, "hasta": 1914, "c1": "#ffffff", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "liso", "desc": "Camisas completamente blancas en sus primeros cotejos." },
    { "desde": 1914, "hasta": 1915, "c1": "#ffffff", "c2": "#000080", "sh": "#ffffff", "me": "#111111", "tipo": "mitad-vertical", "desc": "Camisetas a mitades blanca y azul claro." },
    { "desde": 1916, "hasta": 1933, "c1": "#008000", "c2": "#ED1C24", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Mítica camiseta tricolor a bastones verticales (Italiana)." },
    { "desde": 1933, "hasta": null, "c1": "#ffffff", "c2": "#000080", "sh": "#ffffff", "me": "#ffffff", "tipo": "v-pecho", "desc": "Se acopla la V azulada sobre el pecho blanco." }
  ],
  "argentinos-jrs": [
    { "desde": 1904, "hasta": 1917, "c1": "#E2001A", "c2": "#ffffff", "sh": "#ffffff", "me": "#111111", "tipo": "rayas-verticales", "desc": "Rayas verticales rojas y blancas." },
    { "desde": 1917, "hasta": null, "c1": "#E2001A", "c2": "#E2001A", "sh": "#111111", "me": "#111111", "tipo": "liso", "desc": "La famosa camiseta íntegramente roja con detalles blancos." }
  ],
  "lanus": [
    { "desde": 1915, "hasta": null, "c1": "#800000", "c2": "#800000", "sh": "#ffffff", "me": "#800000", "tipo": "liso", "desc": "El histórico color granate liso desde la fundación del club." }
  ],
  "banfield": [
    { "desde": 1896, "hasta": 1904, "c1": "#8B4513", "c2": "#FFD700", "sh": "#111111", "me": "#111111", "tipo": "mitad-vertical", "desc": "Fundación con colores marrón y oro (Old Trafford)." },
    { "desde": 1904, "hasta": null, "c1": "#008000", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Establece su camiseta clásica a bastones verdes y blancos." }
  ],
  "platense": [
    { "desde": 1905, "hasta": 1908, "c1": "#E2001A", "c2": "#111111", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Camiseta roja y negra." },
    { "desde": 1908, "hasta": null, "c1": "#ffffff", "c2": "#8B4513", "sh": "#ffffff", "me": "#8B4513", "tipo": "franja-horizontal", "desc": "Adopción de franja marrón motivado por un caballo del stud." }
  ],
  "tigre": [
    { "desde": 1902, "hasta": 1910, "c1": "#000080", "c2": "#E2001A", "sh": "#000080", "me": "#111111", "tipo": "rayas-verticales", "desc": "Rayas verticales azules con algunas rojas." },
    { "desde": 1911, "hasta": null, "c1": "#000080", "c2": "#E2001A", "sh": "#000080", "me": "#000080", "tipo": "franja-horizontal", "desc": "Fondo azul victoria con franja roja horizontal media." }
  ],
  "riestra": [
    { "desde": 1931, "hasta": null, "c1": "#111111", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Tradicionales franjas blancas y negras adoptadas de su origen." }
  ],
  "talleres-cba": [
    { "desde": 1913, "hasta": null, "c1": "#000080", "c2": "#ffffff", "sh": "#111111", "me": "#ffffff", "tipo": "rayas-verticales", "desc": "Bastones blancos y azules (homenaje a Blackburn Rovers)." }
  ],
  "belgrano-cba": [
    { "desde": 1905, "hasta": null, "c1": "#87CEEB", "c2": "#87CEEB", "sh": "#ffffff", "me": "#87CEEB", "tipo": "liso", "desc": "El histórico color celeste liso inspirado en la bandera patria." }
  ],
  "instituto": [
    { "desde": 1918, "hasta": null, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#ffffff", "tipo": "rayas-verticales", "desc": "La clásica a bastones rojos y blancos." }
  ],
  "estudiantes-rc": [
    { "desde": 1912, "hasta": null, "c1": "#87CEEB", "c2": "#87CEEB", "sh": "#111111", "me": "#111111", "tipo": "liso", "desc": "Camiseta íntegramente celeste desde orígenes fundacionales." }
  ],
  "atletico-tucuman": [
    { "desde": 1902, "hasta": null, "c1": "#87CEEB", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "tipo": "rayas-verticales", "desc": "Primera camiseta oficial albiceleste a bastones del país." }
  ],
  "central-cordoba": [
    { "desde": 1919, "hasta": null, "c1": "#111111", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Históricos listones negros y blancos de sus comienzos." }
  ],
  "sarmiento-junin": [
    { "desde": 1911, "hasta": null, "c1": "#008000", "c2": "#008000", "sh": "#ffffff", "me": "#ffffff", "tipo": "liso", "desc": "El Verde de Junín utiliza íntegramente ese color liso." }
  ],
  "aldosivi": [
    { "desde": 1913, "hasta": null, "c1": "#008000", "c2": "#FFD700", "sh": "#008000", "me": "#FFD700", "tipo": "rayas-verticales", "desc": "Los bastones amarillo oro y verdes tradicionales." }
  ],
  "union": [
    { "desde": 1907, "hasta": null, "c1": "#E2001A", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "tipo": "rayas-verticales", "desc": "Rayas blancas y colorado liso, el formato santafesino inalterable." }
  ],
  "defensa-justicia": [
    { "desde": 1935, "hasta": null, "c1": "#FFD700", "c2": "#800000", "sh": "#008000", "me": "#ffffff", "tipo": "liso", "desc": "Adoptó colores verde y amarillo en honor a un colectivo." } // Note: Currently green/yellow. I'll just keep it simple.
  ],
  "gimnasia-mdz": [
    { "desde": 1908, "hasta": null, "c1": "#ffffff", "c2": "#111111", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Blancos y negros a franjas verticales." }
  ],
  "independiente-rivadavia": [
    { "desde": 1913, "hasta": null, "c1": "#000080", "c2": "#000080", "sh": "#000080", "me": "#000080", "tipo": "liso", "desc": "El Azul liso histórico del Parque." }
  ],
  "barracas-central": [
    { "desde": 1904, "hasta": null, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Diseño guapo rayado rojo y blanco." }
  ]
};

// Fix Defensa and Justicia correctly
data["defensa-justicia"] = [
  { "desde": 1935, "hasta": null, "c1": "#FFD700", "c2": "#008000", "sh": "#008000", "me": "#FFD700", "tipo": "liso", "desc": "Camiseta color amarillo con vivos verdes." }
];

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
