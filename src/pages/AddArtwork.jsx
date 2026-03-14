import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useArtworks } from '../context/ArtworkContext';

const CATEGORIES = ['Painting', 'Drawing', 'Watercolor', 'Mixed Media', 'Photography', 'Sculpture', 'Digital', 'Other'];

export default function AddArtwork() {
  const { addArtwork } = useArtworks();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    year: new Date().getFullYear().toString(),
    medium: '',
    dimensions: '',
    category: 'Painting',
    description: '',
    image: '',
    featured: false,
  });
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleImageUrl = (url) => {
    set('image', url);
    setPreview(url);
  };

  const handleFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    set('image', url);
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.image.trim()) e.image = 'Please provide an image';
    if (!form.medium.trim()) e.medium = 'Medium is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addArtwork(form);
    navigate('/gallery');
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    padding: '0.75rem 1rem',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
  };

  const labelStyle = {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 6,
  };

  return (
    <div className="page-transition" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-12" style={{ maxWidth: '960px' }}>
        <p className="section-label mb-4">New Entry</p>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '2rem' }}>
          Add Artwork
        </h1>

        <hr className="divider mb-10" />

        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            {/* Left: image upload */}
            <div className="col-md-5">
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: `2px dashed ${errors.image ? 'var(--accent)' : 'var(--border)'}`,
                  aspectRatio: '3/4',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onDragOver={e => e.preventDefault()}
                onDrop={e => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
              >
                {preview ? (
                  <>
                    <img src={preview} alt="Preview" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button
                      type="button"
                      onClick={() => { setPreview(null); set('image', ''); }}
                      style={{
                        position: 'absolute', top: 10, right: 10,
                        background: 'rgba(0,0,0,0.6)', color: 'white',
                        border: 'none', borderRadius: '50%', width: 28, height: 28,
                        cursor: 'pointer', fontSize: '0.75rem',
                      }}
                    >✕</button>
                  </>
                ) : (
                  <div className="text-center px-6">
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem', opacity: 0.4 }}>⊕</div>
                    <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Drag & drop image
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>or</p>
                    <label style={{ cursor: 'pointer' }}>
                      <span className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.4rem 0.875rem' }}>Browse file</span>
                      <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
                    </label>
                  </div>
                )}
              </div>

              {/* Or URL */}
              <div className="mt-4">
                <label style={labelStyle}>Or paste image URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={form.image.startsWith('blob:') ? '' : form.image}
                  onChange={e => handleImageUrl(e.target.value)}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                {errors.image && <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: 4 }}>{errors.image}</p>}
              </div>
            </div>

            {/* Right: form fields */}
            <div className="col-md-7">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Title */}
                <div>
                  <label style={labelStyle}>Title *</label>
                  <input
                    required
                    value={form.title}
                    onChange={e => set('title', e.target.value)}
                    placeholder="Untitled"
                    style={{ ...inputStyle, fontFamily: '"Playfair Display", serif', fontSize: '1rem' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                  {errors.title && <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: 4 }}>{errors.title}</p>}
                </div>

                <div className="row g-3">
                  {/* Year */}
                  <div className="col-6">
                    <label style={labelStyle}>Year</label>
                    <input
                      value={form.year}
                      onChange={e => set('year', e.target.value)}
                      placeholder="2024"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  {/* Category */}
                  <div className="col-6">
                    <label style={labelStyle}>Category</label>
                    <select
                      value={form.category}
                      onChange={e => set('category', e.target.value)}
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                    >
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <label style={labelStyle}>Medium *</label>
                  <input
                    value={form.medium}
                    onChange={e => set('medium', e.target.value)}
                    placeholder="Oil on canvas"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                  {errors.medium && <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: 4 }}>{errors.medium}</p>}
                </div>

                {/* Dimensions */}
                <div>
                  <label style={labelStyle}>Dimensions</label>
                  <input
                    value={form.dimensions}
                    onChange={e => set('dimensions', e.target.value)}
                    placeholder="90 × 120 cm"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Description */}
                <div>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={e => set('description', e.target.value)}
                    placeholder="Write about this work — its origins, process, meaning..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Featured toggle */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => set('featured', !form.featured)}
                    style={{
                      width: 44, height: 24,
                      background: form.featured ? 'var(--accent)' : 'var(--border)',
                      borderRadius: 12,
                      border: 'none',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      top: 3, left: form.featured ? 22 : 3,
                      width: 18, height: 18,
                      borderRadius: '50%',
                      background: 'white',
                      transition: 'left 0.3s ease',
                    }} />
                  </button>
                  <label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => set('featured', !form.featured)}>
                    Feature on homepage
                  </label>
                </div>

                {/* Submit */}
                <div className="flex gap-3 pt-2">
                  <button type="submit" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
                    Add to Gallery
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/gallery')}
                    className="btn-outline"
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
