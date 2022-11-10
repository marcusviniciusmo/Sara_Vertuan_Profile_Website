import styled from "styled-components";

interface ContainerProps {
  theme: string;
};

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