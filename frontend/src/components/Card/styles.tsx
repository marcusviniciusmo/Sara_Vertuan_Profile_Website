import styled from 'styled-components';

interface ContainerProps {
  theme: string;
};

export const Container = styled.div<ContainerProps>`
  background: var(--background${(props) => props.theme});
  width: 28rem;
  height: 45rem;
  border-radius: 1.5rem;
  border-top: 0.3rem solid var(--colorSecondary${(props) => props.theme});
  border-left: 0.3rem solid var(--colorSecondary${(props) => props.theme});
  box-shadow: 0.3rem 0.3rem 1rem var(--colorSecondary${(props) => props.theme});
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const Figure = styled.div`
  width: 100%;
  height: 10rem;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Name = styled.strong`
  display: block;
`;

export const Role = styled.span`
  font-size: 1.2rem;
  display: block;
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;
