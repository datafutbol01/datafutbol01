
const cheerio = require('cheerio');
fetch('https://www.promiedos.com.ar/historial.php?equipo1=Estudiantes%20(LP)&equipo2=Gimnasia%20(LP)')
  .then(res => res.text())
  .then(text => {
     console.log('Response length:', text.length);
     if (text.includes('Historial Estudiantes (LP) vs Gimnasia (LP)')) {
        console.log('SUCCESS: Accessed Promiedos historial successfully');
     } else {
        console.log('FAILED: Promiedos might be blocking fetch or URL is wrong');
     }
  })
  .catch(console.error);

