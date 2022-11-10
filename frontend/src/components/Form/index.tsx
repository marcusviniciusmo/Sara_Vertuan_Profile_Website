import { useGlobalContext } from "context";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, Span, Column, Input, Row, Textarea, Button } from "./styles";

export function Form() {
  const { theme } = useGlobalContext();

  return (
    <ContactCardContainer theme={theme} width={40}>
      <ContactCardContent theme={theme} width={40}>
        <form action="mailto:saracvertuan@gmail.com" method="POST">
          <Strong>Gostou do que  viu?</Strong>

          <Span theme={theme}>
            Entre em contato e vamos conversar!
          </Span>

          <Column>
            <label htmlFor="fieldName">Nome</label>
            <Input type="text" id="fieldName" />
          </Column>

          <Column>
            <label htmlFor="fieldEmail">E-mail</label>
            <Input type="email" id="fieldEmail" />
          </Column>

          <Column>
            <label htmlFor="fieldMessage">Mensagem</label>
            <Textarea id="fieldMessage" cols={30} rows={10} />
          </Column>

          <Row>
            <Button type="button" value="Limpar" background='#596267' />
            <Button type="submit" value="Enviar" background='#0168D9' />
          </Row>
        </form>
      </ContactCardContent>
    </ContactCardContainer>
  );
};