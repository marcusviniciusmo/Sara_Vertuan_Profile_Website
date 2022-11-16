import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { Close as CloseIcon } from '@mui/icons-material';
import { SynopsisMocks, SynopsisProps } from 'types/Synopsis';
import { MockedData } from 'mocks/Synopsis';
import { Portal, Overlay, Content, Close, Title } from './styles';

export function Synopsis({ title, synopsis }: SynopsisProps) {
  const [mockedData, setMockedData] = useState<SynopsisMocks>();

  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <Portal>
      <Overlay className='dialogOverlay' />

      <Content theme={theme}>
        <Close theme={theme} title={mockedData?.labelIconClose}>
          <CloseIcon />
        </Close>

        <Title>{title}</Title>

        <span>{synopsis}</span>
      </Content>
    </Portal>
  );
};