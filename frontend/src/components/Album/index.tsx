import { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Section, AlbumPage } from './styles';

export function Album() {
  const [index, setIndex] = useState<number>(0);

  const photo01 = 'https://images.unsplash.com/photo-1630847911146-edd8828abf14?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMjUxMjQ0Ng&ixlib=rb-1.2.1&q=85';

  const photo02 = 'https://images.unsplash.com/photo-1596774468032-915cdd39ea39?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMjUxMjg1MQ&ixlib=rb-1.2.1&q=85';

  const photos = [
    {
      url: photo01,
      text: 'Imagem 01'
    },
    {
      url: photo02,
      text: 'Imagem 02'
    },
    {
      url: '',
      text: 'Imagem 03'
    }
  ]

  const previousPage = () => {
    if (index > 0)
      setIndex(index - 1);
  };

  const nextPage = () => {
    if (index + 1 < photos.length)
      setIndex(index + 1);
  };

  return (
    <>
      <ArrowBackIos fontSize='large' onClick={previousPage} />

      <Section>
        <AlbumPage url={photos[index].url} side='left' className='right next'></AlbumPage>
        <AlbumPage side='right' className='left current'>{photos[index].text}</AlbumPage>
      </Section>

      <ArrowForwardIos fontSize='large' onClick={nextPage} />
    </>
  );
};