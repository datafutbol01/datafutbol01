import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe2, AlertCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const WorldCup2026Hub = () => {
    const [activeTab, setActiveTab] = useState('grupos');
    const [standings, setStandings] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWCData = async () => {
            try {
                const response = await fetch('https://v3.football.api-sports.io/standings?league=1&season=2026', {
                    headers: {
                        'x-rapidapi-host': 'v3.football.api-sports.io',
                        'x-rapidapi-key': import.meta.env.VITE_API_FOOTBALL_KEY || '07048fa03363eb0cd181ac3797f13670'
                    }
                });
                const data = await response.json();
                if (data.response && data.response.length > 0) {
                    setStandings(data.response[0].league.standings);
                }
            } catch (err) {
                console.error("Error fetching WC data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWCData();
    }, []);

    // Extraemos todos los equipos para la pestaña de participantes
    const translateTeamName = (name) => {
        const dictionary = {
            "Brazil": "Brasil", "Germany": "Alemania", "Spain": "España", "France": "Francia",
            "United States": "Estados Unidos", "England": "Inglaterra", "Italy": "Italia",
            "Netherlands": "Países Bajos", "Belgium": "Bélgica", "Croatia": "Croacia",
            "Switzerland": "Suiza", "Denmark": "Dinamarca", "Sweden": "Suecia",
            "Morocco": "Marruecos", "Japan": "Japón", "South Korea": "Corea del Sur", "Korea Republic": "Corea del Sur",
            "Saudi Arabia": "Arabia Saudita", "Iran": "Irán", "Ivory Coast": "Costa de Marfil", "Cote D Ivoire": "Costa de Marfil",
            "Cameroon": "Camerún", "Egypt": "Egipto", "South Africa": "Sudáfrica",
            "Algeria": "Argelia", "Turkey": "Turquía", "Poland": "Polonia",
            "Wales": "Gales", "Scotland": "Escocia", "Ireland": "Irlanda",
            "New Zealand": "Nueva Zelanda", "Peru": "Perú", "Uruguay": "Uruguay",
            "Ecuador": "Ecuador", "Chile": "Chile", "Paraguay": "Paraguay",
            "Bolivia": "Bolivia", "Venezuela": "Venezuela", "Canada": "Canadá",
            "Mexico": "México", "Panama": "Panamá", "Honduras": "Honduras",
            "Australia": "Australia", "Serbia": "Serbia", "Romania": "Rumania",
            "Hungary": "Hungría", "Czech Republic": "República Checa", "Slovakia": "Eslovaquia",
            "Slovenia": "Eslovenia", "Ukraine": "Ucrania", "Russia": "Rusia",
            "Greece": "Grecia", "Iceland": "Islandia", "Norway": "Noruega",
            "Finland": "Finlandia", "Austria": "Austria", "Bosnia & Herzegovina": "Bosnia y Herzegovina",
            "Northern Ireland": "Irlanda del Norte", "United Arab Emirates": "Emiratos Árabes Unidos",
            "China": "China", "Uzbekistan": "Uzbekistán", "Iraq": "Irak",
            "Oman": "Omán", "Syria": "Siria", "Bahrain": "Bahréin",
            "Jordan": "Jordania", "Palestine": "Palestina", "Lebanon": "Líbano",
            "Kuwait": "Kuwait", "North Korea": "Corea del Norte", "Korea DPR": "Corea del Norte",
            "DR Congo": "RD Congo", "Mali": "Malí", "Burkina Faso": "Burkina Faso",
            "Guinea": "Guinea", "Zambia": "Zambia", "Gabon": "Gabón",
            "Angola": "Angola", "Cape Verde": "Cabo Verde", "Equatorial Guinea": "Guinea Ecuatorial",
            "Haiti": "Haití", "Trinidad and Tobago": "Trinidad y Tobago", "Jamaica": "Jamaica"
        };
        return dictionary[name] || name;
    };

    const allTeams = standings ? standings.flatMap(g => g).map(t => t.team).sort((a, b) => translateTeamName(a.name).localeCompare(translateTeamName(b.name))) : [];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)', position: 'relative' }}>
            <SEO 
                title="Mundial Norteamérica 2026 - DataFútbol"
                description="Seguí toda la actualidad, fase de grupos y llaves eliminatorias del Mundial 2026 en Estados Unidos, México y Canadá."
            />

            {/* Background Image Similar to WorldCupsHub */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
                    <motion.img
                        src="/bg_mundial_2026.png"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.05, opacity: 1 }}
                        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', filter: 'contrast(1.1) saturate(1.2) brightness(0.9)' }}
                    />
                </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '2rem', flex: 1 }}>
                    <div style={{ position: 'relative', zIndex: 100, marginBottom: '2rem' }}>
                        <Breadcrumbs 
                            paths={[{ name: 'Mundial 2026' }]} 
                            onBack={() => { window.location.href = '/'; }} 
                        />
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
                        <h1 className="title-font animate-fade-in" style={{ fontSize: '3.5rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                            <img src="https://media.api-sports.io/football/leagues/1.png" alt="World Cup 2026" style={{ width: '60px', height: '60px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.5))' }} />
                            <span style={{ color: 'var(--accent-gold)' }}>COPA MUNDIAL</span> 2026
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
                            Norteamérica • Estados Unidos - México - Canadá
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '2rem' }}>
                        {/* Sidebar Navigation */}
                        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: 'fit-content' }}>
                            <div style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                NAVEGACIÓN DEL TORNEO
                            </div>

                            <button
                                onClick={() => setActiveTab('grupos')}
                                style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'grupos' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'grupos' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'grupos' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                            >
                                1. Fase de Grupos
                            </button>

                            <button
                                onClick={() => setActiveTab('llaves')}
                                style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'llaves' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'llaves' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'llaves' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                            >
                                2. Llave Eliminatoria
                            </button>

                            <button
                                onClick={() => setActiveTab('participantes')}
                                style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'participantes' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255,255,255,0.05)', color: activeTab === 'participantes' ? 'var(--accent-gold)' : 'white', border: `1px solid ${activeTab === 'participantes' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                            >
                                3. Naciones Clasificadas
                            </button>
                        </div>

                        {/* Content Area */}
                        <div style={{ padding: '2rem', minHeight: '500px', position: 'relative' }}>
                            {loading ? (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--accent-gold)' }}>Cargando datos oficiales...</div>
                            ) : (
                                <AnimatePresence mode="wait">
                                    {activeTab === 'grupos' && (
                                        <motion.div key="grupos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                Fase de Grupos
                                            </h3>

                                            {standings ? (
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                                                    {standings.map((group, idx) => {
                                                        const groupName = group[0].group.replace('Group ', '');
                                                        return (
                                                            <div key={idx} style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                                                <h4 className="title-font" style={{ fontSize: '1.6rem', color: 'var(--accent-gold)', marginTop: 0, marginBottom: '1rem', borderBottom: '1px solid rgba(251, 191, 36, 0.2)', paddingBottom: '0.5rem' }}>
                                                                    Grupo {groupName}
                                                                </h4>
                                                                <div className="hide-scrollbar" style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                                                        <thead>
                                                                            <tr style={{ color: 'var(--text-muted)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                                                                                <th style={{ textAlign: 'left', padding: '0.5rem', minWidth: '150px' }}>Selección</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>Pts</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PJ</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PG</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PE</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>PP</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>GF</th>
                                                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>GC</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {group.map((t, i) => (
                                                                                <tr key={t.team.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'white', background: i < 2 ? 'rgba(251, 191, 36, 0.05)' : 'transparent', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={(e) => e.currentTarget.style.background = i < 2 ? 'rgba(251, 191, 36, 0.05)' : 'transparent'}>
                                                                                    <td style={{ padding: '0.8rem 0.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: i < 2 ? 'bold' : 'normal' }}>
                                                                                        <span style={{ color: i < 2 ? '#4ade80' : 'var(--text-muted)', width: '16px', fontSize: '0.8rem', textAlign: 'center' }}>{i + 1}</span>
                                                                                        <img src={t.team.logo} alt={t.team.name} style={{ width: '24px', height: '16px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.5)' }} />
                                                                                        {translateTeamName(t.team.name)}
                                                                                    </td>
                                                                                    <td style={{ textAlign: 'center', fontWeight: '900', color: 'var(--accent-gold)' }}>{t.points}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.all.played}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.all.win}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.all.draw}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.all.lose}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.all.goals.for}</td>
                                                                                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.all.goals.against}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                                                    Las tablas se inyectarán próximamente.
                                                </div>
                                            )}
                                        </motion.div>
                                    )}

                                    {activeTab === 'llaves' && (
                                        <motion.div key="llaves" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                Llave Eliminatoria (32 Equipos)
                                            </h3>
                                            
                                            <div className="hide-scrollbar" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 250px)', gap: '2rem', minWidth: '1200px' }}>
                                                    {/* Column 1: Dieciseisavos */}
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                        <h4 style={{ textAlign: 'center', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(251, 191, 36, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>16avos de Final</h4>
                                                        {[
                                                            { t1: "1° Grupo A", t2: "3° C/E/F/H/I" },
                                                            { t1: "2° Grupo B", t2: "2° Grupo E" },
                                                            { t1: "1° Grupo C", t2: "3° A/B/C/D/F" },
                                                            { t1: "2° Grupo D", t2: "2° Grupo G" },
                                                            { t1: "1° Grupo E", t2: "3° A/B/C/D/F" },
                                                            { t1: "2° Grupo F", t2: "2° Grupo I" },
                                                            { t1: "1° Grupo G", t2: "3° A/E/H/I/J" },
                                                            { t1: "2° Grupo H", t2: "2° Grupo J" },
                                                            { t1: "1° Grupo B", t2: "3° E/F/G/I/J" },
                                                            { t1: "2° Grupo A", t2: "2° Grupo C" },
                                                            { t1: "1° Grupo D", t2: "3° B/E/F/I/J" },
                                                            { t1: "2° Grupo K", t2: "2° Grupo L" },
                                                            { t1: "1° Grupo F", t2: "3° C/E/F/H/I" },
                                                            { t1: "2° Grupo G", t2: "2° Grupo H" },
                                                            { t1: "1° Grupo H", t2: "3° B/C/E/F/J" },
                                                            { t1: "2° Grupo I", t2: "2° Grupo K" }
                                                        ].map((match, i) => (
                                                            <div key={i} style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
                                                                    <span style={{ color: 'white', fontWeight: 'bold' }}>{match.t1}</span>
                                                                    <span style={{ color: 'var(--text-muted)' }}>-</span>
                                                                </div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', fontSize: '0.85rem' }}>
                                                                    <span style={{ color: 'white', fontWeight: 'bold' }}>{match.t2}</span>
                                                                    <span style={{ color: 'var(--text-muted)' }}>-</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 2: Octavos */}
                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '2rem 0' }}>
                                                        <h4 style={{ textAlign: 'center', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(251, 191, 36, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '-3rem' }}>Octavos</h4>
                                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                                            <div key={i} style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}><span style={{ color: 'var(--text-muted)' }}>Ganador {i*2-1}</span></div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', fontSize: '0.85rem' }}><span style={{ color: 'var(--text-muted)' }}>Ganador {i*2}</span></div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 3: Cuartos */}
                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '6rem 0' }}>
                                                        <h4 style={{ textAlign: 'center', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(251, 191, 36, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '-7rem' }}>Cuartos</h4>
                                                        {[1, 2, 3, 4].map(i => (
                                                            <div key={i} style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}><span style={{ color: 'var(--text-muted)' }}>Clasificado</span></div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', fontSize: '0.85rem' }}><span style={{ color: 'var(--text-muted)' }}>Clasificado</span></div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 4: Semis */}
                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '12rem 0' }}>
                                                        <h4 style={{ textAlign: 'center', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(251, 191, 36, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '-13rem' }}>Semifinal</h4>
                                                        {[1, 2].map(i => (
                                                            <div key={i} style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}><span style={{ color: 'var(--text-muted)' }}>Semifinalista</span></div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem', fontSize: '0.85rem' }}><span style={{ color: 'var(--text-muted)' }}>Semifinalista</span></div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 5: Final */}
                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                        <h4 style={{ textAlign: 'center', color: 'var(--accent-gold)', borderBottom: '1px solid rgba(251, 191, 36, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Gran Final</h4>
                                                        <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: '2px solid var(--accent-gold)', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1rem' }}><span style={{ color: 'white', fontWeight: 'bold' }}>Finalista 1</span></div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', fontSize: '1rem' }}><span style={{ color: 'white', fontWeight: 'bold' }}>Finalista 2</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'participantes' && (
                                        <motion.div key="participantes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <div style={{ marginBottom: '2rem' }}>
                                                <h3 className="title-font" style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                                    Naciones Clasificadas ({allTeams.length})
                                                </h3>
                                                <p style={{ color: '#ef4444', fontSize: '0.95rem', fontWeight: 'bold', margin: 0, marginTop: '0.5rem' }}>
                                                    ⚠️ Plantillas Pendientes: Pre-lista el 11 de mayo. Lista Definitiva (26 jugadores) el 30 de mayo.
                                                </p>
                                            </div>
                                            
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                                {allTeams.map((team, i) => (
                                                    <div
                                                        key={i}
                                                        style={{
                                                            display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', cursor: 'not-allowed', transition: 'all 0.2s', opacity: 0.7
                                                        }}
                                                    >
                                                        <div style={{ width: '40px', height: '26px', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
                                                            <img
                                                                src={team.logo}
                                                                alt={translateTeamName(team.name)}
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>{translateTeamName(team.name)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldCup2026Hub;
