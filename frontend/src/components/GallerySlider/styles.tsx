import styled, { keyframes } from 'styled-components';

interface CardProps {
  background: string;
  cardId: number;
  length: number;
};

const carouselEffect = keyframes`
  from {
    transform: rotateY(360deg) translateZ(22rem) rotateY(-360deg);
    z-index: 10;
    opacity: 1;
  }

  50% {
    z-index: -10;
  }

  to {
    transform: rotateY(0deg) translateZ(22rem) rotateY(0deg);
    z-index: 10;
    opacity: 1;
  }
`;

export const Carousel = styled.div`
  width: 35rem;
  height: 20rem;
  margin: 0 auto;
  position: relative;
  top: 20rem;
  perspective: 28rem;
`;

export const Card = styled.div<CardProps>`
  background: url(${(props) => props.background}) no-repeat;
  background-position: center center;
  background-size: 10rem 15rem;
  width: 10rem;
  height: 15rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3.5rem;
  left: 12.5rem;
  animation: ${carouselEffect} 25s linear infinite;
  animation-delay: -${(props) => props.length - props.cardId}s;
`;