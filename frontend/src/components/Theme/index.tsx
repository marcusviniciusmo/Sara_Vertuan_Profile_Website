import { useGlobalContext } from 'context';
import { LightMode, DarkMode } from '@mui/icons-material';
import * as Switch from '@radix-ui/react-switch';
import './styles.css';

export function Theme() {
  const { theme, setTheme } = useGlobalContext();

  return (
    <Switch.Root
      className={`switchRoot${theme}`}
      defaultChecked={theme === "Dark"}
      onClick={() => setTheme(theme === "Dark" ? 'Light' : 'Dark')}
    >
      <Switch.Thumb className='switchThumb'>
        {
          theme === "Dark"
            ? <DarkMode className={`switchIcon${theme}Mode`} />
            : <LightMode className={`switchIcon${theme}Mode`} />
        }
      </Switch.Thumb>
    </Switch.Root>
  );
};