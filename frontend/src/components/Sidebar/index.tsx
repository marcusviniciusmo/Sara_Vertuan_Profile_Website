import { useState } from "react";
import { Menu } from "components/Menu";
import { Container } from "./styles";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container sidebar={sidebarOpen}>
      <button onClick={handleSidebar}>open</button>
        <h1>SIDEBAR Component</h1>
        <h3>AQUI VAI UMA IMAGEM</h3>
        <h4>Sara Vertuan</h4>
        <h5>Capas de livros e Diagramatização</h5>

        <Menu />
    </Container>
  );
};