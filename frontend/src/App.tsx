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

      <h1>HEADER</h1>
      <h3>Idioma</h3>
      <h5>Português</h5>
      <h5>Inglês</h5>
      <h5>Italiano</h5>
      <h3>Tema</h3>
      <h5>Light</h5>
      <h5>Dark</h5>

      <h1>MENU</h1>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h4>Sara Vertuan</h4>
      <h5>Capas de livros e Diagramatização</h5>
      <h6>Início</h6>
      <h6>Sobre Mim</h6>
      <h6>Depoimentos</h6>
      <h6>Galeria</h6>
      <h6>Contato</h6>

      <Home />

      <AboutMe />

      <Testimonies />

      <Gallery />

      <Contact />
    </>
  );
}

export default App;
