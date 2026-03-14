export default function About() {
  const exhibitions = [
    { price: '$--', task: 'Headshot', venue: '--', city: 'Amsterdam' },
    { price: '$--', task: 'Halfbody', venue: '--', city: 'Amsterdam' },
    { price: '$--', task: 'Full body', venue: '--', city: 'Rotterdam' },
    { price: '$--', task: '2 characters half body', venue: '--', city: 'London' },
    { price: '$--', task: '--', venue: '--', city: 'New York' },
    { price: '$--', task: '--', venue: '--', city: 'Eindhoven' },
  ];

  const press = [
    { pub: 'Artforum', quote: 'Voss brings an almost archaeological tenderness to her subjects.' },
    { pub: 'Frieze', quote: 'Her canvases feel like memories you haven\'t made yet.' },
    { pub: 'NRC Handelsblad', quote: 'A painter of rare emotional intelligence.' },
  ];

  return (
    <div className="page-transition" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-12">

        {/* Hero */}
        <div className="row align-items-start g-12 mb-20">
          <div className="col-md-5">
            <div style={{ position: 'relative' }}>
              <img
                src="/arts/Asuna.jpg"
                alt="NeoArts"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', border: '1px solid var(--border)', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '-1.5rem',
                background: 'var(--accent)',
                color: 'white',
                padding: '1rem 1.25rem',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                lineHeight: 1.6,
                maxWidth: '160px',
              }}>
                Twitter<br />
                2020<br />
                Ibis Paint · FireAlpaca
              </div>
            </div>
          </div>

          <div className="col-md-7" style={{ paddingTop: '2rem' }}>
            <p className="section-label mb-4">Biography</p>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              NeoArts
            </h1>

            {[
              'A digital artist with a passion for drawing,',
              'creating fan art of characters from games, anime, and the occacional own characters.',
            ].map((para, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        <hr className="divider mb-16" />

        {/* Exhibitions */}
        <div className="mb-16">
          <p className="section-label mb-8">Price List</p>
          <div className="row g-0">
            {exhibitions.map((ex, i) => (
              <div key={i} className="col-12" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="row py-4 align-items-center">
                  <div className="col-2 col-md-1">
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: 'var(--accent)' }}>{ex.price}</span>
                  </div>
                  <div className="col-6 col-md-5">
                    <span style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', fontSize: '0.95rem', fontStyle: 'italic' }}>{ex.task}</span>
                  </div>
                  <div className="col-4 col-md-3">
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{ex.venue}</span>
                  </div>
                  <div className="col-md-3 d-none d-md-block">
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{ex.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press */}
        {/* <div>
          <p className="section-label mb-8">Press</p>
          <div className="row g-5">
            {press.map((p, i) => (
              <div key={i} className="col-md-4">
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.25rem' }}>
                  <p style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    "{p.quote}"
                  </p>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    — {p.pub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
