import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Leagues from './pages/Leagues.jsx'
import League from './pages/League.jsx'
import ClubDetail from './pages/ClubDetail.jsx'
import WorldCupsHub from './pages/WorldCupsHub.jsx'
import CupsHub from './pages/CupsHub.jsx'
import LiveScoresHub from './pages/LiveScoresHub.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="mundiales" element={<WorldCupsHub />} />
          <Route path="copas" element={<CupsHub />} />
          <Route path="resultados" element={<LiveScoresHub />} />
          <Route path="liga/:leagueId" element={<League />} />
          <Route path="liga/:leagueId/club/:clubId" element={<ClubDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
