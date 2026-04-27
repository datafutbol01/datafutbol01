import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import PwaPrompt from './components/PwaPrompt';
import ReloadPrompt from './components/ReloadPrompt';
import PullToRefresh from './components/PullToRefresh';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

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
          <ErrorBoundary>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="w-12 h-12 border-4 border-[#fbbf24] border-t-transparent rounded-full animate-spin drop-shadow-md"></div>
                  </div>
                }>
                  <Outlet />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </ErrorBoundary>
        </main>
        <PwaPrompt />
        <ReloadPrompt />
        <ScrollToTop />
      </div>
    </PullToRefresh>
  );
}

export default App;
