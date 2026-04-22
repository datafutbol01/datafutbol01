const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const data = {
  "aston-villa": [
    { "desde": 1874, "hasta": 1887, "c1": "#111111", "c2": "#E2001A", "sh": "#ffffff", "me": "#111111", "tipo": "liso", "desc": "Primeros años experimentando con uniformes negros cruzados por fajas rojas o mitades." },
    { "desde": 1887, "hasta": null, "c1": "#670E36", "c2": "#95BFE5", "sh": "#ffffff", "me": "#95BFE5", "tipo": "liso", "desc": "Configuración clásica de cuerpo borravino sólido (Claret) y mangas celestes." }
  ],
  "bournemouth": [
    { "desde": 1899, "hasta": 1971, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Como Boscombe FC utilizaban franjas verticales rojas y blancas." },
    { "desde": 1971, "hasta": null, "c1": "#E2001A", "c2": "#111111", "sh": "#111111", "me": "#E2001A", "tipo": "rayas-verticales", "desc": "Rediseño completo adoptando rayas verticales rojas y negras inspirado en el AC Milan." }
  ],
  "brentford": [
    { "desde": 1889, "hasta": 1925, "c1": "#FFA07A", "c2": "#111111", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "En sus inicios vistieron camisetas a franjas de color salmón/borravino y negro u oro." },
    { "desde": 1925, "hasta": null, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Establecimiento del diseño clásico a bastones verticales rojiblancos." }
  ],
  "brighton": [
    { "desde": 1901, "hasta": 1904, "c1": "#005DAA", "c2": "#ffffff", "sh": "#005DAA", "me": "#005DAA", "tipo": "liso", "desc": "Jugaron originalmente con color azul sólido antes de formalizar rayas." },
    { "desde": 1904, "hasta": null, "c1": "#005DAA", "c2": "#ffffff", "sh": "#ffffff", "me": "#005DAA", "tipo": "rayas-verticales", "desc": "Tradicional y oficial adopción de los listones blancos y azules marinos." }
  ],
  "burnley": [
    { "desde": 1882, "hasta": 1910, "c1": "#00FF00", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Usaron gran variedad de diseños desde rayas verdes, franjas ámbar, e incluso camisa rosa liso." },
    { "desde": 1910, "hasta": null, "c1": "#6C1D45", "c2": "#87CEEB", "sh": "#ffffff", "me": "#87CEEB", "tipo": "liso", "desc": "Cambio y adopción idéntica a los colores triunfantes del Aston Villa." }
  ],
  "crystal-palace": [
    { "desde": 1905, "hasta": 1973, "c1": "#800000", "c2": "#87CEEB", "sh": "#ffffff", "me": "#111111", "tipo": "mitad-vertical", "desc": "Inspirados en su afiliación indirecta utilizaban camisas mitades o lisas borravino." },
    { "desde": 1973, "hasta": null, "c1": "#C4122E", "c2": "#1B4398", "sh": "#1B4398", "me": "#1B4398", "tipo": "rayas-verticales", "desc": "Malcolm Allison reconfigura la identidad con bastones rojos y azules verticales." }
  ],
  "everton": [
    { "desde": 1878, "hasta": 1901, "c1": "#FFB6C1", "c2": "#FFB6C1", "sh": "#111111", "me": "#ffffff", "tipo": "liso", "desc": "Era de experimentación rotando por azul marino, rubí rojo y el célebre color rosa del colegio." },
    { "desde": 1901, "hasta": null, "c1": "#003399", "c2": "#003399", "sh": "#ffffff", "me": "#ffffff", "tipo": "liso", "desc": "Institucionalización y uso de la clásica camisa Azul Real puro con pantalón blanco." }
  ],
  "fulham": [
    { "desde": 1879, "hasta": 1903, "c1": "#87CEEB", "c2": "#E2001A", "sh": "#111111", "me": "#111111", "tipo": "mitad-vertical", "desc": "Arrancaron usando camisetas bicolores de división a media altura o mitades." },
    { "desde": 1903, "hasta": null, "c1": "#ffffff", "c2": "#ffffff", "sh": "#111111", "me": "#ffffff", "tipo": "liso", "desc": "Se consolida definitivamente el uniforme blanco liso con clásicos pantalones negros." }
  ],
  "leeds-united": [
    { "desde": 1919, "hasta": 1961, "c1": "#1D428A", "c2": "#FFCD00", "sh": "#ffffff", "me": "#1D428A", "tipo": "mitad-vertical", "desc": "La vieja identidad de pavo real utilizaba azul y viejo oro y amarillo por influencia ciudadana." },
    { "desde": 1961, "hasta": null, "c1": "#ffffff", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "tipo": "liso", "desc": "Don Revie cambia el equipo por ropa blanca sólida buscando asimilar el aura ganadora del Real Madrid." }
  ],
  "newcastle": [
    { "desde": 1881, "hasta": 1894, "c1": "#E2001A", "c2": "#E2001A", "sh": "#ffffff", "me": "#111111", "tipo": "liso", "desc": "El club madre originario utilizaba camisetas sólidas rojas." },
    { "desde": 1894, "hasta": null, "c1": "#111111", "c2": "#ffffff", "sh": "#111111", "me": "#111111", "tipo": "rayas-verticales", "desc": "Se acopla el famoso e indomable diseño de las franjas blancas y negras de Newcastle." }
  ],
  "nottingham-forest": [
    { "desde": 1865, "hasta": null, "c1": "#DD0000", "c2": "#DD0000", "sh": "#ffffff", "me": "#DD0000", "tipo": "liso", "desc": "Inalterable rojo fundacional 'Garibaldi' honrando al general italiano; el tono más respetado y antiguo del país." }
  ],
  "sunderland": [
    { "desde": 1879, "hasta": 1887, "c1": "#000080", "c2": "#000080", "sh": "#ffffff", "me": "#111111", "tipo": "liso", "desc": "Primer uniforme era puramente de tono azul liso llanos." },
    { "desde": 1887, "hasta": null, "c1": "#E2001A", "c2": "#ffffff", "sh": "#111111", "me": "#E2001A", "tipo": "rayas-verticales", "desc": "Adopción icónica de las rayas verticales rojas y blancas." }
  ],
  "tottenham": [
    { "desde": 1882, "hasta": 1898, "c1": "#132257", "c2": "#132257", "sh": "#132257", "me": "#111111", "tipo": "liso", "desc": "Cambios primerizos variando desde el azul marino liso sólido y oro hasta mitades cruzadas." },
    { "desde": 1898, "hasta": null, "c1": "#ffffff", "c2": "#ffffff", "sh": "#132257", "me": "#ffffff", "tipo": "liso", "desc": "Se copia como inspiración rotunda el elegante formato de camisa blanca pura e impertérritos pantalones navales de Preston N.E." }
  ],
  "west-ham-united": [
    { "desde": 1895, "hasta": 1900, "c1": "#132257", "c2": "#132257", "sh": "#132257", "me": "#111111", "tipo": "liso", "desc": "Ropaje totalmente azul oscuro cuando eran el Thames Ironworks FC fabril." },
    { "desde": 1900, "hasta": null, "c1": "#7A263A", "c2": "#87CEEB", "sh": "#ffffff", "me": "#7A263A", "tipo": "liso", "desc": "Como castigo de una apuesta de atletismo se heredan prendas del Aston Villa (borravino y celeste) pasándolas a la entidad." }
  ],
  "wolverhampton-wanderers": [
    { "desde": 1877, "hasta": 1891, "c1": "#E2001A", "c2": "#ffffff", "sh": "#ffffff", "me": "#111111", "tipo": "rayas-verticales", "desc": "Las raíces de St Luke's se manifestaron en una vistosa prenda a rayas verticales coloradas y de tonalidad blanca." },
    { "desde": 1891, "hasta": null, "c1": "#FDB913", "c2": "#FDB913", "sh": "#111111", "me": "#FDB913", "tipo": "liso", "desc": "Atañe de base sus colores legendarios de Oro viejo de color ámbar quemado sólido con un liso que perduraría a siglos incansables." } // keeping it slightly more factual
  ]
};

// Fix to make it completely factual without any poetic trace
data["wolverhampton-wanderers"][1].desc = "Atañe sus colores legendarios Oro Viejo sólido con pantalón negro inalterables hasta la era moderna.";

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    fileData.equipacion = data[club];
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated equipacion for ${club}`);
  }
}
