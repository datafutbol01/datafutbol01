const fs = require('fs');
const path = 'c:\\Users\\gonza\\futbolhistoria\\clubes\\app\\src\\data\\copas\\champions\\1994.json';

const rawData = fs.readFileSync(path, 'utf8');
const data = JSON.parse(rawData);

const additions = {
  milan: [
    { no: 16, pos: "Defensa", name: "Franco Baresi", flag: "it" },
    { no: 17, pos: "Defensa", name: "Alessandro Costacurta", flag: "it" },
    { no: 18, pos: "Delantero", name: "Jean-Pierre Papin", flag: "fr" },
    { no: 19, pos: "Delantero", name: "Marco van Basten", flag: "nl" },
    { no: 20, pos: "Delantero", name: "Brian Laudrup", flag: "dk" },
    { no: 21, pos: "Delantero", name: "Florin Răducioiu", flag: "ro" },
    { no: 22, pos: "Centrocampista", name: "Fernando De Napoli", flag: "it" },
    { no: 23, pos: "Defensa", name: "Alessandro Orlando", flag: "it" },
    { no: 25, pos: "Portero", name: "Francesco Antonioli", flag: "it" }
  ],
  barcelona: [
    { no: 17, pos: "Centrocampista", name: "Michael Laudrup", flag: "dk" },
    { no: 18, pos: "Delantero", name: "Julio Salinas", flag: "es" },
    { no: 19, pos: "Centrocampista", name: "Óscar García", flag: "es" },
    { no: 20, pos: "Delantero", name: "Quique Estebaranz", flag: "es" },
    { no: 21, pos: "Defensa", name: "Lluís Carreras", flag: "es" },
    { no: 22, pos: "Centrocampista", name: "Goran Vučević", flag: "hr" },
    { no: 23, pos: "Portero", name: "Jesús Angoy", flag: "es" }
  ],
  porto: [
    { no: 17, pos: "Centrocampista", name: "Rui Filipe", flag: "pt" },
    { no: 18, pos: "Defensa", name: "Bandeirinha", flag: "pt" },
    { no: 19, pos: "Defensa", name: "Zé Carlos", flag: "pt" },
    { no: 20, pos: "Centrocampista", name: "Ion Timofte", flag: "ro" },
    { no: 21, pos: "Delantero", name: "Vinha", flag: "pt" },
    { no: 22, pos: "Centrocampista", name: "Jorge Couto", flag: "pt" }
  ],
  monaco: [
    { no: 17, pos: "Defensa", name: "Manuel Dos Santos", flag: "fr" },
    { no: 18, pos: "Centrocampista", name: "Laurent Viaud", flag: "fr" },
    { no: 19, pos: "Delantero", name: "Amara Simba", flag: "fr" },
    { no: 20, pos: "Delantero", name: "Dan Petersen", flag: "dk" }
  ],
  werder_bremen: [
    { no: 17, pos: "Defensa", name: "Thomas Schaaf", flag: "de" },
    { no: 18, pos: "Delantero", name: "Frank Ordenewitz", flag: "de" },
    { no: 19, pos: "Centrocampista", name: "Lars Unger", flag: "de" }
  ],
  anderlecht: [
    { no: 17, pos: "Centrocampista", name: "Marc Degryse", flag: "be" },
    { no: 18, pos: "Centrocampista", name: "Charly Musonda", flag: "zm" },
    { no: 19, pos: "Delantero", name: "Yaw Preko", flag: "gh" },
    { no: 20, pos: "Delantero", name: "Philip Osondu", flag: "ng" }
  ],
  spartak_moscow: [
    { no: 12, pos: "Centrocampista", name: "Andrey Tikhonov", flag: "ru" },
    { no: 13, pos: "Delantero", name: "Mukhsin Mukhamadiev", flag: "tj" },
    { no: 14, pos: "Centrocampista", name: "Igor Lediakhov", flag: "ru" },
    { no: 15, pos: "Centrocampista", name: "Valery Kechinov", flag: "ru" }
  ],
  galatasaray: [
    { no: 12, pos: "Centrocampista", name: "Okan Buruk", flag: "tr" },
    { no: 13, pos: "Delantero", name: "Kubilay Türkyılmaz", flag: "ch" },
    { no: 14, pos: "Defensa", name: "Yusuf Altıntaş", flag: "tr" },
    { no: 15, pos: "Centrocampista", name: "Ergün Penbe", flag: "tr" }
  ]
};

data.participants.forEach(p => {
  if (additions[p.id]) {
    p.squad = p.squad.concat(additions[p.id]);
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('Squads updated completely.');
