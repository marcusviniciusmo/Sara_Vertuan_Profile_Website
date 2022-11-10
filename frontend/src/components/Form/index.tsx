import { useGlobalContext } from "context";
import { useState } from "react";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, Span, Column, Input, Row, Textarea, Button } from "./styles";

export function Form() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { theme } = useGlobalContext();

  const cleanInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

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
            <Input
              type="text"
              id="fieldName"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </Column>

          <Column>
            <label htmlFor="fieldEmail">E-mail</label>
            <Input
              type="email"
              id="fieldEmail"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Column>

          <Column>
            <label htmlFor="fieldMessage">Mensagem</label>
            <Textarea
              id="fieldMessage"
              cols={30}
              rows={5}
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
          </Column>

          <Row>
            <Button
              type="button"
              value="Limpar"
              background='#596267'
              onClick={cleanInputs}
              />
            <Button type="submit" value="Enviar" background='#0168D9' />
          </Row>
        </form>
      </ContactCardContent>
    </ContactCardContainer>
  );
};