import styled from 'styled-components';

export const Strong = styled.strong`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 8rem;
  display: block;
  text-transform: uppercase;
`;

export const Button = styled.a`
  all: unset;
  background: var(--bootstrapPrimary);
  color: var(--colorPrimaryDark);
  font-size: 2rem;
  font-weight: bold;
  width: 25rem;
  height: 7rem;
  margin: 0 auto;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;