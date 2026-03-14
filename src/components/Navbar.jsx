import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        background: 'var(--nav-bg)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div
            style={{ background: 'var(--accent)', color: 'white' }}
            className="w-8 h-8 flex items-center justify-center font-display font-bold text-sm"
          >
            N
          </div>
          <span
            style={{ color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}
            className="text-lg font-semibold tracking-wide"
          >
            NeoArts
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ['/', 'Home'],
            ['/gallery', 'Gallery'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            className="w-9 h-9 flex items-center justify-center hover:border-accent-DEFAULT transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Add artwork CTA */}
          {/* <NavLink to="/add" className="hidden md:block btn-primary text-sm" style={{ padding: '0.4rem 1rem' }}>
            + Add Work
          </NavLink> */}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 p-1"
            style={{ color: 'var(--text-primary)' }}
          >
            <span style={{ background: 'currentColor', display: 'block', width: 20, height: 1.5, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
            <span style={{ background: 'currentColor', display: 'block', width: 20, height: 1.5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ background: 'currentColor', display: 'block', width: 20, height: 1.5, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
          className="md:hidden px-6 py-6 flex flex-col gap-5"
        >
          {[
            ['/', 'Home'],
            ['/gallery', 'Gallery'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
            // ['/add', '+ Add Work'],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link-custom text-base ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
