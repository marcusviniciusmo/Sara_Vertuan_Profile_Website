import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { IoIosAdd } from 'react-icons/io';
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Card } from "components/Card";
import { TestimoniesProps } from "types/Testimonies";
import { MockedData } from "mocks/Testimonies";
import { Interface } from "styles/Interface";
import { Container, Toggle, Item } from "./styles";
import './styles.css';

export function Testimonies() {
  const [mockedData, setMockedData] = useState<TestimoniesProps>();
  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  const showTestimonies = () => {
    let container = document.querySelector('.testimoniesContainer');
    let toggle = document.querySelector('.testimoniesToggle');

    container?.classList.toggle('active');
    toggle?.classList.toggle('active');
  };

  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <Container className='testimoniesContainer' onClick={showTestimonies}>
          <Toggle className='testimoniesToggle' theme={theme}>
            <IoIosAdd />
          </Toggle>
          {
            mockedData?.cards.map((card) => {
              return (
                <Item
                  key={card.card.id}
                  className={`item${card.card.id}`}
                  >
                  <Card card={card.card} />
                </Item>
              )
            })
          }
        </Container>

      </Interface>
    </div>
  );
};