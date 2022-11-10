import styled, { keyframes } from "styled-components";

interface ContactCardProps {
  theme: string;
  width: number;
};

export const borderEffect = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const ContactCardContainer = styled.div<ContactCardProps>`
  width: ${(props) => props.width}rem;
  height: 50rem;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translate(-50% -50%);
  box-sizing: border-box;
  border-top: 0.05rem solid;
  border-left: 0.05rem solid;
  
  &::before {
    content:"";
    background: conic-gradient(
      var(--background${(props) => props.theme}), #595959);
    position: absolute;
    width: ${(props) => props.width}rem;
    height: 50rem;
    animation: ${borderEffect} 10s linear infinite;
    transition: 10s ease;
  }
`;

export const ContactCardContent = styled.div<ContactCardProps>`
  background: var(--background${(props) => props.theme});
  width: calc(${(props) => props.width}rem - 0.3rem);
  height: 49.7rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 998;
`;