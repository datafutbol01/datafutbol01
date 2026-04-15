const fs=require('fs'); const path='app/src/data/copas/champions/1994.json'; const d=JSON.parse(fs.readFileSync(path)); 
const add = (id, sq) => { const tm=d.participants.find(p=>p.id===id); if(tm) tm.squad=sq.map((p,i)=>({no:i+1,...p})); };

add('dinamo_minsk', [
  {pos:'Portero',name:'Andrei Satsunkevich',flag:'by'},
  {pos:'Portero',name:'Gennady Tumilovich',flag:'by'},
  {pos:'Defensa',name:'Aleksandr Lukhvich',flag:'by'},
  {pos:'Defensa',name:'Sergei Kashentsev',flag:'by'},
  {pos:'Defensa',name:'Sergey Yakhimovich',flag:'by'},
  {pos:'Defensa',name:'Aleksandr Taikov',flag:'by'},
  {pos:'Defensa',name:'Andrei Ostrovski',flag:'by'},
  {pos:'Centrocampista',name:'Yuri Zhuravel',flag:'by'},
  {pos:'Centrocampista',name:'Mikhail Smirnov',flag:'by'},
  {pos:'Centrocampista',name:'Sergey Gerasimets',flag:'by'},
  {pos:'Centrocampista',name:'Aleksandr Khatskevich',flag:'by'},
  {pos:'Centrocampista',name:'Valyantsin Byalkevich',flag:'by'}, 
  {pos:'Delantero',name:'Oleg Chernyavski',flag:'by'},
  {pos:'Delantero',name:'Valery Velichko',flag:'by'},
  {pos:'Delantero',name:'Yuriy Shukanov',flag:'by'},
  {pos:'Delantero',name:'Oleg Putilo',flag:'by'}
]);

fs.writeFileSync(path, JSON.stringify(d,null,2));
console.log('Dinamo Minsk added');
