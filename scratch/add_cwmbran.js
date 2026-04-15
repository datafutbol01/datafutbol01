const fs=require('fs'); const path='app/src/data/copas/champions/1994.json'; const d=JSON.parse(fs.readFileSync(path)); 
const add = (id, sq) => { const tm=d.participants.find(p=>p.id===id); if(tm) tm.squad=sq.map((p,i)=>({no:i+1,...p})); };

add('cwmbran_town', [
  {pos:'Portero',name:"Pat O'Hagan",flag:'gb-wls'},
  {pos:'Defensa',name:'David Burrows',flag:'gb-wls'},
  {pos:'Defensa',name:'Simon King',flag:'gb-wls'},
  {pos:'Defensa',name:'Michael Dicks',flag:'gb-wls'},
  {pos:'Defensa',name:'Jimmy Blackie',flag:'gb-wls'},
  {pos:'Defensa',name:'Michael Copeman',flag:'gb-wls'},
  {pos:'Defensa',name:'Philip McNeil',flag:'gb-wls'},
  {pos:'Defensa',name:'Norman Parselle',flag:'gb-wls'},
  {pos:'Centrocampista',name:'Kevin Payne',flag:'gb-wls'},
  {pos:'Centrocampista',name:'Sean Wharton',flag:'gb-wls'},
  {pos:'Centrocampista',name:'John Powell',flag:'gb-wls'},
  {pos:'Centrocampista',name:'Thomas John Powell',flag:'gb-wls'},
  {pos:'Delantero',name:'Wayne Goodridge',flag:'gb-eng'},
  {pos:'Delantero',name:'Francis Ford',flag:'gb-wls'},
  {pos:'Delantero',name:'Andrew Clissold',flag:'gb-wls'}
]);

fs.writeFileSync(path, JSON.stringify(d,null,2));
console.log('Cwmbran Town added');
