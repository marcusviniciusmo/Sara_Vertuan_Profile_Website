import { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Section, AlbumPage } from './styles';
import './styles.css';

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
    if (index + 1 < photos.length) {

      const nextPage = document.querySelector('#photoAlbumRight');

      nextPage?.classList.add('flipRight');

      setTimeout(() => {
        setIndex(index + 1);
        nextPage?.classList.remove('flipRight');
      }, 500);
    };
  };

  return (
    <>
      <ArrowBackIos fontSize='large' onClick={previousPage} />

      <Section>
        <AlbumPage
          id='photoAlbumLeft'
          className='left'
          side='left'
          url={photos[index].url}
        />

        <AlbumPage
          id='photoAlbumRight'
          className='right'
          side='right'
        >
          {photos[index].text}
        </AlbumPage>
      </Section>

      <ArrowForwardIos fontSize='large' onClick={nextPage} />
    </>
  );
};