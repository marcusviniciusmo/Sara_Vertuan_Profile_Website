import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Card } from "components/Card";
import { TestimoniesProps } from "types/Testimonies";
import { MockedData } from "mocks/Testimonies";
import { Interface } from "styles/Interface";

export function Testimonies() {
  const [mockedData, setMockedData] = useState<TestimoniesProps>();
  const { language } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <h1>DEPOIMENTOS View</h1>

        {
          mockedData?.cards.map((card) => {
            return (
              <Card card={card.card} key={card.card.id}/>
            )
          })
        }

      </Interface>
    </div>
  );
};