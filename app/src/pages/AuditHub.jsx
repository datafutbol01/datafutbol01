import React, { useState, useMemo } from 'react';
import { getLeagues, getClubsByLeague } from '../data/loader';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AuditHub() {
    // Protección de entorno: Si NO es localhost (desarrollo), se oculta la ruta
    if (!import.meta.env.DEV) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red' }}>
                <h1 style={{ fontSize: '3rem' }}>ACCESO DENEGADO (SOLO LOCALHOST)</h1>
            </div>
        );
    }

    const [selectedLeague, setSelectedLeague] = useState('todas');

    const auditData = useMemo(() => {
        const leagues = getLeagues();
        let allClubs = [];

        leagues.forEach(league => {
            const clubs = getClubsByLeague(league.id);
            clubs.forEach(club => {
                
                // Verificar escudo
                let hasShield = false;
                if (club.datos?.escudo_actual) hasShield = true;
                if (club.evolucion_escudos?.length > 0) hasShield = true;

                // Verificar historial completo (H2H)
                const hasH2h = club.historial_completo && Object.keys(club.historial_completo).length > 0;

                // Verificar estadio
                const hasStadium = !!club.estadio;

                // Verificar leyendas
                const hasLegends = club.idolos_leyendas?.length > 0;

                // Verificar palmarés
                const hasPalmares = club.palmares?.torneos_nacionales?.length > 0 || club.palmares?.torneos_internacionales?.length > 0 || club.palmares?.amateur?.length > 0;

                allClubs.push({
                    id: club.id,
                    name: club.datos?.nombre_corto || club.datos?.nombre_completo || club.id,
                    league: league.name,
                    leagueId: league.id,
                    hasShield,
                    hasH2h,
                    hasStadium,
                    hasLegends,
                    hasPalmares
                });
            });
        });

        return allClubs;
    }, []);

    const filteredData = selectedLeague === 'todas' 
        ? auditData 
        : auditData.filter(c => c.leagueId === selectedLeague);

    const checkIcon = "✅";
    const crossIcon = "❌";

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'white', padding: '2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <Breadcrumbs paths={[{ name: 'Auditoría' }]} onBack={() => { window.location.href = '/'; }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <h1 className="title-font" style={{ fontSize: '3rem', margin: 0, color: 'var(--accent-gold)' }}>DASHBOARD DE AUDITORÍA</h1>
                    
                    <select 
                        value={selectedLeague} 
                        onChange={(e) => setSelectedLeague(e.target.value)}
                        style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', fontSize: '1.2rem', outline: 'none' }}
                    >
                        <option value="todas">Todas las Ligas</option>
                        {getLeagues().map(l => (
                            <option key={l.id} value={l.id}>{l.name}</option>
                        ))}
                    </select>
                </div>

                <div className="glass-panel hide-scrollbar" style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.1rem' }}>
                        <thead style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <tr>
                                <th style={{ padding: '1rem' }}>Club</th>
                                <th style={{ padding: '1rem' }}>Liga</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Escudo</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Historiales (H2H)</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Estadio</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Leyendas</th>
                                <th style={{ padding: '1rem', textAlign: 'center' }}>Palmarés</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((club, i) => (
                                <tr key={`${club.leagueId}-${club.id}`} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.02)' }}>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{club.name}</td>
                                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{club.league}</td>
                                    
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                                        <span style={{ filter: club.hasShield ? 'none' : 'grayscale(1) opacity(0.5)' }}>{club.hasShield ? checkIcon : crossIcon}</span>
                                    </td>
                                    
                                    <td style={{ padding: '1rem', textAlign: 'center', background: club.hasH2h ? 'transparent' : 'rgba(255,0,0,0.1)' }}>
                                        <span style={{ filter: club.hasH2h ? 'none' : 'grayscale(1) opacity(0.5)' }}>{club.hasH2h ? checkIcon : crossIcon}</span>
                                    </td>
                                    
                                    <td style={{ padding: '1rem', textAlign: 'center', background: club.hasStadium ? 'transparent' : 'rgba(255,0,0,0.1)' }}>
                                        <span style={{ filter: club.hasStadium ? 'none' : 'grayscale(1) opacity(0.5)' }}>{club.hasStadium ? checkIcon : crossIcon}</span>
                                    </td>
                                    
                                    <td style={{ padding: '1rem', textAlign: 'center', background: club.hasLegends ? 'transparent' : 'rgba(255,0,0,0.1)' }}>
                                        <span style={{ filter: club.hasLegends ? 'none' : 'grayscale(1) opacity(0.5)' }}>{club.hasLegends ? checkIcon : crossIcon}</span>
                                    </td>
                                    
                                    <td style={{ padding: '1rem', textAlign: 'center', background: club.hasPalmares ? 'transparent' : 'rgba(255,0,0,0.1)' }}>
                                        <span style={{ filter: club.hasPalmares ? 'none' : 'grayscale(1) opacity(0.5)' }}>{club.hasPalmares ? checkIcon : crossIcon}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
