import styled from 'styled-components';

interface LayoutProps {
  theme: string;
};

export const Layout = styled.div<LayoutProps>`
  background: ${(props) => props.theme === 'Dark' ? '#121212' : '#FFFFFF' };
  color: ${(props) => props.theme === 'Dark' ? '#FFFFFF' : 'rgba(0, 0, 0, 0.87)'};
`;