import styled, { keyframes } from 'styled-components';

interface AlbumPageProps {
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
  justify-content: center;
  gap: 3rem;
`;

export const Arrow = styled.div`
  transform: scale(1.8);
  cursor: pointer;
`;

export const Section = styled.section`
  --duration: 0.5s;
  --ease-in-out: ease-in-out;
  
  width: 80%;
  height: 80vh;
  border-radius: 1vh;
  box-shadow: 0 2vh 4vh rgba(0, 0, 0, 0.2);
  display: flex;
  perspective: 200rem;
  position: relative;
  transform: scale(1);
  animation: ${zoom} calc(var(--duration) * 2) var(--ease-in-out);
`;

export const Page = styled.div<AlbumPageProps>`
  background: url(${(props) => props.url && props.url});
  background: ${(props) => props.url ? `url(${props.url})` : 'red'};
  backface-visibility: hidden;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  width: 50%;
  height: 100%;
  border-radius: ${(props) => props.side === 'left' ? '1vh 0 0 1vh' : '0 1vh 1vh 0'};
  position: absolute;
  top: 0;
  left: ${(props) => props.side === 'left' && 0};
  right: ${(props) => props.side === 'right' && 0};
  transition-property: transform;
  transition-duration: var(--duration);
  transform-origin: ${(props) => props.side === 'left' ? '100% 50%' : '0% 50%'};
`;