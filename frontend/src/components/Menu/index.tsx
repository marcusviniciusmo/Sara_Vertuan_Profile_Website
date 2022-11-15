import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { MenuProps } from "types/Menu";
import { MockedData } from "mocks/Menu";
import { MenuContainer, MenuIcon, MenuLink, MenuOption } from './styles';

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
            <MenuLink
              to={route.link}
              title={route.title}
              key={`${route.title}`}
            >
              <MenuOption theme={theme} hasBorder={route.hasBorder}>
                <MenuIcon color={route.color}>
                  <route.icon />
                </MenuIcon>
                <span>{route.title}</span>
              </MenuOption>
            </MenuLink>
          )
        })
      }
    </MenuContainer>
  );
};