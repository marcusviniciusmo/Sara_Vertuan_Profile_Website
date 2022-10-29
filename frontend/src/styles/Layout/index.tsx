import styled from 'styled-components';

interface LayoutProps {
  theme: string;
};

export const Layout = styled.div<LayoutProps>`
  background: var(--background${(props) => props.theme});
  color: var(--colorPrimary${(props) => props.theme});
`;