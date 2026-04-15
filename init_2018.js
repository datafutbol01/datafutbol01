import fs from 'fs';

const data = {
  year: 2018,
  host: 'Rusia',
  participants: [
    {id: 'rusia', name: 'Rusia', flag: 'ru', dt: 'Stanislav Cherchesov', squad: []},
    {id: 'arabia_saudita', name: 'Arabia Saudita', flag: 'sa', dt: 'Juan Antonio Pizzi', squad: []},
    {id: 'egipto', name: 'Egipto', flag: 'eg', dt: 'Héctor Cúper', squad: []},
    {id: 'uruguay', name: 'Uruguay', flag: 'uy', dt: 'Óscar Washington Tabárez', squad: []},
    {id: 'portugal', name: 'Portugal', flag: 'pt', dt: 'Fernando Santos', squad: []},
    {id: 'espana', name: 'España', flag: 'es', dt: 'Fernando Hierro', squad: []},
    {id: 'marruecos', name: 'Marruecos', flag: 'ma', dt: 'Hervé Renard', squad: []},
    {id: 'iran', name: 'Irán', flag: 'ir', dt: 'Carlos Queiroz', squad: []},
    {id: 'francia', name: 'Francia', flag: 'fr', dt: 'Didier Deschamps', squad: []},
    {id: 'australia', name: 'Australia', flag: 'au', dt: 'Bert van Marwijk', squad: []},
    {id: 'peru', name: 'Perú', flag: 'pe', dt: 'Ricardo Gareca', squad: []},
    {id: 'dinamarca', name: 'Dinamarca', flag: 'dk', dt: 'Åge Hareide', squad: []},
    {id: 'argentina', name: 'Argentina', flag: 'ar', dt: 'Jorge Sampaoli', squad: []},
    {id: 'islandia', name: 'Islandia', flag: 'is', dt: 'Heimir Hallgrímsson', squad: []},
    {id: 'croacia', name: 'Croacia', flag: 'hr', dt: 'Zlatko Dalić', squad: []},
    {id: 'nigeria', name: 'Nigeria', flag: 'ng', dt: 'Gernot Rohr', squad: []},
    {id: 'brasil', name: 'Brasil', flag: 'br', dt: 'Tite', squad: []},
    {id: 'suiza', name: 'Suiza', flag: 'ch', dt: 'Vladimir Petković', squad: []},
    {id: 'costa_rica', name: 'Costa Rica', flag: 'cr', dt: 'Óscar Ramírez', squad: []},
    {id: 'serbia', name: 'Serbia', flag: 'rs', dt: 'Mladen Krstajić', squad: []},
    {id: 'alemania', name: 'Alemania', flag: 'de', dt: 'Joachim Löw', squad: []},
    {id: 'mexico', name: 'México', flag: 'mx', dt: 'Juan Carlos Osorio', squad: []},
    {id: 'suecia', name: 'Suecia', flag: 'se', dt: 'Janne Andersson', squad: []},
    {id: 'corea_del_sur', name: 'Corea del Sur', flag: 'kr', dt: 'Shin Tae-yong', squad: []},
    {id: 'belgica', name: 'Bélgica', flag: 'be', dt: 'Roberto Martínez', squad: []},
    {id: 'panama', name: 'Panamá', flag: 'pa', dt: 'Hernán Darío Gómez', squad: []},
    {id: 'tunez', name: 'Túnez', flag: 'tn', dt: 'Nabil Maâloul', squad: []},
    {id: 'inglaterra', name: 'Inglaterra', flag: 'gb-eng', dt: 'Gareth Southgate', squad: []},
    {id: 'polonia', name: 'Polonia', flag: 'pl', dt: 'Adam Nawałka', squad: []},
    {id: 'senegal', name: 'Senegal', flag: 'sn', dt: 'Aliou Cissé', squad: []},
    {id: 'colombia', name: 'Colombia', flag: 'co', dt: 'José Pékerman', squad: []},
    {id: 'japon', name: 'Japón', flag: 'jp', dt: 'Akira Nishino', squad: []}
  ],
  groups: {},
  bracket: {},
  stats: {}
};

fs.writeFileSync('app/src/data/mundiales/2018.json', JSON.stringify(data, null, 2));
console.log('2018 initialized');
