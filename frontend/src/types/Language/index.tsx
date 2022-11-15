export interface LanguageInititalsProps {
  initials: string;
  language: string;
};

export interface LanguageProps {
  language: string;
  data: {
    title: string;
    initials: string;
    countryCode: string;
  }[];
};