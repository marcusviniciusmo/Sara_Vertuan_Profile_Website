/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeProps } from 'types/Theme';
import { MockedData } from 'mocks/Theme';
import { Root, Thumb } from './styles';

export function Theme() {
  const [mockedData, setMockedData] = useState<ThemeProps>();

  const { language, theme, setTheme } = useGlobalContext();

  const valueDark = 'Dark';
  const valueLight = 'Light';

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  useEffect(() => {
    handleBackground();
  }, [theme]);

  const handleBackground = () => {
    const body = document.querySelector('body');

    if (body) {
      body.style.background = `var(--background${theme})`;
    };
  };

  return (
    <Root
      theme={theme}
      title={theme === valueDark
        ? mockedData?.darkTheme
        : mockedData?.lightTheme}
      defaultChecked={theme === valueDark}
      onClick={() => setTheme(theme === valueDark ? valueLight : valueDark)}
    >
      <Thumb>
        {
          theme === valueDark
            ? <DarkMode className={`switchIconDarkMode`} />
            : <LightMode className={`switchIconLightMode`} />
        }
      </Thumb>
    </Root>
  );
};