import styled from 'styled-components';

interface ToggleProps {
  theme: string;
};

export const Container = styled.ul`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const Toggle = styled.div<ToggleProps>`
  background: var(--background${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  color: var(--colorPrimary${(props) => props.theme === 'Dark' ? 'Light' : 'Dark'});
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 30rem;
  cursor: pointer;
  transition: 0.5s;
  z-index: 9999;
`;

export const Item = styled.li`
  position: absolute;
  list-style: none;
`;