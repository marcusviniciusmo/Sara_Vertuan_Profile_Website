import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { AlbumProps } from 'types/Album';
import { MockedData } from 'mocks/Album';
import { Container, Arrow, Section, Page } from './styles';
import './styles.css';

export function Album() {
  const [mockedData, setMockedData] = useState<AlbumProps>();
  const [index, setIndex] = useState<number>(0);
  const { language } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  const previousPage = () => {
    if (index > 0) {
      const previousPage = document.querySelector('#photoAlbumLeft');

      previousPage?.classList.add('flipLeft');

      setTimeout(() => {
        setIndex(index - 1);
        previousPage?.classList.remove('flipLeft');
      }, 500);
    };
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

  return (
    <Container>
      {
        index > 0 &&
        <Arrow title='Previous Page'>
          <ArrowBackIos fontSize='large' onClick={previousPage} />
        </Arrow>
      }

      <Section>
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
          {mockedData?.image[index].post}
        </Page>
      </Section>

      {
        index + 1 < mockedData!?.image.length &&
        <Arrow title='Next Page'>
          <ArrowForwardIos fontSize='large' onClick={nextPage} />
        </Arrow>
      }
    </Container>
  );
};