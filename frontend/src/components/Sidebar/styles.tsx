import styled from 'styled-components';

interface SidebarContainerProps {
  theme: string;
  sidebar: boolean;
};

export const Container = styled.nav<SidebarContainerProps>`
  background: var(--background${(props) => props.theme});
  width: ${(props) => props.sidebar ? 'var(--widthSidebarOpened)' : '7.2rem' };
  border-right: 0.1rem solid var(--colorSecondary${(props) => props.theme});
  height: 100%;
  margin-top: 4.5rem;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.5s;
`;

export const Inner = styled.div`
  width: var(--widthSidebarOpened);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Header = styled.header`
  padding: 0 1.25rem 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Strong = styled.strong`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;