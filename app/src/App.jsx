import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PwaPrompt from './components/PwaPrompt';
import PullToRefresh from './components/PullToRefresh';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hideNavbar = isHome;

  return (
    <PullToRefresh>
      <div className="min-h-screen bg-[#020617] text-white">
        {!hideNavbar && <Navbar />}
        <main className={!hideNavbar ? "pt-20" : ""}>
          <Outlet />
        </main>
        <PwaPrompt />
      </div>
    </PullToRefresh>
  );
}

export default App;
