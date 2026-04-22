const fs = require('fs');

const file = 'app/src/data/clubes/inglaterra/tottenham.json';
if (fs.existsSync(file)) {
  const json = JSON.parse(fs.readFileSync(file));
  json.historia = [
    {
      "ano": "1882",
      "hito": "Fundación y el club de críquet barrial",
      "desc": "El 5 de septiembre de 1882, en el distrito de Tottenham, un grupo de escolares y miembros del antiguo Hotspur Cricket Club se unió con alumnos de la escuela eclesiástica St John's Presbyterian. Liderados formalmente por Bobby Buckle, fundaron el Hotspur Football Club para poder practicar deportes durante los meses de invierno. Años más tarde, agregarían el prefijo Tottenham para distinguirse de un club londinense homónimo."
    },
    {
      "ano": "1901",
      "hito": "La proeza en la FA Cup desde ligas regionales",
      "desc": "Antes de lograr su ansiado ascenso y participación en los certámenes divisionales nacionales principales, el club obtuvo su primera gran coronación. Tottenham se convirtió en el único equipo, desde la conformación estructural reglamentaria de la Football League en 1888, en conquistar la FA Cup siendo un club netamente extra-liga o no vinculado a la estructura divisional superior, tras derrotar a Sheffield United en el desempate."
    },
    {
      "ano": "1960-1961",
      "hito": "El Doblete histórico de liga y FA Cup",
      "desc": "Imponiendo el clásico estilo de juego dinámico ofensivo impulsado por el entrenador Bill Nicholson y el estratega Danny Blanchflower, Tottenham escribió la página más gloriosa del club. En la temporada 1960-1961, el equipo aseguró el campeonato de Primera División y posteriormente se alzó con la FA Cup venciendo a Leicester City en Wembley, convirtiéndose en el primer club del siglo XX en completar oficialmente este anhelado Doblete."
    },
    {
      "ano": "1963",
      "hito": "Primer éxito europeo con la Recopa",
      "desc": "Expandiendo su dominio a nivel continental, el equipo de Bill Nicholson continuó sumando historia en mayo de 1963. Luego de una aplastante actuación colectiva e individual de Jimmy Greaves en Róterdam frente al Atlético de Madrid, al que superaron contundentemente con una victoria de 5-1, los Spurs se consagraron ganadores de la Recopa, convirtiéndose en el primer club británico en alzar una competencia oficial orquestada por la UEFA."
    }
  ];
  fs.writeFileSync(file, JSON.stringify(json, null, 2));
  console.log('Tottenham purificado y actualizado a nivel Bilbao');
}
