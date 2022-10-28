import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';
import './styles.css';

export function Theme() {
  const [theme, setTheme] = useState<string>("Dark");

  const handleTheme = () => {
    setTheme(theme === 'Dark' ? "Light" : "Dark");
  };

  return (
    <>
      <h1>THEME Component</h1>
      <h3>Tema</h3>

      <h5>Light</h5>
      <Switch.Root
        className='switchRoot'
        defaultChecked={theme === "Dark"}
        onClick={handleTheme}
      >
        <Switch.Thumb className='switchThumb' />
      </Switch.Root>
      <h5>Dark</h5>
    </>
  );
};