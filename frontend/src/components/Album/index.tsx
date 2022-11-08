/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import * as Dialog from '@radix-ui/react-dialog';
import { Synopsis } from 'modals/Synopsis';
import { AlbumProps } from 'types/Album';
import { MockedData } from 'mocks/Album';
import { Container, Arrow, Section, Page, Title, Info, Button } from './styles';
import './styles.css';

export function Album() {
  const [mockedData, setMockedData] = useState<AlbumProps>();
  const [index, setIndex] = useState<number>(0);
  const { language, theme } = useGlobalContext();

  const previousPage = () => {
    if (index > 0) {
      const previousPage = document.querySelector('#photoAlbumLeft');

      previousPage?.classList.add('flipLeft');

      setTimeout(() => {
        setIndex(index - 1);
        previousPage?.classList.remove('flipLeft');
      }, 500);
    }
  };

  const nextPage = () => {
    if (index + 1 < mockedData!?.image.length) {

      const nextPage = document.querySelector('#photoAlbumRight');

      nextPage?.classList.add('flipRight');

      setTimeout(() => {
        setIndex(index + 1);
        nextPage?.classList.remove('flipRight');
      }, 500);
    };
  };

  const showArrows = () => {
    if (index <= 0) {
      document.getElementById('arrowLeft')!.style.zIndex = '-1';
      document.getElementById('arrowRight')!.style.zIndex = '0';
    } else if (index + 1 >= mockedData!?.image.length) {
      document.getElementById('arrowRight')!.style.zIndex = '-1';
    } else {
      document.getElementById('arrowLeft')!.style.zIndex = '0';
    }
  };

  useEffect(() => {
    showArrows();
  }, [index]);

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <Container>
      <Arrow title='Previous Page' id='arrowLeft'>
        <ArrowBackIos fontSize='large' onClick={previousPage} />
      </Arrow>

      <Section theme={theme}>
        <Page
          id='photoAlbumLeft'
          className='left'
          side='left'
          url={mockedData?.image[index].url}
        />

        <Page
          id='photoAlbumRight'
          className='right'
          side='right'
        >
          <Title>{mockedData?.image[index].title}</Title>

          <Info>{mockedData?.image[index].author}</Info>

          <Info>
            {`${mockedData?.image[index].publisher} - 
            ${mockedData?.image[index].year}`}
          </Info>

          <Dialog.Root>
            <Dialog.Trigger>
              {/* <Synopsis> */}
                <span>{mockedData?.image[index].synopsis}</span>
                <Button
                  href={mockedData?.image[index].link}
                  className='noUnderline'
                  target={'_blank'}
                  theme={theme}
                >
                  POST
                </Button>
              {/* </Synopsis> */}
            </Dialog.Trigger>

            <Synopsis />
          </Dialog.Root>
        </Page>
      </Section>


      <Arrow title='Next Page' id='arrowRight'>
        <ArrowForwardIos fontSize='large' onClick={nextPage} />
      </Arrow>
    </Container>
  );
};