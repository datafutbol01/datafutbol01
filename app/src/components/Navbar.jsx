import { Link, useLocation } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const leagues = [
    { id: 'argentina', name: 'Argentina' },
    { id: 'inglesa', name: 'Inglesa' },
    { id: 'espanola', name: 'Española' },
    { id: 'italiana', name: 'Italiana' },
    { id: 'alemana', name: 'Alemana' },
    { id: 'francesa', name: 'Francesa' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 rounded-none" style={{ padding: '0 1rem' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 touch-target w-full justify-center md:justify-start" style={{ textDecoration: 'none', color: 'white' }}>
          <Trophy size={24} color="var(--accent-gold)" className="md:w-7 md:h-7" />
          <span className="title-font text-xl md:text-2xl font-bold tracking-wide">DataFútbol</span>
        </Link>
      </div>
    </nav>
  );
}
