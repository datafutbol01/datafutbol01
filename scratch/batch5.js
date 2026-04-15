const fs=require('fs'); const path='app/src/data/copas/champions/1994.json'; const d=JSON.parse(fs.readFileSync(path)); 
const add = (id, sq) => { const tm=d.participants.find(p=>p.id===id); if(tm) tm.squad=sq.map((p,i)=>({no:i+1,...p})); };

add('omonia', [
  {pos:'Portero',name:'Andreas Charitou',flag:'cy'},
  {pos:'Portero',name:'Christos Christou',flag:'cy'},
  {pos:'Defensa',name:'Kostakis Konstantinou',flag:'cy'},
  {pos:'Defensa',name:'Evagoras Christofi',flag:'cy'},
  {pos:'Defensa',name:'Georgios Christodoulou',flag:'cy'},
  {pos:'Centrocampista',name:'Panikos Xiouroupas',flag:'cy'},
  {pos:'Centrocampista',name:'Davit Kizilashvili',flag:'ge'},
  {pos:'Centrocampista',name:'Nedim Tutic',flag:'ba'},
  {pos:'Delantero',name:'Gocha Gogrichiani',flag:'ge'}
]);

add('linfield', [
  {pos:'Portero',name:'Wesley Lamont',flag:'gb-nir'},
  {pos:'Defensa',name:'Alan Dornan',flag:'gb-nir'},  
  {pos:'Defensa',name:'John McConnell',flag:'gb-nir'},
  {pos:'Defensa',name:'Jeff Spiers',flag:'gb-nir'},
  {pos:'Defensa',name:'Gary Peebles',flag:'gb-sct'},
  {pos:'Centrocampista',name:'Ritchie Johnston',flag:'gb-nir'},
  {pos:'Centrocampista',name:'Garry Haylock',flag:'gb-eng'},
  {pos:'Centrocampista',name:'Dessie Gorman',flag:'ie'},
  {pos:'Centrocampista',name:'Noel Bailie',flag:'gb-nir'},
  {pos:'Centrocampista',name:'Stephen Doherty',flag:'gb-nir'},
  {pos:'Delantero',name:'Colin Easton',flag:'gb-nir'}
]);

add('b68_toftir', [
  {pos:'Portero',name:'Olaf Magnussen',flag:'fo'},
  {pos:'Defensa',name:'Ingolf Petersen',flag:'fo'},
  {pos:'Defensa',name:'Jóhannus Danielsen',flag:'fo'},
  {pos:'Defensa',name:'Oleif Joensen',flag:'fo'},
  {pos:'Defensa',name:'Eydfinn Olsen',flag:'fo'},
  {pos:'Centrocampista',name:'Jógvan Martin Olsen',flag:'fo'},
  {pos:'Centrocampista',name:'Signar Johannesen',flag:'fo'},
  {pos:'Centrocampista',name:'Aksel Højgaard',flag:'fo'},
  {pos:'Centrocampista',name:'Øssur Hansen',flag:'fo'},
  {pos:'Centrocampista',name:'Hans Hansen',flag:'fo'},
  {pos:'Delantero',name:'John Petersen',flag:'fo'},
  {pos:'Delantero',name:'Jákup Djurhuus',flag:'fo'},
  {pos:'Delantero',name:'Páll Didriksen',flag:'fo'}
]);

add('norma_tallinn', [
  {pos:'Portero',name:'C. Vanakesa',flag:'ee'},
  {pos:'Defensa',name:'Kurilov',flag:'ee'},  
  {pos:'Defensa',name:'Bragin',flag:'ee'},
  {pos:'Defensa',name:'Uryupin',flag:'ee'},
  {pos:'Defensa',name:'Vinogradov',flag:'ee'},
  {pos:'Centrocampista',name:'Chmil',flag:'ee'},
  {pos:'Centrocampista',name:'Belokhvostov',flag:'ee'},
  {pos:'Centrocampista',name:'Vilderson',flag:'ee'},
  {pos:'Centrocampista',name:'Sergei Usoltsev',flag:'ee'},
  {pos:'Centrocampista',name:'Janno Grünmann',flag:'ee'},
  {pos:'Delantero',name:'Urmas Liivamaa',flag:'ee'},
  {pos:'Delantero',name:'Juri Volkov',flag:'ee'},
  {pos:'Delantero',name:'Juri Tšurilkin',flag:'ee'}
]);

