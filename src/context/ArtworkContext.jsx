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
    year: '2025',
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
    year: '2025',
    medium: 'FireAlpaca and Ibis paint',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Fan art of Noa from Blue Archive.',
    image: '/arts/Noa meme.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Zani',
    year: '2025',
    medium: 'Ibis paint and FireAlpaca',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Fan art of a character from Wuthering Waves.',
    image: 'public/arts/Zani.jpg',
    featured: false,
  },
  {
    id: 7,
    title: 'Asuna',
    year: '2025',
    medium: 'Ibis paint and FireAlpaca',
    dimensions: 'None',
    category: 'Fan Art',
    description: 'Fan art of the happy go lucky character from Blue Archive.',
    image: 'public/arts/Asuna.jpg',
    featured: true,
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
