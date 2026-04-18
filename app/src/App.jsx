import { Outlet, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import PwaPrompt from './components/PwaPrompt';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hideNavbar = isHome;

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? "pt-20" : ""}>
        <Outlet />
      </main>
      <PwaPrompt />
      <Analytics />
    </div>
  );
}

export default App;
