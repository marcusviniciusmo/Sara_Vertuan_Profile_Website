import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Album } from "components/Album";
import { HomeProps } from "types/Home";
import { MockedData } from "mocks/Home";
import { Interface } from "styles/Interface";

export function Home() {
  const [mockedData, setMockedData] = useState<HomeProps>();
  const { language } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <Album />

        <strong>{mockedData?.title}</strong>
        <span>{mockedData?.span}</span>

      </Interface>
    </div>
  );
};