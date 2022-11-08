/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import * as Dialog from '@radix-ui/react-dialog';
import { Synopsis } from 'modals/Synopsis';
import { AlbumProps } from 'types/Album';
import { MockedData } from 'mocks/Album';
import { Container, Arrow, Section, Page, Title, Info, Button, ButtonsArea } from './styles';
import './styles.css';

export function Album() {
  const [mockedData, setMockedData] = useState<AlbumProps>();
  const [index, setIndex] = useState<number>(0);
  const { language, theme } = useGlobalContext();

  const previousPage = () => {
    const previousPage = document.querySelector('#photoAlbumLeft');

    previousPage?.classList.add('flipLeft');

    setTimeout(() => {
      index > 0
        ? setIndex(index - 1)
        : setIndex(mockedData!?.image.length - 1);

      previousPage?.classList.remove('flipLeft');
    }, 500);

  };

  const nextPage = () => {
    const nextPage = document.querySelector('#photoAlbumRight');

    nextPage?.classList.add('flipRight');

    setTimeout(() => {
      index + 1 < mockedData!?.image.length
        ? setIndex(index + 1)
        : setIndex(0);

      nextPage?.classList.remove('flipRight');
    }, 500);

  };

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <div id='albumComponent'>
      <span>{`${index + 1} / ${mockedData?.image.length}`}</span>
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

            <ButtonsArea>
              <Dialog.Root>
                <Dialog.Trigger className='dialogTrigger'>
                  <Button theme={theme}>
                    SINOPSE
                  </Button>
                </Dialog.Trigger>

                <Button
                  href={mockedData?.image[index].link}
                  className='noUnderline'
                  target={'_blank'}
                  theme={theme}
                >
                  Check post
                </Button>

                <Synopsis synopsis={mockedData!?.image[index].synopsis} />
              </Dialog.Root>
            </ButtonsArea>
          </Page>
        </Section>


        <Arrow title='Next Page' id='arrowRight'>
          <ArrowForwardIos fontSize='large' onClick={nextPage} />
        </Arrow>
      </Container>
    </div>
  );
};