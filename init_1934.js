import fs from 'fs';

const data = {
  year: 1934,
  host: 'Italia',
  participants: [
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Vittorio Pozzo', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Karel Petrů', squad: []},
    {id: 'alemania', name: 'Alemania', flag: 'de', dt: 'Otto Nerz', squad: []},
    {id: 'austria', name: 'Austria', flag: 'at', dt: 'Hugo Meisl', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'Amadeo García', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Ödön Nádas', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Heini Müller', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'József Nagy', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Gaston Barreau', squad: []},
    {id: 'paises_bajos', name: 'Países Bajos', flag: 'nl', dt: 'Bob Glendenning', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Felipe Pascucci', squad: []},
    {id: 'rumania', name: 'Rumania', flag: 'ro', dt: 'Josef Uridil', squad: []},
    {id: 'egipto', name: 'Egipto', flag: 'eg', dt: 'James McCrae', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Luís Vinhaes', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Héctor Goetinck', squad: []},
    {id: 'estados_unidos', name: 'Estados Unidos', flag: 'us', dt: 'David Gould', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1934.json', JSON.stringify(data, null, 2));
console.log('1934 initialized');
