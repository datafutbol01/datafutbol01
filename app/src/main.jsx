import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Leagues from './pages/Leagues.jsx';
import League from './pages/League.jsx';
import ClubDetail from './pages/ClubDetail.jsx';
import WorldCupsHub from './pages/WorldCupsHub.jsx';
import WorldCup2026Hub from './pages/WorldCup2026Hub.jsx';
import ChampionsHub from './pages/ChampionsHub.jsx';
import LiveScoresHub from './pages/LiveScoresHub.jsx';
import AuditHub from './pages/AuditHub.jsx';
import CopasIndex from './pages/CopasIndex.jsx';
import './index.css'
import { inject } from '@vercel/analytics';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-ZJ4MJYPKSZ');
// Iniciar analíticas global y crudo para evitar cuellos de botella de React
inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="mundial2026" element={<WorldCup2026Hub />} />
          <Route path="mundiales" element={<WorldCupsHub />} />
          <Route path="copas" element={<CopasIndex />} />
          <Route path="copas/:torneo" element={<ChampionsHub />} />
          <Route path="resultados" element={<LiveScoresHub />} />
          <Route path="auditor" element={<AuditHub />} />
          <Route path="liga/:leagueId" element={<League />} />
          <Route path="liga/:leagueId/club/:clubId" element={<ClubDetail />} />
          <Route path="*" element={<div className="p-8 text-center text-red-500 min-h-[500px] flex items-center justify-center title-font text-3xl">404 - Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
