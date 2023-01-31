import { createContext, useState } from 'react';
import './App.css';
import Counter from './containers/Counter/Counter';
import Home from './containers/Home/Home';

export const ThemeContext = createContext(null);

function App() {

  const [active, setActive] = useState("");

  const toggle = () => {
    setActive(active === "" ? "active" : "");
  }

  return (
    <ThemeContext.Provider value={{ active, toggle }}>
      <Home />
      <Counter/>
    </ThemeContext.Provider>
  );
}

export default App;
