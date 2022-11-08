import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import * as Dialog from '@radix-ui/react-dialog';
import { Close } from '@mui/icons-material';
import { SynopsisMocks, SynopsisProps } from 'types/Synopsis';
import { MockedData } from 'mocks/Synopsis';
import './styles.css';

export function Synopsis({ title, synopsis }: SynopsisProps) {
  const [mockedData, setMockedData] = useState<SynopsisMocks>();
  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

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
        <Dialog.Close
          className={`iconClose${theme}`}
          title={mockedData?.labelIconClose}
        >
          <Close />
        </Dialog.Close>

        <Dialog.Title>{title}</Dialog.Title>

        <span>{synopsis}</span>
      </Dialog.Content>
    </Dialog.Portal>
  );
};