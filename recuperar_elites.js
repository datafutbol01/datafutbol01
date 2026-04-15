const fs = require('fs');

const ligasMap = {
  'argentina': ['reescribir_arg_lote1.js', 'reescribir_arg_lote2.js'],
  'inglaterra': ['reescribir_eng_lote1.js'],
  'espania': ['reescribir_esp_all.js'],
  'italia': ['reescribir_ita_all.js'],
  'alemania': ['reescribir_ger_all.js']
};

for (const [liga, scripts] of Object.entries(ligasMap)) {
  for (const scriptFile of scripts) {
    if (!fs.existsSync(scriptFile)) continue;
    const content = fs.readFileSync(scriptFile, 'utf8');
    
    const match = content.match(/const idolos\w* = (\{[\s\S]*?\n\};)/);
    if (!match) continue;
    
    let dict;
    try {
        dict = eval(`(${match[1].slice(0, -1)})`);
    } catch(e) {
        console.error("Error evaluando dict en", scriptFile);
        continue;
    }
    
    for (const [clubId, idolos] of Object.entries(dict)) {
      const jsonPath = `app/src/data/clubes/${liga}/${clubId}.json`;
      if (!fs.existsSync(jsonPath)) continue;
      
      let data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      if (data.idolos && Array.isArray(data.idolos)) {
        let changed = false;
        data.idolos.forEach(idolo => {
          const found = idolos.find(i => 
             i.nombre.toLowerCase() === idolo.nombre.toLowerCase() || 
             idolo.nombre.toLowerCase().includes(i.nombre.toLowerCase().split(' ')[0]) ||
             i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' ')[0])
          );
          if (found) {
             idolo.desc = found.desc;
             changed = true;
          }
        });
        if (changed) {
           fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
           console.log(`[RECUPERADO ELITE] Ídolos restaurados en: ${liga} / ${clubId}`);
        }
      }
    }
  }
}
