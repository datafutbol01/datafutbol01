import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

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
    </div>
  );
}

export default App;
