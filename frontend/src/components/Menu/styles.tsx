import styled from 'styled-components';

interface MenuOptionProps {
  theme: string;
  hasBorder?: boolean; 
};

export const MenuContainer = styled.nav`
  margin-top: 3rem;
  display: grid;
`;

export const MenuOption = styled.div<MenuOptionProps>`
  color: var(--colorPrimary${(props) => props.theme});
  border-top: ${(props) => props.hasBorder && `0.1rem solid var(--colorPrimary${props.theme})`};
  font-size: 1.6rem;
  font-weight: 600;

  line-height: 1;
  height: 6rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  &:hover {
    text-decoration: underline;
    background: var(--hover${(props) => props.theme});
  }
`;