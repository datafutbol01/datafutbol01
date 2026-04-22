const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'brasil_temporadas.json');

if (fs.existsSync(filePath)) {
  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  fileData.forEach(item => {
    const year = parseInt(item.anio, 10);
    const suf = item.id; // It has id formatted like "1967-taca-brasil" or "1971-serie-a"
    
    let officialName = "Campeonato Brasileiro";

    if (year >= 1959 && year <= 1968 && suf.includes('taca-brasil')) {
      officialName = "Taça Brasil";
    } else if (year >= 1967 && year <= 1970 && suf.includes('robertao')) {
      officialName = "Torneio Roberto Gomes Pedrosa";
    } else if (year >= 1971 && year <= 1974) {
      officialName = "Campeonato Nacional de Clubes";
    } else if (year >= 1975 && year <= 1979) {
      officialName = "Copa Brasil";
    } else if (year >= 1980 && year <= 1983) {
      officialName = "Taça de Ouro";
    } else if (year === 1984) {
      officialName = "Copa Brasil";
    } else if (year === 1985) {
      officialName = "Taça de Ouro";
    } else if (year >= 1986 && year <= 1988) {
      officialName = "Copa Brasil";
    } else if (year >= 1989 && year <= 1999) {
      officialName = "Campeonato Brasileiro";
    } else if (year === 2000) {
      officialName = "Copa João Havelange";
    } else if (year >= 2001) {
      officialName = "Campeonato Brasileiro";
    }

    item.torneo = officialName;
  });

  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
  console.log('Nombres oficiales inyectados en las temporadas de Brasil.');
}
