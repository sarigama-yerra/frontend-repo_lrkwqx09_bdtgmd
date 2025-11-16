import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-emerald-300' : 'text-white/90 hover:text-emerald-200'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-lime-400 flex items-center justify-center text-black font-extrabold">
              O
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">OTIKA</p>
              <p className="text-xs text-white/70 -mt-1">Dominez la jungle du digital</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Accueil')}
            {navItem('/services', 'Services')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/contact', 'Contact')}
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-3 space-y-1">
            <div className="flex flex-col">
              {navItem('/', 'Accueil')}
              {navItem('/services', 'Services')}
              {navItem('/portfolio', 'Portfolio')}
              {navItem('/contact', 'Contact')}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
