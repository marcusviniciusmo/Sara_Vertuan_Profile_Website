import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Interface } from "styles/Interface";
import { AboutMeProps } from "types/AboutMe";
import { MockedData } from "mocks/AboutMe";
import Me from '../../assets/aboutMe/aboutMe.jpg';
import { Container, Picture, Text, Strong, Span } from './styles';

export function AboutMe() {
  const [mockedData, setMockedData] = useState<AboutMeProps>();
  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <Container>
          <Picture cover={Me} theme={theme} />

          <Text>
            <Strong>{mockedData?.strong}</Strong>
            <Span>{mockedData?.text}</Span>
          </Text>
        </Container>
        {/* 
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
        <h6>linkedin.com/in/saracvertuan/</h6> */}
      </Interface>
    </div>
  );
};