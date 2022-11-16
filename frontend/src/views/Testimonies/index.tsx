/* eslint-disable react-hooks/exhaustive-deps */
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

export function Testimonies() {
  const [mockedData, setMockedData] = useState<TestimoniesProps>();
  const [active, setActive] = useState<boolean>(false);

  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  const showTestimonies = () => {
    setActive(!active);

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
        <Container className='testimoniesContainer'>
          <Toggle className='testimoniesToggle' theme={theme} onClick={showTestimonies}>
            <IoIosAdd />
          </Toggle>
          {
            mockedData?.cards.map((card) => {
              return (
                <Item
                  key={card.card.id}
                  cardId={card.card.id}
                  length={mockedData.cards.length}
                  className={`${active && 'active'} item${card.card.id}`}
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