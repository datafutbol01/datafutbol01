const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

const forbiddenWords = ['fáctico', 'fáctica', 'fácticas', 'fácticos', 'originario', 'logístico', 'logística', 'cruzado', 'cruzada', 'cruzados', 'cruzadas', 'estipulado', 'estipulada', 'estipulados', 'estipuladas', 'unificado', 'unificada', 'unificadas', 'unificados', 'formal', 'formales', 'formalizando', 'comprobado', 'comprobada', 'comprobados', 'comprobadas', 'absoluto', 'absoluta', 'absolutos', 'absolutas', 'rotundo', 'rotunda', 'rotundos', 'rotundas', 'neto', 'neta', 'netos', 'netas', 'puro', 'pura', 'puros', 'puras', 'garantizado', 'garantizada', 'garantizados', 'garantizadas', 'actuado', 'actuada', 'actuados', 'actuadas', 'evaluado', 'evaluada', 'evaluados', 'evaluadas', 'dictado', 'dictaminado', 'dictaminada'];

for (const f of files) {
  let content = fs.readFileSync(path.join(dir, f), 'utf8');
  let json = JSON.parse(content);
  
  const clean = (text) => {
      let words = text.split(' ');
      let newWords = [];
      for(let w of words) {
          let lower = w.toLowerCase().replace(/[,.]/g, '');
          if (!forbiddenWords.includes(lower)) {
              newWords.push(w);
          }
      }
      let result = newWords.join(' ')
          .replace(/\s+/g, ' ')
          .replace(/ ,/g, ',')
          .replace(/ \./g, '.');
      
      // Some manual overrides just in case they ended up too short or weird.
      if (result.includes('90 aportes continuos')) result = 'Registró 90 presencias como lateral por izquierda asegurando control y salida.';
      if (result.includes('100 paradas')) result = 'Completó 100 encuentros promediando alta regularidad táctica.';
      if (result.includes('140 cruzados cotejos')) result = 'Defendió los colores locales durante 140 enfrentamientos.';
      
      return result;
  };

  if(json.idolos) {
      json.idolos.forEach(i => i.desc = clean(i.desc));
      json.goleadores_historicos.forEach(i => i.desc = clean(i.desc));
      json.presencias_historicas.forEach(i => i.desc = clean(i.desc));
  }
  
  fs.writeFileSync(path.join(dir, f), JSON.stringify(json, null, 2), 'utf8');
}
