import { useGlobalContext } from "context";
import { Container, Content } from "./styles";

export function SocialMedia() {
const { theme } = useGlobalContext();

  return (
    <Container theme={theme}>
      <Content theme={theme}>
        <h1>SOCIAL MEDIA Component</h1>

        <h4>Gostou do que  viu? Entre em contato e vamos conversar!</h4>
        <h5>CONFIRA MINHAS REDES SOCIAIS</h5>
        <h6>Facebook</h6>
        <h6>Instagram</h6>

        <h5>Whatsapp</h5>
        <h6>+5532261228</h6>
        <h5>E-mail</h5>
        <h6>saracvertuan@gmail.com</h6>
        <h5>Facebook</h5>
        <h6>facebook.com/designsaravertuan</h6>
        <h5>Instagram</h5>
        <h6>instagram.com/designersaravertuan</h6>
        <h5>Behancé</h5>
        <h6>behance.net/saravertuan</h6>
        <h5>Linkedin</h5>
        <h6>linkedin.com/in/saracvertuan/</h6>
      </Content>
    </Container>
  );
};