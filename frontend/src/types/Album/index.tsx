export interface AlbumProps {
  language: string;
  image: {
    id: number;
    url: string;
    title: string;
    author: string;
    year: number;
    publisher: string;
    synopsis: string;
    link: string;
  }[];
};