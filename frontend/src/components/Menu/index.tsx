import { Link } from "react-router-dom"

export function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <Link to='/'>
        <h6>Início</h6>
      </Link>
      <Link to='/aboutMe'>
        <h6>Sobre Mim</h6>
      </Link>
      <Link to='/testimonies'>
        <h6>Depoimentos</h6>
      </Link>
      <Link to='/gallery'>
        <h6>Galeria</h6>
      </Link>
      <Link to='/contact'>
        <h6>Contato</h6>
      </Link>
    </>
  );
};