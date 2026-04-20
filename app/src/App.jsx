import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import PwaPrompt from './components/PwaPrompt';
import ReloadPrompt from './components/ReloadPrompt';
import PullToRefresh from './components/PullToRefresh';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hideNavbar = isHome;

  // Seguimiento de páginas para Google Analytics
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <PullToRefresh>
      <div className="min-h-screen bg-[#020617] text-white">
        {!hideNavbar && <Navbar />}
        <main className={!hideNavbar ? "pt-20" : ""}>
          <Outlet />
        </main>
        <PwaPrompt />
        <ReloadPrompt />
      </div>
    </PullToRefresh>
  );
}

export default App;
