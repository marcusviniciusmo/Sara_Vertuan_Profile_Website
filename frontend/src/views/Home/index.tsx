import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Album } from "components/Album";
import { HomeProps } from "types/Home";
import { MockedData } from "mocks/Home";
import { Interface } from "styles/Interface";
import { ContainerText, Title, Text } from "./styles";
import './styles.css';

export function Home() {
  const [mockedData, setMockedData] = useState<HomeProps>();
  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <div>
      <Header />

      <Sidebar />

      <Interface className="homeInterface">
        <Album />

        <ContainerText theme={theme}>
          <Title>{mockedData?.title}</Title>
          <Text>{mockedData?.span}</Text>
        </ContainerText>

      </Interface>
    </div>
  );
};