import { IconType } from "react-icons/lib";

export interface SocialMediaContainerProps {
  theme: string;
};

export interface SocialMediaProps {
  language: string;
  title: string;
  medias: {
    id: number;
    link: string;
    title: string;
    icon: IconType;
    color: string;
  }[];
};