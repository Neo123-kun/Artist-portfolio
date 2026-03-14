import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-transition" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-12">

        <div className="row g-12">
          <div className="col-md-5">
            <p className="section-label mb-4">Get In Touch</p>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Let's talk<br />
              <em style={{ color: 'var(--accent)' }}>about work.</em>
            </h1>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              For commissions, exhibition inquiries, acquisitions, or press — reach out directly.
            </p>

            <div className="flex flex-col gap-5">
              {[
                ['Studio', 'Jordaan, Amsterdam', null],
                ['Email', 'aria@ariaVoss.art', 'mailto:aria@ariavoss.art'],
                ['Instagram', '@aria.voss.art', 'https://instagram.com'],
                ['Representation', 'Galerie Fenna, Amsterdam', null],
              ].map(([label, val, href]) => (
                <div key={label}>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} style={{ color: 'var(--text-primary)', fontSize: '0.9rem', textDecoration: 'none' }}>
                      {val}
                    </a>
                  ) : (
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{val}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-7">
            {sent ? (
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Message sent.
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you — I'll be in touch within a few days.</p>
                <button onClick={() => setSent(false)} className="btn-outline mt-6" style={{ border: '1px solid var(--border)' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                      Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        padding: '0.75rem 1rem',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        padding: '0.75rem 1rem',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      padding: '0.75rem 1rem',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.9rem',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="general">General inquiry</option>
                    <option value="commission">Commission</option>
                    <option value="acquisition">Acquisition / Purchase</option>
                    <option value="exhibition">Exhibition</option>
                    <option value="press">Press</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      padding: '0.75rem 1rem',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <button type="submit" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
