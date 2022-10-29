import styled from 'styled-components';

interface SidebarContainerProps {
  theme: string;
  sidebar: boolean;
};

export const Container = styled.nav<SidebarContainerProps>`
  background: var(--background${(props) => props.theme});
  width: ${(props) => props.sidebar ? '7.2rem' : '26rem' };
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.4s;
`;