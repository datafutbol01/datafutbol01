const fs = require('fs');
const path = require('path');

const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil');

// We will read the data back from my own scripts, which I saved as populate_leyendas_br_tX.js.
// Since they are written as node scripts that execute immediately, I can just modify them or extract the objects.

function executeAndFix(scriptFile, objName) {
  const code = fs.readFileSync(path.join(__dirname, scriptFile), 'utf8');
  // We extract the object definition using string manipulation
  // Everything from `const leyendasPX = {` until `}; \n\nasync function createTanda`
  
  const startStr = `const ${objName} = `;
  const endStr = `async function`;
  const startIndex = code.indexOf(startStr) + startStr.length;
  const endIndex = code.indexOf(endStr);
  
  if(startIndex > startStr.length && endIndex > -1) {
    let objCode = code.slice(startIndex, endIndex).trim();
    if(objCode.endsWith(';')) objCode = objCode.slice(0, -1);
    
    // Evaluate the object
    let dataObj;
    try {
        dataObj = eval('(' + objCode + ')');
    } catch (e) {
        console.error("Eval error " + scriptFile + ":", e);
        return;
    }
    
    for (const [clubId, clubData] of Object.entries(dataObj)) {
        const filePath = path.join(clubsDir, `${clubId}.json`);
        if (fs.existsSync(filePath)) {
            const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            
            // Clean Idolos (just keep the descriptions we originally wrote, except fix Pelé)
            if(clubData.idolos) {
              fileData.idolos = clubData.idolos.map(i => {
                  let f = i.desc || "";
                  f = f.replace(/estatuariamente|logísticamente|puramente|arrojando|forjando|dictando|llano|originarias|puros|absolutismos|rígidamente|estipulada|contables|formales|cruzando/ig, " ");
                  f = f.replace(/\s+/g, ' ').trim();
                  
                  if (i.nombre.includes("Pelé") || (i.apodo && i.apodo.includes("Pelé"))) {
                      f = "El mayor mito de la historia del club. Conquistó la gloria máxima levantando Copas Libertadores e Intercontinentales, considerado hoy como uno de los mejores futbolistas de todos los tiempos.";
                  }
                  
                  return {
                      nombre: i.nombre,
                      pos: i.pos,
                      apodo: i.apodo,
                      epoca: i.epoca,
                      desc: f
                  };
              });
            }

            // Goleadores: Keep Apodo, NO description (delete it)
            if(clubData.goleadores_historicos) {
                fileData.goleadores_historicos = clubData.goleadores_historicos.map(g => {
                    return {
                        nombre: g.nombre,
                        goles: g.goles,
                        epoca: g.epoca,
                        apodo: g.apodo
                    };
                });
            }
            
            // Presencias: Keep Apodo, NO description (delete it)
            if(clubData.presencias_historicas) {
                fileData.presencias_historicas = clubData.presencias_historicas.map(p => {
                    return {
                        nombre: p.nombre,
                        partidos: p.partidos,
                        epoca: p.epoca,
                        apodo: p.apodo
                    };
                });
            }

            fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
        }
    }
  }
}

executeAndFix('populate_leyendas_br_t1.js', 'leyendasP1');
executeAndFix('populate_leyendas_br_t2.js', 'leyendasP2');
executeAndFix('populate_leyendas_br_t3.js', 'leyendasP3');
executeAndFix('populate_leyendas_br_t4.js', 'leyendasP4');

console.log("Restaurados ídolos premium, descripciones eliminadas de goleadores y presencias, y Pelé ajustado.");
