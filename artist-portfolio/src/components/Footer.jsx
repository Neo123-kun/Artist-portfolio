import { Link } from 'react-router-dom';

const socialLinks = [
  { name: "TwitterSFW / X", url: "https://twitter.com/youraccount" },
  { name: "TwitterNSFW / X", url: "https://x.com/Neoarts121?t=3P2Qz417IOPL-stJCcUCSg&s=09" },
  { name: "Pixiv", url: "https://www.pixiv.net/en/users/46924840" },
  { name: "Instagram", url: "https://instagram.com/youraccount" }
];

<div className="flex flex-col gap-2">
  {socialLinks.map(link => (
    <a
      key={link.name}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
      className="no-underline hover:text-accent-DEFAULT transition-colors"
    >
      {link.name}
    </a>
  ))}
</div>

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }} className="mt-24 py-12">
      <div className="container mx-auto px-6">
        <div className="row g-8">
          <div className="col-md-4 mb-8 mb-md-0">
            <p style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)' }} className="text-lg font-semibold mb-3">
              Neoarts
            </p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              Digital artist creating character art using Ibispaint and FireAlpaca.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <p className="section-label mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="no-underline hover:text-accent-DEFAULT transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-6 col-md-2">
            <p className="section-label mb-4">Find me</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
                  className="no-underline hover:text-accent-DEFAULT transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <p className="section-label mb-4">Newsletter</p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>New works & exhibition updates.</p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRight: 'none',
                  color: 'var(--text-primary)',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.8rem',
                  outline: 'none',
                  flex: 1,
                  fontFamily: '"DM Sans", sans-serif',
                }}
              />
              <button style={{ background: 'var(--accent)', color: 'white', border: 'none', padding: '0.5rem 1rem', fontSize: '0.8rem', cursor: 'pointer' }}>
                →
              </button>
            </div>
          </div>
        </div>

        <hr className="divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace' }}>
            Portfolio v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
