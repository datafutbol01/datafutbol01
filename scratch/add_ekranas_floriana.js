const fs=require('fs'); const path='app/src/data/copas/champions/1994.json'; const d=JSON.parse(fs.readFileSync(path)); 
const add = (id, sq) => { const tm=d.participants.find(p=>p.id===id); if(tm) tm.squad=sq.map((p,i)=>({no:i+1,...p})); };

add('ekranas', [
  {pos:'Portero',name:'Arvydas Skrupskis',flag:'lt'},
  {pos:'Defensa',name:'Audrius Banevičius',flag:'lt'},
  {pos:'Defensa',name:'Andrius Staliūnas',flag:'lt'},
  {pos:'Defensa',name:'Raimondas Petrukaitis',flag:'lt'},
  {pos:'Defensa',name:'Darius Butkus',flag:'lt'},
  {pos:'Defensa',name:'Kęstutis Aleksandravičius',flag:'lt'},
  {pos:'Defensa',name:'Albertas Klimavičius',flag:'lt'},
  {pos:'Centrocampista',name:'Linas Niurka',flag:'lt'},
  {pos:'Centrocampista',name:'Irmantas Stumbrys',flag:'lt'},
  {pos:'Centrocampista',name:'Vytautas Apanavičius',flag:'lt'},
  {pos:'Delantero',name:'Vaidotas Šlekys',flag:'lt'},
  {pos:'Centrocampista',name:'Egidijus Juzėnas',flag:'lt'}
]);

add('floriana', [
  {pos:'Portero',name:'David Cluett',flag:'mt'},
  {pos:'Defensa',name:'Pierre Brincat',flag:'mt'},
  {pos:'Defensa',name:'Richard Buhagiar',flag:'mt'},
  {pos:'Defensa',name:'Jesmond Delia',flag:'mt'},
  {pos:'Defensa',name:'Kim Wright',flag:'gb-eng'},
  {pos:'Defensa',name:'John Buttigieg',flag:'mt'},
  {pos:'Centrocampista',name:'Albert Busuttil',flag:'mt'},
  {pos:'Centrocampista',name:'Charles Sciberras',flag:'mt'},
  {pos:'Centrocampista',name:'Zoran Popović',flag:'rs'},
  {pos:'Centrocampista',name:'Mark Miller',flag:'gb-eng'},
  {pos:'Delantero',name:'Denis Cauchi',flag:'mt'},
  {pos:'Delantero',name:'Brian Crawley',flag:'gb-eng'},
  {pos:'Delantero',name:'Alan Marlow',flag:'mt'},
  {pos:'Delantero',name:'Colin Caruana',flag:'mt'}
]);

fs.writeFileSync(path, JSON.stringify(d,null,2));
console.log('Ekranas and Floriana added');
