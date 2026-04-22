import fs from 'fs';

const data = {
  year: 2014,
  host: 'Brasil',
  participants: [
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Luiz Felipe Scolari', squad: []},
    {id: 'croacia', name: 'Croacia', flag: 'hr', dt: 'Niko Kovač', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Miguel Herrera', squad: []},
    {id: 'camerun', name: 'Camerún', flag: 'cm', dt: 'Volker Finke', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'Vicente del Bosque', squad: []},
    {id: 'paises_bajos', name: 'Países Bajos', flag: 'nl', dt: 'Louis van Gaal', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Jorge Sampaoli', squad: []},
    {id: 'australia', name: 'Australia', flag: 'au', dt: 'Ange Postecoglou', squad: []},
    {id: 'colombia', name: 'Colombia', flag: 'co', dt: 'José Pékerman', squad: []},
    {id: 'grecia', name: 'Grecia', flag: 'gr', dt: 'Fernando Santos', squad: []},
    {id: 'costa_de_marfil', name: 'Costa de Marfil', flag: 'ci', dt: 'Sabri Lamouchi', squad: []},
    {id: 'japon', name: 'Japón', flag: 'jp', dt: 'Alberto Zaccheroni', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Óscar Washington Tabárez', squad: []},
    {id: 'costa_rica', name: 'Costa Rica', flag: 'cr', dt: 'Jorge Luis Pinto', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Roy Hodgson', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Cesare Prandelli', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Ottmar Hitzfeld', squad: []},
    {id: 'ecuador', name: 'Ecuador', flag: 'ec', dt: 'Reinaldo Rueda', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Didier Deschamps', squad: []},
    {id: 'honduras', name: 'Honduras', flag: 'hn', dt: 'Luis Fernando Suárez', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Alejandro Sabella', squad: []},
    {id: 'bosnia', name: 'Bosnia y Herzegovina', flag: 'ba', dt: 'Safet Sušić', squad: []},
    {id: 'iran', name: 'Irán', flag: 'ir', dt: 'Carlos Queiroz', squad: []},
    {id: 'nigeria', name: 'Nigeria', flag: 'ng', dt: 'Stephen Keshi', squad: []},
    {id: 'alemania', name: 'Alemania', flag: 'de', dt: 'Joachim Löw', squad: []},
    {id: 'portugal', name: 'Portugal', flag: 'pt', dt: 'Paulo Bento', squad: []},
    {id: 'ghana', name: 'Ghana', flag: 'gh', dt: 'James Kwesi Appiah', squad: []},
    {id: 'estados_unidos', name: 'Estados Unidos', flag: 'us', dt: 'Jürgen Klinsmann', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Marc Wilmots', squad: []},
    {id: 'argelia', name: 'Argelia', flag: 'dz', dt: 'Vahid Halilhodžić', squad: []},
    {id: 'rusia', name: 'Rusia', flag: 'ru', dt: 'Fabio Capello', squad: []},
    {id: 'corea_del_sur', name: 'Corea del Sur', flag: 'kr', dt: 'Hong Myung-bo', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/2014.json', JSON.stringify(data, null, 2));
console.log('2014 initialized');
