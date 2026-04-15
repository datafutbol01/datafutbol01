const fs=require('fs'); 
const file='app/src/data/copas/champions/1994.json'; 
const d=JSON.parse(fs.readFileSync(file));

const pr = d.bracket.preliminary;
const gm = {
  'skonto': [ 
    {leg:'Ida', g:['Samir Žulić 32` (OLI)']}, 
    {leg:'Vuelta', g:['Igors Trofimovs 65` (SKO)']} 
  ],
  'cwmbran_town': [ 
    {leg:'Ida', g:['Francis Ford 26`, 27` (CWM)', 'Simon King 60` (pen.) (CWM)', 'Pat Morley 62` (COR)', 'John Glynn 73` (COR)']}, 
    {leg:'Vuelta', g:['Pat Morley 77`, 85` (COR)', 'Francis Ford 5` (CWM)']} 
  ],
  'hjk': [ 
    {leg:'Ida', g:['Antti Heinola 16` (HJK)', 'Andrei Borissov 16` (NOR)']}, 
    {leg:'Vuelta', g:['Sami Ylä-Jussila 81` (HJK)']} 
  ],
  'b68_toftir': [ 
    {leg:'Ida', g:['Igor Cvitanović 14` (CRO)', 'Goran Vlaović 41` (CRO)', 'Željko Adžić 43`, 75` (CRO)', 'Zoran Živković 87` (CRO)']}, 
    {leg:'Vuelta', g:['Zoran Živković 18`, 58` (CRO)', 'Joško Jeličić 23`, 50`, 54` (CRO)', 'Željko Adžić 88` (CRO)']} 
  ],
  'venir_beggen': [ 
    {leg:'Ida', g:['Bjørn Otto Bragstad 8` (ROS)', 'Kalle Løken 54` (ROS)']}, 
    {leg:'Vuelta', g:['Bent Skammelsrud 69` (ROS)']} 
  ],
  'partizani': [ 
    {leg:'Ida', g:[]}, 
    {leg:'Vuelta', g:['Alexander Högnason 70` (ÍA)', 'Þórður Guðjónsson 72`, 80` (ÍA)']} 
  ],
  'omonia': [ 
    {leg:'Ida', g:['Davit Kizilashvili 15`, 61` (OMO)', 'Ratinho 62` (AAR)']}, 
    {leg:'Vuelta', g:['Martin Rössli 50` (AAR)', 'Ratinho 74` (AAR)']} 
  ],
  'zimbru': [ 
    {leg:'Ida', g:['Radu Rebeja 52` (ZIM)', 'Ronen Harazi 69` (BEI)']}, 
    {leg:'Vuelta', g:['Ronen Harazi 37` (BEI)', 'Eli Ohana 55` (pen.) (BEI)']} 
  ],
  'ekranas': [ 
    {leg:'Ida', g:['John Buttigieg 42` (FLO)']}, 
    {leg:'Vuelta', g:['John Buttigieg 51` (FLO)']} 
  ],
  'dinamo_tbilisi': [ 
    {leg:'Ida', g:['Shota Arveladze 10` (DTB)', 'Mikheil Kavelashvili 60` (DTB)', 'Garry Haylock 50` (LIN)']}, 
    {leg:'Vuelta', g:['Garry Haylock 69` (LIN)', 'Shota Arveladze 30` (DTB)']} 
  ]
};

if (pr) {
  pr.forEach(match => {
    const data = gm[match.id1];
    if(data && match.details) {
      match.details.forEach(leg => {
        const matchLeg = data.find(l=>l.leg===leg.leg);
        if(matchLeg) leg.goals = matchLeg.g;
      });
    }
  });
}

fs.writeFileSync(file, JSON.stringify(d,null,2));
console.log('Goals added');
