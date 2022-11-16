import { CardProps } from "types/Card";

export interface TestimoniesProps {
  language: string;
  cards: CardProps[];
};

export interface TestimoniesToggleProps {
  theme: string;
};

export interface TestimoniesItemProps {
  cardId: number;
  length: number;
}