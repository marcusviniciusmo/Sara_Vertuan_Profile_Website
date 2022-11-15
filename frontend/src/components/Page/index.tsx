import { useGlobalContext } from 'context';
import { Synopsis } from 'modals/Synopsis';
import * as Dialog from '@radix-ui/react-dialog';
import { PageProps } from 'types/Page';
import { PageContainer, Title, Info, Footer, Button, Span } from "./styles";
import './styles.css';

export function Page(props: PageProps) {
  const { theme } = useGlobalContext();

  return (
    <PageContainer
      id={props.id}
      className={props.className}
      url={props.url}
    >
      {
        props.className === 'right' &&
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

            <Span>{`${props.page} / ${props.lengthAlbum}`}</Span>
          </Footer>
        </>
      }
    </PageContainer>
  );
};