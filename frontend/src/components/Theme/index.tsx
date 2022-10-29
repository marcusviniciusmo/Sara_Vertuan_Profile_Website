import { useGlobalContext } from 'context';
import { LightMode, DarkMode } from '@mui/icons-material';
import * as Switch from '@radix-ui/react-switch';
import './styles.css';

export function Theme() {
  const { theme, setTheme } = useGlobalContext();

  return (
    <>
      <h1>THEME Component</h1>
      <h3>Tema</h3>

      <h5>Light</h5>
      <Switch.Root
        className='switchRoot'
        defaultChecked={theme === "Dark"}
        onClick={() => setTheme(theme === "Dark" ? 'Light' : 'Dark')}
      >
        <Switch.Thumb className='switchThumb'>
          {
            theme === "Dark"
              ? <DarkMode />
              : <LightMode />
          }
        </Switch.Thumb>
      </Switch.Root>
      <h5>Dark</h5>
    </>
  );
};