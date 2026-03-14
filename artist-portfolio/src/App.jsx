import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ArtworkProvider } from './context/ArtworkContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import AddArtwork from './pages/AddArtwork';

export default function App() {
  return (
    <ThemeProvider>
      <ArtworkProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add" element={<AddArtwork />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </ArtworkProvider>
    </ThemeProvider>
  );
}
