const fs=require('fs'); const path='app/src/data/copas/champions/1994.json'; const d=JSON.parse(fs.readFileSync(path)); 
const add = (id, sq) => { const tm=d.participants.find(p=>p.id===id); if(tm) tm.squad=sq.map((p,i)=>({no:i+1,...p})); };

add('ia_akranes', [
  {pos:'Portero',name:'Kristján Finnbogi Finnbogason',flag:'is'},
  {pos:'Defensa',name:'Sturlaugur Haraldsson',flag:'is'},
  {pos:'Defensa',name:'Ólafur Thórdarson',flag:'is'},
  {pos:'Defensa',name:'Luca Lúkas Kostić',flag:'rs'},
  {pos:'Defensa',name:'Ólafur Adolfsson',flag:'is'},
  {pos:'Centrocampista',name:'Sigursteinn Gíslason',flag:'is'},
  {pos:'Centrocampista',name:'Alexander Högnason',flag:'is'},
  {pos:'Centrocampista',name:'Haraldur Ingólfsson',flag:'is'},
  {pos:'Centrocampista',name:'Sigurdur Jónsson',flag:'is'},
  {pos:'Delantero',name:'Thórdur Gudjónsson',flag:'is'},
  {pos:'Delantero',name:'Mihajlo Bibercic',flag:'rs'}
]);

add('partizani', [
  {pos:'Portero',name:'Avenir Dani',flag:'al'},
  {pos:'Defensa',name:'Afrim Myftari',flag:'al'},
  {pos:'Defensa',name:'Nordik Ruhi',flag:'al'},
  {pos:'Defensa',name:'Ilir Sillo',flag:'al'},
  {pos:'Defensa',name:'Ilir Shulku',flag:'al'},
  {pos:'Centrocampista',name:'Gentian Lico',flag:'al'},
  {pos:'Centrocampista',name:'Andon Nikolla',flag:'al'},
  {pos:'Centrocampista',name:'Altin Satko',flag:'al'},
  {pos:'Centrocampista',name:'Nikolin Coclli',flag:'al'},
  {pos:'Delantero',name:'Artan Bano',flag:'al'},
  {pos:'Delantero',name:'Edmond Dosti',flag:'al'}
]);

fs.writeFileSync(path, JSON.stringify(d,null,2));
console.log('IA Akranes and Partizani added');
