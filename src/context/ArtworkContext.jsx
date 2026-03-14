import { createContext, useContext, useState } from 'react';

const INITIAL_ARTWORKS = [
  {
    id: 1,
    title: 'Hina Magazine Cover style',
    year: '2026',
    medium: 'Ibis paint',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Vogue style magazine cover of the character Hina from BlueArchive',
    image: '/arts/HinaVogue.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Manhattan Cafe',
    year: '2026',
    medium: 'Ibis paint',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Manhattan Cafe a character from Umamusume',
    image: '/arts/manhattanCafe.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Own Character Art',
    year: '2026',
    medium: 'Ibis paint and FireAlpaca',
    dimensions: 'None',
    category: 'OC Art',
    description: 'A custom character created by me. She is shown to have a thug like personality. Colorscheme used is black, yellow, and blue.',
    image: '/arts/oc1.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Belle',
    year: '2023',
    medium: 'FireAlpaca',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Fan art of the character Belle from ZZZ.',
    image: '/arts/Belle.jpg',
    featured: true,
  },
  {
    id: 5,
    title: 'Noa',
    year: '2023',
    medium: 'FireAlpaca and Ibis paint',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Fan art of Noa from Blue Archive.',
    image: '/arts/Noa meme.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'The Weight of Light',
    year: '2022',
    medium: 'Oil on panel',
    dimensions: '40 × 50 cm',
    category: 'Painting',
    description: 'An intimate still life that questions what we consider ordinary. Morning light becomes something sacred through careful observation.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Erosion',
    year: '2022',
    medium: 'Photography',
    dimensions: 'Digital print, 80 × 120 cm',
    category: 'Photography',
    description: 'Found on a remote coastline — the cliff face carved by centuries of tide. Time made visible.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'Composition in Blue Minor',
    year: '2022',
    medium: 'Ink and gouache',
    dimensions: '30 × 40 cm',
    category: 'Drawing',
    description: 'Inspired by musical scores — lines, rhythm, negative space. Visual music for the eye.',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
    featured: false,
  },
];

const ArtworkContext = createContext();

export function ArtworkProvider({ children }) {
  const [artworks, setArtworks] = useState(INITIAL_ARTWORKS);

  const categories = ['All', ...new Set(artworks.map(a => a.category))];
  const featured = artworks.filter(a => a.featured);

  return (
    <ArtworkContext.Provider value={{ artworks, categories, featured }}>
      {children}
    </ArtworkContext.Provider>
  );
}

export const useArtworks = () => useContext(ArtworkContext);
