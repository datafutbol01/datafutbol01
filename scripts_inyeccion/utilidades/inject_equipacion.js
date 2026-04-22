const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const equipaciones = {
  'penarol.json': [
    { desde: 1891, hasta: 1910, c1: '#FFCC00', c2: '#000000', sh: '#000000', me: '#000000', tipo: 'mitad-vertical', desc: 'Indumentaria pionera dividida en mitades y cuartos (arado ferroviario) conservando el amarillo y negro de la locomotora Rocket británica.' },
    { desde: 1910, hasta: null, c1: '#FFCC00', c2: '#000000', sh: '#000000', me: '#000000', tipo: 'rayas-verticales', desc: 'Consolidación definitiva de la indumentaria a bastones verticales (rayas verticales) alternando oro y carbón, formato icónico mantenido inalterable al día de hoy.' }
  ],
  'nacional.json': [
    { desde: 1899, hasta: 1902, c1: '#DA291C', c2: '#0033A0', sh: '#0033A0', me: '#0033A0', tipo: 'mitad-vertical', desc: 'En su fundación, se adoptó la camisa roja o a mitades rojas y azules con colores procedentes de la bandera de Artigas.' },
    { desde: 1902, hasta: null, c1: '#FFFFFF', c2: null, sh: '#0033A0', me: '#0033A0', tipo: 'liso', desc: 'Implantación inalterable de la camisa predominantemente blanca lisa con vivos o bolsillo tricolor (rojo, blanco y azul) en el pecho, completando con pantalones azules.' }
  ],
  'defensor-sporting.json': [
    { desde: 1913, hasta: 1915, c1: '#000000', c2: '#00A859', sh: '#000000', me: '#000000', tipo: 'franja-horizontal', desc: 'Inicialmente, los fundadores utilizaron camisetas negras con franja horizontal o vivos verdes que conseguían en comercios locales.' },
    { desde: 1915, hasta: null, c1: '#662483', c2: null, sh: '#FFFFFF', me: '#662483', tipo: 'liso', desc: 'Adopción histórica y permamente del liso color violeta para diferenciarse de los demás clubes, transformándose en la marca inconfundible del equipo de Punta Carretas.' }
  ],
  'danubio.json': [
    { desde: 1932, hasta: null, c1: '#FFFFFF', c2: '#000000', sh: '#000000', me: '#FFFFFF', tipo: 'banda-diagonal', desc: 'Camiseta de color blanco puro cruzada por una estricta banda diagonal negra. Fueron los primeros del país en establecer y popularizar la banda diagonal.' }
  ],
  'montevideo-wanderers.json': [
    { desde: 1902, hasta: 1903, c1: '#0033A0', c2: '#FFFFFF', sh: '#FFFFFF', me: '#000000', tipo: 'rayas-verticales', desc: 'Se utilizaron uniformes a rayas azules y blancas cedidos inicialmente por el club desaparecido Uruguay Athletic.' },
    { desde: 1903, hasta: null, c1: '#000000', c2: '#FFFFFF', sh: '#000000', me: '#000000', tipo: 'rayas-verticales', desc: 'Se adoptan de forma permanente los bastones verticales blancos y negros a rayas tras una gira y contacto con Estudiantes de Buenos Aires.' }
  ],
  'albion.json': [
    { desde: 1891, hasta: 1895, c1: '#FFFFFF', c2: '#DA291C', sh: '#FFFFFF', me: '#000000', tipo: 'liso', desc: 'Uniforme germinal netamente blanco portando una estrella roja aislada en el frente de la camisa.' },
    { desde: 1895, hasta: null, c1: '#000080', c2: '#E30613', sh: '#000080', me: '#000080', tipo: 'mitad-vertical', desc: 'Implantación definitiva de las mitades verticales simétricas en estricto color azul profundo y rojo, honrado a los colores británicos originales.' }
  ],
  'progreso.json': [
    { desde: 1917, hasta: null, c1: '#FFCC00', c2: '#DA291C', sh: '#000000', me: '#FFCC00', tipo: 'rayas-verticales', desc: 'Patrón a franjas o rayas verticales alternadas de amarillo y rojo continuo, representativos a los colores catalanes e históricos de la institución anarquista.' }
  ],
  'central-espanol.json': [
    { desde: 1905, hasta: null, c1: '#DA291C', c2: '#0033A0', sh: '#0033A0', me: '#DA291C', tipo: 'rayas-verticales', desc: 'Históricos bastones e hilos verticales combinando alternativamente el rojo, blanco y azul.' }
  ],
  'liverpool.json': [
    { desde: 1915, hasta: null, c1: '#0033A0', c2: '#000000', sh: '#000000', me: '#0033A0', tipo: 'rayas-verticales', desc: 'Clásica camiseta con bastones o rayas verticales de intenso color negro y azul oscuro en honor a los marineros mercantes ingleses atracados en astilleros.' }
  ],
  'cerro.json': [
    { desde: 1922, hasta: null, c1: '#89CFF0', c2: '#FFFFFF', sh: '#000000', me: '#FFFFFF', tipo: 'rayas-verticales', desc: 'El diseño inalterable de la casaca refleja finas bandas o rayas verticales alternas entre blanco y un riguroso celeste claro.' }
  ],
  'racing.json': [
    { desde: 1919, hasta: null, c1: '#00A859', c2: '#FFFFFF', sh: '#000000', me: '#FFFFFF', tipo: 'rayas-verticales', desc: 'Líneas verticales estrictas a rayas combinando los colores blanco y verde continuo desde los primeros encuentros documentados.' }
  ],
  'cerro-largo.json': [
    { desde: 2002, hasta: null, c1: '#0033A0', c2: '#FFFFFF', sh: '#000000', me: '#FFFFFF', tipo: 'rayas-verticales', desc: 'Bastones o rayas verticales de color azul francia o azul profundo con blanco, siendo herencia cruzada oficial de la selección departamental.' }
  ],
  'boston-river.json': [
    { desde: 1939, hasta: null, c1: '#DA291C', c2: '#00A859', sh: '#FFFFFF', me: '#00A859', tipo: 'franja-vertical', desc: 'El equipo se identifica mediante un formato de banda diagonal o a veces mitad vertical ancha empleando los colores verde y rojo.' }
  ],
  'juventud.json': [
    { desde: 1935, hasta: null, c1: '#0033A0', c2: '#FFFFFF', sh: '#000000', me: '#0033A0', tipo: 'rayas-verticales', desc: 'Histórica camisa basada a bastones y rayas verticales azules y blancos ininterrumpidos en representación municipal a Las Piedras.' }
  ],
  'deportivo-maldonado.json': [
    { desde: 1928, hasta: null, c1: '#006600', c2: '#DA291C', sh: '#000000', me: '#006600', tipo: 'mitad-vertical', desc: 'Los orientales o rojiverdes vistieron perpetuamente mediante el escudo un patrón combinado de mitades verticales rojiverdes.' }
  ],
  'montevideo-city-torque.json': [
    { desde: 2007, hasta: 2017, c1: '#89CFF0', c2: '#0033A0', sh: '#0033A0', me: '#89CFF0', tipo: 'v-pecho', desc: 'Años iniciales utilizando patrones variados de celestes crudos o variando tonos primarios fundacionales.' },
    { desde: 2017, hasta: null, c1: '#6CABDD', c2: null, sh: '#FFFFFF', me: '#6CABDD', tipo: 'liso', desc: 'Incorporación formal al City Football Group mutando el tono estricto a un color celeste Manchester liso permanente a nivel global.' }
  ]
};

for (const [filename, equipacionData] of Object.entries(equipaciones)) {
  const p = path.join(dir, filename);
  if(fs.existsSync(p)) {
      let content = fs.readFileSync(p, 'utf8');
      try {
          let json = JSON.parse(content);
          json.equipacion = equipacionData;
          // Delete old empty indumentaria
          delete json.indumentaria;
          fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
          console.log('Equipacion updated for', filename);
      } catch(e) {
          console.log('Error', filename, e.message);
      }
  }
}
