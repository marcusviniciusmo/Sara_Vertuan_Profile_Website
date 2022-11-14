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
  transform: scale(2);
  cursor: pointer;
`;

export const Section = styled.section<SectionProps>`
  box-shadow: 0 0.5rem 1rem var(--colorSecondary${(props) => props.theme});
  animation: ${zoom} calc(0.5s * 2) ease-in-out;
  border-radius: 1rem;
  display: flex;
  position: relative;
  transform: scale(1);
  perspective: 200rem;
  overflow: hidden;
`;