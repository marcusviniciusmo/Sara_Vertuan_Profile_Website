import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Section, AlbumPage } from './styles';

export function Album() {
  const url = 'https://images.unsplash.com/photo-1596774468032-915cdd39ea39?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMjUxMjg1MQ&ixlib=rb-1.2.1&q=85';

  return (
    <>
      <ArrowBackIos fontSize='large' />

      <Section>
        <AlbumPage url={url} side='left' className='right next'></AlbumPage>
        <AlbumPage side='right' className='left current'>TESTE</AlbumPage>
      </Section>

      <ArrowForwardIos fontSize='large' />
    </>
  );
};