import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import galleryImg from './data/galleryImg';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery galleryImg={galleryImg} />
    </>
  );
}

export default App;
