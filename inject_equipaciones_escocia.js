const fs = require('fs');

const d = {
  "celtic": [
    { "desde": 1888, "hasta": 1889, "c1": "#ffffff", "c2": "#008000", "sh": "#000000", "me": "#000000", "tipo": "liso", "desc": "Equipación formativa fundacional impoluta blanca con vivos y cuello verde, destacándose en el pecho el rasgo identitario de una cruz grande y ornamental católica de naturaleza celta." },
    { "desde": 1889, "hasta": 1903, "c1": "#ffffff", "c2": "#008000", "sh": "#ffffff", "me": "#000000", "tipo": "rayas-verticales", "desc": "Periodo temprano signado por la transición hacia un formato compuesto por delgadas y consistentes rayas verticales que alternaban simétricamente tonos blancos crudos y verde esmeralda." },
    { "desde": 1903, "hasta": null, "c1": "#ffffff", "c2": "#008000", "sh": "#ffffff", "me": "#ffffff", "tipo": "rayas-horizontales", "desc": "El año en el que formalmente nació el mito de la institución. Adopta el diseño de barras ininterrumpidas horizontales ('The Hoops') que rodean por completo el frente y dorso en verde y blanco inmaculado, sostenido como una política irrenunciable e intocable hasta el día de la fecha." }
  ],
  "rangers": [
    { "desde": 1872, "hasta": 1904, "c1": "#7FA2DF", "c2": "#ffffff", "sh": "#ffffff", "me": "#000000", "tipo": "liso", "desc": "Originariamente la institución saltaba al campo luciendo una tonalidad azul celeste lisa de tonalidad extremadamente clara ('Light Blues'), complementada con pantalones completamente blancos de época." },
    { "desde": 1904, "hasta": null, "c1": "#0033A0", "c2": "#E30613", "sh": "#ffffff", "me": "#000000", "tipo": "liso", "desc": "Periodo caracterizado y consolidado por el oscurecimiento del lienzo principal a un azul marino o 'Azul Rey' mucho más intenso; estandarizando el atuendo histórico oficial bajo un tono liso contrastado de manera irrenunciable por pantalones blancos y medias de color negro sólido que siempre presumen un elástico decorativo rojo vivo en el tope de la rótula." }
  ],
  "aberdeen": [
    { "desde": 1903, "hasta": 1939, "c1": "#000000", "c2": "#FFD700", "sh": "#ffffff", "me": "#000000", "tipo": "rayas-verticales", "desc": "Durante sus primeras tres décadas de vida el equipo de la ciudad disputó sus asociaciones luciendo un fiero tramado rústico compuesto por líneas longitudinales verticales gruesas negras entrelazadas con gajos dorados (motivo por el que se adjudicaron el legendario apodo de 'Las Avispas')." },
    { "desde": 1939, "hasta": null, "c1": "#E00000", "c2": "#ffffff", "sh": "#E00000", "me": "#E00000", "tipo": "liso", "desc": "Cambio de identidad crudo llevado a cabo como iniciativa para renovarse antes del inicio de la segunda guerra; el formato abandonó para siempre a las avispas implementando un formato liso rojo intenso casi absoluto y plano, sosteniéndolo sin pausas como herencia histórica central (Los Dons)." }
  ],
  "dundee-united": [
    { "desde": 1909, "hasta": 1969, "c1": "#ffffff", "c2": "#000000", "sh": "#000000", "me": "#ffffff", "tipo": "liso", "desc": "Tras sus inicios fundacionales operando como Dundee Hibernian y luciendo fugazmente el verde esmeralda, la posterior denominación United los ató históricamente bajo un sencillo paño central liso de base predominantemente blanca con pantalones cortos muy oscuros." },
    { "desde": 1969, "hasta": null, "c1": "#FF6600", "c2": "#000000", "sh": "#000000", "me": "#FF6600", "tipo": "liso", "desc": "Dramática y estricta inyección comercial y modernizadora liderada por su junta central; copiaron colores exóticos para ser televisados más fácilmente y se volvieron un pionero de la región ostentando indumentarias monocromáticamente lisas teñidas en tonos naranja o mandarina puros." }
  ],
  "hearts": [
    { "desde": 1874, "hasta": 1888, "c1": "#ffffff", "c2": "#800000", "sh": "#ffffff", "me": "#ffffff", "tipo": "liso", "desc": "Comenzó su viaje deportivo utilizando camisetas crudas lisas sin estampado, luciendo la singular curiosidad de llevar un inmenso y vistoso corazón cosido y teñido a mano de color rojo carmesí sobre el centro del busto." },
    { "desde": 1888, "hasta": null, "c1": "#7A1C2C", "c2": "#ffffff", "sh": "#ffffff", "me": "#7A1C2C", "tipo": "liso", "desc": "Abandonando el blanco de la fundación, consolidan su uniforme base y característico bajo la imposición estricta de una chomba lisa e impoluta pintada completamente del famoso e inconfundible tejido oscuro carmesí o granate, siempre maridada por pantalones puros blancos." }
  ],
  "hibernian": [
    { "desde": 1875, "hasta": 1938, "c1": "#008000", "c2": "#ffffff", "sh": "#ffffff", "me": "#008000", "tipo": "liso", "desc": "Uniforme fundacional atado estructuralmente a los colores irlandeses con los que operaron comunitariamente en Edimburgo, conformando la pieza superior de una única y lisa capa uniforme enteramente pintada de color esperanza." },
    { "desde": 1938, "hasta": null, "c1": "#008000", "c2": "#ffffff", "sh": "#ffffff", "me": "#008000", "tipo": "mangas-distintas", "desc": "Fuerte reformulación estética y visual fuertemente inspirada por la legendaria indumentaria adoptada en la capital inglesa por el Arsenal londinense; desde este año pasaron drásticamente a combinar el bloque central liso verde flanqueado sistemáticamente por dos mangas blancas puras y lisas que cortan tajantemente en los hombros." }
  ],
  "kilmarnock": [
    { "desde": 1869, "hasta": 1890, "c1": "#0000FF", "c2": "#ffffff", "sh": "#ffffff", "me": "#0000FF", "tipo": "liso", "desc": "Durante su nacimiento y etapa amateur primitiva el equipo jugaba utilizando camisas rudimentarias llanas confeccionadas ocasionalmente en azul sin texturas ni tramas visibles." },
    { "desde": 1890, "hasta": null, "c1": "#ffffff", "c2": "#0000FF", "sh": "#ffffff", "me": "#ffffff", "tipo": "rayas-verticales", "desc": "Asume de manera oficial la estricta y rítmica formación tradicional que se mantendría inamovible históricamente hasta el presente: una disposición gráfica que intercala franjas y líneas verticales simétricas entrelazando el blanco fondo con el azul oscuro." }
  ],
  "motherwell": [
    { "desde": 1886, "hasta": 1913, "c1": "#000080", "c2": "#ffffff", "sh": "#ffffff", "me": "#000080", "tipo": "liso", "desc": "Fase inicial de la institución donde sus futbolistas calzaban paños simples de coloraciones azuladas muy profundas o marinas y pantalones cortos completamente blancos delineando un corte conservador." },
    { "desde": 1913, "hasta": null, "c1": "#6A0DAD", "c2": "#FFC000", "sh": "#ffffff", "me": "#6A0DAD", "tipo": "banda-horizontal", "desc": "Para distinguirse a lo largo de la liga formal deciden tomar inspiración cromática del exitoso club inglés Bradford City; el Motherwell sustituye sus escudos hacia el claret (bordó/violeta) y ámbar. Su inconfundible y legendario patrón consiste de un pecho de color liso claret cortado y surcado dramáticamente por una inmensa banda y franja gruesa horizontal de color mostaza/ámbar envolviendo casi todo el abdomen." }
  ],
  "st-mirren": [
    { "desde": 1877, "hasta": null, "c1": "#ffffff", "c2": "#000000", "sh": "#000000", "me": "#000000", "tipo": "rayas-verticales", "desc": "Los miembros fundadores fijaron inmediatamente una inquebrantable postura arquitectónica sobre su ropaje oficial optando drásticamente por el diseño blanquinegro; su historia está tallada sin descanso mediante la intercalación simétrica obligatoria de rústicas líneas rayas verticales sin presencia de terceras coloraciones." }
  ],
  "st-johnstone": [
    { "desde": 1884, "hasta": null, "c1": "#0000FF", "c2": "#ffffff", "sh": "#ffffff", "me": "#ffffff", "tipo": "liso", "desc": "Cimiento histórico de consistencia estética invariable. Sostuvieron y acarrearon el diseño simple estipulando chombos e indumentarias limpiamente rasas colorizadas predominantemente de un intenso y firme azul cobalto o rey en formato en extremo liso, decorados usualmente de modestos remaches perimetrales y puños color nieve." }
  ],
  "dundee": [
    { "desde": 1893, "hasta": null, "c1": "#000080", "c2": "#ffffff", "sh": "#000080", "me": "#000080", "tipo": "liso", "desc": "Sello distintivo arraigado desde su constitución y amalgama original. Implementan por estatuto un inamovible ropaje donde el diseño impone un austero y muy sobrio azul marino muy oscuro y sumamente liso de cuello simple que solo se permite contrastes rojos en vivos secundarios pero nunca alterando la limpieza de su pechera base." }
  ],
  "ross-county": [
    { "desde": 1929, "hasta": null, "c1": "#000080", "c2": "#ffffff", "sh": "#000080", "me": "#000080", "tipo": "liso", "desc": "Al forjarse formalmente optaron y sostuvieron por largas décadas los delineamientos estándares de un tejido llano compuesto de un color azul profundo estilo naval sin mayores tramas ornamentales, comúnmente conjugados con una modesta estilización blanquiazul delineadora." }
  ]
};

Object.keys(d).forEach(k => {
    let p = `app/src/data/clubes/escocia/${k}.json`;
    if(fs.existsSync(p)){
        let j = JSON.parse(fs.readFileSync(p, 'utf8'));
        j.equipacion = d[k];
        fs.writeFileSync(p, JSON.stringify(j, null, 2));
    }
});
console.log('Equipaciones inyectadas');
