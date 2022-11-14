import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Notification } from "components/Notification";
import { FormProps } from "types/Form";
import { MockedData } from "mocks/Form";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, Span, Column, Input, Label, Row, Textarea, Button } from "./styles";

export function Form() {
  const [mockedData, setMockedData] = useState<FormProps>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  const cleanInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendMessage = () => {
    if (name && email && message) {
      Notification.fire({
        icon: 'success',
        title: mockedData?.notifications[0].text
      });
    } else {
      Notification.fire({
        icon: 'error',
        title: mockedData?.notifications[1].text
      });
    };
  };

  return (
    <ContactCardContainer theme={theme}>
      <ContactCardContent theme={theme}>
        <form>
          <Strong>{mockedData?.title}</Strong>

          <Span theme={theme}>{mockedData?.subtitle}</Span>

          <Column>
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
              {mockedData?.inputs[0].label}
            </Label>
          </Column>

          <Column>
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
              {mockedData?.inputs[1].label}
            </Label>
          </Column>

          <Column>
            <Textarea
              id="fieldMessage"
              cols={30}
              rows={6}
              theme={theme}
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
            <Label
              htmlFor="fieldMessage"
              className={message && 'filled'}
              theme={theme}
            >
              {mockedData?.inputs[2].label}
            </Label>
          </Column>

          <Row>
            <Button
              type="button"
              value={mockedData?.buttons[0].label}
              background='var(--bootstrapInfo)'
              onClick={cleanInputs}
            />
            <Button
              type="button"
              value={mockedData?.buttons[1].label}
              background='var(--bootstrapPrimary)'
              onClick={sendMessage}
            />
          </Row>
        </form>
      </ContactCardContent>
    </ContactCardContainer>
  );
};