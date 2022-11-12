/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Page } from 'components/Page';
import { AlbumProps } from 'types/Album';
import { MockedData } from 'mocks/Album';
import { Container, Arrow, Section } from './styles';
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
        <Arrow title={mockedData?.arrows.prev} id='arrowLeft'>
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
            title={mockedData?.image[index].title}
            author={mockedData?.image[index].author}
            publisher={mockedData?.image[index].publisher}
            labelSynopsis={mockedData?.labelSynopsis}
            labelPost={mockedData?.labelPost}
            link={mockedData?.image[index].link}
            synopsis={mockedData!?.image[index].synopsis}
          />
        </Section>

        <Arrow title={mockedData?.arrows.next} id='arrowRight'>
          <ArrowForwardIos fontSize='large' onClick={nextPage} />
        </Arrow>
      </Container>
    </div>
  );
};