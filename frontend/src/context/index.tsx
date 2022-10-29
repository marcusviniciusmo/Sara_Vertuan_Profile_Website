import { createContext, useContext } from 'react';

interface GlobalContent {
  theme: string;
  setTheme: Function;
};

export const GlobalContext = createContext<GlobalContent>({
  theme: '',
  setTheme: () => {}
});

export const useGlobalContext = () => useContext(GlobalContext);