add('venir_beggen', [
  {pos:'Portero',name:'Koch',flag:'lu'},
  {pos:'Defensa',name:'Ferron',flag:'lu'},
  {pos:'Defensa',name:'Moreira De Carvalho',flag:'lu'},
  {pos:'Defensa',name:'Vanek',flag:'lu'},
  {pos:'Defensa',name:'Wilhelm',flag:'lu'},
  {pos:'Centrocampista',name:'Dos Santos Lopes',flag:'lu'},
  {pos:'Centrocampista',name:'Krahen',flag:'lu'},
  {pos:'Centrocampista',name:'Scholten',flag:'lu'},
  {pos:'Centrocampista',name:'Goergen',flag:'lu'},
  {pos:'Centrocampista',name:'Krings',flag:'lu'},
  {pos:'Centrocampista',name:'Peters',flag:'lu'},
  {pos:'Centrocampista',name:'Jentgen',flag:'lu'},
  {pos:'Delantero',name:'Holtz',flag:'lu'}
]);

add('zimbru', [
  {pos:'Portero',name:'Denis Botnaras',flag:'md'},
  {pos:'Defensa',name:'Boris Cebotari',flag:'md'},
  {pos:'Defensa',name:'C. Caras',flag:'md'},
  {pos:'Defensa',name:'Ion Testemitanu',flag:'md'},
  {pos:'Defensa',name:'Radu Rebeja',flag:'md'},
  {pos:'Centrocampista',name:'Alexandru Nani',flag:'md'},
  {pos:'Centrocampista',name:'Alexandru Curtean',flag:'md'},
  {pos:'Centrocampista',name:'Uzun',flag:'md'},
  {pos:'Centrocampista',name:'Miterev',flag:'md'},
  {pos:'Delantero',name:'Alexandru Spiridon',flag:'md'},
  {pos:'Delantero',name:'Serghei Cleșcenco',flag:'md'}
]);

add('beitar_jerusalem', [
  {pos:'Portero',name:'Roni Asayag',flag:'il'},
  {pos:'Defensa',name:'Ehud Kahlon',flag:'il'},
  {pos:'Defensa',name:'Sergey Tretyak',flag:'ua'},
  {pos:'Defensa',name:'Salik Levy',flag:'il'},
  {pos:'Defensa',name:'Denis Kolotovkine',flag:'ru'},
  {pos:'Defensa',name:'Aviel Azulai',flag:'il'},
  {pos:'Centrocampista',name:'Vladimir Grechnov',flag:'ru'},
  {pos:'Centrocampista',name:'Mizrahi',flag:'il'},
  {pos:'Centrocampista',name:'Elharar',flag:'il'},
  {pos:'Centrocampista',name:'Kadosh',flag:'il'},
  {pos:'Centrocampista',name:'Yaakov Schwartz',flag:'il'},
  {pos:'Centrocampista',name:'Nissin Kahila',flag:'il'},
  {pos:'Centrocampista',name:'Ilan Maymon',flag:'il'},
  {pos:'Centrocampista',name:'Schweig',flag:'il'},
  {pos:'Centrocampista',name:'Mesubi',flag:'il'},
  {pos:'Delantero',name:'Ronen Harazi',flag:'il'},
  {pos:'Delantero',name:'Eli Ohana',flag:'il'}
]);

fs.writeFileSync(path, JSON.stringify(d,null,2));
console.log('Batch 5 combined added');
