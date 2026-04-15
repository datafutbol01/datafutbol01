const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia');

const reverseMap = {
  // Primeros 10
  'juventus': { 'La Vieja Señora': 'La Vecchia Signora', 'Los Blanquinegros': 'I Bianconeri' },
  'milan': { 'Los Rojinegros': 'I Rossoneri', 'El Diablo': 'Il Diavolo' },
  'inter': { 'Los Negriazules': 'I Nerazzurri', 'La Bienamada': 'La Beneamata', 'La Gran Serpiente': 'Il Biscione' },
  'roma': { 'Los Rojiamarillos': 'I Giallorossi', 'La Loba': 'La Lupa' },
  'napoli': { 'Los Partenopeos': 'I Partenopei', 'Los Azules': 'Gli Azzurri' },
  'lazio': { 'Los Blanquicelestes': 'I Biancocelesti', 'Las Águilas': 'Le Aquile' },
  'fiorentina': { 'El Violeta': 'La Viola', 'Los Violetas': 'La Viola', 'Los Liriados': 'I Gigliati' },
  'torino': { 'El Toro': 'Il Toro', 'Los Granates': 'I Granata' },
  'atalanta': { 'La Diosa': 'La Dea', 'Los Oróbicos': 'Gli Orobici' },
  'bologna': { 'Los Rojiazules': 'I Rossoblù', 'Los Felsineos': 'I Felsinei' },
  // Ultimos 10
  'cagliari': { 'Los Isleños': 'Gli Isolani', 'Los Rojiazules': 'I Rossoblù' },
  'como': { 'Los Larianos': 'I Lariani', 'Los Blanquiazules': 'I Biancoblù' },
  'cremonese': { 'Los Gris y Rojos': 'I Grigiorossi', 'Los Violines': 'I Violini' },
  'genoa': { 'El Grifo': 'Il Grifone', 'Los Rojiazules': 'I Rossoblù' },
  'hellas-verona': { 'Los Mastines': 'I Mastini', 'Los Amarillos y Azules': 'I Gialloblù' },
  'lecce': { 'Los Lobos': 'I Lupi', 'Los Rojiamarillos': 'I Giallorossi' },
  'parma': { 'Los Cruzados': 'I Crociati', 'Los Ducales': 'I Ducali' },
  'pisa': { 'Los Negriazules': 'I Nerazzurri' },
  'sassuolo': { 'Los Verdinegros': 'I Neroverdi' },
  'udinese': { 'Los Friulanos': 'I Friulani', 'Las Cebras': 'Le Zebrette' }
};

for(const [clubId, map] of Object.entries(reverseMap)) {
  const file = path.join(baseDir, clubId + '.json');
  if(fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if(data.origen_apodos) {
      data.origen_apodos.forEach(a => {
        if(map[a.apodo]) {
          a.apodo = map[a.apodo];
        } else if (a.apodo === 'Los Gialloblu') {
          a.apodo = 'I Gialloblù';
        }
      });
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
  }
}
console.log('Todos los apodos de Italia regresados a su formato original (I Biancocelesti, etc).');
