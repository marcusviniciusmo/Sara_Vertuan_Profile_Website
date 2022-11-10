import { useState } from "react";
import { useGlobalContext } from "context";
import { Notification } from "components/Notification";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, Span, Column, Input, Label, Row, Textarea, Button } from "./styles";
import './styles.css';

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

  const sendMessage = () => {
    if (name && email && message) {
      Notification.fire({
        icon: 'success',
        title: ' Mensagem enviada com sucesso!'
      });
    } else {
      Notification.fire({
        icon: 'error',
        title: 'A mensagem não pôde ser enviada'
      });
    };
  };

  return (
    <ContactCardContainer theme={theme} width={40}>
      <ContactCardContent theme={theme} width={40}>
        <form>
          <Strong>Gostou do que  viu?</Strong>

          <Span theme={theme}>
            Entre em contato e vamos conversar!
          </Span>

          <Column className="inputContainer">
            <Input
              type="text"
              id="fieldName"
              theme={theme}
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <Label
              htmlFor="fieldName"
              className={name && 'filled'}
              theme={theme}
            >
              Nome
            </Label>
          </Column>

          <Column className="inputContainer">
            <Input
              type="email"
              id="fieldEmail"
              theme={theme}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Label
              htmlFor="fieldEmail"
              className={email && 'filled'}
              theme={theme}
            >
              E-mail
            </Label>
          </Column>

          <Column className="inputContainer">
            <Textarea
              id="fieldMessage"
              cols={30}
              rows={5}
              theme={theme}
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
            <Label
              htmlFor="fieldMessage"
              className={message && 'filled'}
              theme={theme}
            >
              Mensagem
            </Label>
          </Column>

          <Row>
            <Button
              type="button"
              value="Limpar"
              background='#596267'
              onClick={cleanInputs}
            />
            <Button
              type="button"
              value="Enviar"
              background='#0168D9'
              onClick={sendMessage}
            />
          </Row>
        </form>
      </ContactCardContent>
    </ContactCardContainer>
  );
};