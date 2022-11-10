import styled from 'styled-components';

export const Strong = styled.strong`
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8rem;
`;

export const Button = styled.a`
  all: unset;
  background: #0168D9;
  width: 20rem;
  height: 7rem;
  margin: 0 auto;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    font-weight: bold;
    text-decoration: underline;
  }
`;