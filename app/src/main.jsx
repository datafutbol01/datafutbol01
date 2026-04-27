import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
const Home = React.lazy(() => import('./pages/Home.jsx'));
const Leagues = React.lazy(() => import('./pages/Leagues.jsx'));
const League = React.lazy(() => import('./pages/League.jsx'));
const ClubDetail = React.lazy(() => import('./pages/ClubDetail.jsx'));
const WorldCupsHub = React.lazy(() => import('./pages/WorldCupsHub.jsx'));
const ChampionsHub = React.lazy(() => import('./pages/ChampionsHub.jsx'));
const LiveScoresHub = React.lazy(() => import('./pages/LiveScoresHub.jsx'));
const AuditHub = React.lazy(() => import('./pages/AuditHub.jsx'));
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
          <Route path="mundiales" element={<WorldCupsHub />} />
          <Route path="champions" element={<ChampionsHub />} />
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
