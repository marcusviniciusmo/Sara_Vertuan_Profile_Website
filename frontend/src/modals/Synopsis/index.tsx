import { useGlobalContext } from 'context';
import * as Dialog from '@radix-ui/react-dialog';
import { Close } from '@mui/icons-material';
import { SynopsisProps } from 'types/Synopsis';
import './styles.css';

export function Synopsis({ synopsis }: SynopsisProps) {
  const { theme } = useGlobalContext();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='dialogOverlay' />

      <Dialog.Content
        className='dialogContent'
        style={{
          background: `var(--background${theme})`,
          color: `var(--colorPrimary${theme})`
        }}
      >
        <Dialog.Close className={`iconClose${theme}`} title='Fechar'>
          <Close />
        </Dialog.Close>

        <Dialog.Title>Sinopse</Dialog.Title>

        <span>{synopsis}</span>
      </Dialog.Content>
    </Dialog.Portal>
  );
};