import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { Menu } from "components/Menu";
import Logo from 'assets/sidebar/logo.png';
import { SidebarProps } from "types/Sidebar";
import { MockedData } from "mocks/Sidebar";
import { Container, Inner, Header, Content, Image, Strong, Span } from "./styles";
import './styles.css';

export function Sidebar() {
  const [mockedData, setMockedData] = useState<SidebarProps>();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <Container sidebar={sidebarOpen} theme={theme}>
      <Inner>
        <Header>
          {
            sidebarOpen
            ? <Close className="iconHandleSidebar" onClick={() => setSidebarOpen(!sidebarOpen)} />
            : <MenuIcon className="iconHandleSidebar" onClick={() => setSidebarOpen(!sidebarOpen)} />
          }
        </Header>

        <Content>
          {
            sidebarOpen &&
            <>
              <Image src={Logo} alt="Sara Vertuan logo" />
              <Strong className="linearGradient">Sara Vertuan</Strong>
              <Span className="linearGradient">{mockedData?.role}</Span>
            </>
          }
        </Content>

        <Menu />
      </Inner>
    </Container>
  );
};