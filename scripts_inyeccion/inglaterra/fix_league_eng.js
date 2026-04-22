const fs = require('fs');

let code = fs.readFileSync('app/src/pages/League.jsx', 'utf8');

// Insert useEffect for tab default
if (!code.includes("useEffect(() => {")) {
// It already has useEffect imported, but let's just insert it after useState.
const stateReplacement = `const [activeTorneoTab, setActiveTorneoTab] = useState(leagueId === 'inglaterra' ? 'premier' : 'metropolitano');
  
  useEffect(() => {
      setActiveTorneoTab(leagueId === 'inglaterra' ? 'premier' : 'metropolitano');
  }, [leagueId]);`;
    
code = code.replace("const [activeTorneoTab, setActiveTorneoTab] = useState('metropolitano');", stateReplacement);
}

// Replace the sub-tab buttons
const startTabs = "{/* SUB-TABS: CATEGORÍAS DE TORNEOS */}";
const endTabs = "{/* LISTA VERTICAL DE CAMPEONES */}";

let regexTabs = new RegExp(startTabs.replace(/[.*+?^$\{()|[\\]\\\\]/g, '\\\\$&') + "[\\\\s\\\\S]*?" + endTabs.replace(/[.*+?^$\{()|[\\]\\\\]/g, '\\\\$&'));

const newTabs = `{/* SUB-TABS: CATEGORÍAS DE TORNEOS */}
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {leagueId === 'inglaterra' ? (
                    <>
                        <button onClick={() => setActiveTorneoTab('premier')} style={{ background: activeTorneoTab === 'premier' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'premier' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'premier' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            Premier League / First Div
                        </button>
                        <button onClick={() => setActiveTorneoTab('fa_cup')} style={{ background: activeTorneoTab === 'fa_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'fa_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'fa_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            FA Cup
                        </button>
                        <button onClick={() => setActiveTorneoTab('league_cup')} style={{ background: activeTorneoTab === 'league_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'league_cup' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'league_cup' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            League Cup / EFL
                        </button>
                        <button onClick={() => setActiveTorneoTab('community_shield')} style={{ background: activeTorneoTab === 'community_shield' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'community_shield' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'community_shield' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            Community Shield
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setActiveTorneoTab('metropolitano')} style={{ background: activeTorneoTab === 'metropolitano' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'metropolitano' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'metropolitano' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            Metropolitanos
                        </button>
                        <button onClick={() => setActiveTorneoTab('copas')} style={{ background: activeTorneoTab === 'copas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'copas' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'copas' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            Copas Nacionales
                        </button>
                        <button onClick={() => setActiveTorneoTab('nacional')} style={{ background: activeTorneoTab === 'nacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)', color: activeTorneoTab === 'nacional' ? 'black' : 'white', border: '1px solid', borderColor: activeTorneoTab === 'nacional' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                            Nacionales
                        </button>
                    </>
                )}
            </div>

            {/* LISTA VERTICAL DE CAMPEONES */}`;

code = code.replace(regexTabs, newTabs);


// Add filtering logic to history matching
const originalFilter = `// Filtrar torneo según categoría
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
                        }`;
                        
const newFilter = `// Filtrar torneo según categoría
                    let filteredHistory = history.filter(t => {
                        const name = (t.torneo || "").toLowerCase();
                        
                        // Categorías Inglesas
                        if (activeTorneoTab === 'fa_cup') return name.includes('fa cup');
                        if (activeTorneoTab === 'league_cup') return name.includes('league cup') || name.includes('efl cup') || name.includes('carabao') || name.includes('milk cup') || name.includes('coca-cola cup');
                        if (activeTorneoTab === 'community_shield') return name.includes('community shield') || name.includes('charity shield');
                        if (activeTorneoTab === 'premier') {
                            const isCup = name.includes('cup') || name.includes('shield');
                            return !isCup; // Todo lo que no sea copa es liga (Primera D / Premier)
                        }

                        // Categorías Argentinas
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
                        }`;

code = code.replace(originalFilter, newFilter);


// Now patching aliases for England:
const originalAliases = `const aliases = {
                                        "velez sarsfield": "velez-sarsfield",
                                        "vélez sarsfield": "velez-sarsfield",
                                        "estudiantes (lp)": "estudiantes-lp",
                                        "gimnasia y esgrima (lp)": "gimnasia-lp",
                                        "gimnasia y esgrima la plata": "gimnasia-lp",
                                        "san lorenzo de almagro": "san-lorenzo",
                                        "argentinos juniors": "argentinos-juniors",
                                        "central cordoba (sde)": "central-cordoba-sde"
                                    };`;

const newAliases = `const aliases = {
                                        // ARG
                                        "velez sarsfield": "velez-sarsfield",
                                        "vélez sarsfield": "velez-sarsfield",
                                        "estudiantes (lp)": "estudiantes-lp",
                                        "gimnasia y esgrima (lp)": "gimnasia-lp",
                                        "gimnasia y esgrima la plata": "gimnasia-lp",
                                        "san lorenzo de almagro": "san-lorenzo",
                                        "argentinos juniors": "argentinos-juniors",
                                        "central cordoba (sde)": "central-cordoba-sde",
                                        // ENG
                                        "manchester united": "manchester-united",
                                        "manchester city": "manchester-city",
                                        "aston villa": "aston-villa",
                                        "newcastle united": "newcastle",
                                        "nottingham forest": "nottingham-forest",
                                        "leicester city": "leicester",
                                        "west ham united": "west-ham",
                                        "crystal palace": "crystal-palace",
                                        "wolverhampton wanderers": "wolves"
                                    };`;

code = code.replace(originalAliases, newAliases);

fs.writeFileSync('app/src/pages/League.jsx', code);
console.log("League.jsx dynamically patched for England and Argentina.");
