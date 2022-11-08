export interface AlbumProps {
  language: string;
  arrows: {
    prev: string;
    next: string;
  };
  labelSynopsis: string;
  labelPost: string;
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