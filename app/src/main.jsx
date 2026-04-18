import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Leagues from './pages/Leagues.jsx'
import League from './pages/League.jsx'
import ClubDetail from './pages/ClubDetail.jsx'
import WorldCupsHub from './pages/WorldCupsHub.jsx'
import LiveScoresHub from './pages/LiveScoresHub.jsx'
import './index.css'
import { inject } from '@vercel/analytics';

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
          <Route path="resultados" element={<LiveScoresHub />} />
          <Route path="liga/:leagueId" element={<League />} />
          <Route path="liga/:leagueId/club/:clubId" element={<ClubDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
