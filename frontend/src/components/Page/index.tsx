import { useGlobalContext } from 'context';
import { Synopsis } from 'modals/Synopsis';
import * as Dialog from '@radix-ui/react-dialog';
import { PageContainer, Title, Info, Footer, Button } from "./styles";
import './styles.css';

interface PageProps {
  children?: React.ReactNode;
  id: string;
  className: string;
  side: string;
  url?: string;
  title?: string;
  author?: string;
  publisher?: string;
  year?: string;
  labelSynopsis?: string;
  synopsis?: string;
  labelPost?: string;
  link?: string;
  page?: number;
  lengthAlbum?: number;
};

export function Page(props: PageProps) {
  const { theme } = useGlobalContext();

  return (
    <PageContainer
      id={props.id}
      className={props.className}
      side={props.side}
      url={props.url}
    >
      {
        props.side === 'right' &&
        <>
          <Title>{props.title}</Title>

          <Info>{props.author}</Info>

          <Info>{props.publisher} - {props.year}</Info>

          <Footer>
            <Dialog.Root>
              <Dialog.Trigger className='dialogTrigger'>
                <Button theme={theme}>
                  {props.labelSynopsis}
                </Button>
              </Dialog.Trigger>

              <Button
                href={props.link}
                className='noUnderline'
                target={'_blank'}
                theme={theme}
              >
                {props.labelPost}
              </Button>

              <Synopsis
              title={props.labelSynopsis}
              synopsis={props.synopsis}
            />
            </Dialog.Root>

            <span>{`${props.page} / ${props.lengthAlbum}`}</span>
          </Footer>
        </>
      }
    </PageContainer>
  );
};