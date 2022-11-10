import { useGlobalContext } from "context";
import { BsWhatsapp, BsEnvelope, BsFacebook, BsInstagram, BsBehance, BsLinkedin } from 'react-icons/bs';
import { Container, Content, Strong, MediasArea, Media, Link } from "./styles";

export function SocialMedia() {
  const { theme } = useGlobalContext();

  return (
    <Container theme={theme}>
      <Content theme={theme}>
        <Strong>Confira Minhas Redes Sociais</Strong>

        <MediasArea>
          <Link href="https://web.whatsapp.com" target={'_blank'}>
            <Media theme={theme} title='+5532261228'>
              <BsWhatsapp />
            </Media>
          </Link>

          <Link href="https://outlook.com" target={'_blank'}>
            <Media theme={theme} title='saracvertuan@gmail.com'>
              <BsEnvelope />
            </Media>
          </Link>

          <Link href="https://facebook.com/designsaravertuan" target={'_blank'}>
            <Media theme={theme} title='facebook.com/designsaravertuan'>
              <BsFacebook />
            </Media>
          </Link>

          <Link href="https://instagram.com/designersaravertuan" target={'_blank'}>
            <Media theme={theme} title='instagram.com/designersaravertuan'>
              <BsInstagram />
            </Media>
          </Link>

          <Link href="https://behance.net/saravertuan" target={'_blank'}>
            <Media theme={theme} title='behance.net/saravertuan'>
              <BsBehance />
            </Media>
          </Link>

          <Link href="https://linkedin.com/in/saracvertuan/" target={'_blank'}>
            <Media theme={theme} title='linkedin.com/in/saracvertuan/'>
              <BsLinkedin />
            </Media>
          </Link>
        </MediasArea>
      </Content>
    </Container>
  );
};