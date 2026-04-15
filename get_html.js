const axios = require('axios');
axios.get('https://www.livefutbol.com/equipos/1-fc-koeln/borussia-dortmund/11/')
  .then(r => require('fs').writeFileSync('test.html', r.data))
  .catch(console.error);
