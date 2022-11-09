import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Interface } from "styles/Interface";
import { AboutMeProps } from "types/AboutMe";
import { MockedData } from "mocks/AboutMe";

export function AboutMe() {
  const [mockedData, setMockedData] = useState<AboutMeProps>();
  const { language } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <h1>SOBRE MIM View</h1>
        <h3>AQUI VAI UMA IMAGEM</h3>
        
        <strong>{mockedData?.strong}</strong>
        <span>{mockedData?.text}</span>

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
      </Interface>
    </div>
  );
};