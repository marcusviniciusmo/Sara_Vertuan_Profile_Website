import styled from 'styled-components';

interface PageContainerProps {
  side: string;
  url?: string;
};

export const PageContainer = styled.div<PageContainerProps>`
  background: ${(props) => props.url ? `url(${props.url})` : `var(--background${props.theme})`};
  border-radius: ${(props) => props.side === 'left' ? '1rem 0 0 1rem' : '0 1rem 1rem 0'};
  transform-origin: ${(props) => props.side === 'left' ? '100% 50%' : '0% 50%'};
  left: ${(props) => props.side === 'left' && 0};
  right: ${(props) => props.side === 'right' && 0};
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  backface-visibility: hidden;
  width: 35.42rem;
  height: 57.24rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 0;
  transition-property: transform;
  transition-duration: 0.5s;
`;

export const Title = styled.strong`
  margin-block: 4rem;
  display: flex;
  justify-content: center;
`;

export const Info = styled.span`
  margin-block: 1.5rem;
  display: flex;
  flex-direction: column;
  opacity: 0.7;
`;

export const Footer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Button = styled.a`
  background: var(--background${(props) => props.theme});
  color: var(--colorPrimary${(props) => props.theme});
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 0.5rem;
  width: 13rem;
  height: 5.2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--colorPrimary${(props) => props.theme});
    color: var(--background${(props) => props.theme});
    border: 0.1rem solid var(--background${(props) => props.theme});
    text-decoration: underline;
  }
`;