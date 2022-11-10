import { useGlobalContext } from "context";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, Button } from './styles';

export function Budget() {
  const { theme } = useGlobalContext();
  return (
    <ContactCardContainer theme={theme} width={40}>
      <ContactCardContent theme={theme} width={40}>
        <Strong>Faça aqui seu orçamento</Strong>

        <Button href="" target={'_blank'}>
          ORÇAMENTO
        </Button>
      </ContactCardContent>
    </ContactCardContainer>
  );
};