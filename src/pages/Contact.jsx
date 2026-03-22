import { useState } from 'react';

// SVG Icons for each platform
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
);

const BehanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h6a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3V3z"></path>
    <path d="M3 11h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3v-8z"></path>
    <line x1="15" y1="6" x2="21" y2="6"></line>
    <line x1="15" y1="18" x2="21" y2="18"></line>
    <line x1="18" y1="6" x2="18" y2="18"></line>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);

const SpotifyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12c2.5-1 5.5-1 8 0"></path>
    <path d="M7 15c3.5-1.5 6.5-1.5 10 0"></path>
    <path d="M9 9c2-1 4-1 6 0"></path>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const WebsiteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export default function MyLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      name: 'Portfolio',
      handle: 'Neoarts',
      url: 'https://artist-portfolio-h2hx.vercel.app/',
      icon: <WebsiteIcon />,
      description: 'Selected works & projects',
      color: '#2d74c4'
    },
    {
      name: 'Instagram',
      handle: '@neoarts12',
      url: 'https://instagram.com/aria.voss.art',
      icon: <InstagramIcon />,
      description: 'Contains old and newer artworks',
      color: '#E4405F'
    },
    {
      name: 'Twitter / X / NSFW',
      handle: '@Neoarts121',
      url: 'https://x.com/Neoarts121',
      icon: <TwitterIcon />,
      description: 'Thoughts & updates',
      color: '#000000'
    },
    {
      name: 'Twitter / X / SFW',
      handle: '@TheSafeNeow',
      url: 'https://x.com/TheSafeNeow',
      icon: <TwitterIcon />,
      description: 'Thoughts & updates',
      color: '#000000'
    },
    {
      name: 'GitHub',
      handle: 'ariavoss',
      url: 'https://github.com/ariavoss',
      icon: <GitHubIcon />,
      description: 'Code & experiments',
      color: '#333333'
    },
    {
      name: 'VGen',
      handle: '???',
      url: 'https://linkedin.com/in/ariavoss',
      icon: <LinkedInIcon />,
      description: 'Professional connect',
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      handle: '???',
      url: 'https://youtube.com/@ariavoss',
      icon: <YouTubeIcon />,
      description: 'Tutorials & timelapses',
      color: '#FF0000'
    },
    {
      name: 'Spotify',
      handle: '???',
      url: 'https://open.spotify.com/user/ariavoss',
      icon: <SpotifyIcon />,
      description: 'What I listen to while creating',
      color: '#1DB954'
    },
    {
      name: 'Email',
      handle: '???',
      url: 'mailto:hello@aria-voss.art',
      icon: <EmailIcon />,
      description: 'Direct inquiries',
      color: '#2d74c4'
    }
  ];

  return (
    <div className="page-transition" style={{ 
      paddingTop: '6rem', 
      minHeight: '100vh',
      background: 'var(--bg)'
    }}>
      <div className="container mx-auto px-6 py-12" style={{ maxWidth: '680px' }}>
        
        {/* Profile Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          animation: 'fadeUp 0.6s ease forwards'
        }}>
          {/* Avatar Placeholder - Replace with your image */}
          <div style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            border: '2px solid var(--border)',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            color: 'var(--accent)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <span style={{ fontFamily: '"Playfair Display", serif' }}>N</span>
            {/* Status indicator */}
            <div style={{
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              width: '20px',
              height: '20px',
              background: '#22c55e',
              borderRadius: '50%',
              border: '3px solid var(--bg)'
            }} />
          </div>

          <p className="section-label mb-3" style={{ 
            fontSize: '0.7rem',
            letterSpacing: '0.2em'
          }}>
            Digital Artist & Programmer
          </p>
          
          <h1 style={{ 
            fontFamily: '"Playfair Display", serif', 
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
            color: 'var(--text-primary)', 
            lineHeight: 1.2, 
            marginBottom: '0.75rem',
            fontWeight: 600
          }}>
            Neoarts
          </h1>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: 1.6, 
            fontSize: '0.95rem',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            Freelance digital artist and programmer.
          </p>
        </div>

        {/* Links Grid */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem',
          animation: 'fadeUp 0.6s ease 0.1s forwards',
          opacity: 0
        }}>
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: hoveredIndex === index ? 'var(--card-bg)' : 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredIndex === index ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index 
                  ? '0 10px 40px -10px rgba(0,0,0,0.1)' 
                  : '0 2px 8px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Left border accent on hover */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '3px',
                background: link.color,
                transform: hoveredIndex === index ? 'scaleY(1)' : 'scaleY(0)',
                transition: 'transform 0.3s ease',
                transformOrigin: 'top'
              }} />

              {/* Icon Container */}
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: hoveredIndex === index ? link.color : 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: hoveredIndex === index ? 'white' : 'var(--text-secondary)',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}>
                {link.icon}
              </div>

              {/* Text Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginBottom: '0.25rem'
                }}>
                  <span style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)'
                  }}>
                    {link.name}
                  </span>
                  <span style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '-0.02em'
                  }}>
                    {link.handle}
                  </span>
                </div>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  color: 'var(--text-muted)',
                  opacity: hoveredIndex === index ? 1 : 0.3,
                  transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          animation: 'fadeUp 0.6s ease 0.2s forwards',
          opacity: 0
        }}>
          <p style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em'
          }}>
            © 2026 Neoarts · Visit my links sometime
          </p>
        </div>

      </div>

      {/* Custom styles for this component */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}