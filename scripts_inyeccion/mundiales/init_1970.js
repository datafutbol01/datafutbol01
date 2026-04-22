import fs from 'fs';

const data = {
  year: 1970,
  host: 'México',
  participants: [
    {id: 'urs', name: 'Unión Soviética', flag: 'su', dt: 'Gavril Kachalin', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Raúl Cárdenas', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Raymond Goethals', squad: []},
    {id: 'el_salvador', name: 'El Salvador', flag: 'sv', dt: 'Hernán Carrasco', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Ferruccio Valcareggi', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Juan Hohberg', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'Orvar Bergmark', squad: []},
    {id: 'israel', name: 'Israel', flag: 'il', dt: 'Emmanuel Scheffer', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Mário Zagallo', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Alf Ramsey', squad: []},
    {id: 'rumania', name: 'Rumania', flag: 'ro', dt: 'Angelo Niculescu', squad: []},
    {id: 'checoslovaquia', name: 'Checoslovaquia', flag: 'cz', dt: 'Josef Marko', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Helmut Schön', squad: []},
    {id: 'peru', name: 'Perú', flag: 'pe', dt: 'Didi', squad: []},
    {id: 'bulgaria', name: 'Bulgaria', flag: 'bg', dt: 'Stefan Bozhkov', squad: []},
    {id: 'marruecos', name: 'Marruecos', flag: 'ma', dt: 'Blagoje Vidinić', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1970.json', JSON.stringify(data, null, 2));
console.log('1970 initialized');
