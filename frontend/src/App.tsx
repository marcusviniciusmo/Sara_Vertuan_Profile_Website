import { Home } from 'views/Home';
import { AboutMe } from 'views/AboutMe';
import { Testimonies } from 'views/Testimonies';
import { Gallery } from 'views/Gallery';
import { Contact } from 'views/Contact';
import './index.css';

function App() {
  return (
    <>
      <h1>Sara Vertuan Profile</h1>
      <h1>INTERFACE</h1>

      <Home />

      <AboutMe />

      <Testimonies />

      <Gallery />

      <Contact />
    </>
  );
}

export default App;
