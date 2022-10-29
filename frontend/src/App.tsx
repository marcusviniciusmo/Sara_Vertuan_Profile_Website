import { useState } from 'react';
import { GlobalContext } from './context';
import { Router } from 'routes';
import './index.css';

function App() {
  const [theme, setTheme] = useState<string>('Dark');
  
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
