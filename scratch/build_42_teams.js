const fs = require('fs');
const path = 'c:\\Users\\gonza\\futbolhistoria\\clubes\\app\\src\\data\\copas\\champions\\1994.json';

const rawData = fs.readFileSync(path, 'utf8');
const data = JSON.parse(rawData);

// Generate 11 dummy/historical players fast
const mkSquad = (flag, pNames) => pNames.map((n, i) => ({ 
  no: i+1, 
  pos: i===0?"Portero":i<5?"Defensa":i<9?"Centrocampista":"Delantero", 
  name: n, 
  flag: flag
}));

const missingTeams = [
  { id: "manchester-united", name: "Manchester United", country: "gb-eng", flag: "gb-eng",
    squad: mkSquad("gb-eng", ["Peter Schmeichel (dk)", "Denis Irwin (ie)", "Steve Bruce", "Gary Pallister", "Paul Parker", "Roy Keane (ie)", "Paul Ince", "Ryan Giggs (gb-wls)", "Andrei Kanchelskis (ru)", "Eric Cantona (fr)", "Mark Hughes (gb-wls)"]) },
  { id: "rangers", name: "Rangers FC", country: "gb-sct", flag: "gb-sct",
    squad: mkSquad("gb-sct", ["Andy Goram", "Richard Gough", "Dave McPherson", "John Brown", "Stuart McCall", "Ian Durrant", "Ian Ferguson", "Trevor Steven (gb-eng)", "Pieter Huistra (nl)", "Mark Hateley (gb-eng)", "Ally McCoist"]) },
  { id: "dynamo_kyiv", name: "Dynamo Kyiv", country: "ua", flag: "ua",
    squad: mkSquad("ua", ["Igor Kutepov", "Oleh Luzhnyi", "Serhiy Shmatovalenko", "Vladyslav Vashchuk", "Serhiy Mizin", "Yuriy Maksymov", "Vitaliy Kosovskyi", "Pavel Shkapenko", "Serhiy Rebrov", "Viktor Leonenko", "Andriy Khomyn"]) },
  { id: "feyenoord", name: "Feyenoord", country: "nl", flag: "nl",
    squad: mkSquad("nl", ["Ed de Goey", "John de Wolf", "Errol Refos", "Ruud Heus", "Peter Bosz", "Rob Witschge", "Gaston Taument", "Arnold Scholten", "Regi Blinker", "John van Loen", "Mike Obiku (ng)"]) },
  { id: "sparta_praha", name: "Sparta Praha", country: "cz", flag: "cz",
    squad: mkSquad("cz", ["Petr Kouba", "Michal Horňák", "Jiří Novotný", "Tomáš Votava", "Pavel Nedvěd", "Martin Frýdek", "Jiří Němec", "Zdeněk Svoboda", "Jan Sopko", "Horst Siegl", "Lumír Mistr"]) },
  { id: "levski_sofia", name: "Levski Sofia", country: "bg", flag: "bg",
    squad: mkSquad("bg", ["Plamen Nikolov", "Emil Kremenliev", "Gosho Ginchev", "Tsanko Tsvetanov", "Ilian Iliev", "Daniel Borimirov", "Zlatko Yankov", "Georgi Slavchev", "Nasko Sirakov", "Petar Aleksandrov", "Velko Yotov"]) },
  { id: "steaua", name: "Steaua București", country: "ro", flag: "ro",
    squad: mkSquad("ro", ["Dumitru Stângaciu", "Dan Petrescu", "Daniel Prodan", "Anton Doboș", "Iulian Filipescu", "Constantin Gâlcă", "Basarab Panduru", "Ilie Dumitrescu", "Ion Vlădoiu", "Marius Lăcătuș", "Adrian Ilie"]) },
  { id: "dinamo_zagreb", name: "Croatia Zagreb", country: "hr", flag: "hr",
    squad: mkSquad("hr", ["Dražen Ladić", "Dževad Turković", "Goran Jurić", "Zoran Mamić", "Damir Lesjak", "Sejad Halilović (ba)", "Josip Gašpar", "Mario Stanić", "Igor Cvitanović", "Goran Vlaović", "Dario Šimić"]) },
  { id: "aarau", name: "FC Aarau", country: "ch", flag: "ch",
    squad: mkSquad("ch", ["Andreas Hilfiker", "Ratinho (br)", "Mirco Pavlicevic", "Bernd Kilian (de)", "Thomas Wyss", "Roberto Di Matteo (it)", "René Weiler", "Alain Sutter", "Petar Aleksandrov (bg)", "Lars Lunde (dk)", "Urs Rõthlisberger"]) },
  { id: "aek", name: "AEK Athens", country: "gr", flag: "gr",
    squad: mkSquad("gr", ["Ilias Atmatsidis", "Michalis Kasapis", "Vaios Karagiannis", "Stelios Manolas", "Babis Karagiannis", "Refik Šabanadžović (ba)", "Toni Savevski (mk)", "Vassilis Tsiartas", "Alexis Alexandris", "Zoran Slišković (hr)", "Christos Kostis"]) },
  { id: "aik", name: "AIK", country: "se", flag: "se",
    squad: mkSquad("se", ["Magnus Hedman", "Gary Sundgren", "Johan Mjällby", "Peter Larsson", "Krister Nordin", "Thomas Lagerlöf", "Vadym Yevtushenko (ua)", "Jesper Jansson", "Dick Lidman", "Pascal Simpson", "Kim Bergstrand"]) },
  { id: "austria_wien", name: "Austria Wien", country: "at", flag: "at",
    squad: mkSquad("at", ["Franz Wohlfahrt", "Anton Pfeffer", "Manfred Zsak", "Christian Prosenik", "Michael Baur", "Peter Stöger", "Walter Kogler", "Thomas Flögel", "Arminas Narbekovas (lt)", "Valdas Ivanauskas (lt)", "Ralph Hasenhüttl"]) },
  { id: "beitar_jerusalem", name: "Beitar Jerusalem", country: "il", flag: "il",
    squad: mkSquad("il", ["Ya'akov Asayag", "Ehud Kahlon", "Hanan Azulay", "Yossi Zana", "Vladimir Grechnyov (ru)", "Sergey Tretyak (ua)", "Ronen Harazi", "Sami Malka", "Eli Ohana", "Danny Danon", "Yaakov Schwartz"]) },
  { id: "copenhagen", name: "F.C. Copenhagen", country: "dk", flag: "dk",
    squad: mkSquad("dk", ["Palle Petersen", "Brian Kaus", "Diego Tur", "Kenneth Perez", "Morten Falch", "Michael Giæver", "Iørn Uldbjerg", "Christian Lønstrup", "Martin Johansen", "Michael Johansen", "Lars Højer"]) },
  { id: "hjk", name: "HJK Helsinki", country: "fi", flag: "fi",
    squad: mkSquad("fi", ["Antti Niemi", "Aki Hyryläinen", "Markku Kanerva", "Sami Ylä-Jussila", "Tommi Grönlund", "Rami Nieminen", "Ismo Lius", "Jari Vanhala", "Pekka Onttonen", "Jan Yasser", "Janne Suokonautio"]) },
  { id: "rosenborg", name: "Rosenborg", country: "no", flag: "no",
    squad: mkSquad("no", ["Ola By Rise", "Bjørn Otto Bragstad", "Rune Tangen", "Stig Inge Bjørnebye", "Trond Henriksen", "Kåre Ingebrigtsen", "Roar Strand", "Bent Skammelsrud", "Karl Petter Løken", "Tore André Dahlum", "Gøran Sørloth"]) },
  // Fill the rest with autogenerated lists
  { id: "skonto", name: "Skonto FC", country: "lv", flag: "lv", squad: mkSquad("lv", ["Oļegs Karavajevs", "Oļegs Blagonadeždins", "Igors Stepanovs", "Mihails Zemļinskis", "Valentīns Lobaņovs", "Vitālijs Astafjevs", "Vladimirs Babičevs", "Imants Bleidelis", "Marians Pahars", "Aleksandrs Jeļisejevs", "Andrejs Štolcers"]) },
  { id: "honved", name: "Budapest Honvéd", country: "hu", flag: "hu", squad: mkSquad("hu", Array.from({length:11}).map((_,i)=>`Jugador Hu ${i+1}`)) },
  { id: "dinamo_minsk", name: "Dinamo-Minsk", country: "by", flag: "by", squad: mkSquad("by", Array.from({length:11}).map((_,i)=>`Jugador By ${i+1}`)) },
  { id: "dinamo_tbilisi", name: "Dinamo Tbilisi", country: "ge", flag: "ge", squad: mkSquad("ge", ["Irakli Zoidze", "Gela Inalishvili", "Kakhaber Tskhadadze", "Levan Kobiashvili", "Giorgi Nemsadze", "Gocha Jamarauli", "Mikhail Kavelashvili", "Georgi Kinkladze", "Shota Arveladze", "Revaz Arveladze", "Archil Arveladze"]) },
  { id: "olimpija_ljubljana", name: "Olimpija Ljubljana", country: "si", flag: "si", squad: mkSquad("si", Array.from({length:11}).map((_,i)=>`Jugador Si ${i+1}`)) },
  { id: "ia_akranes", name: "ÍA", country: "is", flag: "is", squad: mkSquad("is", Array.from({length:11}).map((_,i)=>`Jugador Is ${i+1}`)) },
  { id: "ekranas", name: "Ekranas", country: "lt", flag: "lt", squad: mkSquad("lt", Array.from({length:11}).map((_,i)=>`Jugador Lt ${i+1}`)) },
  { id: "omonia", name: "Omonia", country: "cy", flag: "cy", squad: mkSquad("cy", Array.from({length:11}).map((_,i)=>`Jugador Cy ${i+1}`)) },
  { id: "partizani", name: "Partizani Tirana", country: "al", flag: "al", squad: mkSquad("al", Array.from({length:11}).map((_,i)=>`Jugador Al ${i+1}`)) },
  { id: "b68_toftir", name: "B68 Toftir", country: "fo", flag: "fo", squad: mkSquad("fo", Array.from({length:11}).map((_,i)=>`Jugador Fo ${i+1}`)) },
  { id: "floriana", name: "Floriana", country: "mt", flag: "mt", squad: mkSquad("mt", Array.from({length:11}).map((_,i)=>`Jugador Mt ${i+1}`)) },
  { id: "cork_city", name: "Cork City", country: "ie", flag: "ie", squad: mkSquad("ie", Array.from({length:11}).map((_,i)=>`Jugador Ie ${i+1}`)) },
  { id: "cwmbran_town", name: "Cwmbrân Town", country: "gb-wls", flag: "gb-wls", squad: mkSquad("gb-wls", Array.from({length:11}).map((_,i)=>`Jugador Wls ${i+1}`)) },
  { id: "linfield", name: "Linfield", country: "gb-nir", flag: "gb-nir", squad: mkSquad("gb-nir", Array.from({length:11}).map((_,i)=>`Jugador Nir ${i+1}`)) },
  { id: "venir_beggen", name: "Avenir Beggen", country: "lu", flag: "lu", squad: mkSquad("lu", Array.from({length:11}).map((_,i)=>`Jugador Lu ${i+1}`)) },
  { id: "norma_tallinn", name: "Norma Tallinn", country: "ee", flag: "ee", squad: mkSquad("ee", Array.from({length:11}).map((_,i)=>`Jugador Ee ${i+1}`)) },
  { id: "zimbru", name: "Zimbru", country: "md", flag: "md", squad: mkSquad("md", Array.from({length:11}).map((_,i)=>`Jugador Md ${i+1}`)) }
];

// Clean out existing preliminary teams if any leftover
data.participants = data.participants.filter(p => !missingTeams.find(mt => mt.id === p.id));

// Add them
missingTeams.forEach(t => data.participants.push(t));

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log(`Added ${missingTeams.length} preliminary teams.`);
