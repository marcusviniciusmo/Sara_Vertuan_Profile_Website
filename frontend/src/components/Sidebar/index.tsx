import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { Menu } from "components/Menu";
import { SidebarProps } from "types/Sidebar";
import { MockedData } from "mocks/Sidebar";
import { Container, Inner, Header, Content, Strong, Span } from "./styles";

export function Sidebar() {
  const [mockedData, setMockedData] = useState<SidebarProps>();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { language, theme } = useGlobalContext();

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <Container sidebar={sidebarOpen} theme={theme}>
      <Inner>
        <Header>
          {
            sidebarOpen
            ? <Close fontSize="large" onClick={handleSidebar} />
            : <MenuIcon fontSize="large" onClick={handleSidebar} />
          }
        </Header>

        <Content>
          {
            sidebarOpen &&
            <>
              <h3>AQUI VAI UMA IMAGEM</h3>
              <Strong>Sara Vertuan</Strong>
              <Span>{mockedData?.role}</Span>
            </>
          }
        </Content>

        <Menu />
      </Inner>
    </Container>
  );
};