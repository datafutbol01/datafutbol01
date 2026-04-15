import fs from 'fs';

const data = {
  year: 1930,
  host: 'Uruguay',
  participants: [
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Alberto Suppici', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Francisco Olazar', squad: []},
    {id: 'estados_unidos', name: 'Estados Unidos', flag: 'us', dt: 'Robert Millar', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Boško Simonović', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'György Orth', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Píndaro de Carvalho', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Raoul Caudron', squad: []},
    {id: 'rumania', name: 'Rumania', flag: 'ro', dt: 'Costel Rădulescu', squad: []},
    {id: 'paraguay', name: 'Paraguay', flag: 'py', dt: 'José Durand Laguna', squad: []},
    {id: 'peru', name: 'Perú', flag: 'pe', dt: 'Paco Bru', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Héctor Goetinck', squad: []},
    {id: 'bolivia', name: 'Bolivia', flag: 'bo', dt: 'Ulises Saucedo', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Juan Luque de Serrallonga', squad: []}
  ],
  groups: {},
  bracket: null,
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1930.json', JSON.stringify(data, null, 2));
console.log('1930 initialized');
