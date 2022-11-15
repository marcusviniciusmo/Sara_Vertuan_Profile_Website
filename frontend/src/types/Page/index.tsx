export interface PageContainerProps {
  className: string;
  url?: string;
};

export interface PageProps {
  id: string;
  className: string;
  url?: string;
  title?: string;
  author?: string;
  publisher?: string;
  year?: string;
  labelSynopsis?: string;
  synopsis?: string;
  labelPost?: string;
  link?: string;
  page?: number;
  lengthAlbum?: number;
};