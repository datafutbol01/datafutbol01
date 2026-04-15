const fs = require('fs');

const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/pages/League.jsx';
let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const startIndex = lines.findIndex(l => l.trim() === "{activeTab === 'temporadas' && (");
const endIndex = lines.findIndex((l, i) => i > startIndex && l.trim() === "{activeTab === 'enfrentamientos' && (") - 1;

// Capture the selectedTournament rendering block to reuse it in the right panel
const selectedTournamentStartIndex = lines.findIndex((l, i) => i > startIndex && l.trim() === "{selectedTournament ? (");
const selectedTournamentEndIndex = lines.findIndex((l, i) => i > selectedTournamentStartIndex && l.includes("Todavía estamos desempolvando")) + 4; // up to the closing `)}` of the selectedTournament block

const rightPanelContent = lines.slice(selectedTournamentStartIndex, selectedTournamentEndIndex + 1).join('\n');

const newTemporadasBlock = `        {activeTab === 'temporadas' && (
          <motion.div 
            key="temporadas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{ padding: '0', display: 'flex', height: '80vh', overflow: 'hidden', borderRadius: '24px' }}
          >
            {/* PANEL IZQUIERDO: TIMELINE */}
            <div className="hide-scrollbar" style={{ flex: '0 0 320px', background: 'rgba(0,0,0,0.4)', borderRight: '1px solid var(--glass-border)', padding: '2rem 1rem', overflowY: 'auto' }}>
               <h3 className="title-font" style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '1px' }}>Línea de Tiempo</h3>
               
               {/* Opciones de Salto Rápido por Década en Sidebar */}
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem', marginBottom: '2.5rem', padding: '0 0.5rem' }}>
                 {decades.map(dec => (
                   <button
                     key={dec}
                     onClick={() => {
                        let yearToSelect = dec === 1890 ? '1891' : dec.toString();
                        const element = document.getElementById(\`sidebar-year-\${yearToSelect}\`);
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }}
                     style={{
                       background: 'rgba(255,255,255,0.05)',
                       color: 'var(--text-muted)',
                       border: '1px solid rgba(255,255,255,0.1)',
                       padding: '0.4rem 0.2rem',
                       borderRadius: '12px',
                       fontSize: '0.85rem',
                       cursor: 'pointer',
                       transition: 'all 0.2s ease',
                     }}
                     onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
                     onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                   >
                     {dec}s
                   </button>
                 ))}
               </div>

               {allYears.reverse().map(year => {
                  const tForYear = history.filter(h => h.anio === year);
                  if (tForYear.length === 0) return null;
                  
                  return (
                    <div id={\`sidebar-year-\${year}\`} key={year} style={{ marginBottom: '1.5rem', padding: '0 0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                         <span className="title-font" style={{ fontSize: '1.5rem', color: 'white' }}>{year}</span>
                         <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {tForYear.map(t => (
                          <button
                            key={t.id}
                            onClick={() => {
                               // Make sure selectedYear also stays in sync if needed elsewhere
                               setSelectedYear(year);
                               setSelectedHistoryId(t.id);
                            }}
                            style={{
                              background: selectedHistoryId === t.id ? 'var(--accent-gold)' : 'rgba(255,255,255,0.03)',
                              color: selectedHistoryId === t.id ? 'black' : 'var(--text-main)',
                              border: selectedHistoryId === t.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                              padding: '0.8rem 1rem',
                              borderRadius: '8px',
                              fontSize: '0.95rem',
                              fontWeight: selectedHistoryId === t.id ? 'bold' : 'normal',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.2s ease',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              boxShadow: selectedHistoryId === t.id ? '0 4px 15px rgba(251, 191, 36, 0.3)' : 'none'
                            }}
                            onMouseOver={(e) => { if (selectedHistoryId !== t.id) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                            onMouseOut={(e) => { if (selectedHistoryId !== t.id) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                          >
                            {t.torneo}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
               })}
            </div>

            {/* PANEL DERECHO: VISOR */}
            <div className="hide-scrollbar" style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
${rightPanelContent}
            </div>
          </motion.div>
        )}`;

// Replace the block
const beforeBlock = lines.slice(0, startIndex).join('\n');
const afterBlock = lines.slice(endIndex + 1).join('\n'); // + 1 to include the condition for activeTab === 'enfrentamientos'

fs.writeFileSync(path, beforeBlock + '\n' + newTemporadasBlock + '\n' + afterBlock);
console.log('League.jsx successfully updated with Master-Detail timeline layout.');
