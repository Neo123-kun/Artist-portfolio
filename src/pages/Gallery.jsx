import { useState } from 'react';
import { useArtworks } from '../context/ArtworkContext';
import ArtworkModal from '../components/ArtworkModal';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const { artworks, categories } = useArtworks();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);
  const [layout, setLayout] = useState('grid'); // 'grid' | 'masonry'

  const filtered = activeCategory === 'All'
    ? artworks
    : artworks.filter(a => a.category === activeCategory);

  return (
    <div className="page-transition" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Complete Collection</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', lineHeight: 1.15 }}>
              Gallery
            </h1>
            <div className="flex items-center gap-3">
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                {filtered.length} work{filtered.length !== 1 ? 's' : ''}
              </span>
              <div style={{ width: 1, height: 14, background: 'var(--border)' }} />
              {/* Layout toggle */}
              <div className="flex gap-1">
                {[['grid', '⊞'], ['masonry', '▤']].map(([l, icon]) => (
                  <button
                    key={l}
                    onClick={() => setLayout(l)}
                    style={{
                      background: layout === l ? 'var(--accent)' : 'transparent',
                      color: layout === l ? 'white' : 'var(--text-muted)',
                      border: '1px solid var(--border)',
                      width: 32, height: 32,
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      transition: 'all 0.2s',
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <Link to="/add" className="btn-primary" style={{ padding: '0.4rem 0.875rem', fontSize: '0.8rem' }}>
                + Add Work
              </Link>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tag-pill ${activeCategory === cat ? 'active' : ''}`}
              style={{ cursor: 'pointer', border: 'none', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em', fontSize: '0.65rem', textTransform: 'uppercase', padding: '0.3rem 0.75rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <hr className="divider mb-10" />

        {/* Grid */}
        {layout === 'grid' ? (
          <div className="row g-4">
            {filtered.map((art, i) => (
              <div key={art.id} className="col-6 col-md-4 col-lg-3" style={{ animation: 'fadeUp 0.5s ease forwards', animationDelay: `${i * 0.05}s`, opacity: 0 }}>
                <ArtCard art={art} onClick={() => setSelected(art)} />
              </div>
            ))}
          </div>
        ) : (
          /* Masonry-style: 3 columns */
          <div style={{ columns: 3, gap: '1rem', columnFill: 'balance' }} className="masonry-gallery">
            {filtered.map((art, i) => (
              <div key={art.id} style={{ breakInside: 'avoid', marginBottom: '1rem', animation: 'fadeUp 0.5s ease forwards', animationDelay: `${i * 0.05}s`, opacity: 0 }}>
                <ArtCard art={art} onClick={() => setSelected(art)} ratio="auto" />
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p style={{ color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }}>
              No works in this category yet.
            </p>
            <Link to="/add" className="btn-primary mt-6 inline-block">Add First Work</Link>
          </div>
        )}
      </div>

      {selected && <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ArtCard({ art, onClick, ratio = '3/4' }) {
  return (
    <div className="artwork-card" onClick={onClick}>
      <div style={{ overflow: 'hidden' }}>
        <img
          src={art.image}
          alt={art.title}
          style={{
            width: '100%',
            aspectRatio: ratio === 'auto' ? 'auto' : ratio,
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '0.75rem 1rem' }}>
        {art.featured && (
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'block',
            marginBottom: 4,
          }}>
            ★ Featured
          </span>
        )}
        <p style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', fontSize: '0.875rem', marginBottom: 2 }}>
          {art.title}
        </p>
        <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {art.medium} · {art.year}
        </p>
      </div>
    </div>
  );
}
