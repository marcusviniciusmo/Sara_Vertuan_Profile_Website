export interface CardProps {
  card: {
    id: number;
    image: string;
    name: string;
    role: string;
    text: string;
  }
};

export interface CardContainerProps {
  theme: string;
};

export interface CardFigureProps {
  theme: string;
}