const fs = require('fs');

const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/pages/League.jsx';
let content = fs.readFileSync(path, 'utf8');

// The replacement for the temporadas block: Sequential Accordeon UI
const newTemporadasBlock = `
        <motion.div 
            key="temporadas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '80vh', overflow: 'hidden', borderRadius: '24px' }}
          >
            {/* ENCABEZADOS Y NAVEGADOR (SCROLLERS) */}
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
               
               {/* SCROLLER 1: DECADAS */}
               <div className="hide-scrollbar" style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '1.5rem' }}>
                 {decades.map(dec => (
                     <button
                       key={dec}
                       onClick={() => {
                          setSelectedDecade(dec === selectedDecade ? null : dec);
                       }}
                       style={{
                         background: selectedDecade === dec ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                         color: selectedDecade === dec ? 'black' : 'white',
                         border: '1px solid',
                         borderColor: selectedDecade === dec ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                         padding: '0.5rem 1rem',
                         borderRadius: '8px',
                         fontSize: '0.9rem',
                         fontWeight: 'bold',
                         cursor: 'pointer',
                         whiteSpace: 'nowrap',
                         transition: 'all 0.2s ease'
                       }}
                     >
                       {dec}s
                     </button>
                 ))}
               </div>

               {/* SCROLLER 2: AÑOS */}
               <div className="hide-scrollbar" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: selectedYearStr ? '1.5rem' : '0' }}>
                 {allYears.reverse().filter(y => {
                     if (!selectedDecade) return history.some(h => h.anio === y); // Show all years with history
                     const yearNum = parseInt(y);
                     if (selectedDecade === 1890 && yearNum >= 1891 && yearNum <= 1899) return history.some(h => h.anio === y);
                     if (yearNum >= selectedDecade && yearNum < selectedDecade + 10) return history.some(h => h.anio === y);
                     return false;
                 }).map(year => {
                    const isSelected = selectedYearStr === year;
                    return (
                        <button
                          key={year}
                          onClick={() => {
                             setSelectedYearStr(isSelected ? null : year);
                             setSelectedHistoryId(null); // Reset tournament to hide table
                          }}
                          style={{
                             background: isSelected ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                             color: isSelected ? 'black' : 'white',
                             border: '1px solid',
                             borderColor: isSelected ? 'var(--accent-gold)' : 'rgba(255,255,255,0.2)',
                             padding: '0.6rem 1.5rem',
                             borderRadius: '20px',
                             fontWeight: 'bold',
                             fontSize: '1.2rem',
                             cursor: 'pointer',
                             whiteSpace: 'nowrap',
                             transition: 'all 0.2s'
                          }}
                        >
                          {year}
                        </button>
                    )
                 })}
               </div>

               {/* SCROLLER 3: TORNEOS DEL AÑO SELECCIONADO */}
               {selectedYearStr && (
                   <div className="hide-scrollbar animate-fade-in" style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                     {history.filter(h => h.anio === selectedYearStr).map(t => (
                        <button
                          key={t.id}
                          onClick={() => setSelectedHistoryId(t.id)}
                          style={{
                             background: selectedHistoryId === t.id ? 'var(--accent-gold)' : 'rgba(0,0,0,0.5)',
                             color: selectedHistoryId === t.id ? 'black' : 'var(--accent-gold)',
                             border: '1px solid',
                             borderColor: selectedHistoryId === t.id ? 'var(--accent-gold)' : 'var(--accent-gold)',
                             padding: '0.5rem 1.2rem',
                             borderRadius: '16px',
                             fontWeight: 'bold',
                             fontSize: '1rem',
                             cursor: 'pointer',
                             whiteSpace: 'nowrap',
                             transition: 'all 0.2s',
                             boxShadow: selectedHistoryId === t.id ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none'
                          }}
                        >
                          {t.torneo}
                        </button>
                     ))}
                   </div>
               )}
            </div>

            {/* VISOR DE TABLAS: SOLO SE MUESTRA SI HAY UN TORNEO SELECCIONADO */}
            <div className="hide-scrollbar" style={{ flex: 1, padding: '3rem', overflowY: 'auto', background: 'rgba(0,0,0,0.2)' }}>
              {selectedHistoryId && selectedTournament ? (
                <motion.div 
                  key={selectedTournament.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h3 className="title-font" style={{ fontSize: '2.5rem', color: 'white' }}>{selectedTournament.torneo}</h3>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '0.2rem' }}>🏆 {selectedTournament.campeon}</p>
                    </div>
                  </div>

                  {/* EXPERIMENTO UI: FOTOS ARRIBA (LAYOUT B - MODO MUSEO) */}
                  {(selectedTournament.foto_equipo_arriba || selectedTournament.foto_goleador_arriba) && (
                    <div className="animate-fade-in" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {selectedTournament.foto_equipo_arriba && (
                        <div className="glass-panel" style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                          <img src={selectedTournament.foto_equipo_arriba} alt="" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '4px', filter: 'sepia(0.2) contrast(1.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} />
                        </div>
                      )}
                      {selectedTournament.foto_goleador_arriba && (
                        <div className="glass-panel" style={{ flex: '0 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                          <img src={selectedTournament.foto_goleador_arriba} alt="" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '4px', filter: 'sepia(0.2) contrast(1.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Panel de Observaciones Históricas */}
                  {selectedTournament.obs && (
                    <div className="animate-fade-in" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(251, 191, 36, 0.05)', borderLeft: '4px solid var(--accent-gold)', borderRadius: '0 8px 8px 0', border: '1px solid rgba(251,191,36,0.1)', borderLeftWidth: '4px' }}>
                      <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', margin: 0, fontStyle: 'italic', lineHeight: '1.6' }}>
                        {selectedTournament.obs}
                      </p>
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'flex-start' }}>
                    <div className="table-container" style={{ 
                      overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--glass-border)',
                      backgroundImage: selectedTournament.foto_campeon ? \`url(\${selectedTournament.foto_campeon})\` : 'none',
                      backgroundSize: 'cover', backgroundAttachment: 'local', backgroundPosition: 'center', position: 'relative'
                    }}>
                      <div style={{ background: selectedTournament.foto_campeon ? 'rgba(0,0,0,0.85)' : 'transparent', minHeight: '100%', paddingBottom: '1rem' }}>
                        {selectedTournament.zonas ? (
                          Object.entries(selectedTournament.zonas).map(([zonaName, zonaRows], zIdx) => (
                            <div key={zIdx} style={{ marginBottom: '2rem' }}>
                              <h4 style={{ padding: '1rem 1.5rem', margin: 0, color: 'var(--text-main)', background: 'rgba(0,0,0,0.6)', borderBottom: '2px solid var(--accent-gold)', fontSize: '1.2rem' }}>{zonaName}</h4>
                              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px', position: 'relative', zIndex: 1 }}>
                                <thead>
                                  <tr style={{ background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid var(--glass-border)' }}>
                                    <th style={{ padding: '0.8rem', width: '5%', textAlign: 'center' }}>Pos</th>
                                    <th style={{ padding: '0.8rem', width: '35%' }}>Equipo</th>
                                    <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center' }}>Pts</th>
                                    <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PJ</th>
                                    <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PG</th>
                                    <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PE</th>
                                    <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PP</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {zonaRows.map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', background: row.pos <= 2 ? 'rgba(251, 191, 36, 0.05)' : 'transparent', transition: 'background 0.2s' }}>
                                      <td style={{ padding: '0.8rem', textAlign: 'center', fontWeight: 'bold', color: row.pos <= 2 ? 'var(--accent-gold)' : 'inherit' }}>{row.pos}</td>
                                      <td style={{ padding: '0.8rem', fontWeight: row.pos <= 2 ? 'bold' : 'normal', fontSize: '0.95rem' }}>{row.equipo}</td>
                                      <td style={{ padding: '0.8rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.95rem' }}>{row.pts}</td>
                                      <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pj}</td>
                                      <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pg}</td>
                                      <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pe}</td>
                                      <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pp}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ))
                        ) : (
                          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px', position: 'relative', zIndex: 1 }}>
                            <thead>
                              <tr style={{ background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid var(--glass-border)' }}>
                                <th style={{ padding: '0.8rem', width: '5%', textAlign: 'center' }}>Pos</th>
                                <th style={{ padding: '0.8rem', width: '35%' }}>Equipo</th>
                                <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center' }}>Pts</th>
                                <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PJ</th>
                                <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PG</th>
                                <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PE</th>
                                <th style={{ padding: '0.8rem', width: '10%', textAlign: 'center', color: 'var(--text-muted)' }}>PP</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedTournament.tabla_posiciones && selectedTournament.tabla_posiciones.length > 0 ? selectedTournament.tabla_posiciones.map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)', background: row.pos === 1 ? 'rgba(251, 191, 36, 0.1)' : 'transparent', transition: 'background 0.2s' }}>
                                  <td style={{ padding: '0.8rem', textAlign: 'center', fontWeight: 'bold', color: row.pos <= 3 ? 'var(--accent-gold)' : 'inherit' }}>{row.pos}</td>
                                  <td style={{ padding: '0.8rem', fontWeight: row.pos === 1 ? 'bold' : 'normal', fontSize: '0.95rem' }}>{row.equipo}</td>
                                  <td style={{ padding: '0.8rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.95rem' }}>{row.pts}</td>
                                  <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pj}</td>
                                  <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pg}</td>
                                  <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pe}</td>
                                  <td style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.pp}</td>
                                </tr>
                              )) : (
                                <tr>
                                  <td colSpan="7" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                    Tabla de posiciones no cargada para este certamen todavía.
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      {/* Goleadores View */}
                      <div className="glass-panel" style={{ 
                        padding: '0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)',
                        backgroundImage: selectedTournament.foto_goleador ? \`url(\${selectedTournament.foto_goleador})\` : 'none',
                        backgroundSize: 'cover', backgroundAttachment: 'local', backgroundPosition: 'center top', position: 'relative'
                      }}>
                        <div style={{ background: selectedTournament.foto_goleador ? 'rgba(0,0,0,0.85)' : 'transparent', padding: '1.5rem', minHeight: '100%' }}>
                          <h4 className="title-font" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', textAlign: 'center' }}>Máximos Goleadores</h4>
                        {selectedTournament.goleadores && selectedTournament.goleadores.length > 0 ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {selectedTournament.goleadores.map((gol, i) => (
                              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                                <div>
                                  <div style={{ fontWeight: 'bold', color: 'white' }}>{gol.nombre}</div>
                                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{gol.equipo}</div>
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--accent-gold)' }}>{gol.goles}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                           <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', padding: '2rem 0' }}>
                             Datos de goleadores aún no relevados para este torneo.
                           </div>
                        )}
                        </div>
                      </div>

                      {/* Descensos View */}
                      {selectedTournament.descensos && selectedTournament.descensos.length > 0 && (
                        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px', background: 'linear-gradient(145deg, rgba(239,68,68,0.08) 0%, rgba(20,20,20,0.8) 100%)', border: '1px solid rgba(239,68,68,0.2)' }}>
                          <h4 className="title-font" style={{ fontSize: '1.5rem', color: '#ef4444', marginBottom: '1.5rem', textAlign: 'center', textShadow: '0 0 10px rgba(239,68,68,0.5)' }}>Descensos</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {selectedTournament.descensos.map((desc, dIndex) => (
                               <div key={dIndex} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                                 <span style={{ fontSize: '1.2rem' }}>⏬</span>
                                 <span style={{ fontWeight: 'bold', color: 'white', fontSize: '0.95rem' }}>{desc}</span>
                               </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* FASE FINAL O DESEMPATES */}
                  {(selectedTournament.fase_knockout || selectedTournament.partidos_desempate) && (
                    <div className="glass-panel animate-fade-in" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'linear-gradient(to right, rgba(255,255,255,0.02), rgba(251,191,36,0.02))' }}>
                      <h4 className="title-font" style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', margin: '0 0 1.5rem 0', textAlign: 'center', letterSpacing: '1px' }}>
                        {selectedTournament.fase_knockout ? "Fase Final (Playoffs)" : "Instancia de Desempate"}
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0 auto', width: '100%' }}>
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
                  )}
                </motion.div>
              ) : (
                <div style={{ padding: '6rem', textAlign: 'center', opacity: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⏳</div>
                  <h3 className="title-font" style={{ fontSize: '2rem', color: 'white' }}>La Bóveda Histórica</h3>
                  <p style={{ fontSize: '1.2rem' }}>Elegí una década, luego un año y finalmente uno de los torneos jugados ese año para visualizar sus estadísticas.</p>
                </div>
              )}
            </div>
          </motion.div>
`;

