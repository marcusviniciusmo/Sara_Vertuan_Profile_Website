import { useGlobalContext } from "context";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";

export function Form() {
  const { theme } = useGlobalContext();

  return (
    <ContactCardContainer theme={theme} width={40}>
      <ContactCardContent theme={theme} width={40}>
        <h1>FORM Component</h1>

        <h3>AQUI VAI UM FORMULÁRIO</h3>
        <h5>Nome</h5>
        <h3>AQUI VAI UM CAMPO</h3>
        <h5>E-mail</h5>
        <h3>AQUI VAI UM CAMPO</h3>
        <h5>Mensagem</h5>
        <h3>AQUI VAI UM CAMPO</h3>

        <h5>Enviar</h5>
        <h3>AQUI VAI UM BOTÃO</h3>
      </ContactCardContent>
    </ContactCardContainer>
  );
};