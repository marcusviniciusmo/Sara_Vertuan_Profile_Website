import { useGlobalContext } from "context";
import {} from 'vanilla-tilt';
import { CardProps } from "types/Card";
import { Container, Figure, Content, Name, Role, Text } from "./styles";

export function Card({ card }: CardProps) {
  const { theme } = useGlobalContext();

  return (
    <Container theme={theme} className='data-tilt'> 
      <Figure>
        <img src="a" alt={`${card.role} ${card.name}`} />
      </Figure>

      <Content>
        <Name>{card.name}</Name>
        <Role>{card.role}</Role>
        <Text>{card.text}</Text>
      </Content>
    </Container>
  );
};