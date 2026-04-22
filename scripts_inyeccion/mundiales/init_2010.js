import fs from 'fs';

const data = {
  year: 2010,
  host: 'Sudáfrica',
  participants: [
    {id: 'sudafrica', name: 'Sudáfrica', flag: 'za', dt: 'Carlos Alberto Parreira', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Javier Aguirre', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Óscar Washington Tabárez', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Raymond Domenech', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Diego Maradona', squad: []},
    {id: 'nigeria', name: 'Nigeria', flag: 'ng', dt: 'Lars Lagerbäck', squad: []},
    {id: 'corea_del_sur', name: 'Corea del Sur', flag: 'kr', dt: 'Huh Jung-moo', squad: []},
    {id: 'grecia', name: 'Grecia', flag: 'gr', dt: 'Otto Rehhagel', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Fabio Capello', squad: []},
    {id: 'estados_unidos', name: 'Estados Unidos', flag: 'us', dt: 'Bob Bradley', squad: []},
    {id: 'argelia', name: 'Argelia', flag: 'dz', dt: 'Rabah Saâdane', squad: []},
    {id: 'eslovenia', name: 'Eslovenia', flag: 'si', dt: 'Matjaž Kek', squad: []},
    {id: 'alemania', name: 'Alemania', flag: 'de', dt: 'Joachim Löw', squad: []},
    {id: 'australia', name: 'Australia', flag: 'au', dt: 'Pim Verbeek', squad: []},
    {id: 'serbia', name: 'Serbia', flag: 'rs', dt: 'Radomir Antić', squad: []},
    {id: 'ghana', name: 'Ghana', flag: 'gh', dt: 'Milovan Rajevac', squad: []},
    {id: 'paises_bajos', name: 'Países Bajos', flag: 'nl', dt: 'Bert van Marwijk', squad: []},
    {id: 'dinamarca', name: 'Dinamarca', flag: 'dk', dt: 'Morten Olsen', squad: []},
    {id: 'japon', name: 'Japón', flag: 'jp', dt: 'Takeshi Okada', squad: []},
    {id: 'camerun', name: 'Camerún', flag: 'cm', dt: 'Paul Le Guen', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Marcello Lippi', squad: []},
    {id: 'paraguay', name: 'Paraguay', flag: 'py', dt: 'Gerardo Martino', squad: []},
    {id: 'nueva_zelanda', name: 'Nueva Zelanda', flag: 'nz', dt: 'Ricki Herbert', squad: []},
    {id: 'eslovaquia', name: 'Eslovaquia', flag: 'sk', dt: 'Vladimír Weiss', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Dunga', squad: []},
    {id: 'corea_del_norte', name: 'Corea del Norte', flag: 'kp', dt: 'Kim Jong-hun', squad: []},
    {id: 'costa_de_marfil', name: 'Costa de Marfil', flag: 'ci', dt: 'Sven-Göran Eriksson', squad: []},
    {id: 'portugal', name: 'Portugal', flag: 'pt', dt: 'Carlos Queiroz', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'Vicente del Bosque', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Ottmar Hitzfeld', squad: []},
    {id: 'honduras', name: 'Honduras', flag: 'hn', dt: 'Reinaldo Rueda', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Marcelo Bielsa', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/2010.json', JSON.stringify(data, null, 2));
console.log('2010 initialized');
