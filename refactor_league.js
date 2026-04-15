const fs = require('fs');
const filepath = 'app/src/pages/League.jsx';
let code = fs.readFileSync(filepath, 'utf8');

// I need to add state for the new SubTab. Let's add it near where `activeTab` is defined.
if (!code.includes('const [activeTorneoTab')) {
    code = code.replace(
        "const [activeTab, setActiveTab] = useState('clubes');",
        "const [activeTab, setActiveTab] = useState('clubes');\n  const [activeTorneoTab, setActiveTorneoTab] = useState('metropolitano');"
    );
}

// Now find the block: `{activeTab === 'temporadas' && (`
const startMarker = "{activeTab === 'temporadas' && (";
const endMarker = "        {activeTab === 'enfrentamientos' && ("; // The next tab block

let startIndex = code.indexOf(startMarker);
let endIndex = code.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find blocks. Start:", startIndex, "End:", endIndex);
    process.exit(1);
}

const newTemporadasJSX = `{activeTab === 'temporadas' && (
          <motion.div 
            key="temporadas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-panel"
            style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '80vh', overflow: 'hidden', borderRadius: '24px' }}
          >
            {/* SUB-TABS: CATEGORÍAS DE TORNEOS */}
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                    onClick={() => setActiveTorneoTab('metropolitano')}
                    style={{
                        background: activeTorneoTab === 'metropolitano' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                        color: activeTorneoTab === 'metropolitano' ? 'black' : 'white',
                        border: '1px solid', borderColor: activeTorneoTab === 'metropolitano' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                        padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s'
                    }}
                >
                    Metropolitanos
                </button>
                <button
                    onClick={() => setActiveTorneoTab('copas')}
                    style={{
                        background: activeTorneoTab === 'copas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                        color: activeTorneoTab === 'copas' ? 'black' : 'white',
                        border: '1px solid', borderColor: activeTorneoTab === 'copas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                        padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s'
                    }}
                >
                    Copas Nacionales
                </button>
                <button
                    onClick={() => setActiveTorneoTab('nacional')}
                    style={{
                        background: activeTorneoTab === 'nacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                        color: activeTorneoTab === 'nacional' ? 'black' : 'white',
                        border: '1px solid', borderColor: activeTorneoTab === 'nacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                        padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s'
                    }}
                >
                    Nacionales
                </button>
            </div>

            {/* LISTA VERTICAL DE CAMPEONES */}
            <div className="hide-scrollbar" style={{ flex: 1, padding: '2rem', overflowY: 'auto', background: 'rgba(0,0,0,0.2)' }}>
                {(() => {
                    // Filtrar torneo según categoría
                    let filteredHistory = history.filter(t => {
                        const name = (t.torneo || "").toLowerCase();
                        if (activeTorneoTab === 'copas') {
                            return name.includes('copa') || name.includes('superfinal') || name.includes('trofeo de campeones');
                        }
                        if (activeTorneoTab === 'nacional') {
                            return name.includes('nacional') && !name.includes('primera división');
                        }
                        if (activeTorneoTab === 'metropolitano') {
                            const isCopa = name.includes('copa') || name.includes('superfinal') || name.includes('trofeo de campeones');
                            const isNacional = name.includes('nacional') && !name.includes('primera división');
                            return !isCopa && !isNacional;
                        }
                        return true;
                    });

                    // Orden 1891 hacia abajo (Ascendente por año)
                    filteredHistory.sort((a, b) => parseInt(a.anio) - parseInt(b.anio));

                    if (filteredHistory.length === 0) {
                        return (
                           <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                               <p style={{ fontSize: '1.2rem' }}>No hay registros para esta categoría aún.</p>
                           </div>
                        );
                    }

                    return (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                            {filteredHistory.map((t, idx) => {
                                // Buscar escudo del club campeón
                                let logo = '';
                                let shortName = t.campeon;
                                
                                if (t.campeon) {
                                    const club = clubs.find(c => 
                                        c.datos?.nombre_corto === t.campeon || 
                                        c.datos?.nombre_oficial === t.campeon || 
                                        c.datos?.nombre_completo === t.campeon || 
                                        c.id.toLowerCase() === t.campeon.toLowerCase().replace(/[^a-z0-9]/g, '-')
                                    );
                                    if (club) {
                                        logo = (club.evolucion_escudos && club.evolucion_escudos.length > 0) 
                                               ? club.evolucion_escudos[club.evolucion_escudos.length - 1].url 
                                               : (club.datos?.escudo_actual || \`/escudos/\${club.id}.png\`);
                                               
                                        // Usar siempre el nombre corto oficial mapeado si existe
                                        shortName = club.datos?.nombre_corto || club.datos?.nombre_completo || t.campeon;
                                    }
                                }

                                return (
                                    <div key={idx} className="glass-panel hover-card" style={{ 
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.2s', position: 'relative', overflow: 'hidden'
                                    }}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0.2rem' }}>{t.anio}</div>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.torneo}</div>
                                        </div>
                                        
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 2, justifyContent: 'flex-end' }}>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ color: 'white', fontWeight: '900', fontSize: '1.8rem', letterSpacing: '0.5px' }} className="title-font">{shortName || "Desconocido"}</div>
                                                {t.subcampeon && <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Sub: {t.subcampeon}</div>}
                                            </div>
                                            <div style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.4))' }}>
                                                {logo ? (
                                                    <img src={logo} alt={shortName} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                                                         onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                                                ) : <div style={{ display: 'none' }}></div>}
                                                <div style={{ display: logo ? 'none' : 'flex', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'white', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>
                                                    {shortName ? shortName.charAt(0) : '?'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })()}
            </div>
          </motion.div>
        )}
`;

code = code.substring(0, startIndex) + newTemporadasJSX + code.substring(endIndex);

fs.writeFileSync(filepath, code);
console.log("League.jsx Campeones UI successfully patched.");
