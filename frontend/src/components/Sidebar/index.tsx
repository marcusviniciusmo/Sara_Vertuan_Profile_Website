import { useState } from "react";
import { useGlobalContext } from "context";
import { Menu } from "components/Menu";
import { Container, Inner, Header, Content, Strong, Span } from "./styles";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { theme } = useGlobalContext();

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container sidebar={sidebarOpen} theme={theme}>
      <Inner>
        <Header>
          <button onClick={handleSidebar}>open</button>
        </Header>

        <Content>
          {
            sidebarOpen &&
            <>
              <h3>AQUI VAI UMA IMAGEM</h3>
              <Strong>Sara Vertuan</Strong>
              <Span>Capas de livros e Diagramatização</Span>
            </>
          }
        </Content>

        <Menu />
      </Inner>
    </Container>
  );
};