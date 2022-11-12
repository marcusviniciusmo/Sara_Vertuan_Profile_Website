import styled, { keyframes } from 'styled-components';

interface SectionProps {
  theme: string;
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