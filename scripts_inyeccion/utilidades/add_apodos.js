const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia/';

const apodos = {
  // Celtic
  "Henrik Larsson": "The King of Kings / Henke",
  "Jimmy Johnstone": "Jinky",
  "Kenny Dalglish": "King Kenny",
  "Paul McStay": "El Maestro",
  "Shunsuke Nakamura": "Naka",

  // Rangers
  "Jim Baxter": "Slim Jim",
  "Brian Laudrup": "The Prince",
  "Paul Gascoigne": "Gazza",
  "Richard Gough": "Goughie",
  "Sandy Jardine": "Sandy",

  // Aberdeen
  "Gordon Strachan": "Wee Gordon",
  "Eoin Jess": "The Prince of Pittodrie",
  "Neale Cooper": "Tattie",
  "Stewart McKimmie": "McKimmie",
  "Russell Anderson": "Rusty",

  // Dundee United
  "Paul Sturrock": "Luggy",
  "Hamish McAlpine": "Harry",
  "David Narey": "Narey",
  "Maurice Malpas": "Mo",
  "Eamonn Bannon": "Eamonn",

  // Dundee
  "Alan Gilzean": "Gilly",
  "Bobby Cox": "Cox",
  "Gordon Smith": "The Prince of Wingers",
  "Julián Speroni": "El Flaco",
  "Claudio Caniggia": "El Pájaro",

  // Hearts
  "Dave Mackay": "Dave",
  "Craig Gordon": "Craigy",
  "Steven Pressley": "Elvis",
  "Paul Hartley": "Paul",
  "Rudi Skácel": "Rudi",

  // Hibernian
  "Lawrie Reilly": "Last Minute Lawrie",
  "Franck Sauzée": "Le God",
  "Pat Stanton": "Pat",
  "Scott Brown": "Broony",

  // Kilmarnock
  "Ray Montgomerie": "Monty",
  "Kris Boyd": "Boydy",
  "Tommy McLean": "Tommy",
  "Stuart McLean": "Stuart",
  "Dieter van Tornhout": "Dieter",

  // Motherwell
  "George Stevenson": "George",
  "James McFadden": "Faddy",
  "Phil O'Donnell": "Uncle Phil",
  "Keith Lasley": "Lasz",
  "Stevie Hammell": "Hammy",

  // Ross County
  "Michael Gardyne": "Midge",
  "Derek Adams": "Derek",
  "Richard Brittain": "Richie",
  "Scott Boyd": "Scott",
  "Ian McShane": "Ian",

  // St Johnstone
  "Chris Millar": "Midge",
  "David Wotherspoon": "Spoony",
  "Steven MacLean": "Macca",
  "Dave Mackay (Saintees)": "Dave",
  "Liam Craig": "Liam",

  // St Mirren
  "Tony Fitzpatrick": "Fitzy",
  "Hugh Murray": "Shug",
  "Steven Thompson": "Thommo",
  "Cammy Bell": "Cammy",
  "Mark Yardley": "Yardley"
};

const archivos = fs.readdirSync(path).filter(f => f.endsWith('.json'));

archivos.forEach(file => {
  const filePath = path + file;
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos) {
    data.idolos = data.idolos.map(i => {
      if (apodos[i.nombre]) {
        i.apodo = apodos[i.nombre];
      }
      return i;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated apodos for ${file}`);
});
