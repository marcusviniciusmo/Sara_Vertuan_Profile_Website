import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Page } from 'components/Page';
import { AlbumProps } from 'types/Album';
import { MockedData } from 'mocks/Album';
import { Container, Arrow, Section } from './styles';

export function Album() {
  const [mockedData, setMockedData] = useState<AlbumProps>();
  const [index, setIndex] = useState<number>(0);

  const { language, theme } = useGlobalContext();

  const newClass = 'flip';
  const idPageLeft = 'pageLeft';
  const idPageRight = 'pageRight';
  const classNameLeftSide = 'left';
  const classNameRightSide = 'right';

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  const handlePage = (idElement: string) => {
    const handlerPage = document.getElementById(idElement);

    handlerPage?.classList.add(newClass);

    setTimeout(() => {
      if (idElement === idPageLeft) {
        index > 0
          ? setIndex(index - 1)
          : setIndex(mockedData!?.image.length - 1);
      } else {
        index + 1 < mockedData!?.image.length
          ? setIndex(index + 1)
          : setIndex(0);
      };

      handlerPage?.classList.remove(newClass)
    }, 500);
  };

  return (
    <Container>
      <Arrow title={mockedData?.arrows.prev}>
        <ArrowBackIos onClick={() => handlePage(idPageLeft)} />
      </Arrow>

      <Section theme={theme}>
        <Page
          id={idPageLeft}
          className={classNameLeftSide}
          url={mockedData?.image[index].url}
        />

        <Page
          id={idPageRight}
          className={classNameRightSide}
          title={mockedData?.image[index].title}
          author={mockedData?.image[index].author}
          publisher={mockedData?.image[index].publisher}
          labelSynopsis={mockedData?.labelSynopsis}
          labelPost={mockedData?.labelPost}
          link={mockedData?.image[index].link}
          synopsis={mockedData!?.image[index].synopsis}
          page={index + 1}
          lengthAlbum={mockedData?.image.length}
        />
      </Section>

      <Arrow title={mockedData?.arrows.next}>
        <ArrowForwardIos onClick={() => handlePage(idPageRight)} />
      </Arrow>
    </Container>
  );
};