const startMarker = "{activeTab === 'temporadas' && (";
const endMarker = ")}";

// We need to be careful with endMarker because it's a generic closing parenthesis. We know exactly what is next:
const endMarkerActual = "        {activeTab === 'enfrentamientos' && (";

const parts = content.split(startMarker);
if (parts.length === 2) {
    const endParts = parts[1].split(endMarkerActual);
    if (endParts.length >= 2) {
        
        let subEndParts = endParts.slice(1).join(endMarkerActual);
        
        // Ensure state variables exist.
        // Replace previous definition: const [selectedHistoryId, setSelectedHistoryId] = useState(INITIAL_TOURNAMENT_ID);
        // with the new states!
        let headerStr = parts[0];
        
        if (!headerStr.includes('const [selectedDecade, setSelectedDecade] = useState(null)')) {
            headerStr = headerStr.replace(
                "const [selectedHistoryId, setSelectedHistoryId] = useState",
                "const [selectedDecade, setSelectedDecade] = useState(null);\n  const [selectedYearStr, setSelectedYearStr] = useState(null);\n  const [selectedHistoryId, setSelectedHistoryId] = useState"
            );
        }

        const finalContent = headerStr + startMarker + newTemporadasBlock + "        )}\n" + endMarkerActual + subEndParts;
        fs.writeFileSync(path, finalContent);
        console.log("DRILL DOWN HORIZONTAL APPLIED");
    } else {
        console.log("No end marker actual found");
    }
} else {
    console.log("No start marker found");
}
