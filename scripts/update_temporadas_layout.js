const fs = require('fs');

const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/pages/League.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add states at the top of the component
if (!content.includes('const [temporadaViewMode, setTemporadaViewMode]')) {
    content = content.replace(
        "const [activeTab, setActiveTab] = useState('clubes');",
        `const [activeTab, setActiveTab] = useState('clubes');\n  const [temporadaViewMode, setTemporadaViewMode] = useState('calendar');\n  const [temporadaSelectedYearStr, setTemporadaSelectedYearStr] = useState(null);\n  const [temporadaSelectedDecade, setTemporadaSelectedDecade] = useState(null);`
    );
}

// 2. We need to completely rewrite the `activeTab === 'temporadas'` block.
// To do this reliably, we'll manually split and replace it.

const startMarker = "{activeTab === 'temporadas' && (";
const endMarker = "{activeTab === 'enfrentamientos' && (";

const parts = content.split(startMarker);
if (parts.length === 2) {
    const endParts = parts[1].split(endMarker);
    if (endParts.length >= 2) {
        
        let subEndParts = endParts.slice(1).join(endMarker);

        // The replacement for the temporadas block
        const newTemporadasBlock = `
        <motion.div 
            key="temporadas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{ padding: '0', display: 'flex', height: '80vh', overflow: 'hidden', borderRadius: '24px' }}
          >
            {temporadaViewMode === 'calendar' && (
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '3rem', overflowY: 'auto' }}>
                  <h2 className="title-font" style={{ fontSize: '3rem', color: 'var(--accent-gold)', textAlign: 'center', marginBottom: '3rem', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>La Máquina del Tiempo</h2>
                  
                  {/* Décadas Navigator */}
                  <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '3rem', borderRadius: '16px', display: 'flex', gap: '1rem', overflowX: 'auto', background: 'rgba(0,0,0,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                     {decades.map(dec => (
                         <button
                           key={dec}
                           onClick={() => setTemporadaSelectedDecade(temporadaSelectedDecade === dec ? null : dec)}
                           style={{
                             background: temporadaSelectedDecade === dec ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                             color: temporadaSelectedDecade === dec ? 'black' : 'white',
                             border: '1px solid',
                             borderColor: temporadaSelectedDecade === dec ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                             padding: '1rem 2rem',
                             borderRadius: '12px',
                             fontSize: '1.2rem',
                             fontWeight: 'bold',
                             cursor: 'pointer',
                             whiteSpace: 'nowrap',
                             transition: 'all 0.2s ease',
                             boxShadow: temporadaSelectedDecade === dec ? '0 4px 15px rgba(251, 191, 36, 0.3)' : 'none'
                           }}
                           onMouseOver={(e) => {
                             if (temporadaSelectedDecade !== dec) {
                               e.currentTarget.style.color = 'var(--accent-gold)';
                               e.currentTarget.style.borderColor = 'var(--accent-gold)';
                             }
                           }}
                           onMouseOut={(e) => {
                             if (temporadaSelectedDecade !== dec) {
                               e.currentTarget.style.color = 'white';
                               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                             }
                           }}
                         >
                           {dec}s
                         </button>
                     ))}
                  </div>

                  {/* Años Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.5rem' }}>
                    {allYears.reverse().filter(y => {
                        if (!temporadaSelectedDecade) return true;
                        const yearNum = parseInt(y);
                        // Especial: 1890s toma desde 1891
                        if (temporadaSelectedDecade === 1890) return yearNum >= 1891 && yearNum <= 1899;
                        return yearNum >= temporadaSelectedDecade && yearNum < temporadaSelectedDecade + 10;
                    }).map(year => {
                        const hasTournaments = history.some(h => h.anio === year);
                        if (!hasTournaments) return null; // Solo mostrar años con torneos
                        
                        return (
                          <button
                            key={year}
                            onClick={() => {
                               setTemporadaSelectedYearStr(year);
                               const tForYear = history.filter(h => h.anio === year);
                               if (tForYear.length > 0) setSelectedHistoryId(tForYear[0].id);
                               setTemporadaViewMode('year');
                            }}
                            className="glass-card"
                            style={{
                              padding: '2rem 1rem',
                              textAlign: 'center',
                              borderRadius: '16px',
                              cursor: 'pointer',
                              border: '1px solid rgba(255,255,255,0.1)',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                               e.currentTarget.style.transform = 'translateY(-5px)';
                               e.currentTarget.style.borderColor = 'var(--accent-gold)';
                               e.currentTarget.style.boxShadow = '0 10px 25px rgba(251, 191, 36, 0.15)';
                            }}
                            onMouseOut={(e) => {
                               e.currentTarget.style.transform = 'none';
                               e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                               e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
                            }}
                          >
                             <span className="title-font" style={{ fontSize: '2rem', color: 'white' }}>{year}</span>
                          </button>
                        );
                    })}
                  </div>
               </div>
            )}

            {/* VISTA DEL AÑO: REUTILIZA EL PANEL DERECHO CON UN HEADER DE TABS */}
            {temporadaViewMode === 'year' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Encabezado: Botón volver + Tabs de torneos */}
                  <div className="glass-panel" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '2rem', borderBottom: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.6)' }}>
                     <button
                        onClick={() => setTemporadaViewMode('calendar')}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold' }}
                     >
                        <ArrowLeft size={24} /> Volver
                     </button>
                     
                     <div style={{ width: '2px', height: '30px', background: 'rgba(255,255,255,0.2)' }}></div>
                     <h3 className="title-font" style={{ fontSize: '2rem', margin: 0 }}>Año {temporadaSelectedYearStr}</h3>
                     <div style={{ width: '2px', height: '30px', background: 'rgba(255,255,255,0.2)' }}></div>

                     <div style={{ display: 'flex', gap: '1rem', flex: 1, overflowX: 'auto', paddingBottom: '0.5rem' }} className="hide-scrollbar">
                        {history.filter(h => h.anio === temporadaSelectedYearStr).map(t => (
                           <button
                             key={t.id}
                             onClick={() => setSelectedHistoryId(t.id)}
                             style={{
                               background: selectedHistoryId === t.id ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                               color: selectedHistoryId === t.id ? 'black' : 'white',
                               border: '1px solid',
                               borderColor: selectedHistoryId === t.id ? 'var(--accent-gold)' : 'rgba(255,255,255,0.2)',
                               padding: '0.8rem 1.5rem',
                               borderRadius: '20px',
                               fontWeight: 'bold',
                               cursor: 'pointer',
                               whiteSpace: 'nowrap',
                               transition: 'all 0.2s'
                             }}
                           >
                             {t.torneo}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* VISOR DE TABLAS (VIEJO PANEL DERECHO) */}
                  <div className="hide-scrollbar" style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
                    {selectedTournament ? (
                      <motion.div 
                        key={selectedTournament.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                          <h3 className="title-font" style={{ fontSize: '2rem', color: 'white' }}>{selectedTournament.torneo}</h3>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '0.2rem' }}>🏆 {selectedTournament.campeon}</p>
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
                      <div style={{ padding: '4rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '4rem', opacity: 0.2, marginBottom: '1rem' }}>📜</div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Archivos Históricos de {temporadaSelectedYearStr}</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Todavía estamos desempolvando los registros de este año. ¡Pronto estarán disponibles!</p>
                      </div>
                    )}
                  </div>
              </div>
            )}
          </motion.div>
        `;

        const finalContent = parts[0] + startMarker + newTemporadasBlock + endMarker + subEndParts;
        fs.writeFileSync(path, finalContent);
        console.log("TEMPORADAS SECTION REFACTORED SUCCESSFULLY.");
    } else {
        console.log("Could not find end marker");
    }
} else {
    console.log("Could not find start marker");
}
