const fs = require('fs');
const path = require('path');

const goodImages = {
  1930: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Jos%C3%A9_Nasazzi%2C_Los_Sports%2C_1930-12-12_%28405%29.jpg",
  1934: "https://upload.wikimedia.org/wikipedia/commons/1/19/Giuseppe_Meazza_1935.jpg",
  1938: "https://upload.wikimedia.org/wikipedia/commons/6/64/Le%C3%B4nidas_da_Silva_01.jpg",
  1950: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Alcides_Ghiggia%2C_Estadio%2C_1950-08-05_%28377%29.jpg",
  1954: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Ferenc_Pusk%C3%A1s%2C_Estadio%2C_1954-03-27_%28567%29.jpg",
  1958: "https://upload.wikimedia.org/wikipedia/commons/2/25/Didi_1958.jpg",
  1962: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Garrincha_1962.jpg",
  1966: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eus%C3%A9bio_1966.jpg",
  1970: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pel%C3%A9_1970.jpg",
  1990: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Lothar_Matth%C3%A4us_1990.jpg",
  2022: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
};

const dirPath = path.join(__dirname, '../app/src/data/mundiales');

for (const [year, url] of Object.entries(goodImages)) {
  const filePath = path.join(dirPath, `${year}.json`);
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(rawData);
    data.coverImage = url;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Inyectada imagen de portada en ${year}.json`);
  } else {
    console.log(`❌ No se encontró el archivo ${year}.json`);
  }
}
