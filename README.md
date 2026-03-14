# Artist Portfolio — Aria Voss

A clean, editorial artist portfolio built with **Vite + React**, **Tailwind CSS**, and **Bootstrap Grid**.

## Features
- 🎨 **5 Pages**: Home, Gallery, About, Contact, Add Artwork
- 🌓 **Light & Dark mode** (persisted in localStorage)
- ➕ **Add artworks** via image upload or URL
- 🔍 **Filter gallery** by category
- 📐 **Grid & masonry layouts** in the gallery
- 📱 **Fully responsive** mobile-first design
- 🖼️ **Artwork modal** with full details on click

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Adding Your Artworks

1. Click **"+ Add Work"** in the navbar
2. Upload an image file or paste an image URL
3. Fill in title, year, medium, dimensions, description
4. Toggle **"Feature on homepage"** to show on the hero section
5. Submit — it appears instantly in the gallery

## Customizing the Artist Info

Edit `src/context/ArtworkContext.jsx` to change the initial artwork collection.

Edit `src/pages/About.jsx` to update the bio, exhibitions, and press quotes.

Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx` to change the artist name.

## Tech Stack
- Vite 5 + React 18
- React Router v6
- Tailwind CSS v3 (dark mode via class strategy)
- Bootstrap Grid (CDN) for layout
- Google Fonts: Playfair Display, DM Sans, JetBrains Mono
