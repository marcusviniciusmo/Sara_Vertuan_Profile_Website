import { useState } from 'react';
import { GlobalContext } from './context';
import { Router } from 'routes';
import { Layout } from 'styles/Layout';
import './index.css';

function App() {
  const [theme, setTheme] = useState<string>('Dark');

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <Layout theme={theme}>
        <Router />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default App;
