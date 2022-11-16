import styled from 'styled-components';
import { LayoutProps } from 'types/Layout';

export const Layout = styled.div<LayoutProps>`
  background: var(--background${(props) => props.theme});
  color: var(--colorPrimary${(props) => props.theme});
`;