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
  width: 35rem;
  height: 50rem;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translate(-50% -50%);
  box-sizing: border-box;
  border: 0.05rem solid;
  
  &::before {
    content:"";
    background: conic-gradient(
      var(--background${(props) => props.theme}), #595959);
      position: absolute;
      width: 35rem;
      height: 50rem;
      animation: ${borderEffect} 10s linear infinite;
      transition: 10s ease;
    }
`;

export const Content = styled.div<ContainerProps>`
  background: var(--background${(props) => props.theme});
  width: 34.7rem;
  height: 49.7rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 998;
`;

export const Strong = styled.strong`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  display: block;
`;

export const MediasArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

export const Media = styled.div<ContainerProps>`
  background: var(--background${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  color: var(--colorPrimary${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  `;

export const Link = styled.a`
  all: unset;
  cursor: pointer;
`;