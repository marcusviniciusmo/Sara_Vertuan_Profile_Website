import { useGlobalContext } from "context";
import { Link } from "react-router-dom";
import { Home, Person, Chat, Collections, Call } from '@mui/icons-material';
import { MenuContainer, MenuOption } from './styles';

export function Menu() {
  const { theme } = useGlobalContext();

  return (
    <MenuContainer>
      <Link to='/' className="noUnderline" title="Início">
        <MenuOption theme={theme} hasBorder>
          <Home fontSize="large"/>
          <span>Início</span>
        </MenuOption>
      </Link>

      <Link to='/aboutMe' className="noUnderline" title="Sobre Mim">
        <MenuOption theme={theme}>
          <Person fontSize="large"/>
          <span>Sobre Mim</span>
        </MenuOption>
      </Link>

      <Link to='/testimonies' className="noUnderline" title="Depoimentos">
        <MenuOption theme={theme}>
          <Chat fontSize="large"/>
          <span>Depoimentos</span>
        </MenuOption>
      </Link>

      <Link to='/gallery' className="noUnderline" title="Galeria">
        <MenuOption theme={theme} hasBorder>
          <Collections fontSize="large"/>
          <span>Galeria</span>
        </MenuOption>
      </Link>

      <Link to='/contact' className="noUnderline" title="Contato">
        <MenuOption theme={theme} hasBorder>
          <Call fontSize="large"/>
          <span>Contato</span>
        </MenuOption>
      </Link>
    </MenuContainer>
  );
};