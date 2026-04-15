const fs = require('fs');

const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/pages/League.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Reemplazar `display: 'flex', flexWrap: 'wrap'` por Grid
content = content.replace(
  /<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>/g,
  `<div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'flex-start' }}>`
);

// 2. Modificar padding de tabla genérica para que entre en menos espacio horizontal
content = content.replace(/padding: '1\.2rem'/g, "padding: '0.8rem'");
content = content.replace(/fontSize: '1\.1rem'/g, "fontSize: '0.95rem'");

// 3. Quitar todos los flex: '1 1 600px' y flex: '1 1 300px' porque ahora usamos CSS Grid y arruinan la proporción
content = content.replace(/flex: '1 1 600px', /g, "");
content = content.replace(/flex: '1 1 300px', /g, "");

// 4. Reemplazar la Fase Final con el Bracket Layout
const oldFaseFinalStart = '<div style={{ display: \'flex\', flexDirection: \'column\', gap: \'1rem\', maxWidth: \'800px\', margin: \'0 auto\' }}>';
const oldFaseFinalEnd = '</div>\n                      </div>\n                    )}'; // matching the end of the fase_knockout div block

const newFaseFinalLogic = `<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0 auto', width: '100%' }}>
                          {(() => {
                             const matches = selectedTournament.fase_knockout || selectedTournament.partidos_desempate;
                             const order = ['octavos', 'cuartos', 'semifinal', 'semifinales', 'final', '3er y 4to puesto'];
                             const grouped = {};
                             let hasTooManyMatches = false;

                             matches.forEach(m => {
                                 const key = m.ronda || 'Fase Final';
                                 if (!grouped[key]) grouped[key] = [];
                                 grouped[key].push(m);
                                 if (grouped[key].length > 8) hasTooManyMatches = true; 
                             });

                             if (hasTooManyMatches || Object.keys(grouped).length === 1) {
                                return (
                                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                                      {matches.map((match, i) => (
                                          <div key={i} style={{ 
                                                         display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                                                         background: match.campeon ? 'rgba(251, 191, 36, 0.15)' : 'rgba(0,0,0,0.5)', 
                                                         padding: '0.8rem', borderRadius: '8px', 
                                                         borderLeft: match.campeon ? '4px solid var(--accent-gold)' : '4px solid rgba(255,255,255,0.1)',
                                                         boxShadow: match.campeon ? '0 4px 15px rgba(251, 191, 36, 0.15)' : 'none'
                                                       }}>
                                             <div style={{ fontWeight: 'bold', color: 'var(--accent-gold)', fontSize: '0.75rem', width: '90px', textTransform: 'uppercase' }}>{match.ronda}</div>
                                             <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: 'white', flex: 1, textAlign: 'center', letterSpacing: '0.5px' }}>{match.partido || match.resultado}</div>
                                          </div>
                                      ))}
                                   </div>
                                );
                             }

                             const keysArr = Object.keys(grouped).sort((a,b) => {
                                 const ia = order.findIndex(o => a.toLowerCase().includes(o));
                                 const ib = order.findIndex(o => b.toLowerCase().includes(o));
                                 if (ia !== -1 && ib !== -1) return ia - ib;
                                 if (ia !== -1) return 1;
                                 if (ib !== -1) return -1;
                                 return 0; // Fallback al orden original si no coincide
                             });

                             return (
                                <div className="hide-scrollbar" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', minHeight: '300px', paddingBottom: '1rem' }}>
                                    {keysArr.map(ronda => (
                                        <div key={ronda} style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '1rem' }}>
                                           <h5 style={{ color: 'var(--accent-gold)', textAlign: 'center', margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>{ronda}</h5>
                                           {grouped[ronda].map((match, i) => (
                                                <div key={i} className="glass-panel" style={{ 
                                                         background: match.campeon ? 'rgba(251, 191, 36, 0.15)' : 'rgba(0,0,0,0.6)', 
                                                         padding: '1rem', borderRadius: '12px', 
                                                         borderLeft: match.campeon ? '4px solid var(--accent-gold)' : '4px solid rgba(255,255,255,0.1)',
                                                         boxShadow: match.campeon ? '0 4px 15px rgba(251, 191, 36, 0.15)' : '0 4px 6px rgba(0,0,0,0.3)',
                                                         display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                                         position: 'relative'
                                                       }}>
                                                   <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{match.partido || match.resultado}</div>
                                                   {match.estadio && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'center' }}>{match.estadio}</div>}
                                                </div>
                                           ))}
                                        </div>
                                    ))}
                                </div>
                             );
                          })()}
                        </div>
                      </div>
                    )}`;

const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Slice approach for replacing the block
const parts = content.split('<div style={{ display: \'flex\', flexDirection: \'column\', gap: \'1rem\', maxWidth: \'800px\', margin: \'0 auto\' }}>');

if (parts.length === 2) {
    const endParts = parts[1].split('</div>\n                      </div>\n                    )}');
    if (endParts.length >= 2) {
         const newContent = parts[0] + newFaseFinalLogic + endParts.slice(1).join('</div>\n                      </div>\n                    )}');
         fs.writeFileSync(path, newContent);
         console.log("League.jsx actualizado exitosamente con Bracket Layout y CSS Grid Side-by-Side.");
    } else {
         console.log("No se pudo hallar el final del bloque de Fase Final para reemplazar.");
    }
} else {
    console.log("No se encontró el inicio del bloque Fase Final.");
}
