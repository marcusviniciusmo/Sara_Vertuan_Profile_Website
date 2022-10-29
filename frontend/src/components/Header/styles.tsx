import styled from 'styled-components';

interface LayoutHeaderProps {
  theme: string;
};

export const LayoutHeader = styled.div<LayoutHeaderProps>`
  background: var(--background${(props) => props.theme});
  border-bottom: 0.1rem solid var(--colorSecondary${(props) => props.theme});
  width: 100%;
  padding-block: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
  position: fixed;
  top: 0;
`;