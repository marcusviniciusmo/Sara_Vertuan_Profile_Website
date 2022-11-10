import styled, { keyframes } from "styled-components";

export const borderEffect = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

interface ContainerProps {
  theme: string;
};

export const Container = styled.div<ContainerProps>`
  width: 40rem;
  height: 50rem;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translate(-50% -50%);
  box-sizing: border-box;

  &::before {
    content:"";
    background: conic-gradient(
      var(--background${(props) => props.theme}), #595959);
    position: absolute;
    width: 40rem;
    height: 50rem;
    animation: ${borderEffect} 10s linear infinite;
    transition: 10s ease;
  }
`;

export const Content = styled.div<ContainerProps>`
  background: var(--background${(props) => props.theme});
  width: 39.7rem;
  height: 49.7rem;
  z-index: 999;
`;