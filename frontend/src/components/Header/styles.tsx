import styled from 'styled-components';
import { LayoutHeaderProps } from 'types/Header';

export const LayoutHeader = styled.div<LayoutHeaderProps>`
  background: var(--background${(props) => props.theme});
  border-bottom: 0.3rem solid var(--colorSecondary${(props) => props.theme});
  width: 100%;
  padding-block: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
  position: fixed;
  top: 0;
  z-index: var(--maxz-z-index);
`;