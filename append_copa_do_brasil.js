const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'src', 'data', 'ligas', 'brasil_temporadas.json');

const copaDoBrasilData = [
  { anio: "1989", campeon: "Grêmio" },
  { anio: "1990", campeon: "Flamengo" },
  { anio: "1991", campeon: "Criciúma" },
  { anio: "1992", campeon: "Internacional" },
  { anio: "1993", campeon: "Cruzeiro" },
  { anio: "1994", campeon: "Grêmio" },
  { anio: "1995", campeon: "Corinthians" },
  { anio: "1996", campeon: "Cruzeiro" },
  { anio: "1997", campeon: "Grêmio" },
  { anio: "1998", campeon: "Palmeiras" },
  { anio: "1999", campeon: "Juventude" },
  { anio: "2000", campeon: "Cruzeiro" },
  { anio: "2001", campeon: "Grêmio" },
  { anio: "2002", campeon: "Corinthians" },
  { anio: "2003", campeon: "Cruzeiro" },
  { anio: "2004", campeon: "Santo André" },
  { anio: "2005", campeon: "Paulista" },
  { anio: "2006", campeon: "Flamengo" },
  { anio: "2007", campeon: "Fluminense" },
  { anio: "2008", campeon: "Sport Recife" },
  { anio: "2009", campeon: "Corinthians" },
  { anio: "2010", campeon: "Santos" },
  { anio: "2011", campeon: "Vasco da Gama" },
  { anio: "2012", campeon: "Palmeiras" },
  { anio: "2013", campeon: "Flamengo" },
  { anio: "2014", campeon: "Atlético Mineiro" },
  { anio: "2015", campeon: "Palmeiras" },
  { anio: "2016", campeon: "Grêmio" },
  { anio: "2017", campeon: "Cruzeiro" },
  { anio: "2018", campeon: "Cruzeiro" },
  { anio: "2019", campeon: "Athletico Paranaense" },
  { anio: "2020", campeon: "Palmeiras" },
  { anio: "2021", campeon: "Atlético Mineiro" },
  { anio: "2022", campeon: "Flamengo" },
  { anio: "2023", campeon: "São Paulo" },
  { anio: "2024", campeon: "Flamengo" },
  { anio: "2025", campeon: "Corinthians" }
];

if (fs.existsSync(filePath)) {
  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Filter out any existing Copa do Brasil entries to prevent duplicates just in case
  const cleanData = fileData.filter(item => !item.id.includes('-copa-do-brasil'));
  
  const copaDoBrasilEntries = copaDoBrasilData.map(c => ({
    id: c.anio + "-copa-do-brasil",
    anio: c.anio,
    torneo: "Copa do Brasil",
    campeon: c.campeon,
    tabla_posiciones: []
  }));
  
  const finalData = [...cleanData, ...copaDoBrasilEntries];
  
  fs.writeFileSync(filePath, JSON.stringify(finalData, null, 2));
  console.log('Copa do Brasil inyectada exitosamente!');
}
