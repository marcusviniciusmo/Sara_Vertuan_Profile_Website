import { Link } from "react-router-dom";
import { Home, Person, Chat, Collections, Call } from '@mui/icons-material';

export function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <Link to='/'>
        <Home />
        <h6>Início</h6>
      </Link>
      <Link to='/aboutMe'>
        <Person />
        <h6>Sobre Mim</h6>
      </Link>
      <Link to='/testimonies'>
        <Chat />
        <h6>Depoimentos</h6>
      </Link>
      <Link to='/gallery'>
        <Collections />
        <h6>Galeria</h6>
      </Link>
      <Link to='/contact'>
        <Call />
        <h6>Contato</h6>
      </Link>
    </>
  );
};