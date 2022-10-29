import { useState } from 'react';
import { GlobalContext } from './context';
import { Router } from 'routes';
import { Layout } from 'styles/Layout';
import './index.css';

function App() {
  const [language, setLanguage] = useState<string>('PT');
  const [theme, setTheme] = useState<string>('Dark');

  return (
    <GlobalContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      <Layout theme={theme}>
        <Router />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default App;
