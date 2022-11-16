import styled, { keyframes } from "styled-components";
import { ContactCardContainerProps, ContactCardContentProps } from "types/ContactCard";

const width = 40;
const height = 50;

export const borderEffect = keyframes`
  100% {
    transform: rotate(360deg);
  };
`;

export const ContactCardContainer = styled.div<ContactCardContainerProps>`
  width: ${width}rem;
  height: ${height}rem;
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
    width: ${width}rem;
    height: ${height}rem;
    animation: ${borderEffect} 10s linear infinite;
    transition: 10s ease;
  }
`;

export const ContactCardContent = styled.div<ContactCardContentProps>`
  background: var(--background${(props) => props.theme});
  width: calc(${width}rem - 0.3rem);
  height: calc(${height}rem - 0.3rem);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: calc(var(--max-z-index) - 1);
`;