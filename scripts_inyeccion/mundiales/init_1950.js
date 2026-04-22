import fs from 'fs';

const data = {
  year: 1950,
  host: 'Brasil',
  participants: [
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Flávio Costa', squad: []},
    {id: 'yugoslavia', name: 'Yugoslavia', flag: 'yu', dt: 'Milorad Arsenijević', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Franco Andreoli', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Octavio Vial', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'Guillermo Eizaguirre', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Walter Winterbottom', squad: []},
    {id: 'chile', name: 'Chile', flag: 'cl', dt: 'Alberto Buccicardi', squad: []},
    {id: 'estados_unidos', name: 'Estados Unidos', flag: 'us', dt: 'William Jeffrey', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'George Raynor', squad: []},
    {id: 'italia', name: 'Italia', flag: 'it', dt: 'Ferruccio Novo', squad: []},
    {id: 'paraguay', name: 'Paraguay', flag: 'py', dt: 'Manuel Fleitas Solich', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Juan López', squad: []},
    {id: 'bolivia', name: 'Bolivia', flag: 'bo', dt: 'Mario Pretto', squad: []}
  ],
  groups: {},
  bracket: null,
  finalGroup: null,
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/1950.json', JSON.stringify(data, null, 2));
console.log('1950 initialized');
