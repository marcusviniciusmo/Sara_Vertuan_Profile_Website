import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { Link } from "react-router-dom";
import { MenuProps } from "types/Menu";
import { MockedData } from "mocks/Menu";
import { MenuContainer, MenuOption } from './styles';

export function Menu() {
  const [mockedData, setMockedData] = useState<MenuProps>();
  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <MenuContainer>
      {
        mockedData?.routes.map((route) => {
          return (
            <Link
              to={route.link}
              className="noUnderline"
              title={route.title}
              key={`${route.title}`}
            >
              <MenuOption theme={theme} hasBorder={route.hasBorder}>
                <route.icon fontSize="large" />
                <span>{route.title}</span>
              </MenuOption>
            </Link>
          )
        })
      }
    </MenuContainer>
  );
};