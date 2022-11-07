import styled, { keyframes } from 'styled-components';

interface SectionProps {
  theme: string;
};

interface PageProps {
  url?: string;
  side: string;
};

const zoom = keyframes`
  0%, 100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.75);
    box-shadow: 0 1vh 3vh rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.div`
  margin-inline: 5rem;
  padding-block: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 3rem;
`;

export const Arrow = styled.div`
  transform: scale(1.8);
  cursor: pointer;
`;

export const Section = styled.section<SectionProps>`
  --duration: 0.5s;
  --ease-in-out: ease-in-out;
  
  border-radius: 1vh;
  box-shadow: 0 0.5rem 1rem var(--colorSecondary${(props) => props.theme});
  display: flex;
  perspective: 200rem;
  position: relative;
  transform: scale(1);
  animation: ${zoom} calc(var(--duration) * 2) var(--ease-in-out);
  overflow: hidden;
`;

export const Page = styled.div<PageProps>`
  background: ${(props) => props.url ? `url(${props.url})` : `var(--background${props.theme})`};
  backface-visibility: hidden;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  width: 35.42rem;
  height: 57.24rem;
  border-radius: ${(props) => props.side === 'left' ? '1vh 0 0 1vh' : '0 1vh 1vh 0'};
  top: 0;
  left: ${(props) => props.side === 'left' && 0};
  right: ${(props) => props.side === 'right' && 0};
  transition-property: transform;
  transition-duration: var(--duration);
  transform-origin: ${(props) => props.side === 'left' ? '100% 50%' : '0% 50%'};
`;

export const Title = styled.strong`
  width: 40rem;
  text-align: center;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
`;

export const Info = styled.span`
  margin-block: 1.5rem;
  padding-inline: 3.5rem;
  display: flex;
  flex-direction: column;
`;

export const Synopsis = styled.div`
  text-align: justify;
  padding-inline: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Button = styled.a`
  background: var(--colorSecondary${(props) => props.theme});
  color: var(--background${(props) => props.theme});
  border-radius: 0.4rem;
  width: 15rem;
  height: 6rem;
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