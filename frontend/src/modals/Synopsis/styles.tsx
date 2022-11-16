import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SynopsisContentProps, SynopsisCloseProps } from 'types/Synopsis';

export const Portal = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)``;

export const Content = styled(Dialog.Content)<SynopsisContentProps>`
  background: var(--background${(props) => props.theme});
  color: var(--colorPrimary${(props) => props.theme});
  z-index: var(--max-z-index);
  text-align: justify;
  padding: 3rem;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.1rem 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Close = styled(Dialog.Close)<SynopsisCloseProps>`
  background: ${(props) => props.theme === 'Light' && `var(--colorSecondaryLight)`};
  color: ${(props) => props.theme === 'Light' && `var(--colorPrimaryDark)`};
  width: 3rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Title = styled(Dialog.Title)``;