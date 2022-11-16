import styled from 'styled-components';
import { CardContainerProps, CardFigureProps } from 'types/Card';

const widthImage = '9rem';
const heightImage = '9rem';

export const Container = styled.div<CardContainerProps>`
  background: var(--background${(props) => props.theme});
  border-top: 0.3rem solid var(--colorSecondary${(props) => props.theme});
  border-left: 0.3rem solid var(--colorSecondary${(props) => props.theme});
  box-shadow: 0.3rem 0.3rem 1rem var(--colorSecondary${(props) => props.theme});
  width: 28rem;
  height: 45rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 1s;
  overflow: hidden;
  
  &:hover {
    z-index: var(--max-z-index);
  }
`;

export const Figure = styled.div<CardFigureProps>`
  box-shadow: 0.1rem 0.1rem 0.5rem ${
    (props) => props.theme === 'Light' && 'var(--colorPrimaryLight)'};
  background: var(--backgroundLight);
  color: var(--colorPrimary${(props) => props.theme});
  width: ${widthImage};
  height: ${heightImage};
  margin: 2rem auto 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: ${widthImage};
  height: ${heightImage};
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const Name = styled.strong`
  font-size: 1.4rem;
  display: block;
`;

export const Role = styled.span`
  font-size: 1.0rem;
  display: block;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  text-align: justify;
`;
