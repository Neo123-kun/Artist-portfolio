import { useEffect } from 'react';

export default function ArtworkModal({ artwork, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--card-bg)',
          maxWidth: '900px',
          width: '90vw',
          overflow: 'visible',
          borderTop: '4px solid var(--accent)',
          animation: 'scaleIn 0.3s ease',
        }}
      >
        <div className="row g-0">
          {/* Image */}
          <div className="col-md-7">
            <img
              src={artwork.image}
              alt={artwork.title}
              style={{ width: '100%', height: '100%', minHeight: '320px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Info */}
          <div className="col-md-5 p-8 flex flex-col justify-between" style={{ minHeight: '320px' }}>
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="section-label">{artwork.category}</span>
                <button
                  onClick={onClose}
                  style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '1.2rem' }}
                >
                  ✕
                </button>
              </div>

              <h2 style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', fontSize: '1.5rem', lineHeight: 1.3 }} className="mb-2">
                {artwork.title}
              </h2>
              <p style={{ color: 'var(--accent)', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' }} className="mb-6">
                {artwork.year}
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }} className="mb-6">
                {artwork.description}
              </p>

              <hr className="divider mb-6" />

              <div className="flex flex-col gap-2">
                {[['Medium', artwork.medium], ['Dimensions', artwork.dimensions]].map(([label, val]) => (
                  val && (
                    <div key={label} className="flex justify-between">
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        {label}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{val}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
