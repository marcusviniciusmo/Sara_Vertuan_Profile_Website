import styled from 'styled-components';

interface PictureProps {
  cover: string;
  theme: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Picture = styled.div<PictureProps>`
  background: url(${(props) => props.cover}) no-repeat;
  background-size: cover;
  width: 25rem;
  height: 25rem;
  border: 0.5rem solid var(--colorPrimary${(props) => props.theme});
  -webkit-box-reflect: below 1rem linear-gradient(transparent, rgba(0, 0, 0, 0.3));
`;

export const Text = styled.div`
  width: 55rem;
  text-align: justify;
`;

export const Strong = styled.strong`
  font-size: 3rem;
  margin-bottom: 3rem;
  display: block;
`;

export const Span = styled.span`
  font-style: italic;
  display: block;
  opacity: 0.8;
`;