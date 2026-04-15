import fs from 'fs';

const data = {
  year: 1978,
  host: 'Argentina',
  participants: [
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'César Luis Menotti', squad: []},
    {id: 'paises_bajos', name: 'Países Bajos', flag: 'nl', dt: 'Ernst Happel', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Cláudio Coutinho', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Enzo Bearzot', squad: []},
    {id: 'alemania_federal', name: 'Alemania Federal', flag: 'de', dt: 'Helmut Schön', squad: []},
    {id: 'polonia', name: 'Polonia', flag: 'pl', dt: 'Jacek Gmoch', squad: []},
    {id: 'austria', name: 'Austria', flag: 'at', dt: 'Helmut Senekowitsch', squad: []},
    {id: 'peru', name: 'Perú', flag: 'pe', dt: 'Marcos Calderón', squad: []},
    {id: 'tunez', name: 'Túnez', flag: 'tn', dt: 'Abdelmajid Chetali', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'László Kubala', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Michel Hidalgo', squad: []},
    {id: 'escocia', name: 'Escocia', flag: 'gb-sct', dt: 'Ally MacLeod', squad: []},
    {id: 'iran', name: 'Irán', flag: 'ir', dt: 'Heshmat Mohajerani', squad: []},
    {id: 'hungria', name: 'Hungría', flag: 'hu', dt: 'Lajos Baróti', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'José Antonio Roca', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'Georg Ericson', squad: []}
  ],
  groups: {},
  secondStageGroups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1978.json', JSON.stringify(data, null, 2));
console.log('1978 initialized');
