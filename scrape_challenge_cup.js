const fs = require('fs');

const file = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/escocia_temporadas.json';

const winners = [
  {y: '1990', c: 'Dundee'},
  {y: '1991', c: 'Hamilton Academical'},
  {y: '1992', c: 'Hamilton Academical'},
  {y: '1993', c: 'Falkirk'},
  {y: '1994', c: 'Airdrieonians'},
  {y: '1995', c: 'Stenhousemuir'},
  {y: '1996', c: 'Stranraer'},
  {y: '1997', c: 'Falkirk'},
  {y: '1999', c: 'Alloa Athletic'},
  {y: '2000', c: 'Airdrieonians'},
  {y: '2001', c: 'Airdrieonians'},
  {y: '2002', c: 'Queen of the South'},
  {y: '2003', c: 'Inverness CT'},
  {y: '2004', c: 'Falkirk'},
  {y: '2005', c: 'St Mirren'},
  {y: '2006', c: 'Ross County'},
  {y: '2007', c: 'St Johnstone'},
  {y: '2008', c: 'Airdrie United'},
  {y: '2009', c: 'Dundee'},
  {y: '2010', c: 'Ross County'},
  {y: '2011', c: 'Falkirk'},
  {y: '2012', c: 'Queen of the South'},
  {y: '2013', c: 'Raith Rovers'},
  {y: '2014', c: 'Livingston'},
  {y: '2015', c: 'Rangers'},
  {y: '2016', c: 'Dundee United'},
  {y: '2017', c: 'Inverness CT'},
  {y: '2018', c: 'Ross County'},
  {y: '2019', c: 'Raith Rovers'},
  {y: '2021', c: 'Raith Rovers'},
  {y: '2022', c: 'Hamilton Academical'},
  {y: '2023', c: 'Airdrieonians'}
];

let teps = JSON.parse(fs.readFileSync(file, 'utf8'));

// Eliminar previos de challenge cup si habia basura
teps = teps.filter(t => t.torneo !== 'Scottish Challenge Cup');

winners.forEach(({y, c}) => {
  teps.push({
    id: y + '-scottish-challenge-cup',
    anio: y,
    torneo: 'Scottish Challenge Cup',
    campeon: c,
    tabla_posiciones: []
  });
});

teps.sort((a,b) => {
  let yD = parseInt(a.anio) - parseInt(b.anio);
  if(yD === 0) return a.torneo.localeCompare(b.torneo);
  return yD;
});

fs.writeFileSync(file, JSON.stringify(teps, null, 2), 'utf8');
console.log('Added ' + winners.length + ' Challenge Cup items (HARDCODED)!');
