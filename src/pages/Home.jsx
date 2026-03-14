import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useArtworks } from '../context/ArtworkContext';
import ArtworkModal from '../components/ArtworkModal';

export default function Home() {
  const { artworks, featured } = useArtworks();
  const [selected, setSelected] = useState(null);
  const [randomFeatured, setRandomFeatured] = useState([]);

  // Function to shuffle array and return first n items
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Set random featured artworks on component mount or when featured changes
  useEffect(() => {
    if (featured.length > 0) {
      setRandomFeatured(getRandomItems(featured, 2));
    }
  }, [featured]);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section
        style={{ minHeight: '100vh', paddingTop: '6rem' }}
        className="flex flex-col justify-center px-6"
      >
        <div className="container mx-auto">
          <div className="row align-items-center g-12">
            <div className="col-lg-6">
              <p className="section-label mb-6">Digital Artist</p>
              <h1
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  lineHeight: 1.1,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
                className="mb-6"
              >
                This is my<br />
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>passion</em><br />
                for digital art.
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '440px' }} className="mb-10">
                Digital art of custom characters and existing characters made in Ibispaint and FireAlpaca
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/gallery" className="btn-primary">View Gallery</Link>
                <Link to="/about" className="btn-outline">About Me</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ position: 'relative' }}>
                {/* Stacked artwork preview */}
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  left: '-4%',
                  width: '45%',
                  aspectRatio: '3/4',
                  background: 'var(--bg-secondary)',
                  transform: 'rotate(-3deg)',
                  border: '1px solid var(--border)',
                  zIndex: 1,
                }} />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    cursor: 'pointer',
                    border: '1px solid var(--border)',
                  }}
                  onClick={() => setSelected(randomFeatured[0])}
                >
                  <img
                    src={randomFeatured[0]?.image}
                    alt={randomFeatured[0]?.title}
                    style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '1rem 1.25rem', background: 'var(--card-bg)' }}>
                    <p style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {randomFeatured[0]?.title}
                    </p>
                    <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                      {randomFeatured[0]?.medium} · {randomFeatured[0]?.year}
                    </p>
                  </div>
                </div>
                {/* Small accent piece */}
                {randomFeatured[1] && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-8%',
                      right: '-8%',
                      width: '42%',
                      zIndex: 3,
                      border: '1px solid var(--border)',
                      cursor: 'pointer',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                    }}
                    onClick={() => setSelected(randomFeatured[1])}
                  >
                    <img
                      src={randomFeatured[1]?.image}
                      alt={randomFeatured[1]?.title}
                      style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: 'var(--border)', animation: 'none' }} />
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="px-6 py-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="section-label mb-3">Selected Works</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                Recent Pieces
              </h2>
            </div>
            <Link to="/gallery" className="btn-outline hidden md:block">All Works →</Link>
          </div>

          <div className="row g-4">
            {artworks.slice(0, 4).map((art, i) => (
              <div key={art.id} className={`col-6 col-lg-${i === 0 ? '6' : '2'}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="artwork-card" onClick={() => setSelected(art)}>
                  <div style={{ overflow: 'hidden' }}>
                    <img
                      src={art.image}
                      alt={art.title}
                      style={{
                        width: '100%',
                        aspectRatio: i === 0 ? '16/9' : '1',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <p style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: 2 }}>
                      {art.title}
                    </p>
                    <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: 'var(--text-muted)' }}>
                      {art.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link to="/gallery" className="btn-outline">View All Works</Link>
          </div>
        </div>
      </section>

      {/* Bio teaser */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="px-6 py-20">
        <div className="container mx-auto">
          <div className="row align-items-center g-12">
            <div className="col-md-5">
              <img
                src="/arts/HinaVogue.jpg"
                alt="Artist"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', border: '1px solid var(--border)' }}
              />
            </div>
            <div className="col-md-7">
              <p className="section-label mb-4">About the Artist</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                "Just an artist that loves<br />
                <em style={{ color: 'var(--accent)' }}>ART.</em>"
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '480px' }}>
                Neoarts is a digital artist that specializes in character art, but still practicing backgrounds so for now, NO background.
              </p>
              <Link to="/about" className="btn-primary">Read Full Bio</Link>
            </div>
          </div>
        </div>
      </section>

      {selected && <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
