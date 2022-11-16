import styled from 'styled-components';

export const Interface = styled.div`
  margin-top: 4rem;
  padding: 4rem 1rem 1rem calc(var(--widthSidebarClosed) + 1rem);

  &.homeInterface {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  &.contactInterface {
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;