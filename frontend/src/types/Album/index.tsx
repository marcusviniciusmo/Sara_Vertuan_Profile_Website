export interface AlbumProps {
  language: string;
  image: {
    id: number;
    url: string;
    post: string;
    author: string;
    year: string;
    publisher: string;
    synopsis: string;
    link: string;
  }[];
};