const fs = require('fs');
const path = require('path');

const data = {
  "boca-juniors": [
    {
      "apodo": "Xeneizes",
      "origen": "Su origen etimológico radica de forma directa en el dialecto genovés 'zenéize', que en la terminología provincial italiana de Liguria se utiliza llanamente para designar todo lo perteneciente a la ciudad de Génova. En la primera década del siglo XX, el barrio capitalino original de La Boca y los primeros cinco fundadores del naciente club de la región eran parte de las masivas oleadas de obreros inmigrantes llegados desde el famoso puerto italiano al país. La fuerte huella y composición comunitaria determinó que, con el tiempo, se dictaminara y adaptara la derivación castellanizada mediante la X como el patronímico o gentilicio oficial inamovible de todo el club."
    },
    {
      "apodo": "La Mitad Más Uno",
      "origen": "Fue impulsado e insertado socialmente en el vocabulario del país gracias al trabajo masivo y locución del carismático periodista local y radial boquense de de los tiempos, Antonio Carrizo, durante transcurso amplio de la década de 1960. Tras revisar múltiples muestreos, censos poblacionales o estadísticas comparativas de encuestas deportivas a lo ancho de los territorios nacionales y en los programas al aire, argumentaba radialmente de modo persistente que la cantidad de personas empadronadas del club lograba superar numéricamente sin oposición matemática alguna al resto general compuesto por todos los otros equipos y grupos de hinchadas sumados de todo el territorio y país. "
    },
    {
      "apodo": "Bosteros",
      "origen": "Consta de dos explicaciones de nacimiento parejo que funcionaron como severos agravios directos generados socialmente por distintas hinchadas adversarias a base barrial desde sus inicios hasta instalarse orgullosamente en el propio escudo durante décadas más tarde al consolidarse su masividad callejera. La primera hace hincapié histórico claro sobre las recordadas y masivas inundaciones del famoso cuerpo y la cuenca del agua limitante sureña o arrabal porteña conocida del sur de Riachuelo dejando tras crecidas e invadiendo aludes inundando todas vecindades barriales arrojando un rudo olor denso. Otra fuerte variante apunta exactamente que pegado junto a y en frente literal del antiguo paraje y locación inicial precaria cancha perimetral del naciente equipo del club existieron fábricas gigantes operando donde decenas y tracción a de carros y caballos de sangre trabajaban, dejando el estiércol de caballos al costado de las inmediaciones barriales."
    }
  ],
  "river-plate": [
    {
      "apodo": "Los Millonarios",
      "origen": "Surgió como enorme eco debido al tremendo e inesperado sacudón comercial e inversor generalizado en las altas y cerradas esferas deportivas nacionales originadas tempranamente en el ciclo del profesionalismo inicial futbolístico nacional transcurrido del y entre 1931 y 1932. Bajo directivas totales e impulsos del polémico y recordado presidente Vespucio Liberti, el club logró romper la plaza económica desembolsando de frente más de 10.000 pesos de enorme valor comercial temporal en la ficha libre del extremo del equipo Sportivo Buenos Aires, Carlos Peucelle. Lo cual al llegar la siguiente temporada reventó por completas los márgenes mundiales estableciendo al fichar a y por Bernabé Ferreyra la inédita suma récord pagando el enorme importe abrumador total de 35.000 pesos, cobrando la innegable tapa en el medio gráfico general nacional del y para el diario Crítica para instaurar de raíz a los famosos de Núñez y sus billetes."
    },
    {
      "apodo": "Las Gallinas",
      "origen": "Bautizado y forjado obligatoriamente luego de y tras producirse la trágica velada de forma imborrable deportiva que paralizó cruda y llanamente su club en exactas e identificadas vísperas locales al finales de de mayo del 1966 sudamericano en citas intercontinentales fácticas originarias ante el afamado y uruguayo base equipo del Peñarol originario disputando a terreno cruzando frontera por de del Estadio y al Nacional chileno. Tras dejarse igualar inaudita y fatídicamente cayendo en desventaja a posterior habiendo sostenido el gran liderazgo abrumador del campeonato y un encuentro por y de con una de victoria doble e inicial la de la derrota selló el y hundimiento psicológico trágico perdiendo cuatro final e historia general arrojando todo. Y sumando la gran burla final de local ante y localmente por de y de y frente y sus rivales nacionales, quienes tras cruzar y tras locales originando textualmente la visita de y e enfrentamiento ante Banfield en el barrio local arrojaron al césped un animal volador pintado ataviada inminente color local pluma textualmente blanco de franja."
    },
    {
      "apodo": "La Banda",
      "origen": "Derivado estrictamente del componente indumentario gráfico, fijado directamente por la y famosa banda literal transversal del la cruzada camisa clásica distintiva que nació de casualidad a pocos años y primeros tramos luego en inmediaciones del momento originante en que se cosió históricamente la cruzada y colorada franja proveniente e incautante de los festivos banderines y fajas rescatadas de de temporal desechos linderos temporales del descarte general."
    }
  ]
};

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');
for (const [clubId, apodos] of Object.entries(data)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Sobrescritos Boca y River nivel PREMIUM.');
