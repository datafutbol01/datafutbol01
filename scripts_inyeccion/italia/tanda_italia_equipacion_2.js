const fs = require('fs');

const dataMap = {
  'fiorentina.json': [
    {
      "desde": 1926,
      "hasta": 1929,
      "c1": "#ffffff",
      "c2": "#db0011",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "mitades",
      "desc": "En sus tres primeros años formativos, la plantilla heredó un uniforme básico dividido en partes iguales a mitades o rectángulos blancos y rojos."
    },
    {
      "desde": 1929,
      "hasta": null,
      "c1": "#49266e",
      "c2": "#49266e",
      "sh": "#49266e",
      "me": "#ffffff",
      "tipo": "liso",
      "desc": "Tras una modificación originada logísticamente o un supuesto error de lavado en las fábricas según los propios registros florales florentinos, determinaron mantener permanentemente el liso, plano particular e histórico tono purpúreo o tonalidad Viola institucional en sus competencias oficiales."
    }
  ],
  'genoa.json': [
    {
      "desde": 1893,
      "hasta": 1901,
      "c1": "#ffffff",
      "c2": "#ffffff",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "liso",
      "desc": "Los primeros atuendos aprobados para la práctica liguera consistieron temporalmente de camisas planas albas o blancas, seguido por uniformes a líneas azules oscuras en el final de siglo XIX."
    },
    {
      "desde": 1901,
      "hasta": null,
      "c1": "#001e4a",
      "c2": "#87041a",
      "sh": "#001e4a",
      "me": "#001e4a",
      "tipo": "mitades",
      "desc": "Adoptando las indicaciones visuales, su escudo formó definitivamente la estructura de mitades cuarteladas, combinando la mitad de la sección tonalidad oscura granate u oscura o roja con el sector azul cobalto portuario marítimo histórico."
    }
  ],
  'hellas-verona.json': [
    {
      "desde": 1903,
      "hasta": null,
      "c1": "#0f235e",
      "c2": "#0f235e",
      "sh": "#ffe205",
      "me": "#0f235e",
      "tipo": "liso",
      "desc": "El club asumió los rangos cromáticos escalados heráldicos y asimilados al escudo oficial cívico comunal de la ciudad de Verona a través integraciones amarillas destacadas sobre sus bases institucionales generalmente planas lisas de matiz azul profundo."
    }
  ],
  'inter.json': [
    {
      "desde": 1908,
      "hasta": null,
      "c1": "#00298a",
      "c2": "#000000",
      "sh": "#000000",
      "me": "#000000",
      "tipo": "rayas-verticales",
      "desc": "Formalizando las actas y desprendimientos iniciales de los registros normativos turineses conformaron opuestamente unas líneas visuales y formales continuas de finas y grandes franjas y rayas verticales interconectando el cielo azul contra el color fúnebre negro formalizando su patronímico clásico institucional mundial nerazzurro."
    }
  ],
  'juventus.json': [
    {
      "desde": 1897,
      "hasta": 1903,
      "c1": "#f5bcc8",
      "c2": "#f5bcc8",
      "sh": "#111111",
      "me": "#111111",
      "tipo": "liso",
      "desc": "En los albores originadores juveniles de Turín asimilaron y utilizaron a la moda normada del siglo casacas deportivas lisas y planas de color blando o rosa rosado pálido rematizadas por corbata negada base de la asamblea y escudo."
    },
    {
      "desde": 1903,
      "hasta": null,
      "c1": "#ffffff",
      "c2": "#000000",
      "sh": "#ffffff",
      "me": "#ffffff",
      "tipo": "rayas-verticales",
      "desc": "Recibiendo encomiendas y de provisiones sustitutivas formales textiles procedentes proveniente de Nottingham desde el Reino Unido, incorporaron permanentemente de modo regular a perpetuidad las muy conocidas clásicas distintivas rayas y formaciones rayadas blancas inmaculadas contra y negras fúnebres de líneas verticales definitivas."
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
