export interface AlbumProps {
  language: string;
  image: {
    url: string;
    description: string;
    link: string;
    post: string;
    author: string;
    year: string;
    publisher: string;
    synopsis: string;
  }[];
};