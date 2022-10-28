import * as Switch from '@radix-ui/react-switch';
import './styles.css';

export function Theme() {
  return (
    <>
      <h1>THEME Component</h1>
      <h3>Tema</h3>

      <h5>Light</h5>
      <Switch.Root className='switchRoot'>
        <Switch.Thumb className='switchThumb' />
      </Switch.Root>
      <h5>Dark</h5>
    </>
  );
};