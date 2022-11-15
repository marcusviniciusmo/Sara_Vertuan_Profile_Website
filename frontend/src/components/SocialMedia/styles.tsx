import styled from "styled-components";
import { SocialMediaContainerProps } from "types/SocialMedia";

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

export const Media = styled.div<SocialMediaContainerProps>`
  background: var(--backgroundLight);
  color: var(--colorPrimary${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  border: ${(props) => props.theme === 'Light' && '0.1rem solid var(--colorSecondaryLight)'};
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
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    opacity: 0.7;
  }
`;