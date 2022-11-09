import { CardProps } from "types/Card";

export function Card({ card }: CardProps) {
  return (
    <div>
      Card

      <div>
        <h3>AQUI VAI UMA IMAGEM</h3>
      </div>

      <div>
        <strong>{card.name}</strong>
        <span>{card.role}</span>
        <p>{card.text}</p>
      </div>
    </div>
  );
};