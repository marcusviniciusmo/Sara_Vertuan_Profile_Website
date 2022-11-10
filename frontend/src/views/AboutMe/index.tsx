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
      </Interface>
    </div>
  );
};