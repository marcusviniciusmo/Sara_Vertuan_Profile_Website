import { createContext, useContext } from 'react';

interface GlobalContent {
  theme: string;
  setTheme: Function;
  language: string;
  setLanguage: Function;
};

export const GlobalContext = createContext<GlobalContent>({
  theme: '',
  setTheme: () => {},
  language: '',
  setLanguage: () => {}
});

export const useGlobalContext = () => useContext(GlobalContext);