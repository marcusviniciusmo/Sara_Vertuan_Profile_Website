import styled from 'styled-components';

export const ContainerText = styled.div`
  width: 33rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.3rem var(--colorSecondary${(props) => props.theme});
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Title = styled.strong`
  font-size: 2rem;
  text-align: center;
`;

export const Text = styled.span`
  text-align: justify;
  font-size: 1.5rem;
`;